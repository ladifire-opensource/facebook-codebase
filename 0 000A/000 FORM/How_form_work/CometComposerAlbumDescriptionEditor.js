__d("CometComposerAlbumDescriptionEditor.react", ["fbt", "CometAlbumEditComposerInputWrapper.react", 
	"CometFormTextArea.react", "React", "composerAlbumDescriptionReducer", 
	"composerAlbumDescriptionStateChecker", "useComposerViewStateDispatcher",
	 "useComposerViewStateReducer", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");

	function a(a) {
		a = (a = a == null ? void 0 : a.albumDescription) != null ? a : "";
		b("useComposerViewStateReducer")(b("composerAlbumDescriptionReducer"), b("composerAlbumDescriptionStateChecker"));
		var c = b("useComposerViewStateDispatcher")(),
			d = h.useCallback(function(a) {
				a = {
					albumDescription: a,
					type: "update_album_description"
				};
				c(a)
			}, [c]);
		return h.jsx(b("CometAlbumEditComposerInputWrapper.react"), {
			children: h.jsx(b("CometFormTextArea.react"), {
				label: g._("M\u00f4 t\u1ea3 (kh\u00f4ng b\u1eaft bu\u1ed9c)"),
				minRows: 4,
				onValueChange: d,
				value: a
			})
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		return {
			albumDescription: (a = a.albumData) == null ? void 0 : a.albumDescription
		}
	});
	e.exports = c
}), null);