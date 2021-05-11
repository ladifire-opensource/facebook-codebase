__d("CometAlbumUploadItem.react", ["CometAlbumUploadItemAttachment.react", "React", 
	"deferredLoadComponent", "requireDeferred", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("deferredLoadComponent")(b("requireDeferred")("CometAlbumUploadItemFailedAttachment.react")),
		i = b("deferredLoadComponent")(b("requireDeferred")("CometAlbumUploadItemPreexistingAttachment.react"));

	function a(a) {
		var c = a.attachment;
		a = a.mediaIndex;
		switch (c.state) {
			case "PREEXISTING":
				return g.jsx(i, {
					attachment: c,
					mediaIndex: a
				});
			case "NEW":
			case "QUEUED":
			case "UPLOADING":
			case "UPLOADED":
				return c.file != null ? g.jsx(b("CometAlbumUploadItemAttachment.react"), {
					attachment: c,
					mediaIndex: a,
					children: c.state === "UPLOADED" ? null : g.jsx("div", {
						className: "kr520xx4 pmk7jnqg datstx6m n7fi1qx3 ms7hmo2b",
						style: {
							width: (1 - (c.percentComplete || 0)) * 100 + "%"
						}
					})
				}) : null;
			case "FAILED":
				return g.jsx(h, {
					attachment: c,
					mediaIndex: a
				})
		}
		return null
	}
}), null);