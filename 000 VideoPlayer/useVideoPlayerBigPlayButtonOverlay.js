__d("useVideoPlayerBigPlayButtonOverlay", ["React", "VideoPlayerHooks", 
	"VideoPlayerPlayButton.react", "VideoPlayerSmallPlayButton.react", 
	"useVideoPlayerHasStartedPlayingAtLeastOnce"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a === void 0 ? {} : a;
		var c = a.buttonSize;
		c = c === void 0 ? "large" : c;
		var d = a.forceVisible,
			e = a.overrideInteraction,
			f = a.shouldUnmute;
		a = b("useVideoPlayerHasStartedPlayingAtLeastOnce")();
		var h = b("VideoPlayerHooks").usePaused(),
			i = b("VideoPlayerHooks").useLastMuteReason(),
			j = b("VideoPlayerHooks").useController(),
			k = g.useCallback(function() {
				j.play("user_initiated"), f === !0 && i !== "user_initiated" && j.setMuted(!1, "product_initiated")
			}, [j, i, f]);
		e = e != null ? e.handler : k;
		k = d === !0 || d === !1 ? d : !a && h;
		d = c === "small" ? g.jsx(b("VideoPlayerSmallPlayButton.react"), {
			isVisible: k,
			onClick: e
		}) : g.jsx(b("VideoPlayerPlayButton.react"), {
			isVisible: k,
			onClick: e
		});
		return {
			bigPlayButtonElement: d,
			bigPlayButtonIsVisible: k
		}
	}
}), null);