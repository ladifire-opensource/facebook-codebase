__d("GlobalVideoPortsRenderers.react", ["CoreVideoPlayer.react", "React", "VideoPlayerContexts", 
	"VideoPlayerPortalingPlaceInfoProvider.react", "emptyFunction"], (function(a, b, c, d, e, f) {
	"use strict";
	f.GlobalVideoPortsPlayerRenderer = a;
	f.GlobalVideoPortsPlaceholderRenderer = c;
	f.GlobalVideoPortsVideoComponentsRenderer = d;
	var g = b("React");

	function a(a) {
		var c = a.coreVideoPlayerMetaData,
			d = a.currentPlaceID,
			e = a.currentVideoID,
			f = a.fullscreenController,
			h = a.implementations,
			i = a.isFullscreen,
			j = a.onCoreVideoStatesChanged,
			k = a.previousPlaceMetaData,
			l = a.trackingDataEncrypted,
			m = a.trackingNodes;
		a = a.viewportMarginsForViewability;
		var n = b("emptyFunction");
		return g.jsx(b("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
			currentPlaceID: d,
			currentVideoID: e,
			portalingEnabled: !0,
			previousPlaceMetaData: k,
			thisPlaceID: d,
			children: g.jsx(b("CoreVideoPlayer.react"), babelHelpers["extends"]({}, c, {
				fullscreenController: f,
				implementations: h,
				isFullscreen: i,
				onCoreVideoStatesChanged: j,
				renderWithCoreVideoStates: n,
				trackingDataEncrypted: l,
				trackingNodes: m,
				viewportMarginsForViewability: a
			}))
		})
	}

	function c(a) {
		var c = a.currentPlaceID,
			d = a.currentVideoID,
			e = a.originalHeight,
			f = a.originalWidth,
			h = a.previousPlaceMetaData,
			i = a.renderPlaceholder;
		a = a.thisPlaceID;
		return g.jsx(b("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
			currentPlaceID: c,
			currentVideoID: d,
			portalingEnabled: !0,
			previousPlaceMetaData: h,
			thisPlaceID: a,
			children: g.jsx(b("VideoPlayerContexts").VideoOriginalDimensionsContextMemoProvider, {
				originalHeight: e,
				originalWidth: f,
				children: i != null ? i() : null
			})
		})
	}

	function d(a) {
		var c = a.currentPlaceID,
			d = a.currentVideoID,
			e = a.injectCoreVideoStatesRef,
			f = a.previousPlaceMetaData,
			h = a.renderComponents;
		a = a.thisPlaceID;
		var i = g.useState(null),
			j = i[0],
			k = i[1];
		i = g.useState(null);
		var l = i[0],
			m = i[1];
		g.useLayoutEffect(function() {
			e.current = function(b, a) {
				b != null && m(function() {
					return b
				}), k(a)
			};
			return function() {
				e.current = null
			}
		}, [e]);
		if (a === c && j != null) {
			if (l != null) throw l;
			return g.jsx(b("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider, {
				currentPlaceID: c,
				currentVideoID: d,
				portalingEnabled: !0,
				previousPlaceMetaData: f,
				thisPlaceID: a,
				children: h(j)
			})
		} else return null
	}
}), null);