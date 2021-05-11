__d("CometPhotoEditorRotateLayer.react", ["CometRelay", 
	"MediaEditorViewStateContext", "React", 
	"cometPhotoEditorRotateSaver", 
	"useMediaEditorSaver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a.containerRef;
		a = (a = g.useContext(b("MediaEditorViewStateContext")).angle) != null ? a : 0;
		var c = b("CometRelay").useRelayEnvironment();
		b("useMediaEditorSaver")(b("cometPhotoEditorRotateSaver"), {
			angle: a,
			environment: c,
			type: "ROTATE"
		}, 3);
		return null
	}
}), null);