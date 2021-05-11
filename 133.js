if (self.CavalryLogger) {
    CavalryLogger.start_js(["sVGnZ"]);
}

__d("AdsTALCreateTestErrorModal.react", ["fbt", "AdsExperimentsCreateTestErrorGuidance.react", "GeoButton.react", "GeoModal.react", "GeoModalFooter.react", "GeoModalHeader.react", "GeoSection.react", "React", "adsExperimentsCastToGraphAPIError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.error;
        a = a.logger;
        var d = h.useState(!0)
          , e = d[0]
          , f = d[1];
        d = h.useCallback(function() {
            return f(!1)
        }, []);
        return !e ? null : h.jsx(b("GeoModal.react"), {
            footer: h.jsx(b("GeoModalFooter.react"), {
                primaryButton: h.jsx(b("GeoButton.react"), {
                    label: g._("\u0110\u00f3ng"),
                    variant: "primary",
                    onClick: d
                })
            }),
            header: h.jsx(b("GeoModalHeader.react"), {
                heading: g._("Kh\u00f4ng th\u1ec3 t\u1ea1o th\u1eed nghi\u1ec7m")
            }),
            isShown: !0,
            onHide: d,
            children: h.jsx(b("GeoSection.react"), {
                children: h.jsx(b("AdsExperimentsCreateTestErrorGuidance.react"), {
                    action: "ueditor_load_failure",
                    error: b("adsExperimentsCastToGraphAPIError")(c),
                    hideXout: !0,
                    logger: a
                })
            })
        })
    }
}
), null);
__d("BizKitBusinessAccountOnboardingFlowWebFunnelLogger.brands", ["CurrentUser", "WebFunnelLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logFunnelStart = a;
    f.logAction = c;
    f.logFunnelEnd = d;
    var g = "BizKitBusinessAccountOnboardingFlowWebFunnelDefinition";
    function h(a) {
        return new (b("WebFunnelLogger"))(g).setSessionKey(b("CurrentUser").getID()).setAction(a)
    }
    function a() {
        var a = h("flow_start");
        a.markStart().log()
    }
    function c(a) {
        a = h(a);
        a.log()
    }
    function d() {
        var a = h("flow_complete");
        a.markEnd().log()
    }
}
), null);
__d("GeoPrivateBreadcrumbsContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = {
        level: null,
        wrap: null
    };
    d = a.createContext(c);
    f = d;
    e.exports = f
}
), null);
