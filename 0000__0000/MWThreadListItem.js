__d("MWThreadListItem.bs", ["fbt", "FBID.bs", "bs_curry", "bs_int64", "React", 
	"MWLSActor.bs", "SkytaleDB", "bs_caml_int64", "stylex", "bs_belt_Option", 
	"bs_caml_option", "RTCCallState.bs", "SkytaleDBHook.bs", "useMatchMedia", 
	"LSRtcCallState.bs", "SkytaleDBQuery.bs", "MWLSParticipant.bs", "MWLSThreadTitle.bs", 
	"MWThreadIsMuted.bs", "TetraText.react", "requireDeferred", "MWLSPreloadThread.bs", 
	"CurrentEnvironment", "MWLSThreadIsUnread.bs", "MWChatTextTransform.bs", "MWLSThreadImageUrls.bs", 
	"TetraListCell.react", "MWThreadListLastMessage.bs", "getMWThreadAddOnPrimary", 
	"useCometRouterDispatcher", "MWLSPresenceIsThreadActive.bs", "UseBlockedUserInterstitial.bs",
	 "CometTextWithEntities.react", "MWLSJewelThreadSeenByImages.bs", "MWLSThreadSnippetForDisplay.bs", 
	 "useMenuButtonVisibilityState", "CometListCellHoverButton.react", "LSContactBlockedByViewerStatus.bs",
	  "MWJewelOpenTabForCurrentThread.bs", "SkytaleDBQuerySubscriptionHook.bs", "useMWJewelThreadAddOnSecondary",
	   "MWThreadListFocusableTable.react", "RTWebInboxJoinOngoingCallIcon.react", 
	   "XCometMessengerControllerRouteBuilder", "useShouldShowMessagingEntrypointInCometRoot"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React");
	c = {};
	var j = {
			listItemContainer: {
				position: "l9j0dhe7"
			}
		},
		k = b("requireDeferred")("MWThreadListHoverButtonDropdownMenu.bs");

	function a(a) {
		var c = a.messagingEntrypoint,
			d = a.onClose,
			e = a.selected,
			f = a.size,
			l = a.thread;
		a = a.responsive;
		var m = b("useShouldShowMessagingEntrypointInCometRoot")("CHAT"),
			n = i.useRef(null),
			o = b("MWLSPresenceIsThreadActive.bs").useHook(void 0),
			p = b("FBID.bs").ofStringExn(b("bs_int64").to_string(l.a)),
			q = b("MWLSJewelThreadSeenByImages.bs").useHook(void 0);
		a = b("useMatchMedia")("(min-width: 900px)") || !a;
		var r = b("SkytaleDBHook.bs").useHook(void 0),
			s = b("SkytaleDBQuerySubscriptionHook.bs").useArray(i.useMemo(function() {
				return b("MWLSParticipant.bs").getAllInOpenThread(r, b("SkytaleDB").table(r, "contacts").asc, l.a)
			}, [r, JSON.stringify(l.a)])),
			t = b("SkytaleDBHook.bs").useHook(void 0),
			u = b("SkytaleDBQuerySubscriptionHook.bs").useArray(i.useMemo(function() {
				return b("SkytaleDBQuery.bs").mergeJoin(b("SkytaleDBQuery.bs").getKeyRange(b("SkytaleDB").table(t, "participants").asc, {
					hd: l.a,
					tl: 0
				}), b("SkytaleDB").table(t, "contacts").asc)
			}, [t, JSON.stringify(l.a)]));
		u = u.filter(function(a) {
			return b("bs_caml_int64").neq(a[1].n, b("LSContactBlockedByViewerStatus.bs").unblocked)
		});
		var v = b("MWLSActor.bs").useActor(void 0),
			w = b("MWLSThreadIsUnread.bs").isUnread(l.i, l.j),
			x = b("bs_caml_int64").eq(l.l, b("bs_caml_int64").neg_one) ? -1 : b("bs_caml_int64").to_float(l.l),
			y = b("MWLSThreadImageUrls.bs").make(s, v, l.f);
		s = b("MWLSThreadTitle.bs").make(l.d, v, s, l.c);
		var z = b("MWLSThreadSnippetForDisplay.bs").make(l.m),
			A = l.o;
		A = A !== void 0 ? b("bs_caml_int64").eq(A, v) : !1;
		v = b("bs_caml_int64").to_float(l.i);
		var B = b("MWThreadIsMuted.bs").getThreadIsMuted(x),
			C = b("useMenuButtonVisibilityState")(),
			D = C[1],
			E = D.setListItemHovered,
			F = i.useCallback(function(a) {
				return b("bs_curry")._1(E, !1)
			}, [E]),
			G = i.useCallback(function(a) {
				return b("bs_curry")._1(E, !0)
			}, [E]);
		y = b("getMWThreadAddOnPrimary")(y, void 0, o, f, void 0);
		o = b("useMWJewelThreadAddOnSecondary")(w, B, A, q);
		var H = b("CurrentEnvironment").facebookdotcom ? b("XCometMessengerControllerRouteBuilder").buildURL({
				thread_key: p
			}) : "/t/" + (p + "/"),
			I = b("MWJewelOpenTabForCurrentThread.bs").useHook(m, d, c),
			J = b("useCometRouterDispatcher")();
		f = b("MWLSPreloadThread.bs").useHook(l.a);
		B = b("bs_caml_int64").neq(l.u, b("LSRtcCallState.bs").noOngoingCall);
		A = b("bs_belt_Option").getWithDefault(s, g._("Ng\u01b0\u1eddi d\u00f9ng Facebook"));
		q = i.jsx(b("TetraText.react"), {
			color: "primary",
			type: w ? "headlineEmphasized4" : "body3",
			numberOfLines: 1,
			children: i.jsx(b("CometTextWithEntities.react"), {
				text: A.toString(),
				transforms: b("MWChatTextTransform.bs").epdTextTransforms
			})
		});
		var K = b("UseBlockedUserInterstitial.bs").useHook(l, u);
		s = {
			body: a ? i.jsx(b("MWThreadListLastMessage.bs").make, {
				hasOngoingCall: B,
				lastMessageTimestamp: v,
				snippet: z,
				isUnread: w
			}) : null,
			bodyLineLimit: 1,
			emphasized: w,
			headlineLineLimit: 1,
			level: 4,
			linkProps: {
				preventLocalNavigation: !0,
				url: H
			},
			onHoverIn: f[0],
			onHoverOut: f[1],
			onPress: function(a) {
				if (m) return b("bs_curry")._1(I, a);
				else if (!(J == null)) return b("bs_curry")._1(K, function(a) {
					return J.go(H)
				});
				else return
			},
			selected: e
		};
		A = a ? b("bs_caml_option").some(q) : void 0;
		A !== void 0 && (s.headline = b("bs_caml_option").valFromOption(A));
		u = y == null ? void 0 : b("bs_caml_option").some(y);
		u !== void 0 && (s.addOnPrimary = b("bs_caml_option").valFromOption(u));
		v = a ? b("bs_caml_option").some(o) : void 0;
		v !== void 0 && (s.addOnSecondary = b("bs_caml_option").valFromOption(v));
		z = i.jsx(b("MWThreadListFocusableTable.react").MWThreadListFocusableTableRow, {
			children: i.jsxs("div", {
				children: [i.jsx(b("MWThreadListFocusableTable.react").MWThreadListFocusableTableCell, {
					children: i.jsx("div", {
						children: i.jsx(b("TetraListCell.react"), s),
						ref: n,
						role: "gridcell"
					})
				}), a ? i.jsx(b("MWThreadListFocusableTable.react").MWThreadListFocusableTableCell, {
					children: i.jsxs("div", {
						children: [i.jsx(b("RTWebInboxJoinOngoingCallIcon.react"), {
							hidden: !B,
							ongoingCallType: b("RTCCallState.bs").ofLsRtcCallState(l.u, l.c)
						}), i.jsx(b("CometListCellHoverButton.react"), {
							hidden: !C[0],
							onFocusChange: D.setMenuBtnFocused,
							onHoverChange: D.setMenuBtnHovered,
							onMenuStateChange: D.setMenuOpened,
							popoverResource: k,
							popoverProps: {
								fbid: p,
								isUnread: w,
								mutedUntil: x / 1e3,
								onClose: d,
								messagingEntrypoint: c,
								thread: l
							},
							popoverTriggerType: "lazy",
							testid: "mwthreadlist-menu-id-" + p
						})],
						role: "gridcell"
					})
				}) : null],
				role: "row"
			})
		});
		f = {
			children: z,
			className: (h || (h = b("stylex")))(j.listItemContainer),
			onMouseEnter: G,
			onMouseLeave: F
		};
		return i.jsx("div", (f["data-testid"] = "mwthreadlist-item", f))
	}
	d = a;
	f.RTWebInboxJoinOngoingCallIcon = c;
	f.styles = j;
	f.$MWThreadListHoverButtonDropdownMenu$Deferred = k;
	f.make = d
}), null);