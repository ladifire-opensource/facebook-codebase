__d("ProfileCometAppSectionPhotosSelfCurationActionRenderer.react", ["ix", "fbt",
 "CometFileSelector.react", "CometLazyPopoverTrigger.react", 
 "CometPopoverLoadingState.react", "CometRefineRef", "CometRelay",
  "CometRow.react", "CometRowItem.react", "JSResource", "ProfileCometContext", 
  "React", "TetraButton.react", "cometUniqueID", "fbicon", "fileInputAcceptValues",
   "gkx", "isMimeTypeForMedia", "useProfileCometComposerDialog",
    "useResumableComposerViewState", 
    "ProfileCometAppSectionPhotosSelfCurationActionRenderer_actionsRenderer.graphql"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("JSResource")("ProfileCometAppSectionPhotoCurationMenu.react").__setRef("ProfileCometAppSectionPhotosSelfCurationActionRenderer.react");

	function a(a) {
		a = a.actionsRenderer;
		a = b("CometRelay").useFragment(i !== void 0 ? i : i = b("ProfileCometAppSectionPhotosSelfCurationActionRenderer_actionsRenderer.graphql"), a);
		var c = j.useContext(b("ProfileCometContext"));
		c = c.profileID;
		c = b("useProfileCometComposerDialog")({
			profileID: c,
			tracePolicy: "comet.composer.profile"
		});
		var d = c[0],
			e = c[1];
		c = b("useResumableComposerViewState")();
		var f = c.getResumableViewState;
		c = function (a) {
			a = a == null ? void 0 : Array.from(a).map(function (a) {
				var c = b("gkx")("1663744") ? URL.createObjectURL(a) : void 0,
					d = b("cometUniqueID")();
				a.uploadID = d;
				if (b("isMimeTypeForMedia").isMimeTypeForPhoto(a.type)) return {
					data: {
						id: d
					},
					file: a,
					fileObjectURL: c,
					fileType: "PHOTO",
					state: "NEW"
				};
				if (b("isMimeTypeForMedia").isMimeTypeForVideo(a.type)) return {
					data: {
						id: d
					},
					file: a,
					fileObjectURL: c,
					fileType: "VIDEO",
					state: "NEW"
				}
			}).filter(Boolean);
			d({
				beginningViewState: (a = f(a)) != null ? a : void 0
			})
		};
		return j.jsxs(b("CometRow.react"), {
			paddingHorizontal: 0,
			paddingTop: 0,
			spacing: 8,
			verticalAlign: "center",
			children: [j.jsx(b("CometRowItem.react"), {
				children: j.jsx(b("CometFileSelector.react"), {
					accept: b("fileInputAcceptValues").PHOTO_AND_VIDEO,
					multiple: !0,
					onFilesSelected: c,
					children: function (a) {
						return j.jsx(b("TetraButton.react"), {
							label: h._("Th\u00eam \u1ea3nh\/video"),
							onPress: function (b) {
								return a()
							},
							reduceEmphasis: !0,
							ref: b("CometRefineRef")(e),
							size: "medium",
							type: "secondary"
						})
					}
				})
			}), j.jsx(b("CometRowItem.react"), {
				children: j.jsx(b("CometLazyPopoverTrigger.react"), {
					align: "start",
					autoAlign: !0,
					fallback: j.jsx(b("CometPopoverLoadingState.react"), {}),
					popoverProps: {
						actionsRenderer: a
					},
					popoverResource: k,
					position: "below",
					preloadTrigger: "button",
					children: function (a, c, d, e, f, i) {
						return j.jsx(b("TetraButton.react"), {
							icon: b("fbicon")._(g("484386"), 16),
							label: h._("Xem th\u00eam"),
							labelIsHidden: !0,
							onHoverIn: e,
							onHoverOut: f,
							onPress: c,
							onPressIn: i,
							ref: a,
							size: "medium",
							type: "secondary"
						})
					}
				})
			})]
		})
	}
}), null);