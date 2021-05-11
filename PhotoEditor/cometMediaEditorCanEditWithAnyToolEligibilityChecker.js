__d("cometMediaEditorCanEditWithAnyToolEligibilityChecker", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.cometMediaEditorCanEditWithAnyToolEligibilityChecker = a;
	f.validateMediaForAnyMutations = g;

	function a(a, b) {
		if (b != null) {
			var c;
			c = ((c = b == null ? void 0 : b.length) != null ? c : 0 <= a.index) ? b[a.index] : b[0];
			a = g(c);
			if (a == null) return {
				ALL: null
			}
		}
		return {}
	}

	function g(a) {
		if (a == null) return;
		if (a.fileType === "VIDEO" && a.state === "PREEXISTING") return;
		if (a.fileType !== "VIDEO" && a.fileType !== "PHOTO") return;
		if (a.state !== "UPLOADED" && a.state !== "UPLOADING" && a.state !== "PREEXISTING") return;
		return a
	}
}), null);