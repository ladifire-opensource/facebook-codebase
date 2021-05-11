__d("CometAppViewStack.react", ["BaseDOMContainer.react", 
    "BasePortalTargetContext", "CometPushView.react", 
    "CometRouteRenderer.react", 
    "CometRouterPushViewStackContext", 
    "CometViewportMarginsContext", 
    "ExecutionEnvironment", "React", "isRouteTransparent", "useStable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    };
    function a(a) {
        a = a.baseView;
        var c = g.useContext(b("CometRouterPushViewStackContext"))
          , d = b("useStable")(function() {
            return b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
        })
          , e = !1;
        return g.jsxs(g.Fragment, {
            children: [g.jsxs(b("BasePortalTargetContext").Provider, {
                value: d,
                children: [a, c != null && g.jsx(b("CometViewportMarginsContext").Provider, {
                    value: h,
                    children: c.reduceRight(function(a, c) {
                        c.depth;
                        var d = c.key;
                        c = babelHelpers.objectWithoutPropertiesLoose(c, ["depth", "key"]);
                        var f = c.route.tracePolicy
                          , h = b("isRouteTransparent")(c.route)
                          , i = c.navigationInteractionID
                          , j = c.route.useCloseButton === !0;
                        a.unshift(g.jsx(b("CometPushView.react"), {
                            background: h ? "none" : "web-wash",
                            hidden: e,
                            interactionDesc: f,
                            interactionUUID: i,
                            preferDialog: c.route.preferDialog === !0,
                            roleDialog: j,
                            children: g.jsx(b("CometRouteRenderer.react"), {
                                renderType: "pushView",
                                routeInfo: c
                            })
                        }, d));
                        b("isRouteTransparent")(c.route) || (e = !0);
                        return a
                    }, [])
                })]
            }), g.jsx(b("BaseDOMContainer.react"), {
                node: d
            })]
        })
    }
}
), null);