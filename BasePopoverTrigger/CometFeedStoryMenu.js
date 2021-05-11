__d("CometFeedStoryMenu.react", ["CometErrorProjectContext", "CometFeedStoryLoggingMenuItemWrapper.react", "CometFeedStoryMenuDebugInfoContext", "CometMenu.react", "CometRelay", "React", "recoverableViolation", "unrecoverableViolation", "CometFeedStoryMenuQuery.graphql", "CometFeedStoryMenu_story.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = b("React");

	function a(a) {
		var c = a.props,
			d = c.feedLocation,
			e = c.variables;
		c = a.queries;
		a = b("CometRelay").usePreloadedQuery(g !== void 0 ? g : g = b("CometFeedStoryMenuQuery.graphql"), c.menuQueryReference);
		a = a == null ? void 0 : a.node;
		var f = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedStoryMenu_story.graphql"), (a == null ? void 0 : a.__typename) != null ? a : null);
		if (a == null && f == null) throw b("unrecoverableViolation")("feedUnit and feedStory cannot be null in CometFeedStoryMenu", "comet_feed");
		a = f == null ? void 0 : f.nfx_action_menu_items;
		if (a == null) throw b("unrecoverableViolation")("Cannot render CometFeedStoryMenu due to missing the nfx_action_menu_items field", "comet_feed");
		f = [];
		f = a.map(function (a, c) {
			var f, g;
			f = (f = a.feed_unit) == null ? void 0 : f.__typename;
			g = (g = a.action) == null ? void 0 : g.type;
			return g === "RESOLVE_PROBLEM" && f === "QuickPromotionNativeTemplateFeedUnit" ? null : i.jsx(b("CometFeedStoryLoggingMenuItemWrapper.react"), {
				feedLocation: d,
				storyMenuItem: a,
				children: function (c, d) {
					d = d != null ? {
						onClick: c,
						ref: d,
						variables: e
					} : {
						onClick: c,
						variables: e
					};
					return i.jsx(b("CometRelay").MatchContainer, {
						match: a,
						props: d
					})
				}
			}, c)
		}).filter(Boolean);
		if (f.length === 0) {
			b("recoverableViolation")("Comet Feed menuItems should not be empty", "comet_feed");
			return null
		}
		return i.jsx(b("CometErrorProjectContext").Provider, {
			value: "feed",
			children: i.jsx(b("CometFeedStoryMenuDebugInfoContext").CometFeedStoryMenuDebugInfoProvider, {
				story_debug_info: c.menuQueryReference.variables.story_debug_info,
				children: i.jsx(b("CometMenu.react"), {
					testid: void 0,
					truncate: d === "COMET_MEDIA_VIEWER",
					withArrow: !0,
					children: f
				})
			})
		})
	}
}), null);