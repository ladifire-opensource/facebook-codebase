__d("VideoPlayerPortalingPlaceWithPortaling.react", [
	"CoreVideoPlayerFitParentContainer.react", 
	"GlobalVideoPortsRenderers.react", "React", 
	"getOwnObjectValues", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.coreVideoPlayerMetaData,
			d = a.currentVideoID,
			e = a.fullscreenController,
			f = a.globalVideoPortsManager,
			h = a.globalVideoPortsState,
			i = a.implementations,
			j = a.isFullscreen,
			k = a.portablePlaceMetaData,
			l = a.renderComponents,
			m = a.renderPlaceholder,
			n = a.thisPlaceID,
			o = a.trackingDataEncrypted,
			p = a.trackingNodes,
			q = a.viewportMarginsForViewability;
		a = g.useState(function() {
			return b("CoreVideoPlayerFitParentContainer.react").createFitParentContainerDiv({
				debugRole: null
			})
		});
		var r = a[0],
			s = g.useRef(null);
		b("useLayoutEffect_SAFE_FOR_SSR")(function() {
			f.addOrUpdatePlace({
				coreVideoPlayerMetaData: c,
				fullscreenController: e,
				implementations: i,
				injectCoreVideoStatesRef: s,
				isFullscreen: j,
				portablePlaceContainer: r,
				portablePlaceID: n,
				portablePlaceMetaData: k,
				portableVideoID: d,
				renderComponents: l,
				renderPlaceholder: m,
				trackingDataEncrypted: o,
				trackingNodes: p,
				viewportMarginsForViewability: q
			})
		}, [].concat(b("getOwnObjectValues")(c), [d, e, j, f, r], b("getOwnObjectValues")(k || {}), [l, m, n, o, p, q]));
		b("useLayoutEffect_SAFE_FOR_SSR")(function() {
			return function() {
				f.removePlace({
					portablePlaceID: n
				})
			}
		}, [f, n]);
		a = f.getPortableVideoState(h, d);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("CoreVideoPlayerFitParentContainer.react").CoreVideoPlayerFitParentDOMContainer, {
				debugRole: null,
				domElement: r
			}, n), g.jsx(b("GlobalVideoPortsRenderers.react").GlobalVideoPortsVideoComponentsRenderer, {
				currentPlaceID: (h = (h = f.getCurrentPlaceStateForVideo(h, d)) == null ? void 0 : h.portablePlaceID) != null ? h : null,
				currentVideoID: d,
				injectCoreVideoStatesRef: s,
				previousPlaceMetaData: (h = a == null ? void 0 : a.previousPlaceMetaData) != null ? h : null,
				renderComponents: l,
				thisPlaceID: n
			})]
		})
	}
}), null);