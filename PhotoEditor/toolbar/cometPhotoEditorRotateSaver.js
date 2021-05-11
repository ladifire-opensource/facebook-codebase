__d("cometPhotoEditorRotateSaver", ["getPhotoEditorSaver", "requireDeferred"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("requireDeferred")("CometMediaViewerPhotoRotateAction");

	function h(a, b) {
		return a.type === "ROTATE" ? babelHelpers["extends"]({}, b, {
			useCDNPreview: !0
		}) : b
	}

	function i(a, b, c, d) {
		if (a.type !== "ROTATE") return;
		var e = a.angle,
			f = a.environment,
			h = "RIGHT";
		switch (e) {
			case 90:
				h = "RIGHT";
				break;
			case 270:
				h = "LEFT";
				break;
			case 180:
				h = "FLIP"
		}
		g.loadImmediately(function (a) {
			a({
				environment: f,
				input: {
					direction: h,
					photo_id: b.data.id
				},
				onCompleted: function () {
					return c(b)
				},
				onError: function () {
					return d(b)
				}
			})
		})
	}

	function j(a, b) {
		if (b == null) return;
		a = b.angle;
		return ((b = a) != null ? b : 0) > 0 ? "ROTATE" : null
	}

	function a(a) {
		return b("getPhotoEditorSaver")(a, i, h, j)
	}
}), null);