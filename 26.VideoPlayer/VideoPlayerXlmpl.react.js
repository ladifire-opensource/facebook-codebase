__d("VideoPlayerXImpl.react", ["CoreVideoPlayerWithComponents.react", 
	"React", "VideoPlayerXImplSurface.react", "gkx", 
	"normalizeVideoPlayerLoopCount", 
	"usePlayerOriginRouteTracePolicy", 
	"useRouteProductAttribution"], (function (a, b, c, d, e, f) {
	"use strict"; 
	
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.disableLoadingIndicator,
			e = a.implementations, 
			f = a.instreamVideoAdBreaksPlayer,   
			h = a.portalingEnabled,
			i = a.portalingFromVideoID,
			j = a.portalingPlaceMetaData,       
			k = a.portalingRenderPlaceholder,     
			l = a.videoPlayerSpherical;

			const styles = stylex.create({

			})        

		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", 
			"disableLoadingIndicator", "implementations", "instreamVideoAdBreaksPlayer", 
			"portalingEnabled", "portalingFromVideoID", "portalingPlaceMetaData", 
			"portalingRenderPlaceholder", "videoPlayerSpherical"]);
		var m = b("usePlayerOriginRouteTracePolicy")(),
			n = b("useRouteProductAttribution")(),
			o = a.loopCount,
			p = a.playerFormat,
			q = a.subOrigin,
			r = a.videoFBID;

		o = b("normalizeVideoPlayerLoopCount")(o);
		
		return g.jsx(b("CoreVideoPlayerWithComponents.react"), babelHelpers["extends"]({}, a, {
			implementations: e,
			loopCount: o,  
			portalingEnabled: h,
			portalingFromVideoID: i,
			portalingPlaceMetaData: j,
			portalingRenderPlaceholder: k,
			productAttribution: b("gkx")("1759997") ? n : null,
			routeTracePolicy: m,
			children: g.jsx(b("VideoPlayerXImplSurface.react"), {
				children: c,
				disableLoadingIndicator: d,
				instreamVideoAdBreaksPlayer: f,
				livingRoomID: a.livingRoomID,
				playerFormat: p,
				subOrigin: q,
				videoFBID: r,
				videoPlayerSpherical: l
			})
		}))
	}
}), null);