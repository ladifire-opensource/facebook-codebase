__d("CometNotificationsListWrapper.react", ["ix", "fbt", "CometLeftRailHeader.react", "CometLeftRailNewContentPill.react", "CometNotificationsActionsButton.react", "CometNotificationsContext", "CometNotificationsList.react", "CometNotificationsListItemSeenContext", "CometNotificationsRenderLocations", "CometProductAttributionContextProvider.react", "CometRelay", "CometRouterDispatcherContextFactory.react", "CometScrollView.react", "CometTooltip.react", "CometTopNavListDropdown.react", "React", "TetraCircleButton.react", "XCometNotificationsControllerRouteBuilder", "fbicon", "gkx", "mergeRefs", "qex", "requireCond", "requireDeferred", "setTimeout", "stylex", "useVisibilityObserver", "cr:1615255", "CometNotificationsListWrapper_viewer.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("requireDeferred")("NotifSeeAllFalcoEvent");

	function l(a, c) {
		if (c === "mark_all_as_read") {
			var d = function() {
				a.notificationsListRef.current != null && a.notificationsListRef.current.markAllNotificationsAsRead != null && a.notificationsListRef.current.markAllNotificationsAsRead()
			};
			return j.jsx("div", {
				className: "dflh9lhu",
				children: j.jsx(b("CometTooltip.react"), {
					tooltip: "Mark All as Read",
					children: j.jsx(b("TetraCircleButton.react"), {
						color: "secondary",
						icon: b("fbicon")._(g("477820"), 20),
						label: h._("\u0110\u00e1nh d\u1ea5u t\u1ea5t c\u1ea3 l\u00e0 \u0111\u00e3 \u0111\u1ecdc"),
						onPress: d,
						size: 32,
						testid: void 0,
						type: "deemphasized"
					})
				})
			})
		} else if (c === "see_all_notifications" && !a.isNotificationsRail && b("XCometNotificationsControllerRouteBuilder") != null) return j.jsx("div", {
			className: "dflh9lhu",
			children: j.jsx(b("CometTooltip.react"), {
				tooltip: "Open Notifications",
				children: j.jsx(b("TetraCircleButton.react"), {
					color: "secondary",
					icon: b("fbicon")._(g("1529371"), 20),
					label: h._("M\u1edf th\u00f4ng b\u00e1o"),
					linkProps: {
						url: b("XCometNotificationsControllerRouteBuilder").buildURL({})
					},
					onPress: function() {
						a.onSeeAllClick && a.onSeeAllClick(), k.onReady(function(b) {
							b = b.log;
							return b(function() {
								return {
									notification_data: {
										user_id: a.actorId
									},
									ref: "www_tab"
								}
							})
						})
					},
					size: 32,
					testid: void 0,
					type: "deemphasized"
				})
			})
		});
		return null
	}

	function a(a) {
		var c, d = j.useRef(null),
			e = j.useContext(b("CometNotificationsContext")),
			f = e.renderLocation === b("CometNotificationsRenderLocations").DROPDOWN;
		e = e.renderLocation === b("CometNotificationsRenderLocations").RAIL;
		var g = j.useRef(null),
			k = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometNotificationsListWrapper_viewer.graphql"), a.viewer),
			m = (c = k == null ? void 0 : (c = k.new_notification) == null ? void 0 : c.id) != null ? c : null;
		c = (c = k == null ? void 0 : (c = k.actor) == null ? void 0 : c.id) != null ? c : null;
		var n = j.useState(!0),
			o = n[0],
			p = n[1];
		n = b("qex")._("1606027");
		j.useEffect(function() {
			!b("gkx")("1587829") && m != null && p(!1)
		}, [m]);
		var q = j.useState(m),
			r = q[0],
			s = q[1];
		q = j.useState(!0);
		var t = q[0],
			u = q[1],
			v = b("useVisibilityObserver")({
				onHidden: function(a) {
					a = a.hiddenReason;
					a !== "COMPONENT_UNMOUNTED" && u(!1)
				},
				onVisible: function() {
					return u(!0)
				}
			}),
			w = j.useRef(!1);
		q = j.useMemo(function() {
			return b("mergeRefs")(g, v)
		}, [g, v]);
		var x = j.useCallback(function() {
				g.current && g.current.scrollIntoView({
					behavior: "smooth",
					block: "start"
				}), w.current = !1, b("gkx")("1587829") && s(m)
			}, [m]),
			y = b("gkx")("1587829") ? m !== r && !t : !o && !t;
		o = j.useCallback(function() {
			if (!y) return;
			if (w.current === !1) {
				b("setTimeout")(function() {
					w.current = !0
				}, 100);
				return
			}
			b("gkx")("1587829") && r !== m && s(m);
			w.current = !1
		}, [m, r, y]);
		t = y ? j.jsx(b("CometLeftRailNewContentPill.react"), {
			onClick: x,
			children: h._("Xem th\u00f4ng b\u00e1o m\u1edbi")
		}) : null;
		x = j.useCallback(function(a) {
			!b("gkx")("1587829") && a === m && p(!0)
		}, [m]);
		var z = j.useState("All"),
			A = z[0];
		z = z[1];
		return j.jsxs(j.Fragment, {
			children: [j.jsx(b("CometTopNavListDropdown.react").Card, {
				testid: void 0,
				useFullWidth: e,
				useMaxHeight: f,
				children: j.jsxs(b("CometScrollView.react"), {
					onScroll: o,
					showsHorizontalScrollIndicator: !1,
					children: [j.jsx("div", {
						className: "kr520xx4 pmk7jnqg ay7djpcl n7fi1qx3",
						ref: q
					}, "firstChildScrollAnchor"), j.jsx(b("CometLeftRailHeader.react"), {
						auxiliary: j.jsxs("div", {
							className: "sv5sfqaa obtkqiv7 j83agx80",
							children: [l({
								actorId: c,
								isNotificationsRail: e,
								notificationsListRef: d,
								onSeeAllClick: a.onClose
							}, n), j.jsx(b("CometNotificationsActionsButton.react"), {
								actorId: c,
								experiment: n,
								notificationsListRef: d,
								onSeeAllClick: a.onClose
							})]
						}),
						disableProportional: !0,
						title: h._("Th\u00f4ng b\u00e1o")
					}), b("cr:1615255") != null && j.jsx(b("cr:1615255"), {
						actorId: c,
						selected: A,
						setSelected: z
					}), j.jsx(b("CometProductAttributionContextProvider.react"), {
						value: "notifications",
						children: j.jsx(b("CometNotificationsListItemSeenContext").Provider, {
							value: x,
							children: j.jsx(b("CometRouterDispatcherContextFactory.react"), {
								actorID: null,
								children: j.jsx(b("CometNotificationsList.react"), {
									onClose: a.onClose,
									ref: d,
									selectedFilter: A,
									viewer: k,
									viewerConnection: k
								})
							})
						})
					})]
				})
			}), t]
		})
	}
}), null);