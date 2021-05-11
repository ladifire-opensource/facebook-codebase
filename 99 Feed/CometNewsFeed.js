__d("CometNewsFeed.react", ["fbt", "CometBackupPlaceholder.react", "CometFallbackEffectWorkaround.react", "CometFeedEndOfFeedMessageForNewsfeedOnly.react", "CometFeedInfiniteScrollSuspenseList.react", "CometFeedKeyboardNavPositionContext", "CometFeedTailLoadConfig", "CometFeedUnitErrorBoundary.react", "CometFeedUnitSetDebugInfoContextProvider.react", "CometFeedUnitSetStatusContext", "CometFeedUnitStatusListPassiveContext", "CometFeedUnitsTypedLoggerLite", "CometFocusArea.react", "CometHeroFeedItem.react", "CometHeroHoldTrigger.react", "CometNewsFeedLoadedFalcoEvent", "CometNewsfeedOrderingDebuggingState", "CometNewsFeedUnit.react", "CometRelay", "CometScreenReaderHeading.react", "ErrorGuard", "FBLogger", "GHLSurfaceContainerContext", "HiddenSubtreePassiveContext", "InteractionTracingMetrics", "React", "VideoAutoplayLocalScopeProvider.react", "VideoPlayerAutoplayRulesProvider", "clearTimeout", "gkx", "qex", "requireCond", "setTimeout", "useCometFeedIneligibleUnitLogger", "useCometFeedKeyCommands", "useCometFeedRequestWaterfallLogger", "useCometFeedUnitReordering", "useCometInteractionTracing", "useSimpleImpression", "cr:1813330", "cr:1142206", "CometNewsFeed_viewer.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = b("React"),
		k = b("gkx")("1101967"),
		l = b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("default_feed"),
		m = b("CometFeedTailLoadConfig").fetchCount,
		n = "homepage_stream",
		o = b("gkx")("1217157") ? [2, 2, 2, 2, 4] : void 0,
		p = h !== void 0 ? h : h = b("CometNewsFeed_viewer.graphql"),
		q = j.memo(function(a) {
			var c, d = a.edge,
				e = a.position,
				f = a.setFeedUnitRecord;
			a = a.variables;
			var g = j.useRef(!1),
				h = d.node;
			if (h == null) return null;
			var i = (c = h.__typename) != null ? c : null;
			return j.jsx(b("CometHeroFeedItem.react"), {
				position: e,
				children: j.jsx(b("CometBackupPlaceholder.react"), {
					fallback: j.jsx(b("CometFallbackEffectWorkaround.react"), {
						onMount: function() {
							b("CometFeedUnitsTypedLoggerLite").log({
								category: d.category,
								event: "unexpected_resuspense",
								position: e,
								render_location: n,
								unit_name: i
							})
						}
					}),
					unstable_onSuspense: function(a) {
						g.current || (b("CometFeedUnitsTypedLoggerLite").log({
							category: d.category,
							event: "unexpected_resuspense_with_name",
							position: e,
							promise_name: a,
							render_location: n,
							unit_name: i
						}), g.current = !0)
					},
					children: j.jsx(b("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContextProvider, {
						category: d.category,
						deduplicationKey: d.deduplication_key,
						setFeedUnitRecord: f,
						children: j.jsx(b("CometFeedUnitErrorBoundary.react"), {
							category: (c = d.category) != null ? c : void 0,
							feedUnit: h,
							position: e,
							renderLocation: n,
							unitTypename: i,
							children: j.jsx(b("CometNewsFeedUnit.react"), {
								edge: d,
								position: e,
								variables: a
							})
						})
					})
				})
			})
		});

	function a(a) {
		var c, d, e = j.useState(!1),
			f = e[0],
			h = e[1];
		e = j.useState(!1);
		var r = e[0],
			s = e[1];
		e = b("CometRelay").usePaginationFragment(p, a.viewer);
		var t = e.data,
			u = e.hasNext,
			v = e.isLoadingNext,
			w = e.loadNext,
			x = b("CometRelay").useIsParentQueryActive(p, a.viewer);
		e = a.endOfFeedComponent;
		var y = a.isHomeFeed,
			z = a.isReloading,
			A = a.onReload,
			B = a.variables;
		a = t == null ? void 0 : t.is_fb_employee;
		var C = t == null ? void 0 : t.news_feed;
		c = (c = t == null ? void 0 : t.can_have_friends) != null ? c : !0;
		d = (d = t == null ? void 0 : (d = t.actor) == null ? void 0 : d.name) != null ? d : null;
		var D = v || x || !r || z,
			E = !f && (u || x || !r),
			F = t == null ? void 0 : (v = t.news_feed) == null ? void 0 : v.injected_stories;
		z = (C == null ? void 0 : C.page_info) != null;
		t = t == null ? void 0 : (v = t.all_friends) == null ? void 0 : v.friend_count;
		var G = (v = C == null ? void 0 : C.edges) != null ? v : [];
		C = j.useRef(null);
		var H = j.useRef(null);
		j.useEffect(function() {
			var a = {
				didMount: r,
				hasMore: E,
				hasNextFromPaginationFragment: u,
				isParentQueryActive: x,
				tailLoadErrored: f
			};
			if (H.current != null && H.current.tailLoadErrored === !1 && H.current.hasMore === !1 && E === !0) {
				var c;
				c = (c = (i || (i = b("ErrorGuard"))).applyWithGuard(function() {
					return JSON.stringify({
						hasMoreObject: a,
						previousHasMoreObject: H.current
					})
				}, null, [])) != null ? c : "";
				b("FBLogger")("CometNewsfeedHasMoreUnstable").addMetadata("COMET_FEED", "FEED_UNIT_RECEIVED_COUNT", String(G.length)).mustfix("hasMore unexpectedly became true again after being false\n\n" + c)
			}
			H.current = a
		}, [r, G.length, E, u, x, f]);
		var I = j.useRef(0),
			J = Math.max(I.current, G.length);
		j.useEffect(function() {
			I.current = J
		}, [J]);
		b("useCometFeedIneligibleUnitLogger")(G, n);
		var K = j.useContext(b("HiddenSubtreePassiveContext"));
		j.useEffect(function() {
			b("CometNewsFeedLoadedFalcoEvent").log(function() {
				return {
					feed_unit_count: L.length,
					feed_unit_received_count: G.length,
					was_in_hidden_subtree: K.getCurrentState().hiddenOrBackgrounded_FIXME
				}
			})
		}, []);
		j.useEffect(function() {
			s(!0)
		}, []);
		j.useEffect(function() {
			b("CometNewsfeedOrderingDebuggingState").setHasInjectedStories(F != null)
		}, [F]);
		v = b("useCometFeedUnitReordering")(G, b("gkx")("951936") && !F, k);
		var L = v.feedEdgesToRender,
			M = v.getFeedUnitStatusListPassive,
			N = v.setFeedUnitRecord,
			O = b("useCometInteractionTracing")(30605313, "fluid", "TAIL_LOAD");
		v = b("useCometFeedRequestWaterfallLogger")(G, L, !!a);
		var P = v[0],
			Q = v[1],
			R = j.useRef(null),
			S = j.useCallback(function() {
				var a = R.current;
				b("cr:1142206") != null && b("cr:1142206").log("[handleLoadMore]", "checking if we have hasNext or are isLoading", {
					hasNext: E,
					isDelayingNextCall: a,
					isLoading: D
				});
				if (!E || D || a) return;
				b("cr:1142206") != null && b("cr:1142206").log("[handleLoadMore]", "starting tail load with trace");
				O(function(a) {
					var c = P();

					function d() {
						w(m, {
							UNSTABLE_extraVariables: {
								clientQueryId: c
							},
							onComplete: function(a) {
								a != null && (h(!0), Q(a), b("cr:1142206") != null && b("cr:1142206").log("[loadNext]", "Failed to fetch next page", {
									errorMessage: a.toString(),
									hasNext: E,
									isLoading: D
								}))
							}
						})
					}
					if (y === !0 && b("qex")._("1612586")) {
						R.current = b("setTimeout")(function() {
							R.current = null, d()
						}, (a = b("qex")._("1612587")) != null ? a : 0)
					} else d()
				})
			}, [E, y, D, w, Q, P, O]);
		j.useEffect(function() {
			return function() {
				R.current && (b("clearTimeout")(R.current), R.current = null)
			}
		});
		a = j.useCallback(function() {
			h(!1), S()
		}, [S]);
		b("useSimpleImpression")(function() {
			b("InteractionTracingMetrics").currentInteractionLogger().addMetadata("comet_news_feed_count", L.length)
		});
		v = null;
		F != null && (v = b("CometRelay").ModuleResource.read(F));
		var T = {},
			U = 0,
			V = L.map(function(a, b) {
				if (a.node == null) return null;
				var c = a.deduplication_key;
				c != null ? (T[c] != null ? T[c] += 1 : T[c] = 1, c = c + "-" + T[c].toString()) : c = b.toString();
				return j.jsx(q, {
					edge: a,
					position: U++,
					setFeedUnitRecord: N,
					variables: B
				}, c)
			});
		b("cr:1813330") != null && b("cr:1813330").setNewsFeedCount(V.length);
		var W = b("useCometFeedKeyCommands")(L.length, "newsfeed"),
			X = !D && !E,
			Y = !z || f;
		return j.jsx("div", {
			"data-testid": void 0,
			ref: C,
			role: "feed",
			children: j.jsxs(b("CometFocusArea.react").CometFocusArea, {
				order: 5,
				children: [j.jsx(b("CometScreenReaderHeading.react"), {
					children: g._("B\u00e0i vi\u1ebft tr\u00ean B\u1ea3ng tin")
				}), j.jsx(b("VideoAutoplayLocalScopeProvider.react"), {
					autoplayLocalRules: l,
					children: j.jsx(b("GHLSurfaceContainerContext").Provider, {
						value: C,
						children: j.jsxs(b("CometFeedKeyboardNavPositionContext").Provider, {
							value: W,
							children: [v ? j.jsx(v, {}) : null, j.jsx(b("CometFeedUnitStatusListPassiveContext").Provider, {
								value: M,
								children: j.jsxs(b("CometFeedUnitSetDebugInfoContextProvider.react"), {
									location: "newsfeed",
									children: [j.jsx(b("CometHeroHoldTrigger.react"), {
										description: "FeedQuery",
										hold: (E || D) && L.length < 2
									}), j.jsx(b("CometFeedInfiniteScrollSuspenseList.react"), {
										hasMore: E,
										incrementalRendering: b("gkx")("1745675"),
										incrementalRenderingPageSizes: o,
										interactionSource: 0,
										isLoading: D,
										onLoadMore: S,
										pageletName: "FeedUnit",
										waitOnScrollIntent: !0,
										children: V
									})]
								})
							}), X ? j.jsx(b("CometFeedEndOfFeedMessageForNewsfeedOnly.react"), {
								canHaveFriends: c,
								endOfFeedComponent: e,
								feedUnitReceivedCount: G.length,
								feedUnitRenderedCount: L.length,
								friendsCount: t,
								hasPageInfo: z,
								isError: Y,
								maxFeedUnitsReceived: J,
								onReload: A,
								onTailLoadReload: a,
								renderLocation: n,
								tailLoadErrored: f,
								viewerName: d
							}) : null]
						})
					})
				})]
			})
		})
	}
}), null);