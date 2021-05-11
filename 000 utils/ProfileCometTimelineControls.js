__d("ProfileCometTimelineControls.react", ["ix", "fbt", "BaseRow.react", 
	"BaseRowItem.react", "CometCard.react", "CometCardedDialogLoadingState.react", 
	"CometLazyDialogTrigger.react", "CometRow.react", "CometRowItem.react", 
	"CometTransientDialogProvider.react", "JSResource", "ProfileCometPostFiltersDialogContext", 
	"ProfileCometPostFiltersDialogReducer", "ProfileCometTimelineViewSwitcherTab.react",
	 "ProfileCometURIUtils", "React", "TetraButton.react", "TetraTextPairing.react", 
	 "fbicon", "stylex", "useProfileEngagementClickCallback", 
	 "useProfileEngagementImpression"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("JSResource")("ProfileCometPostFiltersDialog.react").__setRef("ProfileCometTimelineControls.react"),
		l = b("JSResource")("ProfileCometManagePostsDialog.react").__setRef("ProfileCometTimelineControls.react"),
		m = {
			buttons: {
				display: "j83agx80",
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05"
			},
			divider: {
				borderTop: "l6v480f0"
			},
			managePostsButton: {
				marginStart: "h676nmdw"
			},
			root: {
				marginBottom: "sjgh65i0"
			},
			viewSwitcherTabContainer: {
				marginEnd: "tvfksri0",
				marginStart: "ozuftl9m"
			}
		};

	function a(a) {
		var c = a.instructions,
			d = a.isViewingSelf,
			e = a.shouldHideManagePostsButton,
			f = a.shouldHidePostedByFilters,
			n = a.shouldHidePrivacyFilter,
			o = a.shouldHideViewSwitcher,
			p = a.userID;
		a = a.viewType;
		var q = j.useCallback(function (a) {
				return j.jsx(b("CometCardedDialogLoadingState.react"), {
					onClose: a,
					title: h._("B\u1ed9 l\u1ecdc b\u00e0i vi\u1ebft"),
					withCloseButton: !0
				})
			}, []),
			r = j.useCallback(function (a) {
				return j.jsx(b("CometCardedDialogLoadingState.react"), {
					onClose: a,
					title: h._("Qu\u1ea3n l\u00fd b\u00e0i vi\u1ebft"),
					withCloseButton: !0
				})
			}, []),
			s = j.useReducer(b("ProfileCometPostFiltersDialogReducer").reducer, b("ProfileCometPostFiltersDialogReducer").getInitialState(f)),
			t = s[0],
			u = s[1];
		s = b("ProfileCometURIUtils").useURIForProfile();
		var v = b("ProfileCometURIUtils").useURIForProfileSection("grid"),
			w = j.useMemo(function () {
				return {
					dispatchAction: u,
					state: t
				}
			}, [t]);
		d = {
			event_metadata: {
				entry_point: "comet"
			},
			item_subtype: d ? "self" : "nonself",
			item_type: "post_filters_button",
			product_bucket: "profile_core",
			surface: "timeline"
		};
		var x = b("useProfileEngagementImpression")(d),
			y = b("useProfileEngagementClickCallback")(d);
		return j.jsx("div", {
			className: (i || (i = b("stylex")))(m.root),
			children: j.jsxs(b("CometCard.react"), {
				background: "white",
				dropShadow: 1,
				children: [j.jsxs(b("CometRow.react"), {
					paddingTop: 0,
					children: [j.jsx(b("CometRowItem.react"), {
						verticalAlign: "center",
						children: j.jsx(b("TetraTextPairing.react"), {
							headline: h._("B\u00e0i vi\u1ebft"),
							isSemanticHeading: !0,
							level: 2
						})
					}), j.jsx(b("CometRowItem.react"), {
						verticalAlign: "center",
						children: j.jsx("div", {
							className: i(m.buttons),
							children: j.jsx(b("ProfileCometPostFiltersDialogContext").Provider, {
								value: w,
								children: j.jsxs(b("CometTransientDialogProvider.react"), {
									children: [j.jsx("div", {
										ref: x,
										children: j.jsx(b("CometLazyDialogTrigger.react"), {
											dialogProps: {
												instructions: c,
												shouldHidePostedByFilters: f,
												shouldHidePrivacyFilter: n
											},
											dialogResource: k,
											fallback: q,
											children: function (a, c, d) {
												return j.jsx(b("TetraButton.react"), {
													icon: b("fbicon")._(g("500218"), 16),
													label: h._("B\u1ed9 l\u1ecdc"),
													onHoverIn: d,
													onPress: function () {
														y(), a()
													},
													ref: c,
													type: "secondary"
												})
											}
										})
									}), !e && j.jsx("div", {
										className: (i || (i = b("stylex")))(m.managePostsButton),
										children: j.jsx(b("CometLazyDialogTrigger.react"), {
											dialogProps: {
												instructions: c,
												shouldHidePostedByFilters: f,
												shouldHidePrivacyFilter: n,
												userID: p
											},
											dialogResource: l,
											fallback: r,
											children: function (a, c, d) {
												return j.jsx(b("TetraButton.react"), {
													icon: b("fbicon")._(g("497566"), 16),
													label: h._("Qu\u1ea3n l\u00fd b\u00e0i vi\u1ebft"),
													onHoverIn: d,
													onPress: a,
													ref: c,
													testid: void 0,
													type: "secondary"
												})
											}
										})
									})]
								})
							})
						})
					})]
				}), !o && j.jsxs(j.Fragment, {
					children: [j.jsx("div", {
						className: (i || (i = b("stylex")))(m.divider)
					}), j.jsxs(b("BaseRow.react"), {
						role: "tablist",
						xstyle: m.viewSwitcherTabContainer,
						children: [j.jsx(b("BaseRowItem.react"), {
							expanding: !0,
							children: j.jsx(b("ProfileCometTimelineViewSwitcherTab.react"), {
								icon: b("fbicon")._(g("533527"), 16),
								label: h._("Xem theo danh s\u00e1ch"),
								linkProps: {
									routeTarget: "self",
									url: s
								},
								selected: a === "list",
								testid: void 0
							})
						}), j.jsx(b("BaseRowItem.react"), {
							expanding: !0,
							children: j.jsx(b("ProfileCometTimelineViewSwitcherTab.react"), {
								icon: b("fbicon")._(g("531309"), 16),
								label: h._("Ch\u1ebf \u0111\u1ed9 xem l\u01b0\u1edbi"),
								linkProps: {
									routeTarget: "self",
									url: v
								},
								selected: a === "grid",
								testid: void 0
							})
						})]
					})]
				})]
			})
		})
	}
}), null);