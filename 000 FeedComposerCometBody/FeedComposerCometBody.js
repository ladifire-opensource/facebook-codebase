__d("FeedComposerCometBody.react", ["CometComposerAMAAttachmentAreaResource", "CometComposerAttachmentArea.react", "CometComposerFooterAttachmentArea.react", "CometComposerLivingRoomAttachmentAreaContainerResource", "CometComposerMediaAttachmentAreaResource", "CometComposerViewOnlyFeedAttachmentAreaResource", "CometComposerWoodhengeSupportAttachmentAreaResource", "CometRelay", "ComposerLinkAttachmentAreaResource", "ComposerLocationAttachmentAreaResource", "ComposerPhoto3dAttachmentAreaResource", "FeedComposerCometAnimatedImageAttachmentAreaResource", "FeedComposerCometFormattedTextArea.react", "FeedComposerCometStatusAreaRelay.react", "FundraiserForStoryAttachmentAreaResource", "JSResourceForInteraction", "QuiltsCometComposerAttachmentAreaResource", "React", "createComposerDeferredPlugin", "gkx", "lazyLoadComponent", "requireCond", "requireDeferred", "stylex", "useCometComposerMarkdown", "cr:1575125", "cr:1757514", "cr:1536687", "cr:1780968", "cr:1575798", "FeedComposerCometBody_profile.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = (c = b("lazyLoadComponent"))(b("CometComposerMediaAttachmentAreaResource")),
		j = c(b("FeedComposerCometAnimatedImageAttachmentAreaResource")),
		k = c(b("FundraiserForStoryAttachmentAreaResource")),
		l = c(b("ComposerPhoto3dAttachmentAreaResource")),
		m = c(b("CometComposerLivingRoomAttachmentAreaContainerResource")),
		n = c(b("CometComposerAMAAttachmentAreaResource")),
		o = c(b("QuiltsCometComposerAttachmentAreaResource")),
		p = c(b("CometComposerViewOnlyFeedAttachmentAreaResource")),
		q = c(b("CometComposerWoodhengeSupportAttachmentAreaResource")),
		r = c(b("ComposerLocationAttachmentAreaResource")),
		s = c(b("ComposerLinkAttachmentAreaResource")),
		t = c(b("JSResourceForInteraction")("ThrowbackComposerLinkAttachmentArea.react").__setRef("FeedComposerCometBody.react")),
		u = b("createComposerDeferredPlugin")(b("requireDeferred")("FeedComposerCometMentionsPlugin.react")),
		v = c(b("JSResourceForInteraction")("CometComposerRoomsAttachmentArea.react").__setRef("FeedComposerCometBody.react")),
		w = b("createComposerDeferredPlugin")(b("requireDeferred")("CometComposerLinksPlugin.react")),
		x = b("createComposerDeferredPlugin")(b("requireDeferred")("CometComposerMisinformationLinkDetectorPlugin.react")),
		y = g !== void 0 ? g : g = b("FeedComposerCometBody_profile.graphql");

	function a(a) {
		var c, d = a.composerType,
			e = a.isViewerFeed,
			f = a.onClose,
			g = a.placeholderText;
		a = a.profile$key;
		a = b("CometRelay").useFragment(y, a);
		var z = a == null ? void 0 : a.id,
			A = b("useCometComposerMarkdown")({
				previewPanePosition: "BELOW_EDITOR"
			});
		return h.jsxs(h.Fragment, {
			children: [h.jsx(b("FeedComposerCometFormattedTextArea.react"), {
				children: h.jsx(b("FeedComposerCometStatusAreaRelay.react"), {
					alwaysShrinkText: b("gkx")("1217157"),
					autoFocus: !0,
					draftEditorRendering: (c = (c = A == null ? void 0 : A.draftEditorProps) != null ? c : b("cr:1575125")) != null ? c : void 0,
					isViewerFeed: e,
					onClose: f,
					placeholderText: g,
					plugins: [h.jsx(u, {}, "mentionsPlugin"), b("cr:1757514") != null && h.jsx(b("cr:1757514"), {}, "delightsPlugin"), h.jsx(b("cr:1536687"), {}, "hashtagPlugin"), h.jsx(w, {}, "linksPlugin"), h.jsx(x, {
						composerType: (c = d) != null ? c : "feed"
					}, "misinformationLinkDetectorPlugin"), b("cr:1575798") != null ? h.jsx(b("cr:1575798"), {}, "richTextPlugin") : null],
					profile$key: a,
					stripPastedStyles: (A == null ? void 0 : A.isActive) === !0
				})
			}), h.jsx("div", {
				className: "scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys",
				children: h.jsx(b("CometComposerAttachmentArea.react"), {
					children: function(a) {
						switch (a) {
							case "AMA":
								return h.jsx(n, {});
							case "ANIMATED_IMAGE":
								return h.jsx(j, {});
							case "KNOWLEDGE_NOTE":
								return b("cr:1780968") != null && h.jsx(b("cr:1780968"), {});
							case "LOCATION":
								return h.jsx(r, {});
							case "LINK":
							case "SHARE":
								return d === "memories" ? h.jsx(t, {}) : h.jsx(s, {});
							case "LIVING_ROOM":
								return h.jsx(m, {});
							case "MEDIA":
								return h.jsx(i, {
									mediaUploadLoggingMetadata: {
										composerEntrypoint: "feed",
										source: "newsfeed_composer"
									}
								});
							case "NONPROFIT":
								return h.jsx(k, {});
							case "PHOTO3D":
								return h.jsx(l, {});
							case "QUILT":
								return h.jsx(o, {
									mediaUploadLoggingMetadata: {
										composerEntrypoint: "feed",
										source: "newsfeed_composer"
									}
								});
							case "VIEW_ONLY_FEED_ATTACHMENT":
								return h.jsx(p, {
									feedLocation: "FEED_COMPOSER"
								});
							case "WOODHENGE_SUPPORT":
								return h.jsx(q, {
									profileID: z
								})
						}
						return null
					}
				})
			}), h.jsx(b("CometComposerFooterAttachmentArea.react"), {
				children: function(a) {
					switch (a) {
						case "ROOM":
							return h.jsx(v, {})
					}
					return null
				}
			}), A == null ? void 0 : A.previewPane]
		})
	}
	d = a;
	e.exports = d
}), null);