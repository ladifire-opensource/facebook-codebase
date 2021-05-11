__d("MWChatVideoPlayer.react", ["GraphQLVideoAutoplayGatingResult", "MWChatVideoAutoplaySettingContext", "MWChatVideoPlayerControls.react", "React", "VideoPlayerDefaultControls.react", "VideoPlayerProgressiveImplementationData", "VideoPlayerProgressiveImplementationV2.react", "VideoPlayerSurface.react", "VideoPlayerX.react", "getVideoPlayerAutoplayProps"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = function(a, c) {
			switch (a) {
				case "mwchat":
					return g.jsx(b("MWChatVideoPlayerControls.react"), {
						hideExpandButton: c === !0
					});
				case "default":
					return g.jsx(b("VideoPlayerDefaultControls.react"), {});
				case "none":
					return null;
				default:
					return null
			}
		};

	function a(a) {
		var c = a.controls,
			d = a.fbid,
			e = a.hdSrc,
			f = a.hideExpandButton,
			i = a.initialForceHD,
			j = a.originalHeight,
			k = a.originalWidth;
		a = a.sdSrc;
		i = b("VideoPlayerProgressiveImplementationData").makeProgressiveImplementationData({
			hdSrc: e,
			hdSrcPreferred: (e = i) != null ? e : !1,
			sdSrc: a
		});
		e = b("MWChatVideoAutoplaySettingContext").useMWChatVideoAutoplaySetting();
		if (i == null) return null;
		a = [{
			Component: b("VideoPlayerProgressiveImplementationV2.react"),
			data: i,
			typename: "VideoPlayerProgressiveImplementation"
		}];
		i = b("getVideoPlayerAutoplayProps")(b("GraphQLVideoAutoplayGatingResult").makeGraphQLVideoAutoplayGatingResult("unknown", e, !0), "respect_user_settings", null);
		return g.createElement(b("VideoPlayerX.react"), babelHelpers["extends"]({}, i, {
			implementations: a,
			key: d,
			loopCount: -1,
			originalHeight: j,
			originalWidth: k,
			playerOriginOverride: "messaging",
			portalingEnabled: !1,
			subOrigin: "messenger_thread",
			videoFBID: d
		}), g.jsx(b("VideoPlayerSurface.react"), {
			children: h(c, f)
		}))
	}
}), null);