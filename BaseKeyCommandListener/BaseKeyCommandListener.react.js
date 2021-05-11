__d("BaseKeyCommandListener.react", ["CometGlobalKeyCommandWidget", "CometKeyCommandUtilsContext", "React", "ReactDOMComet", "applyKeyCommand", "getActiveCommands", "getKeyCommand", "recoverableViolation", "useGetComposingState", "useGlobalEventListener"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a, b) {
        var c;
        return function() {
            window.clearTimeout(c),
            c = window.setTimeout(a, b)
        }
    }
    var i = 100;
    function a(a) {
        var c = g.useRef(null)
          , d = g.useRef(null)
          , e = g.useRef(new Set())
          , f = g.useContext(b("CometGlobalKeyCommandWidget").Context)
          , j = g.useCallback(function(g) {
            if (!a.observersEnabled)
                return {
                    getActiveCommands: function() {
                        b("recoverableViolation")("Key Command observers are not supported in this context", "comet_ax");
                        return null
                    },
                    remove: function() {}
                };
            var h = e.current;
            h.add(g);
            return {
                getActiveCommands: function() {
                    return b("getActiveCommands")(d.current, c.current, f)
                },
                remove: function() {
                    h["delete"](g)
                }
            }
        }, [f, a.observersEnabled])
          , k = g.useCallback(function(b) {
            a.observersEnabled && e.current.forEach(function(a) {
                return a({
                    key: b,
                    type: "triggered"
                })
            })
        }, [a.observersEnabled])
          , l = g.useMemo(function() {
            return h(function() {
                a.observersEnabled && e.current.forEach(function(a) {
                    return a({
                        type: "update"
                    })
                })
            }, i)
        }, [a.observersEnabled])
          , m = g.useCallback(function(a) {
            var b = c.current !== a;
            c.current = a;
            b && l()
        }, [l])
          , n = g.useCallback(function(a) {
            var b = d.current !== a;
            d.current = a;
            b && l()
        }, [l]);
        j = g.useRef({
            addObserver: j,
            notifyCommandUpdate: l,
            setActiveLayer: m,
            setActiveWrapper: n
        });
        m = g.useCallback(function() {
            var a = d.current !== null;
            d.current = null;
            a && l()
        }, [l]);
        var o = b("useGetComposingState")();
        n = g.useCallback(function(a) {
            if (o(a))
                return;
            b("ReactDOMComet").flushSync(function() {
                var e = b("applyKeyCommand")(a, d.current, c.current, f);
                if (e) {
                    e = b("getKeyCommand")(a);
                    k(e)
                }
            })
        }, [o, f, k]);
        b("useGlobalEventListener")("keydown", n);
        b("useGlobalEventListener")("keyup", n);
        return g.jsx(b("CometKeyCommandUtilsContext").Provider, {
            value: j.current,
            children: g.jsx("div", {
                onBlurCapture: m,
                children: a.children
            })
        })
    }
}
), null);