__d("MWChatSticker.bs", ["React", "MWTheme.bs", "isRetina", "bs_caml_option", "Sticker.react", 
	"MWChatImageSize.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.sticker;
		a = a.scale;
		var d = b("MWTheme.bs").useTheme(void 0);
		d = b("MWTheme.bs").middle(d);
		var e = c.width !== void 0 && c.height !== void 0;
		e = b("MWChatImageSize.bs").useImageSize(c.url, e, void 0);
		var f = c.width,
			h = c.height,
			i, j = 0;
		f !== void 0 && h !== void 0 ? i = [f, h] : j = 1;
		j === 1 && (i = e !== void 0 ? [e.width, e.height] : [24, 24]);
		f = {
			accessibilityLabel: c.accessibilityLabel,
			animationTrigger: "load_and_hover",
			frameCount: c.frameCount,
			frameRate: c.frameRate,
			framesPerCol: c.framesPerCol,
			framesPerRow: c.framesPerRow,
			packID: c.packID,
			sourceURI: c.url,
			sourceWidth: i[0],
			sourceHeight: i[1],
			spriteURI: b("isRetina")() ? c.spriteURI2x : c.spriteURI,
			stickerID: c.stickerID,
			tabIndex: -1,
			customColor: d,
			paddedSpriteURI: b("isRetina")() ? c.paddedSpriteURI2x : c.paddedSpriteURI
		};
		a !== void 0 && (f.scale = b("bs_caml_option").valFromOption(a));
		return g.jsx(b("Sticker.react"), f)
	}
	c = a;
	f.make = c
}), null);