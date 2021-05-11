__d("VideoPlayerPortalingPlace.react", ["CometTrackingCodeContext", "CometTrackingNodesContext", "CometViewportMarginsContext", "CoreVideoPlayer.react", "CoreVideoPlayerFitParentContainer.react", "GlobalVideoPortsID", "GlobalVideoPortsRenderers.react", "React", "VideoPlayerFullscreenController", "VideoPlayerPortalingPlaceInfoProvider.react", "VideoPlayerPortalingPlaceState", "VideoPlayerPortalingPlaceWithPortaling.react", "recoverableViolation", "useStable"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			bottom: 0,
			left: 0,
			right: 0,
			top: 0
		},
		i = g.forwardRef(function(a, c) {
			var d = a.children;
			a = a.debugRole;
			return g.jsx(b("CoreVideoPlayerFitParentContainer.react").CoreVideoPlayerFitParentContainer, {
				debugRole: a,
				ref: c,
				children: d
			})
		});

	function a(a) {
		var c = a.implementations,
			d = a.portalingEnabled,
			e = a.portalingFromVideoID,
			f = a.portalingPlaceMetaData,
			j = a.renderComponents,
			k = a.renderPlaceholder;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["implementations", "portalingEnabled", "portalingFromVideoID", "portalingPlaceMetaData", "renderComponents", "renderPlaceholder"]);
		g.useEffect(function() {
			return function() {}
		}, []);
		var l = e != null ? b("GlobalVideoPortsID").ensureVideoID(e) : null;
		e != null && l == null && b("recoverableViolation")("The provided portalingFromVideoID (" + String(e) + ") does not look like such an ID. The video player will not use portaling until a valid ID is provided", "comet_video_player");
		e = b("VideoPlayerPortalingPlaceState").useVideoPlayerPortalingPlaceState({
			portalingEnabled: d,
			portalingFromVideoID: l
		});
		d = e.canBecomePortableLater;
		l = e.currentVideoID;
		var m = e.globalVideoPortsManager,
			n = e.globalVideoPortsState;
		e = e.thisPlaceID;
		var o = g.useContext(b("CometViewportMarginsContext")),
			p = g.useRef(null),
			q = b("useStable")(function() {
				return b("VideoPlayerFullscreenController").createFullscreenController(p)
			}),
			r = g.useState(q.getIsFullscreen()),
			s = r[0],
			t = r[1];
		g.useEffect(function() {
			var a = q.subscribe(function() {
				var a = q.getIsFullscreen();
				t(a)
			});
			t(q.getIsFullscreen());
			return function() {
				a.remove()
			}
		}, [q, t]);
		r = g.useContext(b("CometTrackingNodesContext"));
		r = r.join("");
		var u = g.useContext(b("CometTrackingCodeContext"));
		u = (u = u.encrypted_tracking[0]) != null ? u : "";
		o = s ? h : o;
		if (!d) return g.jsx(i, {
			debugRole: null,
			ref: p,
			children: g.jsx(b("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
				currentPlaceID: e,
				currentVideoID: l,
				portalingEnabled: !1,
				previousPlaceMetaData: null,
				thisPlaceID: e,
				children: g.jsx(b("CoreVideoPlayer.react"), babelHelpers["extends"]({}, a, {
					fullscreenController: q,
					implementations: c,
					isFullscreen: s,
					renderWithCoreVideoStates: j,
					trackingDataEncrypted: u,
					trackingNodes: r,
					viewportMarginsForViewability: o
				}))
			})
		});
		if (m && n) return g.jsx(i, {
			debugRole: null,
			ref: p,
			children: g.jsx(b("VideoPlayerPortalingPlaceWithPortaling.react"), {
				coreVideoPlayerMetaData: a,
				currentVideoID: l,
				fullscreenController: q,
				globalVideoPortsManager: m,
				globalVideoPortsState: n,
				implementations: c,
				isFullscreen: s,
				portablePlaceMetaData: f,
				renderComponents: j,
				renderPlaceholder: k,
				thisPlaceID: e,
				trackingDataEncrypted: u,
				trackingNodes: r,
				viewportMarginsForViewability: o
			})
		});
		else return g.jsx(i, {
			debugRole: null,
			ref: p,
			children: g.jsx(b("GlobalVideoPortsRenderers.react").GlobalVideoPortsPlaceholderRenderer, {
				currentPlaceID: null,
				currentVideoID: l,
				originalHeight: a.originalHeight,
				originalWidth: a.originalWidth,
				previousPlaceMetaData: null,
				renderPlaceholder: k,
				thisPlaceID: e
			})
		})
	}
}), null);