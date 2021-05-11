__d("CometPhotoEditorToolbar.react", ["fbt", "Actor", "CometMediaEditorDisableMask.react", 
	"CometMediaEditorEligibilityContext", 
	"CometMediaEditorPushPageActionItems.react", 
	"CometPhotoEditorDescriptionTool.react", 
	"CometPhotoEditorTransformerTools.react", 
	"CometRelay", "CometScrollableArea.react",
	 "MediaEditorViewStateContext", "React", "gkx", 
	 "requireCond", "stylex", "cr:1546615", "CometPhotoEditorToolbarQuery.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c, d = a.onBack,
			e = a.onForceBack,
			f = a.photoID;
		a = a.pushPage;
		var j = i.useContext(b("MediaEditorViewStateContext"));
		j = (j = j == null ? void 0 : j.isSaving) != null ? j : !1;
		var k = b("Actor").useActor();
		k = b("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("CometPhotoEditorToolbarQuery.graphql"), {
			id: k[0]
		});
		c = (k == null ? void 0 : (c = k.page) == null ? void 0 : c.has_taggable_products) === !0;
		k = (k == null ? void 0 : k.additional_profile_shop_info) === !0;
		var l = !c && k,
			m = Object.prototype.hasOwnProperty.call(i.useContext(b("CometMediaEditorEligibilityContext")), "ALL");
		return i.jsxs("div", {
			className: "rikhs25o cbu4d94t j83agx80",
			children: [i.jsx(b("CometScrollableArea.react"), {
				horizontal: !1,
				children: i.jsxs("div", {
					className: "buofh1pr cbu4d94t j83agx80",
					children: [i.jsx(b("CometPhotoEditorDescriptionTool.react"), {}), b("cr:1546615") != null ? i.jsx(b("cr:1546615"), {}) : null, i.jsx(b("CometPhotoEditorTransformerTools.react"), {
						isPageShop: b("gkx")("1733965") ? k : c,
						isProfileComposer: l,
						onBack: d,
						photoID: f,
						pushPage: a
					})]
				})
			}), i.jsx("div", {
				className: "l9j0dhe7 km676qkl pfnyh3mw kb5gq1qc",
				children: i.jsx(b("CometMediaEditorPushPageActionItems.react"), {
					mediaID: f,
					onBack: d,
					onForceBack: e
				})
			}), j || m ? i.jsx(b("CometMediaEditorDisableMask.react"), {
				hint: m ? g._("Kh\u00f4ng th\u1ec3 ch\u1ec9nh s\u1eeda.") : null,
				showOverlay: !0
			}) : null]
		})
	}
}), null);