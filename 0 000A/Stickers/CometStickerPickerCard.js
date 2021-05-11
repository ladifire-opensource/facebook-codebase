__d("CometStickerPickerCard.react", ["fbt", "CometErrorBoundary.react", 
	"CometPickerBasicStackingLayout.react", "CometPickerNullState.react", "CometPickerNullStateContainer.react", 
	"CometPlaceholder.react", "CometProgressIndicator.react", "CometRelay", 
	"CometStickerPickerAvatarStickersContentRoot.entrypoint", "CometStickerPickerCardQuery.graphql", 
	"CometStickerPickerCustomPackContentRoot.entrypoint", "CometStickerPickerErrorState.react", 
	"CometStickerPickerPackContentRoot.react", "CometStickerPickerRecentlyUsedStickersContentRoot.entrypoint",
	 "CometStickerPickerTabs.react", "ErrorGuard", "react", 
	 "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react", 
	 "useAddLocalRecentSticker", "useCometRelayEntrypointContextualEnvironmentProvider", 
	 "useCometStickerPickerStickerTabs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j, k = i || b("react"),
		l = ["LAST_SELECTED_TAB", "CUSTOM_PACK", "SEARCH"],
		m = {
			type: "SEARCH"
		},
		n = function(a) {
			m = a
		};

	function a(a) {
		var c, d = a.entryPoints,
			e = a.extraProps,
			f = a.props,
			g = f.expanding,
			i = f.xstyle;
		f = babelHelpers.objectWithoutPropertiesLoose(f, ["expanding", "xstyle"]);
		a = a.queries.stickerPickerQueryReference;
		a = b("CometRelay").usePreloadedQuery(h !== void 0 ? h : h = b("CometStickerPickerCardQuery.graphql"), a);
		a = (a = a.picker_plugins) == null ? void 0 : (a = a.sticker_picker) == null ? void 0 : a.sticker_store;
		a = b("useCometStickerPickerStickerTabs")({
			lastSelectedTab: m,
			setLastSelectedTab: n,
			stickerStore: a,
			tabPriorities: l
		});
		var j = a[0];
		a = a[1];
		c = (c = e == null ? void 0 : e.feedbackTargetID) != null ? c : null;
		return k.jsx(b("CometPickerBasicStackingLayout.react"), {
			expanding: g,
			testid: void 0,
			xstyle: i,
			children: {
				content: k.jsx(b("CometPlaceholder.react"), {
					fallback: k.jsx(b("CometPickerNullStateContainer.react"), {
						children: k.jsx(b("CometProgressIndicator.react"), {})
					}),
					children: k.jsx(b("CometErrorBoundary.react"), {
						fallback: function() {
							return k.jsx(b("CometStickerPickerErrorState.react"), {})
						},
						children: k.jsx(o, {
							entryPoints: d,
							feedbackTargetID: c,
							props: f,
							selectedTab: a,
							stickerInterface: e == null ? void 0 : e.stickerInterface
						})
					})
				}),
				header: k.jsx(b("CometStickerPickerTabs.react"), {
					feedbackTargetID: (g = e == null ? void 0 : e.feedbackTargetID) != null ? g : null,
					stickerInterface: (i = e == null ? void 0 : e.stickerInterface) != null ? i : null,
					tabs: j
				})
			}
		})
	}

	function o(a) {
		var c = a.entryPoints.stickerSearchEntrypointReference,
			d = a.feedbackTargetID,
			e = a.props,
			f = e.onClose,
			h = e.onSelect,
			i = e.stickerHeight;
		e = e.stickerWidth;
		var l = a.selectedTab;
		a = a.stickerInterface;
		var m = b("useAddLocalRecentSticker")(),
			n = b("useCometRelayEntrypointContextualEnvironmentProvider")(),
			o = k.useCallback(function(a) {
				(j || (j = b("ErrorGuard"))).applyWithGuard(function() {
					m(a.stickerID)
				}, null, []), h == null ? void 0 : h(a)
			}, [m, h]);
		switch (l.type) {
			case "SEARCH":
				return k.jsx(b("CometRelay").EntryPointContainer, {
					entryPointReference: c,
					props: {
						onClose: f,
						onSelect: o,
						stickerHeight: i,
						stickerWidth: e
					}
				});
			case "CUSTOM_PACK":
				return k.jsx(b("react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"), {
					entryPoint: b("CometStickerPickerCustomPackContentRoot.entrypoint"),
					entryPointParams: {
						stickerHeight: i,
						stickerWidth: e,
						targetID: l.id
					},
					environmentProvider: n,
					props: {
						onSelect: o
					}
				});
			case "STICKER_PACK":
				return k.jsx(b("CometStickerPickerPackContentRoot.react"), {
					onSelect: o,
					packID: l.packID,
					stickerHeight: i,
					stickerWidth: e
				});
			case "AVATAR_PACK":
				return k.jsx(b("react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"), {
					entryPoint: b("CometStickerPickerAvatarStickersContentRoot.entrypoint"),
					entryPointParams: {
						feedbackTargetID: d,
						stickerHeight: i,
						stickerInterface: a,
						stickerWidth: e
					},
					environmentProvider: n,
					props: {
						onSelect: o
					}
				});
			case "RECENTLY_USED":
				return k.jsx(b("react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"), {
					entryPoint: b("CometStickerPickerRecentlyUsedStickersContentRoot.entrypoint"),
					entryPointParams: {
						feedbackTargetID: d,
						stickerHeight: i,
						stickerWidth: e
					},
					environmentProvider: n,
					props: {
						onSelect: h
					}
				});
			default:
				l.type
		}
		return k.jsx(b("CometPickerNullState.react"), {
			body: g._("L\u1ed7i khi t\u1ea3i nh\u00e3n d\u00e1n"),
			icon: null
		})
	}
}), null);