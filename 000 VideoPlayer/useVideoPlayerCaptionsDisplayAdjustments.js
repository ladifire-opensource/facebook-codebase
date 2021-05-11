__d("useVideoPlayerCaptionsDisplayAdjustments", ["React", "VideoPlayerHooks"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a = b("VideoPlayerHooks").useVideoPlayerCaptionsReservations(),
			c = g.useMemo(function() {
				var b = {
					bottom: 0,
					left: 0,
					right: 0,
					top: 0
				};
				a.length > 0 && a.forEach(function(a) {
					b[a.location] += a.size
				});
				return b
			}, [a]);
		return c
	}
}), null);