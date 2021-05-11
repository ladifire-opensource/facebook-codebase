__d("MWChatMultitabTabsContainer.bs", ["React", "JSResource", "stylex", "bs_caml_option", 
	"MWThreadKey.bs", "MWChatThreadId.bs", "MWUIChatTabState.bs", "MWChatInteraction.bs", 
	"MWChatStateThread.bs", "BootloaderResource", "MWThread_DEPRECATED.bs", 
	"CometErrorBoundary.re", "CometPlaceholder.react", "MWChatMultitabStateHook.bs", 
	"MWChatTabContainerShared.bs", "MWChatTabContainerLoading.bs", "CometContextualLayerAnchorRoot.re", 
	"CometHeroInteractionWithDiv.react", "CometTransientDialogProvider.react", "MWChatTabContainerWithEarlierLoading.bs", 
	"useCometDisplayTimingTrackerForInteraction"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			tray: {
				display: "j83agx80",
				position: "l9j0dhe7",
				zIndex: "du4w35lb",
				alignItems: "aovydwv3",
				height: "do00u71z"
			},
			aboveChatHeads: {
				position: "l9j0dhe7",
				zIndex: "tkr6xdv7"
			}
		},
		j = b("JSResource")("MWNewChatTabContainer.bs").__setRef("MWChatMultitabTabsContainer.bs");

	function k(a, c, d, e, f, g, h) {
		h = {
			hasContent: a,
			isSearchView: d,
			isTabFocused: e,
			searchInitialParticipant: g
		};
		c !== void 0 && (h.isMultitab = b("bs_caml_option").valFromOption(c));
		f !== void 0 && (h.useSidebarChatStyles = b("bs_caml_option").valFromOption(f));
		return h
	}

	function l(a) {
		return h.createElement(b("BootloaderResource").read(j).make, a)
	}
	c = {
		reasonResource: j,
		makeProps: k,
		make: l
	};

	function a(a) {
		a = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(void 0);
		var c = b("useCometDisplayTimingTrackerForInteraction")("ChatMain", !0);
		return h.jsx("div", {
			children: h.jsx(b("CometContextualLayerAnchorRoot.re").make, {
				children: h.jsx("div", {
					children: a.openTabsState.map(function (a) {
						var d = a.hasContent,
							e = a.isTabFocused,
							f = a.threadID;
						if (f) {
							var g = f._0;
							g = {
								children: h.jsx(b("MWThread_DEPRECATED.bs").make, {
									id: g,
									children: h.jsx(b("MWThreadKey.bs").make, {
										id: b("MWThread_DEPRECATED.bs").toThreadKey(g),
										children: h.jsx(b("MWUIChatTabState.bs").Provider.make, {
											tab: {
												_0: g
											},
											children: h.jsx(b("CometTransientDialogProvider.react"), {
												children: h.jsx(b("CometErrorBoundary.re").make, {
													fallback: function (a) {
														return null
													},
													children: h.jsx(b("MWChatTabContainerWithEarlierLoading.bs").make, {
														isTabFocused: e,
														hasContent: d,
														isMultitab: !0,
														useSidebarChatStyles: !1
													}, b("MWChatThreadId.bs").getMercuryID(g))
												})
											})
										})
									})
								}, b("MWThread_DEPRECATED.bs").key(g))
							};
							g["data-visualcompletion"] = "ignore-dynamic";
							g = h.jsx("div", g)
						} else g = h.jsx(l, k(d, !0, a.isSearchView, e, void 0, a.searchInitialParticipant, void 0), "local");
						return h.jsx(b("CometPlaceholder.react"), {
							children: h.jsx(b("CometHeroInteractionWithDiv.react"), {
								children: g,
								interactionUUID: b("MWChatInteraction.bs").get(b("MWChatStateThread.bs").toString(f)),
								interactionDesc: "MULTI_CHAT_TAB",
								pageletName: "ChatTab",
								excludeFromMainVC: !0,
								ref: c,
								xstyle: [b("MWChatTabContainerShared.bs").styles.chatTabContainer, b("MWChatTabContainerShared.bs").styles.chatTabContainerBottom]
							}),
							fallback: h.jsx(b("MWChatTabContainerLoading.bs").make, {
								isMultitab: !0,
								threadID: f ? f._0 : void 0
							})
						}, f ? b("MWChatThreadId.bs").serializeFuture(f._0) : "search")
					}),
					className: (g || (g = b("stylex")))(i.tray)
				})
			}),
			className: g(i.aboveChatHeads)
		})
	}
	d = b("MWChatTabContainerShared.bs").styles;
	e = a;
	f.shareStyles = d;
	f.styles = i;
	f.LazyMWNewChatTabContainer = c;
	f.make = e
}), null);