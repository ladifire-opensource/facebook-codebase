__d("CometFeedStoryMessageSection.react", ["CometFeedMatchRenderer.react", 
	"CometFeedStoryMessageSectionContext", "CometFeedStoryMessageSection_story.graphql", 
	"CometRelay", "react", "usePageletMatchMetadata"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = h || b("react"),
		j = {
			inFeedStoryMessage: !0
		};

	function a(a) {
		var c, d;
		a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryMessageSection_story.graphql"), a.story);
		c = a == null ? void 0 : (c = a.comet_sections) == null ? void 0 : c.message;
		b("usePageletMatchMetadata")("message", c);
		d = a == null ? void 0 : (d = a.comet_sections) == null ? void 0 : d.message_suffix;
		b("usePageletMatchMetadata")("message_suffix", d);
		d = d != null ? i.jsx(b("CometFeedMatchRenderer.react"), {
			match: d,
			section: "message_suffix",
			trackingData: a == null ? void 0 : a.encrypted_tracking
		}) : null;
		return i.jsx(b("CometFeedStoryMessageSectionContext").Provider, {
			value: j,
			children: i.jsx(b("CometFeedMatchRenderer.react"), {
				match: c,
				props: {
					suffix: d
				},
				section: "message",
				trackingData: a == null ? void 0 : a.encrypted_tracking
			})
		})
	}
}), null);