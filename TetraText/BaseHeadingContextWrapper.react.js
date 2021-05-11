__d("BaseHeadingContextWrapper.react", ["BaseHeadingContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.children;
        var c = g.useContext(b("BaseHeadingContext"));
        return g.jsx(b("BaseHeadingContext").Provider, {
            value: c + 1,
            children: a
        })
    }
}
), null);