__d("AudioPlayerPlayPauseButton.react", ["cx", "fbt", "AudioPlayerAssets", 
	"Image.react", "React", "XUIButton.react", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a(a) {
		var c, d;
		a.playing ? (c = h._("T\u1ea1m d\u1eebng"), d = b("AudioPlayerAssets").getAudioPlayerIconAsset("PAUSE", a.iconSize, a.theme)) : (c = h._("Ph\u00e1t"), d = b("AudioPlayerAssets").getAudioPlayerIconAsset("PLAY", a.iconSize, a.theme));
		d = i.jsx(b("Image.react"), {
			src: d
		});
		return i.jsx(b("XUIButton.react"), {
			className: b("joinClasses")(a.className, "_6592"),
			onClick: a.onClick,
			image: d,
			label: c,
			labelIsHidden: !0,
			size: "large"
		})
	}
}), null);