if (self.CavalryLogger) {
    CavalryLogger.start_js(["QhMcE"]);
}

__d("VideoPlayerCometFeedThumbnail_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerCometFeedThumbnail_video",
        selections: [{
            alias: "thumbnailImage",
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useOzImplementationData_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useOzImplementationData_video",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_use_oz",
            storageKey: null
        }, {
            alias: "playable_url_dash",
            args: [{
                kind: "Literal",
                name: "scrubbing_preference",
                value: "MPEG_DASH"
            }],
            kind: "ScalarField",
            name: "playable_url",
            storageKey: 'playable_url(scrubbing_preference:"MPEG_DASH")'
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "dash_manifest",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "min_quality_preference",
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useProgressiveImplementationData_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useProgressiveImplementationData_video",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_spherical",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "min_quality_preference",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "playable_url",
            storageKey: null
        }, {
            alias: "playable_url_quality_hd",
            args: [{
                kind: "Literal",
                name: "quality",
                value: "HD"
            }],
            kind: "ScalarField",
            name: "playable_url",
            storageKey: 'playable_url(quality:"HD")'
        }, {
            alias: null,
            args: null,
            concreteType: "SphericalVideoFallbackUrls",
            kind: "LinkedField",
            name: "spherical_video_fallback_urls",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hd",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "sd",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useShakaImplementationData_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useShakaImplementationData_video",
        selections: [{
            alias: null,
            args: null,
            concreteType: "VideoPlayerShakaLiveP2PInit",
            kind: "LinkedField",
            name: "video_player_shaka_live_p2p_init",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "json_encoded_video_data",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useVideoPlayerShakaPerformanceLoggerRelay_init.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useVideoPlayerShakaPerformanceLoggerRelay_init",
        selections: [{
            kind: "ClientExtension",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__id",
                storageKey: null
            }]
        }],
        type: "VideoPlayerShakaPerformanceLoggerInit",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useVideoPlayerShakaPerformanceLoggerRelay_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useVideoPlayerShakaPerformanceLoggerRelay_video",
        selections: [{
            alias: null,
            args: null,
            concreteType: "VideoPlayerShakaPerformanceLoggerInit",
            kind: "LinkedField",
            name: "video_player_shaka_performance_logger_init",
            plural: !1,
            selections: [{
                documentName: "useVideoPlayerShakaPerformanceLoggerRelay_video",
                fragmentName: "useVideoPlayerShakaPerformanceLoggerRelay_init",
                fragmentPropName: "init",
                kind: "ModuleImport"
            }],
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useVideoImplementations_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useVideoImplementations_video",
        selections: [{
            args: null,
            kind: "FragmentSpread",
            name: "useOzImplementationData_video"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useShakaImplementationData_video"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useProgressiveImplementationData_video"
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useVideoPlayerShakaConfig_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useVideoPlayerShakaConfig_video",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_spherical",
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("handleOzManifestFetchErrorEvent", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c = a.getNumber("initial_manifest_request_retry_count", 0)
          , d = JSON.parse(a.getString("network_retry_intervals_json", "{}"))
          , e = a.getNumber("live_max_try_attempts_on_404", 1)
          , f = ["404", "503"];
        a.getBool("live_gracefully_handle_no_network", !1) && f.push("0");
        a = b.error.getExtra().code;
        d = d[a];
        if (b.isInitialMpdRequest)
            typeof d === "number" && d > 0 && b.retryAttemptCount < c && (b.preventDefault(),
            b.retry(d));
        else if (a != null && f.indexOf(a) > -1)
            switch (a) {
            case "410":
                b.preventDefault();
                b.cancelMpdUpdates();
                break;
            case "404":
                e < b.consecutiveFailuresForErrorCode && (b.preventDefault(),
                b.retry());
                break;
            case "503":
            case "0":
                b.preventDefault();
                b.retry();
                break;
            default:
                break
            }
    }
}
), null);
__d("handleOzStreamErrorEvent", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    function a(a, b) {
        var c = b.code
          , d = JSON.parse(a.getString("network_end_broadcasts_json", "[]"));
        if (d.includes(c)) {
            b.endStream();
            return
        }
        d = JSON.parse(a.getString("network_skip_json", "[]"));
        if (d.includes(c)) {
            b.retry();
            return
        }
        d = a.getBool("back_off_pdash_504_retry", !0) ? g[b.retryAttemptCount] : 0;
        var e = JSON.parse(a.getString("network_reload_mpd_json", "[]"))
          , f = a.getBool("fix_reload_manifest_retry", !1);
        if (a.getBool("back_off_pdash_504_retry", !0) && d == null && (!f || e.includes(c))) {
            b.failPlayback();
            return
        }
        if (d != null && e.includes(c)) {
            b.retryWithTimeout(d * 1e3);
            return
        }
        f = JSON.parse(a.getString("network_retry_intervals_json", '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}'));
        e = f[c];
        if (e) {
            b.retryWithTimeout(e);
            return
        }
        b.failPlayback()
    }
}
), null);
__d("VideoPlayerWithThumbnail.react", ["CometImage.react", "CometVisualCompletionAttributes", "React", "VideoPlayerHooks", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        root: {
            bottom: "i09qtzwb",
            boxSizing: "rq0escxv",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4",
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            justifyContent: "taijpn5t"
        },
        thumbnail: {
            height: "datstx6m",
            width: "dbpd2lw6"
        }
    };
    function a(a) {
        a = a.src;
        var c = b("VideoPlayerHooks").useVideoPlaybackEnded()
          , d = b("VideoPlayerHooks").usePaused()
          , e = h.useState(!1)
          , f = e[0]
          , j = e[1];
        h.useEffect(function() {
            d || j(!0)
        }, [d]);
        return !c && f ? null : h.jsx("div", babelHelpers["extends"]({
            className: (g || (g = b("stylex")))(i.root)
        }, b("CometVisualCompletionAttributes").IGNORE, {
            children: h.jsx(b("CometImage.react"), {
                src: a,
                xstyle: i.thumbnail
            })
        }))
    }
}
), null);
__d("VideoPlayerCometFeedThumbnail.react", ["CometRelay", "React", "VideoPlayerWithThumbnail.react", "VideoPlayerCometFeedThumbnail_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        a = a.video;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("VideoPlayerCometFeedThumbnail_video.graphql"), a);
        a = a == null ? void 0 : (a = a.thumbnailImage) == null ? void 0 : a.uri;
        return a == null ? null : h.jsx(b("VideoPlayerWithThumbnail.react"), {
            src: a
        })
    }
}
), null);
__d("SphericalMediaGyroOverlay.react", ["cx", "CSS", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 800
      , j = function(a, b, c) {
        b === void 0 && (b = !0);
        c === void 0 && (c = !1);
        return {
            gyroRoot: "_1zvy" + (a ? " _2dz7" : "") + (b ? " _4z8s" : "") + (c ? " _4z8p" : ""),
            gyroOuter: "_4z8q",
            gyroInner: "_4z8r",
            gyroMeridian: "_4z8t",
            gyroEquator: "_4z8u",
            gyroTextShell: "_4z8v",
            gyroText: "_4z8w"
        }
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.rootRef = h.createRef(),
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidUpdate = function(a) {
            var c = this;
            if (a.isActive && !this.props.isActive)
                setTimeout(function() {
                    var a = c.rootRef.current;
                    a instanceof Element && b("CSS").hide(a)
                }, i);
            else if (!this.props.isActive) {
                a = this.rootRef.current;
                a instanceof Element && b("CSS").hide(a)
            }
        }
        ;
        d.componentDidMount = function() {
            if (!this.props.isActive) {
                var a = this.rootRef.current;
                a instanceof Element && b("CSS").hide(a)
            }
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.className
              , d = a.isActive
              , e = a.isInfinite;
            a = a.isPaused;
            d = j(d, e, a);
            return h.jsx("div", {
                className: b("joinClasses")(c, d.gyroRoot),
                ref: this.rootRef,
                children: h.jsxs("div", {
                    className: d.gyroOuter,
                    children: [h.jsxs("div", {
                        className: d.gyroInner,
                        children: [h.jsx("div", {
                            className: d.gyroMeridian
                        }), h.jsx("div", {
                            className: d.gyroEquator
                        })]
                    }), h.jsx("div", {
                        className: d.gyroTextShell,
                        children: h.jsx("span", {
                            className: d.gyroText,
                            children: "360"
                        })
                    })]
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("VideoPlayerSphericalFallbackCover.react", ["fbt", "React", "SphericalMediaGyroOverlay.react", "TetraText.react", "stylex", "unrecoverableViolation", "useCometRouterDispatcher", "useFeedClickEventHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.videoTahoeUrl
          , d = b("useCometRouterDispatcher")();
        a = h.useState(!1);
        var e = a[0]
          , f = a[1];
        if (d == null)
            throw b("unrecoverableViolation")("Missing CometRouterDispatcher", "comet_video_player");
        a = b("useFeedClickEventHandler")(function() {
            d.go(c, {})
        });
        return h.jsxs("div", {
            className: "bkfpd7mw cbu4d94t j83agx80 nhd2j8a9 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
            onClick: a,
            onMouseEnter: function() {
                return f(!0)
            },
            onMouseLeave: function() {
                return f(!1)
            },
            role: "link",
            tabIndex: 0,
            children: [h.jsx(b("SphericalMediaGyroOverlay.react"), {
                isActive: !0
            }), h.jsx("div", {
                className: "l9j0dhe7 i7orit0i",
                children: e ? h.jsx(b("TetraText.react"), {
                    color: "white",
                    type: "bodyLink3",
                    children: g._("Nh\u1ea5p \u0111\u1ec3 m\u1edf r\u1ed9ng")
                }) : null
            })]
        })
    }
}
), null);
__d("VideoPlayerWithVideoHomeLogging.react", ["React", "VideoPlayerHooks"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.feedAggregationType
          , d = a.reactionVideoChannelType
          , e = b("VideoPlayerHooks").useController();
        g.useEffect(function() {
            d != null && e.setAdditionalLogData("reaction_video_channel_type", d),
            c != null && e.setAdditionalLogData("feed_aggregation_type", c)
        }, [e, c, d]);
        return null
    }
}
), null);
__d("useVideoPlayerClickToPauseInteraction", ["fbt", "React", "VideoPlayerHooks", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        var a = b("VideoPlayerHooks").usePlaying()
          , c = b("VideoPlayerHooks").useController()
          , d = b("VideoPlayerHooks").useIsLive()
          , e = h.useCallback(function() {
            c.pause("user_initiated")
        }, [c]);
        a = a && !(b("gkx")("1269128") && d);
        return a ? {
            ariaLabel: g._("T\u1ea1m d\u1eebng video"),
            handler: e,
            overlayLabel: ""
        } : null
    }
}
), null);
__d("VideoPlayerOzImplementationData", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.makeOzImplementationData = a;
    function a(a) {
        var b = a.canUseOz
          , c = a.dashManifest
          , d = a.dashUrl
          , e = a.experimentationConfig
          , f = a.minQualityPreference
          , g = a.ozQuickStarterData;
        a = a.videoFBID;
        if (b !== !0 || a == null)
            return null;
        b = c == null || c === "" ? null : c;
        a = d == null || d === "" ? null : d;
        if (b == null && a == null)
            return null;
        return e == null ? null : {
            experimentationConfig: e,
            manifest: b,
            manifestUrl: a,
            minQualityPreference: (c = f) != null ? c : null,
            ozQuickStarterData: (d = g) != null ? d : null
        }
    }
}
), null);
__d("VideoPlayerOzImplementationEngineExtrasAPI", ["VideoPlayerOzWWWGlobalConfig", "emptyFunction", "gkx", "oz-player/networks/OzBandwidthEstimator"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createVideoPlayerOzImplementationEngineExtrasAPI = a;
    c = b("emptyFunction");
    function g(a) {
        return a.getSelectedVideoQuality()
    }
    function h(a) {
        a = a.getCurrentVideoRepresentation();
        return a == null ? "" : a.getQualityLabel()
    }
    function i(a) {
        a = a.getIsVideoQualityAdaptationEnabled() ? "auto" : a.getSelectedVideoQuality();
        return a
    }
    function j(a) {
        return (a = (a = a.getMpd()) == null ? void 0 : a.getCustomField("fbProjection")) != null ? a : null
    }
    function k(a, b) {
        var c = i(a);
        if (b === "notselected" || b === c)
            return !1;
        else if (b === "auto") {
            a.enableVideoQualityAdaptation();
            return !0
        } else if (b !== a.getSelectedVideoQuality()) {
            c = b;
            a.switchToVideoQuality(c);
            return !0
        } else
            return !1
    }
    function a(a) {
        var c = a.getOzPlayer
          , d = a.getOzQuickStarter;
        a = {
            getAudioRepresentationIDAtTime: function(a) {
                var b, e;
                b = (b = c()) == null ? void 0 : b.getAudioRepresentationIDAtTime(a);
                e = (e = d()) == null ? void 0 : e.getAudioRepresentationIDAtTime(a);
                return (b = (a = b) != null ? a : e) != null ? b : null
            },
            getAvailableVideoQualities: function() {
                var a;
                return (a = (a = c()) == null ? void 0 : a.getVideoQualities()) != null ? a : []
            },
            getCurrentAudioRepresentation: function() {
                var a;
                return (a = (a = c()) == null ? void 0 : a.getCurrentAudioRepresentation()) != null ? a : null
            },
            getCurrentPlayingVideoQuality: function() {
                var a = c();
                return a ? h(a) : ""
            },
            getCurrentTargetVideoQuality: function() {
                var a = c();
                return a ? g(a) : ""
            },
            getCurrentVideoRepresentation: function() {
                var a;
                return (a = (a = c()) == null ? void 0 : a.getCurrentVideoRepresentation()) != null ? a : null
            },
            getEstimatedBandwidth: function() {
                return b("oz-player/networks/OzBandwidthEstimator").getBandwidth(b("VideoPlayerOzWWWGlobalConfig"))
            },
            getInbandCaptionsAutogeneratedFromManifest: function() {
                var a;
                a = (a = c()) == null ? void 0 : a.getMpd();
                return Boolean(a == null ? void 0 : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions"))
            },
            getInbandCaptionsExpectedFromManifest: function() {
                var a;
                a = (a = c()) == null ? void 0 : a.getMpd();
                return Boolean(a == null ? void 0 : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")) || Boolean(a == null ? void 0 : a.getCustomField("hasInbandCaptionsFromAccessibility"))
            },
            getStreamType: function() {
                return "dash"
            },
            getUserSelectedVideoQuality: function() {
                var a = c();
                return a ? i(a) : ""
            },
            getVideoProjectionType: function() {
                var a = c();
                return a != null ? j(a) : null
            },
            getVideoRepresentationIDAtTime: function(a) {
                var b, e;
                b = (b = c()) == null ? void 0 : b.getVideoRepresentationIDAtTime(a);
                e = (e = d()) == null ? void 0 : e.getVideoRepresentationIDAtTime(a);
                return (b = (a = b) != null ? a : e) != null ? b : null
            },
            getVideoRepresentations: function() {
                var a;
                return (a = (a = c()) == null ? void 0 : (a = a.getMpd()) == null ? void 0 : a.getVideoRepresentations()) != null ? a : null
            },
            isDrm: function() {
                var a;
                return Boolean((a = c()) == null ? void 0 : a.isDrm())
            },
            isFBIsLiveTemplated: function() {
                var a;
                a = (a = c()) == null ? void 0 : a.getMpd();
                return Boolean(a == null ? void 0 : a.getCustomField("isLiveTemplated"))
            },
            isFBMS: function() {
                var a;
                a = (a = c()) == null ? void 0 : a.getMpd();
                return Boolean(a == null ? void 0 : a.getCustomField("isFBMS"))
            },
            isFBWasLive: function() {
                var a;
                a = (a = c()) == null ? void 0 : a.getMpd();
                return Boolean(a == null ? void 0 : a.getCustomField("isFBWasLive"))
            },
            isPredictiveDash: function() {
                var a;
                a = (a = (a = c()) == null ? void 0 : (a = a.getMpd()) == null ? void 0 : a.getVideoRepresentations()[0]) != null ? a : null;
                return a !== null && a.canPredict()
            },
            setDimensions: function(a) {},
            setEnableLiveheadCatchup: function(a) {
                var b = c();
                b != null && b.setEnableLiveheadCatchup(a)
            },
            setUserSelectedVideoQuality: function(a) {
                var b = c();
                b != null && k(b, a)
            }
        };
        return a
    }
}
), null);
__d("oz-player/networks/createNetworkError", ["oz-player/utils/OzError"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e, f) {
        return new (b("oz-player/utils/OzError"))({
            type: "OZ_NETWORK",
            description: f,
            extra: {
                originalError: a,
                code: c.toString(),
                headers: d,
                url: e
            }
        })
    }
}
), null);
__d("OzActiveActiveFailoverNetworkRequestStreamHandler", ["oz-player/networks/createNetworkError"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.onResponse = function(a, b) {
            var c = a.headers;
            c && c.has("x-fb-video-replica") && this.$1(a, b);
            return null
        }
        ;
        b.onError = function(a, b) {
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("OzCustomParsers", [], (function(a, b, c, d, e, f) {
    f.createOzCustomParser = a;
    function a() {
        return new Map([["fbProjection", function(a) {
            try {
                return a.Period[0].AdaptationSet[0].$.FBProjection || null
            } catch (a) {
                return null
            }
        }
        ], ["hasInbandCaptionsFromAccessibility", function(a) {
            a = a.Period[0];
            a = a && a.AdaptationSet[0].Accessibility;
            return a && a[0] ? a[0].$.schemeIdUri === "urn:scte:dash:cc:cea-608:2015" : !1
        }
        ], ["hasInbandCaptionsFromUsingASRCaptions", function(a) {
            a = Number.parseInt(a.$.usingASRCaptions, 0);
            return !isNaN(a) && a != 0
        }
        ], ["hasInbandCaptionsFromIsUsingAsrCaptionsEmployeeDogfooding", function(a) {
            a = Number.parseInt(a.$.isUsingAsrCaptionsEmployeeDogfooding, 0);
            return !isNaN(a) && a != 0
        }
        ], ["isLiveTemplated", function(a) {
            return a.$.FBIsLiveTemplated === "true"
        }
        ], ["isFBMS", function(a) {
            return a.$.FBMS === "true"
        }
        ], ["isFBWasLive", function(a) {
            return a.$.FBWasLive === "true"
        }
        ], ["loapStreamType", function(a) {
            return a.$.loapStreamType ? parseInt(a.$.loapStreamType, 10) : 0
        }
        ], ["fbManifestIdentifier", function(a) {
            return (a = a.$.FBManifestIdentifier) != null ? a : ""
        }
        ]])
    }
}
), null);
__d("oz-player/shims/OzURI", ["requireCond", "cr:1615801"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615801");
    e.exports = a
}
), null);
__d("OzCustomRepresentationParsers", ["oz-player/shims/OzURI"], (function(a, b, c, d, e, f) {
    f.createOzCustomRepresentationParsers = a;
    function a(a) {
        var c = a.ozConfig
          , d = a.startTimestamp;
        a = {
            timescale: function(a) {
                a = a.SegmentTemplate;
                if (a && a.length > 0) {
                    a = a[0].$;
                    if (a)
                        return Number.parseInt(a.timescale, 0) || null
                }
                return null
            }
        };
        var e = c.getNumber("mos_upper_threshold", 0)
          , f = c.getNumber("mos_lower_threshold", 0);
        (e > 0 || f > 0) && (a.playbackResolutionMos = function(a) {
            try {
                return a.$.FBPlaybackResolutionMos
            } catch (a) {
                return null
            }
        }
        );
        a.qualityLabel = function(a) {
            try {
                return a.$.FBQualityLabel
            } catch (a) {
                return null
            }
        }
        ;
        c.getBool("parse_first_segment", !1) && (a.firstSegmentParser = function(a) {
            if (d != null && d > 0)
                return null;
            try {
                var c = a.SegmentBase[0].$.FBFirstSegmentRange.split("-").map(Number)
                  , e = {
                    startByte: c[0],
                    endByte: c[1]
                }
                  , f = new (b("oz-player/shims/OzURI"))(a.BaseURL[0]._);
                return {
                    getURI: function() {
                        return f
                    },
                    getByteRange: function() {
                        return e
                    },
                    getTimeRange: function() {
                        return {
                            startTime: 0,
                            endTime: 2
                        }
                    },
                    getSequenceNumber: function() {
                        return null
                    }
                }
            } catch (a) {
                return null
            }
        }
        );
        return a
    }
}
), null);
__d("OzDashPrefetchCache", ["VideoDashPrefetchCache"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.hasCacheValue = function(a) {
            return b("VideoDashPrefetchCache").hasCacheValue(a)
        }
        ;
        c.getCacheValue = function(a) {
            return b("VideoDashPrefetchCache").getCacheValue(a)
        }
        ;
        c.getCachedRepresentations = function(a) {
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/shims/ozvariant", ["requireCond", "cr:1615806"], (function(a, b, c, d, e, f) {
    a = b("cr:1615806");
    e.exports = a
}
), null);
__d("oz-player/utils/OzNumericalHelper", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.equalTo = h;
    f.greaterThan = i;
    f.lessThan = j;
    f.lessThanOrEqual = a;
    f.greaterThanOrEqual = b;
    var g = 1e-5;
    function h(a, b, c) {
        c === void 0 && (c = g);
        return Math.abs(b - a) <= c
    }
    function i(a, b, c) {
        c === void 0 && (c = g);
        return a > b && !h(a, b, c)
    }
    function j(a, b, c) {
        c === void 0 && (c = g);
        return a < b && !h(a, b, c)
    }
    function a(a, b, c) {
        c === void 0 && (c = g);
        return j(a, b, c) || h(a, b, c)
    }
    function b(a, b, c) {
        c === void 0 && (c = g);
        return i(a, b, c) || h(a, b, c)
    }
}
), null);
__d("oz-player/utils/OzNumericalRangeUtil", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = .01;
    function h(a, b) {
        b = b.rangeEnd;
        return b === null || b === void 0 ? !1 : Math.abs(a.rangeStart - b) > g && a.rangeStart > b
    }
    function i(a, b) {
        a = a.rangeEnd;
        b = b.rangeEnd;
        if (a === null || a === void 0)
            return !0;
        return b === null || b === void 0 ? !1 : Math.abs(a - b) > g && a > b
    }
    function j(a, b) {
        b = b.rangeEnd;
        return b === null || b === void 0 ? !1 : Math.abs(a - b) > g && a > b
    }
    function k(a, b) {
        return a > b - g
    }
    a = function() {
        function a() {}
        var b = a.prototype;
        b.mergeSortedRanges = function(a) {
            if (!a.length)
                return [];
            var b = []
              , c = a[0];
            b.push(c);
            for (var d = 1; d < a.length; d++) {
                var e = a[d];
                if (!i(e, c))
                    continue;
                else
                    h(e, c) ? (c = {
                        rangeStart: e.rangeStart,
                        rangeEnd: e.rangeEnd
                    },
                    b.push(c)) : c.rangeEnd = e.rangeEnd
            }
            return b
        }
        ;
        b.diffSortedRanges = function(a, b) {
            return a.reduceRight(function(a, c) {
                j(c.rangeStart, b) || j(b.rangeStart, c) ? a.push(c) : (b.rangeEnd != null && (c.rangeEnd == null || j(c.rangeEnd, b)) && a.push({
                    rangeStart: b.rangeEnd,
                    rangeEnd: c.rangeEnd
                }),
                k(b.rangeStart, c.rangeStart) && a.push({
                    rangeStart: c.rangeStart,
                    rangeEnd: b.rangeStart
                }));
                return a
            }, []).filter(function(a) {
                return a.rangeEnd == null || a.rangeStart < a.rangeEnd
            }).reverse()
        }
        ;
        b.findCurrentRangeIndex = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = d.rangeStart;
                if (k(a, e) && !j(a, d))
                    return c
            }
            return -1
        }
        ;
        b.findNextRangeIndex = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d = d.rangeStart;
                if (!k(a, d))
                    return c
            }
            return -1
        }
        ;
        b.findDiffCoveredByRanges = function(a, b, c) {
            return a >= b ? 0 : c.reduceRight(function(c, d) {
                var e = d.rangeStart;
                d = d.rangeEnd;
                if (b < e || d != null && a > d)
                    return c;
                else if (d == null || b <= d)
                    return Math.min(b - e, b - a) + c;
                else if (a >= e)
                    return Math.min(d - a, b - a) + c;
                else
                    return d - e + c
            }, 0)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/SegmentTemplateSegmentsContainer", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzURI", "oz-player/shims/ozvariant", "oz-player/utils/OzError", "oz-player/utils/OzNumericalHelper", "oz-player/utils/OzNumericalRangeUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1e-4;
    a = function() {
        function a(a, c, d, e, f) {
            f === void 0 && (f = !1),
            this.$6 = new (b("oz-player/shims/OzEventEmitter"))(),
            this.$9 = null,
            this.$7 = a,
            this.$1 = c,
            this.$2 = d,
            this.$3 = e,
            this.$4 = this.$10(this.$3),
            this.$5 = f,
            this.$8 = this.$7.getNumber("live_numerical_error_epsilon")
        }
        var c = a.prototype;
        c.getSegmentByTime = function(a) {
            a = this.$7.getBool("live_query_time_in_range") ? this.$11(a) : a;
            a = a * this.$2;
            var c = null;
            for (var d = this.$3.length - 1; d >= 0; d--) {
                var e = this.$3[d];
                if (b("oz-player/utils/OzNumericalHelper").lessThanOrEqual(e.t + e.d * (e.r + 1), a, this.$8))
                    break;
                c = e
            }
            if (c === null)
                return null;
            if (this.$7.getBool("live_no_segment_when_playhead_is_before_first_segment") && b("oz-player/utils/OzNumericalHelper").greaterThan(c.t, a, this.$8))
                return null;
            e = Math.max(0, Math.floor((a - c.t + this.$8) / c.d));
            return this.$12(c, e)
        }
        ;
        c.getSegment = function(a) {
            var b = 0;
            a = a;
            while (a >= 0 && b < this.$3.length) {
                var c = this.$3[b];
                c = c.r;
                c = c + 1;
                if (a >= c) {
                    a -= c;
                    b++;
                    continue
                }
                break
            }
            c = this.$3[b];
            return !c ? null : this.$12(c, a)
        }
        ;
        c.getSegmentAfter = function(a) {
            a = a.getTimeRange().endTime;
            return this.getSegmentByTime(a)
        }
        ;
        c.getPredictedSegmentAfter = function(a) {
            return null
        }
        ;
        c.canPredict = function() {
            return !1
        }
        ;
        c.isEndingSegment = function(a) {
            if (!this.$3 || !this.$3.length || !this.$5)
                return !1;
            var b = this.$3[this.$3.length - 1]
              , c = b.r;
            b = this.$12(b, c);
            return Math.abs(b.getTimeRange().startTime - a.getTimeRange().startTime) + Math.abs(b.getTimeRange().endTime - a.getTimeRange().endTime) < g
        }
        ;
        c.updateWith = function(c) {
            c instanceof a || b("oz-player/shims/ozvariant")(0, 646),
            this.$5 = c.$5,
            this.$13(c.$3),
            this.$14(c.$3),
            this.$6.emit("segment_updated")
        }
        ;
        c.getTimeRanges = function() {
            return this.$9 ? this.$15(this.$4, this.$9) : this.$4
        }
        ;
        c.blockTimeRange = function(a) {
            this.$9 = a
        }
        ;
        c.$15 = function(a, c) {
            return new (b("oz-player/utils/OzNumericalRangeUtil"))().diffSortedRanges(a.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            }), {
                rangeStart: c.startTime,
                rangeEnd: c.endTime
            }).map(function(a) {
                return {
                    startTime: a.rangeStart,
                    endTime: a.rangeEnd === null || a.rangeEnd === void 0 ? Infinity : a.rangeEnd
                }
            })
        }
        ;
        c.addUpdateListener = function(a) {
            return this.$6.addListener("segment_updated", a)
        }
        ;
        c.$11 = function(a) {
            var c = a
              , d = new (b("oz-player/utils/OzNumericalRangeUtil"))().findCurrentRangeIndex(a, this.getTimeRanges().map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            }));
            if (d === -1) {
                d = new (b("oz-player/utils/OzNumericalRangeUtil"))().findNextRangeIndex(a, this.getTimeRanges().map(function(a) {
                    return {
                        rangeStart: a.startTime,
                        rangeEnd: a.endTime
                    }
                }));
                d !== -1 && (c = this.getTimeRanges()[d].startTime)
            }
            return c
        }
        ;
        c.$16 = function(a, c) {
            if (a.d !== c.d)
                return !1;
            var d = a.t + a.d * a.r
              , e = c.t + c.d * c.r;
            return b("oz-player/utils/OzNumericalHelper").greaterThanOrEqual(a.t, e, this.$8) || b("oz-player/utils/OzNumericalHelper").greaterThanOrEqual(c.t, d, this.$8) ? !1 : Number.isInteger((a.t - c.t) / a.d)
        }
        ;
        c.$13 = function(a) {
            if (this.$7.getBool("copy_new_manifest")) {
                var c;
                (c = this.$3).splice.apply(c, [0, this.$3.length].concat(a));
                return
            }
            if (this.$7.getBool("use_loose_manifest_updates")) {
                (c = this.$3).splice.apply(c, [this.$3.length, 0].concat(a));
                this.$3.sort(function(a, b) {
                    if (a.t < b.t)
                        return -1;
                    else if (a.t > b.t)
                        return 1;
                    return a.d === b.d ? a.r - b.r : 0
                });
                c = [];
                for (var d = 0, e = d + 1; e < this.$3.length; ) {
                    var f = this.$3[d]
                      , g = this.$3[e];
                    if (f.t === g.t) {
                        if (f.d > g.d)
                            throw new (b("oz-player/utils/OzError"))({
                                type: "OZ_REPRESENTATION_PARSER",
                                description: "Previous segment group duration greater than new.",
                                extra: {
                                    code: "OZ_RP-1"
                                }
                            });
                        f.d = g.d;
                        f.r = Math.max(f.r, g.r);
                        e++;
                        continue
                    } else
                        c.push(this.$3[d]),
                        d = e,
                        e++
                }
                this.$3.length > 0 && c.push(this.$3[this.$3.length - 1]);
                (f = this.$3).splice.apply(f, [0, this.$3.length].concat(c));
                return
            }
            g = this.$3.length - 1;
            d = a.length - 1;
            e = g;
            f = d;
            c = JSON.stringify(this.$3);
            while (g >= 0 && d >= 0) {
                var h = this.$3[g]
                  , i = a[d];
                if (b("oz-player/utils/OzNumericalHelper").equalTo(h.t, i.t, this.$8)) {
                    var j = g === e || d === f
                      , k = j && (g !== e && i.r > h.r || d !== f && h.r > i.r);
                    j = !j && h.r !== i.r || k;
                    if (j)
                        throw new (b("oz-player/utils/OzError"))({
                            type: "OZ_REPRESENTATION_PARSER",
                            description: 'Segment group "R" field mismatch. Old groups: ' + c + "\n            , new groups: " + JSON.stringify(a),
                            extra: {
                                code: "OZ_RP-2"
                            }
                        });
                    if (this.$7.getBool("throw_on_non_zero_r_d_mismatch") && h.r > 0 && h.d !== i.d)
                        throw new (b("oz-player/utils/OzError"))({
                            type: "OZ_REPRESENTATION_PARSER",
                            description: "Duration mismatch between non-zero repeat tag and new.",
                            extra: {
                                code: "OZ_RP-3"
                            }
                        });
                    h.r = Math.max(h.r, i.r);
                    if (this.$7.getBool("fix_template_duration_artifact_in_manifest")) {
                        if (h.d > i.d)
                            throw new (b("oz-player/utils/OzError"))({
                                type: "OZ_REPRESENTATION_PARSER",
                                description: "Previous segment group duration greater than new.",
                                extra: {
                                    code: "OZ_RP-4"
                                }
                            });
                        h.d = i.d
                    }
                    g--;
                    d--
                } else if (b("oz-player/utils/OzNumericalHelper").greaterThan(i.t, h.t, this.$8))
                    this.$3.splice(g + 1, 0, i),
                    d--;
                else {
                    if (this.$16(h, i))
                        throw new (b("oz-player/utils/OzError"))({
                            type: "OZ_REPRESENTATION_PARSER",
                            description: "Segment group misalinged",
                            extra: {
                                code: "OZ_RP-5"
                            }
                        });
                    g--
                }
            }
            if (d >= 0) {
                (k = this.$3).unshift.apply(k, a.slice(0, d + 1))
            }
        }
        ;
        c.$14 = function(a) {
            a = this.$10(a);
            a = new (b("oz-player/utils/OzNumericalRangeUtil"))().mergeSortedRanges(this.$4.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            }).concat(a.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            })));
            this.$4 = a.map(function(a) {
                return {
                    startTime: a.rangeStart,
                    endTime: a.rangeEnd === null || a.rangeEnd === void 0 ? Infinity : a.rangeEnd
                }
            })
        }
        ;
        c.$10 = function(a) {
            var c = this;
            a = new (b("oz-player/utils/OzNumericalRangeUtil"))();
            a = a.mergeSortedRanges(this.$3.map(function(a) {
                var b = c.$12(a, 0).getTimeRange().startTime;
                a = c.$12(a, a.r).getTimeRange().endTime;
                return {
                    rangeStart: b,
                    rangeEnd: a
                }
            }));
            return a.map(function(a) {
                var b = a.rangeStart;
                a = a.rangeEnd;
                a = a === null || a === void 0 ? Infinity : a;
                return {
                    startTime: b,
                    endTime: a
                }
            })
        }
        ;
        c.$12 = function(a, c) {
            var d = this;
            c === void 0 && (c = 0);
            var e = a.t
              , f = a.d
              , g = e + f * c
              , h = this.$7.getBool("use_sc_timebased_segments")
              , i = this.$7.getBool("use_scf_timebased_segments")
              , j = this.$7.getBool("touch_cb_key");
            return {
                getURI: function() {
                    var a = d.$1.replace("$Time$", g.toString());
                    a = new (b("oz-player/shims/OzURI"))(a);
                    h && a.addQueryData("_nc_sc", 1);
                    i && a.addQueryData("_nc_scf", 1);
                    var c = a.getQueryData().cb;
                    j && c != null && a.addQueryData("cb", c + "_oz");
                    return a
                },
                getTimeRange: function() {
                    return {
                        startTime: g / d.$2,
                        endTime: (g + f) / d.$2
                    }
                },
                getByteRange: function() {
                    return null
                },
                getSequenceNumber: function() {
                    return null
                }
            }
        }
        ;
        c.getSegmentGroups = function() {
            return this.$3
        }
        ;
        c.getEndingSegment = function() {
            if (this.$3.length == 0)
                return null;
            var a = this.$3[this.$3.length - 1]
              , b = a.r;
            return this.$12(a, b)
        }
        ;
        c.forceParseIfNotParsed = function() {}
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("PredictedSegmentTemplateSegmentsContainer", ["oz-player/manifests/SegmentTemplateSegmentsContainer", "oz-player/shims/OzURI", "oz-player/shims/ozvariant", "oz-player/utils/OzNumericalHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/ozvariant");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d, e, f, g, h) {
            h === void 0 && (h = !1);
            c = a.call(this, b, c, d, e, h) || this;
            c.$PredictedSegmentTemplateSegmentsContainer6 = h;
            c.$PredictedSegmentTemplateSegmentsContainer7 = e;
            c.$PredictedSegmentTemplateSegmentsContainer5 = b;
            c.$PredictedSegmentTemplateSegmentsContainer3 = d;
            c.$PredictedSegmentTemplateSegmentsContainer1 = f;
            c.$PredictedSegmentTemplateSegmentsContainer2 = g;
            c.$PredictedSegmentTemplateSegmentsContainer4 = b.getNumber("live_numerical_error_epsilon");
            return c
        }
        var d = c.prototype;
        d.$PredictedSegmentTemplateSegmentsContainer8 = function(a, c, d) {
            var e = this.$PredictedSegmentTemplateSegmentsContainer1.replace("$Number$", d.toString())
              , f = this.$PredictedSegmentTemplateSegmentsContainer5.getBool("touch_cb_key");
            return {
                getURI: function() {
                    var a = new (b("oz-player/shims/OzURI"))(e)
                      , c = a.getQueryData().cb;
                    f && c != null && a.addQueryData("cb", c + "_oz");
                    return a
                },
                getTimeRange: function() {
                    return {
                        startTime: a,
                        endTime: c
                    }
                },
                getByteRange: function() {
                    return null
                },
                getSequenceNumber: function() {
                    return d
                }
            }
        }
        ;
        d.updateWith = function(b) {
            b instanceof c || g(0, 646),
            this.$PredictedSegmentTemplateSegmentsContainer2 = b.$PredictedSegmentTemplateSegmentsContainer2,
            a.prototype.updateWith.call(this, b),
            this.$PredictedSegmentTemplateSegmentsContainer7 = b.$PredictedSegmentTemplateSegmentsContainer7,
            this.$PredictedSegmentTemplateSegmentsContainer6 = b.$PredictedSegmentTemplateSegmentsContainer6
        }
        ;
        d.getSegmentByTime = function(a) {
            return this.$PredictedSegmentTemplateSegmentsContainer9(a)
        }
        ;
        d.getPredictedSegmentAfter = function(a) {
            return a != null && a.getSequenceNumber() != null && this.canPredict() ? this.$PredictedSegmentTemplateSegmentsContainer8(0, 0, a.getSequenceNumber() + 1) : null
        }
        ;
        d.canPredict = function() {
            var a = this.$PredictedSegmentTemplateSegmentsContainer5.getLegacyConfig().getNumber("num_predictive_segments", 0);
            return a > 0
        }
        ;
        d.$PredictedSegmentTemplateSegmentsContainer9 = function(a) {
            var c = null;
            a = a * this.$PredictedSegmentTemplateSegmentsContainer3;
            var d = 0;
            for (var e = 0; this.$PredictedSegmentTemplateSegmentsContainer7.length - 1 - e >= 0; e++) {
                var f = this.$PredictedSegmentTemplateSegmentsContainer7[this.$PredictedSegmentTemplateSegmentsContainer7.length - 1 - e];
                f.r == 0 || g(0, 18769);
                if (b("oz-player/utils/OzNumericalHelper").lessThanOrEqual(f.t + f.d * (f.r + 1), a, this.$PredictedSegmentTemplateSegmentsContainer4))
                    break;
                c = f;
                d = e
            }
            if (c === null)
                return null;
            else
                return this.$PredictedSegmentTemplateSegmentsContainer8(c.t / this.$PredictedSegmentTemplateSegmentsContainer3, (c.t + c.d) / this.$PredictedSegmentTemplateSegmentsContainer3, this.$PredictedSegmentTemplateSegmentsContainer2 - d)
        }
        ;
        d.isEndingSegment = function(b) {
            if (!this.$PredictedSegmentTemplateSegmentsContainer6)
                return !1;
            var c = b.getSequenceNumber();
            return c != null ? c >= this.$PredictedSegmentTemplateSegmentsContainer2 : a.prototype.isEndingSegment.call(this, b)
        }
        ;
        d.getEndingSegment = function() {
            if (this.$PredictedSegmentTemplateSegmentsContainer7.length == 0)
                return null;
            var a = this.$PredictedSegmentTemplateSegmentsContainer7[this.$PredictedSegmentTemplateSegmentsContainer7.length - 1];
            return this.$PredictedSegmentTemplateSegmentsContainer8(a.t / this.$PredictedSegmentTemplateSegmentsContainer3, (a.t + a.d) / this.$PredictedSegmentTemplateSegmentsContainer3, this.$PredictedSegmentTemplateSegmentsContainer2)
        }
        ;
        return c
    }(b("oz-player/manifests/SegmentTemplateSegmentsContainer"));
    e.exports = a
}
), null);
__d("oz-player/utils/OzUrlHelper", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.joinRelativeUrlPaths = a;
    f.joinUrlPaths = b;
    f._isAbsoluteUrl = c;
    function g(a) {
        var b = a.lastIndexOf("/")
          , c = a.lastIndexOf("://");
        b > c + 2 && (a = a.substring(0, b + 1));
        return a
    }
    function h(a) {
        a = g(a);
        return a.endsWith("/") ? g(a.substring(0, a.length - 1)) : a
    }
    function i(a, b) {
        a = g(a);
        while (b.length)
            if (b.startsWith("./"))
                b = b.substring(2);
            else if (b.startsWith("../"))
                b = b.substring(3),
                a = h(a),
                a.endsWith("/") && (a = a.substring(0, a.length - 1));
            else if (b.startsWith(".."))
                b = b.substring(2),
                a = h(a);
            else if (b.startsWith("."))
                b = b.substring(1);
            else
                break;
        b && b.length && (a.endsWith("/") || (a += "/"),
        a += b);
        return a
    }
    function a() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
        if (!b || !b.length)
            return "";
        if (b.length === 1)
            return b[0];
        var d = b.shift();
        while (b.length > 0)
            d = i(d, b.shift());
        return d
    }
    function b(a, b) {
        return this._isAbsoluteUrl(b) ? b : this.joinRelativeUrlPaths(a, b)
    }
    function c(a) {
        var b = /^https?:\/\//i;
        return b.test(a)
    }
}
), null);
__d("oz-player/parsers/OzDefaultSegmentTimelineParser", ["oz-player/manifests/SegmentTemplateSegmentsContainer", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        a.parseSegments = function(a, b) {
            a = [];
            b.SegmentTimeline[0].S && (a = b.SegmentTimeline[0].S.map(function(a) {
                return {
                    t: Number.parseInt(a.$.t, 10),
                    d: Number.parseInt(a.$.d, 10),
                    r: Number.parseInt(a.$.r || "0", 10)
                }
            }));
            return a
        }
        ;
        var c = a.prototype;
        c.parseSegmentsContainer = function(c, d, e) {
            return new (b("oz-player/manifests/SegmentTemplateSegmentsContainer"))(c,b("oz-player/utils/OzUrlHelper").joinUrlPaths(d.baseUrl, e.$.media),Number.parseInt(e.$.timescale, 10),a.parseSegments(c, e),d.isStaticMpd)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("OzPredictedSegmentTimelineParser", ["PredictedSegmentTemplateSegmentsContainer", "oz-player/manifests/SegmentTemplateSegmentsContainer", "oz-player/parsers/OzDefaultSegmentTimelineParser", "oz-player/shims/OzURI", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.parseSegmentsContainer = function(a, c, d) {
            var e;
            if (d.SegmentTimeline[0].$.FBPredictedMedia) {
                e = b("oz-player/utils/OzUrlHelper").joinUrlPaths(c.baseUrl, d.SegmentTimeline[0].$.FBPredictedMedia);
                var f = new (b("oz-player/shims/OzURI"))(e);
                f = f.addQueryData("_nc_sc", 1);
                e = f.toString()
            }
            var g;
            d.SegmentTimeline[0].$.FBPredictedMediaEndNumber && (g = Number.parseInt(d.SegmentTimeline[0].$.FBPredictedMediaEndNumber, 0));
            f = b("oz-player/parsers/OzDefaultSegmentTimelineParser").parseSegments(a, d);
            return !c.isTemplatedMpd && e != null && g != null ? new (b("PredictedSegmentTemplateSegmentsContainer"))(a,b("oz-player/utils/OzUrlHelper").joinUrlPaths(c.baseUrl, d.$.media),Number.parseInt(d.$.timescale, 10),f,e,g,c.isStaticMpd) : new (b("oz-player/manifests/SegmentTemplateSegmentsContainer"))(a,b("oz-player/utils/OzUrlHelper").joinUrlPaths(c.baseUrl, d.$.media),Number.parseInt(d.$.timescale, 10),f,c.isStaticMpd)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("OzVideoLiveTraceNetworkRequestStreamHandler", ["oz-player/networks/OzTransformStream", "oz-player/utils/OzResourceTimingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.onResponse = function(a, c) {
            var d = this
              , e = a.headers;
            if (!this.$1)
                return null;
            a = new (b("oz-player/networks/OzTransformStream"))();
            a.addListener("writableClose", function() {
                var a = {}
                  , f = b("oz-player/utils/OzResourceTimingUtils").getLatestResourceTimingEntry(c);
                f && (a.lat = Math.round(f.responseStart - f.requestStart).toString());
                d.$1 && e && d.$1(e, a)
            });
            return a
        }
        ;
        c.onError = function(a, b) {
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("TimeRanges", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = [],
            this.$1 = a
        }
        var b = a.prototype;
        b.start = function(a) {
            this.$1[a] || g(0, 2205);
            return this.$1[a].startTime
        }
        ;
        b.end = function(a) {
            this.$1[a] || g(0, 2205);
            return this.$1[a].endTime
        }
        ;
        b.length = function() {
            return this.$1.length
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/drm/OzDrmUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        return Uint8Array.from(window.atob(a), function(a) {
            return a.charCodeAt(0)
        })
    }
    ;
    f.base64ToUint8Array = a;
    b = function(a) {
        return window.btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
    }
    ;
    f.arrayBufferToBase64 = b
}
), null);
__d("OzWidevineDrmProvider", ["URI", "oz-player/drm/OzDrmUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function() {
        function a(a, c, d, e, f) {
            this.$2 = [];
            this.$4 = !0;
            this.$5 = !1;
            f !== void 0 && f !== null && f !== "" && (this.$1 = b("oz-player/drm/OzDrmUtils").base64ToUint8Array(f));
            if (c !== null && c !== void 0 && e !== null && e !== void 0) {
                f = new (g || (g = b("URI")))(c);
                f.addQueryData("access_token", e);
                this.$3 = f.toString();
                this.$5 = !0;
                this.$4 = !1
            } else {
                c = d["0"];
                if (c === void 0 || c === null) {
                    c = "/video/drm/getlicense";
                    e = new (g || (g = b("URI")))(c);
                    e.addQueryData("video_id", a);
                    this.$3 = e.toString()
                } else
                    this.$3 = c
            }
        }
        var c = a.prototype;
        c.getKeySystem = function() {
            return "com.widevine.alpha"
        }
        ;
        c.getSchemeId = function() {
            return "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
        }
        ;
        c.getInitDatas = function() {
            return this.$2
        }
        ;
        c.setInitDatas = function(a) {
            this.$2 = a
        }
        ;
        c.getRequireDistinctiveIdentifier = function() {
            return "optional"
        }
        ;
        c.getRequirePersistentState = function() {
            return "optional"
        }
        ;
        c.getInitDataTypes = function() {
            return
        }
        ;
        c.getDrmSessionTypes = function() {
            return ["temporary"]
        }
        ;
        c.getAudioRobustness = function() {
            return ""
        }
        ;
        c.getVideoRobustness = function() {
            return ""
        }
        ;
        c.getServerCertificate = function() {
            return this.$1
        }
        ;
        c.getLicenseRequestInfo = function(a) {
            var c = {
                url: this.$3,
                method: "POST",
                body: "",
                headers: {}
            };
            this.$4 && (c.credentials = "include");
            a = b("oz-player/drm/OzDrmUtils").arrayBufferToBase64(a);
            if (this.$5) {
                var d = {
                    request: a
                };
                c.body = JSON.stringify(d);
                c.headers["Content-Type"] = "application/json"
            } else
                c.body = a,
                c.headers["Content-Type"] = "application/text";
            return c
        }
        ;
        c.parseLicenseResponse = function(a) {
            a = String.fromCharCode.apply(null, a);
            var c;
            try {
                c = JSON.parse(a)
            } catch (a) {
                c = void 0
            }
            var d;
            if (c !== void 0 && c.data !== void 0 && c.data.length === 1) {
                c = c.data[0];
                c.error !== null && c.error !== void 0 || (d = c.license)
            } else
                d = a;
            return d !== void 0 && d !== null && d !== "" ? b("oz-player/drm/OzDrmUtils").base64ToUint8Array(d) : null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/shims/OzDOMEventListener", ["requireCond", "cr:1615796"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615796");
    e.exports = a
}
), null);
__d("oz-player/shims/OzSubscriptionsHandler", ["requireCond", "cr:1615800"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615800");
    e.exports = a
}
), null);
__d("oz-player/shims/ozThrottle", ["requireCond", "cr:1615805"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615805");
    e.exports = a
}
), null);
__d("oz-player/utils/OzBufferingUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.hasEnoughBuffer = a;
    f.hasBufferedToOrReachedEnd = h;
    f.getBufferAheadFromPlaybackStates = b;
    f.getBufferAheadFromCurrentTime = i;
    c = .1;
    f.BUFFER_UNDERFLOW_THRESHOLD = c;
    d = 1;
    f.BUFFER_OVERFLOW_THRESHOLD = d;
    var g = .2;
    f.BUFFER_FUDGE_FACTOR = g;
    function a(a, b, c, d) {
        if (h(a, c, d))
            return !0;
        c = a.currentTime;
        d = 0;
        for (var e = 0; e < a.buffered.length; e++) {
            var f = a.buffered.start(e)
              , g = a.buffered.end(e);
            if (f <= c && g >= c) {
                d = g;
                break
            }
        }
        return d - c > b
    }
    function h(a, b, c) {
        var d = a.currentTime
          , e = 0;
        for (var f = 0; f < a.buffered.length; f++) {
            var h = a.buffered.start(f)
              , i = a.buffered.end(f);
            if (h <= d && i >= d) {
                e = i;
                break
            }
        }
        return (!c.getBool("reach_end_only_when_video_ended", !1) || a.ended) && (Math.abs(e - b) <= g || Math.abs(d - b) <= g)
    }
    function b(a, b) {
        a = a ? a.getSourceBufferState() : null;
        if (!a)
            return 0;
        b = b.getCurrentTime();
        return i(b, a.getBufferedRanges())
    }
    function i(a, b) {
        var c = null;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e.startTime <= a && e.endTime > a && (c = e)
        }
        return !c ? 0 : c.endTime - a
    }
}
), null);
__d("oz-player/strategies/OzBufferingDetectorStates", ["oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var c = a.prototype;
        c.handleEvent = function(a, c, d) {
            if (a.type === "pause" || c.paused)
                return new h(this.$1);
            a = this.$2 instanceof i ? this.$1.getNumber("in_play_buffer_overflow_target", b("oz-player/utils/OzBufferingUtils").BUFFER_OVERFLOW_THRESHOLD) : this.$1.getNumber("start_buffer_underflow_target", b("oz-player/utils/OzBufferingUtils").BUFFER_OVERFLOW_THRESHOLD);
            return b("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(c, a, d, this.$1) ? new i(this.$1) : this
        }
        ;
        return a
    }();
    f.OzVideoBufferingState = g;
    var h = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.handleEvent = function(a, c, d) {
            if (a.type === "play" || a.type === "playing" || !c.paused) {
                a = this.$1.getNumber("start_buffer_underflow_target", b("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD);
                return b("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(c, a, d, this.$1) ? new i(this.$1) : new g(this.$1,this)
            }
            return this
        }
        ;
        return a
    }();
    f.OzVideoPausedState = h;
    var i = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.handleEvent = function(a, c, d) {
            if (a.type === "pause" || c.paused)
                return new h(this.$1);
            var e = this.$1.getNumber("in_play_buffer_underflow_target", b("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD);
            return this.$1.getBool("buffer_when_waiting", !1) && a.type === "waiting" || !b("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(c, e, d, this.$1) ? new g(this.$1,this) : this
        }
        ;
        return a
    }();
    f.OzVideoPlayingState = i
}
), null);
__d("oz-player/utils/OzDomEventCapturer", ["oz-player/shims/OzDOMEventListener"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/OzDOMEventListener").captureDOMEvent
      , h = b("oz-player/shims/OzDOMEventListener").suppressDOMEvent;
    a = function() {
        function a(a) {
            this.$2 = new Map(),
            this.$1 = a
        }
        var b = a.prototype;
        b.capture = function(a, b) {
            var c = this
              , d = this.$1.parentNode;
            return !d ? {
                remove: function() {}
            } : g(d, a, function(a) {
                if (a.target !== c.$1)
                    return;
                var d = b(a);
                d && c.$3(a)
            })
        }
        ;
        b.dispatchIfSuppressed = function(a) {
            var b = this.$2.get(a);
            b && this.$1.dispatchEvent(b);
            this.$2["delete"](a)
        }
        ;
        b.$3 = function(a) {
            h(a),
            this.$2.set(a.type, a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzBufferingDetector", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/utils/OzBufferingUtils", "oz-player/utils/OzDomEventCapturer", "oz-player/strategies/OzBufferingDetectorStates"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/OzDOMEventListener").listenDOMEvent
      , h = b("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
      , i = b("oz-player/utils/OzBufferingUtils").hasEnoughBuffer
      , j = b("oz-player/strategies/OzBufferingDetectorStates").OzVideoBufferingState
      , k = b("oz-player/strategies/OzBufferingDetectorStates").OzVideoPausedState
      , l = b("oz-player/strategies/OzBufferingDetectorStates").OzVideoPlayingState
      , m = 150;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e) {
            var f;
            f = a.call(this) || this;
            f.$OzBufferingDetector3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            f.$OzBufferingDetector7 = function(a) {
                f.$OzBufferingDetector9(a)
            }
            ;
            f.$OzBufferingDetector8 = function(a) {
                a = f.$OzBufferingDetector9(a)instanceof j;
                return f.$OzBufferingDetector5.getBool("suppress_playing_event_while_buffering", !1) ? a : !1
            }
            ;
            f.$OzBufferingDetector2 = c;
            f.$OzBufferingDetector5 = d;
            f.$OzBufferingDetector6 = e;
            f.$OzBufferingDetector2.paused ? f.$OzBufferingDetector1 = new k(f.$OzBufferingDetector5) : f.$OzBufferingDetector1 = i(f.$OzBufferingDetector2, f.$OzBufferingDetector5.getNumber("in_play_buffer_underflow_target", h), f.$OzBufferingDetector6(), f.$OzBufferingDetector5) ? new l(f.$OzBufferingDetector5) : new j(f.$OzBufferingDetector5,null);
            f.$OzBufferingDetector4 = new (b("oz-player/utils/OzDomEventCapturer"))(f.$OzBufferingDetector2);
            f.$OzBufferingDetector3.addSubscriptions(g(f.$OzBufferingDetector2, "pause", f.$OzBufferingDetector7), g(f.$OzBufferingDetector2, "play", f.$OzBufferingDetector7), f.$OzBufferingDetector4.capture("playing", f.$OzBufferingDetector8), g(f.$OzBufferingDetector2, "progress", b("oz-player/shims/ozThrottle")(f.$OzBufferingDetector7, m)), g(f.$OzBufferingDetector2, "timeupdate", b("oz-player/shims/ozThrottle")(f.$OzBufferingDetector7, m)), g(f.$OzBufferingDetector2, "seeked", f.$OzBufferingDetector7), g(f.$OzBufferingDetector2, "seeking", f.$OzBufferingDetector7), g(f.$OzBufferingDetector2, "waiting", f.$OzBufferingDetector7));
            f.$OzBufferingDetector5.getBool("listen_for_canplay_in_buffering_detector", !1) && f.$OzBufferingDetector3.addSubscriptions(g(f.$OzBufferingDetector2, "canplay", f.$OzBufferingDetector7), g(f.$OzBufferingDetector2, "canplaythrough", f.$OzBufferingDetector7));
            return f
        }
        var d = c.prototype;
        d.$OzBufferingDetector9 = function(a) {
            a = this.$OzBufferingDetector1.handleEvent(a, this.$OzBufferingDetector2, this.$OzBufferingDetector6());
            var b = this.$OzBufferingDetector1;
            this.$OzBufferingDetector1 = a;
            var c = a instanceof j
              , d = b instanceof j;
            if (a === b)
                return a;
            if (c) {
                c = b instanceof l ? "in_play" : "start/unpause";
                this.emit("enterBuffering", c)
            } else
                d && this.emit("leaveBuffering");
            a instanceof l && this.$OzBufferingDetector4.dispatchIfSuppressed("playing");
            return a
        }
        ;
        d.destroy = function() {
            this.$OzBufferingDetector3.release()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("VideoPlayerOzImplementationEnginePartsImplUtils", ["OzWidevineDrmProvider", "gkx", "oz-player/strategies/OzBufferingDetector"], (function(a, b, c, d, e, f) {
    "use strict";
    f.checkShouldIncludeCredentials = a;
    f.createOzBufferingDetector = c;
    f.createOzDrmProviders = d;
    f.createOzPerfLoggerProviders = e;
    f.calculateInitialPlaybackPositionForDynamicMpd = h;
    f.calculateLiveheadFallBehindBlockThreshold = i;
    f.calculateLiveheadFallBehindBlockMargin = j;
    var g = /(livestream-)?lookaside\.(facebook|workplace)\.com$/;
    function a(a) {
        return g.test(a.getDomain())
    }
    function c(a, c, d, e, f) {
        if (f.current != null)
            return;
        var g = !0
          , h = function() {
            if (g)
                return !1;
            var a = f.current !== i;
            return a && b("gkx")("1508440") ? !0 : !1
        }
          , i = new (b("oz-player/strategies/OzBufferingDetector"))(a,d,function() {
            var a = e.getCurrentState();
            a = a.controlledState;
            return a.streamEnded ? c.getDuration() : Infinity
        }
        );
        f.current = i;
        g = !1;
        a = function() {
            if (h())
                return;
            if (b("gkx")("1235655"))
                return;
            e.dispatch({
                type: "buffering_begin_requested"
            })
        }
        ;
        d = function() {
            if (h())
                return;
            e.dispatch({
                type: "buffering_end_requested"
            })
        }
        ;
        i.addListener("enterBuffering", a);
        i.addListener("leaveBuffering", d)
    }
    function d(a) {
        var c = a.graphQLVideoDRMInfo;
        a = a.videoFBID;
        var d = [];
        c && a != null && d.push(new (b("OzWidevineDrmProvider"))(a,c.graphApiVideoLicenseUri,c.videoLicenseUriMap,null,null));
        return d
    }
    function e(a) {
        var b = a.VideoPlayerShakaPerformanceLoggerClass
          , c = a.accessToken
          , d = a.getBandwidthEstimate
          , e = a.playbackIsLiveStreaming
          , f = a.playerInstanceCount
          , g = a.playerInstanceKey
          , h = a.playerSuborigin
          , i = a.playerVersion
          , j = a.videoElement;
        a = a.videoFBID;
        if (!b || !b.shouldInitialize())
            return [];
        d = {
            accessToken: c,
            getBandwidthEstimate: d,
            isLive: e,
            isServableViaFbms: !1,
            playerInstanceCount: f,
            playerOrigin: null,
            playerSuborigin: h,
            playerVersion: i,
            representationId: null,
            uniqueID: g,
            video: j,
            videoID: (c = a) != null ? c : ""
        };
        return [new b(d)]
    }
    function h(a, b) {
        return b > 0 ? b / 1e3 * -1 : a.getNumber("live_initial_playback_position", 0)
    }
    function i(a, b, c) {
        return b > 0 && c > 0 ? (b + c) / 1e3 : a.getNumber("livehead_fall_behind_block_threshold", 0)
    }
    function j(a, b) {
        return b > 0 ? b / 2 / 1e3 : a.getNumber("live_time_range_block_margin", 0)
    }
}
), null);
__d("OzMinimumSmallestDimensionRestriction", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.applyRestriction = function(a, b) {
            var c = this;
            if (a.length === 0)
                return [];
            b = a.filter(function(a) {
                var b = a.getWidth();
                a = a.getHeight();
                b = b < a ? b : a;
                return b >= c.$1
            });
            return b.length > 0 ? b : [a[a.length - 1]]
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MosUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getQualityLabel = g;
    f.getMosValue = h;
    f.parsePlaybackMos = a;
    f.filterTracksWithExpensiveMos = b;
    function g(a, b) {
        if (a === 0 || b === 0)
            return 0;
        if (a < b) {
            var c = a;
            a = b;
            b = c
        }
        c = a / b;
        return c > 16 / 9 ? Math.round(a / (16 / 9)) : b
    }
    function h(a, b) {
        var c = null
          , d = null
          , e = null
          , f = null;
        for (var g = 0; g < a.length; g++) {
            var h = a[g].qualityLabel;
            if (h <= b)
                e = a[g].mosValue,
                c = h;
            else {
                f = a[g].mosValue;
                d = h;
                break
            }
        }
        if (c === null && d === null)
            return 0;
        else if (c === null && f !== null)
            return f;
        else if (d === null && e !== null)
            return e;
        else if (f !== null && e !== null && c !== null && d !== null) {
            h = e + (b - c) * (f - e) / (d - c);
            return h < 0 ? 0 : h > 100 ? 100 : h
        }
        return 0
    }
    function a(a) {
        a = a.split(",");
        var b = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split(":");
            if (d.length !== 2)
                return null;
            var e = Number(d[0]);
            d = Number(d[1]);
            if (isNaN(e) || isNaN(d))
                return null;
            b.push({
                qualityLabel: e,
                mosValue: d
            })
        }
        return b
    }
    function b(a, b, c, d, e, f) {
        if (a.length < 2)
            return a;
        var i = a.map(function(a) {
            return {
                track: a,
                mosValue: a.playbackResolutionMos ? h(a.playbackResolutionMos, g(b, c)) : -1
            }
        })
          , j = []
          , k = e;
        for (var l = i.length - 1; l > 0; l--) {
            if (i[l].mosValue === -1 || i[l - 1].mosValue === -1)
                return a;
            var m = i[l].track.bandwidth || -1
              , n = i[l - 1].track.bandwidth || -1;
            if (m === -1 || n === -1)
                return a;
            if (i[l].mosValue < i[l - 1].mosValue && m >= n)
                continue;
            m = i[l - 1].track.bandwidth !== null ? i[l].mosValue - i[l - 1].mosValue : Infinity;
            if (m <= k && i[l].track.bandwidth && d / i[l].track.bandwidth <= f) {
                k -= m;
                continue
            } else
                k = e;
            j.push(i[l].track)
        }
        j.push(i[0].track);
        j.reverse();
        return j
    }
}
), null);
__d("OzMosThresholdRestriction", ["MosUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.mosUpperThreshold;
            a = a.mosLowerThreshold;
            this.$3 = new Map();
            this.$1 = b;
            this.$2 = a
        }
        var c = a.prototype;
        c.$4 = function(a, c) {
            var d = null;
            if (this.$3.get(a))
                d = this.$3.get(a);
            else {
                var e = a.getCustomField("playbackResolutionMos");
                e != null && (d = b("MosUtils").parsePlaybackMos(String(e)),
                d && this.$3.set(a, d))
            }
            return d != null ? b("MosUtils").getMosValue(d, b("MosUtils").getQualityLabel(c.width, c.height)) : null
        }
        ;
        c.$5 = function(a, b) {
            var c = this
              , d = null;
            a.forEach(function(a) {
                a = c.$4(a, b);
                a != null && a > c.$1 && (d == null || d > a) && (d = a)
            });
            return d == null ? a : a.filter(function(a) {
                a = c.$4(a, b);
                return a == null ? !0 : a <= c.$1 || a === d
            })
        }
        ;
        c.$6 = function(a, b) {
            var c = this
              , d = [];
            a.forEach(function(a) {
                var e = c.$4(a, b);
                e != null && e > c.$2 && d.push(a)
            });
            d.length === 0 && d.push(a[a.length - 1]);
            return d
        }
        ;
        c.applyRestriction = function(a, b) {
            if (a.length === 0)
                return [];
            a = a;
            this.$1 > 0 && (a = this.$5(a, b));
            this.$2 > 0 && (a = this.$6(a, b));
            return a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("getOzPlaybackRestrictions", ["OzMinimumSmallestDimensionRestriction", "OzMosThresholdRestriction", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 720
      , h = 2160;
    function a(a, c) {
        var d = [];
        switch (a) {
        case "HD":
            d.push(new (b("OzMinimumSmallestDimensionRestriction"))(g));
            break;
        case "UHD":
            b("gkx")("1488288") && d.push(new (b("OzMinimumSmallestDimensionRestriction"))(h));
            break;
        default:
            break
        }
        a = c.mosUpperThreshold;
        c = c.mosLowerThreshold;
        (a > 0 || c > 0) && d.push(new (b("OzMosThresholdRestriction"))({
            mosUpperThreshold: a,
            mosLowerThreshold: c
        }));
        return d
    }
}
), null);
__d("oz-player/configs/OzPlayerConfigDefaults", [], (function(a, b, c, d, e, f) {
    a = {
        abr_use_download_time: !1,
        allow_queueing_end_of_stream_when_update: !1,
        back_off_pdash_504_retry: !0,
        bandwidth_ignore_on_stream_write_samples: !1,
        bandwidth_use_response_time_adjustment: !1,
        buffer_when_waiting: !1,
        call_end_of_stream_in_quick_starter: !0,
        check_buffer_range_once_for_playhead_update: !1,
        cleanup_video_node_on_destroy: !0,
        clear_buffer_when_switch_representation_initiator_is_user: !0,
        clear_prepended_segments_count_on_append: !0,
        copy_new_manifest: !1,
        detach_media_source_manager: !0,
        disable_audio_scheduler: !1,
        emit_stream_error_event: !0,
        enable_abr_for_first_request: !1,
        enable_adaptation: !0,
        enable_appends_on_wait_update_end_failure: !1,
        enable_network_manager_error: !1,
        enable_quickdashv2: !0,
        estimate_video_bandwidth_only: !0,
        exclude_prefetch_bandwidth_samples: !0,
        fallback_on_append_error: !1,
        fix_abr_default_representation: !0,
        fix_quick_starter_overhead: !0,
        fix_reload_manifest_retry: !1,
        fix_seek_performance: !1,
        fix_source_buffer_error_logging: !1,
        fix_template_duration_artifact_in_manifest: !0,
        handle_mpd_retries_outside_oz_mpd_updater: !1,
        handle_switch_to_unparsed_representation_sidx: !0,
        ignore_time_to_response_start: !1,
        lazy_parse_sidx: !1,
        listen_for_canplay_in_buffering_detector: !0,
        live_audio_ibr: !0,
        live_catch_up_only_when_paused: !1,
        live_disable_mpd_updates_when_paused: !0,
        live_gracefully_handle_mpd_errors: !0,
        live_gracefully_handle_no_network: !0,
        live_no_segment_when_playhead_is_before_first_segment: !0,
        live_playhead_catch_up: !1,
        live_query_time_in_range: !0,
        log_appended_secs: !1,
        maybe_end_stream_if_prepended_segments: !0,
        mpd_update_cancel_current_request_tracker: !1,
        no_new_loop_body_promise_when_stream_ongoing: !0,
        pausable_stream_throws_error_when_aborted: !0,
        pdash_use_pdash_segmentlocator: !1,
        queue_data_with_error_handling: !1,
        reach_end_only_when_video_ended: !1,
        remove_src_attr_on_unload: !0,
        respect_initial_representation_on_setup: !1,
        retry_fetch_on_prefetch_error: !1,
        sbm_recursively_waits_for_update_end: !1,
        sbm_waits_for_update_end: !0,
        seek_ahead_use_native_current_time: !0,
        seek_to_start_quick_starter: !0,
        set_source_buffer_append_window_end: !1,
        skip_videobuffer_gaps: !1,
        stable_buffered_timeranges_in_observedsourcebufferstate: !0,
        stop_manifest_update_when_static: !0,
        suppress_playing_event_while_buffering: !1,
        throw_network_error_during_stream: !1,
        throw_on_non_zero_r_d_mismatch: !0,
        touch_cb_key: !1,
        update_bandwidth_cache_on_sample: !1,
        update_duration_when_init_appended: !0,
        update_live_video_config_on_representation_switch: !1,
        update_media_source_duration: !0,
        use_abr_for_missing_default_representation: !0,
        use_deferred_streaming_task: !0,
        use_loose_manifest_updates: !1,
        use_performance_entry_on_stream_close: !1,
        use_scf_timebased_segments: !1,
        use_scheduler: !0,
        use_sc_timebased_segments: !1,
        use_segment_request_cache: !1,
        use_stream_end_time_in_segment_locator: !1
    };
    b = {
        abr_confidence_threshold: .9,
        abr_eval_buffer_threshold: 0,
        abr_min_bandwidth_samples: 0,
        abr_prevent_down_switch_buffer_threshold: 11,
        abr_restrict_from_index: 0,
        abr_restrict_to_index: 0,
        append_byte_target_without_range: 1e5,
        appends_per_segment: 3,
        auto_seek_playhead_slack: .5,
        bandwidth_boundary_standard_deviation_factor: 1,
        bandwidth_estimator_half_life: 6,
        bandwidth_estimator_outlier_exclusion_factor: 50,
        bandwidth_estimator_std_dev_penalty_factor: 0,
        bandwidth_estimator_variance_penalty_down_factor: 0,
        bandwidth_estimator_variance_penalty_half_life: 0,
        bandwidth_estimator_variance_penalty_up_factor: 0,
        bandwidth_penalty_additional_video_start: 0,
        bandwidth_penalty_per_additional_video: 0,
        bandwidth_response_time_handicap: 0,
        buffer_ahead_target: 22,
        byte_count_per_sample: 2e5,
        default_bandwidth_estimate: 1e6,
        download_time_buffer_delta_penalty_factor: 0,
        initial_manifest_request_retry_count: 0,
        initial_switch_interval: 0,
        in_play_buffer_overflow_target: 1,
        in_play_buffer_underflow_target: .1,
        live_audio_ibr_bandwidth_percentage: .05,
        live_catch_up_fall_behind_threshold: 20,
        live_catch_up_live_head_delta: 6,
        live_max_try_attempts_on_404: 2,
        live_numerical_error_epsilon: 1e-4,
        low_buffer_bandwidth_target_increase_factor: 0,
        low_buffer_bandwidth_target_threshold: 10,
        low_segment_stream_playhead_threshold: 0,
        max_bandwidth_sample_count: 30,
        maximum_bandwidth_sample_bandwidth: 2e6,
        max_start_eme_attempts: 3,
        min_block_time_range_interval_ms: 0,
        min_eval_interval: 100,
        minimum_bandwidth_sample_duration: 30,
        minimum_bytes_to_sample_on_close: 25e3,
        minimum_download_additional_buffer_ms: 0,
        min_switch_interval: 100,
        network_seg_timeout_ms: 0,
        paused_stream_segments_count: 2,
        per_stream_duration_target: 0,
        playhead_nudge_slack: .1,
        pre_start_buffer_ahead_target: 16.924449682236,
        resolution_constraint_factor: 2,
        seconds_to_stream: 10,
        seconds_to_stream_near_bandwidth_boundary: 10,
        seek_ahead_epsilon: .05,
        segments_to_stream: 5,
        segments_to_stream_near_bandwidth_boundary: 5,
        segments_to_stream_under_playhead_threshold: 0,
        start_buffer_underflow_target: .1,
        stream_interrupt_check_mpd_stale_count_threshold: 3,
        tagged_time_range_per_append_throttle: 0,
        timeline_offset_threshold: 10,
        time_to_first_byte_estimate_half_life_ms: 500
    };
    c = {
        bandwidth_cache_key: "bandwidthEstimate",
        network_end_broadcasts_json: '["410"]',
        network_reload_mpd_json: "[]",
        network_retry_intervals_json: '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000, "429": 2000}',
        network_skip_json: "[]"
    };
    e.exports = {
        defaultBools: a,
        defaultNumbers: b,
        defaultStrings: c
    }
}
), null);
__d("oz-player/configs/OzPlayerConfig", ["oz-player/configs/OzPlayerConfigDefaults"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.getBool = function(a) {
            return b("oz-player/configs/OzPlayerConfigDefaults").defaultBools[a]
        }
        ;
        c.getNumber = function(a) {
            return b("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[a]
        }
        ;
        c.getString = function(a) {
            return b("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[a]
        }
        ;
        c.getLegacyConfig = function() {
            return {
                getBool: function(a, c) {
                    return (a = b("oz-player/configs/OzPlayerConfigDefaults").defaultBools[a]) != null ? a : c
                },
                getNumber: function(a, c) {
                    return (a = b("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[a]) != null ? a : c
                },
                getString: function(a, c) {
                    return (a = b("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[a]) != null ? a : c
                }
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/configs/OzConfigUtils", ["oz-player/configs/OzPlayerConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new (b("oz-player/configs/OzPlayerConfig"))();
    a = function(a) {
        return {
            getBool: function(b) {
                return a.getBool(b, g.getBool(b))
            },
            getNumber: function(b) {
                return a.getNumber(b, g.getNumber(b))
            },
            getString: function(b) {
                return a.getString(b, g.getString(b))
            },
            getLegacyConfig: function() {
                return a
            }
        }
    }
    ;
    f.provideConfigWithDefaults = a
}
), null);
__d("VideoPlayerOzImplementationEnginePartsImplFunction", ["CometThrottle", "OzActiveActiveFailoverNetworkRequestStreamHandler", "OzCustomParsers", "OzCustomRepresentationParsers", "OzDashPrefetchCache", "OzPredictedSegmentTimelineParser", "OzVideoLiveTraceNetworkRequestStreamHandler", "TimeRanges", "URI", "VideoPlayerConnectionQuality", "VideoPlayerOzImplementationEnginePartsImplUtils", "getOzPlaybackRestrictions", "gkx", "handleOzManifestFetchErrorEvent", "handleOzStreamErrorEvent", "oz-player/configs/OzConfigUtils", "oz-player/networks/OzBandwidthEstimator"], (function(a, b, c, d, e, f) {
    "use strict";
    f.proceedWithOzPlayerCreation = a;
    var g;
    function a(a) {
        var c = a.OzPlayerClass
          , d = a.callChain
          , e = a.destroyOzPlayerPartsRef
          , f = a.engineDebugAPI
          , h = a.engineExtrasAPI
          , i = a.getCaptionsInfo
          , j = a.getOzQuickStarter
          , k = a.getVideoLiveTrace
          , l = a.handleCaptionsInfoChange
          , m = a.handleFatalImplementationError
          , n = a.initialProps
          , o = a.logger
          , p = a.machine
          , q = a.ozBufferingDetectorRef
          , r = a.ozPlayerRef
          , s = a.playerVersion
          , t = a.resolvedVideoInfo
          , u = a.videoElement;
        a = a.videoElementAPI;
        var v = {
            current: null
        };
        e.current = function(a) {
            var c = q.current;
            c && (q.current = null,
            c.destroy());
            c = r.current;
            c && (f && f.handleOzPlayerChanged(null),
            r.current = null,
            c.destroy(b("gkx")("1435909") ? [].concat(a, ["destroyOzPlayerParts"]).join(":") : null));
            c = v.current;
            c && (v.current = null,
            c())
        }
        ;
        e = t.VideoPlayerShakaPerformanceLoggerClass;
        var w = t.accessToken
          , x = t.experimentationConfig
          , y = t.graphQLVideoDRMInfo
          , z = t.manifestUrl
          , A = t.manifestXmlStringResolved
          , B = t.minQualityPreference;
        t = t.videoFBID;
        j = j();
        var C = Boolean(n.loggingMetaData.coreVideoPlayerMetaData.isLiveStreaming)
          , D = function(a) {
            return h.getEstimatedBandwidth()
        }
          , E = function() {
            x.setContext("connection_quality", b("VideoPlayerConnectionQuality").evaluate(function() {
                return D(C)
            }))
        }
          , F = function() {
            var a = x.getNumber("connection_quality_context_throttle_frequency", 0);
            if (a === 0)
                return null;
            var c = b("CometThrottle")(E, a)
              , d = b("oz-player/networks/OzBandwidthEstimator").addListener("bandwidth_sampled", c);
            return function() {
                d.remove(),
                c.cancel()
            }
        };
        v.current = F();
        F = b("VideoPlayerOzImplementationEnginePartsImplUtils").createOzDrmProviders({
            graphQLVideoDRMInfo: y,
            videoFBID: t
        });
        y = b("VideoPlayerOzImplementationEnginePartsImplUtils").createOzPerfLoggerProviders({
            VideoPlayerShakaPerformanceLoggerClass: e,
            accessToken: w,
            getBandwidthEstimate: D,
            playbackIsLiveStreaming: C,
            playerInstanceCount: n.loggingMetaData.playerImplementationInstanceCountRef.current,
            playerInstanceKey: n.loggingMetaData.instanceKey,
            playerSuborigin: n.loggingMetaData.coreVideoPlayerMetaData.subOrigin,
            playerVersion: s,
            videoElement: u,
            videoFBID: t
        });
        w = [new (b("OzVideoLiveTraceNetworkRequestStreamHandler"))(function(a, b) {
            var c = k();
            c != null && c.handleHeaders(a, b)
        }
        )];
        b("OzActiveActiveFailoverNetworkRequestStreamHandler") && w.push(new (b("OzActiveActiveFailoverNetworkRequestStreamHandler"))(function(a, c) {
            if (b("gkx")("1664503")) {
                var d = r.current
                  , e = a.headers;
                if (d && e) {
                    e = parseInt(e.get("x-fb-video-replica"), 10);
                    o.logVPLEvent({
                        eventType: "replica_switch",
                        logDataOverrides: {
                            error_code: a.status.toString(),
                            error_user_info: JSON.stringify({
                                failover_response_code: a.status.toString(),
                                replica: e,
                                url: c
                            })
                        },
                        state: p.getCurrentState()
                    });
                    a = d.getMpdUrl();
                    c = new (g || (g = b("URI")))(a);
                    c.addQueryData("replica", e);
                    d.updatePlayerRunTimeConfig({
                        manifestUrl: c.toString()
                    })
                }
            }
        }
        ));
        d = {
            config: b("oz-player/configs/OzConfigUtils").provideConfigWithDefaults(x),
            customParsers: b("OzCustomParsers").createOzCustomParser(),
            customRepresentationParsers: b("OzCustomRepresentationParsers").createOzCustomRepresentationParsers({
                ozConfig: x
            }),
            customSegmentTimelineParser: x.getBool("enable_predictive_dash", !1) ? new (b("OzPredictedSegmentTimelineParser"))() : void 0,
            debugCreateInitiator: b("gkx")("1435909") ? [].concat(d, ["proceedWithOzPlayerCreation"]).join(":") : null,
            drmProviders: F,
            getShouldIncludeCredentials: x.getBool("use_oz_credentials_provider", !1) ? b("VideoPlayerOzImplementationEnginePartsImplUtils").checkShouldIncludeCredentials : null,
            getVideoDimensions: function() {
                return p.getCurrentState().controlledState.dimensions
            },
            initialPlaybackPositionForDynamicMpd: b("VideoPlayerOzImplementationEnginePartsImplUtils").calculateInitialPlaybackPositionForDynamicMpd(x, (s = n.initialDesiredLatencyMs) != null ? s : 0),
            initialRepresentationIDs: (t = n.initialRepresentationIds) != null ? t : [],
            liveheadFallBehindBlockMargin: b("VideoPlayerOzImplementationEnginePartsImplUtils").calculateLiveheadFallBehindBlockMargin(x, (d = n.initialDesiredLatencyMs) != null ? d : 0),
            liveheadFallBehindBlockThreshold: b("VideoPlayerOzImplementationEnginePartsImplUtils").calculateLiveheadFallBehindBlockThreshold(x, (F = n.initialDesiredLatencyMs) != null ? F : 0, (s = n.initialLatencyToleranceMs) != null ? s : 0),
            loggerConfig: {
                isOzDevConsoleEnabled: b("gkx")("722076"),
                observedOperationLoggers: j && e && e.shouldInitialize() ? j.getObservedOperationLoggers() : [],
                perfLoggerProviders: y
            },
            mpdUrl: z,
            networkRequestStreamHandlers: w,
            prefetchCache: x.getBool("use_prefetch_cache", !1) ? new (b("OzDashPrefetchCache"))() : null,
            rawMpdXml: A,
            seekHandler: b("gkx")("1482680") ? function(a) {
                var b = u.currentTime;
                p.dispatch({
                    payload: {
                        seekSourcePosition: b
                    },
                    type: "implementation_seek_requested"
                });
                u.currentTime = a
            }
            : null,
            startTimeStamp: x.getBool("fix_start_timestamp", !1) ? n.startTimestamp : 0,
            videoNodeOrQuickStarter: (t = j) != null ? t : u,
            videoPlaybackRestrictions: b("getOzPlaybackRestrictions")(B, {
                mosLowerThreshold: x.getNumber("mos_lower_threshold", 0),
                mosUpperThreshold: x.getNumber("mos_upper_threshold", 0)
            })
        };
        var G = new c(d);
        r.current = G;
        F = n.loggingMetaData.playerImplementationInstanceCountRef;
        F.current++;
        G.onError(function(a) {
            m(a, "oz_player_error")
        });
        G.addListener("switchVideoRepresentation", function() {
            p.dispatch({
                payload: {
                    targetVideoQuality: h.getCurrentTargetVideoQuality()
                },
                type: "representation_changed"
            })
        });
        G.addListener("manifestFetchError", function(a) {
            b("handleOzManifestFetchErrorEvent")(x, a)
        });
        G.addListener("streamError", function(a) {
            return b("handleOzStreamErrorEvent")(x, a)
        });
        G.addListener("streamInterruptAt", function() {
            p.dispatch({
                type: "stream_interrupted"
            })
        });
        G.addListener("streamResumedAt", function() {
            p.dispatch({
                type: "stream_resumed"
            })
        });
        G.addListener("streamEnd", function() {
            p.dispatch({
                type: "stream_ended"
            })
        });
        j == null ? (G.addListener("enterBuffering", function() {
            if (b("gkx")("1235655"))
                return;
            p.dispatch({
                type: "buffering_begin_requested"
            })
        }),
        G.addListener("leaveBuffering", function() {
            p.dispatch({
                type: "buffering_end_requested"
            })
        })) : b("VideoPlayerOzImplementationEnginePartsImplUtils").createOzBufferingDetector(u, a, x, p, q);
        f && f.handleOzPlayerChanged(G);
        var H = function() {
            var a = i();
            a = {
                inbandCaptionsAutogeneratedFromManifest: h.getInbandCaptionsAutogeneratedFromManifest(),
                inbandCaptionsExpectedFromManifest: h.getInbandCaptionsExpectedFromManifest(),
                inbandCaptionsExpectedFromProps: a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
                sideLoadCaptionsExpectedFromProps: a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
                sideLoadCaptionsUrlFromProps: a == null ? void 0 : a.sideLoadCaptionsUrlFromProps
            };
            var b = p.getCurrentState();
            b = b.controlledState;
            (a.inbandCaptionsExpectedFromManifest !== b.captionsLoaded || a.inbandCaptionsAutogeneratedFromManifest !== b.inbandCaptionsAutogenerated) && l(a)
        }
          , I = function(a, b) {
            a = a.getCustomField("timescale") || 0;
            p.dispatch({
                payload: {
                    timescale: a,
                    videoBytes: b
                },
                type: "cea608_bytes_received"
            })
        }
          , J = function() {
            var a = h.getVideoRepresentations();
            if (a != null && a.length > 0) {
                a = a[0].getTimeRanges();
                if (a != null && a.length > 0) {
                    var c = a[0].startTime;
                    a = Math.max(a[a.length - 1].endTime - x.getNumber("live_rewind_seek_to_live_delta", 8), c);
                    p.dispatch({
                        payload: {
                            seekableRanges: new (b("TimeRanges"))([{
                                endTime: a,
                                startTime: c
                            }])
                        },
                        type: "seekable_ranges_changed"
                    })
                }
            }
        }
          , K = function() {
            var a = G.getMpd();
            if (!a)
                return;
            a = a.getCustomField("loapStreamType");
            var b = k();
            typeof a === "number" && b != null && b.setStreamType(a)
        }
          , L = function(a) {
            var c = function() {
                J(),
                H(),
                K()
            };
            a.addListener("updated", c);
            b("gkx")("1656434") && c();
            G.updatePlayerRunTimeConfig({
                videoStreamDataHandler: I
            });
            h.isPredictiveDash() && x.setContext("latency_level", "predictive");
            a = i();
            l({
                inbandCaptionsAutogeneratedFromManifest: h.getInbandCaptionsAutogeneratedFromManifest(),
                inbandCaptionsExpectedFromManifest: h.getInbandCaptionsExpectedFromManifest(),
                inbandCaptionsExpectedFromProps: a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
                sideLoadCaptionsExpectedFromProps: a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
                sideLoadCaptionsUrlFromProps: a == null ? void 0 : a.sideLoadCaptionsUrlFromProps
            })
        };
        G.addListener("mpdReady", function(a) {
            L(a);
            p.dispatch({
                payload: {
                    availableQualities: h.getAvailableVideoQualities(),
                    selectedVideoQuality: h.getUserSelectedVideoQuality(),
                    targetVideoQuality: h.getCurrentTargetVideoQuality(),
                    videoProjection: (a = h.getVideoProjectionType()) != null ? a : null
                },
                type: "implementation_engine_initialized"
            })
        });
        G.load(z)
    }
}
), null);
__d("VideoPlayerOzQuickStarterUtils", ["VideoDashPrefetchCache"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createPrefetchDataForTrack = a;
    function g(a, c, d) {
        c = b("VideoDashPrefetchCache").createQueryStringURL(c);
        c = b("VideoDashPrefetchCache").getCacheValue(c);
        if (!c) {
            a.push(d);
            return null
        }
        return c
    }
    function h(a, b) {
        return a.find(function(a) {
            return a.segmentType === b
        })
    }
    function a(a, b, c) {
        var d = h(b, "init");
        b = h(b, "data");
        if (d) {
            var e = g(a, d, c + " init");
            if (!e)
                return null;
            var f;
            b && (f = g(a, b, c + " data"));
            return {
                initializationPromise: e,
                mimeCodec: d.mimeCodec,
                representationID: d.representationID,
                segmentPromise: f
            }
        }
        return null
    }
}
), null);
__d("VideoPlayerOzImplementationEngine", ["VideoPlayerBanzaiODS", "VideoPlayerImplementationEngineAPI", "VideoPlayerImplementationEngineVideoElementAPI", "VideoPlayerImplementationErrors", "VideoPlayerOzImplementationEngineExtrasAPI", "VideoPlayerOzImplementationEnginePartsImplFunction", "VideoPlayerOzImplementationEnginePartsImplUtils", "VideoPlayerOzQuickStarterUtils", "emptyFunction", "gkx", "oz-player/utils/OzError", "promiseDone", "requireCond", "unrecoverableViolation", "cr:1494458", "cr:1473549", "cr:1534629", "cr:1494460"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createVideoPlayerOzImplementationEngine = a;
    c = !1;
    var g = b("emptyFunction");
    function h(a, c) {
        if (a instanceof b("oz-player/utils/OzError")) {
            var d = a
              , e = d.getExtra();
            d = {
                createdTimestamp: Date.now(),
                errorCode: e.code,
                errorDescription: d.getDescription(),
                errorLocation: c,
                errorName: d.getType(),
                stack: d.stack,
                url: e.url
            };
            return d
        } else
            return b("VideoPlayerImplementationErrors").createVideoPlayerErrorFromGenericError("OZ_JAVASCRIPT_NATIVE", a, c)
    }
    function a(a) {
        var c = a.debugLogId
          , d = a.handleFatalError
          , e = a.initialProps;
        a = a.setExposedStateInReact;
        var f = {
            current: null
        }
          , i = {
            current: null
        }
          , j = {
            current: null
        }
          , k = {
            current: null
        }
          , l = {
            current: null
        }
          , m = {
            current: null
        }
          , n = {
            current: null
        }
          , o = {
            current: null
        }
          , p = {
            current: null
        };
        function q() {
            var a;
            return (a = o.current) != null ? a : null
        }
        function r() {
            var a;
            return (a = n.current) != null ? a : null
        }
        function s() {
            return m.current
        }
        var t;
        b("cr:1473549") && (t = new (b("cr:1473549"))());
        var u = "comet_oz"
          , v = function(a, b) {
            return b.manifestXmlStringInitial !== null ? a.manifestXmlStringInitial !== b.manifestXmlStringInitial : a.manifestUrl !== b.manifestUrl
        }
          , w = function(a, b) {
            return a.videoFBID !== b.videoFBID
        }
          , x = function(a) {
            return a.getBool("use_full_player_if_cached", !1) && b("cr:1534629") ? b("cr:1534629")().getModuleIfRequireable() : null
        }
          , y = function(a, b, c) {
            b != null ? i.current = babelHelpers["extends"]({}, a, {
                manifestXmlStringResolved: b
            }) : i.current = a,
            O.dispatch({
                type: "implementation_engine_oz_manifest_downloading"
            }),
            l.current = x(a.experimentationConfig),
            C(l.current, [].concat(c, ["proceedWithOzManifestDownloading"]))
        }
          , z = function(a) {
            var c;
            c = {
                VideoPlayerShakaPerformanceLoggerClass: a.VideoPlayerShakaPerformanceLoggerClass,
                accessToken: a.loggingMetaData.accessToken,
                experimentationConfig: a.experimentationConfig,
                graphQLVideoDRMInfo: a.graphQLVideoDRMInfo,
                manifestUrl: (c = a.manifestUrl) != null ? c : null,
                manifestXmlStringInitial: (c = a.manifest) != null ? c : null,
                minQualityPreference: a.minQualityPreference,
                ozQuickStarterData: a.ozQuickStarterData,
                videoFBID: a.videoFBID
            };
            a = f.current;
            var d = !1;
            if (a == null)
                d = !0;
            else if (a != null && !w(c, a) && v(c, a)) {
                var e = 14;
                b("VideoPlayerBanzaiODS").bumpEntityKey("OzImplementation", "manifest_reloaded", e);
                d = !1
            } else if (a != null && w(c, a))
                throw b("unrecoverableViolation")("videoFBID changed after player initialization", "comet_video_player");
            if (!d)
                return !1;
            e = c.manifestUrl;
            a = c.manifestXmlStringInitial;
            if (a == null && e == null)
                throw b("unrecoverableViolation")("Empty manifestXmlStringInitial and manifestUrl", "comet_video_player");
            f.current = c;
            y(c, a, ["handleVideoInfoChangeForOzImplementation", "downloadManifestInOz_EXPERIMENTAL"]);
            return !0
        }
          , A = function(a, c, d, e, f) {
            var g = function(b) {
                if (k.current !== a)
                    return;
                l.current = b;
                C(b, [].concat(f, ["handleOzPlayerModuleLoadSuccess"]))
            }
              , h = function(b) {
                if (k.current !== a)
                    return;
                M(b, "oz_player_module_load_failed")
            };
            k.current = a;
            if (m.current == null && c != null && e != null) {
                c = new c(d,e.experimentationConfig);
                b("gkx")("1494163") && (m.current = c);
                d = e.ozQuickStarterData;
                if (d != null) {
                    e = [];
                    var i = b("VideoPlayerOzQuickStarterUtils").createPrefetchDataForTrack(e, d.video, "video");
                    if (i) {
                        c.addPrefetchTrack(i);
                        i = b("VideoPlayerOzQuickStarterUtils").createPrefetchDataForTrack(e, d.audio, "audio");
                        i && c.addPrefetchTrack(i)
                    }
                }
                c.addListener("streamEnd", function() {
                    O.dispatch({
                        type: "stream_ended"
                    })
                });
                b("gkx")("1494163") || (m.current = c)
            }
            b("promiseDone")(a, g, h)
        }
          , B = function(a) {
            a = b("VideoPlayerImplementationEngineVideoElementAPI").createVideoPlayerImplementationEngineVideoElementAPI(a);
            P.current = a;
            return a
        }
          , C = function(a, c) {
            var d = J()
              , e = i.current;
            if (d == null || e == null)
                return;
            var f = B(d)
              , g = e.experimentationConfig;
            a ? D(a, d, f, e, [].concat(c, ["proceedWithResolvedVideoInfo", "OzPlayerModuleFromRef"])) : b("cr:1494460") ? D(b("cr:1494460")(), d, f, e, [].concat(c, ["proceedWithResolvedVideoInfo", "VideoPlayerOzPlayerModuleLoaderSync"])) : b("cr:1534629") ? (g.getBool("instantiate_buffering_detector_before_quick_starter", !1) && b("VideoPlayerOzImplementationEnginePartsImplUtils").createOzBufferingDetector(d, f, e.experimentationConfig, O, o),
            A(b("cr:1534629")().load(), b("cr:1494458"), d, e, [].concat(c, ["proceedWithResolvedVideoInfo", "VideoPlayerOzPlayerModuleLoaderAsync"]))) : M(new Error("Neither of OzPlayerModuleLoader is available."), "oz_player_module_loaders_missing")
        }
          , D = function(a, c, d, f, g) {
            try {
                a = {
                    OzPlayerClass: a,
                    callChain: [].concat(g, ["proceedWithResolvedVideoInfoAndOzPlayerModuleSync"]),
                    destroyOzPlayerPartsRef: p,
                    engineDebugAPI: t,
                    engineExtrasAPI: H,
                    getCaptionsInfo: I,
                    getOzQuickStarter: s,
                    getVideoLiveTrace: K,
                    handleCaptionsInfoChange: L,
                    handleFatalImplementationError: M,
                    initialProps: e,
                    logger: N,
                    machine: O,
                    ozBufferingDetectorRef: o,
                    playerVersion: u,
                    resolvedVideoInfo: f,
                    videoElement: c,
                    videoElementAPI: d
                };
                b("VideoPlayerOzImplementationEnginePartsImplFunction").proceedWithOzPlayerCreation(babelHelpers["extends"]({}, a, {
                    ozPlayerRef: n
                }));
                j.current = f
            } catch (a) {
                M(a, "oz_player_create_exception")
            }
        };
        function E(a) {
            b("gkx")("1494163") && (j.current = null);
            var c = p.current;
            c != null && (p.current = null,
            c(a));
            c = m.current;
            c && (m.current = null);
            b("gkx")("1494163") && (m.current = null)
        }
        function F() {
            if (b("gkx")("1494163"))
                f.current = null,
                i.current = null,
                j.current = null;
            else {
                if (b("gkx")("1431367"))
                    return;
                f.current = null;
                i.current = null;
                j.current = null
            }
        }
        function G() {
            k.current = null,
            l.current = null
        }
        var H = b("VideoPlayerOzImplementationEngineExtrasAPI").createVideoPlayerOzImplementationEngineExtrasAPI({
            getOzPlayer: r,
            getOzQuickStarter: s
        });
        c = b("VideoPlayerImplementationEngineAPI").createVideoPlayerImplementationEngine({
            createDebugAPI: function(a) {
                var b = a.getVideoElementAPI;
                a = a.logger;
                return t ? t.createDebugAPI({
                    engineExtrasAPI: H,
                    getConfig: function() {
                        var a;
                        return (a = (a = j.current) == null ? void 0 : a.experimentationConfig) != null ? a : null
                    },
                    getManifest: function() {
                        var a;
                        return (a = (a = j.current) == null ? void 0 : a.manifestXmlStringResolved) != null ? a : null
                    },
                    getManifestUrl: function() {
                        var a;
                        return (a = (a = j.current) == null ? void 0 : a.manifestUrl) != null ? a : null
                    },
                    getOzBufferingDetector: q,
                    getOzPlayer: r,
                    getVideoElementAPI: b,
                    logger: a
                }) : null
            },
            createVideoPlayerError: h,
            debugLog: g,
            debugLogId: c,
            destroyEngineParts: function(a) {
                E([].concat(a, ["destroyEngineParts"])),
                F(),
                G()
            },
            engineExtrasAPI: H,
            engineMetadata: {
                isAbrEnabled: !0,
                playerImplementationName: "oz_v2",
                playerVersion: u,
                streamingFormat: "dash"
            },
            handleFatalError: d,
            handleVideoElementMounted: function(a) {
                var b = J();
                C(l.current, [].concat(a, ["handleVideoElementMounted"]))
            },
            handleVideoElementUnmounted: function(a) {
                (b("gkx")("1494163") || b("gkx")("1380112")) && E([].concat(a, ["handleVideoElementUnmounted"]))
            },
            handleVideoInfoChange: z,
            initialProps: e,
            setExposedStateInReact: a
        });
        d = c.engine;
        var I = c.getCaptionsInfo
          , J = c.getVideoElement
          , K = c.getVideoLiveTrace
          , L = c.handleCaptionsInfoChange
          , M = c.handleFatalImplementationError
          , N = c.logger
          , O = c.machine
          , P = c.videoElementAPIRef;
        return d
    }
}
), null);
__d("VideoPlayerOzImplementationV2.react", ["React", "VideoPlayerImplementationEngineAPI", "VideoPlayerImplementationReactVideoElement.react", "VideoPlayerOzImplementationEngine"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("VideoPlayerImplementationEngineAPI").useVideoPlayerImplementationEngine(a, b("VideoPlayerOzImplementationEngine").createVideoPlayerOzImplementationEngine)
          , d = c[0];
        c = c[1];
        return g.jsx(b("VideoPlayerImplementationReactVideoElement.react"), {
            implementationController: c.implementationController,
            implementationExposedState: d,
            renderWithVideoImplementationStates: a.renderWithVideoImplementationStates,
            videoElementCallbacks: c.videoElementCallbacks,
            videoElementRefCallback: c.videoElementRefCallback
        })
    }
}
), null);
__d("VideoPlayerOzPlayerModuleLoaderDeferredForDisplay", ["requireDeferredForDisplay"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("requireDeferredForDisplay")("oz-player");
    function a() {
        return {
            getModuleIfRequireable: function() {
                return g.getModuleIfRequireable() || null
            },
            load: function() {
                return g.load()
            }
        }
    }
}
), null);
__d("VideoPlayerShakaImplementationData", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.makeShakaImplementationData = a;
    function a(a) {
        var b = a.videoData;
        a = a.videoPlayerShakaConfig;
        return b == null ? null : {
            videoData: b,
            videoPlayerShakaConfig: a
        }
    }
}
), null);
__d("VideoPlayerOzWWWConfig", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "oz_www_";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getBool = function(a, b) {
            return this.$1.getBool(g + a, b)
        }
        ;
        b.getNumber = function(a, b) {
            return this.$1.getNumber(g + a, b)
        }
        ;
        b.getString = function(a, b) {
            return this.$1.getString(g + a, b)
        }
        ;
        b.setContext = function(a, b) {
            this.$1.setContext(a, b)
        }
        ;
        b.getAllContexts = function() {
            return this.$1.getAllContexts()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("useOzImplementationData", ["CometRelay", "React", "VideoPlayerOzImplementationData", "VideoPlayerOzWWWConfig", "useOzImplementationData_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a, c) {
        var d = c.manifestURL_DO_NOT_USE
          , e = c.ozQuickStarterData
          , f = c.videoPlayerShakaConfig
          , i = h.useMemo(function() {
            return f == null ? null : new (b("VideoPlayerOzWWWConfig"))(f)
        }, [f])
          , j = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useOzImplementationData_video.graphql"), a);
        return h.useMemo(function() {
            return b("VideoPlayerOzImplementationData").makeOzImplementationData({
                canUseOz: j.can_use_oz,
                dashManifest: d != null ? null : j.dash_manifest,
                dashUrl: d != null ? d : j.playable_url_dash,
                experimentationConfig: i,
                minQualityPreference: j.min_quality_preference,
                ozQuickStarterData: d != null ? null : e,
                videoFBID: j.id
            })
        }, [j, d, i, e])
    }
}
), null);
__d("useProgressiveImplementationData", ["CometRelay", "VideoPlayerProgressiveImplementationData", "useProgressiveImplementationData_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a, c) {
        var d, e;
        c = c.initialForceHD;
        c = c === void 0 ? !1 : c;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useProgressiveImplementationData_video.graphql"), a);
        d = a.is_spherical === !0 ? (d = (d = a.spherical_video_fallback_urls) == null ? void 0 : d.hd) != null ? d : a.playable_url_quality_hd : a.playable_url_quality_hd;
        e = a.is_spherical === !0 ? (e = (e = a.spherical_video_fallback_urls) == null ? void 0 : e.sd) != null ? e : a.playable_url : a.playable_url;
        return b("VideoPlayerProgressiveImplementationData").makeProgressiveImplementationData({
            hdSrc: d,
            hdSrcPreferred: c === !0 || a.min_quality_preference === "HD" || a.min_quality_preference === "UHD",
            sdSrc: e
        })
    }
}
), null);
__d("useShakaImplementationData", ["CometRelay", "React", "VideoPlayerShakaImplementationData", "recoverableViolation", "requireCond", "cr:1604324", "useShakaImplementationData_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a, c) {
        var d = c.videoPlayerShakaConfig
          , e = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useShakaImplementationData_video.graphql"), a);
        return h.useMemo(function() {
            var a;
            a = (a = e.video_player_shaka_live_p2p_init) == null ? void 0 : a.json_encoded_video_data;
            if (a == null)
                return null;
            if (b("cr:1604324") == null)
                return b("recoverableViolation")("VideoData is not supported", "comet_video_player");
            var c = null;
            try {
                c = new (b("cr:1604324"))(JSON.parse(a))
            } catch (a) {
                b("recoverableViolation")("VideoData JSON is broken", "comet_video_player")
            }
            return b("VideoPlayerShakaImplementationData").makeShakaImplementationData({
                videoData: c,
                videoPlayerShakaConfig: d
            })
        }, [e, d])
    }
}
), null);
__d("useVideoPlayerShakaPerformanceLoggerRelay", ["CometRelay", "useVideoPlayerShakaPerformanceLoggerRelay_init.graphql", "useVideoPlayerShakaPerformanceLoggerRelay_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h;
    g !== void 0 ? g : g = b("useVideoPlayerShakaPerformanceLoggerRelay_init.graphql");
    function a(a) {
        a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("useVideoPlayerShakaPerformanceLoggerRelay_video.graphql"), a);
        a = a.video_player_shaka_performance_logger_init ? b("CometRelay").ModuleResource.read(a.video_player_shaka_performance_logger_init) : null;
        a != null && a.forceShouldInitialize();
        return a
    }
}
), null);
__d("manifestHasUnsupportedCodecs", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (window.MediaSource != null || a != null || typeof a !== "string")
            return !1;
        var b = /mimeType=\"([^\"]*)\"\s*codecs=\"([^\"]*)\"/g, c;
        while (c = b.exec(a)) {
            c = c[1] + '; codecs="' + c[2] + '"';
            if (!window.MediaSource.isTypeSupported(c))
                return !0
        }
        return !1
    }
}
), null);
__d("useVideoImplementations", ["CometRelay", "ErrorMetadata", "VideoPlayerOzImplementationV2.react", "VideoPlayerProgressiveImplementationV2.react", "err", "gkx", "manifestHasUnsupportedCodecs", "recoverableViolation", "requireCond", "useOzImplementationData", "useProgressiveImplementationData", "useShakaImplementationData", "cr:1604325", "useVideoImplementations_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a, c) {
        var d = []
          , e = c.forceProgressiveImpl;
        e = e === void 0 ? !1 : e;
        var f = c.initialForceHD;
        f = f === void 0 ? !1 : f;
        var h = c.manifestURL_DO_NOT_USE
          , i = c.ozQuickStarterData
          , j = c.videoFBID;
        c = c.videoPlayerShakaConfig;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useVideoImplementations_video.graphql"), a);
        var k = b("useShakaImplementationData")(a, {
            videoPlayerShakaConfig: c
        });
        k != null && (b("cr:1604325") == null ? b("recoverableViolation")("VideoPlayerShakaImplementation is not supported", "comet_video_player") : d.push({
            Component: b("cr:1604325"),
            data: k,
            typename: "VideoPlayerShakaImplementation"
        }));
        k = b("useOzImplementationData")(a, {
            manifestURL_DO_NOT_USE: h,
            ozQuickStarterData: i,
            videoPlayerShakaConfig: c
        });
        h = k != null && b("manifestHasUnsupportedCodecs")(k.manifest);
        !e && k != null && (k.manifest != null && !h || k.manifestUrl != null) && d.push({
            Component: b("VideoPlayerOzImplementationV2.react"),
            data: k,
            typename: "VideoPlayerOzImplementation"
        });
        i = b("useProgressiveImplementationData")(a, {
            initialForceHD: f
        });
        b("VideoPlayerProgressiveImplementationV2.react") != null && i != null && d.push({
            Component: b("VideoPlayerProgressiveImplementationV2.react"),
            data: i,
            typename: "VideoPlayerProgressiveImplementation"
        });
        if (d.length === 0 && b("gkx")("1611172")) {
            c = b("err")("Cannot play video: No matching video player implementations");
            a = {
                forced_progressive: e,
                has_oz_data: k != null,
                has_oz_manifest: (k == null ? void 0 : k.manifest) != null,
                has_oz_manifest_url: (k == null ? void 0 : k.manifestUrl) != null,
                has_oz_unsupported_codecs: h,
                has_progressive_data: i != null
            };
            c.metadata = new (b("ErrorMetadata"))();
            c.metadata.addEntries(["COMET_VIDEO", "VIDEO_ID", String(j)], ["COMET_VIDEO", "VIDEO_IMPLEMENTATION_DEBUG_DATA", JSON.stringify(a)]);
            b("recoverableViolation")("useVideoImplementations: No matching video player implementations", "comet_video_player", {
                error: c
            })
        }
        return d
    }
}
), null);
__d("VideoPlayerShakaBandwidthEstimator", ["CacheStorage", "Run", "VideoPlayerShakaGlobalConfig", "requireWeak"], (function(a, b, c, d, e, f) {
    var g;
    b("requireWeak")("Shaka", function(a) {
        g = a.util.EWMACacheBandwidthEstimator
    });
    var h = null
      , i = !1;
    a = function() {
        function a() {
            var a = this
              , c = new (b("CacheStorage"))("localstorage","_video_")
              , d = c.get("bandwidthEstimate");
            this.$1 = {
                isMockObject: !0,
                getBandwidth: function(a) {
                    return d
                },
                getFastMovingBandwidth: function() {
                    return d
                }
            };
            g && (this.$1 = new g(b("VideoPlayerShakaGlobalConfig").getNumber("cache_delay", 30),b("VideoPlayerShakaGlobalConfig").getNumber("cache_bandwidth", 2e6),function() {
                b("VideoPlayerShakaGlobalConfig").getBool("shaka_update_bandwidth_cache_on_sample", !1) && c.set("bandwidthEstimate", a.$1.getBandwidth())
            }
            ,d),
            this.$1.isMockObject = !1);
            b("Run").onUnload(function() {
                c.set("bandwidthEstimate", a.$1.getBandwidth())
            })
        }
        var c = a.prototype;
        c.getEstimator = function() {
            return this.$1
        }
        ;
        a.getInstance = function() {
            (h === null || h.getEstimator().isMockObject && g) && (h = new a());
            return h
        }
        ;
        a.getEstimator = function() {
            return a.getInstance().getEstimator()
        }
        ;
        a.getBandwidth = function(b) {
            var c = a.getEstimator();
            return c.getBandwidth(b)
        }
        ;
        a.getBandwidthByVideoType = function(b) {
            return a.getBandwidth(a.getBandwidthModel(b))
        }
        ;
        a.getBandwidthModel = function(a) {
            return a ? "aggressive" : "conservative"
        }
        ;
        a.isAutoplayBandwidthRestrained = function(c) {
            var d = a.getEstimator(), e;
            b("VideoPlayerShakaGlobalConfig").getBool("block_autoplay_use_fast_moving_average", !0) && i ? e = d.getFastMovingBandwidth() : e = d.getBandwidth();
            d = c ? b("VideoPlayerShakaGlobalConfig").getNumber("live_block_autoplay_bandwidth_threshold", 25e4) : b("VideoPlayerShakaGlobalConfig").getNumber("block_autoplay_bandwidth_threshold", 123034);
            e === null || e >= d ? i = !1 : i = !0;
            return i
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoPlayerShakaConfigContextProvider", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.setContext = function(a, b) {
            if (this.$1[a] !== b) {
                var c;
                this.$1 = Object.assign({}, this.$1, (c = {},
                c[a] = b,
                c))
            }
        }
        ;
        b.setAllContexts = function(a) {
            this.$1 = a
        }
        ;
        b.getAllContexts = function() {
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoPlayerShakaConfig", ["VideoPlayerContextSensitiveConfigResolver", "VideoPlayerShakaConfigContextProvider"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, c, d) {
            this.$1 = new (b("VideoPlayerShakaConfigContextProvider"))(),
            this.$2 = c || null,
            this.$3 = new (b("VideoPlayerContextSensitiveConfigResolver"))(d),
            this.$3.setContexts(a || {}),
            a && this.$1.setAllContexts(a)
        }
        var c = a.prototype;
        c.setContext = function(a, b) {
            var c = this.$1.getAllContexts();
            this.$1.setContext(a, b);
            a = this.$1.getAllContexts();
            c !== a && this.$3.setContexts(a)
        }
        ;
        c.setOverrideConfig = function(a) {
            this.$2 = a
        }
        ;
        c.getBool = function(a, b) {
            a = this.$4(a, b);
            return typeof a === "boolean" ? a : b
        }
        ;
        c.getNumber = function(a, b) {
            a = this.$4(a, b);
            return typeof a === "number" ? a : b
        }
        ;
        c.getString = function(a, b) {
            a = this.$4(a, b);
            return typeof a === "string" ? a : b
        }
        ;
        c.getAllContexts = function() {
            return this.$1.getAllContexts()
        }
        ;
        c.$4 = function(a, b) {
            if (typeof this.$3.getValue(a) === typeof b)
                return this.$3.getValue(a);
            return !!this.$2 && typeof this.$2[a] === typeof b ? this.$2[a] : null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("useVideoPlayerShakaConfig", ["CometRelay", "React", "VideoPlayerConnectionQuality", "VideoPlayerShakaBandwidthEstimator", "VideoPlayerShakaConfig", "useVideoPlayerShakaConfig_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a, c) {
        c = c.adClientToken;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useVideoPlayerShakaConfig_video.graphql"), a);
        var d = c != null
          , e = a.is_spherical === !0;
        c = h.useState(function() {
            return new (b("VideoPlayerShakaConfig"))({
                connection_quality: b("VideoPlayerConnectionQuality").evaluate(b("VideoPlayerShakaBandwidthEstimator").getBandwidth),
                content_category: "general",
                is_ad: d,
                is_live: !1,
                is_spherical: e,
                latency_level: "normal",
                player_format: "inline",
                servable_via_fmbs: !1
            })
        });
        var f = c[0];
        h.useEffect(function() {
            f.setContext("is_ad", d)
        }, [f, d]);
        h.useEffect(function() {
            f.setContext("is_spherical", e)
        }, [f, e]);
        return f
    }
}
), null);
__d("OzDOMEventListenerImpl", ["requireCond", "cr:1351686"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        listenDOMEvent: b("cr:1351686").listen,
        captureDOMEvent: b("cr:1351686").capture,
        suppressDOMEvent: b("cr:1351686").suppress
    };
    c = a;
    e.exports = c
}
), null);
__d("DataViewReader", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = 0,
            this.$2 = a
        }
        var b = a.prototype;
        b.seek = function(a) {
            this.$1 = a
        }
        ;
        b.skip = function(a) {
            var b = this.$1;
            this.$1 += a;
            return b
        }
        ;
        b.readUint8 = function() {
            return this.$2.getUint8(this.skip(8 / 8))
        }
        ;
        b.readUint16 = function() {
            return this.$2.getUint16(this.skip(16 / 8))
        }
        ;
        b.readUint32 = function() {
            return this.$2.getUint32(this.skip(32 / 8))
        }
        ;
        b.readUint64 = function() {
            var a = this.$2.getUint32(this.skip(32 / 8))
              , b = this.$2.getUint32(this.skip(32 / 8));
            if (a > 2097151)
                throw new RangeError("Overflow reading 64-bit value.");
            return Math.pow(2, 32) * a + b
        }
        ;
        b.readInt64 = function() {
            var a = this.$2.getUint32(this.skip(32 / 8))
              , b = this.$2.getUint32(this.skip(32 / 8));
            if (a > 2097151)
                throw new RangeError("Overflow reading 64-bit value.");
            return Math.pow(2, 32) * (a | 0) + b
        }
        ;
        b.readInt16 = function() {
            return this.$2.getInt16(this.skip(16 / 8))
        }
        ;
        b.readInt32 = function() {
            return this.$2.getInt32(this.skip(32 / 8))
        }
        ;
        b.readZeroTerminatedString = function(a) {
            var b = "", c = 0, d;
            while (c++ < a && (d = this.readUint8()))
                b += String.fromCharCode(d);
            return b
        }
        ;
        b.readChars = function(a) {
            var b = "";
            while (a-- > 0)
                b += String.fromCharCode(this.$2.getUint8(this.skip(8 / 8)));
            return b
        }
        ;
        b.readBytes = function(a) {
            var b = [];
            while (a-- > 0)
                b.push(this.$2.getUint8(this.skip(8 / 8)));
            return b
        }
        ;
        b.getDataView = function() {
            return this.$2
        }
        ;
        b.getCursor = function() {
            return this.$1
        }
        ;
        b.hasMoreData = function() {
            return this.$2.byteLength - this.getCursor() > 0
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/loggings/OzLoggingUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.executeOperationAndLog = a;
    f.monitorPromiseAndLogOperation = b;
    function a(a, b, c) {
        a = a.getOperationLogger(b).start();
        try {
            b = c(a);
            return b
        } catch (b) {
            a.setError(b);
            throw b
        } finally {
            a.log()
        }
    }
    function b(a, b, c, d, e) {
        d === void 0 && (d = function() {}
        );
        e === void 0 && (e = function() {}
        );
        var f = b.getOperationLogger(c).start();
        d(f);
        return a.then(function(a) {
            e(f);
            f.log();
            return a
        })["catch"](function(a) {
            e(f);
            f.setError(a);
            f.log();
            throw a
        })
    }
}
), null);
__d("oz-player/loggings/OzOperationLoggerBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.start = function() {
            this.getClientTimeBegin() || this.setClientTimeBegin(Date.now());
            return this
        }
        ;
        b.log = function() {
            this.getClientTimeEnd() || this.setClientTimeEnd(Date.now())
        }
        ;
        b.setError = function(a) {
            this.$2 = a;
            return this
        }
        ;
        b.setResult = function(a) {
            this.$3 = a;
            return this
        }
        ;
        b.setType = function(a) {
            this.$4 = a;
            return this
        }
        ;
        b.setClientTimeBegin = function(a) {
            this.$5 = a;
            return this
        }
        ;
        b.setClientTimeEnd = function(a) {
            this.$6 = a;
            return this
        }
        ;
        b.setSegmentCount = function(a) {
            this.$13 = a;
            return this
        }
        ;
        b.setTimeToFirstByte = function(a) {
            this.$7 = a;
            return this
        }
        ;
        b.setTimeToLastByte = function(a) {
            this.$8 = a;
            return this
        }
        ;
        b.setTimeToRequestStart = function(a) {
            this.$9 = a;
            return this
        }
        ;
        b.setTimeToRequestSent = function(a) {
            this.$10 = a;
            return this
        }
        ;
        b.setReason = function(a) {
            this.$11 = a;
            return this
        }
        ;
        b.setResource = function(a) {
            this.$12 = a;
            return this
        }
        ;
        b.setSegmentStartTime = function(a) {
            this.$14 = a;
            return this
        }
        ;
        b.setSegmentEndTime = function(a) {
            this.$15 = a;
            return this
        }
        ;
        b.setLength = function(a) {
            this.$16 = a;
            return this
        }
        ;
        b.setLiveheadPosition = function(a) {
            this.$17 = a;
            return this
        }
        ;
        b.setLiveheadSeqNum = function(a) {
            this.$18 = a;
            return this
        }
        ;
        b.setManifestType = function(a) {
            this.$19 = a;
            return this
        }
        ;
        b.setPriorityFloat = function(a) {
            this.$20 = a;
            return this
        }
        ;
        b.setAppendedBufferMs = function(a) {
            this.$21 = a;
            return this
        }
        ;
        b.setInitiator = function(a) {
            this.$22 = a;
            return this
        }
        ;
        b.setPreloadTime = function(a) {
            this.$23 = a;
            return this
        }
        ;
        b.setConcluder = function(a) {
            this.$24 = a;
            return this
        }
        ;
        b.setPreviousRepresentationID = function(a) {
            this.$25 = a;
            return this
        }
        ;
        b.setRepresentationID = function(a) {
            this.$26 = a;
            return this
        }
        ;
        b.setStreamSwitchReason = function(a) {
            this.$27 = a;
            return this
        }
        ;
        b.setState = function(a) {
            this.$28 = a;
            return this
        }
        ;
        b.setContentLengthHeader = function(a) {
            this.$29 = a;
            return this
        }
        ;
        b.setOriginHitHeader = function(a) {
            this.$31 = a;
            return this
        }
        ;
        b.setEdgeHitHeader = function(a) {
            this.$32 = a;
            return this
        }
        ;
        b.setCode = function(a) {
            this.$30 = a;
            return this
        }
        ;
        b.getError = function() {
            return this.$2
        }
        ;
        b.getResult = function() {
            return this.$3
        }
        ;
        b.getType = function() {
            return this.$4
        }
        ;
        b.getClientTimeBegin = function() {
            return this.$5
        }
        ;
        b.getClientTimeEnd = function() {
            return this.$6
        }
        ;
        b.getTimeToRequestStart = function() {
            return this.$9
        }
        ;
        b.getTimeToRequestSent = function() {
            return this.$10
        }
        ;
        b.getReason = function() {
            return this.$11
        }
        ;
        b.getResource = function() {
            return this.$12
        }
        ;
        b.getOperationName = function() {
            return this.$1
        }
        ;
        b.getSegmentStartTime = function() {
            return this.$14
        }
        ;
        b.getSegmentEndTime = function() {
            return this.$15
        }
        ;
        b.getLength = function() {
            return this.$16
        }
        ;
        b.getLiveheadPosition = function() {
            return this.$17
        }
        ;
        b.getManifestType = function() {
            return this.$19
        }
        ;
        b.getPriorityFloat = function() {
            return this.$20
        }
        ;
        b.getAppendedBufferMs = function() {
            return this.$21
        }
        ;
        b.getInitiator = function() {
            return this.$22
        }
        ;
        b.getPreloadTime = function() {
            return this.$23
        }
        ;
        b.getConcluder = function() {
            return this.$24
        }
        ;
        b.getContentLengthHeader = function() {
            return this.$29
        }
        ;
        b.getOriginHitHeader = function() {
            return this.$31
        }
        ;
        b.getEdgeHitHeader = function() {
            return this.$32
        }
        ;
        b.getCode = function() {
            return this.$30
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/utils/OzErrorEmitter", ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            c === void 0 && (c = !1);
            d = a.call(this) || this;
            d.$OzErrorEmitter1 = !1;
            d.$OzErrorEmitter2 = !1;
            d.$OzErrorEmitter3 = [];
            d.emitError = function(a) {
                !d.$OzErrorEmitter1 ? d.$OzErrorEmitter2 ? d.$OzErrorEmitter3.push(a) : d.$OzErrorEmitter1 || b("oz-player/shims/ozvariant")(0, 14038) : d.emit("error", a)
            }
            ;
            d.$OzErrorEmitter2 = c;
            return d
        }
        var d = c.prototype;
        d.onError = function(a) {
            this.$OzErrorEmitter1 = !0;
            a = this.addListener("error", a);
            this.$OzErrorEmitter2 && this.$OzErrorEmitter3.length > 0 && this.$OzErrorEmitter3.forEach(this.emitError);
            return a
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/drm/OzDrmManager", ["oz-player/loggings/OzLoggingUtils", "oz-player/loggings/OzOperationLoggerBase", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzSubscriptionsHandler", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/drm/OzDrmUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation
      , h = b("oz-player/shims/OzDOMEventListener").listenDOMEvent
      , i = b("oz-player/drm/OzDrmUtils").base64ToUint8Array;
    a = function() {
        function a(a, c, d) {
            var e = this;
            d === void 0 && (d = null);
            this.$1 = null;
            this.$2 = new Map();
            this.$4 = !1;
            this.$6 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$7 = new (b("oz-player/utils/OzErrorEmitter"))();
            this.$8 = !1;
            this.$9 = null;
            this.$10 = 0;
            this.$11 = null;
            this.$12 = [];
            this.$13 = null;
            this.$14 = [];
            this.$17 = function(a) {
                var b;
                b = (b = (b = e.$1) == null ? void 0 : b.maxStartEMEAttempts) != null ? b : -1;
                e.$10 < b ? e.$18() : e.$16(e.$15(a))
            }
            ;
            this.$5 = c;
            this.$1 = d;
            this.$3 = a.cloneContext().setType("drm_manager")
        }
        var c = a.prototype;
        c.hasContentProtections = function() {
            return this.$9
        }
        ;
        c.onError = function(a) {
            return this.$7.onError(a)
        }
        ;
        c.$15 = function(a) {
            var c;
            a instanceof b("oz-player/utils/OzError") ? c = a : a instanceof Error ? c = new (b("oz-player/utils/OzError"))({
                type: "OZ_DRM_MANAGER",
                description: a.message,
                extra: {
                    originalError: a
                }
            }) : a != null && typeof a.message === "string" ? c = new (b("oz-player/utils/OzError"))({
                type: "OZ_DRM_MANAGER",
                description: a.message,
                extra: {}
            }) : c = new (b("oz-player/utils/OzError"))({
                type: "OZ_DRM_MANAGER",
                description: "Unknown DRM error",
                extra: {}
            });
            return c
        }
        ;
        c.$16 = function(a) {
            this.$7.emitError(a)
        }
        ;
        c.addProvider = function(a) {
            this.$2.set(a.getSchemeId(), a)
        }
        ;
        c.getProviderForSchemeId = function(a) {
            return this.$2.get(a)
        }
        ;
        c.parseContentProtectionForRepresentation = function(a) {
            if (!a.ContentProtection)
                return null;
            var b = [];
            for (var c = 0; c < a.ContentProtection.length; c++) {
                var d = a.ContentProtection[c]
                  , e = d.$.schemeIdUri;
                e = this.getProviderForSchemeId(e);
                if (e) {
                    var f = e.getInitDatas();
                    if (f.length == 0 && d["cenc:pssh"] && d["cenc:pssh"].length === 1) {
                        d = d["cenc:pssh"][0]._;
                        d = i(d.replace(/-/g, "+").replace(/_/g, "/"));
                        f = [{
                            data: d,
                            type: "cenc"
                        }];
                        e.setInitDatas(f)
                    }
                    b.push({
                        provider: e,
                        initDatas: f
                    })
                }
            }
            return b
        }
        ;
        c.$18 = function() {
            try {
                this.$8 = !1,
                this.startEME(this.$11, this.$12, this.$13, this.$14)
            } catch (a) {
                this.$16(new (b("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "Restart EME failed with: " + (a ? a.toString() : "null"),
                    extra: {}
                }))
            }
        }
        ;
        c.startEME = function(a, c, d, e) {
            var f = this;
            if (this.$8)
                return;
            this.$8 = !0;
            this.$10 += 1;
            this.$11 = a;
            this.$12 = c;
            this.$13 = d;
            this.$14 = e;
            var g = new Map();
            this.$19(d, e, g, "audio");
            this.$19(a, c, g, "video");
            var h;
            g.forEach(function(a, b) {
                !h ? h = f.$20(b, a) : h = h["catch"](function() {
                    return f.$20(b, a)
                })
            });
            if (!h) {
                this.$9 = !1;
                return
            }
            this.$9 = !0;
            var i = this.$3.getOperationLogger("drm_setup").start();
            h.then(this.$21.bind(this)).then(this.$22.bind(this)).then(this.$23.bind(this)).then(function() {
                return i.log()
            }, function(a) {
                a = a != null ? f.$15(a) : new (b("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "Unknown DRM setup error",
                    extra: {}
                });
                f.$16(a);
                i.setResult("failed").setError(a).log()
            })
        }
        ;
        c.$24 = function(a) {
            a instanceof b("oz-player/loggings/OzOperationLoggerBase") && a.getError() && a.setResult("failed")
        }
        ;
        c.$19 = function(a, b, c, d) {
            var e = this;
            b.forEach(function(b) {
                var f;
                a && a.ContentProtection ? f = e.parseContentProtectionForRepresentation(a) : f = b.getCustomField("drmProtections");
                var g = b.getMimeCodecs();
                f !== void 0 && f !== null && f.forEach(function(a) {
                    a = a.provider;
                    c.has(a.getKeySystem()) || c.set(a.getKeySystem(), {
                        audioCapabilities: new Map(),
                        videoCapabilities: new Map(),
                        distinctiveIdentifier: a.getRequireDistinctiveIdentifier(),
                        persistentState: a.getRequirePersistentState(),
                        sessionTypes: a.getDrmSessionTypes(),
                        initDataTypes: a.getInitDataTypes()
                    });
                    var b = c.get(a.getKeySystem());
                    d === "audio" && !b.audioCapabilities.has(g) && b.audioCapabilities.set(g, {
                        contentType: g,
                        robustness: a.getAudioRobustness()
                    });
                    d === "video" && !b.videoCapabilities.has(g) && b.videoCapabilities.set(g, {
                        contentType: g,
                        robustness: a.getVideoRobustness()
                    })
                })
            })
        }
        ;
        c.destroy = function() {
            this.$6.release(),
            this.$4 = !0
        }
        ;
        c.$20 = function(a, b) {
            b = {
                audioCapabilities: Array.from(b.audioCapabilities.values()),
                videoCapabilities: Array.from(b.videoCapabilities.values()),
                distinctiveIdentifier: b.distinctiveIdentifier,
                persistentState: b.persistentState,
                sessionTypes: b.sessionTypes,
                initDataTypes: b.initDataTypes
            };
            return g(window.navigator.requestMediaKeySystemAccess(a, [b]), this.$3, "drm_request_media_key_system_access", function() {}, this.$24)
        }
        ;
        c.$21 = function(a) {
            if (this.$4)
                return b("oz-player/shims/OzMaybeNativePromise").reject();
            var c = this.$5.mediaKeys != null ? b("oz-player/shims/OzMaybeNativePromise").resolve(this.$5.mediaKeys) : a.createMediaKeys();
            return g(c.then(function(b) {
                return {
                    mediaKeySystemAccess: a,
                    mediaKeys: b
                }
            }), this.$3, "drm_create_media_keys", function() {}, this.$24)
        }
        ;
        c.$22 = function(a) {
            var c = this;
            if (this.$4)
                return b("oz-player/shims/OzMaybeNativePromise").reject();
            var d = a.mediaKeySystemAccess
              , e = a.mediaKeys;
            if (!e)
                throw new (b("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "No mediaKeys for mediaKeySystemAccess"
                });
            a = this.$5.setMediaKeys(e).then(function() {
                if (c.$4)
                    return b("oz-player/shims/OzMaybeNativePromise").reject();
                var a = Array.from(c.$2.values()).find(function(a) {
                    return a.getKeySystem() === d.keySystem
                });
                if (!a)
                    throw new (b("oz-player/utils/OzError"))({
                        type: "OZ_DRM_MANAGER",
                        description: "Can't find OzDrmProvider for keySystem " + d.keySystem
                    });
                var f = a.getServerCertificate();
                return f ? e.setServerCertificate(f).then(function() {
                    return {
                        mediaKeySystemAccess: d,
                        mediaKeys: e,
                        provider: a
                    }
                }) : {
                    mediaKeys: e,
                    provider: a
                }
            });
            return g(a, this.$3, "drm_set_media_keys", function() {}, this.$24)
        }
        ;
        c.$23 = function(a) {
            var c = this
              , d = a.mediaKeys
              , e = a.provider;
            a = e.getInitDatas();
            if (a.length === 0) {
                this.$6.addSubscriptions(h(this.$5, "encrypted", function(a) {
                    c.$25(d, e, a)["catch"](c.$17)
                }));
                return b("oz-player/shims/OzMaybeNativePromise").resolve([])
            }
            a = a.map(function(a) {
                return c.$25(d, e, {
                    initData: a.data,
                    initDataType: a.type
                })
            });
            return g(b("oz-player/shims/OzMaybeNativePromise").all(a), this.$3, "drm_request_license", function() {}, this.$24)
        }
        ;
        c.$25 = function(a, b, c) {
            var d = this
              , e = a.createSession();
            this.$6.addSubscriptions(h(e, "message", function(a) {
                d.$26(e, b, a)["catch"](d.$17)
            }), h(e, "keystatuseschange", function(a) {
                d.$27(e)["catch"](d.$17)
            }));
            return e.generateRequest(c.initDataType, c.initData)
        }
        ;
        c.$26 = function(a, c, d) {
            var e = this;
            d = c.getLicenseRequestInfo(d.message.slice(0));
            return window.fetch(d.url, d).then(function(a) {
                return a.arrayBuffer()
            }).then(function(d) {
                d = new Uint8Array(d);
                d = c.parseLicenseResponse(d);
                d === null || d === void 0 || d.byteLength === 0 ? e.$16(new (b("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "No license for " + c.getKeySystem(),
                    extra: {}
                })) : a.update(d)
            })
        }
        ;
        c.$27 = function(a) {
            return a.expiration < Date.now() ? a.close() : b("oz-player/shims/OzMaybeNativePromise").resolve()
        }
        ;
        return a
    }();
    e.exports = {
        OzDrmManager: a
    }
}
), null);
__d("oz-player/loggings/OzPerfLoggerProviderBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.cloneContext = function() {
            var a = this.createLoggerProvider();
            this.$8(a);
            return a
        }
        ;
        b.setType = function(a) {
            this.$1 = a;
            return this
        }
        ;
        b.setInitiator = function(a) {
            this.$2 = a;
            return this
        }
        ;
        b.setResource = function(a) {
            this.$4 = a;
            return this
        }
        ;
        b.setRepresentationID = function(a) {
            this.$3 = a;
            return this
        }
        ;
        b.setSegmentStartTime = function(a) {
            this.$5 = a;
            return this
        }
        ;
        b.setSegmentEndTime = function(a) {
            this.$6 = a;
            return this
        }
        ;
        b.setStreamSwitchReason = function(a) {
            this.$7 = a;
            return this
        }
        ;
        b.getType = function() {
            return this.$1
        }
        ;
        b.getInitiator = function() {
            return this.$2
        }
        ;
        b.getRepresentationID = function() {
            return this.$3
        }
        ;
        b.getStreamSwitchReason = function() {
            return this.$7
        }
        ;
        b.getResource = function() {
            return this.$4
        }
        ;
        b.getSegmentStartTime = function() {
            return this.$5
        }
        ;
        b.getSegmentEndTime = function() {
            return this.$6
        }
        ;
        b.getOperationLogger = function(a) {
            a = this.createOperationLogger(a);
            return this.setOperationContext(a)
        }
        ;
        b.setOperationContext = function(a) {
            this.$8(a);
            return a
        }
        ;
        b.createOperationLogger = function(a) {
            throw new Error("Not implemented: createOperationLogger")
        }
        ;
        b.createLoggerProvider = function() {
            throw new Error("Not implemented: createLoggerProvider")
        }
        ;
        b.$8 = function(a) {
            this.getType() && a.setType(this.getType()),
            this.getInitiator() && a.setInitiator(this.getInitiator()),
            this.getResource() && a.setResource(this.getResource()),
            this.getRepresentationID() && a.setRepresentationID(this.getRepresentationID()),
            this.getStreamSwitchReason() && a.setStreamSwitchReason(this.getStreamSwitchReason()),
            typeof this.getSegmentStartTime() === "number" && a.setSegmentStartTime(this.getSegmentStartTime()),
            typeof this.getSegmentEndTime() === "number" && a.setSegmentEndTime(this.getSegmentEndTime())
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/loggings/OzDevConsolePerfLogger", ["oz-player/loggings/OzOperationLoggerBase", "oz-player/loggings/OzPerfLoggerProviderBase"], (function(a, b, c, d, e, f) {
    "use strict";
    function g() {
        var a;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
            c[d] = arguments[d];
        (a = console).debug.apply(a, ["[oz]"].concat(c))
    }
    function h() {
        var a;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
            c[d] = arguments[d];
        (a = console).error.apply(a, ["[oz]"].concat(c))
    }
    function i(a, b) {
        return Math.floor(a).toString().padStart(b, "0")
    }
    function j(a, b) {
        b === void 0 && (b = null);
        var c = function(a) {
            return i(a.getHours(), 2) + ":" + i(a.getMinutes(), 2) + ":" + i(a.getSeconds(), 2) + " " + i(a.getMilliseconds(), 3)
        }
          , d = b ? b - a : 0;
        return "[" + c(a) + (b ? " - " + c(b) : "") + " (" + d + " ms)]"
    }
    function k(a) {
        return a === "failed" ? h : g
    }
    function l(a) {
        return !a ? null : a.toFixed(2)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.createOperationLogger = function(a) {
            return new m(a)
        }
        ;
        c.createLoggerProvider = function() {
            return new b()
        }
        ;
        return b
    }(b("oz-player/loggings/OzPerfLoggerProviderBase"));
    f.OzDevConsolePerfLoggerProvider = a;
    var m = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.log = function() {
            b.prototype.log.call(this);
            var a = this.getClientTimeBegin() || 0
              , c = this.getClientTimeEnd();
            c = c ? new Date(c) : null;
            var d = this.getResult() || "success"
              , e = this.getType()
              , f = this.getInitiator()
              , g = this.getResource()
              , h = l(this.getSegmentStartTime())
              , i = l(this.getSegmentEndTime());
            k(d)("[" + d + "]", this.getOperationName() + ": " + j(new Date(a), c), e ? "[" + e + "]" : "", h && i ? "[segment time range: " + h + " - " + i + "]" : "", f || "", g || "")
        }
        ;
        return a
    }(b("oz-player/loggings/OzOperationLoggerBase"));
    f.OzDevConsoleOperationLogger = m
}
), null);
__d("oz-player/loggings/OzMultiDestinationPerfLogger", ["oz-player/loggings/OzOperationLoggerBase", "oz-player/loggings/OzPerfLoggerProviderBase"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$OzMultiDestinationPerfLoggerProvider1 = b;
            return c
        }
        var c = b.prototype;
        c.createOperationLogger = function(a) {
            var b = new g(a,this.$OzMultiDestinationPerfLoggerProvider1.map(function(b) {
                return b.getOperationLogger(a)
            }));
            return b
        }
        ;
        c.createLoggerProvider = function() {
            return new b(this.$OzMultiDestinationPerfLoggerProvider1)
        }
        ;
        return b
    }(b("oz-player/loggings/OzPerfLoggerProviderBase"));
    f.OzMultiDestinationPerfLoggerProvider = a;
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            a = b.call(this, a) || this;
            a.$OzMultiDestinationOperationLogger1 = c;
            return a
        }
        var c = a.prototype;
        c.start = function() {
            b.prototype.start.call(this);
            this.$OzMultiDestinationOperationLogger1.forEach(function(a) {
                return a.start()
            });
            return this
        }
        ;
        c.setResult = function(a) {
            b.prototype.setResult.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setResult(a)
            });
            return this
        }
        ;
        c.setError = function(a) {
            b.prototype.setError.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setError(a)
            });
            return this
        }
        ;
        c.setType = function(a) {
            b.prototype.setType.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setType(a)
            });
            return this
        }
        ;
        c.setClientTimeEnd = function(a) {
            b.prototype.setClientTimeEnd.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setClientTimeEnd(a)
            });
            return this
        }
        ;
        c.setClientTimeBegin = function(a) {
            b.prototype.setClientTimeBegin.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setClientTimeBegin(a)
            });
            return this
        }
        ;
        c.setSegmentCount = function(a) {
            b.prototype.setSegmentCount.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setSegmentCount(a)
            });
            return this
        }
        ;
        c.setTimeToFirstByte = function(a) {
            b.prototype.setTimeToFirstByte.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToFirstByte(a)
            });
            return this
        }
        ;
        c.setTimeToLastByte = function(a) {
            b.prototype.setTimeToLastByte.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToLastByte(a)
            });
            return this
        }
        ;
        c.setTimeToRequestStart = function(a) {
            b.prototype.setTimeToRequestStart.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToRequestStart(a)
            });
            return this
        }
        ;
        c.setTimeToRequestSent = function(a) {
            b.prototype.setTimeToRequestSent.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToRequestSent(a)
            });
            return this
        }
        ;
        c.setReason = function(a) {
            b.prototype.setReason.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setReason(a)
            });
            return this
        }
        ;
        c.setResource = function(a) {
            b.prototype.setResource.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setResource(a)
            });
            return this
        }
        ;
        c.setSegmentStartTime = function(a) {
            b.prototype.setSegmentStartTime.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setSegmentStartTime(a)
            });
            return this
        }
        ;
        c.setSegmentEndTime = function(a) {
            b.prototype.setSegmentEndTime.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setSegmentEndTime(a)
            });
            return this
        }
        ;
        c.setAppendedBufferMs = function(a) {
            b.prototype.setAppendedBufferMs.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setAppendedBufferMs(a)
            });
            return this
        }
        ;
        c.setLength = function(a) {
            b.prototype.setLength.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLength(a)
            });
            return this
        }
        ;
        c.setLiveheadPosition = function(a) {
            b.prototype.setLiveheadPosition.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLiveheadPosition(a)
            });
            return this
        }
        ;
        c.setLiveheadSeqNum = function(a) {
            b.prototype.setLiveheadSeqNum.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLiveheadSeqNum(a)
            });
            return this
        }
        ;
        c.setManifestType = function(a) {
            b.prototype.setManifestType.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setManifestType(a)
            });
            return this
        }
        ;
        c.setPriorityFloat = function(a) {
            b.prototype.setPriorityFloat.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPriorityFloat(a)
            });
            return this
        }
        ;
        c.setInitiator = function(a) {
            b.prototype.setInitiator.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setInitiator(a)
            });
            return this
        }
        ;
        c.setPreloadTime = function(a) {
            b.prototype.setPreloadTime.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPreloadTime(a)
            });
            return this
        }
        ;
        c.setConcluder = function(a) {
            b.prototype.setConcluder.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setConcluder(a)
            });
            return this
        }
        ;
        c.setPreviousRepresentationID = function(a) {
            b.prototype.setPreviousRepresentationID.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPreviousRepresentationID(a)
            });
            return this
        }
        ;
        c.setRepresentationID = function(a) {
            b.prototype.setRepresentationID.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setRepresentationID(a)
            });
            return this
        }
        ;
        c.setState = function(a) {
            b.prototype.setState.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setState(a)
            });
            return this
        }
        ;
        c.setContentLengthHeader = function(a) {
            b.prototype.setContentLengthHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setContentLengthHeader(a)
            });
            return this
        }
        ;
        c.setEdgeHitHeader = function(a) {
            b.prototype.setEdgeHitHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setEdgeHitHeader(a)
            });
            return this
        }
        ;
        c.setOriginHitHeader = function(a) {
            b.prototype.setOriginHitHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setOriginHitHeader(a)
            });
            return this
        }
        ;
        c.setCode = function(a) {
            b.prototype.setCode.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setCode(a)
            });
            return this
        }
        ;
        c.log = function() {
            b.prototype.log.call(this),
            this.$OzMultiDestinationOperationLogger1.forEach(function(a) {
                return a.log()
            })
        }
        ;
        return a
    }(b("oz-player/loggings/OzOperationLoggerBase"))
}
), null);
__d("oz-player/loggings/OzOperationLoggerObserver", ["oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new (b("oz-player/shims/OzSubscriptionsHandler"))()
        }
        var c = a.prototype;
        c.observe = function(a, b) {
            var c;
            a = a.map(function(a) {
                var c = a.setOperationLoggedListener(function(a) {
                    b.getOperationLogger(a.getOperationName()).setClientTimeBegin(a.getClientTimeBegin() || 0).setClientTimeEnd(a.getClientTimeEnd() || 0).setLength(a.getLength()).setResult(a.getResult() || "success").setInitiator(a.getInitiator()).setType(a.getType()).log()
                });
                a.activate();
                return c
            });
            (c = this.$1).addSubscriptions.apply(c, a)
        }
        ;
        c.destroy = function() {
            this.$1.release()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/OzRepresentation", ["oz-player/shims/ozvariant", "oz-player/utils/OzError"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e, f, g, h) {
            this.$1 = a,
            this.$6 = b,
            this.$2 = c,
            this.$3 = d,
            this.$4 = e,
            this.$5 = f,
            this.$7 = g,
            this.$8 = h
        }
        var c = a.prototype;
        c.getID = function() {
            return this.$6
        }
        ;
        c.getBandwidth = function() {
            return this.$5
        }
        ;
        c.getMimeCodecs = function() {
            return this.$2
        }
        ;
        c.getQualityLabel = function() {
            return this.$6
        }
        ;
        c.getInitSegment = function() {
            return this.$3
        }
        ;
        c.getCustomFieldFirstSegment = function() {
            return this.$7
        }
        ;
        c.getCustomField = function(a) {
            if (this.$8 == null || !this.$8[a])
                throw new (b("oz-player/utils/OzError"))({
                    type: "OZ_REPRESENTATION_PARSER",
                    description: "Custom field " + a + " is not specified by caller",
                    extra: {
                        code: "OZ_RP-8"
                    }
                });
            a = this.$8[a];
            try {
                return a(this.$1)
            } catch (a) {
                return null
            }
        }
        ;
        c.updateWith = function(c) {
            c instanceof a || b("oz-player/shims/ozvariant")(0, 229),
            this.$4.updateWith(c.$4)
        }
        ;
        c.getSegmentByTime = function(a) {
            return this.$4.getSegmentByTime(a)
        }
        ;
        c.getSegment = function(a) {
            return this.$4.getSegment(a)
        }
        ;
        c.getPredictedSegmentAfter = function(a) {
            return this.$4.getPredictedSegmentAfter(a)
        }
        ;
        c.canPredict = function() {
            return this.$4.canPredict()
        }
        ;
        c.getSegmentAfter = function(a) {
            return this.$4.getSegmentAfter(a)
        }
        ;
        c.isEndingSegment = function(a) {
            return this.$4.isEndingSegment(a)
        }
        ;
        c.addUpdateListener = function(a) {
            return this.$4.addUpdateListener(a)
        }
        ;
        c.getTimeRanges = function() {
            return this.$4.getTimeRanges()
        }
        ;
        c.blockTimeRange = function(a) {
            this.$4.blockTimeRange(a)
        }
        ;
        c.getEndingSegment = function() {
            return this.$4.getEndingSegment()
        }
        ;
        c.forceParseIfNotParsed = function() {
            return this.$4.forceParseIfNotParsed()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/OzVideoRepresentation", ["oz-player/manifests/OzRepresentation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e, f, g, h, i, j, k) {
            c = a.call(this, b, c, d, e, f, g, h, i) || this;
            c.$OzVideoRepresentation5 = null;
            c.$OzVideoRepresentation1 = j;
            c.$OzVideoRepresentation2 = k;
            c.$OzVideoRepresentation4 = i;
            c.$OzVideoRepresentation3 = b;
            return c
        }
        var c = b.prototype;
        c.getWidth = function() {
            return this.$OzVideoRepresentation1
        }
        ;
        c.getHeight = function() {
            return this.$OzVideoRepresentation2
        }
        ;
        c.getQualityLabel = function() {
            if (this.$OzVideoRepresentation5 !== null && this.$OzVideoRepresentation5 !== void 0)
                return this.$OzVideoRepresentation5;
            var a = this.$OzVideoRepresentation4 ? this.$OzVideoRepresentation4.qualityLabel : null;
            a && (this.$OzVideoRepresentation5 = a(this.$OzVideoRepresentation3));
            (this.$OzVideoRepresentation5 == null || this.$OzVideoRepresentation5 == "") && (this.$OzVideoRepresentation5 = this.getHeight().toString() + "p");
            return this.$OzVideoRepresentation5 || ""
        }
        ;
        return b
    }(b("oz-player/manifests/OzRepresentation"));
    e.exports = a
}
), null);
__d("oz-player/media_source/OzMediaErrorProvider", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.hasError = function() {
            return this.$1.error !== null
        }
        ;
        b.getMediaErrorName = function() {
            var a = this.$1.error;
            return a && a.message ? this.$2(a.message) : null
        }
        ;
        b.getErrorCode = function() {
            var a = this.$1.error;
            return a && a.code ? a.code : null
        }
        ;
        b.getVideoNode = function() {
            return this.$1
        }
        ;
        b.$2 = function(a) {
            a = a.split(":")[0];
            return a || ""
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/shims/ozClearTimeout", ["requireCond", "cr:1615802"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615802");
    e.exports = a
}
), null);
__d("oz-player/states/OzObservedSourceBufferState", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/OzDOMEventListener").listenDOMEvent;
    a = function() {
        function a(a, c) {
            var d = this;
            this.$2 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$3 = [];
            this.$5 = function() {
                if (d.$4.getBool("stable_buffered_timeranges_in_observedsourcebufferstate")) {
                    var a = d.$1.buffered
                      , b = [];
                    for (var c = 0; c < a.length; c++)
                        b.push({
                            startTime: a.start(c),
                            endTime: a.end(c)
                        });
                    d.$3 = b
                } else {
                    a = [];
                    for (var c = 0; c < d.$1.buffered.length; c++)
                        a.push({
                            startTime: d.$1.buffered.start(c),
                            endTime: d.$1.buffered.end(c)
                        });
                    d.$3 = a
                }
            }
            ;
            this.$1 = a;
            this.$4 = c;
            this.$2.addSubscriptions(g(this.$1, "updateend", this.$5), g(this.$1, "error", this.$5))
        }
        var c = a.prototype;
        c.getBufferedRanges = function() {
            return this.$3
        }
        ;
        c.addEventListener = function(a, b) {
            return g(this.$1, "updateend", b)
        }
        ;
        c.destroy = function() {
            this.$2.release(),
            this.$2.engage()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/utils/OzCustomErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        SOURCE_BUFFER_UNKNOWN_ERROR: "21539",
        SOURCE_BUFFER_HAS_BEEN_REMOVED: "21540",
        SOURCE_BUFFER_ERROR_ATTRIBUTE_NOT_NULL: "21541",
        SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE: "21542"
    };
    b = a;
    e.exports = b
}
), null);
__d("oz-player/utils/OzSourceBufferUtil", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getTotalBufferedTime = a;
    f.getEndBufferedTime = b;
    function a(a) {
        var b = 0;
        for (var c = 0; c < a.buffered.length; c++)
            b += a.buffered.end(c) - a.buffered.start(c);
        return b
    }
    function b(a) {
        return a.buffered.length == 0 ? 0 : a.buffered.end(a.buffered.length - 1)
    }
}
), null);
__d("oz-player/utils/ozConcatArrayBuffer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c = new Uint8Array(a.byteLength + b.byteLength);
        c.set(new Uint8Array(a), 0);
        c.set(new Uint8Array(b), a.byteLength);
        return c.buffer
    }
}
), null);
__d("oz-player/media_source/SourceBufferManager", ["oz-player/loggings/OzLoggingUtils", "oz-player/shims/ozClearTimeout", "oz-player/shims/OzDeferred", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzReadableStream", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/OzSubscriptionsHandler", "oz-player/states/OzObservedSourceBufferState", "oz-player/utils/ozConcatArrayBuffer", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/OzSourceBufferUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation
      , h = b("oz-player/shims/OzDOMEventListener").listenDOMEvent
      , i = b("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime
      , j = b("oz-player/utils/OzSourceBufferUtil").getTotalBufferedTime
      , k = b("oz-player/shims/ozSetTimeoutAcrossTransitions");
    a = function() {
        function a(a, c, d) {
            var e = this;
            this.$2 = null;
            this.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$5 = !1;
            this.$6 = [];
            this.$11 = !1;
            this.$12 = !1;
            this.$22 = function() {
                if (e.$8.hasError()) {
                    e.$12 = !1;
                    e.$11 = !1;
                    var a = e.$8.getMediaErrorName();
                    a = a !== null && a !== void 0 ? a : "An unknown source buffer error occurred.";
                    var c = e.$8.getErrorCode();
                    c = c !== null && c !== void 0 ? c : b("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_UNKNOWN_ERROR;
                    a = new (b("oz-player/utils/OzError"))({
                        type: "OZ_SOURCE_BUFFER",
                        description: a,
                        extra: {
                            code: c.toString()
                        }
                    });
                    e.$2 && e.$2.reject(a);
                    e.$2 = null;
                    e.cancelOperationAndCleanQueue()
                } else
                    e.$12 || (e.$12 = !0,
                    e.$3.addSubscriptions(h(e.$8.getVideoNode(), "error", e.$22)))
            }
            ;
            this.$13 = function() {
                var a = e.$2;
                a && (e.$11 ? e.$22() : (a.resolve(),
                e.$2 && (e.$2 = null)))
            }
            ;
            this.$14 = function() {
                e.$9.getBool("fix_source_buffer_error_logging") ? e.$11 = !0 : e.$23()
            }
            ;
            this.$1 = a;
            this.$9 = c;
            this.$3.addSubscriptions(h(this.$1, "updateend", this.$13), h(this.$1, "error", this.$14));
            this.$7 = new (b("oz-player/states/OzObservedSourceBufferState"))(this.$1,this.$9);
            this.$8 = d
        }
        var c = a.prototype;
        c.queueData = function(a, c, d, e) {
            c === void 0 && (c = null);
            d === void 0 && (d = 0);
            e === void 0 && (e = null);
            var f = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
            this.$6.push({
                data: a,
                deferred: f,
                loggerProvider: c,
                appendTarget: d,
                onDataAppend: e
            });
            a = f.getPromise();
            this.$5 || (this.$9.getBool("queue_data_with_error_handling") ? this.$15() : this.$16());
            return a
        }
        ;
        c.cancelOperationAndCleanQueue = function() {
            var a = this.$17();
            this.$6.forEach(function(b) {
                b = b.deferred;
                b.reject(a)
            });
            this.$6 = [];
            this.$1.abort();
            var c = b("oz-player/shims/OzMaybeNativePromise").resolve()
              , d = this.$2;
            d && (d.reject(a),
            c = d.getPromise()["catch"](function() {}));
            this.$4 && (this.$4.reject(a),
            this.$4 = null);
            return c
        }
        ;
        c.getSourceBufferState = function() {
            return this.$7
        }
        ;
        c.clearRange = function(a, b) {
            this.$1.remove(a, b)
        }
        ;
        c.$18 = function(a) {
            var c = this.$2 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
            c = c.getPromise();
            a && g(c, a, "wait_for_source_buffer");
            return c
        }
        ;
        c.$19 = function(a, c, d) {
            var e = this;
            if (this.$2 !== null)
                return b("oz-player/shims/OzMaybeNativePromise").reject(this.$20("cannot have concurrent appends"));
            var f = function f() {
                if (e.$9.getBool("sbm_recursively_waits_for_update_end") && e.$1.updating)
                    return e.$18(c).then(f)["catch"](function(a) {
                        if (e.$9.getBool("enable_appends_on_wait_update_end_failure"))
                            return f();
                        throw a
                    });
                var h = e.$2 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"))
                  , i = !1;
                try {
                    i = e.$1.updating,
                    e.$1.appendBuffer(a)
                } catch (a) {
                    var k = b("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_HAS_BEEN_REMOVED;
                    e.$8.hasError() ? k = b("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_ERROR_ATTRIBUTE_NOT_NULL : i && (k = b("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE);
                    i = new (b("oz-player/utils/OzError"))({
                        type: "OZ_SOURCE_BUFFER",
                        description: a.message,
                        extra: {
                            originalError: a,
                            code: k.toString()
                        }
                    });
                    e.$2 = null;
                    h.reject(i)
                }
                k = h.getPromise();
                c && g(k, c, "append", function(b) {
                    b.setLength(a.byteLength)
                });
                var l = e.$9.getBool("log_appended_secs") ? j(e.$1) : 0;
                return k.then(function() {
                    d && d();
                    return e.$9.getBool("log_appended_secs") ? j(e.$1) - l : 0
                })
            };
            if (!this.$9.getBool("sbm_waits_for_update_end"))
                return f();
            return !this.$9.getBool("sbm_recursively_waits_for_update_end") && this.$1.updating ? this.$18(c).then(f)["catch"](function(a) {
                if (e.$9.getBool("enable_appends_on_wait_update_end_failure"))
                    return f();
                throw a
            }) : f()
        }
        ;
        c.$16 = function() {
            var a = this;
            if (this.$5)
                return b("oz-player/shims/OzMaybeNativePromise").reject(this.$20("Another unit of queued data is being appended."));
            var c = this.$6.shift();
            if (!c) {
                this.$5 = !1;
                return b("oz-player/shims/OzMaybeNativePromise").resolve()
            }
            var d = c.data
              , e = c.deferred
              , f = c.loggerProvider
              , g = c.appendTarget;
            c = c.onDataAppend;
            this.$5 = !0;
            g = d instanceof b("oz-player/shims/OzReadableStream") ? this.$21(d, f, g, c) : this.$19(d, f, c);
            var h = i(this.$1);
            return g["catch"](function(a) {
                e.reject(a);
                return 0
            }).then(function(b) {
                b = i(a.$1);
                e.resolve({
                    startTime_UNSAFE: h,
                    endTime_UNSAFE: b,
                    appendedSec: b - h
                });
                a.$5 = !1;
                a.$16()
            })
        }
        ;
        c.$15 = function() {
            var a = this;
            try {
                if (this.$5)
                    throw this.$20("Another unit of queued data is being appended.");
                var c = this.$6.shift();
                if (!c) {
                    this.$5 = !1;
                    return
                }
                var d = c.data
                  , e = c.deferred
                  , f = c.loggerProvider;
                c = c.appendTarget;
                this.$5 = !0;
                c = d instanceof b("oz-player/shims/OzReadableStream") ? this.$21(d, f, c) : this.$19(d, f);
                var g = i(this.$1);
                c.then(function(b) {
                    b = i(a.$1);
                    e.resolve({
                        startTime_UNSAFE: g,
                        endTime_UNSAFE: b,
                        appendedSec: b - g
                    })
                }, function(a) {
                    e.reject(a)
                })["finally"](function() {
                    a.$5 = !1,
                    a.$15()
                })
            } catch (a) {
                new (b("oz-player/utils/OzError"))({
                    type: "OZ_JAVASCRIPT_NATIVE",
                    description: a.message,
                    extra: {
                        originalError: a,
                        code: "0"
                    }
                })
            }
        }
        ;
        c.$21 = function(a, c, d, e) {
            var f = this
              , g = new ArrayBuffer(0)
              , h = a.getReader();
            a = function a() {
                var i = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
                f.$4 = i;
                h.read().then(function(a) {
                    i.resolve(a),
                    f.$4 = null
                })["catch"](function(a) {
                    i.reject(a),
                    f.$4 = null
                });
                return i.getPromise().then(function(h) {
                    var i = h.done;
                    h = h.value;
                    if (i)
                        return g.byteLength > 0 ? f.$19(g, c, e) : b("oz-player/shims/OzMaybeNativePromise").resolve(0);
                    i = h;
                    d > 0 && (h instanceof Uint8Array && (h = h.buffer),
                    g = b("oz-player/utils/ozConcatArrayBuffer")(g, h),
                    i = g);
                    if (i && i.byteLength >= d) {
                        g = new ArrayBuffer(0);
                        return f.$19(i, c, e).then(function(b) {
                            return a().then(function(a) {
                                return a + b
                            })
                        })
                    }
                    return a()
                })
            }
            ;
            return a()
        }
        ;
        c.$23 = function() {
            var a = this
              , c = this.$2;
            c && (b("oz-player/shims/ozClearTimeout")(this.$10),
            this.$10 = k(function() {
                a.$10 = null;
                var d = a.$8.getErrorCode()
                  , e = a.$8.getMediaErrorName()
                  , f = {};
                f.code = d !== null && d !== void 0 ? d.toString() : e != null ? e : "OZ_SB-1";
                d = new (b("oz-player/utils/OzError"))({
                    type: "OZ_SOURCE_BUFFER",
                    description: e !== null && e !== void 0 ? e : "Unknown SourceBuffer Append Error",
                    extra: f
                });
                c.reject(d);
                a.$2 = null
            }, 0))
        }
        ;
        c.$20 = function(a) {
            a = new Error(a);
            a.name = "invariant_violation";
            return a
        }
        ;
        c.$17 = function() {
            var a = new Error("operation is cancelled");
            a.name = "cancelled";
            return a
        }
        ;
        c.destroy = function() {
            var a = this;
            b("oz-player/shims/ozClearTimeout")(this.$10);
            this.$10 = null;
            var c = this.$2;
            c && (!this.$12 ? (c.reject(this.$17()),
            this.$2 = null,
            this.$3.release(),
            this.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))()) : c.getPromise()["catch"](function() {
                a.$2 = null,
                a.$3.release(),
                a.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))()
            }));
            this.$7.destroy()
        }
        ;
        c.getDebug = function() {
            return {
                SourceBuffer: this.$1
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/media_source/MediaSourceManager", ["oz-player/loggings/OzLoggingUtils", "oz-player/loggings/OzMultiDestinationPerfLogger", "oz-player/shims/OzDeferred", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzSubscriptionsHandler", "oz-player/media_source/OzMediaErrorProvider", "oz-player/media_source/SourceBufferManager"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation
      , h = b("oz-player/loggings/OzMultiDestinationPerfLogger").OzMultiDestinationPerfLoggerProvider
      , i = b("oz-player/shims/OzDOMEventListener").listenDOMEvent;
    a = function() {
        function a(a, c, d) {
            var e = this;
            d === void 0 && (d = new h([]));
            this.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$5 = [];
            this.$6 = [];
            this.$8 = !1;
            this.$10 = !1;
            this.$12 = function() {
                e.$13() || (e.$8 = !1);
                if (!e.$14())
                    return;
                var a = e.$6.shift();
                a && (a(e.$2),
                e.$8 = !0)
            }
            ;
            this.$4 = d;
            this.$9 = c;
            this.$1 = a;
            this.$2 = new MediaSource();
            this.$1.src = window.URL.createObjectURL(this.$2);
            this.$7 = new (b("oz-player/media_source/OzMediaErrorProvider"))(this.$1);
            g(this.$11(), this.$4, "media_source_open")
        }
        var c = a.prototype;
        c.$11 = function() {
            var a = this;
            if (this.$2.readyState === "open")
                return b("oz-player/shims/OzMaybeNativePromise").resolve();
            var c = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
            this.$3.addSubscriptions(i(this.$2, "sourceopen", function() {
                c.resolve(),
                a.$12()
            }));
            return c.getPromise()
        }
        ;
        c.createSourceBufferManager = function(a, c) {
            var d = this;
            c === void 0 && (c = !1);
            return this.$11().then(function() {
                var e = d.$2.addSourceBuffer(a);
                c && !isNaN(d.$2.duration) && (e.appendWindowEnd = d.$2.duration);
                d.$5.push(e);
                d.$3.addSubscriptions(i(e, "updateend", d.$12));
                return new (b("oz-player/media_source/SourceBufferManager"))(e,d.$9,d.$7)
            })
        }
        ;
        c.getMediaSource = function() {
            return this.$2
        }
        ;
        c.notifyEndOfStream = function() {
            var a = this;
            this.$6.push(function(b) {
                a.$4.getOperationLogger("end_of_stream").log(),
                b.endOfStream()
            });
            this.$12()
        }
        ;
        c.updateDuration = function(a) {
            this.$6.push(function(b) {
                b.duration = a
            }),
            this.$12()
        }
        ;
        c.detach = function() {
            this.$1.removeAttribute("src");
            for (var a = 0; a < this.$2.sourceBuffers.length; a++) {
                var b = this.$2.sourceBuffers[a];
                this.$2.removeSourceBuffer(b)
            }
            this.$3.release();
            this.$3.engage();
            this.$6 = [];
            this.$8 = !1;
            this.$10 = !0
        }
        ;
        c.$14 = function() {
            return !this.$13() && this.$2.readyState === "open" && !this.$8 && !this.$10
        }
        ;
        c.$13 = function() {
            return this.$5.some(function(a) {
                return a.updating
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/media_source/OzMediaSeekableRangeManager", ["oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c) {
            var d = this;
            this.$5 = function() {
                var a = d.$2;
                if (!a)
                    return;
                a = a.getTimeRanges();
                if (!a.length)
                    return;
                a = a[a.length - 1];
                var b = d.$1.getMediaSource();
                d.$4.getBool("update_media_source_duration") && (b.duration === Infinity || b.duration < a.endTime || isNaN(b.duration)) && d.$1.updateDuration(a.endTime)
            }
            ;
            this.$1 = a;
            this.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$4 = c;
            this.$5()
        }
        var c = a.prototype;
        c.setTimeRangeProvider = function(a) {
            this.$3.release(),
            this.$3.engage(),
            this.$3.addSubscriptions(a.addUpdateListener(this.$5)),
            this.$2 = a
        }
        ;
        c.listenToMediaStreamInitAppended = function(a) {
            var b = this;
            return a.addListener("initAppended", function() {
                if (b.$4.getBool("update_duration_when_init_appended")) {
                    var a = b.$1.getMediaSource();
                    (a.duration === Infinity || isNaN(a.duration)) && b.$5()
                }
            })
        }
        ;
        c.destroy = function() {
            this.$3.release()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/networks/OzCreateErrorStream", ["oz-player/shims/OzReadableStream"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return new (b("oz-player/shims/OzReadableStream"))({
            pull: function(b) {
                b.error(a)
            }
        })
    }
}
), null);
__d("oz-player/utils/arrayBuffer2OzReadableStream", ["oz-player/shims/OzReadableStream"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return new (b("oz-player/shims/OzReadableStream"))({
            start: function(b) {
                var c = new Uint8Array(a);
                b.enqueue(c);
                b.close()
            }
        })
    }
}
), null);
__d("oz-player/utils/maybeConvertReadableStreamToOzReadableStream", ["regeneratorRuntime", "oz-player/shims/OzReadableStream"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (!b("oz-player/shims/OzReadableStream").isPolyfilled)
            return a;
        var c = a.getReader();
        return new (b("oz-player/shims/OzReadableStream"))({
            start: function(a) {
                var d, e, f;
                return b("regeneratorRuntime").async(function(g) {
                    while (1)
                        switch (g.prev = g.next) {
                        case 0:
                            g.next = 3;
                            return b("regeneratorRuntime").awrap(c.read());
                        case 3:
                            d = g.sent;
                            e = d.done;
                            f = d.value;
                            if (!e) {
                                g.next = 8;
                                break
                            }
                            return g.abrupt("break", 11);
                        case 8:
                            a.enqueue(f);
                            g.next = 0;
                            break;
                        case 11:
                            a.close();
                        case 12:
                        case "end":
                            return g.stop()
                        }
                }, null, this)
            }
        })
    }
}
), null);
__d("oz-player/utils/processFetchResponse", ["oz-player/utils/arrayBuffer2OzReadableStream", "oz-player/utils/maybeConvertReadableStreamToOzReadableStream"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = a.body
          , d = a.ok
          , e = a.status
          , f = a.headers;
        return c != null ? {
            ok: d,
            status: e,
            headers: f,
            body: b("oz-player/utils/maybeConvertReadableStreamToOzReadableStream")(c)
        } : a.arrayBuffer().then(function(a) {
            return {
                ok: d,
                status: e,
                headers: f,
                body: b("oz-player/utils/arrayBuffer2OzReadableStream")(a)
            }
        })
    }
    e.exports = a
}
), null);
__d("oz-player/networks/OzFetch", ["oz-player/shims/ozClearTimeout", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/utils/arrayBuffer2OzReadableStream", "oz-player/utils/maybeConvertReadableStreamToOzReadableStream", "oz-player/utils/processFetchResponse"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = window.fetch
      , h = b("oz-player/shims/ozSetTimeoutAcrossTransitions");
    function a(a, c, d) {
        if (!g)
            throw new Error("fetch api is missing");
        var e = null;
        if ("AbortController"in window && d && d.networkTimeoutMs != null && d.networkTimeoutMs != 0) {
            var f = new AbortController();
            e = h(function() {
                return f.abort()
            }, d.networkTimeoutMs);
            c.signal = f.signal
        }
        d = g(a, c).then(function(a) {
            b("oz-player/shims/ozClearTimeout")(e);
            return b("oz-player/utils/processFetchResponse")(a)
        });
        return d
    }
}
), null);
__d("oz-player/networks/OzFetchWithCache", ["oz-player/networks/OzFetch", "oz-player/utils/arrayBuffer2OzReadableStream", "oz-player/utils/OzError", "oz-player/utils/processFetchResponse"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e, f, g, h, i) {
        e === void 0 && (e = null);
        g === void 0 && (g = null);
        i === void 0 && (i = "DISABLE_CACHE");
        if (!fetch)
            throw new (b("oz-player/utils/OzError"))({
                type: "OZ_FETCH",
                description: "fetch api is missing"
            });
        var j = e != null ? e : b("oz-player/networks/OzFetch");
        e = a.getBool("use_segment_request_cache") && i === "ENABLE_CACHE" ? h.get(c) : null;
        g = g ? g.getCacheValue(c) : null;
        e = e != null ? e : g;
        g = !1;
        e ? (i === "ENABLE_CACHE" && h.set(c, e),
        g = !0,
        i = e.then(function(a) {
            if (a.initiator === "FETCH")
                return b("oz-player/utils/processFetchResponse")(a.response);
            else if (a.initiator === "XHR_REQUEST") {
                var c = b("oz-player/utils/arrayBuffer2OzReadableStream")(a.response);
                return {
                    body: c,
                    status: 200,
                    headers: null,
                    ok: !0
                }
            } else
                throw new (b("oz-player/utils/OzError"))({
                    type: "OZ_UNEXPECTED_CACHE_INITIATOR",
                    description: "Unable to handle request initiator: " + a.initiator
                })
        })["catch"](function(b) {
            if (a.getBool("retry_fetch_on_prefetch_error"))
                return j(c, d);
            else
                throw new TypeError()
        })) : i = j(c, d, f);
        return {
            promise: i,
            retrievedFromCache: g
        }
    }
}
), null);
__d("oz-player/networks/OzNetworkRequestStream", ["oz-player/shims/ozvariant", "oz-player/networks/createNetworkError", "oz-player/networks/OzCreateErrorStream", "oz-player/networks/OzFetchWithCache", "oz-player/networks/OzTransformStream"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e, f, g, h, i) {
            e === void 0 && (e = null),
            f === void 0 && (f = null),
            g === void 0 && (g = null),
            i === void 0 && (i = "DISABLE_CACHE"),
            this.$6 = !1,
            this.$1 = b,
            this.$2 = c,
            this.$3 = d,
            this.$8 = e || [],
            this.$7 = f,
            this.$9 = g,
            this.$11 = a,
            this.$10 = h,
            this.$12 = i
        }
        var c = a.prototype;
        c.startStream = function(a) {
            var c = this;
            a = this.$3.createRequestParam(this.$1, a);
            var d = a.uri;
            a = a.http;
            var e = d.toString();
            this.$4 = e;
            d = b("oz-player/networks/OzFetchWithCache")(this.$11, e, a, this.$7, this.$2, this.$9, this.$10, this.$12);
            a = d.promise;
            d = d.retrievedFromCache;
            this.$6 = d;
            return a.then(function(a) {
                var d = [];
                for (var f = 0; f < c.$8.length; f++)
                    try {
                        var g = c.$8[f].onResponse(a, e);
                        g && d.push(g)
                    } catch (a) {
                        return b("oz-player/networks/OzCreateErrorStream")(a)
                    }
                g = a.body;
                f = a.headers;
                var h = a.ok
                  , i = a.status;
                if (!h)
                    return b("oz-player/networks/OzCreateErrorStream")(b("oz-player/networks/createNetworkError")(new Error("HTTP status not OK"), i, f, e, "HTTP error."));
                g.getReader || b("oz-player/shims/ozvariant")(0, 3287);
                h = g;
                c.$5 = a;
                for (var i = 0; i < d.length; i++)
                    h = h.pipeThrough(d[i]);
                if (!c.$11.getBool("throw_network_error_during_stream"))
                    return h;
                f = new (b("oz-player/networks/OzTransformStream"))({
                    errorTransform: function(a) {
                        return a instanceof TypeError ? b("oz-player/networks/createNetworkError")(a, 0, null, e, "Network failure.") : a
                    }
                });
                return h.pipeThrough(f)
            }, function(a) {
                var d = [];
                for (var f = 0; f < c.$8.length; f++)
                    try {
                        var g = c.$8[f].onError(a, e);
                        g && d.push(g)
                    } catch (a) {
                        return b("oz-player/networks/OzCreateErrorStream")(a)
                    }
                if (a instanceof TypeError) {
                    g = b("oz-player/networks/OzCreateErrorStream")(b("oz-player/networks/createNetworkError")(a, 0, null, e, "Network failure."));
                    for (var f = 0; f < d.length; f++)
                        g = g.pipeThrough(d[f]);
                    return g
                }
                throw a
            })["catch"](function(a) {
                return a.name === "AbortError" ? b("oz-player/networks/OzCreateErrorStream")({
                    type: a.name,
                    status: a.code,
                    url: e,
                    message: a
                }) : b("oz-player/networks/OzCreateErrorStream")({
                    type: "stream_processing",
                    status: 0,
                    url: e,
                    message: "Stream processing error. " + a
                })
            })
        }
        ;
        c.getLastRequestUrl = function() {
            return this.$4
        }
        ;
        c.getLastResponse = function() {
            return this.$5
        }
        ;
        c.retrievedFromCache = function() {
            return this.$6
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/OzByteRange", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.startsAtSame = a;
    f.startsImmediateAfter = b;
    f.startsDuring = c;
    f.union = d;
    f.disjoinAfter = e;
    f.getLength = g;
    function a(a, b) {
        return a.startByte === b.startByte
    }
    function b(a, b) {
        return b.endByte === null ? !1 : a.startByte === b.endByte + 1
    }
    function c(a, b) {
        return a.startByte < b.startByte ? !1 : b.endByte == null || b.endByte >= a.startByte
    }
    function d(a, b) {
        a = a;
        b = b;
        if (b.startByte < a.startByte) {
            var c = a;
            a = b;
            b = c
        }
        if (a.endByte == null)
            return {
                startByte: a.startByte,
                endByte: null
            };
        if (b.startByte > a.endByte + 1)
            return null;
        c = b.endByte == null || b.endByte > a.endByte ? b.endByte : a.endByte;
        return {
            startByte: a.startByte,
            endByte: c
        }
    }
    function e(a, b) {
        if (b.endByte == null)
            return null;
        if (a.startByte > b.endByte)
            return {
                startByte: a.startByte,
                endByte: a.endByte
            };
        return a.endByte != null && a.endByte <= b.endByte ? null : {
            startByte: b.endByte + 1,
            endByte: a.endByte
        }
    }
    function g(a) {
        return a.endByte == null ? null : a.endByte - a.startByte + 1
    }
}
), null);
__d("oz-player/networks/OzProducerInterruptedError", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    e.exports = a
}
), null);
__d("oz-player/networks/OzDeferredBuffer", ["oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/networks/OzProducerInterruptedError"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            a === void 0 && (a = {});
            this.$2 = [];
            this.$3 = !1;
            this.$5 = 0;
            a = a;
            a = a.disableArrayShift;
            this.$1 = !!a
        }
        var c = a.prototype;
        c.produce = function(a) {
            this.$6(a)
        }
        ;
        c.signalProducerInterruption = function() {
            this.$6(new (b("oz-player/networks/OzProducerInterruptedError"))("producer interrupted"))
        }
        ;
        c.consume = function(a) {
            var c = this;
            if (this.$3)
                throw new Error("A buffer can only be consumed by one client at a time");
            this.$3 = !0;
            var d = b("oz-player/shims/OzMaybeNativePromise").resolve();
            this.isEmpty() && (this.$4 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise")),
            d = this.$4.getPromise());
            return d.then(function() {
                if (c.$1) {
                    if (c.$2[c.$5] === void 0)
                        throw new Error("buffer has no value at position " + c.$5)
                } else if (c.$2.length === 0)
                    throw new Error("buffer length must not be 0");
                c.$4 = null;
                c.$3 = !1;
                var b = c.$1 ? c.$7(a) : c.$8(a);
                if (b instanceof Uint8Array)
                    return b;
                throw b
            })
        }
        ;
        c.$6 = function(a) {
            this.$2.push(a),
            this.$4 && this.$4.resolve()
        }
        ;
        c.$7 = function(a) {
            var b = this.$2[this.$5];
            if (b === void 0)
                return new Uint8Array([]);
            b = b;
            if (!(b instanceof Uint8Array)) {
                this.$2[this.$5] = void 0;
                this.$5++;
                return b
            }
            if (a !== void 0 && b.length > a) {
                var c = b.slice(a);
                b = b.slice(0, a);
                this.$2[this.$5] = c
            } else
                this.$2[this.$5] = void 0,
                this.$5++;
            return b
        }
        ;
        c.$8 = function(a) {
            if (this.$2.length === 0)
                return new Uint8Array([]);
            var b = this.$2[0];
            if (!(b instanceof Uint8Array)) {
                this.$2.shift();
                return b
            }
            if (a !== void 0 && b.length > a) {
                var c = b.slice(a);
                b = b.slice(0, a);
                this.$2[0] = c
            } else
                this.$2.shift();
            return b
        }
        ;
        c.isEmpty = function() {
            return this.$1 ? this.$2[this.$5] === void 0 : this.$2.length === 0
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/utils/ozPipeErrorTo", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        try {
            a.error(b)
        } catch (a) {}
    }
}
), null);
__d("oz-player/networks/OzPausableRangeStream", ["oz-player/manifests/OzByteRange", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/utils/ozPipeErrorTo", "oz-player/networks/OzDeferredBuffer"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/manifests/OzByteRange").startsImmediateAfter;
    function h() {
        return new Error("Upstream has an inconsistent range")
    }
    var i = function() {
        function a() {
            this.$1 = 0
        }
        var b = a.prototype;
        b.setBytesToSkip = function(a) {
            this.$1 = a
        }
        ;
        b.setBytesSkipped = function(a) {
            this.$1 -= a
        }
        ;
        b.getBytesToSkip = function() {
            return this.$1
        }
        ;
        b.hasMoreBytesToSkip = function() {
            return this.$1 > 0
        }
        ;
        return a
    }();
    a = function() {
        function a(a, c, d, e, f) {
            var g = this;
            this.$5 = !1;
            this.$7 = 0;
            this.$8 = 0;
            this.$13 = !1;
            this.$14 = 0;
            this.$15 = new i();
            this.$16 = !1;
            this.$17 = !1;
            this.$18 = !1;
            this.$19 = a;
            this.$20 = c;
            this.$1 = d;
            this.$2 = e;
            a = f || {};
            c = a.fixStreamingUndefinedEndByte;
            d = a.disableDeferredBufferArrayShift;
            e = a.enablePausableStreamResumeFromStartDangerously;
            f = a.fixPausePreReadableStream;
            a = a.throwErrorWhenAborted;
            this.$11 = !!c;
            this.$16 = !!e;
            this.$17 = !!f;
            this.$18 = !!a;
            this.$3 = new (b("oz-player/networks/OzDeferredBuffer"))({
                disableArrayShift: !!d
            });
            this.$6 = new this.$19({
                start: function(a) {
                    g.$10 = a
                },
                pull: function(a) {
                    if ((g.$11 && g.$1.endByte === null && g.$5 || g.$7 === g.$21()) && g.$3.isEmpty()) {
                        a.close();
                        return b("oz-player/shims/OzMaybeNativePromise").resolve()
                    }
                    var c = function c() {
                        var d = g.$15.hasMoreBytesToSkip() ? g.$15.getBytesToSkip() : void 0;
                        return g.$3.consume(d).then(function(d) {
                            if (g.$15.hasMoreBytesToSkip()) {
                                g.$15.setBytesSkipped(d.length);
                                return c()
                            }
                            g.$7 += d.length;
                            var e = g.$21();
                            e !== null && g.$7 > (e || 0) && b("oz-player/utils/ozPipeErrorTo")(g.$10, h());
                            a.enqueue(d)
                        })["catch"](function(a) {
                            if (a === "skip_buffered_bytes") {
                                g.$15.setBytesToSkip(g.$7);
                                return c()
                            }
                            throw a
                        })
                    };
                    return c()
                },
                cancel: function(a) {
                    g.$12 && g.$12.resolve("stream_cancelled"),
                    b("oz-player/utils/ozPipeErrorTo")(g.$9, a)
                }
            });
            this.$22()
        }
        var c = a.prototype;
        c.$21 = function() {
            var a = this.$1
              , b = a.startByte;
            a = a.endByte;
            return a != null ? a - b + 1 : null
        }
        ;
        c.$22 = function() {
            var a = this;
            this.$4 = new this.$20({
                start: function(b) {
                    a.$9 = b
                },
                write: function(b) {
                    a.$3.produce(b),
                    a.$8 += b.length
                },
                close: function() {
                    a.$5 = !0;
                    var c = a.$1
                      , d = c.endByte;
                    c = c.startByte;
                    a.$11 && d === null && a.$3.produce(new Uint8Array([]));
                    d !== null && a.$8 !== (d || 0) - c + 1 && b("oz-player/utils/ozPipeErrorTo")(a.$10, h())
                },
                abort: function(c) {
                    a.$12 && (a.$18 ? a.$12.reject(c) : a.$12.resolve("stream_aborted")),
                    b("oz-player/utils/ozPipeErrorTo")(a.$10, c)
                }
            })
        }
        ;
        c.getStream = function() {
            return this.$6
        }
        ;
        c.startStream = function() {
            var c = this;
            this.$13 = !0;
            var d = {
                startByte: this.$1.startByte,
                endByte: this.$1.endByte
            };
            !this.$16 ? d.startByte += this.$8 : this.$8 && (this.$3.produce("skip_buffered_bytes"),
            this.$8 = 0);
            var e = this.$4;
            return this.$2.startStream(d).then(function(d) {
                d.pipeTo(c.$17 ? e : c.$4).then(function() {
                    c.$12 && c.$12.resolve("stream_done")
                })["catch"](function(b) {
                    c.$12 && !c.$12.isSettled() && (c.$17 && b === a.STREAM_PAUSED ? c.$12.resolve("stream_paused") : c.$12.reject(b))
                });
                c.$12 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
                return {
                    statusPromise: c.$12.getPromise()
                }
            })
        }
        ;
        c.pauseStream = function() {
            b("oz-player/utils/ozPipeErrorTo")(this.$9, a.STREAM_PAUSED),
            this.$12 && this.$12.resolve("stream_paused"),
            this.$22()
        }
        ;
        c.getByteRange = function() {
            return this.$1
        }
        ;
        c.getBytesStreamed = function() {
            return this.$7
        }
        ;
        c.tryConcatByteRange = function(a) {
            if (this.$13 || !g(a, this.$1))
                return !1;
            this.$1.endByte = a.endByte;
            return !0
        }
        ;
        return a
    }();
    a.STREAM_PAUSED = "streamPaused";
    e.exports = a
}
), null);
__d("oz-player/networks/RequestParamCreator", ["oz-player/shims/OzURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.createRequestParam = function(a, c) {
            a = new (b("oz-player/shims/OzURI"))(a.toString());
            if (c) {
                var d = c.startByte
                  , e = c.endByte;
                d === 0 && (e === null || e === void 0) || (a = a.addQueryData({
                    bytestart: c.startByte
                }),
                e !== null && e !== void 0 && (a = a.addQueryData({
                    byteend: e
                })))
            }
            d = this.$1 && this.$1(a) ? "include" : "same-origin";
            return {
                uri: a,
                http: {
                    credentials: d
                }
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/networks/getOzSegmentStreamableRange", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (!a.length)
            return null;
        var b = a[0].getURI().toString()
          , c = a[0].getByteRange();
        if (!c)
            return null;
        var d = c;
        for (var e = 1; e < a.length; e++) {
            var f = a[e];
            if (f.getURI().toString() !== b)
                return null;
            f = f.getByteRange();
            if (!d || !f)
                return null;
            if (d.endByte === null || f.startByte !== d.endByte + 1)
                return null;
            d = f
        }
        return {
            startByte: c.startByte,
            endByte: d.endByte
        }
    }
}
), null);
__d("oz-player/utils/OzNetworkRequestLoggingUtils", ["oz-player/utils/OzResourceTimingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        return a ? parseInt(a.get("content-length"), 10) : null
    }
      , h = function(a) {
        return a ? a.get("x-fb-edge-hit") : null
    }
      , i = function(a) {
        return a ? a.get("x-fb-origin-hit") : null
    }
      , j = function(a, c) {
        c = b("oz-player/utils/OzResourceTimingUtils").getLatestResourceTimingEntry(c);
        c && a.setTimeToFirstByte(Math.round(c.responseStart - c.startTime)).setTimeToLastByte(Math.round(c.responseEnd - c.startTime)).setTimeToRequestStart(Math.round(c.requestStart - c.startTime))
    };
    f.setPerformanceLoggingAttributes = j;
    a = function(a, b, c, d, e, f, k) {
        d.length && a.setSegmentCount(d.length),
        b && j(a, b),
        a.setResource(b || null).setInitiator(c ? "prefetch" : "fetch").setTimeToRequestSent(Math.round(Math.floor(e))).setContentLengthHeader(g(k == null ? void 0 : k.headers)).setEdgeHitHeader(h(k == null ? void 0 : k.headers)).setOriginHitHeader(i(k == null ? void 0 : k.headers)).setCode(k == null ? void 0 : k.status).setLength(f)
    }
    ;
    f.setFetchStreamLoggingAttributes = a
}
), null);
__d("oz-player/networks/OzNetworkManager", ["oz-player/loggings/OzLoggingUtils", "oz-player/shims/OzReadableStream", "oz-player/shims/OzURI", "oz-player/shims/ozvariant", "oz-player/shims/OzWritableStream", "oz-player/utils/OzError", "oz-player/utils/OzNetworkRequestLoggingUtils", "oz-player/networks/getOzSegmentStreamableRange", "oz-player/networks/OzNetworkRequestStream", "oz-player/networks/OzPausableRangeStream", "oz-player/networks/RequestParamCreator"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f) {
            c === void 0 && (c = null),
            d === void 0 && (d = null),
            e === void 0 && (e = null),
            this.$2 = a,
            this.$6 = f,
            this.$1 = new (b("oz-player/networks/RequestParamCreator"))(this.$6),
            this.$3 = c,
            this.$4 = d,
            this.$5 = e,
            this.$7 = new Map()
        }
        var c = a.prototype;
        c.destroy = function() {
            this.$7 && this.$7.clear()
        }
        ;
        c.request = function(a, c, d, e) {
            d === void 0 && (d = null);
            e === void 0 && (e = "DISABLE_CACHE");
            a.length > 0 || b("oz-player/shims/ozvariant")(0, 212);
            var f = b("oz-player/networks/getOzSegmentStreamableRange")(a) || {
                startByte: 0,
                endByte: null
            };
            e = new (b("oz-player/networks/OzNetworkRequestStream"))(this.$2,a[0].getURI(),null,this.$1,this.$4,this.$5,this.$3,this.$7,e);
            return this.$8(f, e, c, d, a)
        }
        ;
        c.createPausableStream = function(a, c, d) {
            a.length > 0 || b("oz-player/shims/ozvariant")(0, 212);
            var e = b("oz-player/networks/getOzSegmentStreamableRange")(a) || {
                startByte: 0,
                endByte: null
            }
              , f = null
              , g = this.$2.getNumber("network_seg_timeout_ms");
            g > 0 && (f = {
                networkTimeoutMs: g
            });
            var h = new (b("oz-player/networks/OzNetworkRequestStream"))(this.$2,a[0].getURI(),f,this.$1,this.$4,this.$5,this.$3,this.$7);
            return {
                pausableStream: this.$9(e, h, c || null, d),
                loggingPayloads: {
                    getRequestUrl: function() {
                        return h.getLastRequestUrl() || null
                    },
                    isPrefetch: function() {
                        return h.retrievedFromCache()
                    },
                    segments: a,
                    getResponse: function() {
                        return h.getLastResponse()
                    }
                }
            }
        }
        ;
        c.requestRawUrl = function(a, c, d, e) {
            e === void 0 && (e = null);
            c = new (b("oz-player/networks/OzNetworkRequestStream"))(this.$2,new (b("oz-player/shims/OzURI"))(a),d,this.$1,this.$4,this.$5,this.$3,this.$7);
            a = {
                startByte: 0,
                endByte: null
            };
            return this.$8(a, c, [], e)
        }
        ;
        c.$9 = function(a, c, d, e) {
            c = c;
            if (d != null)
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    c = g(this.$2, c, e)
                }
            return new (b("oz-player/networks/OzPausableRangeStream"))(b("oz-player/shims/OzReadableStream"),b("oz-player/shims/OzWritableStream"),a,c,{
                fixStreamingUndefinedEndByte: !0,
                enablePausableStreamResumeFromStartDangerously: !0,
                fixPausePreReadableStream: !0,
                throwErrorWhenAborted: this.$2.getBool("pausable_stream_throws_error_when_aborted")
            })
        }
        ;
        c.$8 = function(a, c, d, e, f) {
            f === void 0 && (f = []);
            var g = this.$9(a, c, d, e);
            a = g.startStream();
            var h = this.$10(a);
            e && b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(h, e, "fetch_stream", function() {}, function(a) {
                b("oz-player/utils/OzNetworkRequestLoggingUtils").setFetchStreamLoggingAttributes(a, c.getLastRequestUrl(), c.retrievedFromCache(), f, 0, g.getBytesStreamed(), c.getLastResponse())
            });
            return {
                getStream: function() {
                    return g.getStream()
                },
                cancel: function() {
                    return g.pauseStream()
                },
                getStatusChangePromise: function() {
                    return h
                }
            }
        }
        ;
        c.$10 = function(a) {
            var c = this;
            return a.then(function(a) {
                a = a.statusPromise;
                return a.then(function(a) {
                    if (a === "stream_done" || !c.$2.getBool("enable_network_manager_error"))
                        return "done";
                    throw new (b("oz-player/utils/OzError"))({
                        description: a,
                        type: "OZ_NETWORK"
                    })
                })
            })
        }
        ;
        a.getStreamableSegmentsRange = function(a) {
            if (!a.length)
                return [];
            return !b("oz-player/networks/getOzSegmentStreamableRange")(a) ? [a[0]] : a.slice(0)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/Mpd", ["oz-player/shims/OzEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e, f, g, h) {
            var i;
            i = a.call(this) || this;
            i.$Mpd8 = !1;
            i.$Mpd1 = b;
            i.$Mpd4 = f;
            i.$Mpd2 = c;
            i.$Mpd3 = d;
            i.$Mpd5 = e;
            i.$Mpd6 = g;
            i.$Mpd7 = h;
            return i
        }
        var c = b.prototype;
        c.updateLocation = function(a) {
            this.$Mpd5 = a,
            this.$Mpd8 = !0,
            this.emit("locationUpdated")
        }
        ;
        c.getLocation = function() {
            return this.$Mpd5
        }
        ;
        c.getMinimumUpdatePeriod = function() {
            return this.$Mpd4
        }
        ;
        c.getVideoRepresentations = function() {
            return this.$Mpd2
        }
        ;
        c.getAudioRepresentations = function() {
            return this.$Mpd3
        }
        ;
        c.getCustomField = function(a) {
            var b = this.$Mpd6.get(a);
            if (!b)
                throw new Error("Custom parser not specified for field " + a);
            try {
                return b(this.$Mpd1)
            } catch (a) {
                return null
            }
        }
        ;
        c.isStaticMpd = function() {
            return this.$Mpd7
        }
        ;
        c.updateWith = function(a) {
            this.$Mpd8 && (this.$Mpd8 = !1,
            this.$Mpd2.splice(0, this.$Mpd2.length),
            this.$Mpd3.splice(0, this.$Mpd3.length)),
            this.$Mpd1 = a.$Mpd1,
            this.$Mpd9(this.$Mpd2, a.getVideoRepresentations()),
            this.$Mpd9(this.$Mpd3, a.getAudioRepresentations()),
            this.$Mpd7 = a.isStaticMpd(),
            this.$Mpd4 = a.getMinimumUpdatePeriod(),
            this.emit("updated")
        }
        ;
        c.blockTimeRange = function(a) {
            this.$Mpd2.forEach(function(b) {
                return b.blockTimeRange(a)
            }),
            this.$Mpd3.forEach(function(b) {
                return b.blockTimeRange(a)
            })
        }
        ;
        c.unblockTimeRange = function() {
            this.blockTimeRange({
                startTime: 0,
                endTime: 0
            })
        }
        ;
        c.$Mpd9 = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = !1;
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    if (d.getID() === g.getID()) {
                        g.updateWith(d);
                        e = !0;
                        break
                    }
                }
                e || a.push(d)
            }
        }
        ;
        return b
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/manifests/OzAudioRepresentation", ["oz-player/manifests/OzRepresentation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e, f, g, h, i) {
            d = a.call(this, b, c, d, e, f, g, h, i) || this;
            d.$OzAudioRepresentation1 = b;
            d.$OzAudioRepresentation2 = c;
            d.$OzAudioRepresentation3 = g;
            return d
        }
        var c = b.prototype;
        c.getBitrateKbps = function() {
            var a = 1024;
            return (this.$OzAudioRepresentation3 / a).toFixed(1) + "Kbps"
        }
        ;
        c.getQualityLabel = function() {
            return this.$OzAudioRepresentation2
        }
        ;
        return b
    }(b("oz-player/manifests/OzRepresentation"));
    e.exports = a
}
), null);
__d("oz-player/parsers/OzSegmentTemplateParser", ["oz-player/parsers/OzDefaultSegmentTimelineParser", "oz-player/shims/OzURI", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, b) {
            b === void 0 && (b = null),
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.getTimeRange = function() {
            return {
                startTime: 0,
                endTime: 0
            }
        }
        ;
        b.getByteRange = function() {
            return this.$2
        }
        ;
        b.getURI = function() {
            return this.$1
        }
        ;
        b.getSequenceNumber = function() {
            return null
        }
        ;
        return a
    }();
    a = function() {
        function a(a, c, d, e) {
            this.$2 = d,
            this.$1 = c,
            this.$3 = a,
            e ? this.$4 = e : this.$4 = new (b("oz-player/parsers/OzDefaultSegmentTimelineParser"))()
        }
        var c = a.prototype;
        c.parseInitializationSegment = function() {
            var a = b("oz-player/utils/OzUrlHelper").joinUrlPaths(this.$2.baseUrl, this.$1.$.initialization);
            return new g(new (b("oz-player/shims/OzURI"))(a))
        }
        ;
        c.parseSegmentsContainer = function() {
            return this.$4.parseSegmentsContainer(this.$3, this.$2, this.$1)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/OzZeroTimeRangeSegment", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c
        }
        var b = a.prototype;
        b.getURI = function() {
            return this.$1
        }
        ;
        b.getTimeRange = function() {
            return {
                startTime: 0,
                endTime: 0
            }
        }
        ;
        b.getByteRange = function() {
            return {
                startByte: this.$2,
                endByte: this.$3
            }
        }
        ;
        b.getSequenceNumber = function() {
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", ["oz-player/networks/OzBandwidthEstimator", "oz-player/networks/OzNetworkRequestStream"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return function(c, d, e) {
            var f = c.getBool("estimate_video_bandwidth_only") ? a === "video" : !0;
            return d instanceof b("oz-player/networks/OzNetworkRequestStream") && f ? b("oz-player/networks/OzBandwidthEstimator").pipeThroughReporter(c.getLegacyConfig(), d, e) : d
        }
    }
}
), null);
__d("oz-player/shims/OzDataViewReader", ["requireCond", "cr:1615797"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615797");
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/8SOvLuObRf9/
 */
__d("oz-player/parsers/OzMp4SidxParser", ["oz-player/shims/OzDataViewReader", "oz-player/shims/OzURI"], (function(a, b, c, d, e, f) {
    "use strict";
    f.parse = a;
    var g = 1936286840;
    function a(a, c, d) {
        var e = new (b("oz-player/shims/OzDataViewReader"))(new DataView(d.buffer));
        d = e.readUint32();
        var f = e.readUint32();
        if (f !== g)
            throw new Error('Invalid box type, expected "sidx".');
        d == 1 && (d = e.readUint64());
        f = e.readUint8();
        e.skip(3);
        e.skip(4);
        var h = e.readUint32();
        if (!h)
            throw new Error("Invalid timescale.");
        var i;
        f == 0 ? (f = e.readUint32(),
        i = e.readUint32()) : (f = e.readUint64(),
        i = e.readUint64());
        e.skip(2);
        var j = e.readUint16()
          , k = f
          , l = c + d + i
          , m = 0
          , n = [];
        f = function(c) {
            var d = e.readUint32()
              , f = (d & 2147483648) >>> 31;
            d = d & 2147483647;
            var g = e.readUint32();
            e.readUint32();
            if (f == 1)
                throw new Error("Heirarchical SIDXs are not supported.");
            var i = k / h
              , j = (k + g) / h;
            c === 0 && (m = i);
            var o = l
              , p = o + d - 1;
            n.push({
                getURI: function() {
                    return new (b("oz-player/shims/OzURI"))(a)
                },
                getTimeRange: function() {
                    return {
                        startTime: i - m,
                        endTime: j - m
                    }
                },
                getByteRange: function() {
                    return {
                        startByte: o,
                        endByte: p
                    }
                },
                getSequenceNumber: function() {
                    return null
                }
            });
            k += g;
            l += d
        }
        ;
        for (var c = 0; c < j; c++)
            f(c);
        return n
    }
}
), null);
__d("oz-player/parsers/OzSidxSegmentsContainer", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            c === void 0 && (c = null),
            this.$1 = a,
            this.$2 = b,
            this.$3 = c
        }
        var b = a.prototype;
        b.getSegmentByTime = function(a) {
            var b = this.$1();
            for (var c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = d.getTimeRange();
                if (e.startTime <= a && e.endTime > a)
                    return d
            }
            return null
        }
        ;
        b.getSegmentAfter = function(a) {
            var b = this.$1()
              , c = b.findIndex(function(b) {
                return b.getTimeRange().startTime === a.getTimeRange().startTime && b.getTimeRange().endTime === a.getTimeRange().endTime
            });
            return c >= 0 && c + 1 < b.length ? b[c + 1] : null
        }
        ;
        b.getPredictedSegmentAfter = function(a) {
            return null
        }
        ;
        b.canPredict = function() {
            return !1
        }
        ;
        b.isEndingSegment = function(a) {
            var b = this.$1();
            if (!b || !b.length)
                return !1;
            b = b[b.length - 1].getTimeRange();
            a = a.getTimeRange();
            return b.startTime === a.startTime && b.endTime === a.endTime
        }
        ;
        b.getSegment = function(a) {
            return this.$1()[a] || null
        }
        ;
        b.updateWith = function(a) {
            throw new Error("Not implemented: updatedWith")
        }
        ;
        b.addUpdateListener = function(a) {
            return this.$2.addListener("segment_updated", a)
        }
        ;
        b.forceParseIfNotParsed = function() {
            this.$3 && (this.$3(),
            this.$3 = null)
        }
        ;
        b.getTimeRanges = function() {
            var a = this.$1();
            if (a.length === 0)
                return [];
            else {
                var b = a[0];
                a = a[a.length - 1];
                return [{
                    startTime: b.getTimeRange().startTime,
                    endTime: a.getTimeRange().endTime
                }]
            }
        }
        ;
        b.blockTimeRange = function() {}
        ;
        b.getEndingSegment = function() {
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/manifests/OzDataSegment", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c,
            this.$4 = d,
            this.$5 = e
        }
        var b = a.prototype;
        b.getURI = function() {
            return this.$1
        }
        ;
        b.getTimeRange = function() {
            return {
                startTime: this.$2,
                endTime: this.$3
            }
        }
        ;
        b.getByteRange = function() {
            return {
                startByte: this.$4,
                endByte: this.$5
            }
        }
        ;
        b.getSequenceNumber = function() {
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/8SOvLuObRf9/
 */
__d("oz-player/parsers/OzWebmSidxParser", ["oz-player/manifests/OzDataSegment", "oz-player/shims/OzDataViewReader", "oz-player/shims/OzURI", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f) {
    "use strict";
    f.parse = a;
    var g = 440786851
      , h = 408125543
      , i = 357149030
      , j = 2807729
      , k = 17545
      , l = 475249515
      , m = 187
      , n = 179
      , o = 183
      , p = 241
      , q = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])];
    function r(a, b) {
        if (!a && !b)
            return !0;
        if (!a || !b)
            return !1;
        if (a.length != b.length)
            return !1;
        for (var c = 0; c < a.length; ++c)
            if (a[c] != b[c])
                return !1;
        return !0
    }
    var s = function() {
        function a(a, b) {
            this.id = a,
            this.$1 = b
        }
        var b = a.prototype;
        b.getOffset = function() {
            return this.$1.byteOffset
        }
        ;
        b.createParser = function() {
            return new t(this.$1)
        }
        ;
        b.getUint = function() {
            if (this.$1.byteLength > 8)
                throw new RangeError("EbmlElement: Unsigned integer has too many bytes.");
            if (this.$1.byteLength == 8 && this.$1.getUint8(0) & 224)
                throw new RangeError("EbmlParser: Unsigned integer must be at most 53 bits.");
            var a = 0;
            for (var b = 0; b < this.$1.byteLength; b++) {
                var c = this.$1.getUint8(b);
                a = 256 * a + c
            }
            return a
        }
        ;
        b.getFloat = function() {
            if (this.$1.byteLength == 4)
                return this.$1.getFloat32(0);
            else if (this.$1.byteLength == 8)
                return this.$1.getFloat64(0);
            else
                throw new RangeError("EbmlElement: floating point numbers must be 4 or 8 bytes.")
        }
        ;
        return a
    }()
      , t = function() {
        function a(a) {
            this.$1 = a,
            this.$2 = new (b("oz-player/shims/OzDataViewReader"))(this.$1)
        }
        var c = a.prototype;
        c.hasMoreData = function() {
            return this.$2.hasMoreData()
        }
        ;
        c.parseElement = function() {
            var b = this.$3(), c = this.$4(), d;
            a.$5(c) ? d = this.$1.byteLength - this.$2.getCursor() : d = a.$6(c);
            c = this.$2.getCursor() + d <= this.$1.byteLength ? d : this.$1.byteLength - this.$2.getCursor();
            d = new DataView(this.$1.buffer,this.$1.byteOffset + this.$2.getCursor(),c);
            this.$2.skip(c);
            return new s(b,d)
        }
        ;
        c.$3 = function() {
            var a = this.$4();
            if (a.length > 7)
                throw new RangeError("EbmlParser: EBML ID must be at most 7 bytes.");
            var b = 0;
            for (var c = 0; c < a.length; c++)
                b = 256 * b + a[c];
            return b
        }
        ;
        c.$4 = function() {
            var a = this.$2.readUint8(), b;
            for (b = 1; b <= 8; b++) {
                var c = 1 << 8 - b;
                if (a & c)
                    break
            }
            if (b > 8)
                throw new RangeError("EbmlParser: Variable sized integer must fit within 8 bytes.");
            c = new Uint8Array(b);
            c[0] = a;
            for (var a = 1; a < b; a++)
                c[a] = this.$2.readUint8();
            return c
        }
        ;
        a.$6 = function(a) {
            if (a.length == 8 && a[1] & 224)
                throw new RangeError("EbmlParser: Variable sized integer value must be at most 53 bits.");
            var b = 1 << 8 - a.length;
            b = a[0] & b - 1;
            for (var c = 1; c < a.length; c++)
                b = 256 * b + a[c];
            return b
        }
        ;
        a.$5 = function(a) {
            for (var b = 0; b < q.length; b++)
                if (r(a, q[b]))
                    return !0;
            return !1
        }
        ;
        return a
    }();
    function u(a) {
        a = a.createParser();
        var b = 1e6
          , c = null;
        while (a.hasMoreData()) {
            var d = a.parseElement();
            d.id == j ? b = d.getUint() : d.id == k && (c = d.getFloat())
        }
        if (c == null)
            return null;
        d = b / 1e9;
        a = c * d;
        return {
            timecodeScale: d,
            duration: a
        }
    }
    function v(a, c, d, e, f) {
        var g = [];
        a = a.createParser();
        var h = -1
          , i = -1;
        while (a.hasMoreData()) {
            var j = a.parseElement();
            if (j.id != m)
                continue;
            j = w(j);
            if (!j)
                continue;
            var k = d * j.unscaledTime;
            j = c + j.relativeOffset;
            h >= 0 && (i >= 0 || b("oz-player/shims/ozvariant")(0, 4010),
            g.push(new (b("oz-player/manifests/OzDataSegment"))(f,h,k,i,j - 1)));
            h = k;
            i = j
        }
        h >= 0 && (i >= 0 || b("oz-player/shims/ozvariant")(0, 4010),
        g.push(new (b("oz-player/manifests/OzDataSegment"))(f,h,e,i,null)));
        return g
    }
    function w(a) {
        a = a.createParser();
        var b = a.parseElement();
        if (b.id != n)
            return null;
        b = b.getUint();
        a = a.parseElement();
        if (a.id != o)
            return null;
        a = a.createParser();
        var c = 0;
        while (a.hasMoreData()) {
            var d = a.parseElement();
            if (d.id != p)
                continue;
            c = d.getUint();
            break
        }
        return {
            unscaledTime: b,
            relativeOffset: c
        }
    }
    function x(a) {
        a = a.createParser();
        var b = null;
        while (a.hasMoreData()) {
            var c = a.parseElement();
            if (c.id != i)
                continue;
            b = c;
            break
        }
        return !b ? null : u(b)
    }
    function y(a) {
        a = new t(a);
        var b = a.parseElement();
        if (b.id != g)
            return null;
        b = a.parseElement();
        if (b.id != h)
            return null;
        a = b.getOffset();
        b = x(b);
        return !b ? null : {
            segmentOffset: a,
            timecodeScale: b.timecodeScale,
            duration: b.duration
        }
    }
    function a(a, c, d) {
        d = new DataView(d.buffer);
        c = new DataView(c.buffer);
        d = y(d);
        if (!d)
            return [];
        c = new t(c);
        c = c.parseElement();
        return c.id != l ? [] : v(c, d.segmentOffset, d.timecodeScale, d.duration, new (b("oz-player/shims/OzURI"))(a))
    }
}
), null);
__d("oz-player/utils/OzReadableStreamUtils", ["oz-player/utils/ozConcatArrayBuffer"], (function(a, b, c, d, e, f) {
    "use strict";
    f.pumpAllData = h;
    f.pumpString = a;
    var g = typeof TextDecoder !== "undefined" ? function(a) {
        return new TextDecoder("utf-8").decode(new Uint8Array(a))
    }
    : function(a) {
        return String.fromCharCode.apply(null, a)
    }
    ;
    function h(a) {
        var c = new ArrayBuffer(0)
          , d = function d() {
            return a.read().then(function(a) {
                var e = a.value;
                a = a.done;
                if (a)
                    return null;
                if (!e)
                    return null;
                c = b("oz-player/utils/ozConcatArrayBuffer")(c, e);
                return d()
            })
        };
        return d().then(function() {
            return new Uint8Array(c)
        })
    }
    function a(a) {
        return h(a).then(function(a) {
            return g(a)
        })
    }
}
), null);
__d("oz-player/parsers/OzSidxSegmentsParser", ["oz-player/loggings/OzLoggingUtils", "oz-player/manifests/OzZeroTimeRangeSegment", "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzURI", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzReadableStreamUtils", "oz-player/parsers/OzMp4SidxParser", "oz-player/parsers/OzSidxSegmentsContainer", "oz-player/parsers/OzWebmSidxParser"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation
      , h = b("oz-player/utils/OzReadableStreamUtils").pumpAllData;
    function i(a) {
        a = a.split("-");
        return {
            startByte: Number.parseInt(a[0], 10),
            endByte: Number.parseInt(a[1], 10)
        }
    }
    a = function() {
        function a(a, c, d, e, f, g, h) {
            this.$6 = new (b("oz-player/utils/OzErrorEmitter"))(),
            this.$7 = [],
            this.$9 = new (b("oz-player/shims/OzEventEmitter"))(),
            this.$1 = c,
            this.$2 = d,
            this.$3 = e,
            this.$5 = f,
            this.$4 = g,
            this.$8 = h.cloneContext().setType("sidx"),
            this.$10 = a
        }
        var c = a.prototype;
        c.onError = function(a) {
            return this.$6.onError(a)
        }
        ;
        c.parseInitializationSegment = function() {
            var a = this
              , c = this.$1.Initialization[0].$.range
              , d = i(c);
            c = {
                getURI: function() {
                    return new (b("oz-player/shims/OzURI"))(a.$2)
                },
                getTimeRange: function() {
                    return {
                        startTime: 0,
                        endTime: 0
                    }
                },
                getByteRange: function() {
                    return d
                },
                getSequenceNumber: function() {
                    return null
                }
            };
            return c
        }
        ;
        c.parseSegmentsContainer = function() {
            var a = this
              , c = function() {
                g(a.$11(), a.$8, "process_sidx")["catch"](a.$6.emitError)
            }
              , d = this.$10.getBool("lazy_parse_sidx");
            d || c();
            d = new (b("oz-player/parsers/OzSidxSegmentsContainer"))(function() {
                return a.$7
            }
            ,this.$9,d ? c : null);
            return d
        }
        ;
        c.$12 = function(a, c, d) {
            d === void 0 && (d = "DISABLE_CACHE");
            a = new (b("oz-player/manifests/OzZeroTimeRangeSegment"))(new (b("oz-player/shims/OzURI"))(a),c.startByte,c.endByte);
            c = this.$5 + ";sidx";
            a = this.$4.request([a], [b("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(c)], this.$8, d);
            c = a.getStream().getReader();
            return h(c)
        }
        ;
        c.$11 = function() {
            var a = this
              , c = this.$1.$.indexRange
              , d = i(c);
            c = [this.$12(this.$2, d)];
            if (this.$3 === "webm") {
                var e = i(this.$1.Initialization[0].$.range);
                c.push(this.$12(this.$2, e, "ENABLE_CACHE"));
                e = b("oz-player/shims/OzMaybeNativePromise").all(c).then(function(c) {
                    var d = c[0];
                    c = c[1];
                    a.$7 = b("oz-player/parsers/OzWebmSidxParser").parse(a.$2, d, c)
                })
            } else
                e = c[0].then(function(c) {
                    a.$7 = b("oz-player/parsers/OzMp4SidxParser").parse(a.$2, d.startByte, c)
                });
            return e.then(function() {
                a.$9.emit("segment_updated")
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/parsers/OzVideoContainerType", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.parse = a;
    function a(a) {
        return (a.split("/")[1] || "").trim()
    }
}
), null);
__d("oz-player/utils/OzMimeUtil", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getMimeType = a;
    function a(a) {
        return (a.split("/")[0] || "").trim()
    }
}
), null);
__d("oz-player/parsers/OzRepresentationParser", ["oz-player/manifests/OzRepresentation", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzMimeUtil", "oz-player/parsers/OzSegmentTemplateParser", "oz-player/parsers/OzSidxSegmentsParser", "oz-player/parsers/OzVideoContainerType"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f, g, h, i, j) {
            this.$5 = new (b("oz-player/utils/OzErrorEmitter"))(),
            this.$1 = c,
            this.$6 = e,
            this.$7 = f,
            this.$9 = d,
            this.$10 = a,
            this.$11 = g,
            this.$2 = h,
            this.$3 = i,
            this.$4 = j
        }
        var c = a.prototype;
        c.$12 = function() {
            if (this.$8)
                return this.$8;
            if (this.$1.SegmentBase) {
                var a = this.$1.SegmentBase[0]
                  , c = this.$1.BaseURL[0]._;
                this.$8 = new (b("oz-player/parsers/OzSidxSegmentsParser"))(this.$10,a,c,b("oz-player/parsers/OzVideoContainerType").parse(this.$1.$.mimeType),b("oz-player/utils/OzMimeUtil").getMimeType(this.$1.$.mimeType),this.$6,this.$7);
                this.$8.onError(this.$5.emitError)
            } else if (this.$1.SegmentTemplate)
                this.$8 = this.$13(this.$1.SegmentTemplate[0], {
                    isShared: !1
                });
            else if (this.$2)
                this.$8 = this.$13(this.$2[0], {
                    isShared: !0
                });
            else {
                a = new (b("oz-player/utils/OzError"))({
                    type: "OZ_REPRESENTATION_PARSER",
                    description: "Unrecognized representation type",
                    extra: {
                        code: "OZ_RP-7"
                    }
                });
                throw a
            }
            return this.$8
        }
        ;
        c.$13 = function(a, c) {
            if (c.isShared) {
                c = babelHelpers["extends"]({}, a);
                c.$ = babelHelpers["extends"]({}, a.$);
                c.$.initialization = c.$.initialization.replace("$RepresentationID$", this.$1.$.id);
                c.$.media = c.$.media.replace("$RepresentationID$", this.$1.$.id);
                a = c
            }
            c = this.$9.mpdUrl;
            var d = this.$1.BaseURL && this.$1.BaseURL[0] ? this.$1.BaseURL[0]._ : null;
            d = d != null && this.$10.getBool("enable_quickdashv2") ? d : c;
            if (d == null) {
                c = new (b("oz-player/utils/OzError"))({
                    type: "OZ_REPRESENTATION_PARSER",
                    description: "Missing mpd url for template manifest",
                    extra: {
                        code: "OZ_RP-6"
                    }
                });
                throw c
            }
            c = this.$9.customSegmentTimelineParser;
            return new (b("oz-player/parsers/OzSegmentTemplateParser"))(this.$10,a,{
                baseUrl: d,
                isStaticMpd: this.$11.manifestType === "static",
                isTemplatedMpd: this.$11.manifestIsTemplated
            },c)
        }
        ;
        c.onError = function(a) {
            return this.$5.onError(a)
        }
        ;
        c.parseInitSegment = function() {
            return this.$12().parseInitializationSegment()
        }
        ;
        c.parseBandwidth = function() {
            return Number(this.$1.$.bandwidth)
        }
        ;
        c.parseMimeCodecs = function() {
            var a, b;
            a = (a = (a = this.$1.$.mimeType) != null ? a : this.$3) != null ? a : "";
            b = (b = (b = this.$1.$.codecs) != null ? b : this.$4) != null ? b : "";
            return a + '; codecs="' + b + '"'
        }
        ;
        c.parseSegmentsContainer = function() {
            return this.$12().parseSegmentsContainer()
        }
        ;
        c.parseID = function() {
            return "" + this.$1.$.id
        }
        ;
        c.parseCustomFieldFirstSegment = function() {
            var a = this.$9.customRepresentationParsers ? this.$9.customRepresentationParsers.firstSegmentParser : null;
            return a ? a(this.$1) : null
        }
        ;
        c.parse = function() {
            return new (b("oz-player/manifests/OzRepresentation"))(this.$1,this.parseID(),this.parseMimeCodecs(),this.parseInitSegment(),this.parseSegmentsContainer(),this.parseBandwidth(),this.parseCustomFieldFirstSegment(),this.$9.customRepresentationParsers)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/parsers/OzAudioRepresentationParser", ["oz-player/manifests/OzAudioRepresentation", "oz-player/parsers/OzRepresentationParser"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d, e, f, g, h, i, j) {
            b = a.call(this, b, c, d, e, f, g, h, i, j) || this;
            b.$OzAudioRepresentationParser1 = c;
            b.$OzAudioRepresentationParser2 = d;
            return b
        }
        var d = c.prototype;
        d.parse = function() {
            var a = this.$OzAudioRepresentationParser2.customRepresentationParsers;
            return new (b("oz-player/manifests/OzAudioRepresentation"))(this.$OzAudioRepresentationParser1,this.parseID(),this.parseMimeCodecs(),this.parseInitSegment(),this.parseSegmentsContainer(),this.parseBandwidth(),this.parseCustomFieldFirstSegment(),a)
        }
        ;
        return c
    }(b("oz-player/parsers/OzRepresentationParser"));
    e.exports = a
}
), null);
__d("oz-player/parsers/OzVideoRepresentationParser", ["oz-player/manifests/OzVideoRepresentation", "oz-player/parsers/OzRepresentationParser"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d, e, f, g, h, i, j) {
            b = a.call(this, b, c, d, e, f, g, h, i, j) || this;
            b.$OzVideoRepresentationParser1 = c;
            b.$OzVideoRepresentationParser2 = d;
            return b
        }
        var d = c.prototype;
        d.parse = function() {
            var a = Number.parseInt(this.$OzVideoRepresentationParser1.$.height, 10)
              , c = Number.parseInt(this.$OzVideoRepresentationParser1.$.width, 10)
              , d = this.$OzVideoRepresentationParser2.customRepresentationParsers;
            return new (b("oz-player/manifests/OzVideoRepresentation"))(this.$OzVideoRepresentationParser1,this.parseID(),this.parseMimeCodecs(),this.parseInitSegment(),this.parseSegmentsContainer(),this.parseBandwidth(),this.parseCustomFieldFirstSegment(),d,c,a)
        }
        ;
        return c
    }(b("oz-player/parsers/OzRepresentationParser"));
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/yfmK3YA3_Vc/
 */
__d("sax-1.2.4", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = {
        exports: g
    };
    function i() {
        (function(a) {
            a.parser = function(a, b) {
                return new c(a,b)
            }
            ;
            a.SAXParser = c;
            a.MAX_BUFFER_LENGTH = 64 * 1024;
            var b = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
            a.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
            function c(b, d) {
                if (!(this instanceof c))
                    return new c(b,d);
                var f = this;
                e(f);
                f.q = f.c = "";
                f.bufferCheckPosition = a.MAX_BUFFER_LENGTH;
                f.opt = d || {};
                f.opt.lowercase = f.opt.lowercase || f.opt.lowercasetags;
                f.looseCase = f.opt.lowercase ? "toLowerCase" : "toUpperCase";
                f.tags = [];
                f.closed = f.closedRoot = f.sawRoot = !1;
                f.tag = f.error = null;
                f.strict = !!b;
                f.noscript = !!(b || f.opt.noscript);
                f.state = u.BEGIN;
                f.strictEntities = f.opt.strictEntities;
                f.ENTITIES = f.strictEntities ? Object.create(a.XML_ENTITIES) : Object.create(a.ENTITIES);
                f.attribList = [];
                f.opt.xmlns && (f.ns = Object.create(k));
                f.trackPosition = f.opt.position !== !1;
                f.trackPosition && (f.position = f.line = f.column = 0);
                w(f, "onready")
            }
            Object.create || (Object.create = function(a) {
                function b() {}
                b.prototype = a;
                a = new b();
                return a
            }
            );
            Object.keys || (Object.keys = function(a) {
                var b = [];
                for (var c in a)
                    a.hasOwnProperty(c) && b.push(c);
                return b
            }
            );
            function d(c) {
                var d = Math.max(a.MAX_BUFFER_LENGTH, 10)
                  , e = 0;
                for (var f = 0, g = b.length; f < g; f++) {
                    var h = c[b[f]].length;
                    if (h > d)
                        switch (b[f]) {
                        case "textNode":
                            y(c);
                            break;
                        case "cdata":
                            x(c, "oncdata", c.cdata);
                            c.cdata = "";
                            break;
                        case "script":
                            x(c, "onscript", c.script);
                            c.script = "";
                            break;
                        default:
                            A(c, "Max buffer length exceeded: " + b[f])
                        }
                    e = Math.max(e, h)
                }
                h = a.MAX_BUFFER_LENGTH - e;
                c.bufferCheckPosition = h + c.position
            }
            function e(a) {
                for (var c = 0, d = b.length; c < d; c++)
                    a[b[c]] = ""
            }
            function f(a) {
                y(a),
                a.cdata !== "" && (x(a, "oncdata", a.cdata),
                a.cdata = ""),
                a.script !== "" && (x(a, "onscript", a.script),
                a.script = "")
            }
            c.prototype = {
                end: function() {
                    B(this)
                },
                write: L,
                resume: function() {
                    this.error = null;
                    return this
                },
                close: function() {
                    return this.write(null)
                },
                flush: function() {
                    f(this)
                }
            };
            var g = "[CDATA["
              , h = "DOCTYPE"
              , i = "http://www.w3.org/XML/1998/namespace"
              , j = "http://www.w3.org/2000/xmlns/"
              , k = {
                xml: i,
                xmlns: j
            }
              , l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
              , m = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
              , n = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
              , o = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
            function p(a) {
                return a === " " || a === "\n" || a === "\r" || a === "\t"
            }
            function q(a) {
                return a === '"' || a === "'"
            }
            function r(a) {
                return a === ">" || p(a)
            }
            function s(a, b) {
                return a.test(b)
            }
            function t(a, b) {
                return !s(a, b)
            }
            var u = 0;
            a.STATE = {
                BEGIN: u++,
                BEGIN_WHITESPACE: u++,
                TEXT: u++,
                TEXT_ENTITY: u++,
                OPEN_WAKA: u++,
                SGML_DECL: u++,
                SGML_DECL_QUOTED: u++,
                DOCTYPE: u++,
                DOCTYPE_QUOTED: u++,
                DOCTYPE_DTD: u++,
                DOCTYPE_DTD_QUOTED: u++,
                COMMENT_STARTING: u++,
                COMMENT: u++,
                COMMENT_ENDING: u++,
                COMMENT_ENDED: u++,
                CDATA: u++,
                CDATA_ENDING: u++,
                CDATA_ENDING_2: u++,
                PROC_INST: u++,
                PROC_INST_BODY: u++,
                PROC_INST_ENDING: u++,
                OPEN_TAG: u++,
                OPEN_TAG_SLASH: u++,
                ATTRIB: u++,
                ATTRIB_NAME: u++,
                ATTRIB_NAME_SAW_WHITE: u++,
                ATTRIB_VALUE: u++,
                ATTRIB_VALUE_QUOTED: u++,
                ATTRIB_VALUE_CLOSED: u++,
                ATTRIB_VALUE_UNQUOTED: u++,
                ATTRIB_VALUE_ENTITY_Q: u++,
                ATTRIB_VALUE_ENTITY_U: u++,
                CLOSE_TAG: u++,
                CLOSE_TAG_SAW_WHITE: u++,
                SCRIPT: u++,
                SCRIPT_ENDING: u++
            };
            a.XML_ENTITIES = {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: '"',
                apos: "'"
            };
            a.ENTITIES = {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: '"',
                apos: "'",
                AElig: 198,
                Aacute: 193,
                Acirc: 194,
                Agrave: 192,
                Aring: 197,
                Atilde: 195,
                Auml: 196,
                Ccedil: 199,
                ETH: 208,
                Eacute: 201,
                Ecirc: 202,
                Egrave: 200,
                Euml: 203,
                Iacute: 205,
                Icirc: 206,
                Igrave: 204,
                Iuml: 207,
                Ntilde: 209,
                Oacute: 211,
                Ocirc: 212,
                Ograve: 210,
                Oslash: 216,
                Otilde: 213,
                Ouml: 214,
                THORN: 222,
                Uacute: 218,
                Ucirc: 219,
                Ugrave: 217,
                Uuml: 220,
                Yacute: 221,
                aacute: 225,
                acirc: 226,
                aelig: 230,
                agrave: 224,
                aring: 229,
                atilde: 227,
                auml: 228,
                ccedil: 231,
                eacute: 233,
                ecirc: 234,
                egrave: 232,
                eth: 240,
                euml: 235,
                iacute: 237,
                icirc: 238,
                igrave: 236,
                iuml: 239,
                ntilde: 241,
                oacute: 243,
                ocirc: 244,
                ograve: 242,
                oslash: 248,
                otilde: 245,
                ouml: 246,
                szlig: 223,
                thorn: 254,
                uacute: 250,
                ucirc: 251,
                ugrave: 249,
                uuml: 252,
                yacute: 253,
                yuml: 255,
                copy: 169,
                reg: 174,
                nbsp: 160,
                iexcl: 161,
                cent: 162,
                pound: 163,
                curren: 164,
                yen: 165,
                brvbar: 166,
                sect: 167,
                uml: 168,
                ordf: 170,
                laquo: 171,
                not: 172,
                shy: 173,
                macr: 175,
                deg: 176,
                plusmn: 177,
                sup1: 185,
                sup2: 178,
                sup3: 179,
                acute: 180,
                micro: 181,
                para: 182,
                middot: 183,
                cedil: 184,
                ordm: 186,
                raquo: 187,
                frac14: 188,
                frac12: 189,
                frac34: 190,
                iquest: 191,
                times: 215,
                divide: 247,
                OElig: 338,
                oelig: 339,
                Scaron: 352,
                scaron: 353,
                Yuml: 376,
                fnof: 402,
                circ: 710,
                tilde: 732,
                Alpha: 913,
                Beta: 914,
                Gamma: 915,
                Delta: 916,
                Epsilon: 917,
                Zeta: 918,
                Eta: 919,
                Theta: 920,
                Iota: 921,
                Kappa: 922,
                Lambda: 923,
                Mu: 924,
                Nu: 925,
                Xi: 926,
                Omicron: 927,
                Pi: 928,
                Rho: 929,
                Sigma: 931,
                Tau: 932,
                Upsilon: 933,
                Phi: 934,
                Chi: 935,
                Psi: 936,
                Omega: 937,
                alpha: 945,
                beta: 946,
                gamma: 947,
                delta: 948,
                epsilon: 949,
                zeta: 950,
                eta: 951,
                theta: 952,
                iota: 953,
                kappa: 954,
                lambda: 955,
                mu: 956,
                nu: 957,
                xi: 958,
                omicron: 959,
                pi: 960,
                rho: 961,
                sigmaf: 962,
                sigma: 963,
                tau: 964,
                upsilon: 965,
                phi: 966,
                chi: 967,
                psi: 968,
                omega: 969,
                thetasym: 977,
                upsih: 978,
                piv: 982,
                ensp: 8194,
                emsp: 8195,
                thinsp: 8201,
                zwnj: 8204,
                zwj: 8205,
                lrm: 8206,
                rlm: 8207,
                ndash: 8211,
                mdash: 8212,
                lsquo: 8216,
                rsquo: 8217,
                sbquo: 8218,
                ldquo: 8220,
                rdquo: 8221,
                bdquo: 8222,
                dagger: 8224,
                Dagger: 8225,
                bull: 8226,
                hellip: 8230,
                permil: 8240,
                prime: 8242,
                Prime: 8243,
                lsaquo: 8249,
                rsaquo: 8250,
                oline: 8254,
                frasl: 8260,
                euro: 8364,
                image: 8465,
                weierp: 8472,
                real: 8476,
                trade: 8482,
                alefsym: 8501,
                larr: 8592,
                uarr: 8593,
                rarr: 8594,
                darr: 8595,
                harr: 8596,
                crarr: 8629,
                lArr: 8656,
                uArr: 8657,
                rArr: 8658,
                dArr: 8659,
                hArr: 8660,
                forall: 8704,
                part: 8706,
                exist: 8707,
                empty: 8709,
                nabla: 8711,
                isin: 8712,
                notin: 8713,
                ni: 8715,
                prod: 8719,
                sum: 8721,
                minus: 8722,
                lowast: 8727,
                radic: 8730,
                prop: 8733,
                infin: 8734,
                ang: 8736,
                and: 8743,
                or: 8744,
                cap: 8745,
                cup: 8746,
                "int": 8747,
                there4: 8756,
                sim: 8764,
                cong: 8773,
                asymp: 8776,
                ne: 8800,
                equiv: 8801,
                le: 8804,
                ge: 8805,
                sub: 8834,
                sup: 8835,
                nsub: 8836,
                sube: 8838,
                supe: 8839,
                oplus: 8853,
                otimes: 8855,
                perp: 8869,
                sdot: 8901,
                lceil: 8968,
                rceil: 8969,
                lfloor: 8970,
                rfloor: 8971,
                lang: 9001,
                rang: 9002,
                loz: 9674,
                spades: 9824,
                clubs: 9827,
                hearts: 9829,
                diams: 9830
            };
            Object.keys(a.ENTITIES).forEach(function(b) {
                var c = a.ENTITIES[b];
                c = typeof c === "number" ? String.fromCharCode(c) : c;
                a.ENTITIES[b] = c
            });
            for (var v in a.STATE)
                a.STATE[a.STATE[v]] = v;
            u = a.STATE;
            function w(a, b, c) {
                a[b] && a[b](c)
            }
            function x(a, b, c) {
                a.textNode && y(a),
                w(a, b, c)
            }
            function y(a) {
                a.textNode = z(a.opt, a.textNode),
                a.textNode && w(a, "ontext", a.textNode),
                a.textNode = ""
            }
            function z(a, b) {
                a.trim && (b = b.trim());
                a.normalize && (b = b.replace(/\s+/g, " "));
                return b
            }
            function A(a, b) {
                y(a);
                a.trackPosition && (b += "\nLine: " + a.line + "\nColumn: " + a.column + "\nChar: " + a.c);
                b = new Error(b);
                a.error = b;
                w(a, "onerror", b);
                return a
            }
            function B(a) {
                a.sawRoot && !a.closedRoot && C(a, "Unclosed root tag");
                a.state !== u.BEGIN && a.state !== u.BEGIN_WHITESPACE && a.state !== u.TEXT && A(a, "Unexpected end");
                y(a);
                a.c = "";
                a.closed = !0;
                w(a, "onend");
                c.call(a, a.strict, a.opt);
                return a
            }
            function C(a, b) {
                if (typeof a !== "object" || !(a instanceof c))
                    throw new Error("bad call to strictFail");
                a.strict && A(a, b)
            }
            function D(a) {
                a.strict || (a.tagName = a.tagName[a.looseCase]());
                var b = a.tags[a.tags.length - 1] || a
                  , c = a.tag = {
                    name: a.tagName,
                    attributes: {}
                };
                a.opt.xmlns && (c.ns = b.ns);
                a.attribList.length = 0;
                x(a, "onopentagstart", c)
            }
            function E(a, b) {
                var c = a.indexOf(":");
                c = c < 0 ? ["", a] : a.split(":");
                var d = c[0];
                c = c[1];
                b && a === "xmlns" && (d = "xmlns",
                c = "");
                return {
                    prefix: d,
                    local: c
                }
            }
            function F(a) {
                a.strict || (a.attribName = a.attribName[a.looseCase]());
                if (a.attribList.indexOf(a.attribName) !== -1 || a.tag.attributes.hasOwnProperty(a.attribName)) {
                    a.attribName = a.attribValue = "";
                    return
                }
                if (a.opt.xmlns) {
                    var b = E(a.attribName, !0)
                      , c = b.prefix;
                    b = b.local;
                    if (c === "xmlns")
                        if (b === "xml" && a.attribValue !== i)
                            C(a, "xml: prefix must be bound to " + i + "\nActual: " + a.attribValue);
                        else if (b === "xmlns" && a.attribValue !== j)
                            C(a, "xmlns: prefix must be bound to " + j + "\nActual: " + a.attribValue);
                        else {
                            c = a.tag;
                            var d = a.tags[a.tags.length - 1] || a;
                            c.ns === d.ns && (c.ns = Object.create(d.ns));
                            c.ns[b] = a.attribValue
                        }
                    a.attribList.push([a.attribName, a.attribValue])
                } else
                    a.tag.attributes[a.attribName] = a.attribValue,
                    x(a, "onattribute", {
                        name: a.attribName,
                        value: a.attribValue
                    });
                a.attribName = a.attribValue = ""
            }
            function G(a, b) {
                if (a.opt.xmlns) {
                    var c = a.tag
                      , d = E(a.tagName);
                    c.prefix = d.prefix;
                    c.local = d.local;
                    c.uri = c.ns[d.prefix] || "";
                    c.prefix && !c.uri && (C(a, "Unbound namespace prefix: " + JSON.stringify(a.tagName)),
                    c.uri = d.prefix);
                    d = a.tags[a.tags.length - 1] || a;
                    c.ns && d.ns !== c.ns && Object.keys(c.ns).forEach(function(b) {
                        x(a, "onopennamespace", {
                            prefix: b,
                            uri: c.ns[b]
                        })
                    });
                    for (var d = 0, e = a.attribList.length; d < e; d++) {
                        var f = a.attribList[d]
                          , g = f[0];
                        f = f[1];
                        var h = E(g, !0)
                          , i = h.prefix;
                        h = h.local;
                        var j = i === "" ? "" : c.ns[i] || "";
                        f = {
                            name: g,
                            value: f,
                            prefix: i,
                            local: h,
                            uri: j
                        };
                        i && i !== "xmlns" && !j && (C(a, "Unbound namespace prefix: " + JSON.stringify(i)),
                        f.uri = i);
                        a.tag.attributes[g] = f;
                        x(a, "onattribute", f)
                    }
                    a.attribList.length = 0
                }
                a.tag.isSelfClosing = !!b;
                a.sawRoot = !0;
                a.tags.push(a.tag);
                x(a, "onopentag", a.tag);
                b || (!a.noscript && a.tagName.toLowerCase() === "script" ? a.state = u.SCRIPT : a.state = u.TEXT,
                a.tag = null,
                a.tagName = "");
                a.attribName = a.attribValue = "";
                a.attribList.length = 0
            }
            function H(a) {
                if (!a.tagName) {
                    C(a, "Weird empty close tag.");
                    a.textNode += "</>";
                    a.state = u.TEXT;
                    return
                }
                if (a.script) {
                    if (a.tagName !== "script") {
                        a.script += "</" + a.tagName + ">";
                        a.tagName = "";
                        a.state = u.SCRIPT;
                        return
                    }
                    x(a, "onscript", a.script);
                    a.script = ""
                }
                var b = a.tags.length
                  , c = a.tagName;
                a.strict || (c = c[a.looseCase]());
                var d = c;
                while (b--) {
                    var e = a.tags[b];
                    if (e.name !== d)
                        C(a, "Unexpected close tag");
                    else
                        break
                }
                if (b < 0) {
                    C(a, "Unmatched closing tag: " + a.tagName);
                    a.textNode += "</" + a.tagName + ">";
                    a.state = u.TEXT;
                    return
                }
                a.tagName = c;
                e = a.tags.length;
                while (e-- > b) {
                    var f = a.tag = a.tags.pop();
                    a.tagName = a.tag.name;
                    x(a, "onclosetag", a.tagName);
                    d = {};
                    for (var g in f.ns)
                        d[g] = f.ns[g];
                    c = a.tags[a.tags.length - 1] || a;
                    a.opt.xmlns && f.ns !== c.ns && Object.keys(f.ns).forEach(function(b) {
                        var c = f.ns[b];
                        x(a, "onclosenamespace", {
                            prefix: b,
                            uri: c
                        })
                    })
                }
                b === 0 && (a.closedRoot = !0);
                a.tagName = a.attribValue = a.attribName = "";
                a.attribList.length = 0;
                a.state = u.TEXT
            }
            function I(a) {
                var b = a.entity, c = b.toLowerCase(), d, e = "";
                if (a.ENTITIES[b])
                    return a.ENTITIES[b];
                if (a.ENTITIES[c])
                    return a.ENTITIES[c];
                b = c;
                b.charAt(0) === "#" && (b.charAt(1) === "x" ? (b = b.slice(2),
                d = parseInt(b, 16),
                e = d.toString(16)) : (b = b.slice(1),
                d = parseInt(b, 10),
                e = d.toString(10)));
                b = b.replace(/^0+/, "");
                if (isNaN(d) || e.toLowerCase() !== b) {
                    C(a, "Invalid character entity");
                    return "&" + a.entity + ";"
                }
                return String.fromCodePoint(d)
            }
            function J(a, b) {
                b === "<" ? (a.state = u.OPEN_WAKA,
                a.startTagPosition = a.position) : p(b) || (C(a, "Non-whitespace before first tag."),
                a.textNode = b,
                a.state = u.TEXT)
            }
            function K(a, b) {
                var c = "";
                b < a.length && (c = a.charAt(b));
                return c
            }
            function L(a) {
                var b = this;
                if (this.error)
                    throw this.error;
                if (b.closed)
                    return A(b, "Cannot write after close. Assign an onready handler.");
                if (a === null)
                    return B(b);
                typeof a === "object" && (a = a.toString());
                var c = 0
                  , e = "";
                while (!0) {
                    e = K(a, c++);
                    b.c = e;
                    if (!e)
                        break;
                    b.trackPosition && (b.position++,
                    e === "\n" ? (b.line++,
                    b.column = 0) : b.column++);
                    switch (b.state) {
                    case u.BEGIN:
                        b.state = u.BEGIN_WHITESPACE;
                        if (e === "\ufeff")
                            continue;
                        J(b, e);
                        continue;
                    case u.BEGIN_WHITESPACE:
                        J(b, e);
                        continue;
                    case u.TEXT:
                        if (b.sawRoot && !b.closedRoot) {
                            var f = c - 1;
                            while (e && e !== "<" && e !== "&")
                                e = K(a, c++),
                                e && b.trackPosition && (b.position++,
                                e === "\n" ? (b.line++,
                                b.column = 0) : b.column++);
                            b.textNode += a.substring(f, c - 1)
                        }
                        e === "<" && !(b.sawRoot && b.closedRoot && !b.strict) ? (b.state = u.OPEN_WAKA,
                        b.startTagPosition = b.position) : (!p(e) && (!b.sawRoot || b.closedRoot) && C(b, "Text data outside of root node."),
                        e === "&" ? b.state = u.TEXT_ENTITY : b.textNode += e);
                        continue;
                    case u.SCRIPT:
                        e === "<" ? b.state = u.SCRIPT_ENDING : b.script += e;
                        continue;
                    case u.SCRIPT_ENDING:
                        e === "/" ? b.state = u.CLOSE_TAG : (b.script += "<" + e,
                        b.state = u.SCRIPT);
                        continue;
                    case u.OPEN_WAKA:
                        if (e === "!")
                            b.state = u.SGML_DECL,
                            b.sgmlDecl = "";
                        else if (!p(e))
                            if (s(l, e))
                                b.state = u.OPEN_TAG,
                                b.tagName = e;
                            else if (e === "/")
                                b.state = u.CLOSE_TAG,
                                b.tagName = "";
                            else if (e === "?")
                                b.state = u.PROC_INST,
                                b.procInstName = b.procInstBody = "";
                            else {
                                C(b, "Unencoded <");
                                if (b.startTagPosition + 1 < b.position) {
                                    f = b.position - b.startTagPosition;
                                    e = new Array(f).join(" ") + e
                                }
                                b.textNode += "<" + e;
                                b.state = u.TEXT
                            }
                        continue;
                    case u.SGML_DECL:
                        (b.sgmlDecl + e).toUpperCase() === g ? (x(b, "onopencdata"),
                        b.state = u.CDATA,
                        b.sgmlDecl = "",
                        b.cdata = "") : b.sgmlDecl + e === "--" ? (b.state = u.COMMENT,
                        b.comment = "",
                        b.sgmlDecl = "") : (b.sgmlDecl + e).toUpperCase() === h ? (b.state = u.DOCTYPE,
                        (b.doctype || b.sawRoot) && C(b, "Inappropriately located doctype declaration"),
                        b.doctype = "",
                        b.sgmlDecl = "") : e === ">" ? (x(b, "onsgmldeclaration", b.sgmlDecl),
                        b.sgmlDecl = "",
                        b.state = u.TEXT) : q(e) ? (b.state = u.SGML_DECL_QUOTED,
                        b.sgmlDecl += e) : b.sgmlDecl += e;
                        continue;
                    case u.SGML_DECL_QUOTED:
                        e === b.q && (b.state = u.SGML_DECL,
                        b.q = "");
                        b.sgmlDecl += e;
                        continue;
                    case u.DOCTYPE:
                        e === ">" ? (b.state = u.TEXT,
                        x(b, "ondoctype", b.doctype),
                        b.doctype = !0) : (b.doctype += e,
                        e === "[" ? b.state = u.DOCTYPE_DTD : q(e) && (b.state = u.DOCTYPE_QUOTED,
                        b.q = e));
                        continue;
                    case u.DOCTYPE_QUOTED:
                        b.doctype += e;
                        e === b.q && (b.q = "",
                        b.state = u.DOCTYPE);
                        continue;
                    case u.DOCTYPE_DTD:
                        b.doctype += e;
                        e === "]" ? b.state = u.DOCTYPE : q(e) && (b.state = u.DOCTYPE_DTD_QUOTED,
                        b.q = e);
                        continue;
                    case u.DOCTYPE_DTD_QUOTED:
                        b.doctype += e;
                        e === b.q && (b.state = u.DOCTYPE_DTD,
                        b.q = "");
                        continue;
                    case u.COMMENT:
                        e === "-" ? b.state = u.COMMENT_ENDING : b.comment += e;
                        continue;
                    case u.COMMENT_ENDING:
                        e === "-" ? (b.state = u.COMMENT_ENDED,
                        b.comment = z(b.opt, b.comment),
                        b.comment && x(b, "oncomment", b.comment),
                        b.comment = "") : (b.comment += "-" + e,
                        b.state = u.COMMENT);
                        continue;
                    case u.COMMENT_ENDED:
                        e !== ">" ? (C(b, "Malformed comment"),
                        b.comment += "--" + e,
                        b.state = u.COMMENT) : b.state = u.TEXT;
                        continue;
                    case u.CDATA:
                        e === "]" ? b.state = u.CDATA_ENDING : b.cdata += e;
                        continue;
                    case u.CDATA_ENDING:
                        e === "]" ? b.state = u.CDATA_ENDING_2 : (b.cdata += "]" + e,
                        b.state = u.CDATA);
                        continue;
                    case u.CDATA_ENDING_2:
                        e === ">" ? (b.cdata && x(b, "oncdata", b.cdata),
                        x(b, "onclosecdata"),
                        b.cdata = "",
                        b.state = u.TEXT) : e === "]" ? b.cdata += "]" : (b.cdata += "]]" + e,
                        b.state = u.CDATA);
                        continue;
                    case u.PROC_INST:
                        e === "?" ? b.state = u.PROC_INST_ENDING : p(e) ? b.state = u.PROC_INST_BODY : b.procInstName += e;
                        continue;
                    case u.PROC_INST_BODY:
                        if (!b.procInstBody && p(e))
                            continue;
                        else
                            e === "?" ? b.state = u.PROC_INST_ENDING : b.procInstBody += e;
                        continue;
                    case u.PROC_INST_ENDING:
                        e === ">" ? (x(b, "onprocessinginstruction", {
                            name: b.procInstName,
                            body: b.procInstBody
                        }),
                        b.procInstName = b.procInstBody = "",
                        b.state = u.TEXT) : (b.procInstBody += "?" + e,
                        b.state = u.PROC_INST_BODY);
                        continue;
                    case u.OPEN_TAG:
                        s(m, e) ? b.tagName += e : (D(b),
                        e === ">" ? G(b) : e === "/" ? b.state = u.OPEN_TAG_SLASH : (p(e) || C(b, "Invalid character in tag name"),
                        b.state = u.ATTRIB));
                        continue;
                    case u.OPEN_TAG_SLASH:
                        e === ">" ? (G(b, !0),
                        H(b)) : (C(b, "Forward-slash in opening tag not followed by >"),
                        b.state = u.ATTRIB);
                        continue;
                    case u.ATTRIB:
                        if (p(e))
                            continue;
                        else
                            e === ">" ? G(b) : e === "/" ? b.state = u.OPEN_TAG_SLASH : s(l, e) ? (b.attribName = e,
                            b.attribValue = "",
                            b.state = u.ATTRIB_NAME) : C(b, "Invalid attribute name");
                        continue;
                    case u.ATTRIB_NAME:
                        e === "=" ? b.state = u.ATTRIB_VALUE : e === ">" ? (C(b, "Attribute without value"),
                        b.attribValue = b.attribName,
                        F(b),
                        G(b)) : p(e) ? b.state = u.ATTRIB_NAME_SAW_WHITE : s(m, e) ? b.attribName += e : C(b, "Invalid attribute name");
                        continue;
                    case u.ATTRIB_NAME_SAW_WHITE:
                        if (e === "=")
                            b.state = u.ATTRIB_VALUE;
                        else if (p(e))
                            continue;
                        else
                            C(b, "Attribute without value"),
                            b.tag.attributes[b.attribName] = "",
                            b.attribValue = "",
                            x(b, "onattribute", {
                                name: b.attribName,
                                value: ""
                            }),
                            b.attribName = "",
                            e === ">" ? G(b) : s(l, e) ? (b.attribName = e,
                            b.state = u.ATTRIB_NAME) : (C(b, "Invalid attribute name"),
                            b.state = u.ATTRIB);
                        continue;
                    case u.ATTRIB_VALUE:
                        if (p(e))
                            continue;
                        else
                            q(e) ? (b.q = e,
                            b.state = u.ATTRIB_VALUE_QUOTED) : (C(b, "Unquoted attribute value"),
                            b.state = u.ATTRIB_VALUE_UNQUOTED,
                            b.attribValue = e);
                        continue;
                    case u.ATTRIB_VALUE_QUOTED:
                        if (e !== b.q) {
                            e === "&" ? b.state = u.ATTRIB_VALUE_ENTITY_Q : b.attribValue += e;
                            continue
                        }
                        F(b);
                        b.q = "";
                        b.state = u.ATTRIB_VALUE_CLOSED;
                        continue;
                    case u.ATTRIB_VALUE_CLOSED:
                        p(e) ? b.state = u.ATTRIB : e === ">" ? G(b) : e === "/" ? b.state = u.OPEN_TAG_SLASH : s(l, e) ? (C(b, "No whitespace between attributes"),
                        b.attribName = e,
                        b.attribValue = "",
                        b.state = u.ATTRIB_NAME) : C(b, "Invalid attribute name");
                        continue;
                    case u.ATTRIB_VALUE_UNQUOTED:
                        if (!r(e)) {
                            e === "&" ? b.state = u.ATTRIB_VALUE_ENTITY_U : b.attribValue += e;
                            continue
                        }
                        F(b);
                        e === ">" ? G(b) : b.state = u.ATTRIB;
                        continue;
                    case u.CLOSE_TAG:
                        if (!b.tagName)
                            if (p(e))
                                continue;
                            else
                                t(l, e) ? b.script ? (b.script += "</" + e,
                                b.state = u.SCRIPT) : C(b, "Invalid tagname in closing tag.") : b.tagName = e;
                        else
                            e === ">" ? H(b) : s(m, e) ? b.tagName += e : b.script ? (b.script += "</" + b.tagName,
                            b.tagName = "",
                            b.state = u.SCRIPT) : (p(e) || C(b, "Invalid tagname in closing tag"),
                            b.state = u.CLOSE_TAG_SAW_WHITE);
                        continue;
                    case u.CLOSE_TAG_SAW_WHITE:
                        if (p(e))
                            continue;
                        e === ">" ? H(b) : C(b, "Invalid characters in closing tag");
                        continue;
                    case u.TEXT_ENTITY:
                    case u.ATTRIB_VALUE_ENTITY_Q:
                    case u.ATTRIB_VALUE_ENTITY_U:
                        var i, j;
                        switch (b.state) {
                        case u.TEXT_ENTITY:
                            i = u.TEXT;
                            j = "textNode";
                            break;
                        case u.ATTRIB_VALUE_ENTITY_Q:
                            i = u.ATTRIB_VALUE_QUOTED;
                            j = "attribValue";
                            break;
                        case u.ATTRIB_VALUE_ENTITY_U:
                            i = u.ATTRIB_VALUE_UNQUOTED;
                            j = "attribValue";
                            break
                        }
                        e === ";" ? (b[j] += I(b),
                        b.entity = "",
                        b.state = i) : s(b.entity.length ? o : n, e) ? b.entity += e : (C(b, "Invalid character in entity name"),
                        b[j] += "&" + b.entity + e,
                        b.entity = "",
                        b.state = i);
                        continue;
                    default:
                        throw new Error(b,"Unknown state: " + b.state)
                    }
                }
                b.position >= b.bufferCheckPosition && d(b);
                return b
            }
            String.fromCodePoint || (function() {
                var a = String.fromCharCode
                  , b = Math.floor
                  , c = function() {
                    var c = 16384, d = [], e, f, g = -1, h = arguments.length;
                    if (!h)
                        return "";
                    var i = "";
                    while (++g < h) {
                        var j = Number(arguments[g]);
                        if (!isFinite(j) || j < 0 || j > 1114111 || b(j) !== j)
                            throw RangeError("Invalid code point: " + j);
                        j <= 65535 ? d.push(j) : (j -= 65536,
                        e = (j >> 10) + 55296,
                        f = j % 1024 + 56320,
                        d.push(e, f));
                        (g + 1 === h || d.length > c) && (i += a.apply(null, d),
                        d.length = 0)
                    }
                    return i
                };
                Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                    value: c,
                    configurable: !0,
                    writable: !0
                }) : String.fromCodePoint = c
            }
            )()
        }
        )(typeof g === "undefined" ? this.sax = {} : g)
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return k()
        }
    }
    e.exports = a
}
), null);
__d("sax", ["sax-1.2.4"], (function(a, b, c, d, e, f) {
    e.exports = b("sax-1.2.4")()
}
), null);
__d("oz-player/shims/www/OzSaxWWW", ["sax"], (function(a, b, c, d, e, f) {
    a = b("sax");
    e.exports = a
}
), null);
__d("oz-player/shims/OzSax", ["oz-player/shims/www/OzSaxWWW"], (function(a, b, c, d, e, f) {
    e.exports = b("oz-player/shims/www/OzSaxWWW")
}
), null);
__d("oz-player/parsers/OzXmlParser", ["oz-player/shims/OzSax", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f) {
    function g() {
        return {
            $: {}
        }
    }
    a = function() {
        "use strict";
        function a() {
            var a = this;
            this.$4 = [];
            this.$6 = function(c) {
                c = c.name;
                var d = g()
                  , e = a.$3 || a.$2;
                e || b("oz-player/shims/ozvariant")(0, 219);
                Object.prototype.hasOwnProperty.call(e, c) || (e[c] = []);
                e[c].push(d);
                a.$4.push(e);
                a.$3 = d
            }
            ;
            this.$8 = function() {
                var b = a.$4.pop();
                a.$3 = b
            }
            ;
            this.$9 = function(c) {
                c = c.trim();
                if (!c)
                    return;
                var d = a.$3;
                d || b("oz-player/shims/ozvariant")(0, 220);
                d._ && b("oz-player/shims/ozvariant")(0, 221);
                d._ = c
            }
            ;
            this.$7 = function(c) {
                var d = c.name;
                c = c.value;
                var e = a.$3;
                e || b("oz-player/shims/ozvariant")(0, 222);
                e.$[d] = c
            }
            ;
            var c = !0;
            c = this.$1 = b("oz-player/shims/OzSax").parser(c);
            c.onerror = this.$5;
            c.onopentagstart = this.$6;
            c.onattribute = this.$7;
            c.onclosetag = this.$8;
            c.ontext = this.$9
        }
        var c = a.prototype;
        c.$5 = function(a) {
            throw a
        }
        ;
        c.parse = function(a) {
            var b = g();
            this.$2 = b;
            try {
                this.$1.write(a).close()
            } catch (a) {
                throw a
            }
            this.$3 = null;
            this.$2 = null;
            this.$4 = [];
            return b
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/parsers/OzMpdParser", ["oz-player/manifests/Mpd", "oz-player/shims/ozvariant", "oz-player/utils/OzErrorEmitter", "oz-player/parsers/OzAudioRepresentationParser", "oz-player/parsers/OzVideoRepresentationParser", "oz-player/parsers/OzXmlParser"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f) {
            this.$2 = new (b("oz-player/utils/OzErrorEmitter"))(),
            this.$5 = a,
            this.$1 = d,
            this.$3 = e,
            this.$4 = c,
            this.$6 = f
        }
        var c = a.prototype;
        c.onError = function(a) {
            return this.$2.onError(a)
        }
        ;
        c.parse = function(a) {
            var c = null;
            a = new (b("oz-player/parsers/OzXmlParser"))().parse(a);
            c = a.MPD[0];
            c || b("oz-player/shims/ozvariant")(0, 3628);
            c.Period.length > 0 || b("oz-player/shims/ozvariant")(0, 3629);
            a = c.Period[0].AdaptationSet || [];
            var d = this.$7(c)
              , e = this.$8(c)
              , f = this.$9(a, "video")
              , g = this.$10(f, b("oz-player/parsers/OzVideoRepresentationParser"), {
                manifestType: d,
                manifestIsTemplated: e
            });
            g.sort(function(a, b) {
                return a.getHeight() - b.getHeight()
            });
            a = this.$9(a, "audio");
            e = this.$10(a, b("oz-player/parsers/OzAudioRepresentationParser"), {
                manifestType: d,
                manifestIsTemplated: e
            });
            e.sort(function(a, b) {
                return a.getBandwidth() - b.getBandwidth()
            });
            var h = this.$4.mpdUrl;
            h = new (b("oz-player/manifests/Mpd"))(c,g,e,h,this.$11(c),this.$4.customParsers || new Map(),d === "static");
            if (this.$6) {
                c = this.$6;
                c.startEME(f, g, a, e)
            }
            return h
        }
        ;
        c.$11 = function(a) {
            a = a.$.minimumUpdatePeriod || "";
            a = /\d+/g.exec(a);
            if (a && a.length) {
                a = a[0];
                return a ? Number.parseInt(a, 10) : null
            }
            return null
        }
        ;
        c.$7 = function(a) {
            return a.$.type || "static"
        }
        ;
        c.$8 = function(a) {
            var b;
            b = (b = this.$4.customParsers) == null ? void 0 : b.get("isLiveTemplated");
            if (!b)
                return !1;
            b = b(a);
            return typeof b === "boolean" && b
        }
        ;
        c.$9 = function(a, b) {
            return a.find(function(a) {
                if (a.$.mimeType != null)
                    return a.$.mimeType.indexOf(b) !== -1;
                a = a.Representation;
                return a && a.length && a[0].$.mimeType.indexOf(b) !== -1
            })
        }
        ;
        c.$10 = function(a, b, c) {
            var d = this;
            return !a ? [] : a.Representation.map(function(e) {
                e = new b(d.$5,e,d.$4,d.$1,d.$3,c,a.SegmentTemplate,a.$.mimeType,a.$.codecs);
                e.onError(d.$2.emitError);
                return e.parse()
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/utils/OzMpdUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getMpdLastTimeRange = a;
    f.getMpdLastSequenceNumber = b;
    function a(a) {
        var b = [];
        b.push.apply(b, a.getVideoRepresentations().concat(a.getAudioRepresentations()));
        if (b.length) {
            a = b[0].getEndingSegment();
            if (a)
                return a.getTimeRange()
        }
        return null
    }
    function b(a) {
        var b = [];
        b.push.apply(b, a.getVideoRepresentations().concat(a.getAudioRepresentations()));
        if (b.length) {
            a = b[0].getEndingSegment();
            if (a)
                return a.getSequenceNumber()
        }
        return null
    }
}
), null);
__d("oz-player/utils/OzStreamInterruptChecker", ["oz-player/shims/OzEventEmitter", "oz-player/utils/OzMpdUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c) {
            var d;
            d = a.call(this) || this;
            d.$OzStreamInterruptChecker3 = 0;
            d.$OzStreamInterruptChecker4 = null;
            d.$OzStreamInterruptChecker5 = !1;
            d.$OzStreamInterruptChecker1 = b;
            d.$OzStreamInterruptChecker2 = c;
            return d
        }
        var d = c.prototype;
        d.notifyMpdUpdated = function() {
            var a = b("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(this.$OzStreamInterruptChecker1)
              , c = a ? a.endTime : null;
            c !== null && c === this.$OzStreamInterruptChecker4 ? this.$OzStreamInterruptChecker3++ : (this.$OzStreamInterruptChecker3 = 0,
            this.$OzStreamInterruptChecker5 && this.$OzStreamInterruptChecker4 !== null && this.$OzStreamInterruptChecker4 !== void 0 && a !== null && a !== void 0 && this.emit("streamResumedAt", a.startTime),
            this.$OzStreamInterruptChecker5 = !1);
            a = this.$OzStreamInterruptChecker2.getNumber("stream_interrupt_check_mpd_stale_count_threshold");
            !this.$OzStreamInterruptChecker5 && a > 0 && this.$OzStreamInterruptChecker3 >= a && c !== null && c !== void 0 && (this.emit("streamInterruptAt", c),
            this.$OzStreamInterruptChecker5 = !0);
            this.$OzStreamInterruptChecker4 = c
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/parsers/OzMpdUpdater", ["oz-player/shims/ozClearTimeout", "oz-player/shims/OzEventEmitter", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/OzSubscriptionsHandler", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzMpdUtils", "oz-player/utils/OzReadableStreamUtils", "oz-player/utils/OzStreamInterruptChecker", "oz-player/parsers/OzMpdParser"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e, f, g, h, i) {
            var j;
            j = a.call(this) || this;
            j.$OzMpdUpdater8 = new (b("oz-player/utils/OzErrorEmitter"))();
            j.$OzMpdUpdater10 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            j.$OzMpdUpdater11 = !1;
            j.$OzMpdUpdater15 = 0;
            j.$OzMpdUpdater16 = 0;
            j.$OzMpdUpdater17 = null;
            j.$OzMpdUpdater19 = !0;
            j.$OzMpdUpdater22 = function() {
                var a = j.$OzMpdUpdater2.getLocation();
                j.$OzMpdUpdater19 = !1;
                if (!a)
                    return;
                if (j.$OzMpdUpdater6.getBool("live_disable_mpd_updates_when_paused") && !j.$OzMpdUpdater12.isPlaying()) {
                    j.setupUpdateLoop();
                    return
                }
                var c = j.$OzMpdUpdater5.getOperationLogger("update_manifest").start();
                j.$OzMpdUpdater25(a).then(function(d) {
                    j.$OzMpdUpdater16 = 0;
                    j.$OzMpdUpdater26();
                    j.$OzMpdUpdater7 = 0;
                    if (j.$OzMpdUpdater19)
                        return;
                    var e = Object.assign({}, j.$OzMpdUpdater13, {
                        mpdUrl: a
                    });
                    e = new (b("oz-player/parsers/OzMpdParser"))(j.$OzMpdUpdater6,e,j.$OzMpdUpdater1,j.$OzMpdUpdater5,j.$OzMpdUpdater14);
                    e.onError(function(a) {
                        j.$OzMpdUpdater8.emitError(a),
                        c.setError(a).log()
                    });
                    e = e.parse(d);
                    d = j.$OzMpdUpdater2.isStaticMpd();
                    j.$OzMpdUpdater2.updateWith(e);
                    e.isStaticMpd() && !d && j.emit("streamTransitionToStatic");
                    e = b("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(j.$OzMpdUpdater2);
                    d = e && e.endTime != 0 ? e.endTime : null;
                    c.setLiveheadPosition(d).setLiveheadSeqNum(b("oz-player/utils/OzMpdUtils").getMpdLastSequenceNumber(j.$OzMpdUpdater2)).setManifestType(j.$OzMpdUpdater2.isStaticMpd() ? "static" : "dynamic").log();
                    j.$OzMpdUpdater9.notifyMpdUpdated();
                    j.setupUpdateLoop()
                })["catch"](function(d) {
                    j.$OzMpdUpdater26();
                    c.setError(d).log();
                    if (j.$OzMpdUpdater6.getBool("handle_mpd_retries_outside_oz_mpd_updater")) {
                        var e;
                        e = d instanceof b("oz-player/utils/OzError") ? d : new (b("oz-player/utils/OzError"))({
                            type: "OZ_NETWORK",
                            description: "Unknown mpd url load failure: " + a + ("; errorMessage: " + d.message + "; errorDescription: " + ((e = d.description) != null ? e : "") + ";")
                        });
                        j.$OzMpdUpdater24(e, a)
                    } else
                        j.$OzMpdUpdater23(d)
                })
            }
            ;
            var k = d.getMinimumUpdatePeriod();
            j.$OzMpdUpdater7 = 0;
            j.$OzMpdUpdater1 = e;
            j.$OzMpdUpdater2 = d;
            j.$OzMpdUpdater12 = f;
            j.$OzMpdUpdater3 = k;
            j.$OzMpdUpdater5 = g.cloneContext().setType("manifest");
            j.$OzMpdUpdater6 = c;
            j.$OzMpdUpdater13 = h;
            j.$OzMpdUpdater14 = i;
            j.$OzMpdUpdater2.addListener("locationUpdated", function() {
                j.$OzMpdUpdater20(),
                j.setupUpdateLoop()
            });
            j.$OzMpdUpdater9 = new (b("oz-player/utils/OzStreamInterruptChecker"))(j.$OzMpdUpdater2,j.$OzMpdUpdater6);
            j.$OzMpdUpdater10.addSubscriptions(j.$OzMpdUpdater9.addListener("streamResumedAt", function(a) {
                j.emit("streamResumedAt", a)
            }), j.$OzMpdUpdater9.addListener("streamInterruptAt", function(a) {
                j.emit("streamInterruptAt", a)
            }));
            return j
        }
        var d = c.prototype;
        d.$OzMpdUpdater20 = function() {
            b("oz-player/shims/ozClearTimeout")(this.$OzMpdUpdater4),
            this.$OzMpdUpdater4 = null,
            this.$OzMpdUpdater21(),
            this.$OzMpdUpdater19 = !0
        }
        ;
        d.setupUpdateLoop = function() {
            var a = !this.$OzMpdUpdater11;
            a && this.$OzMpdUpdater6.getBool("stop_manifest_update_when_static") && (a = !this.$OzMpdUpdater2.isStaticMpd(),
            this.$OzMpdUpdater3 = this.$OzMpdUpdater2.getMinimumUpdatePeriod());
            a && this.$OzMpdUpdater3 && this.$OzMpdUpdater2.getLocation() && (this.$OzMpdUpdater4 = b("oz-player/shims/ozSetTimeoutAcrossTransitions")(this.$OzMpdUpdater22, this.$OzMpdUpdater3 * 1e3))
        }
        ;
        d.onError = function(a) {
            return this.$OzMpdUpdater8.onError(a)
        }
        ;
        d.$OzMpdUpdater23 = function(a) {
            if (this.$OzMpdUpdater6.getBool("live_gracefully_handle_mpd_errors")) {
                var c;
                a instanceof b("oz-player/utils/OzError") && (c = a.getExtra().code || "");
                var d = ["404", "503"];
                this.$OzMpdUpdater6.getBool("live_gracefully_handle_no_network") && d.push("0");
                var e = this.$OzMpdUpdater6.getNumber("live_max_try_attempts_on_404")
                  , f = !1;
                if (c && d.indexOf(c) > -1)
                    switch (c) {
                    case "410":
                        this.$OzMpdUpdater11 = !0;
                        f = !0;
                        break;
                    case "404":
                        this.$OzMpdUpdater7++;
                        if (this.$OzMpdUpdater7 >= e)
                            break;
                    case "503":
                    case "0":
                        f = !0;
                        break
                    }
                if (f) {
                    this.setupUpdateLoop();
                    return
                }
            }
            this.$OzMpdUpdater8.emitError(a)
        }
        ;
        d.$OzMpdUpdater24 = function(a, b) {
            var c = this;
            b = !0;
            var d = this.$OzMpdUpdater16 - 1
              , e = a.getExtra().code;
            this.$OzMpdUpdater17 !== e ? (this.$OzMpdUpdater17 = e,
            this.$OzMpdUpdater15 = 1) : this.$OzMpdUpdater15++;
            e = {
                cancelMpdUpdates: function() {
                    c.$OzMpdUpdater11 = !0
                },
                consecutiveFailuresForErrorCode: this.$OzMpdUpdater15,
                error: a,
                isInitialMpdRequest: !1,
                preventDefault: function() {
                    b = !1
                },
                retry: function(a) {
                    c.setupUpdateLoop()
                },
                retryAttemptCount: d
            };
            this.emit("manifestFetchError", e);
            b && this.$OzMpdUpdater8.emitError(a)
        }
        ;
        d.$OzMpdUpdater25 = function(a) {
            this.$OzMpdUpdater21();
            this.$OzMpdUpdater16++;
            a = this.$OzMpdUpdater1.requestRawUrl(a, {
                credentials: "same-origin"
            }, null, this.$OzMpdUpdater5);
            this.$OzMpdUpdater18 = a;
            a = a.getStream().getReader();
            return b("oz-player/utils/OzReadableStreamUtils").pumpString(a)
        }
        ;
        d.$OzMpdUpdater21 = function() {
            this.$OzMpdUpdater18 && this.$OzMpdUpdater6.getBool("mpd_update_cancel_current_request_tracker") && (this.$OzMpdUpdater18.cancel(),
            this.$OzMpdUpdater16 = 0),
            this.$OzMpdUpdater26()
        }
        ;
        d.$OzMpdUpdater26 = function() {
            this.$OzMpdUpdater18 = null
        }
        ;
        d.destroy = function() {
            this.$OzMpdUpdater4 && b("oz-player/shims/ozClearTimeout")(this.$OzMpdUpdater4),
            this.$OzMpdUpdater10.release()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/playback_controls/OzPlaybackTimeRangeManager", ["oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e) {
            this.$4 = null,
            this.$5 = 0,
            this.$6 = 0,
            this.$7 = !0,
            this.$8 = 0,
            this.$9 = 0,
            this.$10 = 0,
            this.$1 = a,
            this.$2 = b,
            this.$3 = c,
            this.$8 = d,
            this.$9 = e
        }
        var c = a.prototype;
        c.setTimelineBlockingEnabled = function(a) {
            this.$7 = a,
            this.$7 || this.$3.unblockTimeRange()
        }
        ;
        c.setTimeRangeProvider = function(a) {
            var b = this;
            this.$4 != null && this.$4.remove();
            this.$4 = a.addUpdateListener(function() {
                var c = a.getTimeRanges()
                  , d = 0;
                if (c.length !== 0) {
                    c = c[c.length - 1];
                    d = c.endTime
                }
                b.$11(d)
            })
        }
        ;
        c.$11 = function(a) {
            if (!this.$7)
                return;
            var c = this.$1.getNumber("min_block_time_range_interval_ms");
            if (c > 0 && this.$10 > 0 && Date.now() - this.$10 > c)
                return;
            if (this.$5 === a)
                return;
            this.$5 = a;
            if (this.$2.currentTime <= this.$6)
                return;
            if (this.$9 !== 0 && this.$8 !== 0 && this.$2.duration - this.$2.currentTime > this.$8) {
                c = [];
                for (var a = 0; a < this.$2.buffered.length; a++)
                    c.push({
                        startTime: this.$2.buffered.start(a),
                        endTime: this.$2.buffered.end(a)
                    });
                a = b("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(this.$2.currentTime, c);
                this.$6 = this.$2.currentTime + Math.min(a, this.$9);
                c = {
                    startTime: this.$6,
                    endTime: this.$2.duration - this.$9
                };
                this.$3.blockTimeRange(c);
                this.$10 = Date.now()
            }
        }
        ;
        c.destroy = function() {
            this.$4 != null && (this.$4.remove(),
            this.$4 = null)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/LiveheadSeekaheadStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.computeSeekAhead = a;
    var g = .05;
    function a(a, b) {
        b = Math.max.apply(Math, b.map(function(a) {
            return a.startTime
        }));
        return b - a > 0 ? b - a + g : 0
    }
}
), null);
__d("oz-player/utils/OzTimelineGapUtil", ["oz-player/utils/OzNumericalHelper", "oz-player/utils/OzNumericalRangeUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isInGap = a;
    f.isNearGap = c;
    var g = 1.5;
    function a(a, c) {
        c = c.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        });
        return new (b("oz-player/utils/OzNumericalRangeUtil"))().findCurrentRangeIndex(a, c) === -1
    }
    function c(a, c) {
        var d = c.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        });
        d = new (b("oz-player/utils/OzNumericalRangeUtil"))().findCurrentRangeIndex(a, d);
        if (d !== -1) {
            c = c[d];
            return b("oz-player/utils/OzNumericalHelper").lessThanOrEqual(a, c.endTime) && c.endTime - a < g
        }
        return !1
    }
}
), null);
__d("oz-player/playback_controls/OzPlayheadManager", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozvariant", "oz-player/strategies/LiveheadSeekaheadStrategy", "oz-player/utils/OzNumericalRangeUtil", "oz-player/utils/OzTimelineGapUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/OzDOMEventListener").listenDOMEvent
      , h = b("oz-player/strategies/LiveheadSeekaheadStrategy").computeSeekAhead
      , i = b("oz-player/utils/OzTimelineGapUtil").isInGap
      , j = b("oz-player/utils/OzTimelineGapUtil").isNearGap;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$OzPlayheadManager2 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPlayheadManager3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPlayheadManager4 = new Set();
            d.$OzPlayheadManager10 = new Set();
            d.$OzPlayheadManager12 = function(a) {
                d.$OzPlayheadManager1.currentTime = a
            }
            ;
            d.$OzPlayheadManager14 = !1;
            var e = c.video
              , f = c.mpd
              , h = c.playheadCatchup
              , i = c.playbackState
              , j = c.config
              , k = c.perfLoggerProvider
              , l = c.seekHandler;
            c = c.initialPlaybackPosition;
            d.$OzPlayheadManager1 = e;
            d.$OzPlayheadManager6 = j;
            d.$OzPlayheadManager7 = i;
            d.$OzPlayheadManager8 = f;
            d.$OzPlayheadManager9 = h;
            d.$OzPlayheadManager11 = k;
            l && (d.$OzPlayheadManager12 = l);
            d.$OzPlayheadManager13 = c;
            d.$OzPlayheadManager2.addSubscriptions(g(d.$OzPlayheadManager1, "durationchange", function() {
                d.$OzPlayheadManager15(),
                d.$OzPlayheadManager16("durationchange"),
                d.$OzPlayheadManager17("durationchange")
            }), g(d.$OzPlayheadManager1, "pause", d.$OzPlayheadManager16.bind(babelHelpers.assertThisInitialized(d), "pause")), g(d.$OzPlayheadManager1, "play", d.$OzPlayheadManager16.bind(babelHelpers.assertThisInitialized(d), "play")), g(d.$OzPlayheadManager1, "playing", d.$OzPlayheadManager16.bind(babelHelpers.assertThisInitialized(d), "playing")), g(d.$OzPlayheadManager1, "waiting", function() {
                d.$OzPlayheadManager16.bind(babelHelpers.assertThisInitialized(d), "waiting"),
                d.$OzPlayheadManager17("waiting")
            }));
            return d
        }
        var d = c.prototype;
        d.observeSourceBufferState = function(a, c) {
            var d = this;
            this.$OzPlayheadManager4.has(a) && b("oz-player/shims/ozvariant")(0, 4179);
            this.$OzPlayheadManager4.add(a);
            this.$OzPlayheadManager2.addSubscriptions(a.addEventListener("buffer_updated", function() {
                return d.$OzPlayheadManager18(a, c)
            }))
        }
        ;
        d.$OzPlayheadManager18 = function(a, b) {
            var c = [];
            if (this.$OzPlayheadManager6.getBool("check_buffer_range_once_for_playhead_update") && this.$OzPlayheadManager10.has(a))
                return;
            this.$OzPlayheadManager4.forEach(function(a) {
                a = a.getBufferedRanges();
                a.length && c.push(a[0])
            });
            c.length > 0 && this.$OzPlayheadManager10.add(a);
            a = this.$OzPlayheadManager6.getBool("seek_ahead_use_native_current_time") ? this.$OzPlayheadManager1.currentTime : this.$OzPlayheadManager7.getCurrentTime();
            a = h(a, c);
            var d = this.$OzPlayheadManager6.getNumber("timeline_offset_threshold");
            a > 0 && (d === 0 || a < d) && this.$OzPlayheadManager19(this.$OzPlayheadManager1.currentTime + a, "first_available_buffer", "source_buffer", b)
        }
        ;
        d.setTimeRangeProvider = function(a) {
            this.$OzPlayheadManager3.release(),
            this.$OzPlayheadManager3.engage(),
            this.$OzPlayheadManager3.addSubscriptions(a.addUpdateListener(this.$OzPlayheadManager16.bind(this, "time_range_updated"))),
            this.$OzPlayheadManager5 = a,
            this.$OzPlayheadManager16("time_range_set")
        }
        ;
        d.$OzPlayheadManager15 = function() {
            var a = this.$OzPlayheadManager1.duration;
            if (this.$OzPlayheadManager13 !== 0 && !this.$OzPlayheadManager14 && !isNaN(a) && a !== Infinity) {
                a = this.$OzPlayheadManager13 > 0 ? this.$OzPlayheadManager13 : a + this.$OzPlayheadManager13;
                this.$OzPlayheadManager14 = !0;
                this.$OzPlayheadManager19(a, "initial_playback_position", "");
                this.emit("initialPlaybackPositionSet", a)
            }
        }
        ;
        d.$OzPlayheadManager16 = function(a, c) {
            c === void 0 && (c = null);
            var d = this.$OzPlayheadManager9;
            if (d && d.isEnabled(this.$OzPlayheadManager1, this.$OzPlayheadManager8)) {
                d = d.computeNewPlayheadPosition(this.$OzPlayheadManager1, this.$OzPlayheadManager8);
                if (typeof d === "number") {
                    this.$OzPlayheadManager19(d, "live_catch_up_strategy", a, c);
                    return
                }
            }
            d = this.$OzPlayheadManager6.getNumber("auto_seek_playhead_slack");
            if (d === 0)
                return;
            var e = this.$OzPlayheadManager5;
            if (!e)
                return;
            var f = this.$OzPlayheadManager7.getCurrentTime()
              , g = e.getTimeRanges().map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            })
              , h = new (b("oz-player/utils/OzNumericalRangeUtil"))().findNextRangeIndex(f, g);
            if ((j(f, e.getTimeRanges()) || i(f, e.getTimeRanges())) && h !== -1) {
                f = g[h];
                this.$OzPlayheadManager19(f.rangeStart + d, "jump_over_timeline_gap", a, c)
            }
        }
        ;
        d.$OzPlayheadManager17 = function(a) {
            if (!this.$OzPlayheadManager6.getBool("skip_videobuffer_gaps"))
                return;
            var c = this.$OzPlayheadManager6.getNumber("auto_seek_playhead_slack");
            if (c === 0)
                return;
            var d = this.$OzPlayheadManager7.getCurrentTime()
              , e = [];
            for (var f = 0; f < this.$OzPlayheadManager1.buffered.length; f++)
                e.push({
                    startTime: this.$OzPlayheadManager1.buffered.start(f),
                    endTime: this.$OzPlayheadManager1.buffered.end(f)
                });
            f = e.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            });
            var g = new (b("oz-player/utils/OzNumericalRangeUtil"))().findNextRangeIndex(d, f);
            if ((j(d, e) || i(d, e)) && g !== -1) {
                d = f[g];
                this.$OzPlayheadManager19(d.rangeStart + c, "jump_over_buffer_gap", a, null);
                return
            }
        }
        ;
        d.destroy = function() {
            this.$OzPlayheadManager2.release(),
            this.$OzPlayheadManager3.release(),
            this.$OzPlayheadManager4.clear()
        }
        ;
        d.$OzPlayheadManager19 = function(a, b, c, d) {
            var e = a - this.$OzPlayheadManager1.currentTime
              , f = this.$OzPlayheadManager6.getNumber("seek_ahead_epsilon");
            if (f > 0 && e <= f)
                return;
            this.$OzPlayheadManager11.getOperationLogger("playhead_adjustment").setLength(Math.round(e * 1e3)).setReason(b).setInitiator(c).setType(d).log();
            this.$OzPlayheadManager12(a)
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/playback_controls/OzPlayheadNudger", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/OzDOMEventListener").listenDOMEvent;
    a = function() {
        function a(a, c) {
            this.$2 = new (b("oz-player/shims/OzSubscriptionsHandler"))(),
            this.$3 = null,
            this.$1 = c,
            this.$4 = a,
            this.$2.addSubscriptions(g(this.$1, "timeupdate", this.$5.bind(this)), g(this.$1, "playing", this.$6.bind(this)), g(this.$1, "pause", this.$7.bind(this)))
        }
        var c = a.prototype;
        c.$5 = function() {
            var a = this.$4.getNumber("playhead_nudge_slack");
            if (a === 0)
                return;
            var b = this.$3;
            b != null && !this.$1.paused && this.$1.readyState === 4 && (this.$1.currentTime === b && (this.$1.currentTime += a),
            this.$3 = null)
        }
        ;
        c.$6 = function() {
            this.$3 = this.$1.currentTime
        }
        ;
        c.$7 = function() {
            this.$3 = null
        }
        ;
        c.destroy = function() {
            this.$2.release()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/states/OzObservedPlaybackState", ["oz-player/loggings/OzMultiDestinationPerfLogger", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/loggings/OzMultiDestinationPerfLogger").OzMultiDestinationPerfLoggerProvider
      , h = b("oz-player/shims/OzDOMEventListener").listenDOMEvent
      , i = 150;
    a = function() {
        function a(a, c) {
            var d = this;
            c === void 0 && (c = new g([]));
            this.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$6 = function() {
                d.$4.getOperationLogger("pause").setState("paused").log()
            }
            ;
            this.$7 = function() {
                d.$5(),
                d.$4.getOperationLogger("playing").setState("playing").log()
            }
            ;
            this.$5 = function() {
                d.$2 = d.$1.currentTime
            }
            ;
            this.$1 = a;
            this.$4 = c;
            this.$2 = this.$1.currentTime;
            this.$3.addSubscriptions(h(this.$1, "seeked", this.$5), h(this.$1, "seeking", this.$5), h(this.$1, "timeupdate", b("oz-player/shims/ozThrottle")(this.$5, i)), h(this.$1, "pause", this.$6), h(this.$1, "playing", this.$7))
        }
        var c = a.prototype;
        c.isPlaying = function() {
            return !this.$1.paused
        }
        ;
        c.getCurrentTime = function() {
            return this.$2
        }
        ;
        c.forceUpdateCurrentTime = function() {
            this.$5()
        }
        ;
        c.getDuration = function() {
            return this.$1.duration
        }
        ;
        c.addEventListener = function(a, b) {
            return h(this.$1, a, b)
        }
        ;
        c.destroy = function() {
            this.$3.release()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/getSegmentsCount", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c, d) {
        var e = 0
          , f = a.getTimeRange().startTime;
        a = a;
        var g = a.getTimeRange().startTime;
        while (a !== null && g < c + f) {
            var h = g;
            e++;
            a = b.getSegmentAfter(a);
            if (a)
                g = a.getTimeRange().startTime;
            else
                break;
            if (g <= h)
                return d
        }
        return Math.max(e, 1)
    }
}
), null);
__d("oz-player/strategies/OzStaticStreamSegmentsStrategy", ["oz-player/strategies/getSegmentsCount"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.isActive = function() {
            return !0
        }
        ;
        c.getSegmentsCount = function(a, c, d) {
            a = this.$1.getNumber("seconds_to_stream");
            var e = this.$1.getNumber("segments_to_stream");
            a > 0 && (e = b("oz-player/strategies/getSegmentsCount")(c, d, a, e));
            return e
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy", ["oz-player/networks/OzBandwidthEstimator", "oz-player/strategies/getSegmentsCount", "oz-player/strategies/OzStaticStreamSegmentsStrategy"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c) {
            this.$1 = a,
            this.$2 = c,
            this.$3 = new (b("oz-player/strategies/OzStaticStreamSegmentsStrategy"))(a)
        }
        var c = a.prototype;
        c.isActive = function(a) {
            return !0
        }
        ;
        c.getSegmentsCount = function(a, c, d) {
            var e = b("oz-player/networks/OzBandwidthEstimator").getBandwidth(this.$1.getLegacyConfig())
              , f = b("oz-player/networks/OzBandwidthEstimator").getStandardDeviationOfBandwidth()
              , g = this.$1.getNumber("bandwidth_boundary_standard_deviation_factor")
              , h = this.$2.some(function(a) {
                a = a.getBandwidth();
                return Math.abs(a - e) < f * g
            });
            h = h ? this.$4(a, c, d) : this.$3.getSegmentsCount(a, c, d);
            a = this.$5(c, e);
            return Math.min(h, a)
        }
        ;
        c.$4 = function(a, c, d) {
            a = this.$1.getNumber("seconds_to_stream_near_bandwidth_boundary");
            var e = this.$1.getNumber("segments_to_stream_near_bandwidth_boundary");
            a > 0 && (e = b("oz-player/strategies/getSegmentsCount")(c, d, a, e));
            return e
        }
        ;
        c.$5 = function(a, b) {
            var c = Infinity;
            a = a.getByteRange();
            if (a) {
                var d = a.endByte;
                if (d !== null && d !== void 0) {
                    var e = this.$1.getNumber("per_stream_duration_target");
                    d = d - a.startByte;
                    e > 1e-5 && d !== 0 && (c = Math.ceil(e * b / (d * 8)))
                }
            }
            return c
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzPlaybackConfidenceUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getPlaybackConfidence = a;
    f.getEstimatedDownloadTimeBufferDeltaMs = h;
    var g = .8;
    function a(a, b, c, d, e, f, i, j) {
        c = Math.min(1, c / d);
        d = 1 + (1 - c) * e;
        c = a.getBandwidth() * d;
        if (c > b)
            return g * (b / c);
        e = 0;
        if (f != null && i != null && j > 0) {
            d = h(a, b, f, i);
            d != null && d > 0 && (e = d / 1e3 * j)
        }
        return 1 - (1 - g) * c / b - e
    }
    function h(a, b, c, d) {
        var e = a.getBandwidth();
        a = a.getSegment(0);
        if (a) {
            a = a.getTimeRange();
            a = (a.endTime - a.startTime) * c;
            c = a * e / b * 1e3 + d;
            return c - a * 1e3
        }
    }
}
), null);
__d("oz-player/utils/OzAbrUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c, d) {
        var e = a.getNumber("resolution_constraint_factor");
        if (e === 0)
            return b;
        a = b.filter(function(a) {
            return a.getWidth() <= c.width * d * e || a.getHeight() <= c.height * d * e
        });
        return !a.length ? [b[0]] : a
    }
    ;
    f.excludeLargeRepresentations = a;
    b = function(a, b, c, d, e, f) {
        b = b ? a.getNumber("min_switch_interval") : a.getNumber("initial_switch_interval");
        d = d >= a.getNumber("abr_min_bandwidth_samples");
        var g = a.getNumber("abr_eval_buffer_threshold");
        c = !g || c >= g;
        g = null;
        e + a.getNumber("min_eval_interval") > Date.now() ? g = "min_eval_interval" : f + b > Date.now() ? g = "min_switch_interval" : !d ? g = "min_bandwidth_samples" : c || (g = "buffer_threshold_not_satisfied");
        return g
    }
    ;
    f.getReasonToPreventEvaluation = b
}
), null);
__d("oz-player/utils/OzPlaybackRestrictionsUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a, b) {
        return a.getBandwidth() - b.getBandwidth()
    };
    a = function(a, b, c, d) {
        if (c.length === 0)
            return [];
        c.sort(g);
        a = a.reduce(function(a, c) {
            return c.applyRestriction(a, b)
        }, c);
        if (d != null && d.length > 0) {
            c = c.filter(function(a) {
                return d.indexOf(a.getID()) > -1
            });
            a = a.concat(c).sort(g)
        }
        return a
    }
    ;
    f.applyVideoPlaybackRestrictions = a
}
), null);
__d("oz-player/strategies/OzAbrManager", ["oz-player/networks/OzBandwidthEstimator", "oz-player/utils/OzAbrUtils", "oz-player/utils/OzBufferingUtils", "oz-player/utils/OzPlaybackRestrictionsUtils", "oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy", "oz-player/strategies/OzPlaybackConfidenceUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f, g, h) {
            this.$2 = 0,
            this.$3 = Date.now(),
            this.$4 = !1,
            this.$10 = null,
            this.$1 = a,
            this.$5 = c,
            this.$6 = this.$14(c, d),
            this.$7 = e,
            this.$8 = f,
            this.$11 = g,
            this.$12 = new (b("oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy"))(a,d),
            this.$13 = h
        }
        var c = a.prototype;
        c.setSourceBuffer = function(a) {
            this.$9 = a
        }
        ;
        c.$14 = function(a, b) {
            var c = this.$1.getNumber("abr_restrict_from_index")
              , d = this.$1.getNumber("abr_restrict_to_index");
            if (d === 0 && c === 0)
                return b;
            var e = b.findIndex(function(b) {
                return a.getID() === b.getID()
            });
            return e === -1 ? b : b.filter(function(a, b) {
                return b - e >= c && b - e <= d
            })
        }
        ;
        c.$15 = function(a) {
            a = b("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(this.$1, a, this.$13(), this.$11);
            a = b("oz-player/utils/OzPlaybackRestrictionsUtils").applyVideoPlaybackRestrictions(this.$7, this.$13(), a);
            return a
        }
        ;
        c.getBestRepresentation = function(a) {
            a === void 0 && (a = null);
            var c = b("oz-player/utils/OzBufferingUtils").getBufferAheadFromPlaybackStates(this.$9, this.$8)
              , d = b("oz-player/utils/OzAbrUtils").getReasonToPreventEvaluation(this.$1, this.$4, c, b("oz-player/networks/OzBandwidthEstimator").getSampleCount(), this.$2, this.$3);
            if (d !== null && d !== void 0) {
                this.$10 = d;
                return this.$5
            }
            d = Date.now();
            this.$2 = d;
            var e = b("oz-player/networks/OzBandwidthEstimator").getAdjustedBandwidth(this.$1.getLegacyConfig())
              , f = this.$15(this.$6)
              , g = null;
            this.$1.getBool("abr_use_download_time") && a != null ? g = this.$16(f, e, a) || this.$17(f, e, c, a) : g = this.$17(f, e, c, a);
            e = this.$1.getBool("fix_abr_default_representation") ? f[0] : this.$6[0];
            g = g || e;
            if (this.$18(c, g)) {
                this.$10 = "high_buffer";
                return this.$5
            }
            this.$5 !== g && (this.$4 = !0,
            this.$3 = d,
            this.$5 = g);
            this.$10 = "bandwidth";
            return g
        }
        ;
        c.$17 = function(a, c, d, e) {
            e === void 0 && (e = null);
            var f = null;
            for (var g = 0; g < a.length; g++) {
                var h = b("oz-player/strategies/OzPlaybackConfidenceUtils").getPlaybackConfidence(a[g], c, d, this.$1.getNumber("low_buffer_bandwidth_target_threshold"), this.$1.getNumber("low_buffer_bandwidth_target_increase_factor"), e, b("oz-player/networks/OzBandwidthEstimator").getEstimatedTimeToFirstByteMs(this.$1.getLegacyConfig()), this.$1.getNumber("download_time_buffer_delta_penalty_factor"));
                h > this.$1.getNumber("abr_confidence_threshold") && (!f || f.getBandwidth() < a[g].getBandwidth()) && (f = a[g])
            }
            return f
        }
        ;
        c.$16 = function(a, c, d) {
            for (var e = a.length - 1; e >= 0; e--) {
                var f = b("oz-player/strategies/OzPlaybackConfidenceUtils").getEstimatedDownloadTimeBufferDeltaMs(a[e], c, d, b("oz-player/networks/OzBandwidthEstimator").getEstimatedTimeToFirstByteMs(this.$1.getLegacyConfig()) || 0);
                if (f != null && f + this.$1.getNumber("minimum_download_additional_buffer_ms") < 0)
                    return a[e]
            }
            return null
        }
        ;
        c.$18 = function(a, b) {
            var c = this.$1.getNumber("abr_prevent_down_switch_buffer_threshold");
            return c > 0 && a >= c && this.$5.getBandwidth() > b.getBandwidth() ? !0 : !1
        }
        ;
        c.getStreamSegmentsCountStrategy = function() {
            return this.$12
        }
        ;
        c.getLastEvaluationReason = function() {
            return this.$10
        }
        ;
        c.updateRepresentations = function(a) {
            var b = this;
            this.$6 = a;
            this.$5 = (a = this.$6[0]) != null ? a : this.$5;
            this.$6.forEach(function(a) {
                b.$5.getQualityLabel() === a.getQualityLabel() && (b.$5 = a)
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzAudioIBRManager", ["oz-player/networks/OzBandwidthEstimator"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var c = a.prototype;
        c.getInitialAudioRepresentation = function(a) {
            var c = b("oz-player/networks/OzBandwidthEstimator").getAdjustedBandwidth(this.$1.getLegacyConfig());
            a = a.slice(0);
            a.sort(function(a, b) {
                return a.getBandwidth() - b.getBandwidth()
            });
            var d = this.$1.getNumber("live_audio_ibr_bandwidth_percentage");
            d = c * d;
            for (var e = a.length - 1; e >= 0; e--)
                if (a[e].getBandwidth() <= d) {
                    this.$2.getOperationLogger("audio_ibr_success").setRepresentationID(a[e].getID()).setReason(c.toString()).log();
                    return a[e]
                }
            this.$2.getOperationLogger("audio_ibr_no_op").setReason(c.toString()).log();
            return null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzBufferAheadPriorityStrategy", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 6
      , h = 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$OzBufferAheadPriorityStrategy3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzBufferAheadPriorityStrategy4 = function() {
                d.emit("state_changed")
            }
            ;
            d.$OzBufferAheadPriorityStrategy1 = c;
            d.$OzBufferAheadPriorityStrategy3.addSubscriptions(d.$OzBufferAheadPriorityStrategy1.addEventListener("progress", b("oz-player/shims/ozThrottle")(d.$OzBufferAheadPriorityStrategy4, h)), d.$OzBufferAheadPriorityStrategy1.addEventListener("timeupdate", b("oz-player/shims/ozThrottle")(d.$OzBufferAheadPriorityStrategy4, h)));
            return d
        }
        var d = c.prototype;
        d.getName = function() {
            return "buffer_ahead"
        }
        ;
        d.setSourceBufferState = function(a) {
            if (this.$OzBufferAheadPriorityStrategy2)
                return;
            this.$OzBufferAheadPriorityStrategy3.addSubscriptions(a.addEventListener("buffer_updated", b("oz-player/shims/ozThrottle")(this.$OzBufferAheadPriorityStrategy4, h)))
        }
        ;
        d.isActive = function() {
            return !0
        }
        ;
        d.getPriority = function() {
            var a = this.$OzBufferAheadPriorityStrategy2;
            if (!a)
                return 1;
            var c = this.$OzBufferAheadPriorityStrategy1.getCurrentTime();
            a = a.getBufferedRanges();
            c = b("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(c, a);
            return c >= g ? 0 : 1
        }
        ;
        d.destroy = function() {
            this.$OzBufferAheadPriorityStrategy3.release()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/strategies/OzBufferAheadTargetStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.isActive = function() {
            return !0
        }
        ;
        b.getBufferTarget = function() {
            return this.$1.getNumber("buffer_ahead_target")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.isActive = function(a) {
            return !a.isPlaying()
        }
        ;
        b.getSegmentsCount = function(a, b, c) {
            a = a.getCurrentTime();
            var d = this.$1.computeBufferTarget()
              , e = 1
              , f = b;
            b = b.getTimeRange().startTime;
            while (f !== null && b < d + a) {
                f = c.getSegmentAfter(f);
                if (!f)
                    break;
                b = f.getTimeRange().startTime;
                e++
            }
            return e
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzBufferTargetCalculator", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = 0,
            this.$2 = a
        }
        var b = a.prototype;
        b.computeBufferTarget = function() {
            for (var a = this.$2, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var d;
                if (b) {
                    if (c >= a.length)
                        break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done)
                        break;
                    d = c.value
                }
                d = d;
                if (d.isActive()) {
                    d = d.getBufferTarget();
                    this.$1 = d;
                    return d
                }
            }
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzLiveheadDeltaCatchupStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.isEnabled = function(a, b) {
            return (!this.$1.getBool("live_catch_up_only_when_paused") || a.paused) && typeof b.getMinimumUpdatePeriod() === "number"
        }
        ;
        b.computeNewPlayheadPosition = function(a, b) {
            a = a.currentTime;
            b = b.getVideoRepresentations()[0];
            if (!b)
                return null;
            b = b.getTimeRanges();
            if (b.length === 0)
                return null;
            b = b[b.length - 1].endTime;
            return b - a > this.$1.getNumber("live_catch_up_fall_behind_threshold") ? b - this.$1.getNumber("live_catch_up_live_head_delta") : null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzPausedStreamSegmentsCountStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.isActive = function() {
            return !this.$1.isPlaying()
        }
        ;
        b.getSegmentsCount = function(a, b, c) {
            return this.$2.getNumber("paused_stream_segments_count")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzPlayheadAtInterruptionDetector", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/OzDOMEventListener").listenDOMEvent
      , h = 1;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$OzPlayheadAtInterruptionDetector2 = null;
            d.$OzPlayheadAtInterruptionDetector3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPlayheadAtInterruptionDetector1 = c;
            d.$OzPlayheadAtInterruptionDetector3.addSubscriptions(g(d.$OzPlayheadAtInterruptionDetector1, "waiting", d.$OzPlayheadAtInterruptionDetector4.bind(babelHelpers.assertThisInitialized(d))));
            return d
        }
        var d = c.prototype;
        d.notifyStreamInterrupted = function(a) {
            this.$OzPlayheadAtInterruptionDetector2 = a,
            this.$OzPlayheadAtInterruptionDetector4()
        }
        ;
        d.notifyStreamResumed = function() {
            this.$OzPlayheadAtInterruptionDetector2 = null
        }
        ;
        d.$OzPlayheadAtInterruptionDetector4 = function() {
            if (this.$OzPlayheadAtInterruptionDetector2 != null) {
                var a = this.$OzPlayheadAtInterruptionDetector2 || 0;
                Math.abs(this.$OzPlayheadAtInterruptionDetector1.currentTime - a) < h && this.emit("playheadAtInterruption", a)
            }
        }
        ;
        d.destroy = function() {
            this.$OzPlayheadAtInterruptionDetector3.release()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/strategies/OzPlayingStatePriorityStrategy", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$OzPlayingStatePriorityStrategy1 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPlayingStatePriorityStrategy3 = function() {
                d.emit("state_changed")
            }
            ;
            d.$OzPlayingStatePriorityStrategy2 = c;
            d.$OzPlayingStatePriorityStrategy1.addSubscriptions(d.$OzPlayingStatePriorityStrategy2.addEventListener("playing", d.$OzPlayingStatePriorityStrategy3), d.$OzPlayingStatePriorityStrategy2.addEventListener("play", d.$OzPlayingStatePriorityStrategy3), d.$OzPlayingStatePriorityStrategy2.addEventListener("pause", d.$OzPlayingStatePriorityStrategy3));
            return d
        }
        var d = c.prototype;
        d.isActive = function() {
            return !0
        }
        ;
        d.getName = function() {
            return "playing_state"
        }
        ;
        d.setSourceBufferState = function(a) {}
        ;
        d.getPriority = function() {
            return this.$OzPlayingStatePriorityStrategy2.isPlaying() ? 1 : 0
        }
        ;
        d.destroy = function() {
            this.$OzPlayingStatePriorityStrategy1.release()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/strategies/OzPriorityCalculator", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$OzPriorityCalculator2 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPriorityCalculator1 = c;
            (c = d.$OzPriorityCalculator2).addSubscriptions.apply(c, d.$OzPriorityCalculator1.map(function(a) {
                return a.addListener("state_changed", function(b) {
                    d.emit("state_changed", d.compute(), a.getName())
                })
            }));
            return d
        }
        var d = c.prototype;
        d.setSourceBufferState = function(a) {
            this.$OzPriorityCalculator1.forEach(function(b) {
                return b.setSourceBufferState(a)
            }),
            this.emit("state_changed", this.compute(), "source_buffer")
        }
        ;
        d.compute = function() {
            return this.$OzPriorityCalculator1.reduce(function(a, b) {
                b = b.isActive() ? b.getPriority() : 0;
                return a + b
            }, 0)
        }
        ;
        d.destroy = function() {
            this.$OzPriorityCalculator2.release()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/strategies/OzStartupBufferTargetStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$3 = b
        }
        var b = a.prototype;
        b.isActive = function() {
            var a = this.$1.isPlaying();
            a && (this.$2 = !0);
            return !this.$2
        }
        ;
        b.getBufferTarget = function() {
            return this.$3.getNumber("pre_start_buffer_ahead_target")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzStreamSegmentsCountCalculator", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1;
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.computeMin = function(a, b, c) {
            var d = Number.MAX_VALUE;
            for (var e = this.$1, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var i;
                if (f) {
                    if (h >= e.length)
                        break;
                    i = e[h++]
                } else {
                    h = e.next();
                    if (h.done)
                        break;
                    i = h.value
                }
                i = i;
                i.isActive(a) && (d = Math.min(d, i.getSegmentsCount(a, b, c)))
            }
            return d === Number.MAX_VALUE ? g : Math.max(d, g)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/streams/OzEndOfStreamWatcher", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d) {
            var e;
            e = a.call(this) || this;
            e.$OzEndOfStreamWatcher1 = new Map();
            e.$OzEndOfStreamWatcher2 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzEndOfStreamWatcher3 = c;
            e.$OzEndOfStreamWatcher4 = d;
            return e
        }
        var d = c.prototype;
        d.registerMediaStream = function(a) {
            this.$OzEndOfStreamWatcher1.has(a) && b("oz-player/shims/ozvariant")(0, 5191),
            this.$OzEndOfStreamWatcher1.set(a, !1)
        }
        ;
        d.notifyRepresentationSwitched = function(a) {
            this.$OzEndOfStreamWatcher1.has(a) || b("oz-player/shims/ozvariant")(0, 5192),
            this.$OzEndOfStreamWatcher5()
        }
        ;
        d.notifyMediaStreamEnded = function(a) {
            this.$OzEndOfStreamWatcher1.has(a) || b("oz-player/shims/ozvariant")(0, 5192),
            this.$OzEndOfStreamWatcher1.set(a, !0),
            this.$OzEndOfStreamWatcher5()
        }
        ;
        d.$OzEndOfStreamWatcher5 = function() {
            var a = this.$OzEndOfStreamWatcher3.getMediaSource();
            (this.$OzEndOfStreamWatcher4.getBool("allow_queueing_end_of_stream_when_update") || a.readyState === "open") && this.$OzEndOfStreamWatcher6() && (this.$OzEndOfStreamWatcher3.notifyEndOfStream(),
            this.emit("streamEnd"))
        }
        ;
        d.$OzEndOfStreamWatcher6 = function() {
            if (this.$OzEndOfStreamWatcher1.size === 0)
                return !1;
            for (var a = this.$OzEndOfStreamWatcher1.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var d;
                if (b) {
                    if (c >= a.length)
                        break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done)
                        break;
                    d = c.value
                }
                d = d;
                if (!d)
                    return !1
            }
            return !0
        }
        ;
        d.destroy = function() {
            this.$OzEndOfStreamWatcher1.clear()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/streams/OzHandleUserRepresentationSwitch", ["oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f) {
            var g = this;
            this.$4 = null;
            this.$5 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$1 = a;
            this.$2 = c;
            this.$3 = d;
            this.$6 = e;
            f.then(function(a) {
                g.$4 = a
            });
            this.$5.addSubscriptions(e.addListener("switchRepresentation", this.$7.bind(this)))
        }
        var c = a.prototype;
        c.cleanup = function() {
            this.$5.release(),
            this.$5.engage()
        }
        ;
        c.$7 = function(a, b) {
            if (a !== "user")
                return;
            a = this.$6.getRepresentationIDAtTime(this.$2.getCurrentTime());
            var c;
            if (this.$4) {
                for (var d = 0; d < this.$3.length; d++)
                    this.$3[d].getID() === a && (c = this.$3[d]);
                if (c && b && c.getBandwidth() < b.getBandwidth()) {
                    a = c.getSegmentByTime(this.$2.getCurrentTime());
                    a && (this.$4 && this.$4.clearRange(this.$2.getCurrentTime(), this.$2.getDuration()))
                }
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/networks/OzReadableStreamDataReader", ["oz-player/utils/ozConcatArrayBuffer", "oz-player/networks/OzTransformStream"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this) || this;
            c.$OzReadableStreamDataReader1 = new ArrayBuffer(0);
            c.$OzReadableStreamDataReader2 = b;
            return c
        }
        var d = c.prototype;
        d.onDataWritten = function(a) {
            this.$OzReadableStreamDataReader1 = b("oz-player/utils/ozConcatArrayBuffer")(this.$OzReadableStreamDataReader1, a.buffer)
        }
        ;
        d.onClose = function() {
            this.$OzReadableStreamDataReader2(this.$OzReadableStreamDataReader1)
        }
        ;
        return c
    }(b("oz-player/networks/OzTransformStream"));
    e.exports = a
}
), null);
__d("oz-player/shims/ozPerformanceNow", ["performanceNow", "requireCond", "cr:1615803"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1615803");
    e.exports = a
}
), null);
__d("oz-player/networks/OzStreamingTask", ["Promise", "oz-player/loggings/OzLoggingUtils", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/ozPerformanceNow", "oz-player/utils/OzError", "oz-player/utils/OzNetworkRequestLoggingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation
      , h = b("oz-player/utils/OzNetworkRequestLoggingUtils").setFetchStreamLoggingAttributes;
    a = function() {
        function a(a, c) {
            this.$3 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise")),
            this.$5 = !1,
            this.$1 = this.$2 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise")),
            this.$6 = b("oz-player/shims/ozPerformanceNow")(),
            this.$7 = c,
            this.$8 = a
        }
        var c = a.prototype;
        c.run = function() {
            var a = this.$3.getPromise()
              , c = this.$7;
            if (c) {
                var d = b("oz-player/shims/ozPerformanceNow")() - this.$6;
                g(a, c, "streaming_task", function() {}, function(a) {
                    a.setTimeToRequestSent(Math.floor(d))
                })["catch"](function() {})
            }
            this.$2.resolve();
            return a
        }
        ;
        c.cancel = function() {
            this.$3.getPromise()["catch"](function() {}),
            this.$3.reject(new (b("oz-player/utils/OzError"))({
                type: "OZ_STREAMING_TASK",
                description: "task cancelled",
                extra: {
                    code: "OZ_ST-1"
                }
            })),
            this.$5 = !0
        }
        ;
        c.finish = function() {
            this.$3.resolve()
        }
        ;
        c.isCancelled = function() {
            return this.$5
        }
        ;
        c.addStream = function(a, c, d) {
            var e = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
            this.$9({
                pausableStreamPromise: b("Promise").resolve({
                    pausableStream: a,
                    loggingPayloads: d
                }),
                changeStatusDeferred: e,
                createStreamDeferred: new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise")),
                loggerProviderWithStreamContext: c,
                loggingPayloads: d
            });
            return {
                getStream: function() {
                    return a.getStream()
                },
                cancel: function() {
                    return a.pauseStream()
                },
                getStatusChangePromise: function() {
                    return e.getPromise()
                }
            }
        }
        ;
        c.addStreamDeferred = function(a, c) {
            var d = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"))
              , e = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
            this.$9({
                pausableStreamPromise: a,
                changeStatusDeferred: d,
                createStreamDeferred: e,
                loggerProviderWithStreamContext: c
            });
            var f = function() {
                return e.getPromise()
            };
            return {
                genStream: f,
                cancel: function() {
                    f().then(function(a) {
                        return a.pauseStream()
                    })
                },
                getStatusChangePromise: function() {
                    return d.getPromise()
                }
            }
        }
        ;
        c.$9 = function(a) {
            var c = this
              , d = a.pausableStreamPromise
              , e = a.changeStatusDeferred
              , f = a.createStreamDeferred
              , i = a.loggerProviderWithStreamContext
              , j = a.loggingPayloads;
            a = this.$1.getPromise();
            var k = b("oz-player/shims/ozPerformanceNow")()
              , l = this.$1 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
            a.then(function() {
                return d
            }).then(function(a) {
                if (a) {
                    var d = a.pausableStream;
                    a.loggingPayloads && (j = a.loggingPayloads);
                    f.resolve(d.getStream());
                    c.$4 = d;
                    var e = b("oz-player/shims/ozPerformanceNow")();
                    a = c.$10(d.startStream());
                    i && g(a, i, "fetch_stream", function() {}, function(a) {
                        j && h(a, j.getRequestUrl(), j.isPrefetch(), j.segments, e - k, d.getBytesStreamed(), j.getResponse())
                    });
                    return a
                }
                return null
            }).then(function(a) {
                c.$4 = null,
                l.resolve(),
                e.resolve(a || "cancelled")
            })["catch"](function(a) {
                c.$4 = null,
                c.$3.reject(a),
                e.reject(a)
            })
        }
        ;
        c.$10 = function(a) {
            return a.then(function(a) {
                a = a.statusPromise;
                return a.then(function(a) {
                    return a === "stream_done" ? "done" : "error"
                })
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/networks/OzStreamingTaskStateManager", ["Promise", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzSubscriptionsHandler", "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", "oz-player/networks/OzStreamingTask", "oz-player/networks/OzStreamingTaskQueueProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e) {
            var f = this;
            this.$3 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            this.$4 = 0;
            this.$9 = !1;
            this.$5 = a;
            this.$1 = c;
            this.$6 = b("oz-player/networks/OzStreamingTaskQueueProvider").getQueue(this.$5);
            this.$7 = d;
            this.$8 = e;
            this.$3.addSubscriptions(this.$1.addListener("state_changed", function(a, b) {
                f.$10(a, b),
                f.$2 && f.$6.updatePriority(f.$2, f.$4)
            }))
        }
        var c = a.prototype;
        c.startStream = function(a) {
            var b = a.streamableSegments
              , c = a.networkManager;
            a = a.segmentsLoggerProvider;
            var d = this.$11(a)
              , e = this.$12();
            c = c.createPausableStream(b, e, a);
            b = c.pausableStream;
            e = c.loggingPayloads;
            this.$9 = !0;
            c = d.addStream(b, a, e);
            d = {
                getStream: c.getStream,
                cancel: c.cancel,
                getStatusChangePromise: this.$13(c.getStatusChangePromise)
            };
            return d
        }
        ;
        c.$12 = function() {
            var a = [];
            a.push(b("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(this.$5));
            return a
        }
        ;
        c.startStreamDeferred = function(a) {
            var c = a.segmentsPromise
              , d = a.networkManager
              , e = a.segmentsLoggerProvider;
            a = this.$11(e);
            var f = this.$12()
              , g = new (b("oz-player/shims/OzMaybeNativePromise"))(function(a, b) {
                c.then(function(b) {
                    b.length > 0 ? a(d.createPausableStream(b, f, e)) : a(null)
                })["catch"](function(a) {
                    return b(a)
                })
            }
            );
            this.$9 = !0;
            a = a.addStreamDeferred(g, e);
            g = {
                genStream: a.genStream,
                cancel: a.cancel,
                getStatusChangePromise: this.$13(a.getStatusChangePromise)
            };
            return g
        }
        ;
        c.$11 = function(a) {
            a = this.$2;
            this.$10(this.$1.compute(), "start_stream");
            !a || a.isCancelled() ? (a = this.$2 = new (b("oz-player/networks/OzStreamingTask"))(this.$8,this.$7),
            this.$6.enqueue(a, this.$4)["catch"](function() {})) : this.$6.updatePriority(a, this.$4);
            return a
        }
        ;
        c.$13 = function(a) {
            var c = this;
            return function() {
                return a().then(function(a) {
                    c.$14();
                    return a
                })["catch"](function(a) {
                    c.$14();
                    return b("Promise").reject(a)
                })
            }
        }
        ;
        c.finishTaskIfNoOngoingStream = function() {
            this.$9 || this.$15()
        }
        ;
        c.destroy = function() {
            this.$3.release();
            var a = this.$2;
            this.$2 = null;
            a && this.$6.remove(a)
        }
        ;
        c.$14 = function() {
            this.$9 = !1,
            this.$10(this.$1.compute(), "end_stream"),
            this.$4 < b("oz-player/networks/OzStreamingTaskQueueProvider").OZ_QUEUE_MAX_PRIORITY && this.$15()
        }
        ;
        c.$15 = function() {
            this.$2 && (this.$2.finish(),
            this.$2 = null)
        }
        ;
        c.$10 = function(a, b) {
            if (a === this.$4)
                return;
            this.$4 = a;
            this.$7 && this.$7.getOperationLogger("priority_changed").setPriorityFloat(this.$4).setInitiator(b).log()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/strategies/OzStreamLengthStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getStreamingSegments = a;
    function a(a, b, c, d, e) {
        var f = a.getNumber("segments_to_stream_under_playhead_threshold");
        a = a.getNumber("low_segment_stream_playhead_threshold");
        f > 0 && d.getCurrentTime() < a && (b = f);
        d = [];
        d.push(e);
        for (var a = 1; a < b; a++) {
            f = c.getSegmentAfter(e);
            if (!f)
                break;
            e = f;
            d.push(e)
        }
        return d
    }
}
), null);
__d("oz-player/streams/OzMediaStreamLoopDriver", ["oz-player/shims/ozClearTimeout", "oz-player/shims/ozSetTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/shims/ozSetTimeoutAcrossTransitions");
    a = function() {
        function a(a) {
            var b = this;
            this.$2 = null;
            this.$3 = !1;
            this.$4 = function() {
                b.$5();
                if (b.$3)
                    return;
                var a = b.$1.execute()
                  , c = b.$1.getLoopInterval();
                c && (b.$2 = g(function() {
                    b.$4()
                }, c));
                a && a.then(b.$4)["catch"](function(a) {
                    b.$5();
                    a = b.$1.handleError(a);
                    a ? b.$2 = g(b.$4, a) : b.$3 = !0
                })
            }
            ;
            this.$1 = a
        }
        var c = a.prototype;
        c.start = function() {
            if (this.$3)
                throw new Error("restart is not implemented");
            this.$4()
        }
        ;
        c.stop = function() {
            this.$5(),
            this.$3 = !0
        }
        ;
        c.$5 = function() {
            this.$2 && (b("oz-player/shims/ozClearTimeout")(this.$2),
            this.$2 = null)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/utils/OzRangeUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getRangeForTime = a;
    function a(a, b) {
        b = b.filter(function(b) {
            return b.startTime <= a && b.endTime >= a
        });
        return b != null && b.length > 0 ? b[0] : null
    }
}
), null);
__d("oz-player/streams/OzSegmentLocator", ["oz-player/utils/OzNumericalRangeUtil", "oz-player/utils/OzRangeUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getEndingSequenceNumber = g;
    function g(a) {
        a = a.getEndingSegment();
        return a != null && a.getSequenceNumber() != null ? a.getSequenceNumber() || 0 : 0
    }
    a = function(a, c, d, e, f, h) {
        c = c.getCurrentTime();
        e = e == null ? void 0 : e.getBufferedRanges();
        var i = e ? new (b("oz-player/utils/OzNumericalRangeUtil"))().findCurrentRangeIndex(c, e.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        })) : 0;
        if (i >= 0 && e && e[i].endTime > c + d)
            return null;
        e = a.getPredictedSegmentAfter(f);
        e || (e = a.getSegmentByTime(c));
        i = h && h.getSequenceNumber() || 0;
        d = e && e.getSequenceNumber() || 0;
        if (e && h && i >= d) {
            f = g(a);
            return (f || 0) >= i ? h : null
        }
        return e
    }
    ;
    f.getPredictedSegment = a;
    c = function(a, c, d, e, f, g, h, i) {
        var j = a.getPredictedSegmentAfter(g);
        if (j && c.isPlaying())
            return j;
        j = c.getCurrentTime();
        j = e ? b("oz-player/utils/OzRangeUtils").getRangeForTime(j, e.getBufferedRanges()) : null;
        e = g ? g.getTimeRange().endTime : 0;
        if (h.getBool("use_stream_end_time_in_segment_locator") && j && j.endTime === i)
            return null;
        g = c.getCurrentTime() || 0;
        e ? g = e : j && (g = j.endTime);
        g - c.getCurrentTime();
        i = f.getTimeRanges();
        e = new (b("oz-player/utils/OzNumericalRangeUtil"))().findDiffCoveredByRanges(c.getCurrentTime(), g, i.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        }));
        if (e > d)
            return null;
        j = a.getSegment(0);
        h.getNumber("auto_seek_playhead_slack") === 0 && j && j.getTimeRange().startTime > g && (g = j.getTimeRange().startTime);
        f = a.getSegmentByTime(g);
        return f
    }
    ;
    f.getSegment = c
}
), null);
__d("oz-player/utils/OzTaggedTimeRanges", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = [],
            this.$2 = 0,
            this.$3 = 0,
            this.$4 = a ? a : function(a, b) {
                return a === b
            }
        }
        var b = a.prototype;
        b.add = function(a, b, c) {
            if (b < a)
                return;
            if (b === a)
                return;
            if (this.$1.length === 0) {
                this.$1.push({
                    startTime: a,
                    endTime: b,
                    tag: c
                });
                return
            }
            var d = 0
              , e = 0;
            for (var f = 0; f < this.$1.length; f++) {
                if (a === this.$1[f].startTime && b === this.$1[f].endTime) {
                    d = f;
                    e = f + 1;
                    break
                }
                a >= this.$1[f].startTime && (d = f + 1);
                b <= this.$1[f].endTime && (e = f);
                if (b < this.$1[f].startTime)
                    break
            }
            this.$1.splice(d, e - d, {
                startTime: a,
                endTime: b,
                tag: c
            });
            this.$5(d)
        }
        ;
        b.$5 = function(a) {
            var b = this.$1[a]
              , c = null;
            a !== 0 && (c = this.$1[a - 1]);
            c !== null && (this.$4(c.tag, b.tag) ? c.endTime >= b.startTime && (this.$1.splice(a - 1, 2, {
                startTime: c.startTime,
                endTime: Math.max(b.endTime, c.endTime),
                tag: b.tag
            }),
            a--) : (c.endTime > b.startTime && c.startTime === b.startTime ? (this.$1.splice(a - 1, 1),
            a--) : c.endTime > b.startTime && this.$1.splice(a - 1, 1, {
                startTime: c.startTime,
                endTime: b.startTime,
                tag: c.tag
            }),
            c.endTime > b.endTime && this.$1.splice(a + 1, 0, {
                startTime: b.endTime,
                endTime: c.endTime,
                tag: c.tag
            })));
            c = null;
            a !== this.$1.length - 1 && (c = this.$1[a + 1]);
            c && (this.$4(c.tag, b.tag) ? c.startTime <= b.endTime && this.$1.splice(a, 2, {
                startTime: b.startTime,
                endTime: Math.max(c.endTime, b.endTime),
                tag: b.tag
            }) : c.startTime <= b.endTime && (c.endTime < b.endTime ? (this.$1.splice(a, 1, {
                startTime: b.startTime,
                endTime: c.startTime,
                tag: b.tag
            }),
            this.$1.push({
                startTime: c.endTime,
                endTime: b.endTime,
                tag: b.tag
            })) : this.$1.splice(a + 1, 1, {
                startTime: b.endTime,
                endTime: c.endTime,
                tag: c.tag
            })))
        }
        ;
        b.get = function(a) {
            var b = a >= this.$3 ? this.$2 : 0
              , c = null;
            for (var b = b; b < this.$1.length; b++)
                if (this.$1[b].startTime <= a && a < this.$1[b].endTime) {
                    c = b;
                    break
                }
            this.$2 = c === null ? 0 : c;
            this.$3 = a;
            return c === null ? null : this.$1[c].tag
        }
        ;
        b.getLength = function() {
            return this.$1.length
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/streams/OzMediaStream", ["oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", "oz-player/networks/OzNetworkManager", "oz-player/networks/OzReadableStreamDataReader", "oz-player/networks/OzStreamingTaskStateManager", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/shims/ozvariant", "oz-player/strategies/OzStreamLengthStrategy", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzMimeUtil", "oz-player/utils/OzRangeUtils", "oz-player/utils/OzTaggedTimeRanges", "oz-player/streams/OzMediaStreamLoopDriver", "oz-player/streams/OzSegmentLocator", "oz-player/shims/OzEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/utils/OzMimeUtil").getMimeType
      , h = b("oz-player/utils/OzRangeUtils").getRangeForTime
      , i = b("oz-player/shims/ozSetTimeoutAcrossTransitions")
      , j = 1e3
      , k = .2;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e, f, h, i, j, k, l, m, n, o, p, q) {
            var r;
            r = a.call(this) || this;
            r.$OzMediaStream2 = 0;
            r.$OzMediaStream3 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
            r.$OzMediaStream11 = null;
            r.$OzMediaStream13 = !1;
            r.$OzMediaStream14 = null;
            r.$OzMediaStream15 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            r.$OzMediaStream17 = [];
            r.$OzMediaStream21 = 0;
            r.$OzMediaStream28 = !0;
            r.$OzMediaStream30 = !1;
            r.$OzMediaStream31 = null;
            r.$OzMediaStream32 = new (b("oz-player/utils/OzErrorEmitter"))();
            r.$OzMediaStream1 = c;
            r.$OzMediaStream4 = d;
            r.$OzMediaStream4.then(function(a) {
                r.$OzMediaStream5 = a,
                r.$OzMediaStream14 && r.$OzMediaStream14.setSourceBuffer(a),
                r.$OzMediaStream26.setSourceBufferState(a.getSourceBufferState()),
                r.$OzMediaStream34()
            });
            r.$OzMediaStream19 = e;
            r.$OzMediaStream10 = f;
            r.$OzMediaStream6 = h;
            r.$OzMediaStream12 = i;
            r.$OzMediaStream12.registerMediaStream(babelHelpers.assertThisInitialized(r));
            r.$OzMediaStream25 = j;
            r.$OzMediaStream26 = k;
            r.$OzMediaStream27 = l;
            r.$OzMediaStream14 = m;
            r.$OzMediaStream16 = p.cloneContext();
            r.$OzMediaStream24 = new (b("oz-player/utils/OzTaggedTimeRanges"))(function(a, b) {
                return a.id === b.id
            }
            );
            r.$OzMediaStream15.addSubscriptions(r.$OzMediaStream6.addEventListener("seeking", function() {
                r.$OzMediaStream1.getBool("fix_seek_performance") ? r.restartLoopBody() : (r.$OzMediaStream8 = null,
                r.$OzMediaStream30 = !1,
                r.$OzMediaStream23 && r.$OzMediaStream23.resolve())
            }));
            r.$OzMediaStream20 = g(o.getMimeCodecs());
            r.$OzMediaStream29 = new (b("oz-player/networks/OzStreamingTaskStateManager"))(r.$OzMediaStream20,r.$OzMediaStream26,r.$OzMediaStream16,r.$OzMediaStream1);
            r.$OzMediaStream22 = new (b("oz-player/streams/OzMediaStreamLoopDriver"))(babelHelpers.assertThisInitialized(r));
            n === o.getID() ? r.$OzMediaStream7 = o : r.$OzMediaStream35(o);
            return r
        }
        var d = c.prototype;
        d.start = function() {
            this.$OzMediaStream22.start()
        }
        ;
        d.getCurrentRepresentation = function() {
            return this.$OzMediaStream7
        }
        ;
        d.switchRepresentation = function(a) {
            this.$OzMediaStream35(a, "user")
        }
        ;
        d.onError = function(a) {
            return this.$OzMediaStream32.onError(a)
        }
        ;
        d.updateRunTimeConfigs = function(a) {
            a = a.videoStreamDataHandler;
            a !== void 0 && (this.$OzMediaStream33 = a)
        }
        ;
        d.$OzMediaStream35 = function(a, c) {
            var d = this;
            c === void 0 && (c = "internal");
            var e = function() {
                var a = d.$OzMediaStream1.getBool("clear_buffer_when_switch_representation_initiator_is_user");
                return a ? c === "user" : !0
            };
            e() && (this.$OzMediaStream8 = null);
            e = this.$OzMediaStream16.cloneContext().setType(this.$OzMediaStream20 + ";init");
            var f = this.$OzMediaStream10.request([a.getInitSegment()], [b("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(this.$OzMediaStream20)], e, "ENABLE_CACHE")
              , g = e.getOperationLogger("stream_switch").setPreviousRepresentationID(this.$OzMediaStream7 ? this.$OzMediaStream7.getID() : null).setRepresentationID(a.getID()).setReason(this.$OzMediaStream14 && this.$OzMediaStream14.getLastEvaluationReason()).start();
            this.$OzMediaStream7 = a;
            this.emit("switchRepresentation", c, a);
            this.$OzMediaStream36(f.getStream(), function() {
                g.log(),
                d.emit("initAppended"),
                d.$OzMediaStream12.notifyRepresentationSwitched(d)
            }, function(a) {
                g.setError(a).log(),
                d.$OzMediaStream1.getBool("fallback_on_append_error") && a instanceof b("oz-player/utils/OzError") && a.getType() !== "OZ_NETWORK" && d.$OzMediaStream32.emitError(a)
            }, e.cloneContext(), 0)
        }
        ;
        d.getLoopInterval = function() {
            return this.$OzMediaStream21
        }
        ;
        d.execute = function() {
            var a = this.$OzMediaStream37();
            if (a) {
                var c = this.$OzMediaStream23 = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));
                a.then(function() {
                    return c.resolve()
                })["catch"](function(a) {
                    return c.reject(a)
                });
                return c.getPromise()
            }
            return null
        }
        ;
        d.$OzMediaStream38 = function(a) {
            a === void 0 && (a = null);
            if (this.$OzMediaStream14 && this.$OzMediaStream28 && (this.$OzMediaStream1.getBool("enable_abr_for_first_request") || this.$OzMediaStream13 || this.$OzMediaStream19 > 0)) {
                a = this.$OzMediaStream14.getBestRepresentation(a);
                if (this.$OzMediaStream7 !== a)
                    return a
            }
            return null
        }
        ;
        d.$OzMediaStream39 = function(a) {
            var c = this.$OzMediaStream5 ? this.$OzMediaStream5.getSourceBufferState() : null
              , d = this.$OzMediaStream19 > 0 ? this.$OzMediaStream7.getSegment(this.$OzMediaStream19 - 1) : null
              , e = null;
            a && (e = this.$OzMediaStream7.getCustomFieldFirstSegment());
            if (this.$OzMediaStream1.getBool("pdash_use_pdash_segmentlocator") && !e && this.$OzMediaStream7.canPredict())
                e = b("oz-player/streams/OzSegmentLocator").getPredictedSegment(this.$OzMediaStream7, this.$OzMediaStream6, this.$OzMediaStream25.computeBufferTarget(), c, this.$OzMediaStream8 || d, this.$OzMediaStream9);
            else {
                e || (e = b("oz-player/streams/OzSegmentLocator").getSegment(this.$OzMediaStream7, this.$OzMediaStream6, this.$OzMediaStream25.computeBufferTarget(), c, this.$OzMediaStream7, this.$OzMediaStream8 || d, this.$OzMediaStream1, this.$OzMediaStream31));
                if (this.$OzMediaStream7.canPredict()) {
                    a = this.$OzMediaStream9 && this.$OzMediaStream9.getSequenceNumber() || 0;
                    c = e && e.getSequenceNumber() || 0;
                    if (e && this.$OzMediaStream9 && a >= c) {
                        d = b("oz-player/streams/OzSegmentLocator").getEndingSequenceNumber(this.$OzMediaStream7);
                        return (d || 0) >= a ? this.$OzMediaStream9 : null
                    }
                }
            }
            return e
        }
        ;
        d.$OzMediaStream40 = function() {
            return !this.$OzMediaStream13 && this.$OzMediaStream19 === 0
        }
        ;
        d.$OzMediaStream41 = function(a, c) {
            var d = [];
            if (c)
                d = [a];
            else {
                c = this.$OzMediaStream27.computeMin(this.$OzMediaStream6, a, this.$OzMediaStream7);
                var e = this.$OzMediaStream38(c);
                if (e) {
                    this.$OzMediaStream35(e);
                    e = this.$OzMediaStream39(!1);
                    if (!e && this.$OzMediaStream1.getBool("handle_switch_to_unparsed_representation_sidx"))
                        return [];
                    else if (e)
                        return this.$OzMediaStream41(e, !1)
                }
                d = b("oz-player/strategies/OzStreamLengthStrategy").getStreamingSegments(this.$OzMediaStream1, c, this.$OzMediaStream7, this.$OzMediaStream6, a);
                d = b("oz-player/networks/OzNetworkManager").getStreamableSegmentsRange(d)
            }
            return d
        }
        ;
        d.$OzMediaStream42 = function() {
            var a = this;
            return new (b("oz-player/shims/OzMaybeNativePromise"))(function(b, c) {
                a.getCurrentRepresentation().forceParseIfNotParsed();
                var d = a.getCurrentRepresentation().addUpdateListener(function() {
                    b(),
                    a.$OzMediaStream18 = null,
                    d.remove()
                });
                a.$OzMediaStream18 = d
            }
            )
        }
        ;
        d.$OzMediaStream43 = function(a, c) {
            var d = this;
            return new (b("oz-player/shims/OzMaybeNativePromise"))(function(b, c) {
                c = d.$OzMediaStream39(a);
                c == null ? b([]) : b(d.$OzMediaStream41(c, a))
            }
            )
        }
        ;
        d.$OzMediaStream37 = function() {
            var a = this
              , c = this.$OzMediaStream5 ? this.$OzMediaStream5.getSourceBufferState() : null;
            if (this.$OzMediaStream7.canPredict() && this.$OzMediaStream9 && this.$OzMediaStream7.isEndingSegment(this.$OzMediaStream9)) {
                this.endStream();
                return
            }
            if (this.$OzMediaStream7.canPredict() && this.$OzMediaStream8 && this.$OzMediaStream7.isEndingSegment(this.$OzMediaStream8)) {
                this.endStream();
                return
            }
            var d = this.$OzMediaStream40()
              , e = this.$OzMediaStream39(d);
            if (this.$OzMediaStream30 && this.$OzMediaStream1.getBool("no_new_loop_body_promise_when_stream_ongoing")) {
                this.$OzMediaStream21 = j;
                return null
            }
            this.$OzMediaStream19 > 0 && this.$OzMediaStream1.getBool("maybe_end_stream_if_prepended_segments") && !this.$OzMediaStream44() && this.endStreamIfBufferedToEndTime();
            if (!e || this.$OzMediaStream30) {
                this.$OzMediaStream21 = j;
                this.$OzMediaStream30 || this.$OzMediaStream29.finishTaskIfNoOngoingStream();
                return this.$OzMediaStream42()
            }
            this.$OzMediaStream21 = 0;
            var f = this.$OzMediaStream41(e, d);
            if (this.$OzMediaStream1.getBool("handle_switch_to_unparsed_representation_sidx") && f.length === 0)
                return this.$OzMediaStream42();
            this.$OzMediaStream13 = !0;
            var g = f[f.length - 1] || null;
            g && !this.$OzMediaStream1.getBool("clear_prepended_segments_count_on_append") && (this.$OzMediaStream19 = 0);
            g && this.$OzMediaStream7.isEndingSegment(g);
            var h = this.$OzMediaStream7
              , i = function() {
                return h.isEndingSegment(g)
            };
            f.length !== 0 || b("oz-player/shims/ozvariant")(0, 23148);
            e = f[0];
            var k = e.getTimeRange().startTime
              , l = g.getTimeRange().endTime
              , m = this.$OzMediaStream16.cloneContext();
            m.setRepresentationID(this.$OzMediaStream7.getID()).setSegmentStartTime(k).setSegmentEndTime(l);
            var n, o, p = null, q = this.$OzMediaStream1.getBool("disable_audio_scheduler") && this.$OzMediaStream20.indexOf("audio") !== -1;
            this.$OzMediaStream1.getBool("use_scheduler") && !q && !d ? this.$OzMediaStream1.getBool("use_deferred_streaming_task") ? o = this.$OzMediaStream29.startStreamDeferred({
                segmentsPromise: this.$OzMediaStream43(d, f),
                networkManager: this.$OzMediaStream10,
                sourceBufferState: c,
                playbackState: this.$OzMediaStream6,
                segmentsLoggerProvider: m
            }) : n = this.$OzMediaStream29.startStream({
                streamableSegments: f,
                networkManager: this.$OzMediaStream10,
                sourceBufferState: c,
                playbackState: this.$OzMediaStream6,
                segmentsLoggerProvider: m
            }) : n = this.$OzMediaStream10.request(f, [b("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(this.$OzMediaStream20)], m);
            this.$OzMediaStream11 = n;
            this.$OzMediaStream30 = !0;
            var r = this.$OzMediaStream45(e, g, f.length)
              , s = {
                startTime: k,
                endTime: l,
                tag: {
                    id: this.$OzMediaStream7.getID()
                }
            }
              , t = m.getOperationLogger("queued_append");
            t.start().setReason(this.$OzMediaStream14 && this.$OzMediaStream14.getLastEvaluationReason());
            var u = function(c) {
                a.$OzMediaStream36(c, function(b) {
                    t.setAppendedBufferMs(Math.round(b * 1e3)).log(),
                    f.forEach(function(b) {
                        a.emit("SegmentAppended", a.$OzMediaStream46(b))
                    }),
                    i() && a.endStream(),
                    a.$OzMediaStream1.getBool("clear_prepended_segments_count_on_append") && (a.$OzMediaStream19 = 0)
                }, function(c) {
                    t.setError(c).log(),
                    a.$OzMediaStream1.getBool("fallback_on_append_error") && c instanceof b("oz-player/utils/OzError") && c.getType() !== "OZ_NETWORK" && a.$OzMediaStream32.emitError(c)
                }, m, r, s)
            }, v;
            !!o || !!n || b("oz-player/shims/ozvariant")(0, 23147);
            o ? (o.genStream().then(function(a) {
                return u(a)
            })["catch"](function(b) {
                return a.$OzMediaStream32.emitError(b)
            }),
            v = o.getStatusChangePromise()) : n && (u(n.getStream()),
            v = n.getStatusChangePromise());
            q = v.then(function(b) {
                a.$OzMediaStream47(b, g);
                return a.$OzMediaStream48(p)
            }).then(function() {
                a.$OzMediaStream2 = 0
            });
            return q["catch"](function(b) {
                return a.$OzMediaStream1.getBool("emit_stream_error_event") ? a.$OzMediaStream49(b, p, g) : a.$OzMediaStream50(b, p, g)
            })
        }
        ;
        d.handleError = function(a) {
            return 0
        }
        ;
        d.$OzMediaStream49 = function(a, c, d) {
            var e = this;
            this.$OzMediaStream30 = !1;
            var f = new (b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"))
              , g = function(a) {
                e.$OzMediaStream2++;
                c && c.finish();
                e.$OzMediaStream8 = null;
                e.$OzMediaStream9 = d;
                e.$OzMediaStream29.finishTaskIfNoOngoingStream();
                return e.$OzMediaStream5 ? e.$OzMediaStream5.cancelOperationAndCleanQueue().then(function() {
                    i(function() {
                        return f.resolve()
                    }, a)
                })["catch"](function(a) {
                    return f.reject(a)
                }) : f.resolve()
            }
              , h = this.$OzMediaStream51(a)
              , j = h[0];
            h = h[1];
            h = {
                code: h,
                endStream: function() {
                    e.$OzMediaStream9 = d,
                    e.endStream(),
                    f.resolve()
                },
                error: j,
                failPlayback: function() {
                    e.$OzMediaStream52(a, j).then(function() {
                        return f.resolve()
                    })["catch"](function(a) {
                        return f.reject(a)
                    })
                },
                retry: function() {
                    g(0)
                },
                retryAttemptCount: this.$OzMediaStream2,
                retryWithTimeout: function(a) {
                    g(a)
                }
            };
            this.emit("streamError", h);
            return f.getPromise()
        }
        ;
        d.$OzMediaStream47 = function(a, b) {
            a !== "cancelled" && (this.$OzMediaStream8 = b)
        }
        ;
        d.$OzMediaStream48 = function(a) {
            this.$OzMediaStream30 = !1,
            a && a.finish()
        }
        ;
        d.$OzMediaStream51 = function(a) {
            var c, d;
            a instanceof b("oz-player/utils/OzError") ? (c = a.getExtra().code || "",
            d = a) : (c = a.status ? a.status.toString() : "0",
            d = new (b("oz-player/utils/OzError"))({
                type: "OZ_NETWORK",
                description: a.message,
                extra: {
                    originalError: a,
                    code: c,
                    url: a.url
                }
            }));
            return [d, c]
        }
        ;
        d.$OzMediaStream50 = function(a, c, d) {
            this.$OzMediaStream30 = !1;
            var e = this.$OzMediaStream51(a)
              , f = e[0];
            e = e[1];
            var g = JSON.parse(this.$OzMediaStream1.getString("network_end_broadcasts_json"));
            if (g.includes(e)) {
                this.$OzMediaStream9 = d;
                this.endStream();
                return b("oz-player/shims/OzMaybeNativePromise").resolve()
            }
            g = JSON.parse(this.$OzMediaStream1.getString("network_skip_json"));
            if (g.includes(e)) {
                c && c.finish();
                this.$OzMediaStream8 = d;
                this.$OzMediaStream29.finishTaskIfNoOngoingStream();
                return new (b("oz-player/shims/OzMaybeNativePromise"))(function(a, b) {
                    i(a, 0)
                }
                )
            }
            var h = this.$OzMediaStream1.getBool("back_off_pdash_504_retry") ? this.$OzMediaStream3[this.$OzMediaStream2++] : 0;
            g = JSON.parse(this.$OzMediaStream1.getString("network_reload_mpd_json"));
            var j = this.$OzMediaStream1.getBool("fix_reload_manifest_retry");
            if (this.$OzMediaStream1.getBool("back_off_pdash_504_retry") && h == null && (!j || g.includes(e)))
                return this.$OzMediaStream52(a, f);
            if (h != null && g.includes(e)) {
                c && c.finish();
                this.$OzMediaStream8 = null;
                this.$OzMediaStream9 = d;
                this.$OzMediaStream29.finishTaskIfNoOngoingStream();
                if (this.$OzMediaStream5 != null)
                    return this.$OzMediaStream5.cancelOperationAndCleanQueue().then(function() {
                        return new (b("oz-player/shims/OzMaybeNativePromise"))(function(a, b) {
                            i(a, h * 1e3)
                        }
                        )
                    })
            }
            j = JSON.parse(this.$OzMediaStream1.getString("network_retry_intervals_json"));
            var k = j[e];
            if (k) {
                c && c.finish();
                this.$OzMediaStream29.finishTaskIfNoOngoingStream();
                return new (b("oz-player/shims/OzMaybeNativePromise"))(function(a, b) {
                    i(a, k)
                }
                )
            }
            return this.$OzMediaStream52(a, f)
        }
        ;
        d.$OzMediaStream52 = function(a, c) {
            this.$OzMediaStream32.emitError(c);
            this.$OzMediaStream2 = 0;
            return a instanceof b("oz-player/utils/OzError") && a.getType() === "OZ_NETWORK" && this.$OzMediaStream5 ? this.$OzMediaStream5.cancelOperationAndCleanQueue() : b("oz-player/shims/OzMaybeNativePromise").resolve()
        }
        ;
        d.$OzMediaStream36 = function(a, b, c, d, e, f) {
            f === void 0 && (f = null),
            this.$OzMediaStream17.push({
                stream: a,
                dataAppendedCallback: b,
                dataAppendedErrorCallback: c,
                loggerProvider: d,
                appendTarget: e,
                timeRange: f
            }),
            this.$OzMediaStream5 && this.$OzMediaStream34()
        }
        ;
        d.$OzMediaStream53 = function(a) {
            if (this.$OzMediaStream5 != null && a != null) {
                var b = this.$OzMediaStream5.getSourceBufferState().getBufferedRanges();
                b = h(a.startTime + k, b);
                b != null && this.$OzMediaStream24.add(a.startTime, b.endTime, a.tag)
            }
        }
        ;
        d.$OzMediaStream34 = function() {
            var a = this;
            this.$OzMediaStream17.forEach(function(c) {
                var d = c.stream
                  , e = c.dataAppendedCallback
                  , f = c.dataAppendedErrorCallback
                  , g = c.loggerProvider
                  , h = c.appendTarget
                  , i = c.timeRange;
                c = a.$OzMediaStream33 == null ? d : d.pipeThrough(new (b("oz-player/networks/OzReadableStreamDataReader"))(a.$OzMediaStream33.bind(a, a.$OzMediaStream7)));
                d = null;
                var j = a.$OzMediaStream1.getNumber("tagged_time_range_per_append_throttle");
                j > 0 && (d = b("oz-player/shims/ozThrottle")(a.$OzMediaStream53.bind(a, i), j));
                a.$OzMediaStream5 && a.$OzMediaStream5.queueData(c, g, h, d).then(function(b) {
                    e(b.appendedSec),
                    i && a.$OzMediaStream7.canPredict() && b.startTime_UNSAFE && b.endTime_UNSAFE ? a.$OzMediaStream24.add(b.startTime_UNSAFE, b.endTime_UNSAFE, i.tag) : i && a.$OzMediaStream24.add(i.startTime, i.endTime, i.tag)
                })["catch"](function(a) {
                    f(a)
                })
            });
            this.$OzMediaStream17 = []
        }
        ;
        d.$OzMediaStream45 = function(a, b, c) {
            var d = 0
              , e = this.$OzMediaStream1.getNumber("appends_per_segment");
            if (e > 0) {
                a = a.getByteRange();
                b = b.getByteRange();
                a && b && b.endByte != null && (d = Math.ceil((b.endByte - a.startByte + 1) / (c * e)))
            }
            d === 0 && (d = this.$OzMediaStream1.getNumber("append_byte_target_without_range"));
            return d
        }
        ;
        d.getIsAdaptationEnabled = function() {
            return this.$OzMediaStream28
        }
        ;
        d.enableAdaptation = function() {
            this.$OzMediaStream28 = !0
        }
        ;
        d.disableAdaptation = function() {
            this.$OzMediaStream28 = !1
        }
        ;
        d.cleanup = function() {
            this.$OzMediaStream4.then(function(a) {
                a.destroy()
            }),
            this.$OzMediaStream29.destroy(),
            this.$OzMediaStream15.release(),
            this.$OzMediaStream15.engage(),
            this.removeAllListeners(),
            this.$OzMediaStream18 && this.$OzMediaStream18.remove(),
            this.$OzMediaStream22.stop()
        }
        ;
        d.getRepresentationIDAtTime = function(a) {
            var b = this.$OzMediaStream24.get(a);
            if (!b) {
                var c = this.$OzMediaStream7.getTimeRanges();
                c = c[c.length - 1];
                var d = .001;
                c && a >= c.endTime && a <= this.$OzMediaStream6.getDuration() + d && (b = this.$OzMediaStream24.get(c.endTime - d))
            }
            return b ? b.id : null
        }
        ;
        d.endStream = function() {
            this.$OzMediaStream12.notifyMediaStreamEnded(this),
            this.$OzMediaStream54()
        }
        ;
        d.endStreamIfBufferedToEndTime = function() {
            var a = this.$OzMediaStream7.getTimeRanges();
            if (a.length > 0) {
                a = a[a.length - 1].endTime;
                if (this.$OzMediaStream5) {
                    var b = this.$OzMediaStream5.getSourceBufferState().getBufferedRanges();
                    b.length > 0 && (Math.abs(b[b.length - 1].endTime - a) < k && this.endStream())
                }
            }
        }
        ;
        d.$OzMediaStream46 = function(a) {
            return {
                type: this.$OzMediaStream20.charAt(0),
                segment: a,
                sourceBuffer: this.$OzMediaStream5 ? this.$OzMediaStream5.getDebug().SourceBuffer : null
            }
        }
        ;
        d.restartLoopBody = function() {
            this.$OzMediaStream8 = null,
            this.$OzMediaStream30 = !1,
            this.$OzMediaStream11 && this.$OzMediaStream11.cancel(),
            this.$OzMediaStream21 !== 0 && this.$OzMediaStream23 && this.$OzMediaStream23.resolve()
        }
        ;
        d.$OzMediaStream54 = function() {
            if (this.$OzMediaStream5) {
                var a = this.$OzMediaStream5.getSourceBufferState().getBufferedRanges();
                a.length > 0 && (this.$OzMediaStream31 = a[a.length - 1].endTime)
            }
        }
        ;
        d.$OzMediaStream44 = function() {
            return this.$OzMediaStream31 !== null
        }
        ;
        d.getDebug = function() {
            return {
                SourceBufferManager: this.$OzMediaStream5,
                MediaStreamAbrManager: this.$OzMediaStream14
            }
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/utils/getRepresentationInCache", ["oz-player/networks/RequestParamCreator"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = new (b("oz-player/networks/RequestParamCreator"))();
    function a(a, b) {
        b === void 0 && (b = null);
        return a.find(function(a) {
            a = a.getInitSegment();
            var c = a && a.getByteRange();
            return a && c && b ? b.hasCacheValue(g.createRequestParam(a.getURI(), c).uri.toString()) : !1
        }) || null
    }
}
), null);
__d("oz-player/Player", ["Promise", "oz-player/configs/OzPlayerConfig", "oz-player/drm/OzDrmManager", "oz-player/loggings/OzDevConsolePerfLogger", "oz-player/loggings/OzLoggingUtils", "oz-player/loggings/OzMultiDestinationPerfLogger", "oz-player/loggings/OzOperationLoggerObserver", "oz-player/manifests/OzVideoRepresentation", "oz-player/media_source/MediaSourceManager", "oz-player/media_source/OzMediaSeekableRangeManager", "oz-player/networks/OzNetworkManager", "oz-player/parsers/OzMpdParser", "oz-player/parsers/OzMpdUpdater", "oz-player/playback_controls/OzPlaybackTimeRangeManager", "oz-player/playback_controls/OzPlayheadManager", "oz-player/playback_controls/OzPlayheadNudger", "oz-player/shims/ozClearTimeout", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozvariant", "oz-player/states/OzObservedPlaybackState", "oz-player/strategies/OzAbrManager", "oz-player/strategies/OzAudioIBRManager", "oz-player/strategies/OzBufferAheadPriorityStrategy", "oz-player/strategies/OzBufferAheadTargetStrategy", "oz-player/strategies/OzBufferingDetector", "oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy", "oz-player/strategies/OzBufferTargetCalculator", "oz-player/strategies/OzLiveheadDeltaCatchupStrategy", "oz-player/strategies/OzPausedStreamSegmentsCountStrategy", "oz-player/strategies/OzPlayheadAtInterruptionDetector", "oz-player/strategies/OzPlayingStatePriorityStrategy", "oz-player/strategies/OzPriorityCalculator", "oz-player/strategies/OzStartupBufferTargetStrategy", "oz-player/strategies/OzStaticStreamSegmentsStrategy", "oz-player/strategies/OzStreamSegmentsCountCalculator", "oz-player/streams/OzEndOfStreamWatcher", "oz-player/streams/OzHandleUserRepresentationSwitch", "oz-player/streams/OzMediaStream", "oz-player/utils/getRepresentationInCache", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzPlaybackRestrictionsUtils", "oz-player/utils/OzReadableStreamUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player/drm/OzDrmManager").OzDrmManager
      , h = b("oz-player/loggings/OzDevConsolePerfLogger").OzDevConsolePerfLoggerProvider
      , i = b("oz-player/loggings/OzLoggingUtils").executeOperationAndLog
      , j = b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation
      , k = b("oz-player/loggings/OzMultiDestinationPerfLogger").OzMultiDestinationPerfLoggerProvider
      , l = b("oz-player/utils/OzPlaybackRestrictionsUtils").applyVideoPlaybackRestrictions
      , m = b("oz-player/utils/OzReadableStreamUtils").pumpString;
    function n(a) {
        a || b("oz-player/shims/ozvariant")(0, 21876);
        return a
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$Player4 = new Map();
            d.$Player5 = new Map();
            d.$Player9 = void 0;
            d.$Player10 = new (b("oz-player/shims/OzSubscriptionsHandler"))();
            d.$Player11 = new (b("oz-player/utils/OzErrorEmitter"))();
            d.$Player25 = [];
            d.$Player31 = null;
            d.$Player32 = null;
            d.$Player39 = null;
            d.$Player47 = !1;
            d.$Player49 = null;
            d.$Player50 = 0;
            d.$Player51 = null;
            d.$Player52 = null;
            d.$Player53 = 0;
            d.$Player54 = !1;
            var e = c.audioOnly;
            e = e === void 0 ? !1 : e;
            var f = c.videoNodeOrQuickStarter
              , g = c.config
              , h = c.rawMpdXml
              , i = c.mpdUrl;
            i = i === void 0 ? null : i;
            var j = c.loggerConfig;
            j = j === void 0 ? {
                perfLoggerProviders: [],
                observedOperationLoggers: [],
                isOzDevConsoleEnabled: !1
            } : j;
            var l = c.prefetchCache;
            l = l === void 0 ? null : l;
            var m = c.overrideOzRequestImplementation;
            m = m === void 0 ? null : m;
            var n = c.networkRequestStreamHandlers
              , o = c.getShouldIncludeCredentials;
            o = o === void 0 ? null : o;
            var p = c.initialRepresentationIDs;
            p = p === void 0 ? [] : p;
            var q = c.debugCreateInitiator;
            q = q === void 0 ? null : q;
            var r = c.customParsers;
            r = r === void 0 ? new Map() : r;
            var s = c.entityKey;
            s = s === void 0 ? "" : s;
            var t = c.videoPlaybackRestrictions;
            t = t === void 0 ? [] : t;
            var u = c.customSegmentTimelineParser;
            u = u === void 0 ? null : u;
            var v = c.customRepresentationParsers;
            v = v === void 0 ? {} : v;
            var w = c.videoAbrManagerFactory;
            w = w === void 0 ? null : w;
            var x = c.seekHandler;
            x = x === void 0 ? null : x;
            var y = c.initialPlaybackPositionForDynamicMpd;
            y = y === void 0 ? -20 : y;
            var z = c.liveheadFallBehindBlockThreshold;
            z = z === void 0 ? 30 : z;
            var A = c.liveheadFallBehindBlockMargin;
            A = A === void 0 ? 5.9 : A;
            var B = c.startTimeStamp;
            B = B === void 0 ? 0 : B;
            var C = c.drmProviders;
            C = C === void 0 ? [] : C;
            c = c.getVideoDimensions;
            c = c === void 0 ? null : c;
            d.$Player45 = q;
            q = j.perfLoggerProviders;
            var D = j.observedOperationLoggers;
            j = j.isOzDevConsoleEnabled;
            d.$Player16 = j || !1;
            d.$Player15 = new k(d.$Player55().concat(q));
            d.$Player1 = e;
            d.$Player3 = (j = g) != null ? j : new (b("oz-player/configs/OzPlayerConfig"))();
            d.$Player56();
            d.$Player22 = new (b("oz-player/loggings/OzOperationLoggerObserver"))();
            d.$Player22.observe(D, d.$Player15);
            d.$Player24 = l;
            d.$Player49 = m;
            q = l && l.getCachedRepresentations(s);
            d.$Player25 = q || p;
            d.$Player27 = r;
            d.$Player30 = t;
            d.$Player28 = v;
            d.$Player29 = u;
            d.$Player34 = w;
            d.$Player35 = x;
            d.$Player36 = B;
            d.$Player37 = y;
            d.$Player38 = z;
            d.$Player40 = A;
            d.$Player43 = C;
            f instanceof HTMLVideoElement ? (d.$Player2 = f,
            d.$Player6 = new (b("oz-player/media_source/MediaSourceManager"))(d.$Player2,d.$Player3,d.$Player15)) : (d.$Player2 = f.getVideoNode(),
            d.$Player6 = f.getMediaSourceManager(),
            d.$Player7 = f);
            d.$Player41 = n;
            d.$Player42 = o;
            d.$Player12 = new (b("oz-player/networks/OzNetworkManager"))(d.$Player3,d.$Player24,d.$Player41,d.$Player49,d.$Player42);
            d.$Player17 = i;
            d.$Player8 = h;
            d.$Player13 = new (b("oz-player/states/OzObservedPlaybackState"))(d.$Player2,d.$Player15);
            d.$Player48 = c;
            d.$Player14 = new (b("oz-player/streams/OzEndOfStreamWatcher"))(d.$Player6,d.$Player3);
            d.$Player10.addSubscriptions(d.$Player14.addListener("streamEnd", function() {
                d.$Player47 = !0,
                d.emit("streamEnd")
            }));
            d.$Player23 = new (b("oz-player/media_source/OzMediaSeekableRangeManager"))(d.$Player6,d.$Player3);
            d.$Player26 = d.$Player57();
            d.$Player7 == null && (d.$Player46 = d.$Player58());
            return d
        }
        var d = c.prototype;
        d.$Player59 = function(a) {
            this.$Player60();
            this.$Player7 && this.$Player10.addSubscriptions(this.$Player7.onError(this.$Player11.emitError));
            try {
                a = i(this.$Player15.cloneContext().setInitiator(this.$Player45), "parse_manifest", this.$Player61.bind(this, a));
                this.$Player62(a)
            } catch (a) {
                if (a instanceof b("oz-player/utils/OzError"))
                    this.$Player11.emitError(a);
                else
                    throw a
            }
        }
        ;
        d.$Player62 = function(a) {
            var c = this;
            this.$Player9 = n(a);
            if (this.$Player17 !== null && this.$Player17 !== void 0) {
                var d = new (b("oz-player/parsers/OzMpdUpdater"))(this.$Player3,a,this.$Player12,this.$Player13,this.$Player15,{
                    mpdUrl: null,
                    customParsers: this.$Player27,
                    customRepresentationParsers: this.$Player28,
                    customSegmentTimelineParser: this.$Player29
                },this.$Player44);
                this.$Player63(d);
                this.$Player10.addSubscriptions(d.onError(this.$Player11.emitError), d.addListener("manifestFetchError", function(a) {
                    return c.emit("manifestFetchError", a)
                }), d.addListener("streamTransitionToStatic", this.$Player64.bind(this)));
                d.setupUpdateLoop();
                this.$Player21 = d
            }
            this.$Player36 = a.isStaticMpd() ? this.$Player36 : this.$Player37;
            this.$Player18 = new (b("oz-player/playback_controls/OzPlayheadManager"))({
                video: this.$Player2,
                mpd: a,
                playheadCatchup: this.$Player33,
                playbackState: this.$Player13,
                config: this.$Player3,
                perfLoggerProvider: this.$Player15,
                seekHandler: this.$Player35,
                initialPlaybackPosition: this.$Player36
            });
            this.$Player19 = new (b("oz-player/playback_controls/OzPlayheadNudger"))(this.$Player3,this.$Player2);
            this.$Player20 = new (b("oz-player/playback_controls/OzPlaybackTimeRangeManager"))(this.$Player3,this.$Player2,a,this.$Player38,this.$Player40);
            this.$Player65();
            this.emit("mpdReady", a)
        }
        ;
        d.load = function(a) {
            var c = this;
            this.$Player17 = a;
            try {
                var d = this.$Player8;
                d != null ? this.$Player59(d) : a != null ? this.$Player66(a).then(function(a) {
                    if (c.$Player54) {
                        c.$Player54 = !1;
                        c.load(c.$Player17);
                        return
                    }
                    c.$Player8 = a;
                    c.$Player50 = 0;
                    c.$Player59(a)
                })["catch"](function(d) {
                    if (c.$Player54) {
                        c.$Player54 = !1;
                        c.load(c.$Player17);
                        return
                    }
                    d = d instanceof b("oz-player/utils/OzError") ? d : new (b("oz-player/utils/OzError"))({
                        type: "OZ_INITIALIZATION",
                        description: "Unknown mpd url load failure: " + a + ("; errorMessage: " + d.message + "; errorDescription: " + ((d = d.description) != null ? d : "") + ";")
                    });
                    c.$Player67(d, a)
                }) : this.$Player11.emitError(new (b("oz-player/utils/OzError"))({
                    type: "OZ_INITIALIZATION",
                    description: "Cannot start Oz without a raw mpd xml or mpd url"
                }))
            } catch (a) {
                d = a instanceof b("oz-player/utils/OzError") ? a : new (b("oz-player/utils/OzError"))({
                    type: "OZ_INITIALIZATION",
                    description: "Failed to call load" + ("; errorMessage: " + a.message + "; errorDescription: " + ((d = a.description) != null ? d : "") + ";")
                });
                this.$Player11.emitError(d)
            }
        }
        ;
        d.$Player66 = function(a) {
            this.$Player50++;
            a = this.$Player12.requestRawUrl(a, {}, null, this.$Player15);
            a = a.getStream().getReader();
            return m(a)
        }
        ;
        d.$Player68 = function() {
            this.$Player51 != null && (b("oz-player/shims/ozClearTimeout")(this.$Player51),
            this.$Player51 = null)
        }
        ;
        d.$Player67 = function(a, c) {
            var d = this
              , e = !0
              , f = this.$Player50 - 1
              , g = a.getExtra().code;
            this.$Player52 !== g ? (this.$Player52 = g,
            this.$Player53 = 1) : this.$Player53++;
            g = {
                cancelMpdUpdates: function() {},
                consecutiveFailuresForErrorCode: this.$Player53,
                error: a,
                isInitialMpdRequest: !0,
                preventDefault: function() {
                    e = !1
                },
                retry: function(a) {
                    d.$Player68(),
                    d.$Player51 = b("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                        d.$Player68(),
                        d.load(c)
                    }, a != null ? a : 1e3)
                },
                retryAttemptCount: f
            };
            this.$Player3.getNumber("initial_manifest_request_retry_count") > 0 && this.emit("manifestFetchError", g);
            e && this.$Player11.emitError(a)
        }
        ;
        d.updatePlayerRunTimeConfig = function(a) {
            var b = a.manifestUrl;
            a = a.videoStreamDataHandler;
            if (a !== void 0) {
                var c = this.$Player4.get("video");
                c && c.updateRunTimeConfigs({
                    videoStreamDataHandler: a
                })
            }
            b != null && b !== "" && this.$Player69(b)
        }
        ;
        d.$Player70 = function(a, b) {
            var c = this, d = a.getMimeCodecs(), e, f = 0, g = null, h = this.$Player7;
            h && (e = h.getSourceBufferManagerPromise(d),
            f = h.getPrependedSegmentsCount(d),
            this.$Player3.getBool("fix_quick_starter_overhead") && (g = h.getRepresentationId(d)));
            e || (e = this.$Player6.createSourceBufferManager(d, this.$Player3.getBool("set_source_buffer_append_window_end")));
            this.$Player71(e, b, g, a, f);
            return j(e, this.$Player15, "source_attach", function(a) {
                a.setType(b)
            }).then(function(a) {
                return c.$Player18.observeSourceBufferState(a.getSourceBufferState(), b)
            })
        }
        ;
        d.isDrm = function() {
            var a = this.$Player44;
            if (a !== null && a !== void 0) {
                a = a.hasContentProtections();
                return a != null ? a : !1
            }
            return !1
        }
        ;
        d.$Player60 = function() {
            if (this.$Player43.length > 0) {
                var a = this.$Player44 = new g(this.$Player15,this.$Player2,{
                    maxStartEMEAttempts: this.$Player3.getNumber("max_start_eme_attempts")
                });
                a.onError(this.$Player11.emitError);
                this.$Player43 && this.$Player43.forEach(a.addProvider, a);
                this.$Player28.drmProtections && this.$Player11.emitError(new (b("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: '"drmProtections" is a reserved parser name for "customRepresentationParsers". Please rename your parser.'
                }));
                this.$Player28.drmProtections = a.parseContentProtectionForRepresentation.bind(this.$Player44)
            }
        }
        ;
        d.$Player72 = function(a) {
            var c = n(this.$Player9);
            a = [this.$Player3, a, c.getVideoRepresentations(), this.$Player30, this.$Player13, window.devicePixelRatio || 1, this.$Player73.bind(this)];
            return this.$Player34 ? this.$Player34.apply(this, a) : babelHelpers.construct(b("oz-player/strategies/OzAbrManager"), a)
        }
        ;
        d.$Player71 = function(a, c, d, e, f) {
            var g = this
              , h = n(this.$Player9)
              , i = this.$Player5.get(c)
              , j = new (b("oz-player/streams/OzMediaStream"))(this.$Player3,a,f,this.$Player12,this.$Player13,this.$Player14,this.$Player26,this.$Player74(),this.$Player75(i),i,d,e,this.$Player15.cloneContext().setType(c));
            this.$Player36 === 0 ? j.start() : this.$Player10.addSubscriptions(this.$Player18.addListener("initialPlaybackPositionSet", function() {
                g.$Player13.forceUpdateCurrentTime(),
                j.start()
            }));
            this.$Player10.addSubscriptions(j.onError(this.$Player11.emitError), this.$Player23.listenToMediaStreamInitAppended(j));
            c === "video" && (this.$Player32 = new (b("oz-player/streams/OzHandleUserRepresentationSwitch"))(this.$Player3,this.$Player13,l(this.$Player30, this.$Player73(), h.getVideoRepresentations()),j,a));
            this.$Player4.set(c, j);
            this.$Player10.addSubscriptions(j.addListener("switchRepresentation", function() {
                g.$Player3.getBool("update_live_video_config_on_representation_switch") && g.$Player76(j.getCurrentRepresentation()),
                c === "video" && g.emit("switchVideoRepresentation")
            }), j.addListener("SegmentAppended", function(a) {
                g.$Player77("SegmentAppended", a)
            }), j.addListener("streamError", function(a) {
                g.emit("streamError", a)
            }))
        }
        ;
        d.$Player57 = function() {
            return new (b("oz-player/strategies/OzBufferTargetCalculator"))([new (b("oz-player/strategies/OzStartupBufferTargetStrategy"))(this.$Player13,this.$Player3), new (b("oz-player/strategies/OzBufferAheadTargetStrategy"))(this.$Player3)])
        }
        ;
        d.$Player63 = function(a) {
            var c = this;
            if (this.$Player3.getNumber("stream_interrupt_check_mpd_stale_count_threshold") > 0) {
                var d = new (b("oz-player/strategies/OzPlayheadAtInterruptionDetector"))(this.$Player2);
                this.$Player10.addSubscriptions(d.addListener("playheadAtInterruption", function(a) {
                    return c.emit("streamInterruptAt", a)
                }), a.addListener("streamInterruptAt", function(a) {
                    return d.notifyStreamInterrupted(a)
                }), a.addListener("streamResumedAt", function(a) {
                    d.notifyStreamResumed(),
                    c.emit("streamResumedAt", a)
                }));
                this.$Player31 = d
            }
        }
        ;
        d.$Player74 = function() {
            var a = [new (b("oz-player/strategies/OzPlayingStatePriorityStrategy"))(this.$Player13), new (b("oz-player/strategies/OzBufferAheadPriorityStrategy"))(this.$Player13)];
            return new (b("oz-player/strategies/OzPriorityCalculator"))(a)
        }
        ;
        d.$Player75 = function(a) {
            var c = [new (b("oz-player/strategies/OzStaticStreamSegmentsStrategy"))(this.$Player3), new (b("oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy"))(this.$Player26,this.$Player3)];
            this.$Player3.getNumber("paused_stream_segments_count") !== 0 && c.push(new (b("oz-player/strategies/OzPausedStreamSegmentsCountStrategy"))(this.$Player13,this.$Player3));
            if (a) {
                a = a.getStreamSegmentsCountStrategy();
                a && c.push(a)
            }
            return new (b("oz-player/strategies/OzStreamSegmentsCountCalculator"))(c)
        }
        ;
        d.onError = function(a) {
            return this.$Player11.onError(a)
        }
        ;
        d.getSelectedVideoQuality = function() {
            var a = this.$Player9;
            if (!a)
                return "";
            var c = this.$Player4.get("video");
            c = c && c.getCurrentRepresentation();
            if (c instanceof b("oz-player/manifests/OzVideoRepresentation"))
                return c.getQualityLabel();
            c = a.getVideoRepresentations();
            a = c[0];
            if (a)
                return a.getQualityLabel();
            a || b("oz-player/shims/ozvariant")(0, 19857);
            return ""
        }
        ;
        d.switchToVideoQuality = function(a) {
            var b = n(this.$Player9);
            b = b.getVideoRepresentations().find(function(b) {
                return b.getQualityLabel() === a
            });
            if (b) {
                var c = this.$Player4.get("video");
                c && (c.switchRepresentation(b),
                c.disableAdaptation())
            }
        }
        ;
        d.getIsVideoQualityAdaptationEnabled = function() {
            var a = this.$Player4.get("video");
            return a ? a.getIsAdaptationEnabled() : !1
        }
        ;
        d.enableVideoQualityAdaptation = function() {
            var a = this.$Player4.get("video");
            a && a.enableAdaptation()
        }
        ;
        d.getVideoQualities = function() {
            var a = this.$Player9;
            return !a ? [] : a.getVideoRepresentations().map(function(a) {
                return a.getQualityLabel()
            })
        }
        ;
        d.setEnableLiveheadCatchup = function(a) {
            this.$Player20 && (a ? this.$Player15.getOperationLogger("live_catchup_enabled").log() : this.$Player15.getOperationLogger("live_catchup_disabled").log(),
            this.$Player20.setTimelineBlockingEnabled(a))
        }
        ;
        d.$Player65 = function() {
            var a = this
              , c = this.$Player1 ? [this.$Player78({
                liveConfigsFromAudioStream: !0
            })] : [this.$Player79(), this.$Player78({})]
              , d = [];
            return b("Promise").all(c).then(function() {
                var b = a.$Player4.get("video")
                  , c = a.$Player4.get("audio");
                b && d.push(b.getCurrentRepresentation());
                c && d.push(c.getCurrentRepresentation());
                d.forEach(function(b) {
                    a.$Player10.addSubscriptions(b.addUpdateListener(function() {
                        a.$Player77("SegmentIndexesUpdated", d)
                    }))
                });
                a.$Player77("InitialSegmentIndexes", d);
                a.$Player2 && a.$Player2.style && (a.$Player2.style.display = a.$Player1 ? "none" : "block")
            })
        }
        ;
        d.$Player80 = function(a) {
            if (a.getTimeRanges().length) {
                a = a.getTimeRanges()[a.getTimeRanges().length - 1].endTime;
                this.$Player6.updateDuration(a)
            }
        }
        ;
        d.$Player76 = function(a) {
            this.$Player80(a),
            this.$Player23.setTimeRangeProvider(a),
            this.$Player18.setTimeRangeProvider(a),
            this.$Player20 != null && this.$Player20.setTimeRangeProvider(a)
        }
        ;
        d.$Player79 = function() {
            var a = n(this.$Player9);
            a = l(this.$Player30, this.$Player73(), a.getVideoRepresentations(), this.$Player3.getBool("respect_initial_representation_on_setup") ? this.$Player25 : null);
            if (!a.length)
                return b("oz-player/shims/OzMaybeNativePromise").reject(new Error("no representation available."));
            this.$Player76(a[0]);
            var c = this.$Player81(a);
            if (this.$Player3.getBool("enable_adaptation")) {
                var d = this.$Player72(c || a[0]);
                this.$Player5.set("video", d);
                this.$Player3.getBool("use_abr_for_missing_default_representation") && !c && (c = d.getBestRepresentation())
            }
            return this.$Player70(c || a[0], "video")
        }
        ;
        d.$Player78 = function(a) {
            a = a.liveConfigsFromAudioStream;
            a = a === void 0 ? !1 : a;
            var c = n(this.$Player9);
            c = c.getAudioRepresentations();
            a && this.$Player76(c[0]);
            return c.length ? this.$Player70(this.$Player82(c) || c[0], "audio") : b("oz-player/shims/OzMaybeNativePromise").resolve()
        }
        ;
        d.getMpd = function() {
            return this.$Player9
        }
        ;
        d.destroy = function(a) {
            a = this.$Player15.getOperationLogger("unload").setInitiator(a).start();
            this.$Player68();
            this.$Player4.forEach(function(a) {
                a.cleanup()
            });
            this.$Player32 && this.$Player32.cleanup();
            this.$Player4 = new Map();
            this.$Player10.release();
            this.$Player10.engage();
            this.$Player13.destroy();
            this.$Player18 && this.$Player18.destroy();
            this.$Player19 && (this.$Player19.destroy(),
            this.$Player19 = null);
            this.$Player20 && (this.$Player20.destroy(),
            this.$Player20 = null);
            this.$Player44 && this.$Player44.destroy();
            this.$Player12 && this.$Player12.destroy();
            this.$Player48 && (this.$Player48 = null);
            this.$Player3.getBool("detach_media_source_manager") && this.$Player6 && this.$Player6.detach();
            var c = b("Promise").resolve();
            this.$Player3.getBool("cleanup_video_node_on_destroy") && (this.$Player2.pause(),
            this.$Player3.getBool("remove_src_attr_on_unload") ? this.$Player2.removeAttribute("src") : this.$Player2.src = "",
            this.$Player2.setMediaKeys && "function" === typeof this.$Player2.setMediaKeys && (c = this.$Player2.setMediaKeys(null)));
            this.$Player21 && this.$Player21.destroy();
            this.$Player31 && this.$Player31.destroy();
            this.$Player22.destroy();
            this.$Player23.destroy();
            this.$Player46 && this.$Player46.destroy();
            a.log();
            this.emit("destroyed");
            a = [c];
            return b("Promise").all(a)
        }
        ;
        d.$Player81 = function(a) {
            var c = this, d;
            d = a.find(function(a) {
                return c.$Player25.indexOf(a.getID()) !== -1
            });
            if (!d && this.$Player7 && this.$Player3.getBool("fix_quick_starter_overhead")) {
                var e = this.$Player7.getRepresentationId("video");
                e !== null && e !== void 0 && (d = a.find(function(a) {
                    return a.getID() === e
                }))
            }
            d || (d = b("oz-player/utils/getRepresentationInCache")(a, this.$Player24));
            return d || null
        }
        ;
        d.$Player82 = function(a) {
            var c = this, d = n(this.$Player9), e;
            e = a.find(function(a) {
                return c.$Player25.indexOf(a.getID()) !== -1
            });
            if (!e && this.$Player7 && this.$Player3.getBool("fix_quick_starter_overhead")) {
                var f = this.$Player7.getRepresentationId("audio");
                f !== null && f !== void 0 && (e = a.find(function(a) {
                    return a.getID() === f
                }))
            }
            e || (e = b("oz-player/utils/getRepresentationInCache")(a, this.$Player24));
            if (!e && !d.isStaticMpd() && a.length > 1 && this.$Player3.getBool("live_audio_ibr")) {
                d = new (b("oz-player/strategies/OzAudioIBRManager"))(this.$Player3,this.$Player15);
                e = d.getInitialAudioRepresentation(a)
            }
            return e || null
        }
        ;
        d.$Player61 = function(a) {
            var c = new (b("oz-player/parsers/OzMpdParser"))(this.$Player3,{
                mpdUrl: this.$Player17,
                customParsers: this.$Player27,
                customRepresentationParsers: this.$Player28,
                customSegmentTimelineParser: this.$Player29
            },this.$Player12,this.$Player15,this.$Player44);
            this.$Player10.addSubscriptions(c.onError(this.$Player11.emitError));
            return c.parse(a)
        }
        ;
        d.$Player55 = function() {
            var a = [];
            this.$Player16 && a.push(new h());
            return a
        }
        ;
        d.$Player83 = function(a, b) {
            b = this.$Player4.get(b);
            return b ? b.getRepresentationIDAtTime(a) : null
        }
        ;
        d.getAudioRepresentationIDAtTime = function(a) {
            return this.$Player83(a, "audio")
        }
        ;
        d.getVideoRepresentationIDAtTime = function(a) {
            return this.$Player83(a, "video")
        }
        ;
        d.getCurrentVideoRepresentation = function() {
            return this.$Player84("video")
        }
        ;
        d.getCurrentAudioRepresentation = function() {
            return this.$Player84("audio")
        }
        ;
        d.$Player84 = function(a) {
            var b = this.$Player83(this.$Player13.getCurrentTime(), a)
              , c = this.$Player9;
            if (!c)
                return null;
            var d = [];
            a === "audio" ? d = c.getAudioRepresentations() : a === "video" && (d = c.getVideoRepresentations());
            return (a = d.find(function(a) {
                return a.getID() === b
            })) != null ? a : null
        }
        ;
        d.getSelectedVideoRepresentation = function() {
            var a = this.$Player4.get("video");
            return a != null ? a.getCurrentRepresentation() : null
        }
        ;
        d.getSelectedAudioRepresentation = function() {
            var a = this.$Player4.get("audio");
            return a != null ? a.getCurrentRepresentation() : null
        }
        ;
        d.$Player64 = function() {
            this.$Player4.forEach(function(a) {
                return a.endStreamIfBufferedToEndTime()
            })
        }
        ;
        d.getDebug = function() {
            var a = this, b = this.$Player4.get("video"), c = this.$Player4.get("audio"), d, e, f, g, h;
            b && (d = b.getDebug().MediaStreamAbrManager,
            e = b.getDebug().SourceBufferManager,
            e && (f = e.getDebug().SourceBuffer));
            c && (g = c.getDebug().SourceBufferManager,
            g && (h = g.getDebug().SourceBuffer));
            return {
                getManifest: function() {
                    return n(a.$Player9)
                },
                indentifiersIntact: !0,
                VideoSourceStream: b,
                VideoAbrManager: d,
                VideoBufferManager: e,
                VideoSourceBuffer: f,
                AudioSourceStream: c,
                AudioBufferManager: g,
                AudioSourceBuffer: h
            }
        }
        ;
        d.$Player77 = function(a, b) {
            this.emit("debug/dashPlayerEvent", {
                detail: {
                    type: a,
                    event: b
                }
            })
        }
        ;
        d.$Player56 = function() {
            this.$Player3.getBool("live_playhead_catch_up") && (this.$Player33 = new (b("oz-player/strategies/OzLiveheadDeltaCatchupStrategy"))(this.$Player3))
        }
        ;
        d.$Player58 = function() {
            var a = this
              , c = new (b("oz-player/strategies/OzBufferingDetector"))(this.$Player2,this.$Player3.getLegacyConfig(),function() {
                return a.$Player47 ? a.$Player2.duration : Infinity
            }
            );
            this.$Player10.addSubscriptions(c.addListener("enterBuffering", function() {
                a.emit("enterBuffering")
            }), c.addListener("leaveBuffering", function() {
                a.emit("leaveBuffering")
            }));
            return c
        }
        ;
        d.$Player73 = function() {
            var a = this.$Player48 ? this.$Player48() : {
                width: this.$Player2.offsetWidth,
                height: this.$Player2.offsetHeight
            };
            return a
        }
        ;
        d.getMpdUrl = function() {
            return this.$Player17
        }
        ;
        d.$Player69 = function(a) {
            var b = this;
            this.$Player17 = a;
            var c = this.$Player9;
            if (!c) {
                this.$Player54 = !0;
                return
            } else {
                c.updateLocation(a);
                this.$Player39 && (this.$Player10.releaseOne(this.$Player39),
                this.$Player39 = null);
                a = function() {
                    b.$Player39 && (b.$Player10.releaseOne(b.$Player39),
                    b.$Player39 = null),
                    b.$Player4.forEach(function(a, d) {
                        var e = a.getCurrentRepresentation()
                          , f = e.getQualityLabel();
                        e = d === "video" ? c.getVideoRepresentations().slice() : c.getAudioRepresentations().slice();
                        if (d === "video") {
                            d = b.$Player5.get(d);
                            d && d.updateRepresentations(c.getVideoRepresentations())
                        }
                        d = e[0];
                        e.forEach(function(a) {
                            var b = a.getQualityLabel();
                            b === f && (d = a)
                        });
                        a.switchRepresentation(d);
                        a.restartLoopBody()
                    })
                }
                ;
                this.$Player39 = c.addListener("updated", a);
                this.$Player10.addSubscriptions(this.$Player39)
            }
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player", ["oz-player/Player"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player/Player")
}
), null);
__d("oz-player/loggings/OzPreInitLogger", ["oz-player/shims/OzEventEmitter", "oz-player/loggings/OzOperationLoggerBase", "oz-player/loggings/OzPerfLoggerProviderBase"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            a = b.call(this, a) || this;
            a.$OzPreInitOperationLogger1 = c;
            return a
        }
        var c = a.prototype;
        c.log = function() {
            b.prototype.log.call(this),
            this.$OzPreInitOperationLogger1(this)
        }
        ;
        return a
    }(b("oz-player/loggings/OzOperationLoggerBase"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$OzPreInitLoggerProvider1 = !1,
            d.$OzPreInitLoggerProvider2 = [],
            d.$OzPreInitLoggerProvider3 = new (b("oz-player/shims/OzEventEmitter"))(),
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.deactivate = function() {
            this.$OzPreInitLoggerProvider1 = !1
        }
        ;
        d.activate = function() {
            var a = this;
            this.$OzPreInitLoggerProvider1 = !0;
            this.$OzPreInitLoggerProvider2.forEach(function(b) {
                a.$OzPreInitLoggerProvider3.emit("operation_logged", b)
            });
            this.$OzPreInitLoggerProvider2 = []
        }
        ;
        d.setOperationLoggedListener = function(a) {
            return this.$OzPreInitLoggerProvider3.addListener("operation_logged", function(b) {
                a(b)
            })
        }
        ;
        d.createOperationLogger = function(a) {
            var b = this;
            a = new g(a,function(a) {
                b.$OzPreInitLoggerProvider1 ? b.$OzPreInitLoggerProvider3.emit("operation_logged", a) : b.$OzPreInitLoggerProvider2.push(a)
            }
            );
            return a
        }
        ;
        d.createLoggerProvider = function() {
            return new c()
        }
        ;
        return c
    }(b("oz-player/loggings/OzPerfLoggerProviderBase"));
    f.OzPreInitLoggerProvider = a
}
), null);
__d("oz-player/utils/convertPrefetchCacheEntryToReadableStream", ["oz-player/shims/OzReadableStream", "oz-player/utils/maybeConvertReadableStreamToOzReadableStream", "oz-player/utils/OzError"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = new (b("oz-player/shims/OzReadableStream"))({
            start: function(c) {
                a.then(function(a) {
                    switch (a.initiator) {
                    case "XHR_REQUEST":
                        var d = new Uint8Array(a.response);
                        c.enqueue(d);
                        c.close();
                        break;
                    case "FETCH":
                        d = a.response.body;
                        if (d != null) {
                            var e = function a() {
                                f.read().then(function(b) {
                                    var d = b.done;
                                    b = b.value;
                                    if (d) {
                                        c.close();
                                        return
                                    }
                                    c.enqueue(b);
                                    a()
                                })["catch"](function(a) {
                                    c.err(a)
                                })
                            }
                              , f = b("oz-player/utils/maybeConvertReadableStreamToOzReadableStream")(d).getReader();
                            e()
                        } else
                            a.response.arrayBuffer().then(function(a) {
                                a = new Uint8Array(a);
                                c.enqueue(a);
                                c.close()
                            })["catch"](function(a) {
                                c.err(a)
                            });
                        break;
                    default:
                        a.initiator,
                        c.error(new (b("oz-player/utils/OzError"))({
                            type: "OZ_UNEXPECTED_CACHE_INITIATOR",
                            description: "Unable to handle request initiator: " + a.initiator
                        }))
                    }
                })["catch"](function(a) {
                    c.error(a)
                })
            }
        });
        return c
    }
}
), null);
__d("oz-player/media_source/OzQuickStarter", ["oz-player/configs/OzConfigUtils", "oz-player/loggings/OzLoggingUtils", "oz-player/loggings/OzPreInitLogger", "oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant", "oz-player/utils/convertPrefetchCacheEntryToReadableStream", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/media_source/MediaSourceManager"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = .1;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e) {
            var f;
            e === void 0 && (e = []);
            f = a.call(this) || this;
            f.$OzQuickStarter5 = new Map();
            f.$OzQuickStarter6 = [];
            f.$OzQuickStarter8 = new Map();
            f.$OzQuickStarter9 = new Map();
            f.$OzQuickStarter10 = new (b("oz-player/utils/OzErrorEmitter"))(!0);
            f.$OzQuickStarter13 = function(a) {
                a instanceof b("oz-player/utils/OzError") || (a = new (b("oz-player/utils/OzError"))({
                    type: "OZ_QUICKSTARTER",
                    description: a.message,
                    extra: {
                        originalError: a
                    }
                })),
                f.$OzQuickStarter10.emitError(a)
            }
            ;
            f.$OzQuickStarter3 = c;
            f.$OzQuickStarter1 = b("oz-player/configs/OzConfigUtils").provideConfigWithDefaults(d);
            f.$OzQuickStarter7 = new (b("oz-player/loggings/OzPreInitLogger").OzPreInitLoggerProvider)();
            f.$OzQuickStarter7.setInitiator("quick_starter");
            f.$OzQuickStarter6.push(f.$OzQuickStarter7);
            f.$OzQuickStarter2 = new (b("oz-player/media_source/MediaSourceManager"))(f.$OzQuickStarter3,f.$OzQuickStarter1,f.$OzQuickStarter7);
            f.$OzQuickStarter4 = new Map();
            e.forEach(function(a) {
                return f.addPrefetchTrack(a)
            });
            return f
        }
        var d = c.prototype;
        d.addPrefetchTrack = function(a) {
            var c = this
              , d = a.mimeCodec
              , e = this.$OzQuickStarter11(d);
            if (!e)
                return;
            var f = this.$OzQuickStarter11(d)
              , g = this.$OzQuickStarter12(this.$OzQuickStarter7).setType(f)
              , h = this.$OzQuickStarter12(this.$OzQuickStarter7).setType(f + ";init");
            this.$OzQuickStarter5.set(e, a.segmentPromise ? 1 : 0);
            f = this.$OzQuickStarter2.createSourceBufferManager(d).then(function(d) {
                var f = b("oz-player/utils/convertPrefetchCacheEntryToReadableStream")(a.initializationPromise);
                b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(a.initializationPromise, h, "fetch_stream");
                d.queueData(f, h)["catch"](c.$OzQuickStarter13);
                f = a.segmentPromise;
                if (f) {
                    var i = b("oz-player/utils/convertPrefetchCacheEntryToReadableStream")(f);
                    b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(f, g, "fetch_stream");
                    d.queueData(i, g).then(function(a) {
                        c.$OzQuickStarter8.set(e, a.appendedSec),
                        c.$OzQuickStarter1.getBool("call_end_of_stream_in_quick_starter") && c.$OzQuickStarter8.size === c.$OzQuickStarter4.size && c.$OzQuickStarter14() && (c.$OzQuickStarter2.notifyEndOfStream(),
                        c.emit("streamEnd")),
                        c.$OzQuickStarter1.getBool("seek_to_start_quick_starter") && c.$OzQuickStarter8.size === c.$OzQuickStarter4.size && c.$OzQuickStarter15()
                    })["catch"](c.$OzQuickStarter13)
                }
                return d
            });
            this.$OzQuickStarter4.set(e, f);
            a.representationID && this.$OzQuickStarter9.set(e, a.representationID)
        }
        ;
        d.onError = function(a) {
            return this.$OzQuickStarter10.onError(a)
        }
        ;
        d.$OzQuickStarter15 = function() {
            var a = this.$OzQuickStarter3.buffered.length > 0 ? this.$OzQuickStarter3.buffered.start(0) : null;
            a !== null && this.$OzQuickStarter3.currentTime < a && (this.$OzQuickStarter3.currentTime = a + g)
        }
        ;
        d.$OzQuickStarter14 = function() {
            var a = this;
            if (Number.isNaN(this.$OzQuickStarter3.duration))
                return !1;
            var b = !0;
            this.$OzQuickStarter8.forEach(function(c) {
                Math.abs(c - a.$OzQuickStarter3.duration) > g && (b = !1)
            });
            return b
        }
        ;
        d.getSourceBufferManagerPromise = function(a) {
            a = this.$OzQuickStarter11(a);
            return this.$OzQuickStarter4.get(a)
        }
        ;
        d.getPrependedSegmentsCount = function(a) {
            var b = this.$OzQuickStarter11(a);
            if (!b)
                return 0;
            b = this.$OzQuickStarter5.get(b) || 0;
            return this.getSourceBufferManagerPromise(a) ? b : 0
        }
        ;
        d.getRepresentationId = function(a) {
            a = this.$OzQuickStarter11(a);
            return !a ? null : this.$OzQuickStarter9.get(a) || null
        }
        ;
        d.getAudioRepresentationIDAtTime = function(a) {
            return this.$OzQuickStarter16("audio", a)
        }
        ;
        d.getVideoRepresentationIDAtTime = function(a) {
            return this.$OzQuickStarter16("video", a)
        }
        ;
        d.getVideoNode = function() {
            return this.$OzQuickStarter3
        }
        ;
        d.getMediaSourceManager = function() {
            return this.$OzQuickStarter2
        }
        ;
        d.getObservedOperationLoggers = function() {
            return this.$OzQuickStarter6
        }
        ;
        d.$OzQuickStarter16 = function(a, b) {
            var c = this.$OzQuickStarter8.get(a);
            return c != null && b <= c ? this.$OzQuickStarter9.get(a) : null
        }
        ;
        d.$OzQuickStarter12 = function(a) {
            a = a.cloneContext();
            a instanceof b("oz-player/loggings/OzPreInitLogger").OzPreInitLoggerProvider || b("oz-player/shims/ozvariant")(0, 5677);
            this.$OzQuickStarter6.push(a);
            return a
        }
        ;
        d.$OzQuickStarter11 = function(a) {
            return (a.split("/")[0] || "").trim()
        }
        ;
        return c
    }(b("oz-player/shims/OzEventEmitter"));
    e.exports = a
}
), null);
__d("oz-player/shims/www/OzDOMEventListenerWWW", ["OzDOMEventListenerImpl"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("OzDOMEventListenerImpl");
    e.exports = a
}
), null);
__d("oz-player/shims/www/OzDataViewReaderWWW", ["DataViewReader"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("DataViewReader");
    e.exports = a
}
), null);
__d("oz-player/shims/www/OzSubscriptionsHandlerWWW", ["SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("SubscriptionsHandler");
    e.exports = a
}
), null);
__d("oz-player/shims/www/OzURIWWW", ["URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function() {
        function a(a) {
            this.$1 = new (g || (g = b("URI")))(a)
        }
        var c = a.prototype;
        c.addQueryData = function(a, b) {
            this.$1.addQueryData(a, b);
            return this
        }
        ;
        c.getQueryData = function() {
            return this.$1.getQueryData()
        }
        ;
        c.getDomain = function() {
            return this.$1.getDomain()
        }
        ;
        c.toString = function() {
            return this.$1.toString()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("oz-player/shims/www/ozClearTimeoutWWW", ["clearTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("clearTimeout");
    e.exports = a
}
), null);
__d("oz-player/shims/www/ozPerformanceNowWWW", ["performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g || b("performanceNow");
    e.exports = a
}
), null);
__d("oz-player/shims/www/ozThrottleWWW", ["throttle"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("throttle");
    e.exports = a
}
), null);
__d("oz-player/shims/www/ozvariantWWW", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = g;
    e.exports = a
}
), null);
