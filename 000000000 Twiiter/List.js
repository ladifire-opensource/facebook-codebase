(window.webpackJsonp = window.webpackJsonp || []).push([
	[147], {
		"3GUV": function(e, t, s) {
			"use strict";
			var n = s("ERkP"),
				r = s("rHpw"),
				i = s("MWbm");
			class o extends n.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return n.createElement(i.a, {
						style: a.root
					})
				}
			}
			const a = r.a.create(e => ({
				root: {
					height: 5 * parseInt(e.lineHeight, 10) + "rem"
				}
			}));
			t.a = o
		},
		"5UID": function(e, t, s) {
			"use strict";
			var n = s("ERkP"),
				r = s("3XMw"),
				i = s.n(r),
				o = s("rHpw"),
				a = s("+/1j"),
				c = s("MWbm");
			const l = i.a.e5b0063d;
			let h = 0;
			class d extends n.Component {
				constructor() {
					super(), this._listDomId = "accessible-list-" + h, h += 1
				}
				render() {
					const {
						children: e,
						title: t
					} = this.props, s = l({
						title: t
					});
					return n.createElement(c.a, {
						accessibilityRole: "region",
						"aria-labelledby": this._listDomId
					}, n.createElement(a.a, {
						accessibilityRole: "heading",
						"aria-level": 1,
						nativeID: this._listDomId,
						style: o.a.visuallyHidden
					}, t), n.createElement(c.a, {
						accessibilityLabel: s
					}, e))
				}
			}
			t.a = d
		},
		JsJV: function(e, t, s) {
			"use strict";
			var n = s("6/RC"),
				r = s("tI3i"),
				i = s.n(r),
				o = n.canUseDOM ? window.location.href : "",
				a = {
					addEventListener: function() {},
					removeEventListener: function() {},
					canOpenURL: function() {
						return Promise.resolve(!0)
					},
					getInitialURL: function() {
						return Promise.resolve(o)
					},
					openURL: function(e) {
						try {
							return c(e), Promise.resolve()
						} catch (e) {
							return Promise.reject(e)
						}
					},
					_validateURL: function(e) {
						i()("string" == typeof e, "Invalid URL: should be a string. Was: " + e), i()(e, "Invalid URL: cannot be empty")
					}
				},
				c = function(e) {
					n.canUseDOM && (window.location = new URL(e, window.location).toString())
				};
			t.a = a
		},
		VeNJ: function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "TimelineRenderer", (function() {
				return me
			}));
			s("IAdD"), s("kYxP");
			var n = s("KEM+"),
				r = s.n(n),
				i = s("n+Zb"),
				o = s("ERkP"),
				a = s("7nmT"),
				c = s.n(a),
				l = s("nfVA"),
				h = s("EhiH"),
				d = s("zrc3");
			const p = (e, t) => {
				const s = Object(h.a)(e, e => t.has(e.entryId));
				return s ? s.entryId : void 0
			};
			var m = s("5UID"),
				u = s("6/RC"),
				_ = s("1YZw"),
				y = s("rxPX"),
				b = Object(y.a)().propsFromActions(() => ({
					addToast: _.b
				})).withAnalytics(),
				g = s("KNCp"),
				f = s("lUZE");
			var v = Object.freeze({
					Icon: "Icon",
					IconSmall: "IconSmall",
					FullWidth: "FullWidth"
				}),
				C = s("caTy"),
				I = s("TnY3"),
				E = s("TIdA"),
				w = s("A91F"),
				T = s("feu+"),
				R = s("JsJV"),
				x = s("MWbm"),
				S = s("oQhu"),
				A = s("fs1G"),
				L = s("rcen");
			class O extends o.PureComponent {
				constructor(...e) {
					super(...e), r()(this, "_getGraphicProps", Object(S.a)((e, t) => {
						const s = e ? ({
							style: t
						}) => o.createElement(x.a, {
							style: t
						}, o.createElement(E.a, {
							accessibilityLabel: "",
							aspectMode: w.a.exact(e.width / e.height),
							image: e
						})) : f.a;
						let n = "illustration";
						return e && t !== v.IconSmall ? t === v.FullWidth && (n = "illustrationFullWidth") : n = "icon", {
							graphic: s,
							graphicDisplayMode: n
						}
					})), r()(this, "_scribeAction", (e, t) => {
						const {
							analytics: s
						} = this.props, {
							action: n,
							component: r,
							element: i
						} = t || {};
						s.scribe({
							action: n || e,
							component: r || "cover",
							element: i
						})
					}), r()(this, "_handleDismiss", () => {
						const {
							dismissInfo: e,
							processCallback: t
						} = this.props, {
							callbacks: s,
							clientEventInfo: n
						} = e || {};
						s && s.forEach(e => {
							t(e)
						}), e && (this._scribeAction("dismiss", n), this.props.onClose())
					}), r()(this, "_handlePrimaryCtaClick", () => {
						this._handleCtaClick(this.props.primaryCta, "primary_cta")
					}), r()(this, "_handleSecondaryCtaClick", () => {
						this.props.secondaryCta && this._handleCtaClick(this.props.secondaryCta, "secondary_cta")
					}), r()(this, "_handleCtaClick", ({
						ctaBehavior: e,
						callbacks: t,
						clientEventInfo: s
					}, n) => {
						const {
							addToast: r,
							processCallback: i,
							history: o
						} = this.props;
						if (this.props.onClose(), this._scribeAction("click", Object.assign({
								element: n
							}, s)), e.dismiss) {
							const {
								dismiss: t
							} = e;
							t && t.feedbackMessage && r({
								text: t.feedbackMessage.text
							})
						}
						if (e.navigate) {
							const {
								navigate: t
							} = e, s = t && Object(C.b)(t.url);
							s && (s.external ? R.a.openURL(s.pathname) : o.push(s.pathname))
						}
						t && t.forEach(e => i(e))
					})
				}
				componentDidMount() {
					this.props.onImpression && this.props.onImpression()
				}
				render() {
					const {
						image: e,
						imageDisplayType: t,
						primaryText: s,
						primaryCta: n,
						secondaryText: r,
						secondaryCta: i,
						details: a,
						displayType: c,
						type: l,
						dismissInfo: h
					} = this.props, d = o.createElement(L.b, {
						entities: s.entities,
						text: s.text
					}), p = r ? o.createElement(L.b, {
						entities: r.entities,
						text: r.text
					}) : null;
					if (l === g.a.Full) {
						const l = a ? o.createElement(L.b, {
								entities: a.entities,
								text: a.text
							}) : null,
							{
								graphic: m,
								graphicDisplayMode: u
							} = this._getGraphicProps(e, t);
						return o.createElement(T.a, {
							actionLabel: n.text,
							footer: l,
							footerAlign: a && a.alignment === L.a.Center ? "center" : "left",
							graphic: m,
							graphicDisplayMode: u,
							headline: d,
							headlineAlign: s.alignment === L.a.Natural ? "left" : "center",
							isFullHeightOnMobile: !h && "CenterCover" !== c,
							onAction: this._handlePrimaryCtaClick,
							onClose: this._handleDismiss,
							onTertiaryAction: this._handleSecondaryCtaClick,
							subtext: p,
							subtextAlign: r && r.alignment === L.a.Natural ? "left" : "center",
							tertiaryActionLabel: i && i.text,
							withCloseButton: !!h
						})
					}
					return o.createElement(T.a, {
						actionLabel: n.text,
						graphicDisplayMode: "none",
						headline: d,
						headlineAlign: s.alignment === L.a.Center ? "center" : "left",
						onAction: this._handlePrimaryCtaClick,
						onClose: A.a,
						onSecondaryAction: this._handleSecondaryCtaClick,
						secondaryActionLabel: i && i.text,
						subtext: p,
						subtextAlign: r && r.alignment === L.a.Center ? "center" : "left",
						withCloseButton: !1
					})
				}
			}
			r()(O, "defaultProps", {
				imageDisplayType: v.Icon
			});
			var D = Object(I.a)(b(O)),
				N = s("wrlS"),
				k = s("8UdT"),
				j = s("MDbM"),
				P = (s("C1yv"), s("Qyxo"));
			class M {
				constructor() {
					this._lingerScribed = {}, this._appearance = {}
				}
				processPositioningUpdate(e, t, s = Date.now()) {
					const n = U(e, t);
					return this._lingerTransition(n, s)
				}
				flushLingerEvents(e = Date.now()) {
					return this._detectScribeLingerEvents(this._appearance, {}, e)
				}
				_lingerTransition(e, t) {
					const s = this._appearance;
					return this._appearance = e.reduce((e, n) => (e[n] = s[n] || {
						start: t,
						lingered: !1
					}, e), {}), {
						allLingerEvents: this._detectAllLingerEvents(s, t),
						scribeLingerEvents: this._detectScribeLingerEvents(s, this._appearance, t)
					}
				}
				_detectAllLingerEvents(e, t) {
					return Object.keys(e).reduce((s, n) => {
						const {
							start: r,
							lingered: i
						} = e[n];
						return !i && t - r >= 500 && (s.push(n), this._appearance[n] && (this._appearance[n] = Object.assign({}, this._appearance[n], {
							lingered: !0
						}))), s
					}, [])
				}
				_detectScribeLingerEvents(e, t, s) {
					return Object.keys(e).reduce((n, r) => {
						const {
							start: i
						} = e[r];
						return !t[r] && !this._lingerScribed[r] && s - i >= 500 && (this._lingerScribed[r] = !0, n.push({
							id: r,
							start: i,
							end: s
						})), n
					}, [])
				}
			}
			const U = (e, t) => Object(P.a)(e, ({
					id: e,
					rectangle: s
				}) => F(s, t) >= .5 * s.getHeight() ? e : void 0),
				F = (e, t) => Math.max(0, Math.min(e.getBottom(), t.getBottom()) - Math.max(e.getTop(), t.getTop()));
			var B = s("OrGc"),
				H = s("hACr"),
				W = s("VPAj"),
				V = s("3GUV"),
				G = s("v//M"),
				K = s("rHpw");
			const z = Object(W.a)(o.createElement(V.a, null)),
				J = ({
					bottomFetchStatus: e,
					onBottomRetry: t
				}) => o.createElement(x.a, {
					style: q.footer
				}, o.createElement(G.a, {
					fetchStatus: e,
					onRequestRetry: t,
					render: z
				})),
				q = K.a.create(e => ({
					footer: {
						height: `calc(5 * ${e.lineHeight}rem)`
					}
				}));
			var Z = o.memo(J),
				Y = s("xjVt"),
				Q = s("EUHl"),
				X = s("aWzz"),
				$ = s("IG4P"),
				ee = s("iBK2"),
				te = s("b1wW");
			s("rxtR");
			const se = Object.freeze({
				ON_LINGER: "onLinger"
			});
			var ne = s("aITJ"),
				re = s("cFgU"),
				ie = s("/NU0"),
				oe = s("iChn"),
				ae = s("+d3d");
			const ce = e => e.entryId,
				le = e => e.sortIndex;
			const he = new Map,
				de = () => {
					const e = ne.a.isDesktopOS() ? N.b.getValue("responsive_web_vs_config_desktop_assumed_item_height")/*TODO: 100*/ : void 0;
					return Object(ie.a)(e) ? e : void 0
				};









			let pe;
			class me extends o.PureComponent {
				constructor(e) {
					super(e), r()(this, "_entryRefs", new Map), r()(this, "_adjustFocusBy", e => {
						this._shouldPreventKeyboardShortcuts() || this._updateFocus((t, s, n) => {
							let r = t && ((e, t, s, n) => {
								const r = e ? Object(d.a)(s, t => t.entryId === e) : -1;
								if (r >= 0) {
									for (let e = r >= 0 ? r + t : 0; e >= 0 && e < s.length; e += t) {
										const {
											entryId: t
										} = s[e];
										if (n.has(t)) return t
									}
								}
								return r >= 0 ? e : void 0
							})(t, e, s, this._entryRefs);
							if (!r && this._scroller) {
								const e = this._scroller.findTopmostVisibleId();
								r = e ? ((e, t, s) => {
									const n = Object(d.a)(t, t => t.entryId === e);
									let r;
									if (n >= 0) {
										const e = Object(h.a)(t, e => s.has(e.entryId), n);
										r = e ? e.entryId : void 0
									}
									return r || (r = p(t, s)), r
								})(e, s, this._entryRefs) : p(s, this._entryRefs)
							}
							return r
						})
					}), r()(this, "_focusNext", () => this._adjustFocusBy(1)), r()(this, "_focusPrevious", () => this._adjustFocusBy(-1)), r()(this, "_handleCoverImpression", () => {
						const {
							activeCover: e,
							scribeAction: t,
							processCallback: s,
							scribeNamespace: n
						} = this.props;
						if (!e) return;
						const {
							clientEventInfo: r,
							cover: {
								impressionCallbacks: i
							}
						} = e;
						i && i.forEach(e => s(e));
						let o = Object.assign({}, n, {
							component: "cover",
							action: "impression"
						});
						r && (o = Object.assign({}, o, {
							component: r.component || o.component,
							element: r.element || o.element,
							action: r.action || o.action
						})), t(o)
					}), r()(this, "_handleDismissCover", () => {
						this.props.clearActiveCover()
					}), r()(this, "_renderLoadBottom", () => {
						const {
							bottomFetchStatus: e,
							onBottomRetry: t
						} = this.props;
						return o.createElement(Z, {
							bottomFetchStatus: e,
							onBottomRetry: t
						})
					}), r()(this, "_refreshControlWrapper", e => {
						const {
							canRefresh: t,
							refreshControl: s,
							topFetchStatus: n,
							onRefresh: r
						} = this.props;
						return s ? o.createElement(s, {
							canRefresh: t,
							isRefreshing: n === j.a.LOADING,
							onRefresh: r
						}, e) : e
					}), r()(this, "_getCellRenderer", Object(S.a)((e, t) => {
						let s;
						const n = {
							module: t,
							renderEntry: e => s(e),
							entryRef: this._setEntryRef
						};
						return s = t => {
							const s = e.getHandler(t);
							return s && s.render ? s.render(t, n) : null
						}, s
					})), r()(this, "_setEntryRef", (e, t) => {
						this._entryRefs.set(e, t)
					}), r()(this, "_getInitialFocusedEntry", Object(S.a)((e, t) => t && e.find(t))), r()(this, "_createEntryIndex", Object(S.a)(e => Object(oe.a)(e, e => e.entryId))), r()(this, "_handleBeforeWindowUnload", () => {
						this._flushLingerScribes()
					}), r()(this, "isAtTop", () => !!this._scroller && this._scroller.scrollToTop()), r()(this, "scrollToTop", () => {
						this._scroller && (this._scroller.scrollToTop(), this._updateFocus((e, t, s) => e ? p(t, s) : void 0, {
							block: "nearest"
						}))
					}), r()(this, "_shouldPreventKeyboardShortcuts", () => {
						const {
							isModal: e,
							withKeyboardShortcuts: t
						} = this.props;
						return pe && !e || !t
					}), r()(this, "_handleRefreshKeyboardShortcut", Object(ae.a)(() => {
						this._shouldPreventKeyboardShortcuts() || this.refreshOrGoTop()
					}, 1e3)), r()(this, "_handleAtBottom", this._proximityHandler(() => {
						this.props.onAtBottom && this.props.onAtBottom()
					})), r()(this, "_handleNearBottom", this._proximityHandler(() => {
						this.props.onNearBottom()
					})), r()(this, "_handleNearTop", this._proximityHandler(() => {
						const {
							onNearTop: e
						} = this.props;
						e()
					})), r()(this, "_handleAtTop", this._proximityHandler(() => {
						this.props.removeAlert && this.props.removeAlert(), this.props.onAtTop && this.props.onAtTop()
					})), r()(this, "_handleItemsRendered", this._proximityHandler(({
						viewport: e,
						positions: t
					}) => {
						const s = this._impressionTracker.processPositioningUpdate(t, e);
						this._scribeLingerEvents(s.scribeLingerEvents), this._handleOnLingerEvents(s.allLingerEvents)
					})), r()(this, "_handleOnLingerEvents", e => {
						const {
							applyReactionInstructions: t
						} = this.props, s = this._getEntryIndex();
						e.forEach(e => {
							const n = s[e];
							n && t({
								entry: n,
								triggerName: se.ON_LINGER
							})
						})
					}), r()(this, "_handlePositionRestored", () => {
						this._positionedRestored = !0
					}), r()(this, "_scribeNewEntries", function(e) {
						const t = u.canUseDOM ? window.requestIdleCallback || window.requestAnimationFrame : A.a;
						return s => {
							t(() => {
								e(s)
							})
						}
					}(e => {
						const {
							richScribeAction: t,
							scribeNamespace: s
						} = this.props, n = this._buildStreamScribeData(e);
						if (n.length > 0) {
							t(Object.assign({}, s, {
								component: "stream",
								action: "results"
							}), {
								items: n
							})
						}
					})), r()(this, "_setScroller", e => {
						this._scroller = e
					}), this._impressionTracker = new M
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.timelineId !== e.timelineId && (this._flushLingerScribes(), this._impressionTracker = new M)
				}
				componentDidMount() {
					const {
						isModal: e,
						onRef: t
					} = this.props;
					this._initialize(), window.addEventListener("beforelogout", this._handleBeforeWindowUnload), window.addEventListener("beforeunload", this._handleBeforeWindowUnload), t && t(this), e && (pe = !0)
				}
				componentWillUnmount() {
					const {
						isModal: e,
						onRef: t
					} = this.props;
					this._flushLingerScribes(), window.removeEventListener("beforelogout", this._handleBeforeWindowUnload), window.removeEventListener("beforeunload", this._handleBeforeWindowUnload), t && t(void 0), e && (pe = !1)
				}
				componentDidUpdate(e) {
					const {
						entries: t,
						handlerRegistry: s,
						timelineId: n,
						onRef: r
					} = this.props;
					n !== e.timelineId ? this._initialize() : t === e.entries && s === e.handlerRegistry || this._scribeNewEntries(t), r && r !== e.onRef && r(this)
				}
				_updateFocus(e, t) {
					const s = e(this._activeEntryId, this.props.entries, this._entryRefs);
					if (s !== this._activeEntryId) {
						this._activeEntryId = s;
						const e = this._activeEntryId && this._entryRefs.get(this._activeEntryId);
						e && ((e, t, s) => {
							const n = c.a.findDOMNode(e),
								r = n && n instanceof window.HTMLElement && n.querySelector("a, [tabindex='0']");
							if (r) {
								r.scrollIntoView(s), r.focus();
								const e = (t || l.a.root()).getRect().getTop();
								e > 0 && window.scrollBy(0, -1 * e)
							}
						})(e, this.context.viewport, t)
					}
				}
				render() {
					const {
						activeCover: e,
						anchoring: t,
						entries: s,
						handlerRegistry: n,
						showFooter: r,
						header: a,
						isInitialFocusEntry: c,
						nearStartProximityRatio: l,
						renderEmptyState: h,
						scrollerDisplayType: d,
						timelineId: p,
						title: u,
						module: _
					} = this.props, y = this.props.scroller, b = this._getInitialFocusedEntry(s, c);
					return this._refreshControlWrapper(this._shouldRenderEmptyState(s) ? h() : o.createElement(m.a, {
						title: u
					}, e ? this._renderActiveCover() : null, this._renderPill(), o.createElement(H.a, {
						handlers: {
							[B.d.loadNewTweets]: this._handleRefreshKeyboardShortcut,
							[B.d.nextItem]: this._focusNext,
							[B.d.previousItem]: this._focusPrevious
						}
					}, o.createElement(y, {
						anchoring: t,
						assumedItemHeight: de(),
						cacheKey: p,
						footer: r && this._renderLoadBottom(),
						header: a,
						identityFunction: ce,
						initialAnchor: b && i.b(ce(b)),
						items: s,
						nearStartProximityRatio: l,
						onAtEnd: this._handleAtBottom,
						onAtStart: this._handleAtTop,
						onItemsRendered: this._handleItemsRendered,
						onNearEnd: this._handleNearBottom,
						onNearStart: this._handleNearTop,
						onPositionRestored: this._handlePositionRestored,
						ref: this._setScroller,
						renderer: this._getCellRenderer(n, _),
						scrollerDisplayType: d,
						sortIndexFunction: le
					}))))
				}
				_renderPill() {
					const {
						alert: e,
						removeAlert: t,
						topUnseenCount: s,
						newTweetsPillMode: n,
						scribeNamespace: r,
						timelineId: i
					} = this.props;
					return n ? n === Q.a.URT ? o.createElement(Y.a.Configure, {
						alert: e,
						removeAlert: t,
						scribeNamespace: r,
						timelineId: i
					}) : n === Q.a.CLIENT && s && s > 0 && N.b.isTrue("responsive_web_tweets_pill_local_enabled") ? o.createElement(Y.a.Configure, {
						removeAlert: t,
						scribeNamespace: r,
						timelineId: i,
						unreadCount: s
					}) : void 0 : null
				}
				_renderActiveCover() {
					const {
						activeCover: e
					} = this.props, t = e && e.cover;
					return e && t ? "full" === e.type ? this._renderFullCover(e.cover) : "half" === e.type ? this._renderHalfCover(e.cover) : null : null
				}
				_renderFullCover(e) {
					const {
						processCallback: t
					} = this.props;
					return o.createElement(D, {
						details: e.details || void 0,
						dismissInfo: e.dismissInfo,
						displayType: e.displayType,
						image: e.image,
						imageDisplayType: e.imageDisplayType || void 0,
						onClose: this._handleDismissCover,
						onImpression: this._handleCoverImpression,
						primaryCta: e.primaryCoverCta,
						primaryText: e.primaryText,
						processCallback: t,
						secondaryCta: e.secondaryCoverCta,
						secondaryText: e.secondaryText,
						type: "full"
					})
				}
				_renderHalfCover(e) {
					const {
						processCallback: t
					} = this.props, s = "CenterCover" === e.displayType ? "full" : "half";
					return o.createElement(D, {
						displayType: e.displayType,
						image: e.coverImage ? e.coverImage.image : void 0,
						imageDisplayType: e.coverImage ? e.coverImage.imageDisplayType : void 0,
						onClose: this._handleDismissCover,
						onImpression: this._handleCoverImpression,
						primaryCta: e.primaryCoverCta,
						primaryText: e.primaryText,
						processCallback: t,
						secondaryCta: e.secondaryCoverCta,
						secondaryText: e.secondaryText,
						type: s
					})
				}
				_shouldRenderEmptyState(e) {
					const {
						activeCover: t,
						initialFetchStatus: s
					} = this.props, n = s === j.a.LOADED, r = 0 === e.length;
					return n && r && !t
				}
				_getEntryIndex() {
					return this._createEntryIndex(this.props.entries)
				}
				_initialize() {
					this._scribeNewEntries(this.props.entries), this._activeEntryId = void 0
				}
				_flushLingerScribes() {
					this._scribeLingerEvents(this._impressionTracker.flushLingerEvents())
				}
				refreshOrGoTop() {
					this._scroller && !this._scroller.isAtTop() ? this.scrollToTop() : this.props.onRefresh()
				}
				_proximityHandler(e) {
					return t => {
						this._positionedRestored && e(t)
					}
				}
				_buildStreamScribeData(e) {
					const {
						scribeCache: t,
						timelineId: s,
						handlerRegistry: n
					} = this.props;
					let r = null;
					if (!t.has(s)) {
						const e = new Set;
						t.set(s, e)
					}
					const i = t.get(s);
					return i ? e.reduce((e, t, s) => {
						const {
							entryId: o
						} = t;
						let a = !1;
						if (t.content && t.content.promotedMetadata && (a = t.content.promotedMetadata), !i.has(o) && !n.getNeedsLoad(t)) {
							i.add(o);
							const s = this._getScribeDataItem(n, t);
							s && (a && null !== r && (s.tweet_count = r), e.push(s))
						}
						return a ? r = 0 : null !== r && -1 === t.type.indexOf("ui_") && (r += 1), e
					}, []) : []
				}
				_storeSeenIds(e) {
					const {
						seenIds: t,
						seenIdsLatest: s,
						timelineId: n
					} = this.props;
					"home" === n && t ? t.addNewTweets(e) : "home-latest" === n && s && s.addNewTweets(e)
				}
				_scribeLingerEvents(e) {
					if (0 === e.length) return;
					const {
						handlerRegistry: t
					} = this.props, s = this._getEntryIndex(), n = [], r = [];
					if (e.forEach(({
							id: e,
							start: i,
							end: o
						}) => {
							const a = s[e];
							if (a) {
								const e = this._getScribeDataItem(t, a);
								if (e) {
									const t = {
										visibility_start: i,
										visibility_end: o
									};
									n.push(Object.assign({}, e, {
										impression_details: t
									}))
								}
								a.type === k.b.Tweet && r.push(a.content.id)
							}
						}), n.length > 0) {
						const {
							richScribeAction: e,
							scribeNamespace: t
						} = this.props;
						e(Object.assign({}, t, {
							component: "stream",
							element: "linger",
							action: "results"
						}), {
							items: n
						})
					}
					r.length > 0 && this._storeSeenIds(r)
				}
				_getScribeDataItem(e, t) {
					const s = e.getHandler(t);
					if (s) return s.getScribeDataItem(t)
				}
			}
			r()(me, "contextTypes", {
				viewport: X.object
			}), r()(me, "defaultProps", {
				showFooter: !0,
				onBottomRetry: A.a,
				onNearBottom: A.a,
				onNearTop: A.a,
				onRefresh: A.a,
				refreshControl: $.a,
				scribeCache: he,
				scroller: ee.b,
				scrollerDisplayType: te.a.Vertical,
				seenIds: Object(re.b)(),
				seenIdsLatest: Object(re.a)(),
				withKeyboardShortcuts: !0
			});
			t.default = me
		},
		"n+Zb": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = e => ({
					id: e,
					distanceToViewportTop: 0
				}),
				r = e => ({
					id: e,
					distanceToViewportBottom: 0
				})
		}
	}
]);