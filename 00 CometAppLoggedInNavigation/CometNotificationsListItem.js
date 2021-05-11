__d("CometNotificationsListItem.react", ["fbt", "CometBadge.react", "CometBoldedEntityRenderer", 
	"CometEmojiTransform", "CometEmoticonTransform", "CometFocusTableContext", 
	"CometNotificationsDropdownMenuButton.react", "CometNotificationsListItemAttachment.react", 
	"CometNotificationsListItemSeenContext", "CometNotificationsMarkReadMutation", 
	"CometNotificationsTimestamp.react", "CometPressable.react", "CometRelay", 
	"CometTextWithEntitiesRelay.react", "FocusWithinHandler.react", "React", 
	"TetraAccessoryListCell.react", "TetraIcon.react", "UntruncatedNotificationsTypedLoggerLite", 
	"requireDeferred", "cometNotificationsListItemIcon", "gkx", "goForceFullPageRedirectTo",
	 "mergeRefs", "qex", "scrollIntoView", "stylex", "useCometPreloader", "useCometRouterDispatcher",
	  "useMenuButtonVisibilityState", "useNotificationsImpressionLogger", "useScrollToNotif", 
	  "useVisibilityObserver", "useCometNotificationURL", "useCometConfirmationDialog", "promiseDone", 
	  "useProfileCometErrorDialog_DEPRECATED", "CometCrossProfileNotificationStrings", "useCometLazyDialog",
	  "JSResourceForInteraction", "ProfilePlusCrossProfileNotificationFalcoEvent",
	   "CometNotificationsListItem_actor.graphql", "CometNotificationsListItem_notification.graphql"], (function(a, b, c, d, e, f, aa) {
	"use strict";
	var g, h, i, j = b("React"),
		ba = b("requireDeferred")("NotifClickEventsFalcoEvent"),
		ca = b("UntruncatedNotificationsTypedLoggerLite").log,
		da = b("JSResourceForInteraction")("CometCrossProfileNotificationsLARConfirmationDialog.react").__setRef("CometNotificationsListItem.react"),
		ea = b("JSResourceForInteraction")("CometProfileSwitchMutation").__setRef("CometNotificationsListItem.react"),
		fa = 0,
		k = {
			hiddenLabel: {
				clip: "q45zohi1",
				clipPath: "g0aa4cga",
				position: "pmk7jnqg",
				wordBreak: "dxrwds1f"
			},
			listItemContainer: {
				position: "l9j0dhe7"
			},
			pressable: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				height: "m7zwrmfr",
				justifyContent: "taijpn5t",
				paddingStart: "b3onmgus",
				width: "odw8uiq3"
			},
			spacer: {
				height: "cyypbtt7",
				width: "fwizqjfa"
			}
		},
		ga = {
			"*": [b("CometBoldedEntityRenderer")]
		},
		ha = [b("CometEmoticonTransform")(), b("CometEmojiTransform")()],
		ia = g !== void 0 ? g : g = b("CometNotificationsListItem_actor.graphql"),
		ja = h !== void 0 ? h : h = b("CometNotificationsListItem_notification.graphql");

	function a(a) {
		var c = a.actor,
			d = a.isFromPageNotification,
			e = a.isNotificationsRoute,
			f = e === void 0 ? !1 : e;
		e = a.loggerContext;
		var g = e === void 0 ? "www_tab" : e;
		e = a.notification;
		var h = a.onClick,
			l = a.onClose,
			m = a.replace,
			n = a.routeTarget,
			o = a.shouldPrefetch;
		o = o === void 0 ? !1 : o;
		var p = a.showSelectedState,
			ka = p === void 0 ? !1 : p,
			q = a.trackingData;
		p = b("CometRelay").useFragment(ia, c);
		var r = b("CometRelay").useFragment(ja, e),
			s = b("useCometNotificationURL")(r);
		a = r.body;
		c = r.creation_time;
		var t = r.id,
			u = r.navigation_endpoint,
			v = r.notif_id;
		e = r.notif_image;
		var w = r.notif_type,
			x = r.seen_state,
			y = r.tracking,
			z = j.useRef(null),
			A = p == null ? void 0 : p.id,
			B = (p = d) != null ? p : !1,
			C = (u == null ? void 0 : u.target_viewer_type) === "MP_CORE_APP_ADMIN" && b("gkx")("1701726"),
			D = (u == null ? void 0 : u.target_viewer_type) === "MP_LIMITED_ACCESS_ROLE" && b("gkx")("1734825"),
			E = u == null ? void 0 : (d = u.target_viewer) == null ? void 0 : d.name,
			F = u == null ? void 0 : (p = u.target_viewer) == null ? void 0 : p.id,
			G = u == null ? void 0 : (d = u.target_viewer) == null ? void 0 : d.profile_plus_primary_platform_tool;
		p = babelHelpers["extends"]({
			navigation_source: "notifications_click"
		}, w != null ? {
			notif_type: w
		} : null);
		d = j.useMemo(function() {
			var a;
			return (a = q) != null ? a : {
				notif_tracking: y
			}
		}, [y, q]);
		var la = {
				onNavigate: l,
				passthroughProps: {
					initialTracePolicy: "comet.notifications",
					notification_id: (l = v) != null ? l : void 0,
					notificationTracking: d,
					ref: "notification"
				},
				prefetchQueries: o,
				preventLocalNavigation: (C || D) && s != null && E != null,
				productAttribution: {
					tap_point: "via_notification"
				},
				replace: (l = m) != null ? l : void 0,
				routeTarget: B ? "content" : (o = n) != null ? o : void 0,
				target: Boolean(r.www_url_should_open_in_blank_target) ? "_blank" : void 0,
				traceParams: p,
				url: (m = s) != null ? m : void 0
			},
			H = b("CometRelay").useRelayEnvironment(),
			ma = "MAIN_SURFACE",
			I = "unknown",
			J = b("useCometRouterDispatcher")();
		l = b("useScrollToNotif").useScrollToNotif(s);
		var na = l[0],
			K = l[1],
			L = K.current;
		n = j.useContext(b("CometFocusTableContext"));
		o = n.FocusCell;
		p = n.FocusRow;
		var oa = (m = o) != null ? m : j.Fragment,
			pa = (l = p) != null ? l : j.Fragment;
		n = b("useCometConfirmationDialog")();
		var M = n[0];
		n[1];
		j.useLayoutEffect(function() {
			z.current != null && L && (b("scrollIntoView")(z.current, {
				behavior: "auto",
				verticalAlign: "center"
			}), K.current = !1)
		}, [L, K]);
		o = b("useProfileCometErrorDialog_DEPRECATED")(b("CometCrossProfileNotificationStrings").getCAAProfileSwitchErrorDialogTitle());
		var N = o[0],
			O = j.useCallback(function() {
				b("ProfilePlusCrossProfileNotificationFalcoEvent").log(function() {
					var a;
					return {
						event: "CONFIRM_SWITCHING",
						logged_in_user_id: (a = A) != null ? a : "",
						medium: "jewel",
						ndid: "",
						notif_id: (a = v) != null ? a : "",
						notif_type: (a = w) != null ? a : "",
						target_viewer_id: (a = F) != null ? a : "",
						target_viewer_type: (a = u == null ? void 0 : u.target_viewer_type) != null ? a : "",
						underlying_admin_id: (a = A) != null ? a : ""
					}
				})
			}, [A, u == null ? void 0 : u.target_viewer_type, v, w, F]),
			P = j.useCallback(function() {
				b("ProfilePlusCrossProfileNotificationFalcoEvent").log(function() {
					var a;
					return {
						event: "CANCEL_SWITCHING",
						logged_in_user_id: (a = A) != null ? a : "",
						medium: "jewel",
						ndid: "",
						notif_id: (a = v) != null ? a : "",
						notif_type: (a = w) != null ? a : "",
						target_viewer_id: (a = F) != null ? a : "",
						target_viewer_type: (a = u == null ? void 0 : u.target_viewer_type) != null ? a : "",
						underlying_admin_id: (a = A) != null ? a : ""
					}
				})
			}, [A, u == null ? void 0 : u.target_viewer_type, v, w, F]);
		m = b("useCometLazyDialog")(da);
		var Q = m[0],
			qa = j.useCallback(function() {
				if (t != null && A != null) {
					h && h();
					ba.onReady(function(a) {
						return a.log(function() {
							var a;
							return babelHelpers["extends"]({}, q, {
								notification_data: {
									alert_id: (a = v) != null ? a : "",
									logger_context: (a = g) != null ? a : "",
									to_user: A
								},
								ref: f ? "notifications_route" : "www_tab"
							})
						})
					});
					b("CometNotificationsMarkReadMutation")(H, {
						input: {
							is_comet: !0,
							notif_id: t,
							source: I
						}
					});
					if (s != null && E != null)
						if (C) {
							var a, c = function(a) {
									b("promiseDone")(d.then(function(c) {
										c = c.switchProfile;
										c(H, {
											profileId: a
										}, {
											onCompleted: function() {
												b("goForceFullPageRedirectTo")(s)
											},
											onError: function(a) {
												N(a)
											}
										})
									}))
								},
								d = ea.load();
							M({
								body: (a = b("CometCrossProfileNotificationStrings")).getCAAProfileSwitchDialogBody(E),
								cancel: a.getCAAProfileSwitchDialogCancelText(),
								confirm: a.getCAAProfileSwitchDialogConfirmText(),
								title: a.getCAAProfileSwitchDialogTitle(E)
							}, function() {
								O();
								return c(F)
							}, function() {
								P()
							})
						} else D && Q({
							additionalProfileId: F,
							additionalProfileName: E,
							adminId: A,
							larLandingPlatform: G,
							notifId: v,
							notifType: w,
							onClose: function() {},
							url: s
						})
				}
			}, [t, w, A, h, H, s, E, q, v, g, f, C, D, M, N, O, F, P, G, Q]),
			R = j.useCallback(function() {
				t != null && b("CometNotificationsMarkReadMutation")(H, {
					input: {
						environment: ma,
						is_comet: !0,
						notif_id: t,
						source: I
					}
				})
			}, [H, t]),
			S = a;
		p = c == null ? void 0 : c.timestamp;
		l = e == null ? void 0 : e.uri;
		n = b("useMenuButtonVisibilityState")();
		var ra = n[0];
		o = n[1];
		var T = o.setListItemHovered,
			sa = o.setMenuBtnFocused,
			ta = o.setMenuBtnHovered,
			ua = o.setMenuOpened,
			U = x === "UNSEEN_AND_UNREAD" || x === "SEEN_BUT_UNREAD";
		m = j.useCallback(function() {
			J && s != null && U && b("qex")._("1590992") && J.prefetchRouteQueries(s, {})
		}, [J, U, s]);
		a = b("useCometPreloader")("button", m, m);
		var V = a[0],
			W = a[1],
			va = j.useCallback(function() {
				T(!1), W()
			}, [W, T]),
			wa = j.useCallback(function(a) {
				T(!0), V(a)
			}, [V, T]);
		c = b("useNotificationsImpressionLogger")({
			actorId: A,
			loggerContext: g,
			notifId: v,
			trackingData: d
		});
		var X = c[0],
			xa = c[1],
			ya = j.useContext(b("CometNotificationsListItemSeenContext")),
			Y = b("useVisibilityObserver")({
				onVisible: function() {
					b("gkx")("1587829") || ya(t)
				}
			}),
			za = j.useMemo(function() {
				if (g === "www_tab" || g === "beeper") return b("mergeRefs")(X, z, Y);
				else return z
			}, [Y, g, X]),
			Z = S == null ? void 0 : (e = S.text) == null ? void 0 : e.length;
		j.useEffect(function() {
			Z != null && Z > fa && ca({
				length: Z,
				notification_type: w
			})
		}, [w, Z]);
		if (t == null || S == null || l == null || x == null || p == null) return null;
		n = new Date(p * 1e3);
		var $ = x === "SEEN_AND_READ";
		m = (o = r.icon_data) == null ? void 0 : o.reaction_type;
		d = (a = r.icon_data) == null ? void 0 : a.glyph_name;
		c = b("cometNotificationsListItemIcon")(d, m);
		e = c != null ? {
			backgroundColor: "transparent",
			icon: j.jsx(b("TetraIcon.react"), {
				color: "white",
				icon: c
			}),
			size: 28,
			type: "activityBadge"
		} : null;
		var Aa = j.jsx(b("CometNotificationsTimestamp.react"), {
				date: n,
				seenAndRead: $
			}),
			Ba = {
				addOn: e,
				shape: "circle",
				size: 56,
				source: {
					uri: l
				},
				type: "profile-photo"
			},
			Ca = {
				override_component: j.jsx(b("CometNotificationsListItemAttachment.react"), {
					date: n,
					notification: r,
					onPress: R
				}),
				type: "designOverride_Notifications_bottomAddOn"
			};
		p = r == null ? void 0 : r.is_hidden;
		return p === !0 ? null : j.jsx(b("FocusWithinHandler.react"), {
			children: function(a, c) {
				return j.jsx(pa, {
					children: j.jsxs("div", {
						className: (i || (i = b("stylex")))(k.listItemContainer),
						onMouseEnter: wa,
						onMouseLeave: va,
						ref: za,
						role: "row",
						children: [xa, j.jsx(b("TetraAccessoryListCell.react"), {
							addOnBottom: Ca,
							addOnPrimary: Ba,
							addOnSecondary: {
								addOn: $ ? j.jsx("div", {
									className: (i || (i = b("stylex")))(k.spacer)
								}) : j.jsx(b("CometPressable.react"), {
									expanding: !0,
									onPress: R,
									overlayDisabled: !0,
									role: "none",
									testid: void 0,
									xstyle: k.pressable,
									children: j.jsx(b("CometBadge.react"), {
										color: "blue",
										isProfileBadge: !0,
										size: 12
									})
								}),
								type: "body"
							},
							body: j.jsxs(j.Fragment, {
								children: [$ ? null : j.jsx("div", {
									className: (i || (i = b("stylex")))(k.hiddenLabel),
									children: aa._("Ch\u01b0a \u0111\u1ecdc")
								}), j.jsx(b("CometTextWithEntitiesRelay.react"), {
									renderers: ga,
									textWithEntities: S,
									transforms: ha
								})]
							}),
							bodyColor: $ ? "secondary" : "primary",
							bodyLineLimit: 3,
							linkProps: la,
							meta: Aa,
							onPress: qa,
							role: "none",
							selected: na && ka,
							testid: void 0
						}), w !== "friend" && w !== "page_invite" ? j.jsx(oa, {
							children: j.jsx(b("CometNotificationsDropdownMenuButton.react"), {
								hidden: B || !(a && c) && !ra,
								notification: r,
								onFocusChange: sa,
								onHoverChange: ta,
								onMenuStateChange: ua,
								userId: A
							})
						}) : null]
					})
				})
			}
		})
	}
	c = j.memo(a);
	e.exports = c
}), null);