__d("CometAlbumUploadFileButton.react", ["ix", "fbt", "CometFileSelector.react", "CometRelay", "ODS", "React", "TetraButton.react", "XCometPhotoAlbumUploadControllerRouteBuilder", "composerAlbumMediaAttachmentStateChecker", "composerMediaAttachmentReducer", "fbicon", "fileInputAcceptValues", "stylex", "useCometRouterDispatcher", "useComposerViewStateDispatcher", "useComposerViewStateReducer", "CometAlbumUploadFileButton_album.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = 4013;

	function a(a) {
		var c = a.album,
			d = a.disableVideo,
			e = a.viewType;
		b("useComposerViewStateReducer")(b("composerMediaAttachmentReducer"), b("composerAlbumMediaAttachmentStateChecker"));
		var f = b("useComposerViewStateDispatcher")(),
			l = b("useCometRouterDispatcher")();
		a = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometAlbumUploadFileButton_album.graphql"), c);
		a = (c = a) != null ? c : {};
		var m = a.reference_token;
		c = j.useCallback(function(a) {
			b("ODS").bumpFraction(k, "view_type", e, a.length), e === "edit" && m != null ? l != null && l.go(b("XCometPhotoAlbumUploadControllerRouteBuilder").buildURL({
				mediaset_token: m
			}), {
				passthroughProps: {
					passthroughFiles: Array.from(a)
				}
			}) : a.length > 0 && f({
				files: Array.from(a),
				type: "ADD_MEDIA_ATTACHMENT_ITEMS"
			})
		}, [f, m, l, e]);
		var n;
		d === !0 ? (a = b("fileInputAcceptValues").PHOTO, n = h._("T\u1ea3i \u1ea3nh l\u00ean")) : (a = b("fileInputAcceptValues").PHOTO_AND_VIDEO, n = h._("T\u1ea3i \u1ea3nh ho\u1eb7c video l\u00ean"));
		return j.jsx("div", {
			className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
			children: j.jsx(b("CometFileSelector.react"), {
				accept: a,
				multiple: !0,
				onFilesSelected: c,
				children: function(a) {
					return j.jsx(b("TetraButton.react"), {
						icon: b("fbicon")._(g("481773"), 16),
						label: n,
						onPress: a,
						size: "large",
						type: "secondary"
					})
				}
			})
		})
	}
}), null);