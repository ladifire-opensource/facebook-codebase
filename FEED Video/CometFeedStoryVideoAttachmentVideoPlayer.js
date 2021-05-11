__d("CometFeedStoryVideoAttachmentVideoPlayer.react", ["CometComposerStoryLinkAttachmentPreviewContext", "CometFeedStoryAttachmentCommandWidget", "CometFeedStoryFeedLocationContext", "CometFeedStoryVideoAttachmentVideoPlayer_attachment.graphql", "CometFeedStoryVideoAttachmentVideoPlayer_video.graphql", "CometFeedUnitLoggingContext", "CometFeedVideoPlayer.react", "CometFeedVideoPlayerPlaceholder.react", "CometPlaceholder.react", "CometProductTagFunnelIDContext", "CometRelay", "CometSetWatchAndScrollVideoContext", "CometUFIVideoPlayerUtils", "CometVideoPlayerInstreamAdsFeedContextCardContext", "CometWarningScreenContext", "CometWatchAndScrollTriggerContextProvider", "CometWatchAndScrollVideoContext", "VideoLocationContextUtils", "VideoPlayerCometFeedStoryControls.react", "VideoPlayerCometFeedThumbnail.react", "VideoPlayerHooks", "VideoPlayerInteractionHintOverlay.react", "VideoPlayerInteractionOverlay.react", "VideoPlayerPortalingPlaceInfoProvider.react", "VideoPlayerSurface.react", "VideoPlayerWatchAndScrollOverlay.react", "VideoPlayerWithLiveVideoEndscreenAndChaining.react", "VideoPlayerWithLiveVideoIndicator.react", "VideoPlayerWithWatchAndScrollTrigger.react", "XCometWatchControllerRouteBuilder", "cometGetKeyCommandConfig", "deferredLoadComponent", "react", "requireDeferred", "useCometFeedStoryVideoAttachmentVideoPressInteraction", "useCometFeedStoryVideoCTAScreenOverlay", "useStable", "useVideoPlayerDefaultControlsVisibility", "useVideoPlayerWatchEndScreenWithActions", "uuid"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i, j = i || b("react"),
		k = b("deferredLoadComponent")(b("requireDeferred")("VideoPlayerWithVideoCardsOverlay.react"));

	function l(a) {
		var c = j.useRef(null),
			d = j.useCallback(function() {
				var a = c.current;
				a != null && a.click()
			}, []),
			e = j.useMemo(function() {
				return a ? [b("cometGetKeyCommandConfig")("newsfeed", "openAttachment", d)] : []
			}, [a, d]);
		b("CometFeedStoryAttachmentCommandWidget").useKeyCommands(e);
		return c
	}

	function m(a) {
		var c, d = a.adClientToken,
			e = a.adID,
			f = a.attachment,
			g = a.channelID,
			h = a.feedLocation,
			i = a.isAdVideo,
			m = a.subOrigin,
			n = a.video,
			o = a.videoTahoeUrl;
		a = !0;
		var p = !i && n.watch_brand_icon_renderer != null && h === "NEWSFEED" && n.id != null,
			q = null;
		if (p) {
			var r;
			q = b("XCometWatchControllerRouteBuilder").buildURL({
				v: (r = n.id) == null ? void 0 : r.toString()
			})
		}
		g = b("useCometFeedStoryVideoAttachmentVideoPressInteraction")({
			adID: e,
			channelEntryPoint: b("VideoLocationContextUtils").getVideoChannelEntryPointFromFeedLocation(h),
			channelID: g,
			hasProductTags: n.comet_product_tag_feed_overlay_renderer != null,
			isAdVideo: i,
			logProductTagPostClickComponent: "CometFeedStoryVideoAttachmentVideoPlayer",
			logProductTagPostClickReferralCodePrefix: "product_tag_on_newsfeed_",
			logProductTagPostClickSurface: "newsfeed",
			reactionVideoChannelType: "newsfeed",
			shouldUnmute: a,
			subOrigin: m,
			videoChainingCaller: b("VideoLocationContextUtils").getVideoChainingCallerFromFeedLocation(h),
			videoID: (r = n == null ? void 0 : n.id) != null ? r : "",
			videoTahoeUrl: o,
			videoWatchUrl: q
		});
		h = l((g == null ? void 0 : g.handler) != null && !i);
		r = b("useCometFeedStoryVideoCTAScreenOverlay")({
			adClientToken: d,
			adID: e,
			attachment: f
		});
		d = r.ctaScreenOverlayElement;
		e = r.isRenderedCTAScreenOverlay;
		f = b("useVideoPlayerWatchEndScreenWithActions")({
			isAdVideo: i,
			video: n
		});
		r = f.endScreenWithActionsElement;
		f = f.isRenderedEndScreenWithActions;
		c = (c = n == null ? void 0 : n.is_video_broadcast) != null ? c : !1;
		r = d != null ? d : r;
		d = d != null ? e : f;
		e = b("useVideoPlayerDefaultControlsVisibility")();
		f = e.isControlsVisible;
		e = e.onUserInteraction;
		d = !d;
		f = d && f;
		var s = b("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo(),
			t = s.previousPlaceMetaData,
			u = b("VideoPlayerHooks").useController();
		j.useEffect(function() {
			switch (t == null ? void 0 : t.placeDescription) {
				case "tahoe":
					u.setMuted(!0, "tahoe_transition_phase_initiated");
					return;
				case "watch_and_scroll":
					u.play("watch_and_scroll_transition_phase_initiated");
					return
			}
		}, [t, u]);
		s = j.useContext(b("CometFeedUnitLoggingContext"));
		var v = s.position;
		j.useEffect(function() {
			u.setAdditionalLogData("feed_position", v)
		}, [v, u]);
		s = j.useMemo(function() {
			return {
				subOrigin: m,
				videoTahoeUrl: o
			}
		}, [m, o]);
		p = p ? j.jsx(b("CometRelay").MatchContainer, {
			match: n.watch_brand_icon_renderer,
			props: {
				subOrigin: m,
				videoUrl: q
			}
		}) : null;
		return j.jsxs(b("VideoPlayerSurface.react"), {
			children: [j.jsx(b("VideoPlayerWithWatchAndScrollTrigger.react").VideoPlayerWithWatchAndScrollTrigger, {
				subOrigin: m,
				triggerType: c ? b("VideoPlayerWithWatchAndScrollTrigger.react").WatchAndScrollTriggerType.BROADCAST : b("VideoPlayerWithWatchAndScrollTrigger.react").WatchAndScrollTriggerType.VOD,
				videoID: n == null ? void 0 : n.id
			}), p, j.jsx(b("CometUFIVideoPlayerUtils").CometUFIVideoPlayerStateAndControllerExtractor, {
				data: s
			}), j.jsx(b("VideoPlayerCometFeedThumbnail.react"), {
				video: n
			}), j.jsx(b("CometRelay").MatchContainer, {
				match: n.comet_product_tag_feed_overlay_renderer,
				props: {
					areControlsVisible: f,
					referralSurface: "newsfeed"
				}
			}), j.jsx(b("CometPlaceholder.react"), {
				fallback: null,
				children: j.jsx(k, {
					surface: "COMET_INLINE",
					video: n
				})
			}), j.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay, {
				pressInteraction: g,
				ref: h
			}), j.jsx(b("VideoPlayerInteractionHintOverlay.react"), {
				interaction: g,
				isVisible: f
			}), d ? j.jsx(b("VideoPlayerCometFeedStoryControls.react"), {
				isAdVideo: i,
				isVisible: f,
				onUserInteraction: e,
				shouldUnmute: a,
				subOrigin: m,
				video: n,
				videoTahoeUrl: o
			}) : null, r, j.jsx(b("VideoPlayerWithLiveVideoIndicator.react"), {
				hasCometNavOverlay: !1,
				shouldExpand: !0,
				video: n
			}), j.jsx(b("VideoPlayerWithLiveVideoEndscreenAndChaining.react"), {
				video: n
			})]
		})
	}

	function a(a) {
		var c = a.adClientToken,
			d = a.adID,
			e = a.attachment,
			f = a.video;
		a = a.videoTahoeUrl;
		var i = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryVideoAttachmentVideoPlayer_video.graphql"), f);
		f = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedStoryVideoAttachmentVideoPlayer_attachment.graphql"), e);
		e = b("CometWarningScreenContext").useHasOverlay();
		var k = b("CometComposerStoryLinkAttachmentPreviewContext").useCometComposerStoryLinkAttachmentPreviewContext();
		e = !e && !k;
		k = c != null && c !== "";
		var l = i.is_clip === !0,
			o = i.id,
			p = j.useContext(b("CometFeedStoryFeedLocationContext")),
			q = b("useStable")(function() {
				return b("uuid")()
			}),
			r = j.useContext(b("CometSetWatchAndScrollVideoContext")),
			s = j.useContext(b("CometWatchAndScrollVideoContext")),
			t = j.useCallback(function(a) {
				return a != null ? j.jsx(b("CometFeedVideoPlayerPlaceholder.react"), {
					onClick: a,
					video: i
				}) : j.jsx(n, {
					onPress: function() {
						r(null)
					},
					video: i,
					watchAndScrollVideo: s
				})
			}, [r, i, s]),
			u = function(a) {
				var c = i.clip_fallback_cover;
				return j.jsx(b("CometRelay").MatchContainer, {
					match: c,
					props: {
						onRetry: a
					}
				})
			},
			v = j.useState(null),
			w = v[0],
			x = v[1];
		v = j.useCallback(function(a) {
			x(a)
		}, []);
		return j.jsxs(j.Fragment, {
			children: [j.jsx(b("CometWatchAndScrollTriggerContextProvider"), {
				children: j.jsx(b("CometProductTagFunnelIDContext").Provider, {
					value: q,
					children: j.jsx(b("CometVideoPlayerInstreamAdsFeedContextCardContext").CometVideoPlayerInstreamAdsFeedContextCardContext.Provider, {
						value: v,
						children: j.jsx(b("CometFeedVideoPlayer.react"), {
							adClientToken: c,
							canAutoplay: e ? "respect_user_settings" : "do_not_autoplay",
							errorBoundaryFallback: l ? u : void 0,
							portalingEnabled: !0,
							portalingPlaceMetaData: {
								placeDescription: "news_feed"
							},
							portalingRenderPlaceholder: t,
							silenceHydrationMutationReporting: !0,
							subOrigin: "inline",
							video: i,
							children: j.jsx(m, {
								adClientToken: c,
								adID: d,
								attachment: f,
								channelID: b("VideoLocationContextUtils").getChannelIDFromFeedLocation(p, (q = i.owner) == null ? void 0 : q.id, o),
								feedLocation: p,
								isAdVideo: k,
								subOrigin: "inline",
								video: i,
								videoTahoeUrl: a
							})
						})
					})
				})
			}), w]
		})
	}

	function n(a) {
		var c = a.onPress,
			d = a.video;
		a = a.watchAndScrollVideo;
		var e = b("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo();
		e = e.currentVideoID;
		a = (a == null ? void 0 : a.portableVideoID) === e;
		return a ? j.jsx(b("VideoPlayerWatchAndScrollOverlay.react"), {
			onPress: c
		}) : j.jsx(b("CometFeedVideoPlayerPlaceholder.react"), {
			video: d
		})
	}
}), null);