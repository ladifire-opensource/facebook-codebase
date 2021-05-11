if (self.CavalryLogger) {
    CavalryLogger.start_js(["Po16d"]);
}

__d("CometSinglePostRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3613452118694016",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometSinglePostRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("ProfileCometTimelineListViewRootQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3439926409384140",
            metadata: {
                relayPreloadable: !0
            },
            name: "ProfileCometTimelineListViewRootQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("ProfileCometHeaderQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3144650908997011",
            metadata: {
                relayPreloadable: !0
            },
            name: "ProfileCometHeaderQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("ProfileCometTimelineFeedQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3452481851462326",
            metadata: {
                relayPreloadable: !0
            },
            name: "ProfileCometTimelineFeedQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("ProfileCometViewAsBarQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3046296422130522",
            metadata: {
                relayPreloadable: !0
            },
            name: "ProfileCometViewAsBarQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometSinglePostRoot.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "CometSinglePostRootQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            var c = a.routeParams
              , d = c.comment_id;
            c = c.reply_comment_id;
            a = a.routeProps.storyID;
            c = (c = c) != null ? c : d;
            d = {
                UFI2CommentsProvider_commentsKey: "CometSinglePostRoute",
                displayCommentsContextEnableComment: null,
                displayCommentsContextIsAdPreview: null,
                displayCommentsContextIsAggregatedShare: null,
                displayCommentsContextIsStorySet: null,
                displayCommentsFeedbackContext: null,
                feedLocation: "PERMALINK",
                feedbackSource: 2,
                focusCommentID: c != null ? String(c) : null,
                privacySelectorRenderLocation: "COMET_STREAM",
                renderLocation: "permalink",
                scale: b("WebPixelRatio").get(),
                storyID: a,
                useDefaultActor: !1
            };
            return {
                queries: {
                    singlePostRootQueryReference: {
                        environmentProviderOptions: {
                            ssrBoundary: "feed"
                        },
                        parameters: b("CometSinglePostRootQuery$Parameters"),
                        variables: d
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometSinglePostRoot.react").__setRef("CometSinglePostRoot.entrypoint")
    };
    e.exports = a
}
), null);
__d("ProfileCometViewAsBar.entrypoint", ["JSResourceForInteraction", "ProfileCometViewAsBarQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            a = a.profileID;
            return {
                queries: {
                    queryReference: {
                        parameters: b("ProfileCometViewAsBarQuery$Parameters"),
                        variables: {
                            id: a
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("ProfileCometViewAsBar.react").__setRef("ProfileCometViewAsBar.entrypoint")
    };
    e.exports = a
}
), null);
__d("buildCometProfileRoute.entrypoint", ["JSResourceForInteraction", "ProfileCometHeaderQuery$Parameters", "ProfileCometViewAsBar.entrypoint", "WebPixelRatio", "createGenericCompoundEntryPointBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        var d = b("createGenericCompoundEntryPointBuilder")(a, c);
        return function(a, c) {
            var e = {
                getPreloadProps: c,
                root: a
            };
            return d(function(a) {
                return a.routeProps.viewerID === "100000686899395" ? {
                    contentEntryPoint: {
                        entryPoint: e,
                        entryPointParams: a
                    },
                    viewAsEntryPoint: {
                        entryPoint: b("ProfileCometViewAsBar.entrypoint"),
                        entryPointParams: {
                            profileID: a.routeProps.userID
                        }
                    }
                } : {
                    contentEntryPoint: {
                        entryPoint: e,
                        entryPointParams: a
                    }
                }
            })
        }
    }
    c = a(b("JSResourceForInteraction")("ProfileCometRoot.react").__setRef("buildCometProfileRoute.entrypoint"), function(a) {
        var c = a.routeProps.viewerID;
        return {
            headerQueryReference: {
                environmentProviderOptions: {
                    actorID: c,
                    ssrBoundary: "root"
                },
                parameters: b("ProfileCometHeaderQuery$Parameters"),
                variables: {
                    scale: b("WebPixelRatio").get(),
                    userID: String(a.routeProps.userID)
                }
            }
        }
    });
    e.exports = c
}
), null);
__d("ProfileCometTimelineListViewRouteRoot.entrypoint", ["JSResourceForInteraction", "ProfileCometTimelineFeedQuery$Parameters", "ProfileCometTimelineListViewRootQuery$Parameters", "WebPixelRatio", "buildCometProfileRoute.entrypoint", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("buildCometProfileRoute.entrypoint")(b("JSResourceForInteraction")("ProfileCometTimelineListViewRoot.react").__setRef("ProfileCometTimelineListViewRouteRoot.entrypoint"), function(a) {
        var c = a.routeProps.viewerID
          , d = {
            UFI2CommentsProvider_commentsKey: "ProfileCometTimelineRoute",
            feedLocation: "TIMELINE",
            feedbackSource: 0,
            omitPinnedPost: b("gkx")("1645483"),
            privacySelectorRenderLocation: "COMET_STREAM",
            renderLocation: "timeline",
            scale: b("WebPixelRatio").get(),
            userID: String(a.routeProps.userID) || ""
        };
        a.routeProps.hasMentionsTab === !0 && (d = babelHelpers["extends"]({}, d, {
            postedBy: {
                group: "OWNER"
            }
        }));
        return {
            queries: {
                timelineFeedQueryReference: {
                    environmentProviderOptions: {
                        actorID: c,
                        ssrBoundary: "root"
                    },
                    parameters: b("ProfileCometTimelineFeedQuery$Parameters"),
                    variables: d
                },
                timelineListViewRootQueryReference: {
                    environmentProviderOptions: {
                        actorID: c,
                        ssrBoundary: "root"
                    },
                    parameters: b("ProfileCometTimelineListViewRootQuery$Parameters"),
                    variables: {
                        scale: b("WebPixelRatio").get(),
                        userID: String(a.routeProps.userID) || ""
                    }
                }
            }
        }
    });
    e.exports = a
}
), null);
