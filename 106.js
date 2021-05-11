if (self.CavalryLogger) {
    CavalryLogger.start_js(["92tYQ"]);
}

__d("ExampleContentType", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        BASIC_TEXT: 1,
        CAPTION_BLOCK: 2,
        BULLET: 3
    })
}
), null);
__d("adsMemoizeSelectorGetStores", ["AdsPureGetStoresConfig", "FBLogger", "Run", "gkx", "ifRequired", "memoizeByIdentity", "performanceNow", "requireDeferred", "shallowEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = c;
    var g, h = b("requireDeferred")("AdsManagerWwwQuickLogModule"), i = new Map(), j = null;
    b("gkx")("1727621") && (b("Run").onBeforeUnload(a),
    setInterval(a, 5 * 60 * 1e3));
    function a() {
        b("ifRequired")("QuickPerformanceLogger", function(a) {
            h.onReady(function(c) {
                var d = {};
                for (var e = i, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var k;
                    if (f) {
                        if (h >= e.length)
                            break;
                        k = e[h++]
                    } else {
                        h = e.next();
                        if (h.done)
                            break;
                        k = h.value
                    }
                    k = k;
                    var l = k[0];
                    k = k[1];
                    k > 1 && (d[l] = k)
                }
                l = Math.round((g || (g = b("performanceNow")))());
                h = l - ((k = j) != null ? k : 0);
                j = l;
                d.duration = h;
                i.size > 0 && a.markEvent(c.SELECTOR_COUNT_IMPURE_GET_STORES_CALLS, "impure_counts", 7, {
                    annotations: {
                        "int": d
                    }
                });
                i.clear()
            })
        })
    }
    function k(a, c) {
        var d = this
          , e = b("memoizeByIdentity")(a);
        return function(f) {
            var g = e.call(d, f);
            if (Math.random() <= b("AdsPureGetStoresConfig").CANARY_SAMPLE_RATE) {
                f = a.call(d, f);
                b("shallowEqual")(g, f) || b("FBLogger")("ads_selectors_pure_get_stores").mustfix('Selector "%s" getStores was determined to be pure, but is not! This may break Ads Manager in subtle ways and must be fixed by either making it pure or removing the `isGetStoresPure` declaration', c)
            }
            return g
        }
    }
    function l(a, b) {
        var c = this;
        return function(d) {
            var e;
            e = (e = i.get(b)) != null ? e : 0;
            i.set(b, e + 1);
            return a.call(c, d)
        }
    }
    function c(a, c, d) {
        var e = b("gkx")("1709087")
          , f = b("gkx")("1724844")
          , g = b("gkx")("1727621");
        if (a && e && f)
            return k(c, d);
        if (a && e)
            return b("memoizeByIdentity")(c);
        return !a && g ? l(c, d) : c
    }
}
), null);
