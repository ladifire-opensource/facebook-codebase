__d("MWChatVideoPlayerControls.react", ["React", "VideoPlayerControlsContainerOverlay.react", 
	"VideoPlayerControlsGroups.react", "VideoPlayerFullscreenControl.react", "VideoPlayerHooks", 
	"VideoPlayerPlaybackControl.react", "VideoPlayerPlaybackTimer.react", 
	"VideoPlayerScrubber.react", "VideoPlayerVolumeControl.react", "stylex", 
	"useVideoPlayerBigPlayButtonOverlay", "useVideoPlayerDefaultControlsVisibility"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		return g.jsx("span", {
			className: "fi2e5rcv jk2qo03r",
			children: a.children
		})
	}

	function a(a) {
		var c = b("useVideoPlayerDefaultControlsVisibility")(),
			d = c.isControlsVisible;
		c = c.onUserInteraction;
		var e = b("VideoPlayerHooks").usePaused();
		e = b("useVideoPlayerBigPlayButtonOverlay")({
			forceVisible: e
		});
		var f = e.bigPlayButtonElement;
		e = e.bigPlayButtonIsVisible;
		var i = b("VideoPlayerHooks").useIsFullscreen();
		d = d && !e;
		e = g.jsx(b("VideoPlayerControlsContainerOverlay.react"), {
			isVisible: d,
			children: i ? g.jsxs(g.Fragment, {
				children: [g.jsxs(b("VideoPlayerControlsGroups.react").Contracted, {
					children: [g.jsx(b("VideoPlayerPlaybackControl.react"), {}), g.jsx(b("VideoPlayerPlaybackTimer.react"), {})]
				}), g.jsx(b("VideoPlayerControlsGroups.react").Expanded, {
					children: g.jsx(b("VideoPlayerScrubber.react"), {
						onUserInteraction: c
					})
				}), g.jsxs(b("VideoPlayerControlsGroups.react").Contracted, {
					children: [g.jsx(b("VideoPlayerFullscreenControl.react"), {
						onUserInteraction: c
					}), g.jsx(b("VideoPlayerVolumeControl.react"), {
						onUserInteraction: c
					})]
				})]
			}) : g.jsxs(g.Fragment, {
				children: [g.jsx(b("VideoPlayerControlsGroups.react").Contracted, {
					children: g.jsx(h, {
						children: g.jsx(b("VideoPlayerPlaybackControl.react"), {})
					})
				}), g.jsx(b("VideoPlayerControlsGroups.react").Expanded, {
					children: g.jsx(b("VideoPlayerScrubber.react"), {
						onUserInteraction: c
					})
				}), g.jsxs(b("VideoPlayerControlsGroups.react").Contracted, {
					children: [a.hideExpandButton ? null : g.jsx(h, {
						children: g.jsx(b("VideoPlayerFullscreenControl.react"), {
							onUserInteraction: c
						})
					}), g.jsx(h, {
						children: g.jsx(b("VideoPlayerVolumeControl.react"), {
							onUserInteraction: c
						})
					})]
				})]
			})
		});
		return g.jsxs(g.Fragment, {
			children: [f, e]
		})
	}
}), null);