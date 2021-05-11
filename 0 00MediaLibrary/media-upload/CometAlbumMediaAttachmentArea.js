__d("CometAlbumMediaAttachmentArea.react", ["CometAlbumMediaAttachmentNullState.react", 
	"CometAlbumMediaGrid.react", "CometAlbumUploadItem.react", "CometComposerHeadlessMediaUploader.react",
	 "CometComposerMediaDropTarget.react", "CometPhotoAlbumGridItemBeingTaggedContext.react", 
	 "CometRouteRenderType", "React", "composerMediaAttachmentReducer", "stylex", 
	 "useComposerViewStateDispatcher", "useComposerViewStateReducer", "useFileDragEvents", 
	 "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c, d = a.disableVideo,
			e = a.mediaAttachments;
		a = a.mediaUploadLoggingMetadata;
		var f = b("CometRouteRenderType").useIsPushView();
		b("useComposerViewStateReducer")(b("composerMediaAttachmentReducer"));
		var h = b("useComposerViewStateDispatcher")();
		g.useEffect(function() {
			return function() {
				h({
					type: "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS"
				})
			}
		}, [h]);
		var i = (c = e == null ? void 0 : e.length) != null ? c : 0;
		c = Array.from(Array(i + 12)).map(function(a, c) {
			return c < i ? g.jsx(b("CometAlbumUploadItem.react"), {
				attachment: ((a = e) != null ? a : [])[c],
				mediaIndex: c
			}, c) : g.jsx("div", {}, c)
		});
		var j = function(a, b, c) {
				h({
					sourceIndex: b,
					targetIndex: c,
					type: "REORDER_MEDIA_ATTACHMENT_ITEM"
				})
			},
			k = b("useFileDragEvents")(function() {
				return !1
			});
		return g.jsxs(b("CometComposerMediaDropTarget.react"), {
			disableVideo: d,
			children: [g.jsx(b("CometComposerHeadlessMediaUploader.react"), {
				mediaUploadLoggingMetadata: a
			}), g.jsx("div", {
				className: f ? "cb02d2ww eip75gnj cddn0xzi" : ""
			}), i === 0 ? !k && g.jsx(b("CometAlbumMediaAttachmentNullState.react"), {}) : g.jsx(b("CometPhotoAlbumGridItemBeingTaggedContext.react").CometPhotoAlbumGridItemBeingTaggedProvider, {
				children: g.jsx(b("CometAlbumMediaGrid.react"), {
					onReorder: j,
					renderedItems: c
				})
			})]
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		return {
			mediaAttachments: a.mediaAttachments
		}
	});
	e.exports = c
}), null);