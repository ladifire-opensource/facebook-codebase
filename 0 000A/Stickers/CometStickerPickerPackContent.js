__d("CometStickerPickerPackContent.react", ["CometRelay", "CometStickerPickerNullState.react", "CometStickerPickerPackContent_sticker_pack.graphql", "CometStickerPickerPackContent_sticker_pack_stickersConnection.graphql", "CometStickerPickerStickersContent.react", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i, j = i || b("react");

	function a(a) {
		var c = a.notExpanding;
		c = c === void 0 ? !1 : c;
		var d = a.onSelect;
		a = a.stickerPack;
		a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometStickerPickerPackContent_sticker_pack.graphql"), a);
		var e = b("CometRelay").usePaginationFragment(h !== void 0 ? h : h = b("CometStickerPickerPackContent_sticker_pack_stickersConnection.graphql"), a),
			f = e.data,
			i = e.isLoadingNext,
			k = e.loadNext;
		e = a.id;
		a = (a = f.stickers) == null ? void 0 : (f = a.edges) == null ? void 0 : f.map(function(a) {
			a = a.node;
			return a == null || a.id == null ? null : {
				id: a.id,
				sticker: a
			}
		}).filter(Boolean);
		return a == null || a.length === 0 ? j.jsx(b("CometStickerPickerNullState.react"), {
			notExpanding: c
		}) : j.jsx(b("CometStickerPickerStickersContent.react"), {
			notExpanding: c,
			onScrollBottom: function() {
				i || k(10)
			},
			onSelect: d,
			scrollKey: e,
			stickers: a
		})
	}
}), null);