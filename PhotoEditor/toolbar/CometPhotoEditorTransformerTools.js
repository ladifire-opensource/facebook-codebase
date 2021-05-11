__d("CometPhotoEditorTransformerTools.react", ["CometPhotoEditorCropButton.react", 
	"CometPhotoEditorRotateButtonVertical.react", 
	"CometPhotoEditorTagArea.react", 
	"CometPhotoEditorTextOverlayArea.react", 
	"MediaEditorViewStateContext", "React", "requireCond", "stylex", 
	"updateAngleReducer", "updateToolReducer", "useMediaEditorReducer", "cr:1546616"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.isPageShop,
			d = a.isProfileComposer,
			e = a.onBack,
			f = a.photoID;
		a = a.pushPage;
		var h = g.useContext(b("MediaEditorViewStateContext")).activeTool;
		b("useMediaEditorReducer")(b("updateAngleReducer"));
		b("useMediaEditorReducer")(b("updateToolReducer"));
		return g.jsx("div", {
			className: "discj3wi dati1w0a hv4rvrfc",
			children: g.jsxs("div", {
				children: [g.jsx(b("CometPhotoEditorCropButton.react"), {
					activeTool: h
				}), g.jsx(b("CometPhotoEditorRotateButtonVertical.react"), {
					activeTool: h
				}), g.jsx(b("CometPhotoEditorTagArea.react"), {
					activeTool: h,
					isPageShop: c,
					isProfileComposer: d,
					onBack: e,
					photoID: f,
					pushPage: a
				}), g.jsx(b("CometPhotoEditorTextOverlayArea.react"), {
					activeTool: h
				}), b("cr:1546616") != null ? g.jsx(b("cr:1546616"), {
					photoID: f
				}) : null]
			})
		})
	}
}), null);