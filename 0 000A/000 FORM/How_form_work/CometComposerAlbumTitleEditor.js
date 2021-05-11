__d("CometComposerAlbumTitleEditor.react", ["fbt", "CometAlbumEditComposerInputWrapper.react", 
	"CometFormTextInput.react", "React", "composerAlbumTitleReducer", 
	"composerAlbumTitleStateChecker", "useComposerViewStateDispatcher", 
	"useComposerViewStateReducer", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = 65;

	function a(a) {
		var c = a.albumTitle;
		a = a.isDisabled;
		a = a === void 0 ? !1 : a;
		b("useComposerViewStateReducer")(b("composerAlbumTitleReducer"), b("composerAlbumTitleStateChecker"));
		var d = b("useComposerViewStateDispatcher")(),
			e = h.useCallback(function(a) {
				a = {
					albumTitle: a,
					type: "update_album_title"
				};
				d(a)
			}, [d]);
		return h.jsx(b("CometAlbumEditComposerInputWrapper.react"), {
			children: h.jsx(b("CometFormTextInput.react"), {
				disabled: a,
				label: g._("T\u00ean album"),
				maxLength: i,
				onValueChange: e,
				value: (a = c) != null ? a : ""
			})
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		return {
			albumTitle: (a = a.albumData) == null ? void 0 : a.albumTitle
		}
	});
	e.exports = c
}), null);