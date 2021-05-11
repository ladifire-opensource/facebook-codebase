__d("BaseDOMContainer.react", ["React", "useLayoutEffect_SAFE_FOR_SSR", "useMergeRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.node
          , e = g.useRef(null);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = e.current;
            if (d != null && a != null) {
                a.appendChild(d);
                return function() {
                    a.removeChild(d)
                }
            }
        }, [d]);
        a = b("useMergeRefs")(c, e);
        return g.jsx("div", {
            ref: a
        })
    }
    c = g.memo(g.forwardRef(a));
    e.exports = c
}
), null);