__d("CometPhotoEditorCropLayerRenderer.react", [
	"CometPhotoEditorCropLayer.react", 
	"MediaEditorViewStateContext", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a.containerRef;
		var c = g.useContext(b("MediaEditorViewStateContext")),
			d = c == null ? void 0 : c.clientImageHeight;
		c = c == null ? void 0 : c.clientImageWidth;
		return d === 0 || c === 0 || d == null || c == null ? null : g.jsx(b("CometPhotoEditorCropLayer.react"), {
			clientImageHeight: d,
			clientImageWidth: c,
			containerRef: a
		})
	}
}), null);