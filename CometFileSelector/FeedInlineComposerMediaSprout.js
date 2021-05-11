__d("FeedInlineComposerMediaSprout.react", ["ix", "fbt", 
	"CometComposerMediaAttachmentAreaResource", 
	"CometFeedInlineComposerSprout.react", 
	"CometFileSelector.react", "CometRelay", "React", "asset", "cometUniqueID", 
	"fileInputAcceptValues", "isMimeTypeForMedia", 
	"FeedInlineComposerMediaSprout_sprout.graphql"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React");
	i !== void 0 ? i : i = b("FeedInlineComposerMediaSprout_sprout.graphql");

	function a(a) {
		var c = a.isViewingSelf,
			d = a.launchBlueVideoComposer,
			e = a.onHoverIn,
			f = a.onHoverOut,
			i = a.onPressIn,
			k = a.showComposerDialog,
			l = a.triggerRef;
		a = j.useCallback(function (a) {
			if (a == null) return;
			var e = Array.from(a);
			if (e.length === 1 && b("isMimeTypeForMedia").isMimeTypeForVideo(e[0].type) && d != null && c === !0) {
				d(e[0]);
				return
			}
			e = a == null ? void 0 : Array.from(a).map(function (a) {
				var c = b("cometUniqueID")();
				a.uploadID = c;
				if (b("isMimeTypeForMedia").isMimeTypeForPhoto(a.type)) return {
					data: {
						id: c
					},
					file: a,
					fileObjectURL: URL.createObjectURL(a),
					fileType: "PHOTO",
					state: "NEW"
				};
				if (b("isMimeTypeForMedia").isMimeTypeForVideo(a.type)) return {
					data: {
						id: c
					},
					file: a,
					fileObjectURL: URL.createObjectURL(a),
					fileType: "VIDEO",
					state: "NEW"
				}
			}).filter(Boolean);
			k({
				additionalMediaAttachmentItems: e
			})
		}, [c, d, k]);
		var m = function (a) {
			b("CometComposerMediaAttachmentAreaResource").load(), a()
		};
		return j.jsx(b("CometFileSelector.react"), {
			accept: b("fileInputAcceptValues").PHOTO_AND_VIDEO,
			multiple: !0,
			onFilesSelected: a,
			children: function (a) {
				return j.jsx(b("CometFeedInlineComposerSprout.react"), {
					imageSrc: g("1260669"),
					label: h._("\u1ea2nh\/Video"),
					onHoverIn: e,
					onHoverOut: f,
					onPress: function () {
						m(a)
					},
					onPressIn: i,
					triggerRef: l
				})
			}
		})
	}
}), null);