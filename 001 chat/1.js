__d("MWChatTabContent.bs", ["bs_curry", "React", "MWTheme.bs", "SkytaleDB", "bs_caml_int64", "JSResource", "bs_caml_option", "MWThreadKey.bs", "MWChatThread.bs", "SkytaleDBHook.bs", "MWChatComposer.bs", "SkytaleDBQuery.bs", "MWUIThreadEmoji.bs", "LSThreadNullstate.bs", "MessengerWebEvent", "BootloaderResource", "LSNullstateCTAType.bs", "MWChatUserComposer.bs", "MWChatEmptyComposer.bs", "MWChatSolidReaction.bs", "MWChatTabContentStyles.bs", "MWChatLeftGroupComposer.bs", "MWUIDisabledPageComposer.bs", "MWChatThreadAnimationWrapper.bs", "MWChatWorkDeactivatedComposer.bs", "MessengerWebStgTypedLoggerLite.bs", "SkytaleDBQuerySubscriptionHook.bs", "MWChatComposerP2PPopoverTrigger.bs", "MWChatWorkGardenArchivedComposer.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = (g = b("JSResource"))("MWChatBlockedComposer.bs").__setRef("MWChatTabContent.bs");

	function j(a, c, d, e, f) {
		f = {
			fbid: a,
			reportingToken: c
		};
		d !== void 0 && (f.size = b("bs_caml_option").valFromOption(d));
		e !== void 0 && (f.isReachable = b("bs_caml_option").valFromOption(e));
		return f
	}

	function k(a) {
		return h.createElement(b("BootloaderResource").read(i).make, a)
	}
	var l = {
			reasonResource: i,
			makeProps: j,
			make: k
		},
		m = g("MWChatBlockedPageComposer.bs").__setRef("MWChatTabContent.bs");

	function a(a, b, c) {
		return {
			fbid: a,
			reportingToken: b
		}
	}

	function n(a) {
		return h.createElement(b("BootloaderResource").read(m).make, a)
	}
	a = {
		reasonResource: m,
		makeProps: a,
		make: n
	};
	var o = g("MWChatWorkMessageRequestComposer.bs").__setRef("MWChatTabContent.bs");

	function c(a, b) {
		return {
			closeTab: a
		}
	}

	function p(a) {
		return h.createElement(b("BootloaderResource").read(o).make, a)
	}
	c = {
		reasonResource: o,
		makeProps: c,
		make: p
	};
	var q = g("InternalOnlyWorkChatComposerExtras.bs").__setRef("MWChatTabContent.bs");

	function d(a) {
		return {}
	}

	function r(a) {
		return h.createElement(b("BootloaderResource").read(q).make, a)
	}
	g = {
		reasonResource: q,
		makeProps: d,
		make: r
	};

	function s(a) {
		var c = a.id,
			d = a.thread,
			e = a.items,
			f = a.otherUserFbid,
			g = a.contextBannerData,
			i = a.welcomePageData,
			l = a.isTabFocused,
			m = a.isScrolledToBottomRef,
			o = a.initialComposerViewState,
			q = a.scrollerRef,
			s = a.shouldShowMenu,
			t = a.composerType,
			u = a.dispatch,
			v = a.closeTab,
			w = a.endFirstChatTabOpenLoggerRef,
			x = a.icebreakerUI,
			y = a.managePageMessagesLink,
			z = a.hasContent,
			A = a.repliedToMessage,
			B = a.buildSharedMediaViewerURL,
			C = a.messageRequestInfoText,
			D = a.sendTypingIndicator,
			E = a.closeReplyPreview,
			F = a.onSendMessage,
			G = x !== void 0 ? b("bs_caml_option").valFromOption(x) : null,
			H = b("MWTheme.bs").useTheme(void 0);
		a = b("MWChatSolidReaction.bs").useUook(void 0);
		var I = a[1],
			J;
		if (typeof t === "number") switch (t) {
			case 0:
			case 1:
				J = !0;
				break;
			default:
				J = !1
		} else switch (t.TAG | 0) {
			case 0:
			case 1:
				J = !1;
				break;
			default:
				J = !1
		}
		h.useEffect(function() {
			if (!w.current) {
				w.current = !0;
				var a;
				if (typeof c === "string") a = null;
				else {
					var d = c.NAME;
					a = d === "User" || d === "Page" ? c.VAL : null
				}
				b("MessengerWebStgTypedLoggerLite.bs").log({
					event_name: b("MessengerWebEvent").RENDER_FIRST_THREAD_CONTENT,
					other_user_fbid: a,
					thread_fbid: typeof c === "string" || c.NAME !== "Group" ? null : c.VAL
				})
			}
		}, [w, c]);
		var K = function(a) {
				if (m.current !== 0) return;
				a = q.current;
				if (!(a == null)) return a.scrollToBottom()
			},
			L = function(a) {
				return K(void 0)
			},
			M = function(a) {
				return K(void 0)
			},
			N = b("SkytaleDBHook.bs").useHook(void 0),
			O = b("SkytaleDBQuerySubscriptionHook.bs").useFirst(h.useMemo(function() {
				return b("SkytaleDBQuery.bs").getKeyRange(b("SkytaleDB").table(N, "thread_nullstate").asc, {
					hd: d.a,
					tl: 0
				})
			}, [N, JSON.stringify(d.a)])),
			P = b("SkytaleDBQuerySubscriptionHook.bs").useArray(h.useMemo(function() {
				return b("SkytaleDBQuery.bs").getKeyRange(b("SkytaleDB").table(N, "thread_nullstate_ctas").index("threadKeyCtaId").asc, {
					hd: d.a,
					tl: 0
				})
			}, [N, JSON.stringify(d.a)])),
			Q = b("bs_caml_int64").neq(d.i, b("bs_caml_int64").zero),
			R = O !== void 0 ? b("bs_caml_int64").eq(O.f, b("LSNullstateCTAType.bs").getStarted) : !1;
		return h.jsx(b("MWChatThreadAnimationWrapper.bs").make, {
			composer: function(a, e, g, i) {
				var m = b("bs_curry")._1(b("MWUIThreadEmoji.bs").useEmoji, void 0);
				m = {
					color: b("MWTheme.bs").bottom(H),
					otherUserFbid: f,
					customLikeEmoji: m,
					isTabFocused: l,
					shouldShowMenu: s,
					hasContent: z,
					repliedToMessage: A,
					actionTrayOpen: i,
					closeActionTray: e,
					onContentsChange: L,
					onFileUploadStart: M,
					openActionTray: a,
					fileUploadHandlerRef: g,
					closeReplyPreview: E,
					openTabFromPreview: function(a) {
						return u("OpenTabFromPreview")
					},
					closeTab: v,
					onSendMessage: F
				};
				o !== void 0 && (m.initialComposerViewState = b("bs_caml_option").valFromOption(o));
				C !== void 0 && (m.messageRequestInfoText = b("bs_caml_option").valFromOption(C));
				D !== void 0 && (m.onTypingStateChanged = b("bs_caml_option").valFromOption(D));
				var q = h.jsx(b("MWChatComposer.bs").make, m),
					w;
				if (R && !Q) w = null;
				else if (typeof t === "number") switch (t) {
					case 0:
						w = q;
						break;
					case 1:
						w = h.jsx(b("MWChatUserComposer.bs").make, {
							threadId: c,
							chatComposer: function(a) {
								return q
							}
						});
						break;
					case 2:
						w = h.jsx(b("MWUIDisabledPageComposer.bs").make, {});
						break;
					case 3:
						w = h.jsx(b("MWChatLeftGroupComposer.bs").make, {});
						break;
					case 4:
						w = h.jsx(h.Suspense, {
							children: h.jsx(p, {
								closeTab: v
							}),
							fallback: null
						});
						break;
					case 5:
						w = h.jsx(b("MWChatWorkDeactivatedComposer.bs").make, {});
						break;
					case 6:
						w = h.jsx(b("MWChatWorkGardenArchivedComposer.bs").make, {});
						break;
					case 7:
						w = h.jsxs(h.Fragment, {
							children: [h.jsx(h.Suspense, {
								children: h.jsx(r, {}),
								fallback: null
							}), q]
						});
						break;
					case 8:
						w = h.jsx(b("MWChatEmptyComposer.bs").make, {});
						break
				} else switch (t.TAG | 0) {
					case 0:
						w = h.jsx(h.Suspense, {
							children: h.jsx(k, j(t.otherUserFbid, t.reportingToken, void 0, void 0, void 0)),
							fallback: null
						});
						break;
					case 1:
						w = h.jsx(h.Suspense, {
							children: h.jsx(n, {
								fbid: t.otherUserFbid,
								reportingToken: t.reportingToken
							}),
							fallback: null
						});
						break;
					case 2:
						w = null;
						break
				}
				return h.jsxs(h.Fragment, {
					children: [O !== void 0 && !Q ? h.jsx(b("LSThreadNullstate.bs").make, {
						thread: d,
						nullstate: O,
						nullstateCtas: P
					}) : null, w]
				})
			},
			threadView: function(a) {
				return h.jsx(b("MWChatThread.bs").make, {
					id: c,
					items: e,
					isScrolledToBottomRef: m,
					setCovidSheet: I,
					dispatch: u,
					icebreakerUI: G,
					contextBannerData: g,
					welcomePageData: i,
					managePageMessagesLink: y,
					spacerRef: a,
					scrollerRef: q,
					buildSharedMediaViewerURL: B
				})
			},
			animationEnabled: J,
			ensureScrolledToBottom: K,
			covidSheet: a[0],
			mediaDropDisabled: !(t === 0 || t === 7),
			id: c,
			contextBannerData: g,
			welcomePageData: i,
			shouldInitiallyOpenActionTray: b("MWChatComposerP2PPopoverTrigger.bs").shouldShowOnLoad(c),
			senderUnsendNUXEnabled: l
		})
	}
	d = {
		make: s
	};

	function e(a) {
		var c = a.id,
			d = a.items,
			e = a.otherUserFbid,
			f = a.contextBannerData,
			g = a.welcomePageData,
			i = a.isTabFocused,
			j = a.isScrolledToBottomRef,
			k = a.initialComposerViewState,
			l = a.scrollerRef,
			m = a.shouldShowMenu,
			n = a.composerType,
			o = a.dispatch,
			p = a.closeTab,
			q = a.endFirstChatTabOpenLoggerRef,
			r = a.icebreakerUI,
			t = a.managePageMessagesLink,
			u = a.hasContent,
			v = a.repliedToMessage,
			w = a.buildSharedMediaViewerURL,
			x = a.messageRequestInfoText,
			y = a.sendTypingIndicator,
			z = a.closeReplyPreview;
		a = a.onSendMessage;
		r = r !== void 0 ? b("bs_caml_option").valFromOption(r) : null;
		var A = b("SkytaleDBHook.bs").useHook(void 0),
			B = b("MWThreadKey.bs").useIdMemoizedExn(void 0),
			C = b("SkytaleDBQuerySubscriptionHook.bs").useFirst(h.useMemo(function() {
				return b("SkytaleDBQuery.bs").getKeyRange(b("SkytaleDB").table(A, "threads").asc, {
					hd: B,
					tl: 0
				})
			}, [A, B]));
		if (C === void 0) return null;
		c = {
			id: c,
			thread: C,
			items: d,
			otherUserFbid: e,
			contextBannerData: f,
			welcomePageData: g,
			isTabFocused: i,
			isScrolledToBottomRef: j,
			scrollerRef: l,
			shouldShowMenu: m,
			composerType: n,
			dispatch: o,
			closeTab: p,
			endFirstChatTabOpenLoggerRef: q,
			icebreakerUI: r,
			managePageMessagesLink: t,
			hasContent: u,
			repliedToMessage: v,
			buildSharedMediaViewerURL: w,
			closeReplyPreview: z,
			onSendMessage: a
		};
		k !== void 0 && (c.initialComposerViewState = b("bs_caml_option").valFromOption(k));
		x !== void 0 && (c.messageRequestInfoText = b("bs_caml_option").valFromOption(x));
		y !== void 0 && (c.sendTypingIndicator = b("bs_caml_option").valFromOption(y));
		return h.jsx(s, c)
	}
	var t = b("MWChatTabContentStyles.bs").styles;
	e = e;
	f.MWChatBlockedComposerLazy = l;
	f.MWChatBlockedPageComposerLazy = a;
	f.MWChatWorkMessageRequestComposerLazy = c;
	f.InternalOnlyWorkChatComposerExtrasLazy = g;
	f.styles = t;
	f.Inner = d;
	f.make = e
}), null);