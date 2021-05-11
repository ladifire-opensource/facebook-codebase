__d("CometMediaEditorPushPageActionItems.react", ["CometMediaEditorActionButtons.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.mediaID,
			d = a.onBack,
			e = a.onForceBack,
			f = a.onSaveDone;
		a = a.onSaveStart;
		return g.jsx(b("CometMediaEditorActionButtons.react"), {
			mediaID: c,
			onBack: d,
			onForceBack: e,
			onSaveDone: f,
			onSaveStart: a
		})
	}
}), null);