__d("CometMediaEditorActionButtons.react", ["fbt", "FBLogger", "MediaEditorViewStateContext", "PagesCometComposerContext", "React", "TetraButtonGroup.react", "gkx", "stylex", "useSaveAllMediaData", "withComposerViewStatePart", "ProductTagPhotoEditorSaveTagsFalcoEvent"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("FBLogger")("CometRouter"),
		i = b("React"),
		j = b("gkx")("1643886");

	function a(a) {
		var c, d = i.useContext(b("PagesCometComposerContext")),
			e = a.action,
			f = a.mediaAttachments,
			k = a.mediaID,
			l = a.onBack,
			m = a.onForceBack,
			n = a.onSaveDone,
			o = a.onSaveStart,
			p = i.useContext(b("MediaEditorViewStateContext"));
		c = (c = p == null ? void 0 : p.isSaving) != null ? c : !1;
		var q = p == null ? void 0 : p.activeTool,
			r = b("useSaveAllMediaData")(f);
		p = i.useCallback(function () {
			o && o();
			var c = function () {
				n && n(), j && m && m()
			};
			r(e, c);
			if (q === "PRODUCT_TAG") {
				var f = d == null ? void 0 : d.pageID;
				f == null || k == null && h.warn("Either page ID or photo ID for product tagging logging event on photo editor click to save products is missing. IDs: ", f, k);
				b("ProductTagPhotoEditorSaveTagsFalcoEvent").log(function () {
					var b;
					return {
						creation_session_id: a.creationSessionID,
						creator_id: (b = f) != null ? b : "",
						media_id: (b = k) != null ? b : "",
						media_type: "photo",
						platform: "comet",
						referral_source: a.isEditingPreExistingStory === !0 ? "post_editor" : "composer"
					}
				})
			}
		}, [o, r, e, q, n, m, d == null ? void 0 : d.pageID, k, a.creationSessionID]);
		f = q === "PRODUCT_TAG" ? g._("Xong") : g._("H\u1ee7y");
		return i.jsx("div", {
			className: "k4urcfbm ihqw7lf3 rq0escxv i09qtzwb",
			children: i.jsx(b("TetraButtonGroup.react"), {
				primary: {
					label: c ? g._("\u0110ang l\u01b0u") : g._("L\u01b0u"),
					onPress: p,
					type: "primary"
				},
				secondary: {
					label: f,
					onPress: l
				},
				size: "large"
			})
		})
	}
	c = b("withComposerViewStatePart")(a, function (a) {
		return {
			creationSessionID: a.creationSessionID,
			isEditingPreExistingStory: a.isEditingPreExistingStory,
			mediaAttachments: a.mediaAttachments
		}
	});
	e.exports = c
}), null);