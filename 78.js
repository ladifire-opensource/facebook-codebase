if (self.CavalryLogger) {
    CavalryLogger.start_js(["GjwF8"]);
}

__d("BCMPCampaignTab", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        ProjectBrief: "PROJECT_BRIEF",
        Partners: "PARTNERS",
        Insights: "INSIGHTS",
        Messages: "MESSAGES"
    });
    c = a;
    e.exports = c
}
), null);
__d("GeoBaseLayerExitBehavior.react", ["React", "useGeoPrivateLayerBehavior"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.children
          , d = a.delay
          , e = d === void 0 ? 0 : d
          , f = a.onExit
          , h = g.useRef(null)
          , i = g.useCallback(function() {
            window.clearTimeout(h.current)
        }, [])
          , j = g.useCallback(function() {
            h.current = window.setTimeout(f, e)
        }, [e, f])
          , k = g.useRef(null);
        d = g.useCallback(function(a) {
            k.current == null ? void 0 : k.current(),
            k.current = null,
            a != null && (a.addEventListener("mouseenter", i),
            a.addEventListener("mouseleave", j),
            k.current = function() {
                a.removeEventListener("mouseenter", i),
                a.removeEventListener("mouseleave", j)
            }
            )
        }, [i, j]);
        return b("useGeoPrivateLayerBehavior")({
            ref: d
        })(c)
    }
}
), null);
__d("GeoPrivateSelectorContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        trigger: "input"
    });
    e.exports = c
}
), null);
__d("VideoComposerFooterPublishButton.react", ["FDSButton.react", "FDSButtonSpinner.react", "React", "cxMargin"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("FDSButton.react"), {
                busyIndicator: this.props.showPublishingLoadingIndicator ? g.jsx(b("FDSButtonSpinner.react"), {}) : void 0,
                "data-testid": void 0,
                href: "#",
                isDisabled: this.props.isDisabled,
                label: this.props.showPublishingLoadingIndicator ? "" : this.props.publishButtonLabel,
                margin: "_3-9a",
                tooltip: this.props.cannotPublishReason,
                size: "large",
                use: "primary",
                onClick: this.props.onClick
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("MediaManagerInsightsBenchmarkingTabConfig", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        title: g._("So s\u00e1nh"),
        type: "insights_benchmarking",
        parentTab: "insights",
        tabGroup: "videos",
        hasPageSelector: !0,
        canSelectOnlySinglePage: !0
    };
    b = a;
    e.exports = b
}
), null);
__d("VideoComposerFooterPublishButtonContainer.react", ["fbt", "FluxContainer", "React", "VideoComposerActions", "VideoComposerFooterPublishButton.react", "VideoComposerInterceptCheckers", "VideoComposerPremiereUtils", "VideoComposerPublishingTypes", "VideoComposerStores"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a, b) {
        return a && !b
    }
    function j(a, b, c, d) {
        return !a || b || i(c, d)
    }
    function k(b, c, a) {
        if (i(b, c))
            return g._("B\u1ea1n c\u00f3 th\u1ec3 \u0111\u0103ng bu\u1ed5i c\u00f4ng chi\u1ebfu theo l\u1ecbch c\u1ee7a m\u00ecnh sau khi t\u1ea3i l\u00ean.");
        else
            return a
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.onPublishButtonClick = function() {
                if (d.state.isPremiere && !b("VideoComposerPremiereUtils").isPublishTimeValid(d.state.premiereDate, d.state.premiereVideoFileSizeBytes)) {
                    d.setState(function(a) {
                        return {
                            cannotPublishReason: b("VideoComposerPremiereUtils").getScheduledLiveInvalidTimeNotice(!0, a.premiereVideoFileSizeBytes),
                            isDisabled: !0
                        }
                    });
                    return
                }
                b("VideoComposerInterceptCheckers").rightsConfirmInterceptChecker(d.props.shouldShowRightsConfirmDialogBeforePublish, d.props.publishingType) ? b("VideoComposerActions").showRightsConfirmDialog(d.props.videoComposerID) : d.props.publishingType === b("VideoComposerPublishingTypes").PublishingType.AD_BREAK_SUBMIT_FOR_REVIEW ? b("VideoComposerActions").submitForPrereview(d.props.videoComposerID) : b("VideoComposerActions").publishPost(d.props.videoComposerID)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getStores = function(a) {
            return [b("VideoComposerStores").getPremiereStore(a.videoComposerID), b("VideoComposerStores").getUploadStore(a.videoComposerID)]
        }
        ;
        c.calculateState = function(a, c) {
            a = b("VideoComposerStores").getPremiereStore(c.videoComposerID).getState();
            var d = a.shouldPremiere;
            a = a.premiereDate;
            var e = b("VideoComposerStores").getUploadStore(c.videoComposerID).getState()
              , f = e.uploadFinished;
            e = e.videoSize;
            return {
                cannotPublishReason: k(d, f, c.cannotPublishReason),
                isDisabled: j(c.canPublish, c.isPublishing, d, f),
                isPremiere: d,
                premiereDate: a,
                premiereVideoFileSizeBytes: e
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("VideoComposerFooterPublishButton.react"), {
                cannotPublishReason: this.state.cannotPublishReason,
                isDisabled: this.state.isDisabled,
                publishButtonLabel: this.props.publishButtonLabel,
                onClick: this.onPublishButtonClick,
                showPublishingLoadingIndicator: this.props.showPublishingLoadingIndicator
            })
        }
        ;
        return c
    }(h.Component);
    c = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = c
}
), null);
__d("VideoCopyrightMatchAttributionRequestStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NOT_REQUESTED: 0,
        REQUESTED_ONLY: 1,
        REQUESTED_AND_REQUIRED: 2
    });
    e.exports = a
}
), null);
__d("MMRMMatchActionDialogOwnershipLinkSettings.react", ["ix", "fbt", "ActorURI", "AsyncRequest", "GeoCheckboxInput.react", "GeoGlimmer.react", "GeoSwitch.react", "GeoTooltip.react", "Image.react", "MediaManagerFacebookPagePickerStore", "MMRMBulkActionEntityCard.react", "React", "VideoCopyrightAttributionSelectorUtils", "XMMRMMatchAttributionSettingsController", "asset", "cxMargin", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.isBulkAction
          , d = c === void 0 ? !1 : c
          , e = babelHelpers.objectWithoutPropertiesLoose(a, ["isBulkAction"]);
        c = i.useState(null);
        a = c[0];
        var f = c[1];
        c = i.useState(null);
        var g = c[0]
          , k = c[1];
        i.useEffect(function() {
            var a, c;
            if (d)
                return;
            var g = b("MediaManagerFacebookPagePickerStore").selectedSinglePageID();
            a = (a = e.copyrightMatch) == null ? void 0 : (a = a.attributionPreview) == null ? void 0 : a.id;
            if (g == null || a == null)
                return;
            c = b("ActorURI").create(b("XMMRMMatchAttributionSettingsController").getURIBuilder().setFBID("match_id", (c = e.copyrightMatch) == null ? void 0 : c.matchID).setFBID("attribution_id", a).getURI(), g);
            new (b("AsyncRequest"))().setURI(c).setMethod("POST").setHandler(function(a) {
                f(a.payload.isDefaultAttribution),
                k(a.payload.pictureURI)
            }).send()
        }, [(c = e.copyrightMatch) == null ? void 0 : (c = c.attributionPreview) == null ? void 0 : c.id, (c = e.copyrightMatch) == null ? void 0 : c.matchID, d]);
        c = function() {
            return e.attributionRequestStatus ? [1, 2].includes(e.attributionRequestStatus) : !1
        }
        ;
        var l = function(a) {
            a = a ? 1 : 0;
            e.onChange(a)
        }
          , m = function(a) {
            a = a ? 2 : 1;
            e.onChange(a)
        };
        return i.jsxs(i.Fragment, {
            children: [i.jsx(b("GeoSwitch.react"), {
                description: e.requestAttributionMessage,
                disabledMessage: e.disabledMessage,
                isDisabled: e.isRequestingDisabled,
                label: h._("Th\u00eam li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu"),
                labelPosition: "suffix",
                value: c(),
                onChange: l
            }), e.isRequestingDisabled ? null : i.jsxs("div", {
                className: "g72mvqs3",
                children: [!d && i.jsx(j, {
                    attribution: (l = e.copyrightMatch) == null ? void 0 : l.attributionPreview,
                    isDefaultAttribution: a,
                    isShown: c(),
                    pictureURI: g
                }), c() && e.allowRequireAttribution ? i.jsx(b("GeoCheckboxInput.react"), {
                    description: h._("H\u1ec7 th\u1ed1ng s\u1ebd \u00e1p d\u1ee5ng h\u00e0nh \u0111\u1ed9ng Nh\u1eadn thu nh\u1eadp t\u1eeb qu\u1ea3ng c\u00e1o {=only} khi c\u00f3 th\u1ec3 th\u00eam li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu. N\u1ebfu video kh\u1edbp kh\u00f4ng \u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n, h\u00e0nh \u0111\u1ed9ng th\u1ee9 hai s\u1ebd \u0111\u01b0\u1ee3c \u00e1p d\u1ee5ng.", [h._param("=only", i.jsx("strong", {
                        children: h._("ch\u1ec9")
                    }))]),
                    disabledMessage: e.disabledMessage,
                    isDisabled: e.isRequiringDisabled,
                    label: h._("C\u1ea7n c\u00f3 li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu"),
                    value: e.attributionRequestStatus === 2,
                    onChange: m
                }) : null]
            })]
        })
    }
    function j(a) {
        var c = a.attribution
          , d = a.isDefaultAttribution
          , e = a.isShown;
        a = a.pictureURI;
        if (c == null || !e)
            return null;
        e = function() {
            return d === !0 ? i.jsx(b("GeoTooltip.react"), {
                content: h._("H\u1ec7 th\u1ed1ng s\u1ebd th\u00eam li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu m\u1eb7c \u0111\u1ecbnh c\u1ee7a b\u1ea1n v\u00ec File tham chi\u1ebfu cho n\u1ed9i dung kh\u1edbp n\u00e0y ch\u01b0a c\u00f3 li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu n\u00e0o. B\u1ea1n c\u00f3 th\u1ec3 s\u1eeda \u0111\u1ed5i li\u00ean k\u1ebft n\u00e0y trong ph\u1ea7n C\u00e0i \u0111\u1eb7t."),
                children: i.jsx(b("Image.react"), {
                    src: g("1426727")
                })
            }) : null
        }
        ;
        return i.jsx("div", {
            className: "_3-8p",
            children: d == null ? i.jsx(b("GeoGlimmer.react"), {
                height: 64
            }) : i.jsx(b("MMRMBulkActionEntityCard.react"), {
                description: b("VideoCopyrightAttributionSelectorUtils").getFormattedAttributionSubtitle(c),
                endContent: e(),
                heading: c.title,
                pictureURI: a
            })
        })
    }
}
), null);
