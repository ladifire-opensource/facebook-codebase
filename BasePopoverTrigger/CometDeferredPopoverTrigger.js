__d("CometDeferredPopoverTrigger.react", ["BasePopoverTrigger.react", 
	"CometPopoverLoadingState.react", "React", "deferredLoadComponent", 
	"useCometPopoverInteractionTracing"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.fallback;
		c = c === void 0 ? g.jsx(b("CometPopoverLoadingState.react"), {
			withArrow: !0
		}) : c;
		var d = a.popoverResource,
			e = a.doNotCloseOnOutsideClick,
			f = a.popoverProps,
			h = a.preloadTrigger,
			i = a.tracePolicy;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback", "popoverResource", "doNotCloseOnOutsideClick", "popoverProps", "preloadTrigger", "tracePolicy"]);
		var j = b("deferredLoadComponent")(d);
		i = b("useCometPopoverInteractionTracing")(i);
		return g.jsx(b("BasePopoverTrigger.react"), babelHelpers["extends"]({
			doNotCloseOnOutsideClick: e,
			fallback: c,
			interactionTracker: i,
			popover: j,
			popoverPreloadResource: d,
			popoverProps: babelHelpers["extends"]({}, f, {
				loadImmediately: !0
			}),
			preloadTrigger: h
		}, a))
	}
}), null);