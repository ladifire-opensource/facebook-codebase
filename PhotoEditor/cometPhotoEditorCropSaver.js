__d("cometPhotoEditorCropSaver", [
	"CometMediaViewerPhotoActions", "getPhotoEditorSaver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function g(a, b) {
		return a.type === "CROP" ? babelHelpers["extends"]({}, b, {
			originalEntID: b.data.id,
			useCDNPreview: !0
		}) : b
	}

	function h(a, c, d) {
		if (a.type !== "CROP") return;
		var e = a.dimensions;
		a = a.environment;
		var f = e.clientImageHeight,
			g = e.clientImageWidth,
			h = e.newHeight,
			j = e.newWidth,
			k = e.x;
		e = e.y;
		k = k / g;
		e = e / f;
		j = j / g;
		g = h / f;
		b("CometMediaViewerPhotoActions").cropPhoto({
			environment: a,
			input: {
				height: i(g),
				photo_id: c.data.id,
				width: i(j),
				x: i(k),
				y: i(e)
			},
			onCompleted: function (a) {
				return d(c, a == null ? void 0 : (a = a.photo_crop) == null ? void 0 : (a = a.photo) == null ? void 0 : a.id)
			}
		})
	}

	function i(a) {
		return Math.min(1, Math.max(0, a))
	}

	function j(a) {
		return function (b, c) {
			if (a.type === "CROP") {
				b = a.dimensions;
				if (b == null) return;
				c = b.clientImageHeight;
				var d = b.clientImageWidth,
					e = b.newHeight;
				b = b.newWidth;
				return e !== c || b !== d ? "CROP" : null
			}
		}
	}

	function a(a) {
		return b("getPhotoEditorSaver")(a, h, g, j(a))
	}
}), null);