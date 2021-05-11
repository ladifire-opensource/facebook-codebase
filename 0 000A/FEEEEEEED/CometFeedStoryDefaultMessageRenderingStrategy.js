__d("CometFeedStoryDefaultMessageRenderingStrategy.react", ["CometFeedARIAProperties.react", "CometFeedMessageTextWithEntities.react", "CometFeedStoryDefaultMessageRenderingStrategy_message.graphql", "CometFeedUnitQueryVariablesContext", "CometRelay", "TetraTextPairing.react", "react", "stylex", "unrecoverableViolation", "useCometFeedStoryMatchDebugger", "useCometFeedStoryRenderLocationIsPermalink", "useGeminiSRTFeedStoryRenderLocationIsPageTimeline"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i, j = h || b("react"),
		k = g !== void 0 ? g : g = b("CometFeedStoryDefaultMessageRenderingStrategy_message.graphql");

	function a(a) {
		var c, d, e = b("CometRelay").useFragment(k, a.message);
		b("useCometFeedStoryMatchDebugger")(e);
		c = e == null ? void 0 : (c = e.story) == null ? void 0 : c.message;
		var f = j.useContext(b("CometFeedARIAProperties.react")),
			g = j.useContext(b("CometFeedUnitQueryVariablesContext")),
			h = b("useCometFeedStoryRenderLocationIsPermalink")(),
			l = b("useGeminiSRTFeedStoryRenderLocationIsPageTimeline")();
		if (c == null) throw b("unrecoverableViolation")("storyMessage cannot be null in CometFeedStoryDefaultMessageRenderingStrategy", "comet_feed");
		var m = babelHelpers["extends"]({}, f.contentTargetProps);
		d = ((d = e.story) == null ? void 0 : d.is_text_only_story) === !0;
		g = (g == null ? void 0 : g.feedLocation) === "SERVICES_LOCAL_BUSINESS_DISCOVERY";
		return j.jsx("div", babelHelpers["extends"]({
			className: (i || (i = b("stylex"))).dedupe({
				"padding-top-1": "ecm0bbzt",
				"padding-end-1": "hv4rvrfc",
				"padding-bottom-1": "ihqw7lf3",
				"padding-start-1": "dati1w0a"
			}, d ? {
				"padding-bottom-1": "e5nlhep0"
			} : null),
			"data-ad-comet-preview": "message",
			"data-ad-preview": "message",
			"data-testid": void 0,
			ref: f.contentTargetRef
		}, m, {
			children: j.jsx(b("TetraTextPairing.react"), {
				body: j.jsx(b("CometFeedMessageTextWithEntities.react"), {
					maxLines: (f = e.story) == null ? void 0 : f.message_truncation_line_limit,
					suffix: a.suffix,
					textWithEntities: c,
					truncationStyle: l ? "none" : g ? d ? "none" : "ellipsis-only" : h ? "none" : "see-more"
				}),
				bodyColor: "primary",
				bodyLineLimit: g ? d ? 14 : 2 : null,
				level: 3
			})
		}))
	}
}), null);