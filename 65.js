if (self.CavalryLogger) {
    CavalryLogger.start_js(["Z\/iUl"]);
}

__d("PagesEventObserver", ["Banzai"], (function(a, b, c, d, e, f) {
    var g = "pages_client_logging"
      , h = {
        VITAL_WAIT: b("Banzai").VITAL_WAIT,
        logData_DEPRECATED: function(a, c) {
            c = {
                delay: c || b("Banzai").VITAL_WAIT
            };
            b("Banzai").post(g, a, c)
        },
        notify: function(a, c, d, e, f) {
            d = babelHelpers["extends"]({}, d, {
                event_name: a,
                page_id: c,
                dedupe: e !== !1
            });
            a = {
                delay: f || b("Banzai").VITAL_WAIT
            };
            b("Banzai").post(g, d, a)
        },
        registerLogOnClick: function(a, b, c) {
            c === void 0 && (c = null),
            a.addEventListener("click", function() {
                c && h.notify(c, b, null, null, null)
            })
        }
    };
    a = h;
    e.exports = a
}
), null);
__d("PagesBanzaiEventListener", ["Event", "PagesEventObserver", "Run"], (function(a, b, c, d, e, f) {
    "use strict";
    f.registerLogEvent = a;
    function a(a, c, d) {
        var e = b("Event").listen(a, "click", function(a) {
            b("PagesEventObserver").logData_DEPRECATED(c, d)
        });
        b("Run").onLeave(function() {
            e.remove()
        })
    }
}
), null);
