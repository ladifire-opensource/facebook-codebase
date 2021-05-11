__d("BaseHeading.react", ["BaseHeadingContext", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            color: "gmql0nx0",
            fontSize: "l94mrbxd",
            fontWeight: "p1ri9a11",
            outline: "lzcic4wl"
        }
    };
    function a(a, c) {
        var d = a.children
          , e = a.isPrimaryHeading
          , f = e === void 0 ? !1 : e;
        e = a.testid;
        e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "isPrimaryHeading", "testid", "xstyle"]);
        var j = h.useContext(b("BaseHeadingContext"))
          , k = h.useMemo(function() {
            return f ? "h1" : "h" + Math.max(Math.min(j, 6), 2)
        }, [f, j]);
        return h.jsx(k, babelHelpers["extends"]({}, a, {
            className: (g || (g = b("stylex")))(i.root, e),
            "data-testid": void 0,
            dir: "auto",
            ref: c,
            children: d
        }))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);