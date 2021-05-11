__d("VideoPlayerX.react", ["React", "VideoPlayerRetryableErrorBoundary.react", 
	"VideoPlayerXImpl.react", "defaultErrorBoundaryFallback"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;
		c = c === void 0 ? !1 : c;
		var d = a.errorBoundaryFallback;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn", "errorBoundaryFallback"]);
		a = g.jsx(b("VideoPlayerXImpl.react"), babelHelpers["extends"]({
			VideoPlayerShakaPerformanceLoggerClass: null
		}, a));
		return c ? a : g.jsx(b("VideoPlayerRetryableErrorBoundary.react"), {
			description: "VideoPlayerX",
			fallback: (c = d) != null ? c : b("defaultErrorBoundaryFallback"),
			children: a
		})
	}
}), null);