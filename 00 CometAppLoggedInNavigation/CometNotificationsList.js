__d("CometNotificationsList.react", ["fbt", "CometErrorBoundary.react", 
	"CometFocusTable.react", "CometInfiniteScrollSuspenseList.react", 
	"CometListItemGlimmer.react", "CometNoNotifications.react", 
	"CometNotificationsBucketHeaderListItem.react", "CometNotificationsContext", 
	"CometNotificationsInteractionLogger", "CometNotificationsInteractionLoggingContext", 
	"CometNotificationsListItem.react", "CometNotificationsRenderLocations", 
	"CometNotificationsScrollHoldingContainer.react", "CometNotificationsUpdateAllSeenStateMutation", 
	"CometOnRefresh.react", "CometRelay", "CometRouteMatch", "FBLogger", 
	"FriendingCometFriendsBadgeCountClearMutation", "GriffinTabOpenFalcoEvent", 
	"HiddenSubtreeContext", "JSTracing", "React", "RegularPymkXoutFalcoEvent", 
	"XCometNotificationsControllerRouteBuilder", "cometNotificationsFiltersOptions", 
	"focusScopeQueries", "gkx", "qex", "recoverableViolation", "requireCond", 
	"requireDeferred", "setupNotificationsSubscription", "stylex", "useCometInteractionTracing", 
	"useHandleMarkAllAsSeen", "useSimpleImpression", "useSuspenseTransition", 
	"useTriggerAccessibilityAlert", "useVisibilityObserver", "cr:1460543", "cr:1566770", 
	"CometNotificationsList_viewerConnection.graphql", "CometNotificationsList_viewerData.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j = b("React"),
		k = (c = b("requireDeferred"))("CometNotificationsRankingErrorFalcoEvent"),
		l = c("FriendingCometPYMKBlacklistSuggestionMutation"),
		m = c("NotifDebugModeFalcoEvent"),
		n = c("NotifListBottomCollisionFalcoEvent"),
		o = "MAIN_SURFACE",
		p = (d = b("qex")._("1845183")) != null ? d : 0,
		q = function(a, c, d, e) {
			if (a.current.size === 0 || d == null) return;
			b("CometNotificationsUpdateAllSeenStateMutation").CometNotificationsUpdateAllSeenStateMutation(c, {
				environment: o,
				input: {
					environment: o,
					is_comet: !0,
					latest_time_sent: d,
					notif_ids: Array.from(a.current),
					source: "unknown",
					update_type: "read"
				}
			}, {
				onError: function(a) {
					b("recoverableViolation")("Mark all as read mutation failed with an error: ", "Notifications", {
						error: a
					})
				},
				onSuccess: function() {
					e(g._("\u0110\u00e3 \u0111\u00e1nh d\u1ea5u t\u1ea5t c\u1ea3 th\u00f4ng b\u00e1o l\u00e0 \u0111\u00e3 \u0111\u1ecdc."))
				}
			})
		},
		r = {
			timeoutMs: 45 * 1e3
		};

	function s(a) {
		b("recoverableViolation")("[CometNotificationsList] CometNotificationsListItem suffered an uncaught error", "comet_notifications", {
			error: a
		})
	}

	function a(a, c) {
		var d = b("CometRelay").useRelayEnvironment(),
			e = b("useSuspenseTransition")(r),
			f = e[0],
			o = e[1],
			t = a.isFromPageNotification,
			u = a.onClose,
			v = a.selectedFilter,
			w = b("gkx")("1126689");
		e = b("CometRelay").usePaginationFragment(h !== void 0 ? h : h = b("CometNotificationsList_viewerConnection.graphql"), a.viewerConnection);
		var x = e.data,
			y = e.hasNext,
			z = e.isLoadingNext,
			A = e.loadNext,
			B = e.refetch;
		e = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometNotificationsList_viewerData.graphql"), a.viewer);
		var C = e.actor,
			D = e.last_update_timestamp,
			E = e.notifications_unseen_count,
			F = (e = (a = x.notifications_page) == null ? void 0 : a.edges) != null ? e : [],
			G = C == null ? void 0 : C.id;
		x = F.find(function(a) {
			a = a.node;
			return a && a.row_type === "NOTIFICATION"
		});
		x = x && ((a = x.node) == null ? void 0 : (e = a.notif) == null ? void 0 : e.id);
		a = j.useContext(b("CometNotificationsContext"));
		var H = a.renderLocation === b("CometNotificationsRenderLocations").RAIL,
			I = a.renderLocation === b("CometNotificationsRenderLocations").DROPDOWN ? void 0 : "self";
		e = b("CometRouteMatch").useCurrentRouteMatcher(b("CometRouteMatch").MatchFunctions.urlMatchFunction);
		var J = e(b("XCometNotificationsControllerRouteBuilder").buildURL({}).toString()),
			K = j.useRef(new Set()),
			L = b("useTriggerAccessibilityAlert")(),
			M = j.useRef(!1),
			N = j.useCallback(function() {
				m.onReady(function(a) {
					a = a.log;
					return a(function() {
						return {
							userID: G
						}
					})
				}), M.current === !1 ? (M.current = !0, f(function() {
					B({
						notif_query_flags: ["IS_COMET", "DEBUG_SHOW_INVALIDATED"]
					}, {
						fetchPolicy: "network-only"
					})
				})) : (M.current = !1, f(function() {
					B({
						notif_query_flags: ["IS_COMET"]
					}, {
						fetchPolicy: "network-only"
					})
				}))
			}, [G, M, B, f]);
		j.useImperativeHandle(c, function() {
			return {
				debugModeEnabled: M,
				handleDebugModeClick: function() {
					N()
				},
				markAllNotificationsAsRead: function() {
					q(K, d, D, L)
				}
			}
		});
		a = j.useCallback(function() {
			if (w) return;
			b("JSTracing").clear(function() {
				b("FriendingCometFriendsBadgeCountClearMutation").commit(d, {}), b("GriffinTabOpenFalcoEvent").log(function() {
					return {}
				})
			})
		}, [d, w]);
		b("useSimpleImpression")(a);
		var O = b("useHandleMarkAllAsSeen")(K, d, D);
		j.useEffect(function() {
			return function() {
				O.dispose()
			}
		}, [O]);
		var P = j.useRef(F.length);
		j.useEffect(function() {
			P.current = F.length
		}, [F.length]);
		var Q = j.useContext(b("CometNotificationsInteractionLoggingContext").CometNotificationsInteractionLoggingContext);
		j.useEffect(function() {
			if (!o) {
				var a = Q.notifsLoadCompleteRef;
				a && (a.current = !0);
				b("CometNotificationsInteractionLogger").success(P.current)
			}
		}, [Q, o, P]);
		e = j.useCallback(function() {
			if (o) return;
			f(function() {
				B({}, {
					fetchPolicy: "network-only"
				})
			})
		}, [o, B, f]);
		b("CometOnRefresh.react").useOnRefresh(e);
		var R = b("useCometInteractionTracing")(30605314, "fluid", "TAIL_LOAD");
		c = j.useCallback(function() {
			if (z || !y) return;
			n.onReady(function(a) {
				return a.log(function() {
					return {}
				})
			});
			R(function() {
				A(10)
			})
		}, [z, y, R, A]);
		var S = j.useMemo(function() {
				return F.map(function(a) {
					a = a.node;
					var b = {};
					if (a && a.row_type === "NOTIFICATION") {
						var c;
						((c = a.notif) == null ? void 0 : c.notif_cache_id) != null && (b.notif_cache_id = a.notif.notif_cache_id);
						((c = a.notif) == null ? void 0 : c.id) != null && (b.id = a.notif.id)
					}
					return b
				})
			}, [F]),
			T = F.length;
		a = j.useState(null);
		var U = a[0],
			V = a[1],
			W = j.useContext(b("HiddenSubtreeContext")).hiddenOrBackgrounded;
		e = b("useVisibilityObserver")({
			onHidden: function() {
				return V(!1)
			},
			onVisible: function() {
				return V(!0)
			}
		});
		j.useEffect(function() {
			var a = new Set();
			S.forEach(function(b) {
				b.notif_cache_id != null && a.add(b.notif_cache_id), b.id != null && K.current.add(b.id)
			});
			var c = T || 15,
				e = b("setupNotificationsSubscription")(d, {
					count: c,
					receivedNotifications: a
				});
			return function() {
				e.dispose()
			}
		}, [S, T, d]);
		j.useEffect(function() {
			var a = !1;
			S.forEach(function(b) {
				(b == null ? void 0 : b.seen_state) === "UNSEEN_AND_UNREAD" && (a = !0)
			});
			var b = E != null && E > 0;
			U === !0 && !W && (b || a) && O()
		}, [S, O, W, U, E]);
		var X = j.useCallback(function(a, c) {
			return function() {
				a != null && (l.load().then(function(c) {
					return c.commit(d, "FriendingCometPYMKPanel_people_you_may_know", b("CometRelay").VIEWER_ID, a, "griffin_tab", "griffin_tab")
				})["catch"](function(a) {
					b("FBLogger")("notifications").catching(a).mustfix("Error blacklisting pymk suggestion in CometNotificationsList, please investigate")
				}), b("RegularPymkXoutFalcoEvent").log(function() {
					return {
						pymk_id: a,
						pymk_location: "notification_jewel",
						pymk_signature: c
					}
				}))
			}
		}, [d]);
		a = j.useMemo(function() {
			var a = null,
				c = [],
				d = new Map();
			v === "Unread" ? c.push(j.jsx("div", {
				className: "muag1w35",
				children: j.jsx(b("CometNotificationsBucketHeaderListItem.react"), {
					actorId: G,
					headerLinkText: null,
					title: g._("Ch\u01b0a \u0111\u1ecdc"),
					trackingData: {
						row_tracking: null
					},
					url: null
				})
			}, "UnreadFilterHeader")) : v === "Conversations" && c.push(j.jsx("div", {
				className: "muag1w35",
				children: j.jsx(b("CometNotificationsBucketHeaderListItem.react"), {
					actorId: G,
					headerLinkText: null,
					title: g._("L\u01b0\u1ee3t nh\u1eafc v\u00e0 tr\u1ea3 l\u1eddi"),
					trackingData: {
						row_tracking: null
					},
					url: null
				})
			}, "ConversationsFilterHeader"));
			var e = 0;
			F.forEach(function(f, g) {
				g = f.node;
				f = {
					row_tracking: g == null ? void 0 : g.tracking
				};
				if (g == null) return;
				var h = g.row_type;
				switch (h) {
					case "PYMK":
						h = g.person_you_may_know;
						var i = g.pymk_tracking_signature;
						if (h == null || b("cr:1566770") == null || v === "Unread" || v === "Conversations") return;
						var k = X(h == null ? void 0 : h.id, i);
						c.push(j.jsx(b("cr:1566770"), {
							actorId: G,
							onDelete: k,
							signature: i,
							trackingData: f,
							user: h
						}, h == null ? void 0 : h.id));
						e++;
						break;
					case "NOTIFICATION":
						k = g.notif;
						if (!k) return;
						i = k == null ? void 0 : k.seen_state;
						if (v === "Unread" && i === "SEEN_AND_READ") return;
						h = k == null ? void 0 : k.notif_type;
						if (v === "Conversations" && h != null && b("cometNotificationsFiltersOptions").conversationsNotifTypes.has(h) !== !0) return;
						f.notif_tracking = k.tracking;
						if (a === "PRIORITY_INBOX") {
							h = k.notif_id;
							h != null && i != null && d.set(h, i)
						}
						h = e < p;
						c.push(j.jsx(b("CometErrorBoundary.react"), {
							onError: s,
							children: j.jsx(b("CometNotificationsListItem.react"), {
								actor: C,
								isFromPageNotification: t,
								isNotificationsRoute: J,
								notification: k,
								onClose: u,
								replace: H && !J ? !0 : void 0,
								routeTarget: J ? "content" : I,
								shouldPrefetch: h,
								showSelectedState: H,
								trackingData: f
							})
						}, k.id));
						e++;
						break;
					case "BUCKET_HEADER":
						if (v === "Unread" || v === "Conversations") return;
						a = g == null ? void 0 : g.bucket_type;
						h = g == null ? void 0 : (i = g.title) == null ? void 0 : i.text;
						i = g == null ? void 0 : (k = g.header_link) == null ? void 0 : k.text;
						k = g == null ? void 0 : (k = g.header_link) == null ? void 0 : k.url;
						c.push(j.jsx("div", {
							className: "muag1w35",
							children: j.jsx(b("CometNotificationsBucketHeaderListItem.react"), {
								actorId: G,
								headerLinkText: i,
								title: h,
								trackingData: f,
								url: k
							})
						}, a));
						break;
					case "DEBUG_INVALIDATION":
						if (!b("cr:1460543") || v === "Unread" || v === "Conversations") return;
						i = g.invalidation_reason;
						h = g.notif;
						if (h == null) {
							b("recoverableViolation")("NotifPageDebugInvalidationRow missing notif", "Notifications");
							return
						}
						f = h.notif_id;
						k = h.notif_type;
						if (k == null || f == null) return;
						c.push(j.jsx(b("cr:1460543"), {
							exception: i,
							notifType: k,
							notificationNotifId: f
						}, f));
						break;
					default:
						break
				}
			});
			return [c, d]
		}, [C, G, F, t, H, J, I, u, X, v]);
		var Y = a[0],
			Z = a[1],
			$ = Z.values().next().value === "UNSEEN_AND_UNREAD";
		j.useEffect(function() {
			!W && E != null && E > 0 && !$ && k.onReady(function(a) {
				a.log(function() {
					return {
						bucketed_notifs: Object.fromEntries(Z),
						unseen_count: E
					}
				})
			})
		}, [$, W, Z, E]);
		return j.jsxs("div", {
			"data-testid": void 0,
			ref: e,
			children: [o && j.jsx(b("CometListItemGlimmer.react"), {
				imageSize: 56,
				imageStyle: "circle",
				numberOfItems: 1
			}), F.length > 0 ? j.jsx(b("CometFocusTable.react").CometFocusTable, {
				allowModifiers: !0,
				label: g._("Th\u00f4ng b\u00e1o"),
				tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
				wrapXToNextLine: !0,
				children: j.jsx(b("CometNotificationsScrollHoldingContainer.react"), {
					firstNotificationID: x,
					children: j.jsx(b("CometInfiniteScrollSuspenseList.react"), {
						hasMore: y,
						isLoading: z,
						listGlimmer: j.jsx(b("CometListItemGlimmer.react"), {
							imageSize: 56,
							imageStyle: "circle",
							numberOfItems: 2
						}),
						onLoadMore: c,
						children: Y.filter(Boolean)
					})
				})
			}) : j.jsx(b("CometNoNotifications.react"), {}), j.jsx("div", {
				"data-testid": void 0
			})]
		})
	}
	f = j.forwardRef(a);
	e.exports = f
}), null);