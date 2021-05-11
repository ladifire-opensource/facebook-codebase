__d("CometFeedStoryAlbumAttachmentStyle.react", ["CometFeedStoryAlbumAttachment.react", "CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer.graphql", "CometProductTagFunnelIDContext", "CometRelay", "RelayHooks", "react", "unrecoverableViolation", "useCometFeedStoryAttachmentMatchDebugger", "usePlayerOriginRouteTracePolicy", "useStable", "uuid"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = h || b("react"),
		j = g !== void 0 ? g : g = b("CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer.graphql");

	function a(a) {
		var c = b("RelayHooks").useFragment(j, a.styleTypeRenderer);
		b("useCometFeedStoryAttachmentMatchDebugger")(c);
		c = c.attachment;
		var d = b("usePlayerOriginRouteTracePolicy")();
		if (c == null) throw b("unrecoverableViolation")("attachment cannot be nullish in CometFeedStoryAlbumAttachmentStyle", "comet_feed");
		var e = i.jsx(b("CometRelay").MatchContainer, {
				match: c.comet_product_tag_feed_overlay_renderer,
				props: {
					areControlsVisible: !1,
					referralSurface: "newsfeed"
				}
			}),
			f = b("useStable")(function() {
				return b("uuid")()
			});
		return i.jsx(b("CometProductTagFunnelIDContext").Provider, {
			value: f,
			children: i.jsx(b("CometFeedStoryAlbumAttachment.react"), {
				adID: a.adID,
				attachment: c,
				attachmentStrategy_UNSTABLE_DO_NOT_USE: "CometFeedStoryAlbumAttachmentStyle",
				hasProductMatch: ((f = c.comet_product_tag_feed_overlay_renderer) == null ? void 0 : f.__typename) === "ProductMatchFeedOverlayRenderer",
				hasProductTags: ((a = c.comet_product_tag_feed_overlay_renderer) == null ? void 0 : a.__typename) === "CometProductTagFeedOverlayRenderer",
				initialTracePolicy: d,
				productTagOverlay: e,
				subOrigin: "media_collage"
			})
		})
	}
}), null);