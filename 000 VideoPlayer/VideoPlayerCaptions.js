__d("VideoPlayerCaptions.react", ["React", "VideoPlayerCaptionsDisplay.react", "VideoPlayerHooks", "useVideoPlayerCaptionsDisplayAdjustments"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a = b("VideoPlayerHooks").useActiveCaptions(),
			c = b("useVideoPlayerCaptionsDisplayAdjustments")();
		return g.jsx(b("VideoPlayerCaptionsDisplay.react"), {
			activeCaptions: a,
			adjustments: c
		})
	}
}), null);