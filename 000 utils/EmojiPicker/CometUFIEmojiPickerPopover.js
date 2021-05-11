__d("CometUFIEmojiPickerPopover.react", ["CometPopover.react", 
	"EmojiPickerContainer.react", "React", "addEmojiToUFIComposer"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.onClose,
			d = a.onComposerStateChange;
		a = g.useCallback(function (a) {
			d(function (c) {
				return b("addEmojiToUFIComposer")(a, c)
			}), c()
		}, [c, d]);
		return g.jsx(b("CometPopover.react"), {
			withArrow: !0,
			children: g.jsx(b("EmojiPickerContainer.react"), {
				height: 320,
				onSelect: a
			})
		})
	}
}), null);