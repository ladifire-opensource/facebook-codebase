if (self.CavalryLogger) {
    CavalryLogger.start_js(["3zK16"]);
}

__d("XCometLWIProductPickerControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/ad_center/create/ad/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XCometPageVanityControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/{vanity}/", Object.freeze({
        ref: ""
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("LWICometMetricValue.react", ["CometTooltip.react", "React", "intlNumUtils", "intlSummarizeNumber"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getFormattedMetricValue = a;
    var g = b("React")
      , h = 1e5;
    function a(a) {
        if (a == null || a === 0)
            return "--";
        var c = b("intlNumUtils").formatNumberWithThousandDelimiters(a);
        return a < h ? c : g.jsx(b("CometTooltip.react"), {
            align: "start",
            position: "below",
            tooltip: c,
            children: b("intlSummarizeNumber")(a)
        })
    }
}
), null);
__d("LWICometButtonActionContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        getOpenAutoBoostDialog: null,
        getOpenDialogWithPhase: null,
        getOpenDialogWithTargetID: null,
        getOpenDraftDialog: null,
        getOpenViewResults: null
    });
    e.exports = c
}
), null);
__d("LWIAdCenterLoggerContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        mapping: null
    });
    e.exports = c
}
), null);
__d("LWICometDialogContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext();
    e.exports = c
}
), null);
__d("LWICometAdStatusUtils", ["ix", "fbt", "IconSource", "asset", "recoverableViolation"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    f.getPrimaryStatusProps = a;
    var i = {
        ACTIVE: {
            color: "positive",
            icon: new (c = b("IconSource"))("FB",g("1160873"),12),
            status: h._("\u0110ang ho\u1ea1t \u0111\u1ed9ng")
        },
        CREATING: {
            color: "positive",
            icon: new c("FB",g("1160857"),12),
            status: h._("\u0110ang x\u00e9t duy\u1ec7t")
        },
        DRAFT: {
            color: "secondary",
            icon: new c("FB",g("651424"),12),
            status: h._("B\u1ea3n nh\u00e1p")
        },
        ERROR: {
            color: "negative",
            icon: new c("FB",g("480267"),12),
            status: h._("Kh\u00f4ng th\u1ec3 t\u1ea1o")
        },
        EXTENDABLE: {
            color: "secondary",
            icon: new c("FB",g("516537"),12),
            status: h._("\u0110\u00e3 ho\u00e0n t\u1ea5t")
        },
        FINISHED: {
            color: "secondary",
            icon: new c("FB",g("516537"),12),
            status: h._("\u0110\u00e3 ho\u00e0n t\u1ea5t")
        },
        INACTIVE: {
            color: "secondary",
            icon: new c("FB",g("516537"),12),
            status: h._("\u0110\u00e3 ho\u00e0n t\u1ea5t")
        },
        NO_CTA: {
            color: "secondary",
            icon: new c("FB",g("516537"),12),
            status: h._("\u0110\u00e3 ho\u00e0n t\u1ea5t")
        },
        NOT_DELIVERING: {
            color: "negative",
            icon: new c("FB",g("478223"),12),
            status: h._("Kh\u00f4ng ph\u00e2n ph\u1ed1i")
        },
        PAUSED: {
            color: "secondary",
            icon: new c("FB",g("1160865"),12),
            status: h._("\u0110\u00e3 t\u1ea1m d\u1eebng")
        },
        PENDING: {
            color: "positive",
            icon: new c("FB",g("1160857"),12),
            status: h._("\u0110ang x\u00e9t duy\u1ec7t")
        },
        PENDING_FUNDING_SOURCE: {
            color: "negative",
            icon: new c("FB",g("478223"),12),
            status: h._("Kh\u00f4ng th\u1ec3 t\u1ea1o")
        },
        REJECTED: {
            color: "negative",
            icon: new c("FB",g("478223"),12),
            status: h._("\u0110\u00e3 b\u1ecb t\u1eeb ch\u1ed1i")
        }
    };
    function a(a) {
        if (a == null) {
            b("recoverableViolation")("no status props for adStatus: " + String(a), "pages_lwi");
            return null
        }
        var c = i[a];
        if (c == null) {
            b("recoverableViolation")("no status props for adStatus: " + String(a), "pages_lwi");
            return null
        }
        return c
    }
}
), null);
__d("LWICometDateFormatUtils", ["formatDate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getPrettyDateString = a;
    function a(a) {
        var c = new Date().getFullYear()
          , d = typeof a === "number" ? new Date(a * 1e3).getFullYear() : a.getFullYear();
        d = d === c ? "M j" : "M j, Y";
        return b("formatDate")(a, d)
    }
}
), null);
__d("LWICometProductUtils", ["BoostedComponentProduct", "getJSEnumSafe", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.productFromGraphQLEnumToJSEnumStrict = a;
    function a(a) {
        a = b("getJSEnumSafe")(b("BoostedComponentProduct"), a);
        if (a == null)
            throw b("unrecoverableViolation")("product should be a valid BoostedComponentProduct", "pages_lwi");
        return a
    }
}
), null);
