__d("CometAlbumUploadItemFailedAttachment.react", ["CometAlbumUploadItemAttachmentDescription.react", 
	"CometAlbumUploadItemDeleteButton.react", "CometPhotoAlbumGridItem.react", "React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			failed: {
				borderTopColor: "jw3uvs1e",
				borderEndColor: "hmw3o7ox",
				borderBottomColor: "ku5f423u",
				borderStartColor: "a64ryyup",
				height: "i6mlhoon"
			}
		};

	function a(a) {
		var c = a.attachment;
		a = a.mediaIndex;
		return g.jsx(b("CometPhotoAlbumGridItem.react"), {
			bottom: g.jsx(b("CometAlbumUploadItemAttachmentDescription.react"), {
				attachment: c,
				mediaIndex: a
			}),
			sideActions: g.jsx(b("CometAlbumUploadItemDeleteButton.react"), {
				attachment: c
			}),
			top: g.jsxs(g.Fragment, {
				children: [c.file.name, c.error != null ? g.jsxs(g.Fragment, {
					children: [g.jsx("br", {}), g.jsx(b("TetraText.react"), {
						color: "negative",
						type: "body4",
						children: c.error
					})]
				}) : null]
			}),
			xstyle: h.failed
		})
	}
}), null);