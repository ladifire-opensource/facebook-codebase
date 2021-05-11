__d("CometSettingsDropdownList.react", ["ix", "fbt", "CometLegalFooter.react", 
	"CometMenuSeparator.react", "CometOptOutStrings", "CometRelay", 
	"CometSettingsDropdownAppearance.react", "CometSettingsDropdownHeader.react", 
	"CometSettingsDropdownListItem.react", "CometSettingsDropdownQuickHelp.react", 
	"CometSettingsDropdownSettingsAndPrivacy.react", "CometTrialProgramGating", "Locale", 
	"React", "TetraList.react", "TetraListCell.react", "WebPixelRatio", "fbicon", "gkx", 
	"requireCond", "stylex", "useCometCombinedProfileAccountSwitcherListCell.react", 
	"useCometLogout", "useCometReportBug", "useCometTriggerOptOut", "useShouldRenderFullTopNav",
	 "cr:1205224", "cr:1673052", "CometSettingsDropdownListQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("Locale").isRTL(),
		l = b("gkx")("1663500"),
		m = (c = b("cr:1673052")) != null ? c : function() {
			for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
			return {
				args: b,
				cellProps: {},
				itemKey: "profile-account-switcher",
				render: !1
			}
		};

	function a(a) {
		var c = a.onClose,
			d = a.pushPage;
		a = b("useCometReportBug")();
		var e = a[0];
		a = b("useShouldRenderFullTopNav")();
		var f = b("CometRelay").useLazyLoadQuery(i !== void 0 ? i : i = b("CometSettingsDropdownListQuery.graphql"), {
				inProfileSwitcherEntry: l,
				scale: b("WebPixelRatio").get()
			}),
			n = b("useCometLogout").useCometLogout(),
			o = j.useState(!1),
			p = o[0],
			q = o[1];
		o = j.useCallback(function(a) {
			return q(!0)
		}, [q]);
		o = m(f, c, o, p);
		var r = b("useCometCombinedProfileAccountSwitcherListCell.react")(f, d, c),
			s = f.viewer,
			t = b("useCometTriggerOptOut")("SETTINGS_MENU");
		f = (s == null ? void 0 : (f = s.actor) == null ? void 0 : (f = f.profileSwitcherEligibleProfiles) == null ? void 0 : f.count) || 0;
		var u = [l ? null : r, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("497567"), 20),
					size: 36,
					type: "contained-icon"
				},
				addOnSecondary: {
					color: "secondary",
					icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
					type: "icon"
				},
				headline: h._("C\u00e0i \u0111\u1eb7t & quy\u1ec1n ri\u00eang t\u01b0"),
				level: 4,
				onPress: function() {
					d(function(a) {
						a = a.onReturn;
						return j.jsx(b("CometSettingsDropdownSettingsAndPrivacy.react"), {
							onClose: c,
							onReturn: a,
							viewer: s
						})
					})
				},
				testid: "CometSettingsDropdownSettingsAndPrivacy"
			},
			itemKey: "settings-privacy-folder",
			render: a
		}, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("832941"), 20),
					size: 36,
					type: "contained-icon"
				},
				addOnSecondary: {
					color: "secondary",
					icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
					type: "icon"
				},
				headline: h._("M\u00e0n h\u00ecnh & tr\u1ee3 n\u0103ng"),
				level: 4,
				onPress: function() {
					d(function(a) {
						a = a.onReturn;
						return j.jsx(b("CometSettingsDropdownAppearance.react"), {
							onReturn: a,
							pushPage: d
						})
					})
				}
			},
			itemKey: "display-and-accessibility",
			render: a && b("gkx")("1279132")
		}, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("496951"), 20),
					size: 36,
					type: "contained-icon"
				},
				addOnSecondary: {
					color: "secondary",
					icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
					type: "icon"
				},
				headline: h._("Tr\u1ee3 gi\u00fap & h\u1ed7 tr\u1ee3"),
				level: 4,
				onPress: function() {
					d(function(a) {
						a = a.onReturn;
						return j.jsx(b("CometSettingsDropdownQuickHelp.react"), {
							onClose: c,
							onReturn: a
						})
					})
				}
			},
			itemKey: "help-support",
			render: a
		}, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("832941"), 20),
					size: 36,
					type: "contained-icon"
				},
				addOnSecondary: {
					color: "secondary",
					icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
					type: "icon"
				},
				headline: h._("Hi\u1ec3n th\u1ecb t\u00f9y ch\u1ecdn"),
				level: 4,
				onPress: function() {
					d(function(a) {
						a = a.onReturn;
						return j.jsx(b("CometSettingsDropdownAppearance.react"), {
							onReturn: a,
							pushPage: d
						})
					})
				}
			},
			itemKey: "dark-mode",
			render: a && !b("gkx")("1721831") && !b("gkx")("1279132")
		}, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("641698"), 20),
					size: 36,
					type: "contained-icon"
				},
				headline: b("CometOptOutStrings").getOptOutSettingsMenuItemHeader(),
				level: 4,
				onPress: function() {
					t(), c()
				}
			},
			itemKey: "switch-to-classic-facebook",
			render: a && b("CometTrialProgramGating").canOptOutFromSettingsMenu
		}, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("1107405"), 20),
					size: 36,
					type: "contained-icon"
				},
				addOnSecondary: {
					color: "secondary",
					icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
					type: "icon"
				},
				headline: h._("B\u1ea3n d\u1ecbch"),
				level: 4,
				onPress: function() {
					d(function(a) {
						a = a.onReturn;
						return j.jsx(b("cr:1205224"), {
							onClose: c,
							onReturn: a,
							viewer: s
						})
					})
				}
			},
			itemKey: "internationalization",
			render: a && b("cr:1205224") != null
		}, {
			cellProps: {
				addOnPrimary: {
					icon: b("fbicon")._(g("951888"), 20),
					size: 36,
					type: "contained-icon"
				},
				dataAttributes: {
					nocookies: "true"
				},
				headline: h._("\u0110\u0103ng xu\u1ea5t"),
				level: 4,
				onPress: function() {
					n(), c()
				},
				testid: "CometLogoutButton"
			},
			itemKey: "log-out",
			render: !0
		}].filter(function(a) {
			return a == null ? void 0 : a.render
		}).filter(Boolean);
		return j.jsxs("div", {
			className: "aov4n071",
			children: [a ? j.jsxs(j.Fragment, {
				children: [j.jsx(b("CometSettingsDropdownHeader.react"), {
					onClick: c,
					selected: !p && f > 0,
					viewer: s
				}), l && f > 1 ? j.jsx(b("CometSettingsDropdownListItem.react"), {
					cellProps: o.cellProps,
					itemKey: o.itemKey,
					position: 0,
					selected: p
				}) : null, l && f > 0 ? j.jsx(b("CometSettingsDropdownListItem.react"), {
					cellProps: r.cellProps,
					itemKey: r.itemKey,
					position: f > 1 ? 1 : 0,
					selected: !1
				}) : null, j.jsx(b("CometMenuSeparator.react"), {}), j.jsx(b("CometSettingsDropdownListItem.react"), {
					cellProps: {
						addOnPrimary: {
							icon: b("gkx")("678680") ? b("fbicon")._(g("530509"), 20) : b("fbicon")._(g("693172"), 20),
							shape: "circle",
							size: 36,
							type: "contained-icon"
						},
						body: h._("G\u00f3p ph\u1ea7n c\u1ea3i thi\u1ec7n phi\u00ean b\u1ea3n Facebook m\u1edbi."),
						headline: b("gkx")("678680") ? h._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1") : h._("\u0110\u00f3ng g\u00f3p \u00fd ki\u1ebfn"),
						level: 4,
						onPress: function() {
							c(), e()
						}
					},
					itemKey: "give-feedback",
					position: l ? f > 1 ? 2 : 1 : 0,
					selected: !1
				}), j.jsx(b("CometMenuSeparator.react"), {})]
			}) : null, j.jsx("div", {
				className: "a8nywdso sj5x9vvc rz4wbd8a ecm0bbzt",
				children: j.jsx(b("TetraList.react"), {
					items: u,
					children: function(a) {
						var c, d = a.item,
							e = d.cellProps;
						d = d.itemKey;
						a = a.props;
						var f = e.addOnSecondary;
						c = (c = a.key) != null ? c : -1;
						f = f != null && f.value != null ? f.value : !1;
						return j.jsx(b("CometSettingsDropdownListItem.react"), {
							cellProps: e,
							itemKey: d,
							position: c,
							selected: f
						}, a.key)
					}
				})
			}), j.jsx("div", {
				className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
				children: j.jsx(b("CometLegalFooter.react"), {})
			})]
		})
	}
}), null);