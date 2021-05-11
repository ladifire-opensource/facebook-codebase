__d("CometPhotoAlbumCreate.react", ["fbt", "CometAlbumLeftRail.react", "CometContentArea.react", 
	"CometLeftRailAndMainContentContainer.react", "CometPlaceholder.react", "CometRouteRenderType", 
	"React", "deferredLoadComponent", "requireDeferred", "stylex", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("deferredLoadComponent")(b("requireDeferred")("CometAlbumMediaAttachmentArea.react")),
		j = g._("T\u1ea1o album");

	function a(a) {
		var c = a.disableVideo;
		a.hasContributors;
		var d = a.mediaUploadLoggingMetadata,
			e = a.privacyScopePill;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["disableVideo", "hasContributors", "mediaUploadLoggingMetadata", "privacyScopePill"]);
		var f = b("CometRouteRenderType").useIsPushView();
		return h.jsx(b("CometLeftRailAndMainContentContainer.react"), {
			leftRailContent: h.jsx(b("CometAlbumLeftRail.react"), babelHelpers["extends"]({}, a, {
				disableVideo: c,
				privacyScope: e,
				submitTitle: g._("\u0110\u0103ng"),
				title: j,
				viewType: "create"
			})),
			leftRailHeading: j,
			mainContent: h.jsx(b("CometContentArea.react"), {
				children: h.jsx(b("CometPlaceholder.react"), {
					fallback: h.jsx("div", {
						className: f ? "k4urcfbm l9j0dhe7 cb02d2ww eip75gnj cddn0xzi" : ""
					}),
					children: h.jsx(i, {
						disableVideo: c,
						mediaUploadLoggingMetadata: d
					})
				})
			}),
			mainContentHeading: g._("T\u1ea1o album")
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		return {
			hasContributors: (((a = a.albumData) == null ? void 0 : a.albumContributors) || []).length > 0
		}
	});
	e.exports = c
}), null);