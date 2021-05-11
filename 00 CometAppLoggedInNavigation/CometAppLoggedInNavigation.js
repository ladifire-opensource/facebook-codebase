__d("CometAppLoggedInNavigation.react", ["CometAppNavigationEndSection.react", 
	"CometAppNavigationEndSectionItem.react", "CometBaseAppNavigation.react",
	 "CometPagesNuxStateContainer.react", "CometProfileNavigationLink.react", 
	 "CometProfileNavigationLinkWithTooltip.react", 
	 "CometProfilePlusAPPageInboxMessageButton.react", 
	 "CometRouterPushViewStackContext", "CometSettingsDropdownTrigger.react", 
	 "CometTabBarProfileIconConfig", "CometTopNavLogoWithBackButton.react", 
	 "MWJewelDropdownTrigger.react", "ProfilePlusMessaging", "React", 
	 "getGlobalSearchQueryFromRouterState", "getTopMostRoute", "qex", 
	 "requireCond", "unrecoverableViolation", "useCometEntityKey", "useCometRouterDispatcher", 
	 "useCometRouterState", "usePrevious", "useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome", 
	 "useShouldRenderFullTopNav", "useShouldShowMessagingEntrypointInCometRoot", "cr:1528736", "cr:1694459", 
	 "cr:1448738", "cr:1266079", "cr:1653853", "cr:1567348"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = c;
	var g = b("React"),
		h = (d = b("cr:1653853")) != null ? d : function () {
			return {
				hideProfileNavigationLink: !1,
				profilePictureUriForSettings: null
			}
		},
		i = (f = b("ProfilePlusMessaging").mailboxID) != null ? f : "",
		j = b("ProfilePlusMessaging").shouldRedirectMessagesForAP && i !== null,
		k = g.memo(a);

	function a() {
		return j ? g.jsx(b("CometProfilePlusAPPageInboxMessageButton.react"), {
			mailboxID: i
		}) : g.jsx(b("MWJewelDropdownTrigger.react"), {})
	}

	function c() {
		var a = b("useCometRouterState")();
		if (a == null) throw b("unrecoverableViolation")("Cannot render comet app with no route provider", "comet_infra");
		var c = g.useState(!1),
			d = c[0],
			e = c[1];
		c = h();
		var f = b("useShouldShowMessagingEntrypointInCometRoot")("JEWEL"),
			i = a.main.route.tabKey === "home",
			j = a.main.route.tabKey === "notifications",
			l = b("getTopMostRoute")(a).tabKey === "profile",
			m = b("getTopMostRoute")(a).tabKey === "friends",
			n = b("useCometEntityKey")();
		n = (n == null ? void 0 : n.entity_type) === "pages" && ((n == null ? void 0 : n.section) === "your_pages" || (n == null ? void 0 : n.section) === "your_pages_original");
		var o = b("useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome")(),
			p = b("useCometRouterDispatcher")(),
			q = g.useCallback(function () {
				p != null && p.goBack()
			}, [p]),
			r = g.useCallback(function () {
				p != null && p.popPushView()
			}, [p]),
			s = g.useContext(b("CometRouterPushViewStackContext")),
			t = s != null && s.length > 0;
		s = s != null ? s[s.length - 1] : null;
		var u = b("usePrevious")(s),
			v = t;
		u = (s = s == null ? u == null ? void 0 : (u = u.route) == null ? void 0 : u.useCloseButton : s == null ? void 0 : (u = s.route) == null ? void 0 : u.useCloseButton) != null ? s : !1;
		a = (s = b("getGlobalSearchQueryFromRouterState")(a)) != null ? s : "";
		s = b("useShouldRenderFullTopNav")();
		var w = function () {
				return e(!0)
			},
			x = function () {
				return e(!1)
			},
			y = b("qex")._("1682420"),
			z = b("qex")._("1694460");
		z = y === "settings" || z === "settings";
		y = y === "next_to_settings";
		var A = z || y,
			B = null;
		z ? B = b("CometTabBarProfileIconConfig").src : c.hideProfileNavigationLink === !0 && (B = c.profilePictureUriForSettings);
		return g.jsx(b("CometPagesNuxStateContainer.react"), {
			children: g.jsx(b("CometBaseAppNavigation.react"), {
				endSection: g.jsxs(b("CometAppNavigationEndSection.react"), {
					children: [g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						noWrapper: !0,
						children: g.jsx(b("CometSettingsDropdownTrigger.react"), {
							isYourPagesTab: n,
							profilePictureUri: B
						})
					}), s && y && !c.hideProfileNavigationLink ? g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						widePivotLink: !0,
						children: g.jsx(b("CometProfileNavigationLinkWithTooltip.react"), {})
					}) : null, s && b("cr:1266079") != null ? g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						children: g.jsx(b("cr:1266079"), {
							isNotifications: j
						})
					}) : null, f ? g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						children: g.jsx(k, {})
					}) : null, s && b("cr:1448738") != null ? g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						children: g.jsx(b("cr:1448738"), {})
					}) : null, s && c.hideProfileNavigationLink !== !0 && !A ? g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						displayNone: t,
						widePivotLink: !0,
						children: g.jsx(b("CometProfileNavigationLink.react"), {
							isProfileTab: l
						})
					}) : null, b("cr:1694459") != null ? g.jsx(b("CometAppNavigationEndSectionItem.react"), {
						displayNone: t,
						widePivotLink: !0,
						children: g.jsx(b("cr:1694459"), {
							isActive: m
						})
					}) : null]
				}),
				searchSection: s && b("cr:1528736") ? g.jsx(b("cr:1528736"), {
					handleCloseSearch: x,
					handleOpenSearch: w,
					initialGlobalSearchQuery: a,
					isHome: i,
					isSearchOpened: d,
					shouldHideGlobalTypeahead: t,
					showGlobalTypeaheadExpandedOutsideHome: o
				}) : null,
				startButtons: g.jsx(b("CometTopNavLogoWithBackButton.react"), {
					logoHidden: d,
					logoWithShadow: t,
					onPressBackButton: u ? r : q,
					shouldUseCloseButton: u,
					showBackButton: v
				}),
				tabBar: g.jsx(b("cr:1567348"), {
					inert: t
				})
			})
		})
	}
}), null);