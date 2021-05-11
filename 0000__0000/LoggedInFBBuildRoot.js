__d("LoggedInFBBuildRoot", ["Actor", "CometBackupPlaceholder.react", 
	"CometDarkModeStateProvider.react", "CometDensityModeStateProvider.react", 
	"CometDOMOnlyBoundary.react", "CometErrorBoundary.react", "CometHeroInteractionWithDiv.react", 
	"CometKeyboardSettingsStateProvider.react", "CometKeyCommandNub.react", "CometLoggedInFBApp.react", "CometPlatformAppWrapper.react", "CometRouterFocusManager.react", "CurrentUser", "React", "buildCometRouter", "buildCometRouterStateProvider", "requireCond", "cr:1801728", "cr:1273258", "cr:881053"], (function (a, b, c, d, e, f) {
	"use strict";
	f.buildRootComponent = a;
	var g = b("React");

	function a(a, c, d) {
		d === void 0 && (d = null);
		a = b("buildCometRouter")(a, c, d);
		var e = b("buildCometRouterStateProvider")(a);
		return function (a) {
			a = a.rootElement;
			return g.jsx(b("CometPlatformAppWrapper.react"), {
				children: g.jsx(e, {
					children: g.jsx(b("CometDarkModeStateProvider.react"), {
						children: g.jsx(b("CometDensityModeStateProvider.react"), {
							children: g.jsxs(b("CometKeyboardSettingsStateProvider.react"), {
								children: [g.jsx(b("CometBackupPlaceholder.react"), {
									fallback: null,
									children: g.jsx(b("Actor").ActorProvider, {
										initialActorID: b("CurrentUser").getID(),
										readonly: !0,
										children: g.jsxs(b("CometRouterFocusManager.react").CometRouterFocusManager, {
											children: [g.jsx(b("CometHeroInteractionWithDiv.react"), {
												interactionDesc: "initial load",
												interactionUUID: c,
												children: g.jsx(b("CometLoggedInFBApp.react"), {})
											}), g.jsx(b("CometKeyCommandNub.react"), {})]
										})
									})
								}), g.jsxs(b("CometDOMOnlyBoundary.react"), {
									children: [b("cr:881053") && a && g.jsx(b("CometErrorBoundary.react"), {
										children: g.jsx(b("cr:881053"), {})
									}), b("cr:1801728") && g.jsx(b("CometErrorBoundary.react"), {
										children: g.jsx(b("cr:1801728"), {})
									}), b("cr:1273258") && g.jsx(b("CometErrorBoundary.react"), {
										children: g.jsx(b("cr:1273258"), {})
									})]
								})]
							})
						})
					})
				})
			})
		}
	}
}), null);