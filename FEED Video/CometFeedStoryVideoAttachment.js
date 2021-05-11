__d("CometFeedStoryVideoAttachment.react", ["CometFeedStoryVideoAttachmentVideoPlayer.react", 
	"CometFeedStoryVideoAttachment_attachment.graphql", "CometRelay", "react", 
	"unrecoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = h || b("react");

	function a(a) {
		var c = a.adClientToken,
			d = a.adID;
		a = a.attachment;
		a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryVideoAttachment_attachment.graphql"), a);
		var e = a == null ? void 0 : a.media;
		if (a == null || e == null) throw b("unrecoverableViolation")("Attachment and video cannot be null in a video feed story", "comet_feed");
		return i.jsx(b("CometFeedStoryVideoAttachmentVideoPlayer.react"), {
			adClientToken: c,
			adID: d,
			attachment: a,
			video: e,
			videoTahoeUrl: a == null ? void 0 : a.url
		})
	}
}), null);