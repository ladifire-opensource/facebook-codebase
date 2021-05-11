__d("useSaveAllMediaData", ["Promise", "CometMediaEditorSaverContext", 
	"CometMediaEditorUtils", "MediaEditorViewStateContext", "React", 
	"cometMediaEditorCanEditWithAnyToolEligibilityChecker", 
	"cometMediaEditorUploadingEligibilityChecker", 
	"composerMediaAttachmentReducer", "handleAsyncMutations",
	 "handleMutationsAndMetadataByType", "unrecoverableViolation", 
	 "updateSaveStatusReducer", "useComposerViewStateDispatcher",
	  "useComposerViewStateReducer", "useElementCoordinateTransforms",
	   "useMediaEditorReducer", "useMediaEditorViewStateDispatcher"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c;
		b("useComposerViewStateReducer")(b("composerMediaAttachmentReducer"));
		b("useMediaEditorReducer")(b("updateSaveStatusReducer"));
		var d = g.useContext(b("MediaEditorViewStateContext")),
			e = b("useMediaEditorViewStateDispatcher")(),
			f = g.useContext(b("CometMediaEditorSaverContext")),
			h = (c = g.useContext(b("CometMediaEditorSaverContext"))) == null ? void 0 : c.current,
			i = b("useComposerViewStateDispatcher")(),
			j = d == null ? void 0 : d.index,
			k = b("useElementCoordinateTransforms")();
		return g.useCallback(function (c, g) {
			if (!b("CometMediaEditorUtils").checkForChanges(f, a, d)) {
				g && g();
				return
			}
			e({
				isSaving: !0,
				type: "SET_SAVE_STATE"
			});
			if (j < 0 || a == null || j >= a.length) return;
			var l = b("cometMediaEditorCanEditWithAnyToolEligibilityChecker").validateMediaForAnyMutations(a[j]);
			if (l == null) return;
			var m = b("handleMutationsAndMetadataByType")(l, h, k),
				n = m.mutationsForPhoto,
				o = m.mutationsForVideo;
			m = m.updatedMediaAttachment;
			if (m == null) throw b("unrecoverableViolation")("Invalid action taken to update metadata of media of type: " + l.fileType, "comet_composer");
			l = function (a, d) {
				i({
					index: j,
					media: a,
					type: "SAVE_MEDIA_EDITS"
				});
				e({
					finalMutatedMediaAttachment: a,
					type: "RESET"
				});
				c && c();
				d !== !0 && g && g();
				return b("Promise").resolve()
			};
			var p = b("cometMediaEditorUploadingEligibilityChecker").validateMediaForAsyncMutation(m);
			if (p == null) {
				l(m);
				return
			}
			b("handleAsyncMutations")(p, n, o, l)
		}, [f, a, d, e, j, h, i])
	}
}), null);