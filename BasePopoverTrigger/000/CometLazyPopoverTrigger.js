__d("CometLazyPopoverTrigger.react", [
    "BasePopoverTrigger.react", 
    "CometPopoverLoadingState.react", "React", 
    "lazyLoadComponent", "useCometPopoverInteractionTracing"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.fallback;
        c = c === void 0 ? g.jsx(b("CometPopoverLoadingState.react"), {
            withArrow: !0
        }) : c;
        var d = a.popoverResource
          , e = a.preloadTrigger
          , f = a.tracePolicy;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback", "popoverResource", "preloadTrigger", "tracePolicy"]);
        var h = g.useMemo(function() {
            return b("lazyLoadComponent")(d)
        }, [d]);
        f = b("useCometPopoverInteractionTracing")(f);
        return g.jsx(b("BasePopoverTrigger.react"), babelHelpers["extends"]({
            fallback: c,
            interactionTracker: f,
            popover: h,
            popoverPreloadResource: d,
            preloadTrigger: e
        }, a))
    }
}
), null);