__d("getPhotoEditorSaver", ["getPhotoEditorAsyncMutationHandler", "getPhotoEditorMetadataMutationHandler"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c, d, e, f, g, h, i) {
		f = c != null ? b("getPhotoEditorAsyncMutationHandler")(a, f, c, h, i) : null;
		c = b("getPhotoEditorMetadataMutationHandler")(a, g, d, f);
		return {
			actionForPhoto: c,
			checkerForPhoto: e
		}
	}
}), null);