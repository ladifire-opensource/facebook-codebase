if (self.CavalryLogger) {
    CavalryLogger.start_js(["bcx2F"]);
}

__d("LWICometUserPostCreationRootContentQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3372040856209022",
            metadata: {
                relayPreloadable: !0
            },
            name: "LWICometUserPostCreationRootContentQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("AdsLWICoBUserPostCreationDialog.entrypoint", ["JSResource", "LWICometUserPostCreationRootContentQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            var c = String(a.pageID);
            a = String(a.targetID);
            c = {
                page_id: c,
                product: "BOOSTED_USER_POST",
                target_id: a
            };
            return {
                queries: {
                    userPostCreationRootQueryRef: {
                        parameters: b("LWICometUserPostCreationRootContentQuery$Parameters"),
                        variables: {
                            input: c
                        }
                    }
                }
            }
        },
        root: b("JSResource")("AdsLWICoBUserPostCreationDialog.react").__setRef("AdsLWICoBUserPostCreationDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("MediaManagerStarsTabSubTabs", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MAIN: "main",
        GOALS: "goals",
        SETTINGS: "settings"
    });
    e.exports = a
}
), null);
__d("XMediaManagerCustomFlytrapDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/media/manager/flytrap/", {
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("MediaManagerErrorStateLandingView.react", ["cx", "fbt", "AsyncDialog", "AsyncRequest", "CenteredContainer.react", "CreatorStudioLoggerStoreUtils", "GeoBaseText.react", "GeoButton.react", "GeoLink.react", "Image.react", "React", "URI", "XMediaManagerCustomFlytrapDialogController", "bx", "geoMargin"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React");
    function k() {
        b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("click_submit_report_button_in_error_state_landing_page", "error_state_landing_page", function(a) {
            return a.updateExtraData({
                item: "GIVE_US_FEEDBACK_FLYTRAP"
            })
        }),
        b("AsyncDialog").send(new (b("AsyncRequest"))(b("XMediaManagerCustomFlytrapDialogController").getURIBuilder().getURI()))
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = "https://www.facebook.com/help/publisher/2160250460681592", d = h._("Ch\u00fang t\u00f4i \u0111ang g\u1eb7p s\u1ef1 c\u1ed1"), e = [h._("Studio s\u00e1ng t\u1ea1o hi\u1ec7n kh\u00f4ng ho\u1ea1t \u0111\u1ed9ng. Ch\u00fang t\u00f4i \u0111\u00e3 ph\u00e1t hi\u1ec7n s\u1ef1 c\u1ed1 v\u00e0 s\u1ebd kh\u1eafc ph\u1ee5c trong th\u1eddi gian s\u1edbm nh\u1ea5t.")], f = h._("C\u00f3 th\u1ec3 b\u1ea1n n\u00ean ki\u1ec3m tra k\u1ebft n\u1ed1i Internet ho\u1eb7c kh\u1edfi \u0111\u1ed9ng l\u1ea1i m\u00e1y t\u00ednh."), g = h._("G\u1eedi b\u00e1o c\u00e1o");
            a = (a = (a = this.props) == null ? void 0 : a.messages) != null ? a : e;
            return j.jsxs(b("CenteredContainer.react"), {
                children: [j.jsx(b("Image.react"), {
                    src: b("bx").getURL(b("bx")("1160061")),
                    width: 240
                }), j.jsx(b("GeoBaseText.react"), {
                    color: "valueLabel",
                    display: "block",
                    size: "header1",
                    textAlign: "center",
                    weight: "bold",
                    xstyle: b("geoMargin").top24,
                    children: d
                }), j.jsx(b("GeoBaseText.react"), {
                    color: "valueLabel",
                    display: "block",
                    size: "value",
                    textAlign: "center",
                    xstyle: b("geoMargin").top12,
                    children: a
                }), j.jsx(b("GeoBaseText.react"), {
                    color: "valueLabel",
                    display: "block",
                    size: "value",
                    textAlign: "center",
                    xstyle: b("geoMargin").top12,
                    children: f
                }), j.jsx("div", {
                    className: "_9dbb",
                    children: j.jsx(b("GeoButton.react"), {
                        label: g,
                        variant: "primary",
                        onClick: k
                    })
                }), j.jsx(b("GeoBaseText.react"), {
                    color: "valueLabel",
                    display: "block",
                    size: "value",
                    textAlign: "center",
                    xstyle: b("geoMargin").top16,
                    children: h._("\u0110\u1ec3 nh\u1eadn h\u1ed7 tr\u1ee3 chung v\u1ec1 Studio s\u00e1ng t\u1ea1o, h\u00e3y truy c\u1eadp v\u00e0o {=Help Center} c\u1ee7a ch\u00fang t\u00f4i", [h._param("=Help Center", j.jsx(b("GeoLink.react"), {
                        href: new (i || (i = b("URI")))(c),
                        target: "_blank",
                        children: h._("Trung t\u00e2m tr\u1ee3 gi\u00fap")
                    }))])
                })]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("FundraiserVerticalsUtils", ["fbt", "FBPaymentsCheckoutConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.isCheckoutConfirmationShareEnabled = a;
    f.getPayButtonText = c;
    f.getFrequencySelectorTitle = d;
    f.getFrequencySelectorAdditionalString = e;
    f.getPrivacySelectorTitle = h;
    function a(a) {
        switch (a) {
        case b("FBPaymentsCheckoutConstants").FundraiserVerticals.FAITH:
            return !1
        }
        return !0
    }
    function c(a) {
        switch (a) {
        case b("FBPaymentsCheckoutConstants").FundraiserVerticals.FAITH:
            return g._("G\u1eedi")
        }
        return null
    }
    function d(a) {
        switch (a) {
        case b("FBPaymentsCheckoutConstants").FundraiserVerticals.FAITH:
            return g._("T\u1ea7n su\u1ea5t")
        }
        return null
    }
    function e(a, c) {
        switch (a) {
        case b("FBPaymentsCheckoutConstants").FundraiserVerticals.FAITH:
            if (c === !0)
                return g._("C\u00e1c kho\u1ea3n \u0111\u00f3ng g\u00f3p h\u00e0ng th\u00e1ng s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n cho t\u1ed5 ch\u1ee9c phi l\u1ee3i nhu\u1eadn th\u00f4ng qua Network for Good.");
            else
                return g._("C\u00e1c kho\u1ea3n \u0111\u00f3ng g\u00f3p h\u00e0ng th\u00e1ng s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n th\u1eb3ng cho t\u1ed5 ch\u1ee9c phi l\u1ee3i nhu\u1eadn.")
        }
        return null
    }
    function h(a) {
        switch (a) {
        case b("FBPaymentsCheckoutConstants").FundraiserVerticals.FAITH:
            return g._("Ai c\u00f3 th\u1ec3 xem kho\u1ea3n \u0111\u00f3ng g\u00f3p c\u1ee7a b\u1ea1n?")
        }
        return null
    }
}
), null);
