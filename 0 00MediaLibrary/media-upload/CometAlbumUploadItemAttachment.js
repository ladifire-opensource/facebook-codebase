__d("CometAlbumUploadItemAttachment.react", ["ix", "CometAlbumUploadItemAttachmentDescription.react", 
	"CometAlbumUploadItemAttachmentPhoto.react", "CometAlbumUploadItemSideActions.react", 
	"CometErrorBoundary.react", "CometPhotoAlbumGridItem.react", "CometPhotoAlbumGridItemUIActions.react", 
	"CometPlaceholder.react", "React", "TetraIcon.react", "deferredLoadComponent", "fbicon", "requireCond", 
	"requireDeferred", "cr:1730376", "cr:1730377", "cr:1719311", "cr:1883901"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = b("deferredLoadComponent")(b("requireDeferred")("CometLocalVideoFileThumbnailSuspense.react"));

	function a(a) {
		var c = a.attachment,
			d = a.children;
		a = a.mediaIndex;
		var e = c.file;
		return h.jsx(b("CometPhotoAlbumGridItem.react"), {
			bottom: h.jsxs(h.Fragment, {
				children: [h.jsx(b("CometAlbumUploadItemAttachmentDescription.react"), {
					attachment: c,
					mediaIndex: a
				}), c.fileType === "PHOTO" && c.state === "UPLOADED" && (b("cr:1730376") != null || b("cr:1730377") != null || b("cr:1719311") != null) && h.jsxs(b("CometPhotoAlbumGridItemUIActions.react"), {
					children: [b("cr:1730376") && h.jsx(b("cr:1730376"), {
						attachment: c,
						mediaIndex: a
					}), b("cr:1730377") ? h.jsx(b("cr:1730377"), {
						attachment: c,
						mediaIndex: a
					}) : null, b("cr:1719311") != null && c.entID != null ? h.jsx(b("cr:1719311"), {
						photoID: c.entID
					}) : null]
				})]
			}),
			sideActions: h.jsx(b("CometAlbumUploadItemSideActions.react"), {
				attachment: c
			}),
			sideState: b("cr:1883901") != null ? h.jsx(b("cr:1883901"), {
				attachment: c
			}) : void 0,
			top: h.jsxs(h.Fragment, {
				children: [c.fileType === "PHOTO" ? h.jsx(b("CometAlbumUploadItemAttachmentPhoto.react"), {
					attachment: c,
					mediaIndex: a
				}) : h.jsx(b("CometErrorBoundary.react"), {
					fallback: function() {
						return h.jsx(b("TetraIcon.react"), {
							color: "white",
							icon: b("fbicon")._(g("1183332"), 32)
						})
					},
					children: h.jsx(b("CometPlaceholder.react"), {
						fallback: null,
						children: h.jsx(i, {
							file: e,
							height: 100,
							width: 100
						})
					})
				}), d]
			})
		})
	}
}), null);