__d("CometPhotoEditorCropButton.react", ["ix", "fbt", 
	"CometPhotoEditorButtonVertical.react", "React", "fbicon", "qex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React"),
		j = b("qex")._("1225348");

	function a(a) {
		a = a.activeTool;
		a = a === void 0 ? null : a;
		return i.jsx(b("CometPhotoEditorButtonVertical.react"), {
			enabled: j === !0,
			icon: b("fbicon")._(g("798399"), 24),
			isActive: a === "CROP",
			label: h._("C\u1eaft"),
			toolName: "CROP"
		})
	}
}), null);