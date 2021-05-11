__d("VideoPlayerProgressiveImplementationV2.react", ["React", 
	"VideoPlayerImplementationEngineAPI", "VideoPlayerImplementationReactVideoElement.react",
	 "VideoPlayerProgressiveImplementationEngine"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = b("VideoPlayerImplementationEngineAPI").useVideoPlayerImplementationEngine(a, b("VideoPlayerProgressiveImplementationEngine").createVideoPlayerProgressiveImplementationEngine),
			d = c[0];
		c = c[1];
		return g.jsx(b("VideoPlayerImplementationReactVideoElement.react"), {
			implementationController: c.implementationController,
			implementationExposedState: d,
			renderWithVideoImplementationStates: a.renderWithVideoImplementationStates,
			videoElementCallbacks: c.videoElementCallbacks,
			videoElementRefCallback: c.videoElementRefCallback
		})
	}
}), null);