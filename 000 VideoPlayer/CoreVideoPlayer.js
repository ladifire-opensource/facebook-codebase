__d("CoreVideoPlayer.react", ["CometObjectFitContainer.old.react", "CometObjectFitContainer.react",
 "CurrentUser", "ErrorMetadata", "React", "VideoLiveTrace", 
 "VideoPlayerAudioAvailabilityInfo", "VideoPlayerOnViewability.react", 
 "createVideoStateHook", "err", "getOwnObjectValues", "gkx", 
 "renderVideoPlayerImplementation", "unrecoverableViolation", 
 "useCometSize_DO_NOT_USE", "useCreateVideoPlayerPassiveViewabilityInfo", "videoPlayerUniqueID"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 584;

	function i(a) {
		return a != null && isFinite(a) && a > 0 ? a : 0
	}

	function j(a) {
		if (a === "video_home_inline" || a === "inline") return {
			height: h,
			width: h
		};
		else return {
			height: 1080,
			width: 1920
		}
	}
	var k = b("gkx")("1848985") ? function(a) {
		var c = b("useCometSize_DO_NOT_USE")(),
			d = c[0];
		c = c[1];
		c = (c = c) != null ? c : j(a);
		return [c, function(a) {
			return g.jsx(b("CometObjectFitContainer.react"), {
				debugRole: null,
				objectFitMode: "CONTAINER_SIZE",
				ref: d,
				children: a
			})
		}]
	} : function(a) {
		var c = g.useState(function() {
				return j(a)
			}),
			d = c[0],
			e = c[1],
			f = g.useCallback(function(a) {
				e(a)
			}, []);
		return [d, function(a) {
			return g.jsx(b("CometObjectFitContainer.old.react"), {
				debugRole: null,
				objectFitMode: "CONTAINER_SIZE",
				onDimensionsChanged: f,
				children: a
			})
		}]
	};

	function a(a) {
		var c = a.accessToken,
			d = a.fullscreenController,
			e = a.implementations,
			f = a.isFullscreen,
			h = a.onCoreVideoStatesChanged,
			j = a.productAttribution,
			l = a.renderWithCoreVideoStates,
			m = a.trackingDataEncrypted,
			n = a.trackingNodes,
			o = a.viewportMarginsForViewability,
			p = babelHelpers.objectWithoutPropertiesLoose(a, ["accessToken", "fullscreenController", "implementations", "isFullscreen", "onCoreVideoStatesChanged", "productAttribution", "renderWithCoreVideoStates", "trackingDataEncrypted", "trackingNodes", "viewportMarginsForViewability"]);
		a = g.useState(function() {
			return b("videoPlayerUniqueID")()
		});
		var q = a[0];
		b("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(q);
		var r = g.useRef(0);
		a = b("useCreateVideoPlayerPassiveViewabilityInfo")();
		var s = a.setVideoPlayerPassiveViewabilityInfo,
			t = a.videoPlayerPassiveViewabilityInfo;
		a = k(p.subOrigin);
		var u = a[0];
		a = a[1];
		var v = g.useCallback(function(a) {
				s(a)
			}, [s]),
			w = g.useCallback(function(a) {
				var c, d = a.implementationController;
				a = a.videoState;
				c = {
					adClientToken: p.adClientToken,
					audioAvailabilityInfo: (c = p.audioAvailabilityInfo) != null ? c : b("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault,
					autoplayGatingResult: p.autoplayGatingResult != null ? p.autoplayGatingResult : "unknown",
					autoplaySetting: p.autoplaySetting,
					broadcastStatus: p.broadcastStatus,
					canAutoplay: p.canAutoplay != null ? p.canAutoplay : "allow",
					controller: d,
					dimensions: u,
					duration: a.duration,
					initialTracePolicy: p.initialTracePolicy,
					instanceKey: q,
					isFullscreen: f,
					isPremiumMusicVideo: Boolean(p.isPremiumMusicVideo),
					lastMuteReason: a.lastMuteReason,
					lastPauseReason: a.lastPauseReason,
					lastPlayReason: a.lastPlayReason,
					loopCount: a.loopCount,
					loopCurrent: a.loopCurrent,
					originalHeight: p.originalHeight,
					originalWidth: p.originalWidth,
					videoFBID: p.videoFBID,
					videoPlayerPassiveViewabilityInfo: t,
					videoState: a,
					volumeSetting: p.volumeSetting
				};
				h && h(c);
				return l(c)
			}, [p.adClientToken, p.autoplayGatingResult, p.autoplaySetting, p.broadcastStatus, p.canAutoplay, p.audioAvailabilityInfo, p.initialTracePolicy, p.originalHeight, p.originalWidth, p.videoFBID, u, q, f, h, l, t]),
			x = p.broadcastId,
			y = p.isLiveStreaming,
			z = p.isLiveTraceEnabled,
			A = Boolean(y) && Boolean(z) && x != null ? new(b("VideoLiveTrace"))(x, q, b("CurrentUser").getAccountID()) : null;
		y = g.useMemo(function() {
			return {
				accessToken: c,
				coreVideoPlayerMetaData: p,
				dimensions: u,
				instanceKey: q,
				playerImplementationInstanceCountRef: r,
				productAttribution: j,
				trackingDataEncrypted: m,
				trackingNodes: n,
				videoLiveTrace: A
			}
		}, [].concat(b("getOwnObjectValues")(p), [c, u, q, m, n, r, j]));
		if (e.length === 0) {
			if (!b("gkx")("1611172")) return null;
			z = b("err")("No implementations given to CoreVideoPlayer");
			z.metadata = new(b("ErrorMetadata"))();
			z.metadata.addEntry("COMET_VIDEO", "VIDEO_ID", String(p.videoFBID));
			throw b("unrecoverableViolation")("No implementations given to CoreVideoPlayer", "comet_video_player", {
				error: z
			})
		}
		x = Boolean(p.captionsUrl);
		z = Boolean(p.isLiveStreaming);
		d = {
			VideoPlayerShakaPerformanceLoggerClass: p.VideoPlayerShakaPerformanceLoggerClass,
			alwaysShowCaptions: p.alwaysShowCaptions,
			areCaptionsAutogenerated: p.areCaptionsAutogenerated,
			captionsUrl: p.captionsUrl,
			dimensions: u,
			fullscreenController: d,
			graphQLVideoDRMInfo: (d = p.graphQLVideoDRMInfo) != null ? d : null,
			graphQLVideoP2PSettings: (d = p.graphQLVideoP2PSettings) != null ? d : null,
			inbandCaptionsExpected: z,
			initialDesiredLatencyMs: p.desiredLatencyMs,
			initialLatencyToleranceMs: p.latencyToleranceMs,
			initialRepresentationIds: p.initialRepresentationIds,
			loadSequence: p.loadSequence,
			loggingMetaData: y,
			loopCount: p.loopCount,
			renderWithVideoImplementationStates: w,
			sideLoadCaptionsExpected: x,
			startTimestamp: i(p.startTimestamp),
			videoFBID: p.videoFBID,
			videoLiveTrace: A,
			videoPlayerPassiveViewabilityInfo: t
		};
		z = e[0];
		y = b("renderVideoPlayerImplementation")(z, d);
		y != null && (y = g.jsx(b("VideoPlayerOnViewability.react"), {
			onVideoPlayerViewabilityInfoChange: v,
			viewportMargins: o,
			children: y
		}));
		return a(y)
	}
}), null);