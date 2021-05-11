if (self.CavalryLogger) {
    CavalryLogger.start_js(["vA74y"]);
}

__d("CometHeroHoldTrigger.react", ["CometHeroInteractionContext", "CometHeroInteractionIDContext", "React", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.description
          , d = a.hold
          , e = g.useContext(b("CometHeroInteractionContext").Context)
          , f = g.useContext(b("CometHeroInteractionIDContext"));
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (d && f != null) {
                var a = e.hold(f, e.pageletStack, c);
                return function() {
                    return e.unhold(f, a)
                }
            }
        }, [c, e, f, d]);
        return null
    }
}
), null);
