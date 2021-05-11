__d("useVideoPlayerHasStartedPlayingAtLeastOnce", ["React", "VideoPlayerHooks", "createVideoStateHook"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");
	c = b("createVideoStateHook").createVideoStateHook(null);
	var h = c.stateHook;

	function a() {
		var a = h(!1),
			c = a[0],
			d = a[1],
			e = b("VideoPlayerHooks").usePlaying();
		g.useEffect(function() {
			e && d(!0)
		}, [e, d]);
		return c
	}
}), null);