__d("CometFeedStoryAlbumAttachment.react", ["CometAlbumGridLayout.react", "CometFeedStoryAlbumAttachment_attachment.graphql", "CometFeedStoryAttachmentCommandWidget", "RelayHooks", "StoryAttachmentActorContext", "cometGetKeyCommandConfig", "getCometMediaURL", "react", "recoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = h || b("react");

	function j() {
		var a = i.useRef(null),
			c = i.useCallback(function() {
				var b = a.current;
				b != null && b.click()
			}, []),
			d = i.useMemo(function() {
				return [b("cometGetKeyCommandConfig")("newsfeed", "openAttachment", c)]
			}, [c]);
		b("CometFeedStoryAttachmentCommandWidget").useKeyCommands(d);
		return a
	}

	function k(a, b) {
		var c = a == null ? void 0 : a.deduplication_key;
		if (c != null) return c;
		c = a == null ? void 0 : (c = a.media) == null ? void 0 : (a = c.image) == null ? void 0 : a.uri;
		return c != null ? c : "attachment-" + b
	}

	function l(a, c) {
		return c == null ? [] : c.map(function(c, d) {
			var e, f, g, h;
			e = (e = c.media) == null ? void 0 : e.image;
			var i = c == null ? void 0 : c.url;
			f = (f = c.media) == null ? void 0 : f.is_playable;
			if (e == null || i == null) return null;
			var j = b("getCometMediaURL")(c.media, a);
			j = (j = j) != null ? j : i;
			i = e.height;
			var l = e.uri;
			e = e.width;
			if (l == null || i == null || e == null) return null;
			d = k(c, d);
			g = (g = c == null ? void 0 : c.media) != null ? g : null;
			return {
				accessibilityCaption: (h = c.media) == null ? void 0 : h.accessibility_caption,
				focusX: (h = c.media) == null ? void 0 : (h = h.focus) == null ? void 0 : h.x,
				focusY: (h = c.media) == null ? void 0 : (c = h.focus) == null ? void 0 : c.y,
				height: i,
				id: d,
				isPlayable: f === !0,
				photo: (g == null ? void 0 : g.__typename) === "Photo" ? g : null,
				uri: l,
				url: j,
				video: (g == null ? void 0 : g.__typename) === "Video" ? g : null,
				width: e
			}
		}).filter(Boolean)
	}
	var m = g !== void 0 ? g : g = b("CometFeedStoryAlbumAttachment_attachment.graphql");

	function a(a) {
		var c = b("RelayHooks").useFragment(m, a.attachment),
			d = j(),
			e = b("StoryAttachmentActorContext").useStoryAttachmentActor();
		if (c == null) {
			var f;
			f = (f = a.attachmentStrategy_UNSTABLE_DO_NOT_USE) != null ? f : "";
			return b("recoverableViolation")("attachment cannot be nullish in CometFeedStoryAlbumAttachmentStyle. Attachment style: " + f, "comet_feed")
		}
		f = c == null ? void 0 : c.all_subattachments;
		c = c == null ? void 0 : c.mediaset_token;
		c = l(c, f == null ? void 0 : f.nodes);
		if (f == null || c.length < 1) {
			var g;
			g = (g = a.attachmentStrategy_UNSTABLE_DO_NOT_USE) != null ? g : "";
			return b("recoverableViolation")("subattachments cannot be nullish or empty in CometFeedStoryAlbumAttachmentStyle. Attachment style: " + g, "comet_feed")
		}
		g = f.count || 0;
		e = ((f = e == null ? void 0 : e.__typename) != null ? f : "User") === "User";
		return i.jsxs("div", {
			children: [i.jsx(b("CometAlbumGridLayout.react"), {
				adID: a.adID,
				attachments: c,
				firstItemRef: d,
				hasProductMatch: a.hasProductMatch,
				hasProductTags: a.hasProductTags,
				initialTracePolicy: a.initialTracePolicy,
				isUser: e,
				subOrigin: a.subOrigin,
				totalNumItems: g,
				urls: a.urls
			}), a.productTagOverlay]
		})
	}
}), null);