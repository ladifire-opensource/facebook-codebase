__d("CometPhotoEditorLayersRenderer.react", ["JSResourceForInteraction", 
	"MediaEditorViewStateContext", "React", "gkx", "lazyLoadComponent", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = (c = b("lazyLoadComponent"))((d = b("JSResourceForInteraction"))("CometPhotoEditorRotateLayer.react").__setRef("CometPhotoEditorLayersRenderer.react")),
		i = c(d("CometPhotoEditorTextOverlayLayerRenderer.react").__setRef("CometPhotoEditorLayersRenderer.react")),
		j = c(d("CometPhotoEditorCropLayerRenderer.react").__setRef("CometPhotoEditorLayersRenderer.react")),
		k = c(d("CometPhotoEditorProductTagLayer.react").__setRef("CometPhotoEditorLayersRenderer.react")),
		l = c(d("CometPhotoEditorTagLayer.react").__setRef("CometPhotoEditorLayersRenderer.react")),
		m = b("gkx")("1643886");

	function a(a) {
		var c = a.containerRef,
			d = a.mediaAttachment,
			e = g.useMemo(function () {
				return {
					CROP: j,
					PRODUCT_TAG: k,
					ROTATE: h,
					TEXT_OVERLAY: i,
					XY_TAG: l
				}
			}, []);
		a = g.useContext(b("MediaEditorViewStateContext"));
		var f = a.activeLayers,
			n = a.activeTool;
		return g.jsx("div", {
			className: "    ",
			children: Object.keys(e).map(function (a) {
				var b = e[a];
				if (m && f && f.has(a) || !m && n === a) return g.jsx(b, {
					containerRef: c,
					mediaAttachment: d
				}, a)
			}).filter(Boolean)
		})
	}
}), null);