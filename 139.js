if (self.CavalryLogger) {
    CavalryLogger.start_js(["dCz15"]);
}

__d("getErrorMessageFromMediaErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        switch (a) {
        case 1:
            return "The fetching process for the media resource was aborted by the user agent at the users request.";
        case 2:
            return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
        case 3:
            return "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
        case 4:
            return "The media resource indicated by the src attribute was not suitable."
        }
        return null
    }
}
), null);
__d("getErrorNameFromMediaErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        switch (a) {
        case 1:
            return "MEDIA_ERR_ABORTED";
        case 2:
            return "MEDIA_ERR_NETWORK";
        case 3:
            return "MEDIA_ERR_DECODE";
        case 4:
            return "MEDIA_ERR_SRC_NOT_SUPPORTED";
        default:
            return "MEDIA_ERR_UNKNOWN_" + ((a = a) != null ? a : "UNDEFINED")
        }
    }
}
), null);
__d("VideoPlaybackQuality", [], (function(a, b, c, d, e, f) {
    f.getDroppedFrames = a;
    f.getTotalFrames = b;
    function a(a) {
        if (typeof a.getVideoPlaybackQuality === "function")
            return a.getVideoPlaybackQuality().droppedVideoFrames;
        a = a.webkitDroppedFrameCount;
        return typeof a === "number" ? a : 0
    }
    function b(a) {
        if (typeof a.getVideoPlaybackQuality === "function")
            return a.getVideoPlaybackQuality().totalVideoFrames;
        a = a.webkitDecodedFrameCount;
        return typeof a === "number" ? a : 0
    }
}
), null);
__d("CVCv3DisabledPlayerOrigins", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BEEPER: "beeper",
        FB_STORIES: "fb_stories"
    });
    e.exports = a
}
), null);
__d("CVCv3DisabledPlayerSubOrigins", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        LIVE_BEEPER: "live_beeper"
    });
    e.exports = a
}
), null);
__d("CVCv3SubscriptionHelper", ["DateConsts", "guid"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d) {
            this.$1 = a;
            this.$2 = b("guid")();
            this.$3 = ((a = c) != null ? a : "null") + "::" + ((c = d) != null ? c : "null");
            this.$4 = null;
            this.$5 = null
        }
        var c = a.prototype;
        c.isValidSubscription = function() {
            return !!this.$1
        }
        ;
        c.makeCVCv3StateUpdate = function(a, c, d, e) {
            var f = null;
            a != null && !Number.isNaN(a) && c != null && !Number.isNaN(c) && (f = {
                m: e,
                pf: Math.floor((c - a) * b("DateConsts").MS_PER_SEC),
                s: d,
                sa: Math.floor(a * b("DateConsts").MS_PER_SEC)
            });
            e = {
                pps: this.$4,
                ps: f,
                si: this.$2,
                so: this.$3,
                vi: this.$1
            };
            this.$4 = f;
            return e
        }
        ;
        c.makeUnifiedVideoCVCUpdate = function(a, b, c, d, e) {
            a = this.makeCVCv3StateUpdate(a, b, c, d);
            this.$5 != null && (a.tk = this.$5);
            return Object.assign({}, a, e)
        }
        ;
        c.processUnifiedResponse = function(a) {
            a = a;
            this.$5 = a.tk;
            return a
        }
        ;
        c.clearAnyPreviousContext = function() {
            this.$4 = null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("LiveTraceWwwVideoPlayerFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743810");
    c = b("FalcoLoggerInternal").create("live_trace_www_video_player", a);
    e.exports = c
}
), null);
__d("VideoLiveTrace", ["LiveTraceWwwVideoPlayerFalcoEvent", "gkx", "throttle"], (function(a, b, c, d, e, f) {
    var g = "x-fb-video-livetrace-ids"
      , h = "x-fb-video-livetrace-parentsource"
      , i = "x-fb-video-livetrace-streamtype"
      , j = "x-fb-origin-hit"
      , k = "x-fb-edge-hit"
      , l = "PLY:WWW:"
      , m = l + "DL:"
      , n = l + "DIS:"
      , o = 1e3
      , p = /[\r\n]+/;
    a = function() {
        function a(a, c, d) {
            var e = this;
            this.$6 = [];
            this.$1 = a;
            this.$2 = null;
            a = d + ":" + c.substring(0, 5);
            this.$3 = l + a;
            this.$4 = m + a;
            this.$5 = n + a;
            this.$7 = b("throttle")(function(a) {
                return e.$8(a)
            }, o)
        }
        var c = a.prototype;
        c.setStreamType = function(a) {
            this.$2 = a
        }
        ;
        c.$9 = function(a, c, d, e, f, g) {
            var h, i = this, j = Date.now(), k = (h = this.$2) != null ? h : 0;
            b("LiveTraceWwwVideoPlayerFalcoEvent").log(function() {
                return {
                    stream_id: i.$1,
                    stream_type: k,
                    event_name: c,
                    event_severity: f,
                    event_creation_time: j,
                    source: a,
                    trace_id: d,
                    parent_source: e,
                    metadata: g
                }
            })
        }
        ;
        c.onUpdateStatus = function(a) {
            this.$7(a)
        }
        ;
        c.$8 = function(a) {
            a = a.position * 1e3;
            for (var c = this.$6.length - 1; c >= 0 && this.$6[c].presentationTimestamp <= a; c--) {
                var d = this.$6[c];
                b("gkx")("1653233") || this.$6.splice(c, 1);
                if (d.displayTimestamp == null)
                    d.displayTimestamp = Date.now();
                else
                    continue;
                this.$9(this.$5, "FRAME", d.traceId, this.$4, "SUCCESS", null)
            }
        }
        ;
        c.getAndFlushTracedFrames = function() {
            var a;
            if (!b("gkx")("1653233"))
                return null;
            var c = {
                currentTimeMs: Date.now(),
                streamId: this.$1
            }
              , d = {
                dl: [],
                dis: []
            }
              , e = [];
            this.$6.forEach(function(a) {
                a.hasBeenFlushedAsDownloaded || (d.dl.push({
                    id: a.traceId,
                    timeMs: a.downloadTimestamp
                }),
                a.hasBeenFlushedAsDownloaded = !0),
                a.displayTimestamp != null ? d.dis.push({
                    id: a.traceId,
                    timeMs: a.displayTimestamp
                }) : e.push(a)
            });
            this.$6 = e;
            c[(a = this.$2) != null ? a : 0] = d;
            return d.dl.length > 0 || d.dis.length > 0 ? c : null
        }
        ;
        c.handleHeadersString = function(a, b) {
            a = a.trim().split(p);
            this.$10(a.map(function(a) {
                a = a.split(": ");
                return [a.shift().toLowerCase(), a.shift()]
            }), b)
        }
        ;
        c.handleHeaders = function(a, b) {
            var c = [];
            for (var a = a.entries(), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var f;
                if (d) {
                    if (e >= a.length)
                        break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done)
                        break;
                    f = e.value
                }
                f = f;
                c.push(f)
            }
            this.$10(c, b)
        }
        ;
        c.$10 = function(a, b) {
            var c = this
              , d = "null"
              , e = []
              , f = []
              , l = "";
            a.forEach(function(a) {
                var b = a[0].toLowerCase();
                a = a[1];
                if (b === g && a) {
                    var m = a.split(",");
                    m.forEach(function(a) {
                        a = a.split(":");
                        var b = +a[0];
                        a = +a[1];
                        e.push(b);
                        f.unshift({
                            displayTimestamp: null,
                            downloadTimestamp: Date.now(),
                            hasBeenFlushedAsDownloaded: !1,
                            presentationTimestamp: a,
                            traceId: b
                        })
                    })
                }
                b === h && (l = a);
                c.$2 === null && b === i && (c.$2 = parseInt(a, 10));
                (b === j || b === k) && parseInt(a, 10) && (d = b === j ? "origin" : "edge")
            });
            var m = b || {};
            m.hit = d;
            f.length && l !== "" && (this.$6 = f.concat(this.$6));
            if (e.length && l !== "") {
                var n = l;
                e.forEach(function(a) {
                    return c.$9(c.$4, "SEGMENT", a, n, "SUCCESS", m)
                })
            }
        }
        ;
        c.handleXHR = function(a, b) {
            this.handleHeadersString(a.getAllResponseHeaders(), b)
        }
        ;
        c.getLiveTraceContext = function() {
            return {
                streamId: this.$1,
                streamType: this.$2 || 0,
                sourceId: this.$3
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoMimeTypes", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return a + '; codecs="' + b + ", " + c + '"'
    }
    f = "mp4a.40.2";
    function b(a) {
        return "avc1.42E0" + a.toString(16).toUpperCase()
    }
    function c(a) {
        return "avc1.4D40" + a.toString(16).toUpperCase()
    }
    function d(a) {
        return "avc1.6400" + a.toString(16).toUpperCase()
    }
    var g = "video/mp4";
    b = a(g, b(30), f);
    var h = a(g, c(30), f);
    c = a(g, c(31), f);
    var i = a(g, d(50), f);
    a = a(g, d(51), f);
    g = {
        h264baseline: b,
        h264main30avc: h,
        h264main31avc: c,
        h264high50avc: i,
        h264high51avc: a
    };
    e.exports = g
}
), null);
__d("getVideoBrowserTabId", ["guid"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = b("guid")().slice(-8);
    function a() {
        return g
    }
}
), null);
__d("VideoPlayerLoggerPlayerStates", [], (function(a, b, c, d, e, f) {
    a = "started";
    b = "unpaused";
    c = {
        STARTED: a,
        UNPAUSED: b
    };
    e.exports = c
}
), null);
__d("VideoPlayerContextSensitiveConfigUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a, b) {
        return b.every(function(b) {
            return a[b.name] === b.value
        })
    };
    a = function(a, b) {
        return b.find(function(b) {
            return g(a, b.contexts)
        })
    }
    ;
    f.getFirstMatchingValueAndContextTargets = a
}
), null);
__d("VideoPlayerContextSensitiveConfigResolver", ["requireCond", "VideoPlayerContextSensitiveConfigUtils", "VideoPlayerContextSensitiveConfigPayload", "cr:1724253"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = {},
            this.$2 = {},
            a == null ? (this.$3 = b("VideoPlayerContextSensitiveConfigPayload").static_values,
            this.$4 = b("VideoPlayerContextSensitiveConfigPayload").context_sensitive_values) : (this.$3 = a.staticValues,
            this.$4 = a.contextSensitiveValues)
        }
        var c = a.prototype;
        c.setContexts = function(a) {
            this.$1 = a,
            this.$2 = this.$5(a)
        }
        ;
        c.getValue = function(a) {
            if (this.$2[a] != null)
                return this.$2[a];
            return this.$3[a] != null ? this.$3[a] : null
        }
        ;
        c.$5 = function(a) {
            var c = this;
            return Object.keys(this.$4).reduce(function(d, e) {
                var f = c.$4[e];
                if (f != null) {
                    f = b("VideoPlayerContextSensitiveConfigUtils").getFirstMatchingValueAndContextTargets(a, f);
                    f != null && (d[e] = f.value)
                }
                return d
            }, {})
        }
        ;
        a.getPayload = function() {
            return b("VideoPlayerContextSensitiveConfigPayload")
        }
        ;
        a.getSources = function() {
            return b("cr:1724253")
        }
        ;
        return a
    }();
    e.exports = a
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
__d("WebSessionExtensionTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:WebSessionExtensionLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:WebSessionExtensionLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:WebSessionExtensionLoggerConfig", this.$1, {
                signal: !0
            }, a)
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setClientTime = function(a) {
            this.$1.client_time = a;
            return this
        }
        ;
        c.setReason = function(a) {
            this.$1.reason = a;
            return this
        }
        ;
        c.setWebsessionID = function(a) {
            this.$1.websession_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        client_time: !0,
        reason: !0,
        websession_id: !0
    };
    e.exports = a
}
), null);
__d("WebSessionExtender", ["WebSession", "WebSessionExtensionTypedLogger", "clearInterval", "gkx", "setInterval"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    f.unsubscribe = c;
    var g = 2e4
      , h = new Set()
      , i = null;
    function a(a, c) {
        c === void 0 && (c = "extender");
        h.add(a);
        var d = b("gkx")("1252196");
        i == null && (b("WebSession").extend(Date.now() + g + 2e3),
        i = b("setInterval")(function() {
            b("WebSession").extend(Date.now() + g + 2e3),
            d && new (b("WebSessionExtensionTypedLogger"))().setClientTime(Date.now()).setWebsessionID(b("WebSession").getId()).setReason(c).log()
        }, g))
    }
    function c(a) {
        h["delete"](a);
        a = h.size;
        a === 0 && i != null && (b("clearInterval")(i),
        i = null)
    }
}
), null);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], (function(a, b, c, d, e, f) {
    var g = 3
      , h = 14
      , i = {
        ROUND: "ROUND",
        TRUNCATE: "TRUNCATE"
    }
      , j = {
        SHORT: "SHORT",
        LONG: "LONG"
    };
    function a(a, c, d, e) {
        d === void 0 && (d = j.SHORT);
        e === void 0 && (e = i.ROUND);
        d = b("IntlCompactDecimalNumberFormatConfig")[d == j.SHORT ? "short_patterns" : "long_patterns"];
        var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
        f > h && (f = h);
        var l = k(a, f, c, e, d)
          , m = l[0]
          , n = l[1];
        l = l[2];
        if (l) {
            f += 1;
            l = k(a, f, c, e, d);
            m = l[0];
            n = l[1];
            l[2]
        }
        e = b("FbtNumberType").getVariation(m) || b("IntlVariations").NUMBER_OTHER;
        l = f.toString();
        l = (d = d) != null ? (d = d[l]) != null ? d[e.toString()] : d : d;
        if (!l || f < g || l.positive_prefix_pattern === "" && l.positive_suffix_pattern === "") {
            e = c === void 0 ? 0 : c;
            return b("intlNumUtils").formatNumberWithThousandDelimiters(a, e)
        }
        return l && l.min_integer_digits === 0 && m === 1 ? l.positive_prefix_pattern + l.positive_suffix_pattern : (l && l.positive_prefix_pattern || "") + b("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (l && l.positive_suffix_pattern || "")
    }
    function k(a, c, d, e, f) {
        var g = c.toString();
        g = (f = f) != null ? (f = f[g]) != null ? f[b("IntlVariations").NUMBER_OTHER.toString()] : f : f;
        f = g && g.min_integer_digits || c + 1;
        var j = c - f + 1;
        j = Math.abs(a) / Math.pow(10, j);
        var k = d != null;
        d = k ? d : g && g.min_fraction_digits;
        d == null && (d = c > 2 ? 1 : 0);
        g = e == i.TRUNCATE ? b("intlNumUtils").truncateLongNumber(j.toString(), d) : j.toFixed(d);
        e = parseFloat(g) * (a < 0 ? -1 : 1);
        return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (j >= 0 ? 0 : 1) && c < h]
    }
    e.exports = a
}
), null);
