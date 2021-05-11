__d("cometMediaEditorUploadingEligibilityChecker", ["fbt"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.cometMediaEditorUploadingEligibilityChecker = a;
	f.validateMediaForAsyncMutation = h;

	function a(a, b) {
		if (b != null) {
			var c;
			c = ((c = b == null ? void 0 : b.length) != null ? c : 0 <= a.index) ? b[a.index] : b[0];
			a = h(c);
			if (a == null) return {
				CROP: g._("B\u1ea1n c\u00f3 th\u1ec3 d\u00f9ng t\u00f9y ch\u1ecdn n\u00e0y sau khi t\u1ea3i l\u00ean xong."),
				ROTATE: g._("B\u1ea1n c\u00f3 th\u1ec3 d\u00f9ng t\u00f9y ch\u1ecdn n\u00e0y sau khi t\u1ea3i l\u00ean xong."),
				TEXT_OVERLAY: g._("B\u1ea1n c\u00f3 th\u1ec3 d\u00f9ng t\u00f9y ch\u1ecdn n\u00e0y sau khi t\u1ea3i l\u00ean xong.")
			}
		}
		return {}
	}

	function h(a) {
		if (a.fileType === "PHOTO") {
			if (a.state === "PREEXISTING") return a;
			if (a.state === "UPLOADED") return a
		}
		if (a.fileType === "VIDEO") {
			if (a.state === "UPLOADING") return a;
			if (a.state === "UPLOADED") return a
		}
	}
}), null);