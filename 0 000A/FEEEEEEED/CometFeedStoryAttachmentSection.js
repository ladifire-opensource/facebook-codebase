__d("CometFeedStoryAttachmentSection.react", ["CometFeedARIAProperties.react", "CometFeedAggregatedStoriesContext", "CometFeedStoryAttachmentDisclaimerFooterSection.react", "CometFeedStoryAttachmentFooterSection.react", "CometFeedStoryAttachmentOverlaySection.react", "CometFeedStoryAttachmentRenderer.react", "CometFeedStoryAttachmentSection_story.graphql", "CometFeedStoryFeedLocationContext", "CometFeedStoryInfoIconSection.react", "CometStoryRenderLocationContext.react", "CometTrackingNodeProvider.react", "RelayHooks", "StoryAttachmentActorContext", "cr:1621813", "gkx", "react", "useIsSATPStory"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = h || b("react"),
		j = g !== void 0 ? g : g = b("CometFeedStoryAttachmentSection_story.graphql");

	function a(a) {
		var c = b("RelayHooks").useFragment(j, a.story),
			d = i.useContext(b("CometFeedAggregatedStoriesContext")),
			e = b("useIsSATPStory")(c),
			f = b("gkx")("1577562"),
			g = i.useRef(null),
			h = i.useRef(null),
			k = i.useRef(null),
			l = i.useRef(!1),
			m = i.useContext(b("CometStoryRenderLocationContext.react")),
			n = m !== "%future added value" ? m : null;
		m = i.useContext(b("CometFeedARIAProperties.react"));
		var o = i.useCallback(function() {
				if (l.current === !1 && g.current != null && h.current != null && k.current != null) {
					var a;
					l.current = !0;
					var c = (a = (a = g.current) == null ? void 0 : a.match) != null ? a : "null",
						d = (a = (a = h.current) == null ? void 0 : a.match) != null ? a : "null",
						e = (a = (a = k.current) == null ? void 0 : a.match) != null ? a : "null";
					b("cr:1621813") && b("cr:1621813").log(function() {
						return {
							attachment_footer_match: d,
							attachment_style_match: c,
							info_icon_match: e,
							render_location: n
						}
					})
				}
			}, [n]),
			p = i.useCallback(function(a) {
				g.current = {
					match: a
				}, o()
			}, [o]),
			q = i.useCallback(function(a) {
				h.current = {
					match: a
				}, o()
			}, [o]),
			r = i.useCallback(function(a) {
				k.current = {
					match: a
				}, o()
			}, [o]),
			s = c == null ? void 0 : c.attachments;
		if (s == null || s.length === 0) return null;
		var t = d.hasAggregateParent ? s.filter(function(a) {
				return !d.suppressedAttachments.includes(a.deduplication_key)
			}) : s,
			u = t.length > 0 && t[0] === s[0],
			v = u && i.jsx(b("CometFeedStoryInfoIconSection.react"), {
				onMatch_UNSTABLE_DO_NOT_USE: f ? r : void 0,
				story: c
			});
		s = babelHelpers["extends"]({}, m.attachmentTargetProps);
		return i.jsx("div", babelHelpers["extends"]({
			className: "l9j0dhe7",
			ref: m.attachmentTargetRef
		}, s, {
			children: i.jsx(b("CometFeedStoryFeedLocationContext").Provider, {
				displayName: "CometFeedStoryFeedLocationContext",
				value: a.feedLocation,
				children: i.jsx(b("StoryAttachmentActorContext").StoryAttachmentActorContextProvider, {
					story: c,
					children: t.map(function(a, d) {
						var g;
						return i.jsxs(b("CometTrackingNodeProvider.react"), {
							trackingNode: 15,
							children: [i.jsxs("div", {
								className: "l9j0dhe7",
								children: [i.jsx(b("CometFeedStoryAttachmentOverlaySection.react"), {
									attachmentRenderer: i.jsx("div", {
										children: i.jsx(b("CometFeedStoryAttachmentRenderer.react"), {
											adClientToken: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.client_token,
											adID: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.ad_id,
											attachment: a,
											canOverlapWithPreviousAttachment: d !== 0 || e,
											onMatch_UNSTABLE_DO_NOT_USE: f ? p : void 0,
											trackingData: c == null ? void 0 : c.encrypted_tracking
										})
									}),
									story: c
								}), d === 0 ? v : null]
							}), u ? i.jsxs(i.Fragment, {
								children: [i.jsx(b("CometFeedStoryAttachmentFooterSection.react"), {
									adClientToken: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.client_token,
									adID: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.ad_id,
									attachment: a,
									onMatch_UNSTABLE_DO_NOT_USE: f ? q : void 0,
									trackingData: c == null ? void 0 : c.encrypted_tracking
								}), i.jsx(b("CometFeedStoryAttachmentDisclaimerFooterSection.react"), {
									adClientToken: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.client_token,
									adID: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.ad_id,
									attachment: a,
									trackingData: c == null ? void 0 : c.encrypted_tracking
								})]
							}) : null]
						}, d)
					})
				})
			})
		}))
	}
}), null);