__d("CoreVideoPlayerWithComponents.react", ["React",
 "VideoPlayerComponentContainer.react", "VideoPlayerPortalingPlace.react", 
 "VideoPlayerTracePolicyProvider.react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.implementations,
			e = a.portalingEnabled,
			f = a.portalingFromVideoID,
			h = a.portalingPlaceMetaData,
			i = a.portalingRenderPlaceholder;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "implementations", "portalingEnabled", "portalingFromVideoID", "portalingPlaceMetaData", "portalingRenderPlaceholder"]);
		var j = g.useCallback(function(a) {
			return g.jsx(b("VideoPlayerComponentContainer.react"), babelHelpers["extends"]({}, a, {
				children: c
			}))
		}, [c]);
		return g.jsx(b("VideoPlayerTracePolicyProvider.react"), {
			initialTracePolicy: a.initialTracePolicy,
			routeTracePolicy: a.routeTracePolicy,
			children: g.jsx(b("VideoPlayerPortalingPlace.react"), babelHelpers["extends"]({}, a, {
				implementations: d,
				portalingEnabled: e,
				portalingFromVideoID: f,
				portalingPlaceMetaData: h,
				renderComponents: j,
				renderPlaceholder: i
			}))
		})
	}
}), null);