__d("CometStickerPickerStickersContent.react", ["CometErrorBoundary.react", "CometStickerPickerSearchResult.react", "CometStickerPickerStickerGrid.react", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react");

	function a(a) {
		var c = a.onSelect,
			d = a.stickers;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["onSelect", "stickers"]);
		return h.jsx(b("CometStickerPickerStickerGrid.react"), babelHelpers["extends"]({}, a, {
			children: d.map(function(a) {
				var d = a.id;
				a = a.sticker;
				return h.jsx(b("CometErrorBoundary.react"), {
					children: h.jsx(b("CometStickerPickerSearchResult.react"), {
						animationTriggers: {
							hover: !0,
							load: !1
						},
						onPress: c == null ? void 0 : function() {
							c({
								stickerID: d
							})
						},
						sticker: a
					})
				}, d)
			})
		}))
	}
}), null);