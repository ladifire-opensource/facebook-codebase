__d("CometDarkModeStateProvider.react", ["CometDarkMode", "CometDarkModeContext", "React", "gkx", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.children;
        var c = g.useState(b("CometDarkMode").getDarkModePreference)
          , d = c[0]
          , e = c[1];
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (!b("gkx")("919810"))
                return;
            b("CometDarkMode").toggleDarkModeRootClass(d)
        }, [d]);
        var f = g.useCallback(function(a) {
            e(a),
            b("CometDarkMode").saveDarkModePreference(a, {
                onRevert: function(a) {
                    e(a)
                }
            })
        }, [])
          , h = g.useCallback(function() {
            f(!d)
        }, [d, f]);
        c = g.useMemo(function() {
            return {
                isDarkModeEnabled: d,
                onDarkModeToggle: h,
                setDarkModePreference: f
            }
        }, [d, h, f]);
        return g.jsx(b("CometDarkModeContext").Provider, {
            value: c,
            children: a
        })
    }
}
), null);