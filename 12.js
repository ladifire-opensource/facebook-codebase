if (self.CavalryLogger) {
    CavalryLogger.start_js(["8Q8l7"]);
}

__d("CometSinglePageChannelTabRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "4456417457765233",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometSinglePageChannelTabRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometVideoHomeFeedRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3348342628594926",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometVideoHomeFeedRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometVideoHomePlaylistRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "4613776935330125",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometVideoHomePlaylistRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometVideoHomeRootProviderQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2939812456104778",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometVideoHomeRootProviderQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometVideoHomeAggregationPageHeaderQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3681037198620542",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometVideoHomeAggregationPageHeaderQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3707683145972691",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometVideoHomeStickyHeaderWatchlistMenuRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometVideoHomeLeftRailWatchlistQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3173205286103754",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometVideoHomeLeftRailWatchlistQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometSinglePageChannelTabRoot.entrypoint", ["JSResource", "WebPixelRatio", "buildCometSinglePageRoute.entrypoint", "CometSinglePageChannelTabRootQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("buildCometSinglePageRoute.entrypoint")(b("JSResource")("CometSinglePageChannelTabRoot.react").__setRef("CometSinglePageChannelTabRoot.entrypoint"), function(a) {
        a = a.routeProps.pageID;
        return {
            queries: {
                singlePageChannelTabRootQueryReference: {
                    parameters: b("CometSinglePageChannelTabRootQuery$Parameters"),
                    variables: {
                        UFI2CommentsProvider_commentsKey: "CometSinglePageChannelTabRoot",
                        displayCommentsContextEnableComment: null,
                        displayCommentsContextIsAdPreview: null,
                        displayCommentsContextIsAggregatedShare: null,
                        displayCommentsContextIsStorySet: null,
                        displayCommentsFeedbackContext: null,
                        feedLocation: "PAGE_TIMELINE",
                        feedbackSource: 72,
                        focusCommentID: null,
                        pageID: a,
                        scale: b("WebPixelRatio").get() * 4,
                        useDefaultActor: !1
                    }
                }
            }
        }
    });
    e.exports = a
}
), null);
__d("CometVideoHomeChannelTabRoot.entrypoint", ["JSResource", "WebPixelRatio", "CometSinglePageChannelTabRootQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            a = a.routeProps;
            return {
                queries: {
                    singlePageChannelTabRootQueryReference: {
                        parameters: b("CometSinglePageChannelTabRootQuery$Parameters"),
                        variables: {
                            UFI2CommentsProvider_commentsKey: "CometSinglePageChannelTabRoot",
                            displayCommentsContextEnableComment: null,
                            displayCommentsContextIsAdPreview: null,
                            displayCommentsContextIsAggregatedShare: null,
                            displayCommentsContextIsStorySet: null,
                            displayCommentsFeedbackContext: null,
                            feedLocation: "PAGE_TIMELINE",
                            feedbackSource: 72,
                            focusCommentID: null,
                            pageID: a.pageID,
                            scale: b("WebPixelRatio").get() * 4,
                            useDefaultActor: !1
                        }
                    }
                }
            }
        },
        root: b("JSResource")("CometSinglePageChannelTabRoot.react").__setRef("CometVideoHomeChannelTabRoot.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometVideoHomeCommonEntryPointVariables", ["WebPixelRatio", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    c = {
        UFI2CommentsProvider_commentsKey: null,
        displayCommentsContextEnableComment: null,
        displayCommentsContextIsAdPreview: null,
        displayCommentsContextIsAggregatedShare: null,
        displayCommentsContextIsStorySet: null,
        displayCommentsFeedbackContext: null,
        feedLocation: "VIDEO_HOME_FEED",
        feedbackSource: 60,
        focusCommentID: null,
        isComet: (a = b("gkx"))("708253"),
        isCommunityViewEntryPointEnabled: !!b("qex")._("1571809"),
        privacySelectorRenderLocation: "COMET_STREAM",
        renderLocation: "video_home",
        scale: b("WebPixelRatio").get(),
        shareSheetRedesign: a("1365892"),
        useBlackBackground: a("1327965"),
        useCommentsEntryPoint: a("1679116"),
        useDashPrefetch: !1,
        useDefaultActor: !1
    };
    e.exports = c
}
), null);
__d("CometVideoHomeFeedEntryPointVariables", ["CometVideoHomeCommonEntryPointVariables", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    a = babelHelpers["extends"]({}, b("CometVideoHomeCommonEntryPointVariables"), {
        UFI2CommentsProvider_commentsKey: "CometVideoHomeFeedRootQuery",
        canShowSeenState: !1,
        feedHeroEnabled: !!b("qex")._("1418988"),
        feedViewOnly: b("qex")._("1345259") === "feed_only",
        gridViewOnly: b("qex")._("1345259") === "grid_only",
        triggerData: {
            injected_video_id: null
        }
    });
    e.exports = a
}
), null);
__d("buildCometVideoHomeRoute.entrypoint", ["JSResource", "WebPixelRatio", "createContentAreaCompoundEntryPointBuilder", "gkx", "requireCond", "cr:1714517", "CometVideoHomeRootProviderQuery$Parameters", "CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters", "CometVideoHomeLeftRailWatchlistQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    b("cr:1714517");
    a = b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometVideoHomeRoot.react").__setRef("buildCometVideoHomeRoute.entrypoint"), function(a) {
        return {
            rootProviderQueryReference: {
                parameters: b("CometVideoHomeRootProviderQuery$Parameters"),
                variables: {}
            },
            stickyHeaderWatchlistQueryReference: {
                parameters: b("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters"),
                variables: {
                    scale: b("WebPixelRatio").get()
                }
            },
            watchlistSettingsQueryReference: {
                parameters: b("CometVideoHomeLeftRailWatchlistQuery$Parameters"),
                variables: {
                    enableLiveBadgeAndBoost: !!b("gkx")("1637651"),
                    scale: b("WebPixelRatio").get()
                }
            }
        }
    });
    e.exports = a
}
), null);
__d("CometVideoHomeFeedRoot.entrypoint", ["CometVideoHomeFeedEntryPointVariables", "JSResource", "buildCometVideoHomeRoute.entrypoint", "requireCond", "cr:1714516", "CometVideoHomeFeedRootQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    b("cr:1714516");
    a = b("buildCometVideoHomeRoute.entrypoint")(b("JSResource")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRoot.entrypoint"), function(a) {
        return {
            queries: {
                feedRootQueryReference: {
                    options: {
                        fetchPolicy: "network-only"
                    },
                    parameters: b("CometVideoHomeFeedRootQuery$Parameters"),
                    variables: b("CometVideoHomeFeedEntryPointVariables")
                }
            }
        }
    });
    e.exports = a
}
), null);
__d("CometVideoHomePlaylistRoot.entrypoint", ["JSResource", "WebPixelRatio", "buildCometVideoHomeRoute.entrypoint", "qex", "CometVideoHomePlaylistRootQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("buildCometVideoHomeRoute.entrypoint")(b("JSResource")("CometVideoHomePlaylistRoot.react").__setRef("CometVideoHomePlaylistRoot.entrypoint"), function(a) {
        a = {
            id: a.routeProps.id
        };
        return {
            queries: {
                playlistRootQueryReference: {
                    parameters: b("CometVideoHomePlaylistRootQuery$Parameters"),
                    variables: {
                        feedHeroEnabled: !!b("qex")._("1418988"),
                        scale: b("WebPixelRatio").get(),
                        trigger_data: a
                    }
                }
            }
        }
    });
    e.exports = a
}
), null);
__d("CometVideoHomeAggregationPageHeader.entrypoint", ["JSResource", "WebPixelRatio", "CometVideoHomeAggregationPageHeaderQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {
                    aggregationPageHeaderQueryReference: {
                        parameters: b("CometVideoHomeAggregationPageHeaderQuery$Parameters"),
                        variables: {
                            id: (a = a.routeProps.sectionID) != null ? a : "",
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResource")("CometVideoHomeAggregationPageHeader.react").__setRef("CometVideoHomeAggregationPageHeader.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometVideoHomeAggregationPageRoot.entrypoint", ["JSResource", "buildCometVideoHomeRoute.entrypoint", "CometVideoHomeAggregationPageHeader.entrypoint", "CometVideoHomeChannelTabRoot.entrypoint"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("buildCometVideoHomeRoute.entrypoint")(b("JSResource")("CometVideoHomeAggregationPageRoot.react").__setRef("CometVideoHomeAggregationPageRoot.entrypoint"), function(a) {
        return {
            entryPoints: {
                aggregationPageHeaderEntryPoint: {
                    entryPoint: b("CometVideoHomeAggregationPageHeader.entrypoint"),
                    entryPointParams: a
                },
                channelTabRootEntryPoint: {
                    entryPoint: b("CometVideoHomeChannelTabRoot.entrypoint"),
                    entryPointParams: a
                }
            }
        }
    });
    e.exports = a
}
), null);
__d("CometVideoHomeLanceletHomeRoot.entrypoint", ["JSResourceForInteraction", "buildCometVideoHomeRoute.entrypoint", "CometSinglePageHomeRoot.entrypoint"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("buildCometVideoHomeRoute.entrypoint")(b("JSResourceForInteraction")("CometVideoHomeLanceletRoot.react").__setRef("CometVideoHomeLanceletHomeRoot.entrypoint"), function(a) {
        return {
            entryPoints: {
                pageEntryPoint: {
                    entryPoint: b("CometSinglePageHomeRoot.entrypoint"),
                    entryPointParams: a
                }
            },
            extraProps: a
        }
    });
    e.exports = a
}
), null);
