if (self.CavalryLogger) {
    CavalryLogger.start_js(["LS4io"]);
}

__d("SimpleNUXMessageTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setEventTimestamp = function(a) {
            this.$1.event_timestamp = a;
            return this
        }
        ;
        c.setName = function(a) {
            this.$1.name = a;
            return this
        }
        ;
        c.setNuxMessageType = function(a) {
            this.$1.nux_message_type = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event: !0,
        event_timestamp: !0,
        name: !0,
        nux_message_type: !0
    };
    e.exports = a
}
), null);
__d("CometLinkTrackingUtils.workplace", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.decorateHrefWithTrackingInfo = a;
    function a(a, b, c) {
        return a
    }
}
), null);
__d("XSimpleNUXMessagesController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/nux/{msg_id}/seen/", {
        msg_id: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("SimpleNUXMessage", ["AsyncRequest", "SimpleNUXMessageTypedLogger", "SimpleNUXMessageTypesToShow", "XSimpleNUXMessagesController"], (function(a, b, c, d, e, f) {
    var g = new Set();
    function h(a, c) {
        var d = b("SimpleNUXMessageTypesToShow").mapping[a];
        new (b("SimpleNUXMessageTypedLogger"))().setNuxMessageType(a).setName(d).setEvent(c).setEventTimestamp(Math.floor(Date.now() / 1e3)).log()
    }
    function a(a) {
        var c = !b("SimpleNUXMessageTypesToShow").mapping[a];
        !c && !g.has(a) && (h(a, "eligible"),
        g.add(a));
        return c
    }
    function c(a) {
        delete b("SimpleNUXMessageTypesToShow").mapping[a];
        a = b("XSimpleNUXMessagesController").getURIBuilder().setInt("msg_id", a).getURI();
        new (b("AsyncRequest"))().setURI(a).send()
    }
    e.exports = {
        hasUserSeenMessage: a,
        markMessageSeenByUser: c
    }
}
), null);
__d("ErrorMarker.react", ["FBLogger", "React", "WaitTimeContext", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return this.props.children
        }
        ;
        d.componentDidMount = function() {
            if (b("gkx")("678736")) {
                var a = this.props.name != null ? this.props.name : this.context.waitTimeAreaName;
                b("FBLogger")("error_marker").blameToPreviousFrame().mustfix("ErrorMarker for: %s", a || "unknown")
            }
        }
        ;
        return c
    }(a.Component);
    e.exports = c;
    c.contextType = b("WaitTimeContext")
}
), null);
__d("VideoPlayerReasonTransitionHelper", ["VideoPlayerReasonTransitionExperiment"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getReason = function() {
            return !b("VideoPlayerReasonTransitionExperiment").provideReason ? null : this.$1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoPlayerVolumeSettings", ["WebStorage"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        function a() {
            this.$1 = 1,
            this.$2 = 1
        }
        var c = a.prototype;
        c.getVolume = function() {
            var a = (g || (g = b("WebStorage"))).getLocalStorage();
            if (a) {
                a = a.getItem("videoPlayerControllerVolume");
                return a === null || isNaN(+a) ? 1 : +a
            }
            return this.$1
        }
        ;
        c.getSessionVolume = function() {
            return this.$1
        }
        ;
        c.setSessionVolume = function(a) {
            this.$1 = a
        }
        ;
        c.saveVolume = function(a) {
            var c = (g || (g = b("WebStorage"))).getLocalStorage();
            c && c.setItem("videoPlayerControllerVolume", a);
            this.$1 = a
        }
        ;
        c.getLastVolumeBeforeMute = function() {
            var a = (g || (g = b("WebStorage"))).getLocalStorage();
            if (a) {
                a = a.getItem("videoPlayerControllerLastVolumeBeforeMute");
                return a === null || isNaN(+a) ? 1 : +a
            }
            return this.$2
        }
        ;
        c.saveLastVolumeBeforeMute = function(a) {
            var c = (g || (g = b("WebStorage"))).getLocalStorage();
            c && c.setItem("videoPlayerControllerLastVolumeBeforeMute", a);
            this.$2 = a
        }
        ;
        return a
    }();
    c = new a();
    d = c;
    e.exports = d
}
), null);
__d("VideoFrameBuffer", ["HTMLMediaElementReadyStates"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c, d, e, f, g) {
            d === void 0 && (d = null),
            e === void 0 && (e = null),
            f === void 0 && (f = null),
            g === void 0 && (g = null),
            this.$2 = b,
            this.$1 = a,
            this.$3 = c || "contain",
            this.$6 = d,
            this.$7 = e,
            this.$8 = f,
            this.$9 = g
        }
        var c = a.prototype;
        c.updateFrameBuffer = function() {
            this.$4 && (this.$1.width = this.$4,
            this.$4 = null);
            this.$5 && (this.$1.height = this.$5,
            this.$5 = null);
            if (this.$2.readyState < b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)
                return;
            var a = this.$1.clientWidth || this.$1.width
              , c = this.$1.clientHeight || this.$1.height
              , d = a
              , e = c
              , f = this.$2.videoWidth / this.$2.videoHeight
              , g = d / e;
            this.$3 === "cover" && (g *= -1,
            f *= -1);
            g > f ? d = e * f : g < f && (e = d / f);
            g = this.$1.getContext("2d");
            if (!(g instanceof window.CanvasRenderingContext2D))
                return;
            try {
                if (this.$6 || this.$7) {
                    g.drawImage(this.$2, (f = this.$8) != null ? f : 0, (f = this.$9) != null ? f : 0, (f = this.$6) != null ? f : a, (f = this.$7) != null ? f : c, 0, 0, a, c)
                } else
                    g.drawImage(this.$2, (a - d) / 2, (c - e) / 2, d, e)
            } catch (a) {
                if (a.name !== "NS_ERROR_NOT_AVAILABLE")
                    throw a
            }
        }
        ;
        c.getDOMNode = function() {
            return this.$1
        }
        ;
        c.updateDimensions = function(a, b) {
            this.$4 = a,
            this.$5 = b
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoPlayerShakaExperimentsConfig", ["VideoPlayerShakaExperimentsPayload"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("VideoPlayerShakaExperimentsPayload").experiments;
    e.exports = a
}
), null);
__d("VideoPlayerShakaExposureLogger", ["QE2Logger", "VideoPlayerShakaExperimentsPayload"], (function(a, b, c, d, e, f) {
    f.logExposureForParamMaybe = a;
    var g = Object.keys(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig).reduce(function(a, c) {
        a[c] = {};
        a[c].exposureCondition = b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_condition;
        a[c].exposureParams = new Set(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_params);
        return a
    }, {});
    function a(a) {
        Object.keys(g).forEach(function(c) {
            g[c].exposureCondition === "any_param_accessed" && g[c].exposureParams.has(a) ? (b("QE2Logger").logExposureForUser(c),
            delete g[c]) : g[c].exposureCondition === "all_params_accessed" && (g[c].exposureParams["delete"](a),
            g[c].exposureParams.size === 0 && (b("QE2Logger").logExposureForUser(c),
            delete g[c]))
        })
    }
}
), null);
__d("VideoPlayerShakaGlobalConfig", ["VideoPlayerContextSensitiveConfigResolver"], (function(a, b, c, d, e, f) {
    var g = new (b("VideoPlayerContextSensitiveConfigResolver"))();
    a = function(a, b) {
        a = g.getValue(a);
        return a != null && typeof a === "boolean" ? a : b
    }
    ;
    f.getBool = a;
    c = function(a, b) {
        a = g.getValue(a);
        return a != null && typeof a === "number" ? a : b
    }
    ;
    f.getNumber = c;
    d = function(a, b) {
        a = g.getValue(a);
        return a != null && typeof a === "string" ? a : b
    }
    ;
    f.getString = d
}
), null);
__d("XEventsPermalinkController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/events/{?location_slug}/{?name_slug}/{event_id}/", {
        event_id: {
            type: "FBID",
            required: !0
        },
        location_slug: {
            type: "String"
        },
        name_slug: {
            type: "String"
        },
        event_time_id: {
            type: "FBID"
        },
        acontext: {
            type: "String"
        },
        active_tab: {
            type: "Enum",
            defaultValue: "about",
            enumType: 1
        },
        end_cursor: {
            type: "String"
        },
        filter: {
            type: "String"
        },
        multi_permalinks: {
            type: "String"
        },
        post_id: {
            type: "Int"
        },
        view: {
            type: "Enum",
            enumType: 1
        },
        ticket_order_id: {
            type: "FBID"
        },
        ref_page_id: {
            type: "FBID"
        },
        ti: {
            type: "String"
        },
        after_load_action: {
            type: "Enum",
            enumType: 0
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
