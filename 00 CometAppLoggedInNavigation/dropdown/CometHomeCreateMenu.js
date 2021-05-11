__d("CometHomeCreateMenu.react", ["ix", "fbt", "CometLeftRailHeader.react", 
	"CometMenuSeparator.react", "CometRelay", "CometScrollableArea.react", 
	"CometTopNavListDropdown.react", "FundraiserCreateUrlUtils", "React", 
	"RoomsGating", "StoriesGating", "TetraListCell.react", 
	"XCometCreateAdControllerRouteBuilder", 
	"XCometEventCreateControllerRouteBuilder", 
	"XCometGroupsTabControllerRouteBuilder", 
	"XCometJobsComposerControllerRouteBuilder", 
	"XCometMarketplaceComposerControllerRouteBuilder", 
	"XCometPageCreationControllerRouteBuilder", "emptyFunction", 
	"fbicon", "gkx", "logCometFunnelEvent", "qex", "recoverableViolation", 
	"requireCond", "requireDeferred", "stylex", "useLifeEventsComposerDialog", 
	"useRoomsCreateDialog", "useTopNavigationLogging", "uuid", "cr:1705275", 
	"CometHomeCreateMenuQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = b("React"),
		l = b("requireDeferred")("CometHomeJobsLogger"),
		m = b("requireDeferred")("CometMarketplaceLogger"),
		n = b("requireDeferred")("RoomCreationFlowStartFalcoEvent");

	function o(a) {
		if (a !== "group") return;
		b("logCometFunnelEvent").logCometFunnelEvent("GroupsCometFeedWebFunnelDefinition", "[click][lhc][create menu][group]")
	}

	function p(a) {
		if (a !== "job") return;
		l.load().then(function(a) {
			a = new a();
			a.logCometHomeCreateMenuJobsButtonClick()
		})["catch"](b("emptyFunction"))
	}

	function q(a) {
		var c = a.item,
			d = a.onClose;
		a = a.position;
		a = b("useTopNavigationLogging").useCreateItemLoggingCallbacks(c.itemKey, a);
		var e = a[0];
		a = a[1];
		var f = k.useCallback(function(a) {
			d();
			if (c.type === "item") {
				var b = c.cellProps != null ? c.cellProps.onPress : null;
				b && b(a)
			}
			e();
			o(c.itemKey);
			p(c.itemKey)
		}, [c, e, d]);
		return c.type === "separator" ? k.jsx(b("CometMenuSeparator.react"), {}) : k.jsx(b("TetraListCell.react"), babelHelpers["extends"]({}, c.cellProps, {
			level: 4,
			onPress: f,
			ref: a
		}))
	}
	var r = {
		root: {
			paddingTop: "ecm0bbzt",
			paddingEnd: "rz4wbd8a",
			paddingBottom: "sj5x9vvc",
			paddingStart: "a8nywdso"
		},
		scrollableArea: {
			maxHeight: "t1wsaese",
			maxWidth: "h77mwsce"
		},
		scrollableAreaWidth: {
			width: "o36gj0jk"
		}
	};

	function a(a) {
		var c = a.onClose,
			d = a.showComposerDialog;
		b("logCometFunnelEvent").useLogCometFunnelImpressionEvent("GroupsCometFeedWebFunnelDefinition", "[impression][lhc][create menu][group]");
		a = b("useLifeEventsComposerDialog")("COMPOSER");
		var e = a[0];
		a = b("useRoomsCreateDialog")();
		var f = a.showDialog,
			o = b("CometRelay").useLazyLoadQuery(i !== void 0 ? i : i = b("CometHomeCreateMenuQuery.graphql"), {});
		a = k.useMemo(function() {
			var a, i, j, p;
			a = (a = o == null ? void 0 : (a = o.viewer) == null ? void 0 : a.can_create_page) != null ? a : !1;
			i = (o == null ? void 0 : (i = o.viewer) == null ? void 0 : (i = i.account_user) == null ? void 0 : i.should_use_page_rename) === !0;
			var r = b("FundraiserCreateUrlUtils").getCreateFundraiserUrl(null, "blue_bar_create_menu"),
				s = r != null,
				t = b("gkx")("699938"),
				u = b("RoomsGating").shouldShowRoomsInCreateMenu(),
				v = !u;
			j = Boolean(o == null ? void 0 : (j = o.viewer) == null ? void 0 : (j = j.job_search_settings) == null ? void 0 : j.can_viewer_create_any_job) && !t && !s && b("qex")._("1771801");
			var w = "";
			Boolean(j) && (w = b("XCometJobsComposerControllerRouteBuilder").buildURL({
				job_opening_create_surface: "JOBS",
				source: "comet_create_entrypoint"
			}), l.load().then(function(a) {
				a = new a();
				a.logCometHomeCreateMenuJobsButtonImpression()
			})["catch"](b("emptyFunction")));
			p = (p = o.lwi) == null ? void 0 : p.should_direct_to_lwi;
			p == null && (b("recoverableViolation")("shouldDirectToLWI is null", "pages_lwi"), p = !1);
			return [{
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("507172"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("Chia s\u1ebb b\u00e0i vi\u1ebft tr\u00ean B\u1ea3ng tin."),
					headline: h._("\u0110\u0103ng"),
					onPress: function() {
						d()
					}
				},
				itemKey: "post",
				render: !0,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("1160717"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: b("StoriesGating").getCreationDescription(),
					headline: h._("Tin"),
					linkProps: {
						passthroughProps: {
							entryPoint: "add_to_story_homebase_shortcut",
							sourceSurface: "home_screen_shortcut"
						},
						target: "_self",
						url: b("StoriesGating").isAddToStoryEnabled() ? b("cr:1705275") == null ? void 0 : b("cr:1705275").buildURL({}) : void 0
					}
				},
				itemKey: "story",
				render: b("StoriesGating").isAddToStoryEnabled(),
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("1388374"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("Chat video v\u1edbi b\u1ea5t k\u1ef3 ai tr\u00ean ho\u1eb7c b\u00ean ngo\u00e0i Facebook, kh\u00f4ng gi\u1edbi h\u1ea1n th\u1eddi gian."),
					headline: h._("Ph\u00f2ng h\u1ecdp m\u1eb7t"),
					onPress: function() {
						n.load().then(function(a) {
							a.log(function() {
								return {
									session_ids: {
										funnel_session_id: b("uuid")()
									},
									source: "comet_create_menu"
								}
							})
						})["catch"](b("emptyFunction")), f({
							loggingData: {
								source: "comet_create_menu"
							}
						})
					}
				},
				itemKey: "rooms",
				render: u,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("481240"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: i ? h._("Th\u00eam s\u1ef1 ki\u1ec7n trong \u0111\u1eddi v\u00e0o Trang.") : h._("Th\u00eam s\u1ef1 ki\u1ec7n trong \u0111\u1eddi v\u00e0o trang c\u00e1 nh\u00e2n."),
					headline: h._("S\u1ef1 ki\u1ec7n trong \u0111\u1eddi"),
					onPress: function() {
						e()
					}
				},
				itemKey: "life-event",
				render: v,
				type: "item"
			}, {
				itemKey: "separator",
				render: !0,
				type: "separator"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("490492"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("K\u1ebft n\u1ed1i v\u00e0 chia s\u1ebb v\u1edbi kh\u00e1ch h\u00e0ng ho\u1eb7c fan."),
					headline: h._("Trang"),
					linkProps: {
						target: "_self",
						url: b("XCometPageCreationControllerRouteBuilder").buildURL({
							ref_type: "comet_home"
						})
					}
				},
				itemKey: "page",
				render: a,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("534262"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("Qu\u1ea3ng c\u00e1o doanh nghi\u1ec7p, th\u01b0\u01a1ng hi\u1ec7u ho\u1eb7c t\u1ed5 ch\u1ee9c c\u1ee7a b\u1ea1n."),
					headline: h._("Qu\u1ea3ng c\u00e1o"),
					linkProps: {
						rel: "noopener",
						target: p && b("gkx")("1626296") ? "_self" : "_blank",
						url: b("XCometCreateAdControllerRouteBuilder").buildURL({})
					}
				},
				itemKey: "ad",
				render: !0,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("510947"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: b("gkx")("1099151") ? h._("K\u1ebft n\u1ed1i v\u1edbi nh\u1eefng ng\u01b0\u1eddi c\u00f9ng chung s\u1edf th\u00edch.") : h._("T\u00ecm ng\u01b0\u1eddi c\u00f3 chung s\u1edf th\u00edch."),
					headline: h._("Nh\u00f3m"),
					linkProps: {
						preventLocalNavigation: !1,
						target: "_self",
						url: b("XCometGroupsTabControllerRouteBuilder").buildURL({
							category: "create"
						})
					},
					onPress: function(a) {
						a.type !== "press" && a.preventDefault()
					}
				},
				itemKey: "group",
				render: !0,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("640913"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("G\u1eafn k\u1ebft m\u1ecdi ng\u01b0\u1eddi th\u00f4ng qua s\u1ef1 ki\u1ec7n ri\u00eang t\u01b0 ho\u1eb7c c\u00f4ng khai."),
					headline: h._("S\u1ef1 ki\u1ec7n"),
					linkProps: {
						url: b("XCometEventCreateControllerRouteBuilder").buildURL({
							acontext: JSON.stringify({
								event_action_history: [{
									mechanism: "surface",
									surface: "home"
								}]
							})
						})
					}
				},
				itemKey: "event",
				render: !0,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("556467"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("B\u00e1n h\u00e0ng cho ng\u01b0\u1eddi trong c\u1ed9ng \u0111\u1ed3ng c\u1ee7a b\u1ea1n."),
					headline: h._("B\u00e0i ni\u00eam y\u1ebft tr\u00ean Marketplace"),
					linkProps: {
						url: b("XCometMarketplaceComposerControllerRouteBuilder").buildURL({
							listing_type: "item"
						})
					},
					onPress: function() {
						m.load().then(function(a) {
							a.logClick("create_menu", null, null, {
								composerEntrypoint: "create_menu",
								composerMode: "create"
							})
						})["catch"](b("emptyFunction"))
					}
				},
				itemKey: "marketplace-listing",
				render: t,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("510954"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("Quy\u00ean ti\u1ec1n cho m\u1ee5c \u0111\u00edch x\u00e3 h\u1ed9i m\u00e0 b\u1ea1n quan t\u00e2m."),
					headline: h._("Chi\u1ebfn d\u1ecbch g\u00e2y qu\u1ef9"),
					linkProps: {
						target: "_self",
						url: (u = r) != null ? u : ""
					}
				},
				itemKey: "fundraiser",
				render: s,
				type: "item"
			}, {
				cellProps: {
					addOnPrimary: {
						icon: b("fbicon")._(g("481905"), 20),
						size: 36,
						type: "contained-icon"
					},
					body: h._("\u0110\u0103ng tin tuy\u1ec3n d\u1ee5ng v\u00e0 ti\u1ebfp c\u1eadn mi\u1ec5n ph\u00ed nh\u1eefng \u1ee9ng vi\u00ean quanh \u0111\u00e2y."),
					headline: h._("Vi\u1ec7c l\u00e0m"),
					linkProps: {
						target: "_self",
						url: w
					}
				},
				itemKey: "job",
				render: Boolean(j),
				type: "item"
			}].filter(function(a) {
				return a == null ? void 0 : a.render
			}).map(function(a, b) {
				return k.jsx(q, {
					item: a,
					onClose: c,
					position: b
				}, a.itemKey)
			})
		}, [o == null ? void 0 : (a = o.viewer) == null ? void 0 : a.can_create_page, o == null ? void 0 : (a = o.viewer) == null ? void 0 : (a = a.account_user) == null ? void 0 : a.should_use_page_rename, o == null ? void 0 : (a = o.viewer) == null ? void 0 : (a = a.job_search_settings) == null ? void 0 : a.can_viewer_create_any_job, (a = o.lwi) == null ? void 0 : a.should_direct_to_lwi, d, f, e, c]);
		return k.jsx(b("CometTopNavListDropdown.react"), {
			label: h._("T\u1ea1o"),
			name: "CreateMenu",
			children: k.jsx(b("CometTopNavListDropdown.react").Card, {
				testid: void 0,
				children: k.jsxs(b("CometScrollableArea.react"), {
					xstyle: [r.scrollableArea, r.scrollableAreaWidth],
					children: [k.jsx(b("CometLeftRailHeader.react"), {
						title: h._("T\u1ea1o")
					}), k.jsx("div", {
						className: (j || (j = b("stylex")))(r.root),
						children: a
					})]
				})
			})
		})
	}
}), null);