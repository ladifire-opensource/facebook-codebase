__d("CometLoggedInFBApp.react", ["CometActorGatewayHandler", "CometAppContent.react", "CometAppLoggedInNavigation.react", "CometAppShell.react", "CometBackupPlaceholder.react", "CometBlinkingTitleMessageProvider.react", "CometErrorBoundary.react", "CometHeroInteractionContextPassthrough.react", "CometInitializeNotificationToast.react", "CometPlaceholder.react", "CometProfiler.react", "CometRoomsInterstitialPromotion.react", "CometSearchEventEmitterProvider", "CometTransientDialogProvider.react", "CometWatchAndScrollDeferred.react", "CometWatchAndScrollProvider.react", "CometWelcomeView.react", "MWChatOnMediaVisibilityOverrideContext", "MWChatProvider.react", "MWChatVideoAutoplaySettingContext", "PresenceStatusProvider.react", "React", "RTWebPreCallProvider.react", "deferredLoadComponent", "recoverableViolation", "requireCond", "requireDeferred", "requireDeferredForDisplay", "useCometLogout", "cr:1599331", "cr:1604228", "cr:1604319", "cr:980962", "cr:1789196"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	d = (c = b("cr:1789196")) != null ? c : {
		CometTranslationDetectorProvider: g.Fragment
	};
	var h = d.CometTranslationDetectorProvider,
		i = b("deferredLoadComponent")(b("requireDeferred")("RTWebCometCallInviteController.react"));

	function j(a) {
		b("recoverableViolation")("CometLoggedInApp level component did not catch own error", "CometLoggedInApp", {
			error: a
		})
	}
	var k = "MWChatTab",
		l = b("deferredLoadComponent")(b("requireDeferredForDisplay")("MWChat.react"));

	function a(a) {
		b("cr:980962")();
		return g.jsx(b("CometProfiler.react"), {
			id: "CometApp",
			logDurationToQPL: !0,
			children: g.jsx(b("CometAppShell.react"), {
				children: g.jsxs(h, {
					children: [g.jsx(b("CometSearchEventEmitterProvider"), {
						children: g.jsx(b("MWChatProvider.react"), {
							children: g.jsx(b("MWChatOnMediaVisibilityOverrideContext").MWChatOnMediaVisibilityOverrideContextProvider, {
								children: g.jsx(b("RTWebPreCallProvider.react"), {
									children: g.jsx(b("PresenceStatusProvider.react"), {
										children: g.jsx(b("CometBlinkingTitleMessageProvider.react"), {
											children: g.jsxs(b("useCometLogout").CometLogoutProvider, {
												children: [g.jsxs(b("CometWatchAndScrollProvider.react"), {
													children: [g.jsx(b("CometAppContent.react"), {
														appNavigation: g.jsx(b("CometAppLoggedInNavigation.react"), {})
													}), b("cr:1604228") ? g.jsx(b("cr:1604228"), {}) : null, b("cr:1604319") ? g.jsx(b("cr:1604319"), {}) : null, g.jsx(b("CometErrorBoundary.react"), {
														onError: j,
														children: b("CometWatchAndScrollDeferred.react") != null ? g.jsx(b("CometPlaceholder.react"), {
															fallback: null,
															children: g.jsx(b("CometTransientDialogProvider.react"), {
																children: g.jsx(b("CometWatchAndScrollDeferred.react"), {})
															})
														}) : null
													})]
												}), g.jsxs(b("CometBackupPlaceholder.react"), {
													fallback: null,
													children: [g.jsx(b("CometHeroInteractionContextPassthrough.react"), {
														clear: !0,
														children: g.jsx(b("CometProfiler.react"), {
															id: k,
															children: g.jsx(b("CometErrorBoundary.react"), {
																onError: j,
																children: g.jsx(b("CometPlaceholder.react"), {
																	fallback: null,
																	children: g.jsx(b("MWChatVideoAutoplaySettingContext").MWChatVideoAutoplaySettingContextProvider, {
																		children: g.jsx(l, {})
																	})
																})
															})
														})
													}), g.jsx(b("CometErrorBoundary.react"), {
														onError: j,
														children: g.jsx(b("CometPlaceholder.react"), {
															fallback: null,
															children: g.jsx(i, {})
														})
													})]
												})]
											})
										})
									})
								})
							})
						})
					}), b("cr:1599331") != null ? g.jsx(b("CometErrorBoundary.react"), {
						onError: j,
						children: g.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: g.jsx(b("cr:1599331"), {})
						})
					}) : null, g.jsx(b("CometErrorBoundary.react"), {
						onError: j,
						children: g.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: g.jsx(b("CometWelcomeView.react"), {})
						})
					}), g.jsx(b("CometErrorBoundary.react"), {
						onError: j,
						children: g.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: g.jsx(b("CometRoomsInterstitialPromotion.react"), {})
						})
					}), g.jsxs(b("CometBackupPlaceholder.react"), {
						fallback: null,
						children: [g.jsx(b("CometErrorBoundary.react"), {
							onError: j,
							children: g.jsx(b("CometInitializeNotificationToast.react"), {})
						}), g.jsx(b("CometErrorBoundary.react"), {
							onError: j,
							children: g.jsx(b("CometBackupPlaceholder.react"), {
								fallback: null,
								children: g.jsx(b("CometActorGatewayHandler"), {})
							})
						})]
					})]
				})
			})
		})
	}
	f = g.memo(a);
	e.exports = f
}), null);