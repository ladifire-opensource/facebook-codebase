__d("triggerUnsavedChangesDialogForConcurrentToolMode", ["TPhotoEditorToolActions"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c) {
		if (a == null) return !1;
		a = b("TPhotoEditorToolActions").PhotoEditorCoexistingEligibleLayersEnum.cast(a);
		if (a == null && c.size > 0) return !0;
		a = c.size === 1 ? b("TPhotoEditorToolActions").PhotoEditorCoexistingEligibleLayersEnum.cast(c.values().next().value) == null : !1;
		return a
	}
}), null);