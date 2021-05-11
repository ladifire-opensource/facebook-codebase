if (self.CavalryLogger) {
    CavalryLogger.start_js(["g3pDP"]);
}

__d("CometModernHomeFeedQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3409583935822157",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometModernHomeFeedQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometClassicHomeLeftRailContainerQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3092941757480788",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometClassicHomeLeftRailContainerQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometHomeContactGroupsContainerQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3144174828984555",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometHomeContactGroupsContainerQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometHomeContactsContainerQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3528848223798192",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometHomeContactsContainerQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometRightSideHeaderCardsQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3439093319486216",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometRightSideHeaderCardsQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFeedInlineComposerQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3304349686347104",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedInlineComposerQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("VideoChatHomeContainerCometQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3229521773842254",
            metadata: {
                relayPreloadable: !0
            },
            name: "VideoChatHomeContainerCometQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometMegaphoneRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "4616808961694272",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometMegaphoneRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("useStoriesCombinedTrayViewerQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3363372890455546",
            metadata: {
                relayPreloadable: !0
            },
            name: "useStoriesCombinedTrayViewerQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("StoriesTrayRectangularRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3957083770988364",
            metadata: {
                relayPreloadable: !0
            },
            name: "StoriesTrayRectangularRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometLightweightSurveyContainerPlatformIntegrationPointQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2895053727278734",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometLightweightSurveyContainerPlatformIntegrationPointQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("getCometFeedVariablesForSk", ["WebConnectionClassServerGuess", "WebPixelRatio", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        d === void 0 && (d = []);
        var e = b("gkx")("869481")
          , f = a === "favorites" && b("gkx")("1386487");
        return {
            RELAY_INCREMENTAL_DELIVERY: e,
            UFI2CommentsProvider_commentsKey: "CometModernHomeFeedQuery",
            connectionClass: b("WebConnectionClassServerGuess").connectionClass,
            feedLocation: "NEWSFEED",
            feedStyle: f ? "FAVORITES_FEED" : "DEFAULT",
            feedbackSource: 1,
            orderby: a === "h_chr" ? ["MOST_RECENT"] : ["TOP_STORIES"],
            privacySelectorRenderLocation: "COMET_STREAM",
            recentVPVs: d,
            refreshMode: c ? "MANUAL" : null,
            renderLocation: "homepage_stream",
            scale: b("WebPixelRatio").get(),
            useDefaultActor: !1
        }
    }
}
), null);
__d("CometHomeRoot.entrypoint", ["CometClassicHomeLeftRailContainerQuery$Parameters", "CometFeedInlineComposerQuery$Parameters", "CometHomeContactGroupsContainerQuery$Parameters", "CometHomeContactsConfig", "CometHomeContactsContainerQuery$Parameters", "CometLightweightSurveyContainerPlatformIntegrationPointQuery$Parameters", "CometMegaphoneRootQuery$Parameters", "CometModernHomeFeedQuery$Parameters", "CometRightSideHeaderCardsQuery$Parameters", "JSResource", "StoriesTrayRectangularRootQuery$Parameters", "VideoChatHomeContainerCometQuery$Parameters", "WebPixelRatio", "getCometFeedVariablesForSk", "gkx", "qex", "requireCond", "useStoriesCombinedTrayViewerQuery$Parameters", "cr:1714513"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "173129220446484";
    b("cr:1714513");
    a = {
        getPreloadProps: function(a) {
            var c, d;
            a = a.routeParams.sk;
            a = b("getCometFeedVariablesForSk")(a, !1);
            var e = b("gkx")("1705278");
            a = {
                feedInlineComposerQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "composer"
                    },
                    parameters: b("CometFeedInlineComposerQuery$Parameters"),
                    variables: {
                        scale: (d = b("WebPixelRatio")).get()
                    }
                },
                feedQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "feed"
                    },
                    parameters: b("CometModernHomeFeedQuery$Parameters"),
                    variables: a
                },
                homeContactGroupsQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "rhc"
                    },
                    parameters: b("CometHomeContactGroupsContainerQuery$Parameters"),
                    variables: {
                        scale: d.get()
                    }
                },
                homeContactsQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "rhc"
                    },
                    parameters: b("CometHomeContactsContainerQuery$Parameters"),
                    variables: {
                        numContactsToFetch: b("CometHomeContactsConfig").numContactsToFetch,
                        scale: d.get()
                    }
                },
                leftRailContainerQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "left_rail"
                    },
                    parameters: b("CometClassicHomeLeftRailContainerQuery$Parameters"),
                    variables: {
                        numExploreBookmarks: 9,
                        scale: d.get()
                    }
                },
                lightweightSurveyQueryReference: {
                    options: {
                        fetchPolicy: "network-only"
                    },
                    parameters: b("CometLightweightSurveyContainerPlatformIntegrationPointQuery$Parameters"),
                    variables: {
                        integration_point_id: g,
                        survey_context_data: []
                    }
                },
                megaphoneQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "composer"
                    },
                    parameters: b("CometMegaphoneRootQuery$Parameters"),
                    variables: {
                        first: 1,
                        scale: d.get()
                    }
                },
                rightSideHeaderCardsQueryReference: {
                    environmentProviderOptions: {
                        ssrBoundary: "rhc"
                    },
                    options: {
                        fetchPolicy: "network-only"
                    },
                    parameters: b("CometRightSideHeaderCardsQuery$Parameters"),
                    variables: {
                        refresh_num: 0,
                        scale: d.get()
                    }
                }
            };
            d = (d = b("qex")._("1727842")) != null ? d : !1;
            var f = b("qex")._("1737957");
            c = (c = b("gkx")("1707301")) != null ? c : !1;
            if (d) {
                d = (d = b("qex")._("1727843")) != null ? d : 6;
                a = babelHelpers["extends"]({}, a, {
                    storiesTrayCombinedQueryReference: {
                        environmentProviderOptions: {
                            ssrBoundary: "stories"
                        },
                        parameters: b("useStoriesCombinedTrayViewerQuery$Parameters"),
                        variables: {
                            initialBucketsToFetch: d,
                            scale: b("WebPixelRatio").get(),
                            skipUploadingFragment: c,
                            supportsProduction: e,
                            totalBucketsToFetch: (d = f) != null ? d : 9
                        }
                    }
                })
            } else {
                f = ((d = f) != null ? d : 7) + (e ? 0 : 1);
                a = babelHelpers["extends"]({}, a, {
                    storiesTrayQueryReference: {
                        environmentProviderOptions: {
                            ssrBoundary: "stories"
                        },
                        parameters: b("StoriesTrayRectangularRootQuery$Parameters"),
                        variables: {
                            approxBucketsToFetch: b("gkx")("1753833") ? f : 0,
                            bucketsToFetch: f,
                            scale: b("WebPixelRatio").get(),
                            skipUploadingFragment: c,
                            supportsProduction: e
                        }
                    }
                })
            }
            if (b("gkx")("1363069")) {
                a = babelHelpers["extends"]({}, a, {
                    joinableVideoChatsQueryReference: {
                        environmentProviderOptions: {
                            ssrBoundary: "composer"
                        },
                        parameters: b("VideoChatHomeContainerCometQuery$Parameters"),
                        variables: {
                            enableMultipleRooms: (d = b("qex")._("1624805")) != null ? d : !1,
                            scale: b("WebPixelRatio").get()
                        }
                    }
                })
            }
            return {
                queries: a
            }
        },
        root: b("JSResource")("CometHomeRoot.react").__setRef("CometHomeRoot.entrypoint")
    };
    c = a;
    e.exports = c
}
), null);
__d("CometSSRServerJSPayloadUtils", ["Env", "HasteSupportData", "ServerJS"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handlePayload = a;
    f.invokeAndCaptureReturnValue = c;
    var g, h = "";
    function a(a) {
        b("HasteSupportData").handle(a.hsdp);
        (g || (g = b("Env"))).nocatch = !0;
        new (b("ServerJS"))().handle(a.jsmods);
        return h
    }
    function c(c, d, f) {
        var a;
        typeof c === "string" ? a = b.call(null, c) : a = c;
        c = a[d].apply(a, f);
        c === void 0 && (c = "");
        h = JSON.stringify(c)
    }
}
), null);
