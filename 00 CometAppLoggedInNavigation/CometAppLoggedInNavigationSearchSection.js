__d("CometAppLoggedInNavigationSearchSection.react", ["LegacyHidden", "React",
 "SearchCometGlobalTypeaheadWithBackButtonFocus.react", "gkx", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			layoutStartSearch: {
				boxSizing: "rq0escxv",
				height: "byvelhso",
				maxWidth: "q10oee1b",
				position: "poy2od1o",
				start: "j9ispegn",
				top: "kr520xx4",
				width: "ooia0uwo",
				zIndex: "kavbgo14"
			},
			layoutStartSearchFocused: {
				width: "ajzd4i4n",
				zIndex: "ru5i1254"
			},
			layoutStartSearchFocusedOnNotHome: {
				width: "o36gj0jk"
			},
			layoutStartSearchInputBlurred: {
				cursor: "nhd2j8a9"
			},
			layoutStartSearchInputBlurredAndPossiblyExpanded: {
				cursor: "o6r2urh6",
				"@media (max-width: 1259px)": {
					cursor: "rmlgq0sb"
				}
			},
			layoutStartSearchInputFocused: {
				cursor: "o6r2urh6"
			},
			layoutStartSearchOnHome: {
				"@media (min-width: 1260px)": {
					width: "mhnrfdw6"
				}
			},
			layoutStartSearchOnHomeAndMatchLeftRail: {
				"@media (min-width: 1260px)": {
					width: "ekbqdzos"
				}
			},
			layoutStartSearchOnSearch: {
				"@media (min-width: 1260px)": {
					width: "ekbqdzos"
				}
			},
			layoutStartSearchOpened: {
				backgroundColor: "cwj9ozl2"
			}
		};

	function a(a) {
		var c = a.handleCloseSearch,
			d = a.handleOpenSearch,
			e = a.initialGlobalSearchQuery,
			f = a.isHome,
			j = a.isSearchOpened,
			k = a.shouldHideGlobalTypeahead,
			l = a.showGlobalTypeaheadExpandedOutsideHome;
		return h.jsx(b("SearchCometGlobalTypeaheadWithBackButtonFocus.react"), {
			inputBlurredXStyle: f || !!e ? i.layoutStartSearchInputBlurredAndPossiblyExpanded : i.layoutStartSearchInputBlurred,
			inputFocusedXStyle: i.layoutStartSearchInputFocused,
			onClose: c,
			onOpen: d,
			queryString: e,
			children: function (a, c) {
				return h.jsx(b("LegacyHidden"), {
					htmlAttributes: {
						"aria-hidden": k,
						className: (g || (g = b("stylex")))(i.layoutStartSearch, a || j ? i.layoutStartSearchFocused : null, (a || j) && !f ? i.layoutStartSearchFocusedOnNotHome : null, f && !b("gkx")("1757220") ? i.layoutStartSearchOnHome : null, f && b("gkx")("1757220") ? i.layoutStartSearchOnHomeAndMatchLeftRail : null, !!e || l ? i.layoutStartSearchOnSearch : null, j ? i.layoutStartSearchOpened : null)
					},
					mode: k ? "hidden" : "visible",
					children: c
				})
			}
		})
	}
}), null);