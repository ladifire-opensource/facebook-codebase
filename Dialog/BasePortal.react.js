__d("BasePortal.react", [
    "BaseDOMContainer.react", 
    "BasePortalTargetContext", 
    "CometSuspendWhileWaitingOnDOM.react", 
    "ExecutionEnvironment", "React", "ReactDOMComet", "stylex", "useStable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.children
          , d = a.hidden;
        d = d === void 0 ? !1 : d;
        var e = a.target;
        a = a.xstyle;
        var f = h.useContext(b("BasePortalTargetContext"));
        e = e || f;
        f = b("useStable")(function() {
            return b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
        });
        return h.jsxs(h.Fragment, {
            children: [h.jsx(b("CometSuspendWhileWaitingOnDOM.react"), {}), e != null ? 
            b("ReactDOMComet").createPortal(h.jsxs("div", babelHelpers["extends"]({}, d && {
                hidden: !0
            }, {
                className: (g || (g = b("stylex")))(a) || void 0,
                children: [h.jsx(b("BasePortalTargetContext").Provider, {
                    value: f,
                    children: c
                }), h.jsx(b("BaseDOMContainer.react"), {
                    node: f
                })]
            })), e) : null]
        })
    }
}
), null);