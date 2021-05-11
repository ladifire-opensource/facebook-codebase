__d("VideoPlayerXImplSurface.react", ["CoreVideoPlayerAutoplayClient.react", "React", 
	"VideoPlayerCaptionsAreaDeferred.react", "VideoPlayerInteractionOverlay.react", 
	"VideoPlayerWebSessionExtender.react", "gkx", "requireCond", 
	"useVideoPlayerDefaultLoadingIndicators", "useVideoPlayerUnifiedCVCProvider",
	 "cr:1583596", "cr:946298"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.disableLoadingIndicator;
		d = d === void 0 ? !1 : d;
		var e = a.instreamVideoAdBreaksPlayer,
			f = a.livingRoomID,
			h = a.playerFormat,
			i = a.subOrigin,
			j = a.videoFBID;
		a = a.videoPlayerSpherical;
		b("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCProvider({
			livingRoomID: f,
			playerFormat: h,
			subOrigin: i,
			videoFBID: j
		});
		f = b("useVideoPlayerDefaultLoadingIndicators")();
		h = f.loadingIndicatorElement;
		return g.jsxs(g.Fragment, {
			children: [a, d ? null : h, b("gkx")("1586633") ? g.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay, {}) : null, g.jsx(b("VideoPlayerCaptionsAreaDeferred.react"), {
				children: c
			}), g.jsx(b("CoreVideoPlayerAutoplayClient.react"), {}), b("cr:1583596") ? g.jsx(b("cr:1583596"), {}) : null, b("cr:946298") ? g.jsx(b("cr:946298"), {
				subOrigin: i
			}) : null, e, g.jsx(b("VideoPlayerWebSessionExtender.react"), {})]
		})
	}
}), null);