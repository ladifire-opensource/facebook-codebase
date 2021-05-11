if (self.CavalryLogger) {
    CavalryLogger.start_js(["XPQaB"]);
}

__d("DetectBrokenProxyCache", ["AsyncSignal", "Cookie", "URI"], (function(a, b, c, d, e, f) {
    var g;
    function a(a, c) {
        var d = b("Cookie").get(c);
        if (d != a && d != null && a != "0") {
            c = {
                c: "si_detect_broken_proxy_cache",
                m: c + " " + a + " " + d
            };
            a = new (g || (g = b("URI")))("/common/scribe_endpoint.php").getQualifiedURI().toString();
            new (b("AsyncSignal"))(a,c).send()
        }
    }
    e.exports = {
        run: a
    }
}
), null);
__d("XUpdateTimezoneControllerRouteBuilder", ["jsExtraRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsExtraRouteBuilder")("/ajax/autoset_timezone_ajax/", Object.freeze({
        is_forced: !1
    }), ["/ajax/autoset_timezone_ajax.php", "/ajax/timezone/update/", "/ajax/timezone/update.php"], void 0);
    c = a;
    e.exports = c
}
), null);
__d("FleetBeaconSubscriptionNetwork_LogMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "FleetBeaconLogResponsePayload",
            kind: "LinkedField",
            name: "fleet_beacon_log",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                selections: b
            },
            params: {
                id: "3531482613593478",
                metadata: {},
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FleetBeaconSubscriptionNetwork_PublishMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "FleetBeaconPublishResponsePayload",
            kind: "LinkedField",
            name: "fleet_beacon_publish",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                selections: b
            },
            params: {
                id: "3253299374687488",
                metadata: {},
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FleetBeaconSubscriptionNetwork_Subscription.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "TestFleetBeaconSubscribeResponsePayload",
            kind: "LinkedField",
            name: "test_fleet_beacon_subscribe",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_subscription_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "test_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                selections: b,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                selections: b
            },
            params: {
                id: "3194829573871785",
                metadata: {
                    subscriptionName: "test_fleet_beacon_subscribe"
                },
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometVirtualCursorStatus", ["requireCond", "cr:1345969", "UserAgent", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initLogging = d;
    var g = b("cr:1345969").log
      , h = null
      , i = null;
    function j() {
        i || (i = window.addEventListener("blur", function() {
            h = null,
            k()
        }))
    }
    function k() {
        i && (i.remove(),
        i = null)
    }
    function a(a) {
        h = a.keyCode,
        j()
    }
    function c(a) {
        h = null,
        k()
    }
    if (typeof window !== "undefined" && window.document && window.document.createElement) {
        e = document.documentElement;
        if (e)
            if (e.addEventListener)
                e.addEventListener("keydown", a, !0),
                e.addEventListener("keyup", c, !0);
            else if (e.attachEvent) {
                f = e.attachEvent;
                f("onkeydown", a);
                f("onkeyup", c)
            }
    }
    var l = {
        getKeyDownCode: function() {
            return h
        },
        isKeyDown: function() {
            return !!h
        }
    }
      , m = !1
      , n = !1
      , o = null
      , p = !1;
    function q(a) {
        var c = new Set()
          , d = l.isKeyDown()
          , e = a.WEBKIT_FORCE_AT_MOUSE_DOWN
          , f = a.clientX
          , g = a.clientY
          , h = a.isTrusted
          , i = a.mozInputSource
          , j = a.offsetX
          , k = a.offsetY
          , o = a.webkitForce;
        f === 0 && g === 0 && j >= 0 && k >= 0 && n && h && i == null && c.add("Chrome");
        m && n && !d && o != null && o < e && j === 0 && k === 0 && i == null && c.add("Safari-edge");
        f === 0 && g === 0 && j < 0 && k < 0 && n && i == null && c.add("Safari-old");
        if (!m && !n && !d && h && b("UserAgent").isBrowser("IE >= 10") && i == null) {
            o = a.target;
            e = o.clientHeight;
            d = o.clientWidth;
            f < 0 && g < 0 ? c.add("IE") : (j < 0 || j > d) && (k < 0 || k > e) && c.add("MSIE")
        }
        i === 0 && h && c.add("Firefox");
        return c
    }
    function r() {
        m = !0,
        b("setTimeout")(function() {
            m = !1
        }, 0)
    }
    function s() {
        n = !0,
        b("setTimeout")(function() {
            n = !1
        }, 0)
    }
    function t(a) {
        p && g({
            extra_data: {
                source_app: "comet"
            },
            indicated_browsers: o,
            is_virtual_cursor_action: a
        })
    }
    function u(a) {
        o === null && (o = Array.from(q(a)));
        p = o != null && o.length > 0;
        a = a.target != null && a.target.getAttribute != null && a.target.getAttribute("data-accessibilityid") === "virtual_cursor_trigger";
        t(a);
        b("setTimeout")(function() {
            p = !1,
            o = null
        }, 0)
    }
    function d() {
        document.addEventListener("click", u, !0),
        document.addEventListener("mousedown", r, !0),
        document.addEventListener("mouseup", s, !0)
    }
}
), null);
__d("getBrowserTimezone", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        try {
            var a;
            a = ((a = window.Intl) == null ? void 0 : a.DateTimeFormat) && Intl.DateTimeFormat();
            a = (a == null ? void 0 : a.resolvedOptions) && a.resolvedOptions();
            return a == null ? void 0 : a.timeZone
        } catch (a) {
            b("FBLogger")("TimezoneAutoset").catching(a).warn("Could not read IANA timezone from browser");
            return null
        }
    }
}
), null);
__d("CometTimezoneUpdater", ["UserTimezoneServerTimeData", "XUpdateTimezoneControllerRouteBuilder", "cometAsyncFetch", "getBrowserGMTOffsetAdjustedForSkew", "getBrowserTimezone", "killswitch"], (function(a, b, c, d, e, f) {
    "use strict";
    function a() {
        var a, c = (a = b("UserTimezoneServerTimeData")).force_update, d = a.server_gmt_offset, e = a.server_time;
        a = a.timezone;
        if (e == null || d == null)
            return;
        e = -b("getBrowserGMTOffsetAdjustedForSkew")(e);
        var f = b("killswitch")("TIMEZONE_SET_IANA_ZONE_NAME") ? null : b("getBrowserTimezone")();
        (c === !0 || e !== d || f != null && f !== a) && b("cometAsyncFetch")(b("XUpdateTimezoneControllerRouteBuilder").buildExtraURL("/ajax/timezone/update.php", {}), {
            data: {
                gmt_off: e,
                is_forced: c,
                tz: f
            },
            method: "POST"
        })
    }
    c = {
        updateTimezoneIfNecessary: a
    };
    d = c;
    e.exports = d
}
), null);
__d("CometAlertDialogImpl.react", ["fbt", "CometCardedDialog.react", "CometRow.react", "CometRowItem.react", "React", "TetraButton.react", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.body
          , d = a.close
          , e = a.onClose;
        a = a.title;
        return h.jsxs(b("CometCardedDialog.react"), {
            onClose: e,
            withCloseButton: !0,
            children: [h.jsx("div", {
                className: "bjjx79mm dati1w0a clqubjjj jbae33se",
                children: h.jsx(b("TetraText.react"), {
                    numberOfLines: 1,
                    type: "headlineEmphasized2",
                    children: a
                })
            }), h.jsx("div", {
                className: "l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",
                children: h.jsx(b("TetraText.react"), {
                    type: "body3",
                    children: c
                })
            }), h.jsx("div", {
                className: "a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys",
                children: h.jsx(b("CometRow.react"), {
                    align: "end",
                    children: h.jsx(b("CometRowItem.react"), {
                        children: h.jsx(b("TetraButton.react"), {
                            label: (a = d) != null ? a : g._("\u0110\u00f3ng"),
                            onPress: e,
                            testid: void 0,
                            type: "primary"
                        })
                    })
                })
            })]
        })
    }
}
), null);
__d("CometIconWirelessSlashFilled.react", ["CometSVGIcon.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx(b("CometSVGIcon.react"), babelHelpers["extends"]({
            viewBox: "0 0 24 24"
        }, a, {
            children: g.jsx("path", {
                d: "M23.7805.2195c.2925.293.2925.768 0 1.061l-22.5 22.5C1.134 23.927.942 24 .75 24c-.192 0-.384-.073-.5305-.2195-.2925-.293-.2925-.768 0-1.061l12.1967947-12.1971509c-2.3773758-.1150468-4.79162015.7286756-6.6038447 2.5401009-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.024 0-1.414 2.65728981-2.65728981 6.3696459-3.62280965 9.8005664-2.90852144l2.430738-2.43186193C11.7816792 4.58111626 6.15198938 5.65271062 2.27735 9.52735c-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.0235 0-1.414 4.6714534-4.67191574 11.571522-5.78608437 17.3096457-3.34843552L22.7195.2195c.293-.2925.768-.2925 1.061 0zM12 18.5c.6905 0 1.25.5595 1.25 1.25S12.6905 21 12 21s-1.25-.5595-1.25-1.25.5595-1.25 1.25-1.25zm1.4175-4.81495c.9705.2455 1.8905.741 2.6485 1.499.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.512-.0975-.707-.293-.7835333-.7835333-1.8301422-1.1445778-2.8581093-1.0880116L11.574 15.52855l1.8435-1.8435zm3.8154-3.8154c.848.4725 1.649 1.059 2.3685 1.779.391.39.391 1.023 0 1.414-.195.195-.451.293-.707.293-.2555 0-.5115-.098-.707-.293-.7285-.728-1.5575-1.291-2.439-1.7085zm2.1908-2.1908l1.4425-1.4425c.8.545 1.5615 1.168 2.2705 1.877.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.5115-.0975-.707-.293-.5933333-.59333333-1.2283333-1.11861111-1.895162-1.57959491L19.4237 7.67885l1.4425-1.4425z"
            })
        }))
    }
}
), null);
__d("cometGHLContentDisplayCheck", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = !0
      , h = !1;
    function a(a) {
        var c = document.body;
        if (c == null || !c.contains(a))
            return g;
        if (b("gkx")("1529169") && a.offsetHeight === 0)
            return h;
        c = Array.from(a.getElementsByTagName("img"));
        if (c.length === 0)
            return g;
        if (c.find(i) != null)
            return g;
        c = Array.from(a.getElementsByTagName("svg"));
        return b("gkx")("1621844") && c.find(j) != null ? g : h
    }
    var i = function(a) {
        return a.offsetHeight + a.offsetWidth > 0
    }
      , j = function(a) {
        a = a.getBoundingClientRect();
        return a.height * a.width > 0
    }
}
), null);
__d("CometGHLDisplayMonitor", ["clearTimeout", "cometGHLContentDisplayCheck", "recoverableViolation", "setTimeoutCometLoggingPri", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = new Map(), i = 1e3, j = null;
    a = function(a, c) {
        h.has(a) || h.set(a, new Set());
        var d = h.get(a);
        if (d == null) {
            b("recoverableViolation")("Expected Set to be declared for container", "GHL");
            return {
                dispose: function() {}
            }
        }
        d.add(c);
        j === null && k();
        return {
            dispose: function() {
                d["delete"](c),
                d.size === 0 && (h["delete"](a),
                h.size === 0 && (b("clearTimeout")(j),
                j = null))
            }
        }
    }
    ;
    f.m = a;
    var k = function a() {
        h.forEach(function(a, c) {
            c = c.current;
            if (c == null || l(c) || !b("cometGHLContentDisplayCheck")(c))
                return;
            a.forEach(function(a, c) {
                a = c.onCheck;
                var d = c.startTime;
                c = c.targetRef;
                c = c.current;
                if (c == null || l(c))
                    return;
                c = b("cometGHLContentDisplayCheck")(c);
                if (!c) {
                    c = Date.now() - d;
                    a(c)
                }
            })
        }),
        j = b("setTimeoutCometLoggingPri")(a, i)
    }
      , l = function(a) {
        return a.closest == null || a.closest(n)
    }
      , m = {
        rule: {
            display: "mkhogb32"
        }
    }
      , n = function() {
        return "." + (g || (g = b("stylex")))(m.rule).split(" ").pop()
    }()
}
), null);
__d("CometGHLTestUBT", ["Banzai", "JSScheduler", "ghlTestUBT"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 3;
    function a() {
        b("JSScheduler").scheduleLoggingPriCallback(function() {
            b("ghlTestUBT")(function(a) {
                var c;
                return b("Banzai").post("search_check", (c = {},
                c[g] = a,
                c))
            })
        })
    }
}
), null);
__d("CometErrorLogging", ["ClientConsistency", "ErrorPoster", "ErrorPubSub", "JSErrorLoggingConfig", "SiteData", "WebSession"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    var g, h = (c = b("JSErrorLoggingConfig")).appId, i = c.extra, j = c.report_source, k = c.report_source_ref, l = c.sampleWeight, m;
    function n(a) {
        b("ErrorPoster").postError(a, {
            additional_client_revisions: b("ClientConsistency").getAdditionalRevisions(),
            appId: h,
            cavalry_lid: m,
            cerror: !0,
            client_revision: (a = b("SiteData")).client_revision,
            extra: i,
            loggingFramework: "comet",
            push_phase: a.push_phase,
            report_source: j,
            report_source_ref: k,
            sample_weight: l,
            script_path: "/comet",
            server_revision: a.server_revision,
            spin: a.spin,
            web_session_id: b("WebSession").getId()
        })
    }
    function a(a) {
        m = a,
        l != null && (g || (g = b("ErrorPubSub"))).addListener(n)
    }
}
), null);
__d("CometBootloaderEventsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:CometBootloaderEventsLoggerConfig")
}
), null);
__d("CometBootloaderLoggerUtil", ["BootloaderEvents", "BootloaderEventsPerf", "CometBootloaderEventsTypedLoggerLite", "CometTimeSpentNavigation", "SiteData", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initLogging = a;
    var g = !1;
    function a(a) {
        if (g || !a.sample_rate)
            return;
        g = !0;
        b("BootloaderEvents").onBootload(function(c) {
            c = b("BootloaderEventsPerf").computeData(c);
            var d = b("BootloaderEventsPerf").flattenData(c);
            c = Math.round(c.start_time - b("performanceNavigationStart")());
            b("CometBootloaderEventsTypedLoggerLite").log(babelHelpers["extends"]({}, d, {
                ms_since_navstart: c,
                parent_lid: a.parent_lid,
                pkg_cohort: b("SiteData").pkg_cohort,
                request_path: (d = b("CometTimeSpentNavigation").getPathInfo()) == null ? void 0 : d.name,
                svn_rev: b("SiteData").client_revision
            }), {
                weight: a.sample_rate
            })
        })
    }
}
), null);
__d("CometPixelRatioUpdater", ["Cookie", "Run"], (function(a, b, c, d, e, f) {
    "use strict";
    f.startDetecting = a;
    var g = "dpr";
    function h(a) {
        b("Cookie").set(g, String(a))
    }
    function i() {
        b("Cookie").clear(g)
    }
    function j() {
        window.devicePixelRatio !== 1 ? h(window.devicePixelRatio) : i()
    }
    function a() {
        b("Run").onBeforeUnload(j, !1),
        "onpagehide"in window && window.addEventListener("pageHide", j)
    }
}
), null);

__d("SimplePageLoadLogger", ["BanzaiODS", "performance"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logPageNavigationType = a;
    var g;
    function a() {
        b("BanzaiODS").bumpEntityKey(1678, "www_client_navigations", h())
    }
    function h() {
        if ((g || (g = b("performance"))).navigation == null || (g || (g = b("performance"))).navigation.type == null)
            return "UNSUPPORTED";
        switch ((g || (g = b("performance"))).navigation.type) {
        case (g || (g = b("performance"))).navigation.TYPE_NAVIGATE:
            return "NAVIGATE";
        case (g || (g = b("performance"))).navigation.TYPE_RELOAD:
            return "RELOAD";
        case (g || (g = b("performance"))).navigation.TYPE_BACK_FORWARD:
            return "BACK_FORWARD";
        case (g || (g = b("performance"))).navigation.TYPE_RESERVED:
            return "RESERVED";
        default:
            return "UNKNOWN"
        }
    }
}
), null);
__d("CometRootDeferred", ["CometBootloaderLoggerUtil", "requireCond", "CometErrorRoot.react", "CometFullPageCompatRoot.react", "CometVirtualCursorStatus", "CometVCTracker", "DeferredCookie", "DetectBrokenProxyCache", "ErrorGuard", "JSScheduler", "cr:1201738", "cr:1516661", "CometTimezoneUpdater", "CometNetworkStatusToast", "SimplePageLoadLogger", "SketchComet", "WebStorageMonster", "cr:1332233", "cr:1516609", "cr:1363153", "cr:1632385"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initDeferred = a;
    var g;
    b("CometErrorRoot.react");
    b("CometFullPageCompatRoot.react");
    var h = b("CometVCTracker").CometVisualCompletionTraceObserver;
    function a(a) {
        var c = a.blLoggingCavalryFields
          , d = a.deferredCookies
          , e = a.sketchInfo
          , f = a.userID;
        e != null && b("JSScheduler").scheduleSpeculativeCallback(function() {
            b("SketchComet").solveAllPrimitivesAndCallAsyncController(e.seed1, e.seed2, e.rounds)
        });
        b("cr:1363153") != null && (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
            return b("cr:1363153").init()
        }, null, []);
        b("cr:1632385") != null && (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
            return b("cr:1632385").init()
        }, null, []);
        (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
            return b("CometBootloaderLoggerUtil").initLogging(c)
        }, null, []);
        g.applyWithGuard(function() {
            return b("CometVirtualCursorStatus").initLogging()
        }, null, []);
        g.applyWithGuard(function() {
            return b("CometNetworkStatusToast").subscribe()
        }, null, []);
        g.applyWithGuard(function() {
            return b("SimplePageLoadLogger").logPageNavigationType()
        }, null, []);
        b("JSScheduler").scheduleSpeculativeCallback(function() {
            f === 0 ? b("WebStorageMonster").schedule(!0) : b("WebStorageMonster").schedule()
        });
        b("JSScheduler").scheduleSpeculativeCallback(function() {
            b("DetectBrokenProxyCache").run(f, "c_user")
        });
        b("cr:1201738") && h.subscribe(function(a) {
            a.interactionType === "INITIAL_LOAD" && b("cr:1201738").init()
        });
        Object.keys(d).forEach(function(a) {
            var c = d[a]
              , e = c.expiration_for_js
              , f = c.first_party_only
              , g = c.path
              , h = c.secure;
            c = c.value;
            b("DeferredCookie").addToQueue(a, c, e, g, f, !1, h)
        });
        b("cr:1332233") && (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
            return b("cr:1332233")()
        }, null, []);
        b("cr:1516609") != null && (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
            return b("cr:1516609").initSignalCollection()
        }, null, []);
        b("cr:1516661") && (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
            return b("cr:1516661").init()
        }, null, []);
        b("CometTimezoneUpdater").updateTimezoneIfNecessary()
    }
}
), null);
__d("WebBrowserDimensionsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:WebBrowserDimensionsLoggerConfig")
}
), null);
__d("CometBrowserDimensionsLogger", ["SiteData", "WebBrowserDimensionsTypedLoggerLite", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    var g = null;
    function h() {
        g === null && (g = b("getViewportDimensions")());
        return g
    }
    function a(a) {
        var c, d = h();
        c = {
            client_hint_width: a == null ? void 0 : a.clientHintWidth,
            pixel_ratio: (c = window.devicePixelRatio) != null ? c : 1,
            screen_x: window.screen.width,
            screen_y: window.screen.height,
            server_pixel_ratio: b("SiteData").pr,
            server_viewport_x: a == null ? void 0 : a.viewportWidth,
            server_viewport_y: a == null ? void 0 : a.viewportHeight,
            viewport_x: d.width,
            viewport_y: d.height
        };
        window.navigator && window.navigator.hardwareConcurrency && (c.cpu_cores_count = window.navigator.hardwareConcurrency);
        if (window.innerWidth > 0 && window.outerWidth > 0) {
            a = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
            c.zoom_ratio = a
        }
        if (window.getComputedStyle && document.documentElement != null) {
            d = window.getComputedStyle(document.documentElement);
            d != null && (c.document_font_size = d.fontSize)
        }
        b("WebBrowserDimensionsTypedLoggerLite").log(c)
    }
}
), null);
__d("MWChatMultitabCookieWriter.bs", ["DeferredCookie", "MWChatThreadId.bs", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = a.chatHeads.map(function(a) {
            return {
                i: b("MWChatThreadId.bs").serializeFuture(a)
            }
        });
        a = a.openTabsState;
        var d;
        if (a.length !== 1)
            d = void 0;
        else {
            a = a[0];
            a = a.threadID;
            d = a ? b("MWChatThreadId.bs").serializeFuture(a[0]) : void 0
        }
        a = JSON.stringify({
            t3: c,
            utc3: Date.now(),
            lm3: d,
            v: 1
        });
        if (a !== void 0) {
            b("DeferredCookie").addToQueue("presence", "C" + a, 0, "", !1, !1, !0);
            return 0
        } else {
            b("recoverableViolation")("Failed to serialize cookie", "messenger_comet");
            return 0
        }
    }
    c = 1;
    f.version = c;
    f.write = a
}
), null);
__d("CometRelayEF", ["Bootloader", "ClientConsistencyEventEmitter", "CometSSREntrypoint", "cometAsyncFetch", "gkx", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetchPredictions = h;
    f.fetchPredictedResources = a;
    var g = new Map();
    function h(a, c) {
        if (!b("gkx")("1334580"))
            return;
        a = b("CometSSREntrypoint").processRootEntryPoint(a, c);
        var d = [];
        a.forEach(function(a) {
            g.has(a.name) || d.push(a.name)
        });
        if (d.length === 0)
            return;
        var e = b("cometAsyncFetch")("/ajax/relay-ef/", {
            data: {
                queries: d
            },
            method: "POST"
        });
        d.forEach(function(a) {
            g.set(a, e)
        })
    }
    function a(a, c) {
        if (!b("gkx")("1334580"))
            return;
        h(a, c);
        a = b("CometSSREntrypoint").processRootEntryPoint(a, c);
        a.forEach(function(a) {
            var c = a.name
              , d = g.get(c);
            d && d !== !0 && b("promiseDone")(d, function(a) {
                if (a != null && typeof a === "object") {
                    var d;
                    a = "consistency"in a ? a : {
                        consistency: null,
                        predictions: a
                    };
                    b("Bootloader").loadPredictedResourceMap(a.predictions[c], null, (d = a.consistency) == null ? void 0 : d.rev);
                    a.consistency != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency)
                }
            });
            g.set(a.name, !0)
        })
    }
}
), null);
__d("XDeviceClassRealtimeController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/web_perf/get_perf_level/", {})
}
), null);
__d("getEarlyResources", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return Array.from(document.querySelectorAll("head script[data-bootloader-hash]"))
    }
}
), null);
__d("WebDevicePerfInfoLogging", ["regeneratorRuntime", "Promise", "AsyncTypedRequest", "Banzai", "JSScheduler", "VisibilityListener", "WebDevicePerfInfoData", "XDeviceClassRealtimeController", "getEarlyResources"], (function(a, b, c, d, e, f) {
    "use strict";
    f.doLog = a;
    f.doLogPromise = c;
    function g(a) {
        var b = document.createElement("canvas");
        b = b.getContext("webgl") || b.getContext("experimental-webgl");
        if (!b)
            return;
        var c = b.getExtension("WEBGL_debug_renderer_info");
        if (!c)
            return;
        var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
        b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
        a.gpu_vendor = b;
        a.gpu_renderer = d
    }
    function h(a) {
        var c = window.performance.getEntriesByType("resource")
          , d = b("getEarlyResources")()
          , e = {};
        d.forEach(function(a) {
            a = a.getAttribute("src");
            a !== null && a !== void 0 && (e[a] = !0)
        });
        var f = 0
          , g = 0
          , h = 0
          , i = 0;
        c.forEach(function(a) {
            if (e[a.name] === !0) {
                var c = b("VisibilityListener").getHiddenTime(a.startTime, a.responseEnd);
                c = c != null && c > 0;
                if (!c) {
                    c = a.transferSize === 0;
                    var d = a.transferSize < a.encodedBodySize
                      , j = a.responseEnd - a.responseStart;
                    c ? (f += a.encodedBodySize / j,
                    g++) : d || (h += a.transferSize / j,
                    i++)
                }
            }
        });
        g > 0 && (a.cached_speed_sample = f / g,
        a.cached_file_count = g);
        i > 0 && (a.remote_speed_sample = h / i,
        a.remote_file_count = i)
    }
    function i() {
        var a = {};
        navigator && navigator.hardwareConcurrency !== void 0 && (a.cpu_cores = navigator.hardwareConcurrency);
        navigator && navigator.deviceMemory !== void 0 && (a.ram = navigator.deviceMemory);
        b("WebDevicePerfInfoData").needsFullUpdate && g(a);
        return a
    }
    function j() {
        var a = i();
        b("WebDevicePerfInfoData").shouldLogResourcePerf && h(a);
        b("Banzai").post("web_device_perf_info_log", a)
    }
    function k() {
        var a, c;
        return b("regeneratorRuntime").async(function(d) {
            while (1)
                switch (d.prev = d.next) {
                case 0:
                    a = i();
                    d.next = 3;
                    return b("regeneratorRuntime").awrap(new (b("AsyncTypedRequest"))(b("XDeviceClassRealtimeController").getURIBuilder().getURI()).setData(a).promisePayload());
                case 3:
                    c = d.sent;
                    return d.abrupt("return", c.devicePerfClassLevel);
                case 5:
                case "end":
                    return d.stop()
                }
        }, null, this)
    }
    function a() {
        (b("WebDevicePerfInfoData").needsFullUpdate || b("WebDevicePerfInfoData").needsPartialUpdate || b("WebDevicePerfInfoData").shouldLogResourcePerf) && b("JSScheduler").scheduleSpeculativeCallback(j)
    }
    function c() {
        return new (b("Promise"))(function(a, c) {
            b("WebDevicePerfInfoData").needsFullUpdate || b("WebDevicePerfInfoData").needsPartialUpdate ? b("JSScheduler").scheduleSpeculativeCallback(function() {
                k().then(a)["catch"](c)
            }) : c()
        }
        )
    }
}
), null);
__d("FantailLogger", ["FantailConfig"], (function(a, b, c, d, e, f) {
    var g = b("FantailConfig").FantailLogQueue;
    a = {
        debug: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).debug.apply(c, [b].concat(e))
        },
        info: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).info.apply(c, [b].concat(e))
        },
        warn: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).warn.apply(c, [b].concat(e))
        },
        error: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).error.apply(c, [b].concat(e))
        }
    };
    e.exports = a
}
), null);
__d("MqttUnifiedClientConnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744057");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_connect", a);
    e.exports = c
}
), null);
__d("MqttUnifiedClientDisconnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744058");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_disconnect", a);
    e.exports = c
}
), null);
__d("MqttUnifiedClientIncomingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744059");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_incoming_publish", a);
    e.exports = c
}
), null);
__d("MqttUnifiedClientOutgoingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744060");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_outgoing_publish", a);
    e.exports = c
}
), null);
__d("MqttWsClientTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig")
}
), null);
__d("FleetBeaconStates", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getName = function() {
            return "initial"
        }
        ;
        b.getFleetBeaconRunner = function() {
            return this.$1
        }
        ;
        b.prepareFleetBeaconSucceed = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.prepareFleetBeaconFailed = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.subscribeIssued = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.subscribeSuccessSignalReceived = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.publishIssued = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.publishFailed = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.payloadReceived = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.waitForPublishTimeout = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.subscribeTimeout = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.payloadTimeout = function() {
            throw new Error("Invalid transition")
        }
        ;
        b.cleanUpFinish = function() {
            throw new Error("Invalid transition")
        }
        ;
        return a
    }();
    f.FleetBeaconState = a;
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getName = function() {
            return "preparing"
        }
        ;
        c.prepareFleetBeaconSucceed = function() {
            var b = this;
            return {
                newState: new g(a.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    a.prototype.getFleetBeaconRunner.call(b).runFleetBeaconTest()
                }
            }
        }
        ;
        c.prepareFleetBeaconFailed = function() {
            var b = this;
            return {
                newState: new m(a.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    b.getFleetBeaconRunner().cleanUpFleetBeacon()
                }
            }
        }
        ;
        return b
    }(a);
    f.FleetBeaconPreparingState = b;
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "before_subscribe"
        }
        ;
        c.subscribeIssued = function() {
            var a = this;
            return {
                newState: new h(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    b.prototype.getFleetBeaconRunner.call(a).startSubscribeTimer()
                }
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconBeforeSubscribeState = g;
    var h = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "subscribe_issued"
        }
        ;
        c.subscribeSuccessSignalReceived = function() {
            var a = this;
            return {
                newState: new i(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                }
            }
        }
        ;
        c.subscribeTimeout = function() {
            var a = this;
            return {
                newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    a.getFleetBeaconRunner().cleanUpFleetBeacon()
                }
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconSubscribedIssuedState = h;
    var i = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "waiting_to_publish"
        }
        ;
        c.waitForPublishTimeout = function() {
            var a = this;
            return {
                newState: new j(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    b.prototype.getFleetBeaconRunner.call(a).publish(),
                    b.prototype.getFleetBeaconRunner.call(a).startPayloadTimer()
                }
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconWaitingToPublishState = i;
    var j = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "publish_issued"
        }
        ;
        c.publishFailed = function() {
            var a = this;
            return {
                newState: new m(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    a.getFleetBeaconRunner().cleanUpFleetBeacon()
                }
            }
        }
        ;
        c.payloadReceived = function() {
            var a = this, c, d;
            (function() {}
            );
            b.prototype.getFleetBeaconRunner.call(this).isLastPayload() ? (c = new l(b.prototype.getFleetBeaconRunner.call(this)),
            d = function() {
                a.getFleetBeaconRunner().cleanUpFleetBeacon()
            }
            ) : (c = new i(b.prototype.getFleetBeaconRunner.call(this)),
            d = function() {
                b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
            }
            );
            return {
                newState: c,
                action: d
            }
        }
        ;
        c.payloadTimeout = function() {
            var a = this;
            return {
                newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    a.getFleetBeaconRunner().cleanUpFleetBeacon()
                }
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconPublishIssuedState = j;
    var k = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "failed"
        }
        ;
        c.cleanUpFinish = function() {
            return {
                newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {}
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconFailedState = k;
    var l = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "succeed"
        }
        ;
        c.cleanUpFinish = function() {
            return {
                newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {}
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconSucceedState = l;
    var m = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "aborted"
        }
        ;
        c.cleanUpFinish = function() {
            return {
                newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                action: function() {}
            }
        }
        ;
        return a
    }(a);
    f.FleetBeaconAbortedState = m;
    var n = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.getName = function() {
            return "finish"
        }
        ;
        return a
    }(a);
    f.FleetBeaconFinishState = n
}
), null);
__d("FleetBeaconRunner", ["FleetBeaconStates", "clearTimeout", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a;
            this.$2 = new (b("FleetBeaconStates").FleetBeaconState)(this);
            var c = new (b("FleetBeaconStates").FleetBeaconPreparingState)(this);
            this.$1.cleanPreviousFleetBeaconResult();
            this.$6(function() {
                return {
                    newState: c,
                    action: function() {}
                }
            });
            this.$3 = 0;
            this.$1.setFleetBeaconRunner(this)
        }
        var c = a.prototype;
        c.getPublishTimes = function() {
            return this.$3
        }
        ;
        c.prepareFleetBeaconTest = function() {
            this.$1.prepareFleetBeaconTest()
        }
        ;
        c.runFleetBeaconTest = function() {
            var a = this;
            this.$6(function() {
                return a.$2.subscribeIssued()
            });
            this.$7()
        }
        ;
        c.$7 = function() {
            this.$1.subscribe()
        }
        ;
        c.publish = function() {
            this.$1.publish()
        }
        ;
        c.isLastPayload = function() {
            return this.$3 >= this.$1.publishWaitIntervalsMS().length
        }
        ;
        c.waitForNextPublish = function() {
            var a = this
              , c = this.$1.publishWaitIntervalsMS()[this.$3];
            this.$3 += 1;
            c === 0 ? this.$8() : b("setTimeout")(function() {
                a.$8()
            }, c)
        }
        ;
        c.startSubscribeTimer = function() {
            var a = this
              , c = this.$1.subscribeTimeoutIntervalMS();
            this.$4 = b("setTimeout")(function() {
                a.$9()
            }, c)
        }
        ;
        c.startPayloadTimer = function() {
            var a = this
              , c = this.$1.payloadTimeoutIntervalMS();
            this.$5 = b("setTimeout")(function() {
                a.$10()
            }, c)
        }
        ;
        c.cleanUpFleetBeacon = function() {
            this.$1.cleanUpFleetBeacon()
        }
        ;
        c.onCleanUpFinish = function() {
            var a = this;
            this.$6(function() {
                return a.$2.cleanUpFinish()
            })
        }
        ;
        c.$8 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.waitForPublishTimeout()
            })
        }
        ;
        c.$9 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.subscribeTimeout()
            })
        }
        ;
        c.$10 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.payloadTimeout()
            })
        }
        ;
        c.onPrepareFleetBeaconSuccess = function() {
            var a = this;
            this.$6(function() {
                return a.$2.prepareFleetBeaconSucceed()
            })
        }
        ;
        c.onPrepareFleetBeaconFailed = function() {
            var a = this;
            this.$6(function() {
                return a.$2.prepareFleetBeaconFailed()
            })
        }
        ;
        c.onSubscribe = function() {
            var a = this;
            b("clearTimeout")(this.$4);
            this.$6(function() {
                return a.$2.subscribeSuccessSignalReceived()
            })
        }
        ;
        c.onPayloadReceived = function() {
            var a = this;
            b("clearTimeout")(this.$5);
            this.$6(function() {
                return a.$2.payloadReceived()
            })
        }
        ;
        c.onPublishFailed = function() {
            var a = this;
            b("clearTimeout")(this.$5);
            this.$6(function() {
                return a.$2.publishFailed()
            })
        }
        ;
        c.$6 = function(a) {
            a = a();
            var b = this.$2;
            this.$2 = a.newState;
            var c = this.$2;
            this.$11(b, c);
            a.action()
        }
        ;
        c.$11 = function(a, b) {
            this.$1.onFleetBeaconStateTransition(a, b)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FleetBeaconStateTransitionListener", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var b = a.prototype;
        b.onFleetBeaconStateTransition = function(a, b, c, d) {
            throw new Error("Require implementation")
        }
        ;
        b.cleanState = function() {
            throw new Error("Require implementation")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FleetBeaconTestBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = null,
            this.$2 = []
        }
        var b = a.prototype;
        b.addStateTransitionListener = function(a) {
            this.$2.push(a)
        }
        ;
        b.cleanPreviousFleetBeaconResult = function() {
            this.$2.forEach(function(a) {
                a.cleanState()
            })
        }
        ;
        b.getNumberOfPublishers = function() {
            var a;
            return (a = (a = this.$1) == null ? void 0 : a.getPublishTimes()) != null ? a : -1
        }
        ;
        b.getTestID = function() {
            throw new Error("Require implementation")
        }
        ;
        b.setFleetBeaconRunner = function(a) {
            this.$1 = a
        }
        ;
        b.prepareFleetBeaconTest = function() {
            throw new Error("Require implementation")
        }
        ;
        b.onPrepareFleetBeaconSuccess = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconSuccess()
        }
        ;
        b.onPrepareFleetBeaconFailed = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconFailed()
        }
        ;
        b.subscribe = function() {
            throw new Error("Require implementation")
        }
        ;
        b.onSubscribe = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onSubscribe()
        }
        ;
        b.publish = function() {
            throw new Error("Require implementation")
        }
        ;
        b.cleanUpFleetBeacon = function() {
            throw new Error("Require implementation")
        }
        ;
        b.onCleanUpFinish = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onCleanUpFinish()
        }
        ;
        b.onPublishFailed = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPublishFailed()
        }
        ;
        b.onPayloadReceived = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPayloadReceived()
        }
        ;
        b.subscribeTimeoutIntervalMS = function() {
            return 1e4
        }
        ;
        b.payloadTimeoutIntervalMS = function() {
            return 2e4
        }
        ;
        b.publishWaitIntervalsMS = function() {
            return [1e4, 5e3]
        }
        ;
        b.shouldStartTime = function() {
            return !0
        }
        ;
        b.onFleetBeaconStateTransition = function(a, b) {
            var c = this
              , d = Date.now();
            this.$2.forEach(function(e) {
                e.onFleetBeaconStateTransition(a, b, d, c)
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FleetBeaconTestUIAnnouncer", ["FleetBeaconStateTransitionListener"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b;
            b = a.call(this) || this;
            b.$FleetBeaconTestUIAnnouncer1 = [];
            b.$FleetBeaconTestUIAnnouncer3 = !1;
            b.$FleetBeaconTestUIAnnouncer4 = !1;
            b.$FleetBeaconTestUIAnnouncer5 = !1;
            b.$FleetBeaconTestUIAnnouncer6 = !1;
            b.$FleetBeaconTestUIAnnouncer7 = -1;
            b.$FleetBeaconTestUIAnnouncer8 = -1;
            b.$FleetBeaconTestUIAnnouncer9 = 0;
            b.$FleetBeaconTestUIAnnouncer10 = 0;
            b.$FleetBeaconTestUIAnnouncer11 = [];
            b.$FleetBeaconTestUIAnnouncer12 = -1;
            b.$FleetBeaconTestUIAnnouncer13 = -1;
            b.$FleetBeaconTestUIAnnouncer14 = -1;
            return b
        }
        var c = b.prototype;
        c.cleanState = function() {
            this.$FleetBeaconTestUIAnnouncer3 = !1,
            this.$FleetBeaconTestUIAnnouncer4 = !1,
            this.$FleetBeaconTestUIAnnouncer5 = !1,
            this.$FleetBeaconTestUIAnnouncer6 = !1,
            this.$FleetBeaconTestUIAnnouncer7 = -1,
            this.$FleetBeaconTestUIAnnouncer8 = -1,
            this.$FleetBeaconTestUIAnnouncer9 = 0,
            this.$FleetBeaconTestUIAnnouncer10 = 0,
            this.$FleetBeaconTestUIAnnouncer11 = [],
            this.$FleetBeaconTestUIAnnouncer12 = -1,
            this.$FleetBeaconTestUIAnnouncer13 = -1,
            this.$FleetBeaconTestUIAnnouncer14 = -1
        }
        ;
        c.addSubscriber = function(a) {
            this.$FleetBeaconTestUIAnnouncer1.push(a)
        }
        ;
        c.onFleetBeaconStateTransition = function(a, b, c, d) {
            var e = d.getTestID()
              , f = {
                oldState: a,
                newState: b,
                testID: e,
                timestamp: c,
                extra: {}
            };
            this.$FleetBeaconTestUIAnnouncer2 == null && (this.$FleetBeaconTestUIAnnouncer2 = d);
            e = "NONE";
            switch (b.getName()) {
            case "initial":
                break;
            case "preparing":
                this.$FleetBeaconTestUIAnnouncer12 = Date.now();
                this.$FleetBeaconTestUIAnnouncer3 = !0;
                f.extra = babelHelpers["extends"]({}, f.extra, {
                    createIssued: !0
                });
                break;
            case "before_subscribe":
                this.$FleetBeaconTestUIAnnouncer13 = Date.now();
                this.$FleetBeaconTestUIAnnouncer4 = !0;
                f.extra = babelHelpers["extends"]({}, f.extra, {
                    createSuccess: !0
                });
                break;
            case "subscribe_issued":
                this.$FleetBeaconTestUIAnnouncer5 = !0;
                f.extra = babelHelpers["extends"]({}, f.extra, {
                    subscribeIssued: !0,
                    subscribeTimestamp: this.$FleetBeaconTestUIAnnouncer13,
                    subscribeTimeoutIntervalMS: (d = (c = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : c.subscribeTimeoutIntervalMS()) != null ? d : -1
                });
                break;
            case "waiting_to_publish":
                a.getName() === "subscribe_issued" && (this.$FleetBeaconTestUIAnnouncer6 = !0,
                this.$FleetBeaconTestUIAnnouncer7 = Date.now() - this.$FleetBeaconTestUIAnnouncer13,
                f.extra = babelHelpers["extends"]({}, f.extra, {
                    subscribeSuccess: !0,
                    subscribeLatencyMS: this.$FleetBeaconTestUIAnnouncer7
                }));
                a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                break;
            case "publish_issued":
                this.$FleetBeaconTestUIAnnouncer9 += 1;
                this.$FleetBeaconTestUIAnnouncer14 = Date.now();
                f.extra = babelHelpers["extends"]({}, f.extra, {
                    publishIssued: !0,
                    payloadTimeoutInterval: (c = (b = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : b.payloadTimeoutIntervalMS()) != null ? c : -1
                });
                break;
            case "failed":
                a.getName() === "subscribe_issued" && (e = "SUBSCRIBE_FAILED");
                a.getName() === "publish_issued" && (e = "RECEIVE_PUBLISH_FAILED");
                this.$FleetBeaconTestUIAnnouncer16(f, "FAILURE", e);
                break;
            case "succeed":
                a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                this.$FleetBeaconTestUIAnnouncer16(f, "SUCCESS", "NONE");
                break;
            case "aborted":
                a.getName() === "preparing" && (e = "CREATE_TEST_FAILED");
                a.getName() === "publish_issued" && (e = "MUTATE_FIELD_FAILED");
                this.$FleetBeaconTestUIAnnouncer16(f, "ABORT", e);
                break;
            case "finish":
                f.extra = babelHelpers["extends"]({}, f.extra, {
                    cleanUpFinish: !0
                });
                break;
            default:
            }
            this.$FleetBeaconTestUIAnnouncer1.forEach(function(a) {
                a(f)
            })
        }
        ;
        c.$FleetBeaconTestUIAnnouncer15 = function(a) {
            this.$FleetBeaconTestUIAnnouncer10 += 1;
            var b = Date.now() - this.$FleetBeaconTestUIAnnouncer14;
            this.$FleetBeaconTestUIAnnouncer11.push(b);
            a.extra = babelHelpers["extends"]({}, a.extra, {
                payloadSuccess: !0,
                payloadSuccessCnt: this.$FleetBeaconTestUIAnnouncer10,
                payloadLatency: b
            })
        }
        ;
        c.$FleetBeaconTestUIAnnouncer16 = function(a, b, c) {
            a.extra = babelHelpers["extends"]({}, a.extra, {
                testResult: b,
                failureReason: c
            })
        }
        ;
        return b
    }(b("FleetBeaconStateTransitionListener"));
    e.exports = a
}
), null);
__d("FleetBeaconSubscriptionNetwork", ["regeneratorRuntime", "Promise", "CurrentUser", "RelayModern", "uuid", "FleetBeaconSubscriptionNetwork_Subscription.graphql", "FleetBeaconSubscriptionNetwork_PublishMutation.graphql", "FleetBeaconSubscriptionNetwork_LogMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    a = function() {
        function a(a) {
            this.environment = a
        }
        var c = a.prototype;
        c.subscribe = function(a, c) {
            return b("RelayModern").requestSubscription(this.environment, {
                subscription: g !== void 0 ? g : g = b("FleetBeaconSubscriptionNetwork_Subscription.graphql"),
                variables: {
                    input: {
                        test_id: a
                    }
                },
                onError: c.onError,
                onNext: c.onNext
            })
        }
        ;
        c.publish = function(a) {
            var c = this;
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        return d.abrupt("return", new (b("Promise"))(function(d, e) {
                            b("RelayModern").commitMutation(c.environment, {
                                mutation: h !== void 0 ? h : h = b("FleetBeaconSubscriptionNetwork_PublishMutation.graphql"),
                                variables: {
                                    input: {
                                        client_mutation_id: b("uuid")(),
                                        actor_id: b("CurrentUser").getAccountID(),
                                        test_id: a
                                    }
                                },
                                onCompleted: function(a) {
                                    return d()
                                },
                                onError: e
                            })
                        }
                        ));
                    case 1:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        c.log = function(a) {
            var c = this;
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        return d.abrupt("return", new (b("Promise"))(function(d, e) {
                            b("RelayModern").commitMutation(c.environment, {
                                mutation: i !== void 0 ? i : i = b("FleetBeaconSubscriptionNetwork_LogMutation.graphql"),
                                variables: {
                                    input: a
                                },
                                onCompleted: function(a) {
                                    return d()
                                },
                                onError: e
                            })
                        }
                        ));
                    case 1:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FleetBeaconTestSubscriptionLogger", ["CurrentUser", "FleetBeaconStateTransitionListener", "RelayRTIUtils", "uuid"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d) {
            var e;
            e = a.call(this) || this;
            e.$FleetBeaconTestSubscriptionLogger1 = null;
            e.$FleetBeaconTestSubscriptionLogger2 = b;
            e.$FleetBeaconTestSubscriptionLogger3 = !1;
            e.$FleetBeaconTestSubscriptionLogger4 = !1;
            e.$FleetBeaconTestSubscriptionLogger5 = !1;
            e.$FleetBeaconTestSubscriptionLogger6 = !1;
            e.$FleetBeaconTestSubscriptionLogger7 = -1;
            e.$FleetBeaconTestSubscriptionLogger8 = -1;
            e.$FleetBeaconTestSubscriptionLogger9 = 0;
            e.$FleetBeaconTestSubscriptionLogger10 = 0;
            e.$FleetBeaconTestSubscriptionLogger11 = [];
            e.$FleetBeaconTestSubscriptionLogger12 = -1;
            e.$FleetBeaconTestSubscriptionLogger13 = -1;
            e.$FleetBeaconTestSubscriptionLogger14 = -1;
            e.$FleetBeaconTestSubscriptionLogger15 = c;
            e.$FleetBeaconTestSubscriptionLogger16 = d;
            return e
        }
        var d = c.prototype;
        d.cleanState = function() {
            this.$FleetBeaconTestSubscriptionLogger3 = !1,
            this.$FleetBeaconTestSubscriptionLogger4 = !1,
            this.$FleetBeaconTestSubscriptionLogger5 = !1,
            this.$FleetBeaconTestSubscriptionLogger6 = !1,
            this.$FleetBeaconTestSubscriptionLogger7 = -1,
            this.$FleetBeaconTestSubscriptionLogger8 = -1,
            this.$FleetBeaconTestSubscriptionLogger9 = 0,
            this.$FleetBeaconTestSubscriptionLogger10 = 0,
            this.$FleetBeaconTestSubscriptionLogger11 = [],
            this.$FleetBeaconTestSubscriptionLogger12 = -1,
            this.$FleetBeaconTestSubscriptionLogger13 = -1,
            this.$FleetBeaconTestSubscriptionLogger14 = -1
        }
        ;
        d.onFleetBeaconStateTransition = function(a, b, c, d) {
            this.$FleetBeaconTestSubscriptionLogger1 == null && (this.$FleetBeaconTestSubscriptionLogger1 = d);
            c = "NONE";
            switch (b.getName()) {
            case "initial":
                break;
            case "preparing":
                this.$FleetBeaconTestSubscriptionLogger12 = Date.now();
                this.$FleetBeaconTestSubscriptionLogger3 = !0;
                break;
            case "before_subscribe":
                this.$FleetBeaconTestSubscriptionLogger13 = Date.now();
                this.$FleetBeaconTestSubscriptionLogger4 = !0;
                break;
            case "subscribe_issued":
                this.$FleetBeaconTestSubscriptionLogger5 = !0;
                break;
            case "waiting_to_publish":
                a.getName() === "subscribe_issued" && (this.$FleetBeaconTestSubscriptionLogger6 = !0,
                this.$FleetBeaconTestSubscriptionLogger7 = Date.now() - this.$FleetBeaconTestSubscriptionLogger13);
                a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                break;
            case "publish_issued":
                this.$FleetBeaconTestSubscriptionLogger9 += 1;
                this.$FleetBeaconTestSubscriptionLogger14 = Date.now();
                break;
            case "failed":
                a.getName() === "subscribe_issued" && (c = "SUBSCRIBE_FAILED");
                a.getName() === "publish_issued" && (c = "RECEIVE_PUBLISH_FAILED");
                this.$FleetBeaconTestSubscriptionLogger18("FAILURE", c);
                break;
            case "succeed":
                a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                this.$FleetBeaconTestSubscriptionLogger18("SUCCESS", "NONE");
                break;
            case "aborted":
                a.getName() === "preparing" && (c = "CREATE_TEST_FAILED");
                a.getName() === "publish_issued" && (c = "MUTATE_FIELD_FAILED");
                this.$FleetBeaconTestSubscriptionLogger18("ABORT", c);
                break;
            default:
            }
        }
        ;
        d.$FleetBeaconTestSubscriptionLogger17 = function() {
            this.$FleetBeaconTestSubscriptionLogger10 += 1;
            var a = Date.now() - this.$FleetBeaconTestSubscriptionLogger14;
            this.$FleetBeaconTestSubscriptionLogger11.push(a)
        }
        ;
        d.$FleetBeaconTestSubscriptionLogger18 = function(a, c) {
            var d, e = this, f = this.$FleetBeaconTestSubscriptionLogger12 = Date.now() - this.$FleetBeaconTestSubscriptionLogger12, g = parseInt(this.$FleetBeaconTestSubscriptionLogger11.reduce(function(a, b) {
                return a + b
            }, 0) / this.$FleetBeaconTestSubscriptionLogger10, 10);
            d = (d = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : d.getTestID();
            if (d == null)
                return;
            this.$FleetBeaconTestSubscriptionLogger2.log({
                client_mutation_id: b("uuid")(),
                actor_id: b("CurrentUser").getAccountID(),
                test_id: d,
                test_name: "Web_Manual",
                test_result: a,
                failure_reason: c,
                subscribe_issued: this.$FleetBeaconTestSubscriptionLogger5,
                subscribe_success: this.$FleetBeaconTestSubscriptionLogger6,
                subscribe_latency_ms: this.$FleetBeaconTestSubscriptionLogger7,
                subscribe_timeout_interval_ms: (d = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : d.subscribeTimeoutIntervalMS(),
                publish_success: this.$FleetBeaconTestSubscriptionLogger10 > 0,
                publish_latency_ms: g,
                publish_timeout_interval_ms: (a = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : a.payloadTimeoutIntervalMS(),
                test_duration_ms: f,
                triggering_subscription: (c = this.$FleetBeaconTestSubscriptionLogger15) != null ? c : "manual",
                app_id: b("RelayRTIUtils").GRAPH_SERVICES_SDK_APP_ID
            }).then(function(a) {
                e.$FleetBeaconTestSubscriptionLogger16(!0)
            })["catch"](function(a) {
                e.$FleetBeaconTestSubscriptionLogger16(!1)
            })
        }
        ;
        return c
    }(b("FleetBeaconStateTransitionListener"));
    e.exports = a
}
), null);
__d("FleetBeaconTestSubscription", ["FleetBeaconTestBase", "FleetBeaconTestSubscriptionLogger", "FleetBeaconTestUIAnnouncer", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e) {
            var f;
            f = a.call(this) || this;
            f.onCleanUpFleetBeaconFinish = function(a) {
                f.onCleanUpFinish()
            }
            ;
            f.$FleetBeaconTestSubscription1 = c;
            f.$FleetBeaconTestSubscription3 = null;
            f.$FleetBeaconTestSubscription4 = e;
            f.$FleetBeaconTestSubscription6 = new (b("FleetBeaconTestSubscriptionLogger"))(c,d,f.onCleanUpFleetBeaconFinish);
            f.$FleetBeaconTestSubscription5 = new (b("FleetBeaconTestUIAnnouncer"))();
            a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription6);
            a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription5);
            f.cleanPreviousFleetBeaconResult();
            return f
        }
        var d = c.prototype;
        d.cleanPreviousFleetBeaconResult = function() {
            a.prototype.cleanPreviousFleetBeaconResult.call(this),
            this.$FleetBeaconTestSubscription2 = b("uuid")()
        }
        ;
        d.getTestID = function() {
            return this.$FleetBeaconTestSubscription2
        }
        ;
        d.getFleetBeaconUIAnnouncer = function() {
            return this.$FleetBeaconTestSubscription5
        }
        ;
        d.prepareFleetBeaconTest = function() {
            this.onPrepareFleetBeaconSuccess()
        }
        ;
        d.subscribe = function() {
            var a = this
              , b = this.$FleetBeaconTestSubscription2;
            if (b == null)
                return;
            this.$FleetBeaconTestSubscription3 = this.$FleetBeaconTestSubscription1.subscribe(b, {
                onNext: function() {
                    a.onPayloadReceived()
                },
                onError: function() {}
            });
            this.onSubscribe()
        }
        ;
        d.publish = function() {
            var b = this
              , c = this.$FleetBeaconTestSubscription2;
            if (c == null)
                return;
            this.$FleetBeaconTestSubscription1.publish(c)["catch"](function(c) {
                a.prototype.onPublishFailed.call(b)
            })
        }
        ;
        d.cleanUpFleetBeacon = function() {}
        ;
        d.$FleetBeaconTestSubscription7 = function() {
            var a;
            (a = this.$FleetBeaconTestSubscription3) == null ? void 0 : a.dispose()
        }
        ;
        d.onFleetBeaconStateTransition = function(b, c) {
            a.prototype.onFleetBeaconStateTransition.call(this, b, c);
            b = c.getName();
            b === "finish" && (this.$FleetBeaconTestSubscription4(),
            this.$FleetBeaconTestSubscription7())
        }
        ;
        return c
    }(b("FleetBeaconTestBase"));
    e.exports = a
}
), null);
__d("FleetBeaconSubscriptionLauncher", ["FleetBeaconRunner", "FleetBeaconSubscriptionNetwork", "FleetBeaconTestSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    f.CreateFleetBeaconTestSubscription = a;
    f.LaunchFleetBeaconTestSubscription = c;
    function a(a, c, d) {
        a = new (b("FleetBeaconTestSubscription"))(new (b("FleetBeaconSubscriptionNetwork"))(a),c,d);
        return a
    }
    function c(a) {
        var c = new (b("FleetBeaconRunner"))(a);
        a.setFleetBeaconRunner(c);
        c.prepareFleetBeaconTest()
    }
}
), null);
__d("SkywalkerUtils", ["CurrentLocale", "RTISubscriptionManagerConfig"], (function(a, b, c, d, e, f) {
    a = {
        patchContext: function(a) {
            a = a || {};
            a.locale = b("CurrentLocale").get();
            if (b("RTISubscriptionManagerConfig").assimilator) {
                var c = b("RTISubscriptionManagerConfig").assimilator;
                c.tierType != null && (a.tierType = c.tierType);
                c.sandboxIP != null && c.sandboxPort != null && c.sandboxHostname != null && (a.sandboxIP = c.sandboxIP,
                a.sandboxPort = c.sandboxPort,
                a.sandboxHostname = c.sandboxHostname)
            }
            return a
        }
    };
    e.exports = a
}
), null);
__d("MqttEnv", ["killswitch"], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        mqtt_waterfall_log_client_sampling: 1,
        mqtt_ws_polling_enabled: 3,
        mqtt_lp_use_fetch: 9,
        mqtt_fast_lp: 11,
        mqtt_lp_no_delay: 12,
        mqtt_enable_publish_over_polling: 13
    });
    f.MqttGkNames = a;
    c = function() {
        var a = c.prototype;
        a.random = function() {
            return this.$1 != null ? this.$1() : Math.random()
        }
        ;
        a.isUserLoggedInNow = function() {
            return this.$2 != null ? this.$2() : !0
        }
        ;
        a.clearTimeout = function(a) {
            function b(b) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            }
            ;
            return b
        }(function(a) {
            if (this.$3 != null) {
                this.$3(a);
                return
            }
            clearTimeout(a)
        });
        a.setTimeout = function(a) {
            function b(b, c) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            }
            ;
            return b
        }(function(a, b) {
            for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++)
                d[e - 2] = arguments[e];
            return this.$4 != null ? this.$4.apply(null, arguments) : setTimeout.apply(null, arguments)
        });
        a.getLoggerInstance = function() {
            return this.$5 != null ? this.$5() : g.getInstance()
        }
        ;
        a.genGk = function(a) {
            return this.$6 != null ? this.$6(a) : !1
        }
        ;
        a.killswitch = function(a) {
            return this.$7 != null ? this.$7(a) : b("killswitch")(a)
        }
        ;
        a.createSocket = function(a, b) {
            return this.$8 != null ? this.$8(a, b) : new WebSocket(a)
        }
        ;
        a.scheduleCallback = function(a) {
            return this.$9 != null ? this.$9(a) : a()
        }
        ;
        a.scheduleLoggingCallback = function(a) {
            return this.$10 != null ? this.$10(a) : a()
        }
        ;
        a.configRead = function(a, b) {
            return this.$11 != null ? this.$11(a, b) : b
        }
        ;
        a.configWrite = function(a, b) {
            this.$12 != null && this.$12(a, b)
        }
        ;
        function c() {
            this.$1 = null,
            this.$2 = null,
            this.$3 = null,
            this.$4 = null,
            this.$5 = null,
            this.$6 = null,
            this.$7 = null,
            this.$8 = null,
            this.$9 = null,
            this.$10 = null,
            this.$11 = null,
            this.$12 = null
        }
        a.initialize = function(a, b, c, d, e, f, g, h, i, j, k, l) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c,
            this.$4 = d,
            this.$5 = e,
            this.$6 = f,
            this.$7 = l,
            this.$8 = g,
            this.$9 = h,
            this.$10 = i,
            this.$11 = j,
            this.$12 = k
        }
        ;
        return c
    }();
    var g = function() {
        function a() {}
        a.getInstance = function() {
            return new a()
        }
        ;
        var b = a.prototype;
        b.setAppId = function(a) {}
        ;
        b.eventLogConnect = function(a) {}
        ;
        b.eventLogPull = function(a) {}
        ;
        b.eventLogPullFinish = function(a) {}
        ;
        b.eventLogDisconnect = function(a) {}
        ;
        b.eventLogOutgoingPublish = function(a) {}
        ;
        b.eventLogIncomingPublish = function(a) {}
        ;
        b.eventLogPublishTimeout = function(a) {}
        ;
        b.eventLogMiscellaneousError = function(a) {}
        ;
        b.logIfLoggedOut = function() {}
        ;
        b.logError = function(a) {}
        ;
        b.logErrorWarn = function(a) {}
        ;
        b.logWarn = function(a) {}
        ;
        b.debugTrace = function(a) {}
        ;
        b.bumpCounter = function(a) {}
        ;
        return a
    }();
    d = new c();
    f.Env = d
}
), null);
__d("IrisSubscribeChecker", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        function a(a) {
            this.$1 = g.getLoggerInstance();
            this.$2 = null;
            this.$3 = !1;
            this.$4 = !1;
            this.$5 = !1;
            this.$6 = !0;
            this.$7 = 0;
            this.$8 = a;
            if (typeof window !== "undefined") {
                a = window.location.hostname;
                (a === "m.facebook.com" || a === "mobile.facebook.com" || a === "mtouch.facebook.com") && (this.$6 = !1)
            }
        }
        var b = a.prototype;
        b.start = function() {
            this.$6 = !0
        }
        ;
        b.stop = function() {
            this.$6 = !1,
            this.$9()
        }
        ;
        b.onConnectAttempt = function() {}
        ;
        b.onConnectFailure = function() {
            this.$9()
        }
        ;
        b.onConnected = function() {
            var a = this;
            this.$7++;
            this.$9();
            this.$3 = !1;
            this.$4 = !1;
            this.$5 = !1;
            this.$6 && (this.$2 = g.setTimeout(function() {
                a.$10()
            }, 8e3))
        }
        ;
        b.onConnectSuccess = function() {}
        ;
        b.onConnectionLost = function() {
            this.$9()
        }
        ;
        b.onSubscribe = function(a) {
            a === "/t_ms" && (this.$3 = !0)
        }
        ;
        b.onUnsubscribe = function(a) {}
        ;
        b.onPublish = function(a) {
            (a === "/messenger_sync_get_diffs" || a === "/messenger_sync_create_queue") && (this.$4 = !0,
            this.$3 && (this.$5 = !0,
            this.$9()))
        }
        ;
        b.onMessage = function(a) {}
        ;
        b.onWSFatal = function() {}
        ;
        b.$9 = function() {
            this.$2 && (g.clearTimeout(this.$2),
            this.$2 = null)
        }
        ;
        b.$10 = function() {
            if (this.$4 === !1) {
                var a = this.$7 == 1 ? "no_iris_session_initialConnect" : "no_iris_session";
                this.$1.bumpCounter(a);
                this.$1.eventLogMiscellaneousError({
                    errorMessage: a
                });
                this.$8() ? this.$1.bumpCounter(a + ".withProvider") : this.$1.bumpCounter(a + ".withoutProvider");
                this.$3 === !0 ? this.$1.bumpCounter(a + ".withTopicSubscribe") : this.$1.bumpCounter(a + ".withoutTopicSubscribe")
            }
            this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
            this.$3 === !0 && this.$4 === !0 && this.$5 === !1 && this.$1.bumpCounter("session_before_topic_subscribe")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttConnectionHookCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Set()
        }
        var b = a.prototype;
        b.addHook = function(a) {
            this.$1.add(a)
        }
        ;
        b.removeHook = function(a) {
            this.$1["delete"](a)
        }
        ;
        b.onConnectAttempt = function() {
            this.$1.forEach(function(a) {
                a.onConnectAttempt()
            })
        }
        ;
        b.onConnectFailure = function() {
            this.$1.forEach(function(a) {
                a.onConnectFailure()
            })
        }
        ;
        b.onConnected = function() {
            this.$1.forEach(function(a) {
                a.onConnected()
            })
        }
        ;
        b.onConnectSuccess = function() {
            this.$1.forEach(function(a) {
                a.onConnectSuccess()
            })
        }
        ;
        b.onConnectionLost = function() {
            this.$1.forEach(function(a) {
                a.onConnectionLost()
            })
        }
        ;
        b.onSubscribe = function(a) {
            this.$1.forEach(function(b) {
                b.onSubscribe(a)
            })
        }
        ;
        b.onUnsubscribe = function(a) {
            this.$1.forEach(function(b) {
                b.onUnsubscribe(a)
            })
        }
        ;
        b.onPublish = function(a) {
            this.$1.forEach(function(b) {
                b.onPublish(a)
            })
        }
        ;
        b.onMessage = function(a) {
            this.$1.forEach(function(b) {
                b.onMessage(a)
            })
        }
        ;
        b.onWSFatal = function() {
            this.$1.forEach(function(a) {
                a.onWSFatal()
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttLongPollingHookCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Set()
        }
        var b = a.prototype;
        b.addHook = function(a) {
            this.$1.add(a)
        }
        ;
        b.removeHook = function(a) {
            this.$1["delete"](a)
        }
        ;
        b.onPollRequestSent = function() {
            this.$1.forEach(function(a) {
                a.onPollRequestSent()
            })
        }
        ;
        b.onPollRequestSuccess = function() {
            this.$1.forEach(function(a) {
                a.onPollRequestSuccess()
            })
        }
        ;
        b.onPollResponse = function(a) {
            this.$1.forEach(function(b) {
                b.onPollResponse(a)
            })
        }
        ;
        b.onPollFinish = function() {
            this.$1.forEach(function(a) {
                a.onPollFinish()
            })
        }
        ;
        b.onPollRequestFailed = function(a) {
            this.$1.forEach(function(b) {
                b.onPollRequestFailed(a)
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttAnalyticsHook", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        function a() {
            this.$1 = g.getLoggerInstance(),
            this.$2 = 0,
            this.$3 = 0,
            this.$4 = 0,
            this.$5 = 0,
            this.$1.bumpCounter("session_start"),
            g.isUserLoggedInNow() || this.$1.bumpCounter("session_start.logout")
        }
        var b = a.prototype;
        b.onConnectAttempt = function() {
            this.$1.bumpCounter("ws_connect_attempt")
        }
        ;
        b.onConnectFailure = function() {
            this.$3++,
            this.$1.bumpCounter("ws_connect_failure")
        }
        ;
        b.onConnected = function() {
            this.$1.bumpCounter("ws_connect_connected")
        }
        ;
        b.onConnectSuccess = function() {
            this.$2 === 0 && this.$1.bumpCounter("ws_connect_first_success"),
            this.$2++,
            this.$1.bumpCounter("ws_connect_success")
        }
        ;
        b.onConnectionLost = function() {
            this.$1.bumpCounter("ws_disconnect")
        }
        ;
        b.onSubscribe = function(a) {}
        ;
        b.onUnsubscribe = function(a) {}
        ;
        b.onPublish = function(a) {
            this.$1.bumpCounter("ws_publish." + a)
        }
        ;
        b.onMessage = function(a) {
            this.$1.bumpCounter("message_arrived." + a)
        }
        ;
        b.onWSFatal = function() {
            this.$1.bumpCounter("ws_fatal")
        }
        ;
        b.onPollRequestSent = function() {
            this.$1.bumpCounter("polling_request_send")
        }
        ;
        b.onPollRequestSuccess = function() {
            this.$1.bumpCounter("polling_request_succeed"),
            this.$4 === 0 && this.$1.bumpCounter("polling_first_success"),
            this.$4++
        }
        ;
        b.onPollResponse = function(a) {
            this.$1.bumpCounter("lp.message_arrived." + a)
        }
        ;
        b.onPollFinish = function() {
            this.$1.bumpCounter("polling_request_finish")
        }
        ;
        b.onPollRequestFailed = function(a) {
            this.$1.bumpCounter("polling_request_failed"),
            this.$1.bumpCounter("polling_request_failed_" + a),
            this.$5++
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttProtocolUtils", ["MqttEnv"], (function(a, b, c, d, e, f) {
    var g = b("MqttEnv").Env;
    function a(a, b) {
        if (a == null)
            return b;
        var c = new Uint8Array(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
        return c
    }
    function c(a, b) {
        b = b;
        var c = 0, d = 1, e;
        do {
            if (b === a.length)
                return null;
            e = a[b++];
            c += (e & 127) * d;
            d *= 128
        } while ((e & 128) !== 0);return {
            value: c,
            offset: b
        }
    }
    function d(a) {
        a = a;
        var b = new Array(1);
        for (var c = 0; c < 4; c++) {
            var d = a % 128;
            a >>= 7;
            if (a > 0)
                b[c] = d | 128;
            else {
                b[c] = d;
                break
            }
        }
        return b
    }
    function h(a, b, c) {
        c = c;
        b[c++] = a >> 8;
        b[c++] = a % 256;
        return c
    }
    function f(a, b) {
        return 256 * a[b] + a[b + 1]
    }
    function i(a) {
        var b = 0;
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a.charCodeAt(c);
            e < 128 ? b += 1 : e < 2048 ? b += 2 : e >= 55296 && e <= 56319 ? (b += 4,
            c++) : b += 3
        }
        return b
    }
    function j(a, b, c, d) {
        d = h(b, c, d);
        k(a, c, d);
        return d + b
    }
    function k(a, b, c) {
        c = c;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a.charCodeAt(d);
            f < 128 ? b[c++] = f : f < 2048 ? (b[c++] = 192 | f >> 6,
            b[c++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (b[c++] = 224 | f >> 12,
            b[c++] = 128 | f >> 6 & 63,
            b[c++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | a.charCodeAt(++d) & 1023),
            b[c++] = 240 | f >> 18,
            b[c++] = 128 | f >> 12 & 63,
            b[c++] = 128 | f >> 6 & 63,
            b[c++] = 128 | f & 63)
        }
    }
    function l(a, b, c) {
        var d = []
          , e = b
          , f = 0;
        while (e < b + c) {
            var g = a[e++];
            if (g < 128)
                d[f++] = String.fromCharCode(g);
            else if (g > 191 && g < 224) {
                var h = a[e++];
                d[f++] = String.fromCharCode((g & 31) << 6 | h & 63)
            } else if (g > 239 && g < 365) {
                h = a[e++];
                var i = a[e++]
                  , j = a[e++];
                h = ((g & 7) << 18 | (h & 63) << 12 | (i & 63) << 6 | j & 63) - 65536;
                d[f++] = String.fromCharCode(55296 + (h >> 10));
                d[f++] = String.fromCharCode(56320 + (h & 1023))
            } else {
                i = a[e++];
                j = a[e++];
                d[f++] = String.fromCharCode((g & 15) << 12 | (i & 63) << 6 | j & 63)
            }
        }
        return d.join("")
    }
    b = function() {
        "use strict";
        function a(a, b, c) {
            this.$1 = a * 1e3,
            this.$4 = b,
            this.$5 = c,
            this.$3 = !1
        }
        var b = a.prototype;
        b.$6 = function() {
            var a = this;
            this.$3 ? (this.$3 = !1,
            this.$4(),
            this.$2 = g.setTimeout(function() {
                a.$6()
            }, this.$1)) : this.$5()
        }
        ;
        b.reset = function() {
            var a = this;
            this.$3 = !0;
            this.$2 && (g.clearTimeout(this.$2),
            this.$2 = null);
            this.$1 > 0 && (this.$2 = g.setTimeout(function() {
                a.$6()
            }, this.$1))
        }
        ;
        b.cancel = function() {
            this.$2 && (g.clearTimeout(this.$2),
            this.$2 = null)
        }
        ;
        return a
    }();
    e.exports = {
        UTF8Length: i,
        convertStringToUTF8: k,
        concatBuffers: a,
        decodeMultiByteInt: c,
        convertUTF8ToString: l,
        encodeMultiByteInt: d,
        writeUInt16BE: h,
        readUInt16BE: f,
        writeString: j,
        Pinger: b
    }
}
), null);
__d("MqttUtils", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = {
        endpointWithSessionId: function(a, b) {
            return this.endpointWithExtraParameter(a, "sid", b.toString())
        },
        endpointWithExtraParameters: function(a, b) {
            var c = this
              , d = a;
            b.forEach(function(a, b, e) {
                d = c.endpointWithExtraParameter(d, b, a)
            });
            return d
        },
        endpointWithExtraParameter: function(a, b, c) {
            if (a.indexOf("?") > 0)
                return a + "&" + b + "=" + c;
            else
                return a + "?" + b + "=" + c
        },
        generateSessionId: function() {
            return Math.floor(g.random() * Number.MAX_SAFE_INTEGER)
        },
        promiseDone: function(a, b, c) {
            var d = arguments.length > 1 ? a.then(b, c) : a;
            d.then(null, function(a) {
                g.setTimeout(function() {
                    if (a instanceof Error)
                        throw a;
                    else
                        throw new Error("promiseDone")
                }, 0)
            })
        },
        promiseDoneWithTimeout: function(a, b, c, d) {
            var e = !1;
            g.setTimeout(function() {
                e || (e = !0,
                c(new Error("promise timeout")))
            }, d);
            h.promiseDone(a, function(a) {
                e || (e = !0,
                b(a))
            }, function(a) {
                e || (e = !0,
                c(a))
            })
        },
        sprintf: function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                c[d - 1] = arguments[d];
            var e = 0;
            return a.replace(/%s/g, function() {
                return String(c[e++])
            })
        },
        hasWSSupport: function() {
            return "WebSocket"in a && a.WebSocket != null && "CLOSING"in a.WebSocket.prototype
        },
        getWSAvailability: function() {
            var b = "";
            if ("WebSocket"in a && a.WebSocket !== null)
                b += "W";
            else
                return "none";
            "CLOSING"in a.WebSocket.prototype && (b += "C");
            return b
        }
    };
    e.exports = h
}
), null);
__d("MqttProtocolCodec", ["MqttProtocolUtils", "MqttUtils"], (function(a, b, c, d, e, f) {
    var g = (c = b("MqttProtocolUtils")).UTF8Length
      , h = c.convertStringToUTF8
      , i = c.convertUTF8ToString
      , j = c.decodeMultiByteInt
      , k = c.encodeMultiByteInt
      , l = c.readUInt16BE
      , m = c.writeString
      , n = c.writeUInt16BE
      , o = b("MqttUtils").sprintf
      , p = Object.freeze({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14
    })
      , q = [0, 6, 77, 81, 73, 115, 100, 112, 3];
    function r(a, b) {
        b = b;
        var c = b
          , d = a[b]
          , e = d >> 4;
        b += 1;
        var f = j(a, b);
        if (f == null)
            return {
                wireMessage: null,
                position: c
            };
        b = f.offset;
        f = b + f.value;
        if (f > a.length)
            return {
                wireMessage: null,
                position: c
            };
        var g;
        switch (e) {
        case p.CONNACK:
            c = a[b++];
            c = !!(c & 1);
            var h = a[b++];
            g = new u(c,h);
            break;
        case p.PUBLISH:
            c = d & 15;
            h = c >> 1 & 3;
            d = l(a, b);
            b += 2;
            var k = i(a, b, d);
            b += d;
            d = null;
            h === 1 && (d = l(a, b),
            b += 2);
            var m = w.createWithBytes(a.subarray(b, f))
              , n = (c & 1) === 1;
            c = (c & 8) === 8;
            g = new x(k,m,h,d,n,c);
            break;
        case p.PINGREQ:
            g = new s("PINGREQ");
            break;
        case p.PINGRESP:
            g = new s("PINGRESP");
            break;
        case p.PUBACK:
        case p.UNSUBACK:
            k = l(a, b);
            g = new v(e === p.PUBACK ? "PUBACK" : "UNSUBACK",k);
            break;
        case p.SUBACK:
            m = l(a, b);
            b += 2;
            h = a.subarray(b, f);
            g = new t(m,h);
            break;
        default:
            throw new Error(o("Invalid MQTT message type %s.", e))
        }
        return {
            wireMessage: g,
            position: f
        }
    }
    function a(a) {
        var b = []
          , c = 0;
        while (c < a.length) {
            var d = r(a, c)
              , e = d.wireMessage;
            c = d.position;
            if (e)
                b.push(e);
            else
                break
        }
        d = null;
        c < a.length && (d = a.subarray(c));
        return {
            messages: b,
            remaining: d
        }
    }
    d = function() {
        "use strict";
        function a(a) {
            this.messageType = p[a]
        }
        var b = a.prototype;
        b.encode = function() {
            throw new TypeError("Cannot abstract class WireMessage")
        }
        ;
        return a
    }();
    var s = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a) {
            return b.call(this, a) || this
        }
        var c = a.prototype;
        c.encode = function() {
            var a = new ArrayBuffer(2)
              , b = new Uint8Array(a);
            b[0] = (this.messageType & 15) << 4;
            return a
        }
        ;
        return a
    }(d);
    f = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.call(this, "DISCONNECT") || this
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4
              , b = new ArrayBuffer(2)
              , c = new Uint8Array(b);
            c[0] = a;
            c.set(k(0), 1);
            return b
        }
        ;
        return b
    }(d);
    var t = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            var d;
            d = b.call(this, "SUBACK") || this;
            d.messageIdentifier = a;
            d.returnCode = c;
            return d
        }
        return a
    }(d)
      , u = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            var d;
            d = b.call(this, "CONNACK") || this;
            d.sessionPresent = a;
            d.returnCode = c;
            return d
        }
        return a
    }(d)
      , v = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            a = b.call(this, a) || this;
            a.messageIdentifier = c;
            return a
        }
        var c = a.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4
              , b = 2
              , c = k(b)
              , d = c.length + 1;
            b = new ArrayBuffer(b + d);
            var e = new Uint8Array(b);
            e[0] = a;
            e.set(c, 1);
            d = n(this.messageIdentifier, e, d);
            return b
        }
        ;
        return a
    }(d);
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            var d;
            d = a.call(this, "CONNECT") || this;
            d.clientId = b;
            d.connectOptions = c;
            return d
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4
              , b = q.length + 3;
            b += g(this.clientId) + 2;
            b += g(this.connectOptions.userName) + 2;
            var c = k(b);
            b = new ArrayBuffer(1 + c.length + b);
            var d = new Uint8Array(b);
            d[0] = a;
            a = 1;
            d.set(c, 1);
            a += c.length;
            d.set(q, a);
            a += q.length;
            c = 2 | 128;
            d[a++] = c;
            a = n(this.connectOptions.keepAliveInterval, d, a);
            a = m(this.clientId, g(this.clientId), d, a);
            a = m(this.connectOptions.userName, g(this.connectOptions.userName), d, a);
            return b
        }
        ;
        return b
    }(d);
    b = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e) {
            var f;
            f = a.call(this, b) || this;
            f.topic = c;
            if (d < 0 && d > 1 || d === 1 && e == null)
                throw new TypeError(o("Argument Invalid. qos: %s messageType: %s.", d, b));
            f.qos = d;
            f.messageIdentifier = e;
            return f
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4;
            a |= 2;
            var b = g(this.topic)
              , c = 2 + b + 2;
            this.messageType === p.SUBSCRIBE && (c += 1);
            var d = k(c);
            c = new ArrayBuffer(1 + d.length + c);
            var e = new Uint8Array(c);
            e[0] = a;
            a = 1;
            e.set(d, 1);
            a += d.length;
            this.messageIdentifier != null && (a = n(this.messageIdentifier, e, a));
            a = m(this.topic, b, e, a);
            this.messageType === p.SUBSCRIBE && this.qos != null && (e[a++] = this.qos);
            return c
        }
        ;
        return b
    }(d);
    var w = function() {
        "use strict";
        function a(a, b) {
            this.payloadString = a,
            this.payloadBytes = b
        }
        a.createWithString = function(b) {
            var c = new Uint8Array(new ArrayBuffer(g(b)));
            h(b, c, 0);
            return new a(b,c)
        }
        ;
        a.createWithBytes = function(b) {
            var c = i(b, 0, b.length);
            return new a(c,b)
        }
        ;
        var b = a.prototype;
        b.string = function() {
            return this.payloadString
        }
        ;
        b.bytes = function() {
            return this.payloadBytes
        }
        ;
        return a
    }()
      , x = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e, f, g) {
            var h;
            h = b.call(this, "PUBLISH") || this;
            h.topic = a;
            h.payloadMessage = c;
            h.qos = d;
            h.messageIdentifier = e;
            h.retained = f != null ? f : !1;
            h.duplicate = g != null ? g : !1;
            if (h.qos === 1 && h.messageIdentifier == null)
                throw new TypeError("Argument Invalid. messageIdentifier: null and qos: 1");
            return h
        }
        var c = a.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4;
            this.duplicate && (a |= 8);
            a = a |= this.qos << 1;
            this.retained && a != 1;
            var b = g(this.topic)
              , c = b + 2
              , d = this.qos === 0 ? 0 : 2;
            c += d;
            d = this.payloadMessage.bytes();
            c += d.byteLength;
            var e = k(c);
            c = new ArrayBuffer(1 + e.length + c);
            var f = new Uint8Array(c);
            f[0] = a;
            f.set(e, 1);
            a = 1 + e.length;
            a = m(this.topic, b, f, a);
            this.qos !== 0 && this.messageIdentifier != null && (a = n(this.messageIdentifier, f, a));
            f.set(d, a);
            return c
        }
        ;
        return a
    }(d);
    e.exports = {
        MESSAGE_TYPE: p,
        WireMessage: {
            Base: d,
            PubAckUnsubAck: v,
            Ping: s,
            ConnAck: u,
            Connect: c,
            Disconnect: f,
            Subscription: b,
            Publish: x
        },
        createMessageWithString: w.createWithString,
        decodeMessage: r,
        decodeByteMessages: a
    }
}
), null);
__d("MqttTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b) {
        this.errorCode = a,
        this.errorMessage = b
    }
    ;
    f.MqttError = a;
    b = function(a, b) {
        this.mqttError = a,
        this.connAck = b
    }
    ;
    f.ConnectFailure = b;
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            d === void 0 && (d = null);
            c = a.call(this, c) || this;
            c.isRecoverable = b;
            c.originalError = d;
            return c
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f.MqttChannelError = c
}
), null);
__d("MqttProtocolClient", ["MqttEnv", "MqttProtocolCodec", "MqttTypes", "MqttProtocolUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 30
      , h = 6e4
      , i = b("MqttEnv").Env
      , j = (a = b("MqttProtocolCodec")).MESSAGE_TYPE
      , k = a.WireMessage
      , l = a.createMessageWithString
      , m = a.decodeByteMessages;
    c = b("MqttTypes").MqttError;
    var n = b("MqttTypes").ConnectFailure
      , o = b("MqttProtocolUtils").concatBuffers
      , p = b("MqttProtocolUtils").Pinger
      , q = {
        SOCKET_ERROR: new c(1,"Socket error"),
        SOCKET_MESSAGE: new c(2,"Unable to parse invalid socket message"),
        INVALID_DATA_TYPE: new c(3,"Received non-arraybuffer from socket."),
        CONNECT_TIMEOUT: new c(4,"Connect timed out"),
        CONNACK_FAILURE: new c(5,"Connection failure due to connack"),
        PING_TIMEOUT: new c(6,"Ping timeout"),
        APP_DISCONNECT: new c(7,"Disconnect initiated by app"),
        SERVER_DISCONNECT: new c(8,"Disconnect message sent my server"),
        SOCKET_CLOSE: new c(9,"Socket connection closed")
    };
    d = function() {
        function a(a) {
            this.$3 = a,
            this.$2 = {
                userName: "",
                mqttVersion: 3,
                keepAliveInterval: 10,
                ignoreSubProtocol: !1,
                onConnectSuccess: function() {},
                onConnectFailure: function(a) {},
                onConnection: function() {},
                onConnectionError: function(a) {},
                onConnectionLost: function(a) {},
                onMessageArrived: function(a, b, c) {},
                onMessageDelivered: function(a, b) {}
            },
            this.$1 = "mqttwsclient",
            this.$4 = 0,
            this.$5 = !1,
            this.$9 = i.getLoggerInstance()
        }
        var b = a.prototype;
        b.connect = function(a) {
            var b = this;
            if (this.$5)
                throw new Error("Invalid state: connect - already connected");
            this.$2 = a;
            this.setConnected(!1);
            this.$7 != null && (i.clearTimeout(this.$7),
            this.$7 = null);
            this.$7 = i.setTimeout(function() {
                b.$9.bumpCounter("protocol.error.connect.timeout"),
                b.$11(q.CONNECT_TIMEOUT)
            }, g * 1e3);
            this.$6 = i.createSocket(this.$3);
            this.$6.binaryType = "arraybuffer";
            this.$6.onopen = function() {
                b.setConnected(!0),
                b.$12(new k.Connect(b.$1,a)),
                a.onConnection()
            }
            ;
            this.$6.onmessage = function(a) {
                a = a.data;
                if (!(a instanceof ArrayBuffer)) {
                    b.$9.bumpCounter("protocol.error.onmessage.type");
                    b.$11(q.INVALID_DATA_TYPE);
                    return
                }
                try {
                    a = new Uint8Array(a);
                    b.$10 != null && (a = o(b.$10, a),
                    b.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
                    delete b.$10,
                    b.$10 = null);
                    a = m(a);
                    var c = a.messages;
                    b.$10 = a.remaining;
                    for (var a = 0; a < c.length; a++)
                        b.handleMessage(c[a])
                } catch (a) {
                    b.$10 = null,
                    b.$9.logError(a, q.SOCKET_MESSAGE.errorMessage),
                    b.$9.bumpCounter("protocol.error.onmessage.parse"),
                    b.$11(q.SOCKET_MESSAGE)
                }
            }
            ;
            this.$6.onerror = function(a) {
                b.$9.bumpCounter("protocol.error.socket"),
                b.$11(q.SOCKET_ERROR)
            }
            ;
            this.$6.onclose = function(a) {
                b.$9.bumpCounter("protocol.socket.close"),
                b.$11(q.SOCKET_CLOSE)
            }
            ;
            this.$8 != null && this.$8.cancel();
            this.$8 = new p(a.keepAliveInterval,this.$12.bind(this, new k.Ping("PINGREQ")),this.$11.bind(this, q.PING_TIMEOUT))
        }
        ;
        b.$13 = function() {
            this.setConnected(!1),
            this.$8 != null && this.$8.cancel(),
            this.$7 != null && (i.clearTimeout(this.$7),
            this.$7 = null),
            this.$6 != null && (this.$6.onopen = function(a) {}
            ,
            this.$6.onmessage = function(a) {}
            ,
            this.$6.onerror = function(a) {}
            ,
            this.$6.onclose = function(a) {}
            ,
            this.$6.readyState === this.$6.OPEN && this.$6.close(),
            delete this.$6,
            this.$6 = null),
            this.$2.onConnectSuccess = function() {}
            ,
            this.$2.onConnectFailure = function(a) {}
            ,
            this.$2.onConnection = function() {}
            ,
            this.$2.onConnectionError = function(a) {}
            ,
            this.$2.onConnectionLost = function(a) {}
            ,
            this.$2.onMessageArrived = function(a, b, c) {}
            ,
            this.$2.onMessageDelivered = function(a, b) {}
        }
        ;
        b.disconnect = function() {
            if (this.$6 == null || this.$6.readyState !== this.$6.OPEN || !this.$5) {
                this.$13();
                return
            }
            this.$12(new k.Disconnect());
            this.$9.bumpCounter("protocol.debug.disconnect");
            this.$11(q.APP_DISCONNECT)
        }
        ;
        b.isConnected = function() {
            return this.$5
        }
        ;
        b.setConnected = function(a) {
            this.$5 = a
        }
        ;
        b.subscribe = function(a) {
            if (!this.$5) {
                this.$9.bumpCounter("protocol.error.subscribe.notconnected");
                throw new Error("Invalid state: subscribe - not connected")
            }
            this.$9.bumpCounter("protocol.subscribe." + a);
            a = new k.Subscription("SUBSCRIBE",a,0,this.$14());
            this.$12(a)
        }
        ;
        b.unsubscribe = function(a) {
            if (!this.$5) {
                this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
                throw new Error("Invalid state: unsubscribe - not connected")
            }
            this.$9.bumpCounter("protocol.unsubscribe." + a);
            a = new k.Subscription("UNSUBSCRIBE",a,0,this.$14());
            this.$12(a)
        }
        ;
        b.publish = function(a, b, c) {
            this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
            this.$9.bumpCounter("protocol.publish." + a);
            var d = this.$14();
            a = new k.Publish(a,l(b),c,d);
            this.$12(a);
            return d
        }
        ;
        b.$14 = function() {
            ++this.$4 === h && (this.$4 = 1);
            return this.$4
        }
        ;
        b.$11 = function(a, b) {
            this.$9.bumpCounter("protocol.debug.disconnect.internal");
            var c = this.$5
              , d = this.$2
              , e = d.onConnectionLost
              , f = d.onConnectFailure;
            this.setConnected(!1);
            this.$13();
            c ? i.scheduleCallback(function() {
                e(a)
            }) : i.scheduleCallback(function() {
                f(new n(a,b != null ? b : -1))
            })
        }
        ;
        b.$12 = function(a) {
            var b = this.$6;
            if (b == null)
                return;
            if (b.readyState != b.OPEN)
                return;
            b.send(a.encode())
        }
        ;
        b.handleMessage = function(a) {
            var b = this;
            switch (a.messageType) {
            case j.CONNACK:
                this.$7 != null && (i.clearTimeout(this.$7),
                this.$7 = null);
                if (a instanceof k.ConnAck) {
                    var c = a;
                    if (c.returnCode !== 0) {
                        this.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                        this.setConnected(!1);
                        this.$11(q.CONNACK_FAILURE, c.returnCode);
                        return
                    }
                    i.scheduleCallback(function() {
                        b.$2.onConnectSuccess()
                    });
                    this.$8 != null && this.$8.reset()
                }
                break;
            case j.PUBLISH:
                if (a instanceof k.Publish) {
                    var d = a;
                    i.scheduleCallback(function() {
                        b.$2.onMessageArrived(d.topic, d.payloadMessage.payloadString, d.qos)
                    });
                    c = d.messageIdentifier;
                    this.$9.bumpCounter("protocol.publish.received");
                    if (d.qos === 1 && c != null) {
                        c = new k.PubAckUnsubAck("PUBACK",c);
                        this.$12(c)
                    }
                }
                break;
            case j.PUBACK:
                if (a instanceof k.PubAckUnsubAck) {
                    c = a;
                    var e = c.messageIdentifier;
                    this.$9.bumpCounter("protocol.puback.received");
                    i.scheduleCallback(function() {
                        b.$2.onMessageDelivered("", e)
                    })
                }
                break;
            case j.PINGRESP:
                this.$8 != null && this.$8.reset();
                break;
            case j.DISCONNECT:
                this.$11(q.SERVER_DISCONNECT);
                break;
            case j.SUBACK:
                this.$9.bumpCounter("protocol.suback.received");
                break;
            case j.UNSUBACK:
                this.$9.bumpCounter("protocol.unsuback.received");
                break;
            default:
                this.$9.logError(new Error("MqttProtocolClient: Received unhandled message type: " + a.messageType), "Received unhandled message type");
                this.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
                break
            }
        }
        ;
        return a
    }();
    e.exports = d
}
), null);
__d("MqttPublishListener", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        NOT_CONNECTED: "NOT_CONNECTED",
        PUBLISH_ERROR: "PUBLISH_ERROR",
        QUEUED: "QUEUED",
        SENT: "SENT",
        ACKED: "ACKED",
        NOT_ACKED: "NOT_ACKED"
    });
    f.MqttPublishEvent = a
}
), null);
__d("MqttUserName", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f, g, h) {
            h === void 0 && (h = null),
            this.$1 = a,
            this.$2 = c,
            this.$3 = d,
            this.$4 = e,
            this.$5 = f,
            this.$6 = g,
            this.$7 = b("gkx")("1166607") ? !1 : typeof document === "object" && document && document.hasFocus && document.hasFocus(),
            this.$8 = h
        }
        var c = a.prototype;
        c.gen = function(a, c, d, e) {
            e === void 0 && (e = []);
            var f = b("gkx")("1166607") ? !1 : this.$7;
            a = {
                u: this.$1,
                s: a,
                cp: this.$3,
                ecp: this.$2,
                chat_on: this.$6,
                fg: f,
                d: this.$4,
                ct: "websocket",
                mqtt_sid: "",
                aid: this.$5,
                st: c,
                pm: d,
                dc: "",
                no_auto_fg: !0,
                gas: this.$8,
                pack: e
            };
            return JSON.stringify(a)
        }
        ;
        c.setForegroundState = function(a) {
            this.$7 = a
        }
        ;
        c.setChatVisibility = function(a) {
            this.$6 = a
        }
        ;
        c.getEndpointCapabilities = function() {
            return this.$2
        }
        ;
        c.setEndpointCapabilities = function(a) {
            this.$2 = a
        }
        ;
        c.getIsGuestAuthStringPresent = function() {
            return this.$8 !== null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttConnection", ["Promise", "MqttConnectionHookCollection", "MqttEnv", "MqttProtocolClient", "MqttPublishListener", "MqttTypes", "MqttUserName", "MqttUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    b("MqttEnv").MqttGkNames;
    var h = b("MqttPublishListener").MqttPublishEvent;
    b("MqttTypes").ConnectFailure;
    var i = b("MqttTypes").MqttChannelError;
    b("MqttTypes").MqttError;
    var j = 10
      , k = "publish"
      , l = "subscribe"
      , m = "unsubscribe"
      , n = function(a) {}
      , o = 18e4
      , p = 5 * 1e3
      , q = 15
      , r = 21;
    a = function() {
        function a() {
            this.$8 = !1;
            this.$10 = g.getLoggerInstance();
            this.$11 = "Disconnected";
            this.$14 = new Set();
            this.$15 = new Map();
            this.$18 = 0;
            this.$19 = 0;
            this.$12 = 0;
            this.$13 = 0;
            this.$8 = !1;
            this.$5 = "";
            this.$6 = new (b("MqttUserName"))("",0,1,"",0,!0);
            this.$9 = 0;
            this.$7 = null;
            var a = function() {};
            this.$1 = a;
            this.$2 = a;
            this.$3 = a;
            this.$16 = !1;
            this.$17 = !1;
            this.$20 = new (b("MqttConnectionHookCollection"))();
            this.$4 = function() {
                return []
            }
        }
        var c = a.prototype;
        c.run = function(a) {
            var b = this
              , c = a.onStateChange
              , d = a.onJSError
              , e = a.onMessageReceived
              , f = a.endpoint
              , g = a.mqttUserName
              , h = a.subscribedTopics;
            a = a.extraConnectMessageProvider;
            if (this.$8) {
                this.$10.debugTrace("run", "Run called while in running state.");
                return
            }
            this.$1 = c;
            this.$3 = e;
            this.$5 = f;
            this.$6 = g;
            this.$8 = !0;
            this.$12 = 0;
            this.$2 = d || n;
            h && h.forEach(function(a) {
                return b.$14.add(a)
            });
            this.$4 = a;
            this.$21();
            this.$22()
        }
        ;
        c.shutdown = function() {
            this.$23(),
            this.$24("shutdown"),
            this.$8 = !1,
            this.$10.debugTrace("shutdown", "Shutdown")
        }
        ;
        c.subscribe = function(a) {
            this.$14.add(a);
            this.ensureConnected(l) && this.$25(a);
            return !0
        }
        ;
        c.publish = function(a, c, d, e) {
            var f = {
                resolve: function() {},
                reject: function(a) {}
            };
            e != null && (f.listener = e);
            var g = new (b("Promise"))(function(a, b) {
                f.resolve = a,
                f.reject = b
            }
            )
              , i = this.ensureConnected(k);
            !i ? (e == null ? void 0 : e.onEvent(h.NOT_CONNECTED),
            f.reject(new Error("Client disconnected"))) : this.$26(a, c, d, f);
            return g
        }
        ;
        c.unsubscribe = function(a) {
            this.$14["delete"](a);
            this.ensureConnected(m) && this.$27(a);
            return !0
        }
        ;
        c.addHook = function(a) {
            this.$20.addHook(a)
        }
        ;
        c.removeHook = function(a) {
            this.$20.removeHook(a)
        }
        ;
        c.isRunning = function() {
            return this.$8
        }
        ;
        c.getSessionId = function() {
            return this.$9
        }
        ;
        c.hasFatal = function() {
            return this.$16
        }
        ;
        c.hasConnectSuccess = function() {
            return this.$17
        }
        ;
        c.canPublish = function() {
            return this.ensureConnected("canPublish")
        }
        ;
        c.ensureConnected = function(a) {
            return !this.$8 || this.$7 == null || !this.$7.isConnected() ? !1 : !0
        }
        ;
        c.connectionState = function() {
            return this.$11
        }
        ;
        c.mqttStateFromConnectionState = function(a) {
            switch (a) {
            case "Connecting":
            case "TransportConnected":
                return "Connecting";
            case "Connected":
                return "Connected";
            case "Disconnected":
                return "Disconnected"
            }
            throw new Error("Unknown state " + a)
        }
        ;
        c.testOnlyGetSubscribedTopics = function() {
            return this.$14
        }
        ;
        c.$21 = function() {
            var a = this;
            typeof window !== "undefined" && window.addEventListener("unload", function(b) {
                return a.$28(b)
            })
        }
        ;
        c.$28 = function(a) {
            this.publish("/browser_close", "{}", 0)
        }
        ;
        c.$23 = function() {
            this.$8 && this.$7 != null && (this.$29("Disconnected"),
            this.$7 != null && this.$7.disconnect(),
            this.$7 = null)
        }
        ;
        c.$29 = function(a) {
            a !== this.$11 && (this.$11 = a,
            this.$1(a))
        }
        ;
        c.$22 = function() {
            var a = this;
            if (!this.$8)
                return;
            this.$29("Connecting");
            var c = Date.now();
            this.$9 = b("MqttUtils").generateSessionId();
            var d = Array.from(this.$14)
              , e = b("MqttUtils").endpointWithSessionId(this.$5, this.$9);
            try {
                this.$7 = new (b("MqttProtocolClient"))(e);
                var f = this.$30()
                  , g = f.map(function(a) {
                    return a.topic
                });
                e = this.$6.gen(this.$9, d, f);
                this.$7 != null && (this.$7.connect({
                    userName: e,
                    mqttVersion: 3,
                    keepAliveInterval: j,
                    ignoreSubProtocol: !0,
                    onConnectFailure: function(b) {
                        return a.$31(b, c, d, g)
                    },
                    onConnectSuccess: function() {
                        return a.$32(c, d, g)
                    },
                    onConnection: function() {
                        return a.$33(f, d)
                    },
                    onConnectionError: function(b) {
                        return a.$34(b)
                    },
                    onConnectionLost: function(b) {
                        return a.$35(b)
                    },
                    onMessageArrived: function(b, c, d) {
                        return a.$36(b, c, d)
                    },
                    onMessageDelivered: function(b, c) {
                        return a.$37(b, c)
                    }
                }),
                this.$10.bumpCounter("protocol.connectattempt"),
                this.$20.onConnectAttempt(),
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.connectattempt"))
            } catch (a) {
                this.$10.bumpCounter("js_error_in_init_exception"),
                this.$29("Disconnected"),
                this.$38(!1, !1, c, d, [], 14, a.message),
                a && this.$10.logErrorWarn(a, "ws_js_error"),
                this.$20.onWSFatal(),
                this.$39(new i(!1,"ws_js_error",a), "client_init")
            }
        }
        ;
        c.$30 = function() {
            var a = this.$4()
              , b = 65536;
            a = a.map(function(a) {
                a.messageId = b--;
                return a
            });
            return a
        }
        ;
        c.$25 = function(a) {
            try {
                if (this.$7 != null) {
                    this.$7.subscribe(a);
                    this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
                    this.$20.onSubscribe(a);
                    this.$10.bumpCounter("protocol.subscribe");
                    return !0
                }
            } catch (b) {
                this.$10.logError(b, "Exception subscribing"),
                this.$10.bumpCounter("subscribe_exception." + a),
                this.$10.bumpCounter("protocol.subscribe.error")
            }
            return !1
        }
        ;
        c.$27 = function(a) {
            try {
                if (this.$7 != null) {
                    this.$7.unsubscribe(a);
                    this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
                    this.$20.onUnsubscribe(a);
                    this.$10.bumpCounter("protocol.unsubscribe");
                    return !0
                }
            } catch (b) {
                this.$10.logError(b, "Exception unsubscribing"),
                this.$10.bumpCounter("unsubscribe_exception." + a),
                this.$10.bumpCounter("protocol.unsubscribe.error")
            }
            return !1
        }
        ;
        c.$26 = function(a, b, c, d) {
            if (this.$7 != null)
                try {
                    b = this.$7.publish(a, b, c);
                    this.$10.bumpCounter("protocol.publish");
                    var e = b != null ? b : "null";
                    this.$10.debugTrace("_doPublish", "publish " + a + " with messageId:" + e + " qos:" + c);
                    this.$20.onPublish(a);
                    (e = d.listener) == null ? void 0 : e.onEvent(h.SENT);
                    b != null ? this.$15.set(b, d) : d.resolve();
                    return !0
                } catch (b) {
                    this.$10.logError(b, "Exception publishing");
                    this.$10.bumpCounter("publish_exception." + a);
                    d.reject(b);
                    this.$10.bumpCounter("protocol.publish.error");
                    return !1
                }
            else
                return !1
        }
        ;
        c.$40 = function(a) {
            var b = this;
            a === void 0 && (a = null);
            if (!this.$8)
                return;
            this.$23();
            this.$24("reconnect");
            this.$41();
            this.$9 = -1;
            this.$13 = 0;
            a = a != null ? a : Math.pow(2, Math.min(this.$12, 6)) * (1e3 + g.random() * 200);
            this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + a + " ms");
            g.setTimeout(function() {
                b.$22()
            }, a);
            this.$12 += 1
        }
        ;
        c.$41 = function() {
            var a = Date.now() - this.$13
              , b = this.$13 !== 0 && a > p
              , c = this.$12 > q;
            (b || c) && (this.$12 = 0);
            this.$13 !== 0 && a <= p && this.$10.bumpCounter("short_lived_session");
            c && this.$10.bumpCounter("connection_attempt_limit")
        }
        ;
        c.$38 = function(a, b, c, d, e, f, g) {
            a === !0 ? this.$19++ : this.$18++,
            this.$10.eventLogConnect({
                sessionID: this.$9,
                connectionStatus: a,
                connectionState: this.mqttStateFromConnectionState(this.$11),
                ackReceived: b,
                duration: Date.now() - c,
                hostname: this.$5,
                attemptNumber: this.$12,
                failTotal: this.$18,
                successTotal: this.$19,
                subscribedTopics: d,
                publishes: e,
                errorCode: f,
                errorMessage: g
            })
        }
        ;
        c.$31 = function(a, b, c, d) {
            var e = a.mqttError
              , f = e.errorMessage;
            this.$10.debugTrace("connect", "Connect failed " + f);
            this.$10.bumpCounter("protocol.onconnectfailure");
            this.$20.onConnectFailure();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectfailure");
            this.$38(!1, a.connAck != null, b, c, d, e.errorCode, f);
            if (a.connAck != null) {
                this.$10.bumpCounter("protocol.connect_failure." + a.connAck);
                if (a.connAck === r) {
                    this.$40(o);
                    return
                }
            }
            this.$40()
        }
        ;
        c.$33 = function(a, b) {
            var c = this;
            this.$10.bumpCounter("protocol.onconnection");
            this.$10.debugTrace("Connect", "Socket established");
            this.$20.onConnected();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnection");
            b.forEach(function(a) {
                c.$20.onSubscribe(a)
            });
            a.forEach(function(a) {
                c.$20.onPublish(a.topic)
            });
            this.$29("TransportConnected")
        }
        ;
        c.$32 = function(a, b, c) {
            this.$10.bumpCounter("protocol.onconnectsuccess"),
            this.$10.debugTrace("connect", "Connect success"),
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectsucess"),
            this.$20.onConnectSuccess(),
            this.$17 = !0,
            this.$38(!0, !0, a, b, c),
            this.$29("Connected"),
            this.$42(b),
            this.$13 = Date.now()
        }
        ;
        c.$35 = function(a) {
            this.$10.bumpCounter("protocol.onconnectionlost"),
            a.errorCode && this.$10.eventLogDisconnect({
                sessionID: this.$9,
                errorCode: a.errorCode,
                errorMessage: a.errorMessage,
                duration: Date.now() - this.$13
            }),
            this.$10.debugTrace("connect", "connection lost"),
            this.$20.onConnectionLost(),
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectionlost"),
            this.$40()
        }
        ;
        c.$34 = function(a) {}
        ;
        c.$36 = function(a, b, c) {
            this.$10.bumpCounter("protocol.onmessagearrived");
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onmessagearrived");
            this.$10.debugTrace("onMessageArrived", "Message received on " + a);
            this.$20.onMessage(a);
            try {
                this.$3(a, b, c)
            } catch (b) {
                this.$10.logError(b, "Listener threw error"),
                this.$10.bumpCounter("listener_error." + a)
            }
        }
        ;
        c.$37 = function(a, b) {
            this.$10.bumpCounter("protocol.onmessagedelivered");
            a = b != null ? b : "null";
            this.$10.debugTrace("onMessageDelivered", "Delivered Message {ID: " + a + "}");
            if (b == null)
                return;
            a = this.$15.get(b);
            if (a == null) {
                this.$10.bumpCounter("protocol.message_with_unknown_id");
                return
            }
            this.$15["delete"](b);
            (b = a.listener) == null ? void 0 : b.onEvent(h.ACKED);
            a.resolve()
        }
        ;
        c.$24 = function(a) {
            this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + a),
            this.$15.forEach(function(b, c, d) {
                (c = b.listener) == null ? void 0 : c.onEvent(h.NOT_ACKED);
                b.reject(new Error(a))
            }),
            this.$15.clear()
        }
        ;
        c.$42 = function(a) {
            var b = this
              , c = new Set(a);
            c.forEach(function(a) {
                b.$14.has(a) || b.unsubscribe(a)
            });
            a = new Set(this.$14);
            a.forEach(function(a) {
                c.has(a) || b.subscribe(a)
            })
        }
        ;
        c.$39 = function(a, b) {
            try {
                this.$10.bumpCounter("js_error_in_init");
                this.$10.bumpCounter(b + ".error");
                this.$16 = !0;
                var c = a ? a.message : "error";
                this.$10.debugTrace("onError", b + ": " + c);
                this.$2(a)
            } catch (a) {
                this.$10.bumpCounter("js_error_in_error_logging"),
                this.$10.logError(a, "JS error while trying to log previous error")
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttChannel", ["Promise", "requireDeferred", "ChannelClientID", "IrisSubscribeChecker", "MqttAnalyticsHook", "MqttConnection", "MqttEnv", "MqttPublishListener", "MqttPublishTimeoutConfig", "MqttUserName", "MqttUtils", "isFastRefreshEnabledForCurrentDomain", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttEnv").MqttGkNames
      , i = b("MqttPublishListener").MqttPublishEvent
      , j = b("MqttPublishTimeoutConfig").mqttPublishTimeoutMs || 60 * 1e3;
    a = function() {
        function a(a) {
            var c = this
              , d = a.endpoint
              , e = a.pollingEndpoint
              , f = a.userFbid
              , h = a.appId
              , i = a.initialSubscribedTopics
              , j = a.capabilities
              , k = a.clientCapabilities
              , l = a.chatVisibility;
            l = l === void 0 ? !0 : l;
            a = a.guestAuthString;
            a = a === void 0 ? null : a;
            this.$10 = g.getLoggerInstance();
            this.$10.setAppId(h);
            this.$11 = new (b("MqttUserName"))(f,j,k,b("ChannelClientID").getID(),h,l,a);
            this.$1 = d;
            this.$2 = e;
            this.$5 = "Disconnected";
            this.$7 = "LPInactive";
            this.$6 = "Disconnected";
            this.$3 = [];
            this.$4 = new Set();
            this.$8 = new Map();
            this.$9 = new (b("MqttConnection"))();
            this.$12 = null;
            this.$15 = new (b("MqttAnalyticsHook"))();
            this.$14 = new Map();
            this.$13 = [];
            if (!g.isUserLoggedInNow() && !b("isFastRefreshEnabledForCurrentDomain")() && (a == null || a == "")) {
                this.$10.bumpCounter("logged_out_init");
                return
            }
            this.$9.addHook(this.$15);
            this.$9.addHook(new (b("IrisSubscribeChecker"))(function() {
                return c.$4.size > 0
            }
            ));
            this.$16(i);
            this.$17();
            this.$10.logIfLoggedOut()
        }
        var c = a.prototype;
        c.$16 = function(a) {
            var c = this;
            if (this.$9.isRunning()) {
                this.$18("run", "Connection started calling run again");
                return
            }
            if (g.genGk(h.mqtt_ws_polling_enabled)) {
                var d = g.killswitch("MQTT_WS_FORCE_LONG_POLLING");
                if (d) {
                    this.$18("MqttChannel", "Websocket disabled, will do long polling only");
                    return
                } else if (!b("MqttUtils").hasWSSupport()) {
                    this.$18("MqttChannel", "Websocket Unavailable, will do long polling only");
                    this.$10.bumpCounter("ws_unavailable_polling");
                    return
                }
            }
            this.$9.run({
                onStateChange: function(a) {
                    c.$19(a)
                },
                onJSError: function(a) {
                    c.$20(a)
                },
                onMessageReceived: function(a, b, d) {
                    c.$21(a, b, d)
                },
                endpoint: this.$1,
                mqttUserName: this.$11,
                subscribedTopics: a,
                extraConnectMessageProvider: function() {
                    return c.$22()
                }
            })
        }
        ;
        c.shutdown = function() {
            this.$9 && this.$9.shutdown()
        }
        ;
        c.publish = function(a, c, d) {
            d === void 0 && (d = {
                qos: 1,
                skipBuffer: !1
            });
            var e;
            d.qos === 0 ? e = this.$23(a, c, d.listener) : e = this.$24(a, c, d);
            b("MqttUtils").promiseDone(e, function() {}, function(a) {
                (a = d.listener) == null ? void 0 : a.onEvent(i.PUBLISH_ERROR)
            });
            return e
        }
        ;
        c.$23 = function(a, b, c) {
            return this.$25(a, b, 0, c)
        }
        ;
        c.$24 = function(a, c, d) {
            var e = {
                resolve: function() {},
                reject: function(a) {}
            }
              , f = new (b("Promise"))(function(a, b) {
                e.resolve = a,
                e.reject = b
            }
            )
              , h = g.random();
            a = {
                topic: a,
                payload: c,
                options: d,
                ack: e,
                publishToken: h,
                timeoutId: null
            };
            if (d.skipBuffer)
                if (this.$9.connectionState() === "Connecting") {
                    this.$13.push(a);
                    (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED)
                } else
                    this.$26(a);
            else {
                a.timeoutId = this.$27(h);
                this.$14.set(h, a);
                (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED);
                this.$28(a)
            }
            return f
        }
        ;
        c.$26 = function(a) {
            b("MqttUtils").promiseDone(this.$25(a.topic, a.payload, a.options.qos, a.options.listener), function() {
                a.ack.resolve()
            }, function(b) {
                a.ack.reject(b)
            })
        }
        ;
        c.$28 = function(a) {
            var c = this;
            b("MqttUtils").promiseDone(this.$25(a.topic, a.payload, a.options.qos, a.options.listener), function() {
                return c.$29(a)
            }, function(a) {})
        }
        ;
        c.$25 = function(a, c, d, e) {
            var f = this, g, h, j = this.getConnectionState(), k = Date.now();
            !this.$9.canPublish() && this.$12 && this.$12.canPublish() ? (g = this.$12.publish(a, c, d),
            h = "lp",
            e != null && (g = g.then(function() {
                return e.onEvent(i.SENT)
            })),
            this.$10.bumpCounter("try_publish_lp")) : (g = this.$9.publish(a, c, d, e),
            h = "ws",
            this.$10.bumpCounter("try_publish_ws"));
            b("promiseDone")(g, function() {
                f.$10.eventLogOutgoingPublish({
                    sessionID: f.$9.getSessionId(),
                    topic: a,
                    qos: d,
                    payloadSizeBytes: c.length * 2,
                    success: !0,
                    protocol: h,
                    errorMessage: null,
                    connectionState: j,
                    startTime: k
                })
            }, function(b) {
                f.$10.eventLogOutgoingPublish({
                    sessionID: f.$9.getSessionId(),
                    topic: a,
                    qos: d,
                    payloadSizeBytes: c.length * 2,
                    success: !1,
                    protocol: h,
                    errorMessage: b.toString(),
                    connectionState: j,
                    startTime: k
                })
            });
            return g
        }
        ;
        c.subscribe = function(a, b) {
            var c = this;
            this.$9.subscribe(a);
            var d = this.$8.get(a);
            !d ? (d = [b],
            this.$8.set(a, d)) : d.push(b);
            return function() {
                var d = c.$8.get(a) || [];
                d = d.filter(function(a) {
                    return a !== b
                });
                c.$8.set(a, d);
                d.length === 0 && c.unsubscribeAll(a)
            }
        }
        ;
        c.subscribeChannelEvents = function(a) {
            this.$3.push(a)
        }
        ;
        c.unsubscribeChannelEvents = function(a) {
            a = this.$3.indexOf(a);
            a > -1 && this.$3.splice(a, 1)
        }
        ;
        c.registerExtraConnectPayloadProvider = function(a) {
            var b = this;
            this.$18("MqttChannel", "registerExtraConnectPayloadProvider called");
            this.$4.add(a);
            if (this.$9.isRunning()) {
                a = a.getPublishMessages();
                a.forEach(function(a) {
                    b.publish(a.topic, a.payload, {
                        qos: a.qos,
                        skipBuffer: !0
                    })
                })
            }
        }
        ;
        c.unregisterExtraConnectPayloadProvider = function(a) {
            this.$4["delete"](a)
        }
        ;
        c.unsubscribeAll = function(a) {
            this.$9.unsubscribe(a),
            this.$8["delete"](a)
        }
        ;
        c.getConnectionState = function() {
            return this.$5
        }
        ;
        c.getLongPollingStatus = function() {
            return this.$7
        }
        ;
        c.getEndpoint = function() {
            return this.$1
        }
        ;
        c.addHook = function(a) {
            this.$9.addHook(a)
        }
        ;
        c.removeHook = function(a) {
            this.$9.removeHook(a)
        }
        ;
        c.testOnlyMessageReceived = function(a, b) {
            this.$21(a, b, -1)
        }
        ;
        c.$30 = function(a) {
            var b = this.$14.get(a);
            b != null && b.timeoutId != null && g.clearTimeout(b.timeoutId);
            this.$14["delete"](a)
        }
        ;
        c.$27 = function(a) {
            var b = this;
            a = g.setTimeout(function(a) {
                var c = b.$14.get(a);
                if (!c)
                    return;
                var d = c.topic;
                b.$10.bumpCounter("publish_timeout." + d);
                b.$10.debugTrace("publish_timeout", "Timeout publishing topic: " + d + " publishToken: " + a);
                b.$10.eventLogPublishTimeout({
                    topic: d
                });
                b.$30(a);
                c.ack.reject(new Error("Publish Timed Out"))
            }, j, a);
            return a
        }
        ;
        c.$29 = function(a) {
            var b = a.publishToken
              , c = this.$14.get(b);
            if (!c)
                return;
            this.$30(b);
            a.ack.resolve();
            this.$10.debugTrace("publish_success", "Topic: " + a.topic + " publishToken: " + a.publishToken);
            this.$10.bumpCounter("publish_success." + a.topic)
        }
        ;
        c.$21 = function(a, b, c) {
            var d = this.$8.get(a);
            this.$10.eventLogIncomingPublish({
                sessionID: this.$9.getSessionId(),
                topic: a,
                connectionState: this.getConnectionState(),
                qos: c,
                payloadSizeBytes: b.length * 2
            });
            if (!d)
                this.$10.debugTrace("_onMessageReceived", a + " being dropped, no listeners");
            else
                for (var c = d, a = Array.isArray(c), d = 0, c = a ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var e;
                    if (a) {
                        if (d >= c.length)
                            break;
                        e = c[d++]
                    } else {
                        d = c.next();
                        if (d.done)
                            break;
                        e = d.value
                    }
                    e = e;
                    try {
                        e(b)
                    } catch (a) {
                        this.$10.logError(a, "Listener exception"),
                        this.$10.bumpCounter("listener_error")
                    }
                }
        }
        ;
        c.$20 = function(a) {
            if (g.genGk(h.mqtt_ws_polling_enabled)) {
                a.isRecoverable ? this.$10.bumpCounter("recoverable_error_skipped") : this.$10.bumpCounter("unrecoverable_error_skipped");
                return
            }
            a.isRecoverable ? this.$10.bumpCounter("recoverable_error_not_skipped") : this.$10.bumpCounter("unrecoverable_error_not_skipped");
            this.$31(a)
        }
        ;
        c.$32 = function(a) {
            this.$31(a)
        }
        ;
        c.$31 = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                e.onJSError && e.onJSError(a)
            }
        }
        ;
        c.$33 = function() {
            var a = this;
            this.$13.forEach(function(b) {
                a.$26(b)
            });
            this.$13 = [];
            this.$14.forEach(function(b, c, d) {
                a.$28(b)
            })
        }
        ;
        c.$19 = function(a) {
            a === "Connecting" ? (this.$13.forEach(function(a) {
                a.ack.reject(new Error("Client Reconnecting"))
            }),
            this.$13 = []) : a === "TransportConnected" && this.$33(),
            this.$18("_changeState", "Connection state = " + a),
            this.$34(a, this.$7)
        }
        ;
        c.$35 = function(a, b) {
            this.$12 && this.$12.canPublish() && this.$33(),
            this.$18("_changeLPStatus", "LP status = " + a + ", LP Request status = " + b),
            this.$34(this.$6, a)
        }
        ;
        c.$34 = function(a, b) {
            var c = this.$9.mqttStateFromConnectionState(a);
            this.$12 && this.$12.canPublish() && (c = "Connected");
            this.$6 = a;
            (c !== this.$5 || b != this.$7) && (this.$5 = c,
            this.$7 = b,
            this.$36(c))
        }
        ;
        c.$36 = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                e.onMQTTStateChanged(a)
            }
        }
        ;
        c.$22 = function() {
            var a = this
              , b = [];
            this.$4.forEach(function(c) {
                try {
                    c = c.getPublishMessages();
                    Array.prototype.push.apply(b, c)
                } catch (b) {
                    a.$10.logError(b, "ConnectPayload provider exception"),
                    a.$10.bumpCounter("connectPayloadProvider_error")
                }
            });
            return b
        }
        ;
        c.$17 = function() {
            var a = this;
            g.genGk(h.mqtt_ws_polling_enabled) && this.$2 && this.$2 != "" && b("requireDeferred")("MqttLongPollingRunner").onReady(function(b) {
                b = new b(a.$2,a.$11,a.$9.hasFatal(),a.$9.hasConnectSuccess(),function(b, c, d) {
                    return a.$21(b, c, d)
                }
                ,function() {
                    return Array.from(a.$8.keys())
                }
                ,function() {
                    return a.$22()
                }
                ,function(b) {
                    a.$32(b)
                }
                ,function(b, c) {
                    a.$35(b, c)
                }
                );
                b.start();
                a.$9.addHook(b);
                b.addHook(a.$15);
                a.$12 = b;
                a.$10.debugTrace("MqttChannel", "longPollingRunner loaded")
            })
        }
        ;
        c.$18 = function(a, b) {
            this.$10.debugTrace(a, "Mqtt channel: " + b)
        }
        ;
        c.setForegroundState = function(a) {
            this.$11 && this.$11.setForegroundState(a)
        }
        ;
        c.setChatVisibility = function(a) {
            this.$11 && this.$11.setChatVisibility(a)
        }
        ;
        c.getEndpointCapabilities = function() {
            return this.$11.getEndpointCapabilities()
        }
        ;
        c.setEndpointCapabilities = function(a) {
            this.$11.setEndpointCapabilities(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttLogger", ["BanzaiODS", "ChannelClientID", "FantailLogger", "FBLogger", "Log", "LogHistory", "MqttEnv", "MqttUnifiedClientConnectFalcoEvent", "MqttUnifiedClientDisconnectFalcoEvent", "MqttUnifiedClientIncomingPublishFalcoEvent", "MqttUnifiedClientOutgoingPublishFalcoEvent", "MqttUtils", "MqttWsClientTypedLoggerLite", "Random", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttWsClientTypedLoggerLite").log
      , i = b("Random").coinflip
      , j = "mqtt_client"
      , k = 100
      , l = 5e3
      , m = null
      , n = {
        CONNECT: "mqtt_client_connect",
        DISCONNECT: "mqtt_client_disconnect",
        PUBLISH: "mqtt_client_publish",
        CLIENT_ERROR: "mqtt_client_error",
        PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
        SOCKET_DISCONNECT: "mqtt_protocol_error"
    }
      , o = {
        CONNECT: "connect",
        DISCONNECT: "disconnect",
        OUTGOING_PUBLISH: "outgoing_publish",
        INCOMING_PUBLISH: "incoming_publish"
    };
    a = function() {
        a.getInstance = function() {
            m || (m = new a());
            return m
        }
        ;
        function a() {
            this.$1 = b("LogHistory").getInstance(j),
            this.$2 = 0,
            this.$3 = b("gkx")("778292"),
            this.$4 = Date.now(),
            this.$5 = b("ChannelClientID").getID()
        }
        var c = a.prototype;
        c.setAppId = function(a) {
            this.$2 === 0 && (this.$2 = a)
        }
        ;
        c.eventLogConnect = function(a) {
            var c = a.sessionID
              , d = a.connectionStatus
              , e = a.connectionState
              , f = a.ackReceived
              , h = a.duration
              , i = a.hostname
              , j = a.attemptNumber;
            a.failTotal;
            a.successTotal;
            var k = a.subscribedTopics
              , l = a.publishes
              , m = a.errorCode;
            a = a.errorMessage;
            var p = d ? "success" : "failed";
            this.bumpCounter(n.CONNECT + "." + p);
            p = {
                device_id: this.$5,
                session_id: c,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                connection_status: d,
                duration: h,
                hostname: i,
                feature_availability: b("MqttUtils").getWSAvailability(),
                attempt_number: j,
                subscribed_topics: k,
                publishes: l,
                error_code: m,
                error_message: a
            };
            var q = {
                event_type: o.CONNECT,
                acked: f,
                connection_state: e,
                client_type: "WEBSOCKET",
                duration: h,
                error: a,
                session_id: c
            };
            this.$6(n.CONNECT, p);
            this.$7(function() {
                b("MqttUnifiedClientConnectFalcoEvent").log(function() {
                    return q
                })
            })
        }
        ;
        c.eventLogPull = function(a) {
            var b = a.pullEventName
              , c = a.sessionID
              , d = a.status
              , e = a.duration
              , f = a.hostname;
            a = a.errorMessage;
            c = {
                device_id: this.$5,
                session_id: c,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                connection_status: d,
                duration: e,
                hostname: f,
                error_message: a
            };
            this.$6(b, c)
        }
        ;
        c.eventLogPullFinish = function(a) {
            var b = a.pullEventName
              , c = a.sessionID
              , d = a.duration
              , e = a.errorMessage
              , f = a.publishReceived;
            a = a.publishSent;
            c = {
                device_id: this.$5,
                session_id: c,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                duration: d,
                error_message: e,
                publish_received: f,
                publish_sent: a
            };
            this.$6(b, c)
        }
        ;
        c.eventLogDisconnect = function(a) {
            var c = a.sessionID
              , d = a.errorCode
              , e = a.errorMessage;
            a = a.duration;
            this.bumpCounter(n.DISCONNECT);
            d = {
                device_id: this.$5,
                session_id: c,
                href: window.location.hostname,
                duration: a,
                error_code: d,
                error_message: e
            };
            var f = {
                event_type: o.DISCONNECT,
                connection_state: "Disconnected",
                client_type: "WEBSOCKET",
                duration: a,
                error: e,
                session_id: c
            };
            this.$6(n.DISCONNECT, d);
            this.$7(function() {
                b("MqttUnifiedClientDisconnectFalcoEvent").log(function() {
                    return f
                })
            })
        }
        ;
        c.eventLogOutgoingPublish = function(a) {
            var c = a.sessionID
              , d = a.topic
              , e = a.qos
              , f = a.payloadSizeBytes
              , g = a.success
              , h = a.protocol
              , j = a.errorMessage
              , k = a.connectionState;
            a = a.startTime;
            this.bumpCounter(n.PUBLISH + "." + d);
            h = {
                device_id: this.$5,
                href: window.location.hostname,
                topic: d,
                qos: e,
                payload_size_bytes: f,
                success: g ? 1 : 0,
                protocol: h,
                error_message: j
            };
            var m = {
                event_type: o.OUTGOING_PUBLISH,
                session_id: c,
                topic: d,
                client_type: "WEBSOCKET",
                connection_state: k,
                qos: e,
                acked: e == 1 ? g : null,
                duration: Date.now() - a,
                error: j,
                payload_size: f
            };
            i(l) && this.$6(n.PUBLISH, h, l);
            this.$7(function() {
                b("MqttUnifiedClientOutgoingPublishFalcoEvent").log(function() {
                    return m
                })
            })
        }
        ;
        c.eventLogIncomingPublish = function(a) {
            var c = a.sessionID
              , d = a.topic
              , e = a.connectionState
              , f = a.qos;
            a = a.payloadSizeBytes;
            var g = {
                event_type: o.INCOMING_PUBLISH,
                session_id: c,
                topic: d,
                client_type: "WEBSOCKET",
                connection_state: e,
                qos: f,
                payload_size: a
            };
            this.$7(function() {
                b("MqttUnifiedClientIncomingPublishFalcoEvent").log(function() {
                    return g
                })
            })
        }
        ;
        c.logError = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    b("FBLogger")(j).catching(a).mustfix(c),
                    d.$8(b("FantailLogger").error, c)
                } catch (a) {}
            })
        }
        ;
        c.eventLogPublishTimeout = function(a) {
            a = a.topic;
            a = {
                device_id: this.$5,
                href: window.location.hostname,
                topic: a
            };
            this.$6(n.PUBLISH_TIMEOUT, a)
        }
        ;
        c.eventLogMiscellaneousError = function(a) {
            a = a.errorMessage;
            a = {
                device_id: this.$5,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                error_message: a,
                time_passed: Date.now() - this.$4
            };
            this.$6(n.CLIENT_ERROR, a)
        }
        ;
        c.logIfLoggedOut = function() {
            if (!b("gkx")("1186990") || g.isUserLoggedInNow())
                return;
            var a = {
                logged_in: g.isUserLoggedInNow(),
                href: window.location.href,
                error_message: "Not logged in",
                time_passed: Date.now() - this.$4
            };
            this.$6(n.CLIENT_ERROR, a)
        }
        ;
        c.logErrorWarn = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    b("FBLogger")(j).catching(a).warn(c),
                    d.$8(b("FantailLogger").warn, c)
                } catch (a) {}
            })
        }
        ;
        c.logWarn = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    d.$1.warn(a, c),
                    d.$8(b("FantailLogger").warn, c)
                } catch (a) {}
            })
        }
        ;
        c.debugTrace = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    d.$1.debug(a, c),
                    d.$8(b("FantailLogger").debug, c)
                } catch (a) {}
            })
        }
        ;
        c.bumpCounter = function(a) {
            var c = this;
            if (!i(k))
                return;
            g.scheduleLoggingCallback(function() {
                c.$2 !== 0 && b("BanzaiODS").bumpEntityKey(2966, "mqtt_ws_client", c.$2 + "." + a, k),
                b("BanzaiODS").bumpEntityKey(2966, "mqtt_ws_client", a, k)
            })
        }
        ;
        c.$6 = function(a, c, d) {
            var e = this;
            g.scheduleLoggingCallback(function() {
                c.event_type = a;
                c.app_id = e.$2;
                c.online = e.$9();
                var f = JSON.stringify(c);
                e.$1.log(a, f, {
                    weight: d
                });
                a !== n.DISCONNECT && h(c);
                e.$8(b("FantailLogger").info, f)
            })
        }
        ;
        c.$7 = function(a) {
            b("gkx")("1272991") && g.scheduleLoggingCallback(a)
        }
        ;
        c.$8 = function(a, b) {
            g.scheduleLoggingCallback(function() {})
        }
        ;
        c.$9 = function() {
            return window.navigator && window.navigator.onLine !== void 0 ? window.navigator.onLine : !1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttEnvInitializer", ["CurrentUser", "JSScheduler", "MqttEnv", "MqttLogger", "Random", "WebStorage", "clearTimeout", "gkx", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("MqttEnv").MqttGkNames, i = b("MqttEnv").Env, j = "mqtt:", k = {
        genGk: function(a) {
            switch (a) {
            case h.mqtt_waterfall_log_client_sampling:
                return b("gkx")("832242");
            case h.mqtt_ws_polling_enabled:
                return !0;
            case h.mqtt_lp_use_fetch:
                return b("gkx")("945829");
            case h.mqtt_fast_lp:
                return b("gkx")("1001007");
            case h.mqtt_lp_no_delay:
                return b("gkx")("1066746");
            case h.mqtt_enable_publish_over_polling:
                return b("gkx")("968609");
            default:
                b("MqttLogger").getInstance().logError(new Error("unknown gk"), "Unknown GK value " + a);
                return !1
            }
        },
        useJSScheduler: function(a) {
            return b("gkx")("987139") ? a : null
        },
        initialize: function() {
            i.initialize(b("Random").random, b("CurrentUser").isLoggedInNow, b("clearTimeout"), b("setTimeoutAcrossTransitions"), function() {
                return b("MqttLogger").getInstance()
            }, k.genGk, null, k.useJSScheduler(b("JSScheduler").scheduleNormalPriCallback), k.useJSScheduler(b("JSScheduler").scheduleLoggingPriCallback), function(a, c) {
                var d = (g || (g = b("WebStorage"))).getLocalStorage();
                if (d) {
                    d = d.getItem(j + a);
                    if (d != null)
                        return d
                }
                return c
            }, function(a, c) {
                var d = (g || (g = b("WebStorage"))).getLocalStorage();
                d && (c == null ? d.removeItem(j + a) : d.setItem(j + a, c))
            })
        }
    };
    e.exports = k
}
), null);
__d("PromiseResult", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            var a = this;
            this.promise = new (b("Promise"))(function(b, c) {
                a.$1 = b,
                a.$2 = c
            }
            )
        }
        var c = a.prototype;
        c.resolve = function(a) {
            this.$1(a)
        }
        ;
        c.reject = function(a) {
            this.$2(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttFetchClient", ["Promise", "MqttEnv", "MqttProtocolCodec", "MqttUtils", "PromiseResult"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttProtocolCodec").WireMessage
      , i = b("MqttProtocolCodec").decodeByteMessages
      , j = b("MqttProtocolCodec").MESSAGE_TYPE
      , k = "fetch_pull"
      , l = "fetch_pull_finish"
      , m = "fetch_"
      , n = 6e4
      , o = "action"
      , p = "chunked"
      , q = "send"
      , r = "true"
      , s = 5
      , t = 20
      , u = 10
      , v = 5e3;
    a = function() {
        function a() {
            this.$1 = "",
            this.$2 = g.getLoggerInstance(),
            this.$3 = 0,
            this.$4 = "",
            this.$6 = function() {}
            ,
            this.$7 = function(a) {}
            ,
            this.$8 = function() {}
            ,
            this.$9 = function(a) {}
            ,
            this.$10 = 0,
            this.$11 = 0,
            this.$12 = 0,
            this.$13 = 0,
            this.$14 = "Ready",
            this.$15 = [],
            this.$16 = [],
            this.$17 = null,
            this.$18 = !1,
            this.$19 = 0
        }
        a.isSupported = function() {
            return typeof fetch === "function"
        }
        ;
        var c = a.prototype;
        c.run = function(a, c, d, e, f, g, h, i) {
            this.$1 = b("MqttUtils").endpointWithSessionId(a, c),
            this.$3 = c,
            this.$4 = d,
            this.$5 = e,
            this.$6 = f,
            this.$7 = g,
            this.$8 = h,
            this.$9 = i,
            this.$20()
        }
        ;
        c.isTopicSupported = function(a) {
            return !0
        }
        ;
        c.publish = function(a, c) {
            if (this.$14 !== "ReceivingData") {
                this.$2.bumpCounter(m + "publish." + a + ".invalidstate");
                return b("Promise").reject("not connected")
            } else {
                this.$2.bumpCounter(m + "publish." + a + ".publish");
                var d = new (b("PromiseResult"))();
                a = {
                    topic: a,
                    payload: c,
                    promiseResult: d
                };
                this.$15.push(a);
                this.$21();
                return d.promise
            }
        }
        ;
        c.abort = function() {
            this.$6 = function() {}
            ,
            this.$7 = function(a) {}
            ,
            this.$8 = function() {}
            ,
            this.$9 = function(a) {}
        }
        ;
        c.$22 = function(a) {
            var b = this;
            a.forEach(function(a) {
                b.$2.bumpCounter(m + "publish." + a.topic + ".resolved"),
                a.promiseResult.resolve()
            });
            this.$12 += a.length
        }
        ;
        c.$23 = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.$2.bumpCounter(m + "publish." + a.topic + ".rejected"),
                a.promiseResult.reject(b)
            })
        }
        ;
        c.$24 = function(a, b, c, d) {
            var e = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request failed. Publishes:" + e + ", retry:" + c);
            this.$2.bumpCounter(m + "publish_request_failed");
            this.$14 != "ReceivingData" || c === s ? (this.$23(a, d),
            this.$18 = !1,
            this.$2.bumpCounter(m + "publish_request_failed_final"),
            this.$21()) : this.$25(a, b, c + 1)
        }
        ;
        c.$26 = function(a, b, c, d) {
            if (!d.ok) {
                this.$2.bumpCounter(m + "publish_request_failed.http." + d.status);
                if (d.status === 409) {
                    this.$19++;
                    if (this.$19 >= u) {
                        this.$2.bumpCounter(m + "409_reset");
                        this.$27(new Error("Too many 409 errors"));
                        return
                    }
                }
                this.$24(a, b, c, this.$28(d));
                return
            }
            this.$2.bumpCounter(m + "publish_request_success");
            b = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request success. Publishes:" + b + ", retry:" + c);
            this.$22(a);
            this.$18 = !1;
            this.$21()
        }
        ;
        c.$21 = function() {
            if (this.$14 != "ReceivingData")
                return;
            if (this.$18)
                return;
            if (this.$15.length == 0 && this.$16.length == 0)
                return;
            this.$18 = !0;
            var a = this.$15.slice(0, t);
            this.$15 = this.$15.slice(t, this.$15.length);
            clearTimeout(this.$17);
            this.$17 = null;
            var b = this.$16.slice(0, t);
            this.$16 = this.$16.slice(t, this.$16.length);
            this.$25(a, b, 0)
        }
        ;
        c.$25 = function(a, c, d) {
            var e = this
              , f = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request sent. Publishes:" + f + ", retry:" + d);
            f = b("MqttUtils").endpointWithExtraParameter(this.$1, o, q);
            var h = a.map(function(a) {
                return {
                    topic: a.topic,
                    payload: a.payload,
                    qos: 0,
                    messageId: g.random()
                }
            });
            h = this.$5.gen(this.$3, [], h, c);
            this.$2.bumpCounter(m + "publish_request");
            b("MqttUtils").promiseDoneWithTimeout(fetch(f, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                referrer: "no-referrer",
                body: h,
                keepalive: !1
            }), function(b) {
                return e.$26(a, c, d, b)
            }, function(b) {
                return e.$24(a, c, d, b)
            }, n)
        }
        ;
        c.$29 = function(a) {
            a = a.message;
            this.$2.debugTrace("FetchClient", "Fetch request failed with error:" + a);
            this.$9(a);
            this.$30(!1, a);
            this.$2.bumpCounter(m + "error");
            this.$14 = "Error"
        }
        ;
        c.$31 = function(a) {
            var b = this;
            this.$2.debugTrace("FetchClient", "Fetch response data received");
            a = i(new Uint8Array(a));
            a = a.messages;
            var c = a.filter(function(a) {
                return a.messageType === j.PINGREQ
            });
            a = a.filter(function(a) {
                return a.messageType === j.PUBLISH
            }).map(function(a) {
                if (!(a instanceof h.Publish))
                    return {};
                a = a;
                a.qos === 1 && a.messageIdentifier != null && (b.$16.push(a.messageIdentifier),
                b.$17 == null && (b.$17 = g.setTimeout(function() {
                    b.$21()
                }, v)));
                return {
                    topic: a.topic,
                    payload: a.payloadMessage.payloadString,
                    qos: a.qos
                }
            });
            for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var k;
                if (e) {
                    if (f >= d.length)
                        break;
                    k = d[f++]
                } else {
                    f = d.next();
                    if (f.done)
                        break;
                    k = f.value
                }
                k = k;
                this.$2.bumpCounter(m + "response_" + k.topic)
            }
            a && a.length > 0 && (this.$13 += a.length,
            this.$7(a));
            c && c.length > 0 && this.$32()
        }
        ;
        c.$32 = function() {
            this.$2.debugTrace("FetchClient", "Got server ping request"),
            this.$2.bumpCounter(m + "ping")
        }
        ;
        c.$27 = function(a) {
            this.$2.debugTrace("FetchClient", "Fetch request ended: " + a.toString()),
            this.$2.bumpCounter(m + "done"),
            this.$33(a.message),
            this.$8(),
            this.$14 = "Done"
        }
        ;
        c.$34 = function(a, c, d) {
            var e = this;
            if (d !== null && d !== void 0)
                try {
                    this.$31(d)
                } catch (a) {
                    this.$27(a);
                    this.$2.bumpCounter(m + "dataDecodeException");
                    return
                }
            if (c) {
                this.$27(new Error("EOF"));
                return
            }
            b("MqttUtils").promiseDone(a.read(), function(c) {
                var b = c.done;
                c = c.value;
                return e.$34(a, b, c)
            }, function(a) {
                return e.$27(a)
            })
        }
        ;
        c.$35 = function(a) {
            if (!a.ok) {
                this.$2.bumpCounter(m + "error.http." + a.status);
                this.$29(this.$28(a));
                return
            }
            a = a.body;
            if (!a) {
                this.$29(new Error("Empty body"));
                return
            }
            a = a.getReader();
            this.$6();
            this.$2.bumpCounter(m + "success");
            this.$30(!0, null);
            this.$11 = Date.now();
            this.$14 = "ReceivingData";
            this.$2.debugTrace("FetchClient", "Fetch request success");
            this.$34(a, !1, null)
        }
        ;
        c.$33 = function(a) {
            this.$2.eventLogPullFinish({
                pullEventName: l,
                sessionID: this.$3,
                duration: Date.now() - this.$11,
                errorMessage: a,
                publishReceived: this.$13,
                publishSent: this.$12
            })
        }
        ;
        c.$30 = function(a, b) {
            this.$2.eventLogPull({
                pullEventName: k,
                sessionID: this.$3,
                status: a,
                duration: Date.now() - this.$10,
                hostname: this.$1,
                errorMessage: b
            })
        }
        ;
        c.$20 = function() {
            var a = this;
            if (this.$14 != "Ready")
                return;
            this.$2.debugTrace("FetchClient", "Sending fetch request");
            this.$2.bumpCounter(m + "request");
            this.$10 = Date.now();
            var c = b("MqttUtils").endpointWithExtraParameter(this.$1, p, r);
            b("MqttUtils").promiseDoneWithTimeout(fetch(c, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                referrer: "no-referrer",
                body: this.$4,
                keepalive: !1
            }), function(b) {
                return a.$35(b)
            }, function(b) {
                return a.$29(b)
            }, n)
        }
        ;
        c.$28 = function(a) {
            return new Error("Http error, status=" + a.status)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttLongPollingClient", ["Promise", "MqttEnv", "MqttProtocolCodec", "XHRRequest", "getCrossOriginTransport"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttProtocolCodec").WireMessage
      , i = b("MqttProtocolCodec").decodeByteMessages
      , j = 120 * 1e3
      , k = "simple_pull";
    a = function() {
        function a() {
            this.$3 = "",
            this.$4 = 0,
            this.$2 = g.getLoggerInstance(),
            this.$1 = "Ready",
            this.$5 = "",
            this.$7 = function() {}
            ,
            this.$8 = function(a) {}
            ,
            this.$9 = function() {}
            ,
            this.$10 = function(a) {}
            ,
            this.$11 = 0,
            this.$12 = null,
            this.$13 = new Set(["/t_ms", "/messenger_sync_get_diffs", "/messenger_sync_create_queue", "/webrtc", "/rtc_multi"])
        }
        var c = a.prototype;
        c.run = function(a, b, c, d, e, f, g, h) {
            this.$3 = a,
            this.$4 = b,
            this.$5 = c,
            this.$6 = d,
            this.$7 = e,
            this.$8 = f,
            this.$9 = g,
            this.$10 = h,
            this.$14(this.$5)
        }
        ;
        c.isTopicSupported = function(a) {
            return this.$13.has(a)
        }
        ;
        c.publish = function(a, c) {
            return b("Promise").reject("not supported")
        }
        ;
        c.abort = function() {
            this.$12 != null && this.$12.abort("Disconnected")
        }
        ;
        c.$15 = function(a, b) {
            if (this.$1 === a)
                return;
            this.$1 = a;
            a == "Error" && b != null && this.$10(b)
        }
        ;
        c.$16 = function(a) {
            if (this.$1 != "RequestSend")
                return;
            if (!a) {
                this.$17("EmptyResponse", null);
                return
            }
            this.$7();
            this.$18(!0, null);
            this.$15("ResponseReceived");
            a = i(new Uint8Array(a));
            a = a.messages.filter(function(a) {
                return a instanceof h.Publish
            }).map(function(a) {
                if (a instanceof h.Publish) {
                    a = a;
                    return {
                        topic: a.topic,
                        payload: a.payloadMessage.payloadString,
                        qos: a.qos
                    }
                } else
                    return {}
            });
            this.$8(a);
            this.$9()
        }
        ;
        c.$17 = function(a, b) {
            b = b != null ? b.message : "null";
            this.$2.debugTrace("LongPollingClient Error", "Poll failed with error:" + a + ", errorMsg:" + b);
            this.$18(!1, a + ":" + b);
            this.$15("Error", a)
        }
        ;
        c.$18 = function(a, b) {
            this.$2.eventLogPull({
                pullEventName: k,
                sessionID: this.$4,
                status: a,
                duration: Date.now() - this.$11,
                hostname: this.$3,
                errorMessage: b
            })
        }
        ;
        c.$14 = function(a) {
            var c = this;
            if (this.$1 != "Ready" || this.$12)
                return;
            try {
                this.$11 = Date.now(),
                this.$12 = new (b("XHRRequest"))(this.$3).setResponseType("arraybuffer").setRawData(a).setTransportBuilder(b("getCrossOriginTransport").withCredentials).setResponseHandler(function(a) {
                    return c.$16(a)
                }).setNetworkFailureHandler(function(a) {
                    c.$17("Network", a)
                }).setErrorHandler(function(a) {
                    c.$17("Error", a)
                }).setAbortHandler(function(a) {
                    c.$17("Abort", null)
                }).setTimeoutHandler(function() {
                    c.$17("Timeout", null)
                }).setTimeout(j).send(),
                this.$15("RequestSend")
            } catch (a) {
                this.$17("Error", a)
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("exponentialBackoff", ["MqttEnv"], (function(a, b, c, d, e, f) {
    var g = b("MqttEnv").Env;
    function a(a, b) {
        b === void 0 && (b = null);
        var c = null
          , d = 0;
        function e() {
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                f[h] = arguments[h];
            var i = function() {
                a.apply(b, f)
            };
            if (c === null) {
                var j = Math.max(0, Math.pow(2, Math.min(d, 6)) * (1e3 + g.random() * 100) - 2e3);
                c = g.setTimeout(function() {
                    i(),
                    c = null
                }, j)
            }
            d++
        }
        e.reset = function() {
            d = 0,
            c != null && (g.clearTimeout(c),
            c = null)
        }
        ;
        e.isPending = function() {
            return c != null
        }
        ;
        return e
    }
    e.exports = a
}
), null);
__d("MqttLongPollingRunner", ["Promise", "MqttEnv", "MqttFetchClient", "MqttLongPollingClient", "MqttLongPollingHookCollection", "MqttTypes", "MqttUtils", "exponentialBackoff"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttEnv").MqttGkNames
      , i = b("MqttTypes").MqttChannelError
      , j = 4
      , k = 1e3
      , l = 3e3
      , m = "mqtt_should_longpoll"
      , n = "last_lp"
      , o = "yes"
      , p = "no";
    a = function() {
        function a(a, c, d, e, f, j, k, l, m) {
            var n = this;
            this.$23 = function() {
                try {
                    if (!n.$29())
                        return;
                    var a = n.$30();
                    n.$14 = a;
                    var c = n.$9()
                      , d = n.$10();
                    c = c.filter(function(b) {
                        return a.isTopicSupported(b)
                    });
                    d = d.filter(function(b) {
                        return a.isTopicSupported(b.topic)
                    });
                    if (c.length == 0 && d.length == 0) {
                        n.$5.debugTrace("LongPollingRunner", "Poll skipped, nothing to do");
                        n.$14 = null;
                        g.setTimeout(function() {
                            n.$23()
                        }, 1e3);
                        return
                    }
                    var e = b("MqttUtils").generateSessionId();
                    a.run(n.$6, e, n.$7.gen(e, c, d), n.$7, function() {
                        return n.$31()
                    }, function(a) {
                        return n.$32(a)
                    }, function() {
                        return n.$33()
                    }, function(a) {
                        return n.$34(a)
                    });
                    n.$19.onPollRequestSent();
                    e = c.join(",");
                    c = d.map(function(a) {
                        return a.topic
                    }).join(",");
                    n.$5.debugTrace("LongPollingRunner", "Making a poll request to " + n.$6 + ". SubscribedTopics:" + e + ". Publishes:" + c)
                } catch (a) {
                    a && n.$5.logErrorWarn(a, "lp_js_error"),
                    n.$11(new i(!1,"js error lp",a)),
                    n.$34("lp_js_error")
                }
            }
            ;
            this.$6 = a;
            this.$7 = c;
            this.$1 = e;
            this.$2 = 0;
            this.$3 = d;
            this.$4 = b("MqttUtils").hasWSSupport();
            this.$5 = g.getLoggerInstance();
            this.$8 = f;
            this.$9 = j;
            this.$10 = k;
            this.$11 = l;
            this.$12 = m;
            this.$13 = !1;
            this.$14 = null;
            this.$15 = "LPInactive";
            this.$16 = "NotSent";
            this.$17 = 0;
            this.$19 = new (b("MqttLongPollingHookCollection"))();
            this.$18 = new (b("exponentialBackoff"))(this.$23,this);
            this.$20 = 0;
            this.$21 = p;
            a = g.genGk(h.mqtt_lp_use_fetch);
            c = b("MqttFetchClient").isSupported();
            a ? this.$5.bumpCounter("fetch_gk_pass") : this.$5.bumpCounter("fetch_gk_fail");
            c ? this.$5.bumpCounter("fetch_api_supported") : this.$5.bumpCounter("fetch_api_not_supported");
            this.$22 = a && c
        }
        var c = a.prototype;
        c.addHook = function(a) {
            this.$19.addHook(a)
        }
        ;
        c.start = function() {
            var a = this;
            this.$21 = g.configRead(n, p);
            this.$5.debugTrace("LongPollingRunner", "Runner loaded, last status " + this.$21);
            this.$20 = Date.now();
            this.$23();
            g.setTimeout(function() {
                a.$23()
            }, k + 100);
            g.setTimeout(function() {
                a.$23()
            }, l + 100)
        }
        ;
        c.canPublish = function() {
            return this.$15 === "LPActive" && this.$16 === "ReceivingData"
        }
        ;
        c.publish = function(a, c, d) {
            return g.genGk(h.mqtt_enable_publish_over_polling) && (this.$14 && this.$14.isTopicSupported(a)) ? this.$14.publish(a, c) : b("Promise").reject()
        }
        ;
        c.onConnectAttempt = function() {}
        ;
        c.onConnectFailure = function() {
            this.$2++,
            this.$23()
        }
        ;
        c.onConnected = function() {}
        ;
        c.onConnectSuccess = function() {
            this.$1 = !0,
            g.configWrite(n, null)
        }
        ;
        c.onConnectionLost = function() {}
        ;
        c.onSubscribe = function(a) {}
        ;
        c.onUnsubscribe = function(a) {}
        ;
        c.onPublish = function(a) {}
        ;
        c.onMessage = function(a) {}
        ;
        c.onWSFatal = function() {
            this.$3 = !0,
            this.$23()
        }
        ;
        c.getStatus = function() {
            return this.$15
        }
        ;
        c.getRequestStatus = function() {
            return this.$16
        }
        ;
        c.$24 = function(a) {
            a != this.$15 && (this.$5.debugTrace("LongPollingRunner", "status changed to " + a + " from " + this.$15),
            this.$15 = a,
            this.$12(this.$15, this.$16))
        }
        ;
        c.$25 = function(a) {
            if (!this.$22)
                return;
            a !== this.$16 && (this.$5.debugTrace("LongPollingRunner", "request status changed to " + a + " from " + this.$16),
            this.$16 = a,
            this.$12(this.$15, this.$16))
        }
        ;
        c.$26 = function() {
            this.$17 = 0
        }
        ;
        c.$27 = function() {
            this.$17++,
            this.$17 >= j && this.$24("LPError")
        }
        ;
        c.$28 = function() {
            var a = g.genGk(h.mqtt_lp_no_delay)
              , b = g.genGk(h.mqtt_ws_polling_enabled)
              , c = g.genGk(h.mqtt_fast_lp);
            this.$5.debugTrace("LongPollingRunner", "_shouldPoll? pollNow:" + String(a) + " enabled:" + String(b) + " fastPoll:" + String(c) + " hasWSSupport:" + String(this.$4) + " hasSuccess:" + String(this.$1) + " failureCount:" + this.$2 + " wsFatal:" + String(this.$3));
            if (!b)
                return !1;
            if (a) {
                this.$5.bumpCounter(m + ".nd");
                return !0
            }
            if (!this.$4) {
                this.$5.bumpCounter(m + ".na");
                return !0
            }
            if (this.$3) {
                this.$5.bumpCounter(m + ".fatal");
                return !0
            }
            if (this.$1)
                return !1;
            if (c) {
                b = Date.now() - this.$20;
                if (this.$21 === o) {
                    if (this.$2 >= 1)
                        return !0;
                    if (b > k) {
                        this.$5.bumpCounter(m + ".fastdelay");
                        return !0
                    }
                } else if (b > l) {
                    this.$5.bumpCounter(m + ".regulardelay");
                    return !0
                }
            }
            if (this.$2 >= 3) {
                this.$5.bumpCounter(m + ".failure");
                return !0
            }
            return !1
        }
        ;
        c.$29 = function() {
            if (this.$14 != null)
                return !1;
            var a = this.$28();
            !this.$13 && a && (this.$5.bumpCounter("polling_kickin"),
            this.$13 = !0,
            this.$24("LPActive"),
            this.$26());
            this.$13 && !a && (this.$5.bumpCounter("polling_stopped"),
            this.$13 = !1,
            this.$24("LPInactive"),
            this.$26());
            return a
        }
        ;
        c.$30 = function() {
            if (this.$22) {
                this.$5.debugTrace("LongPollingRunner", "Creating polling client using Fetch API");
                return new (b("MqttFetchClient"))()
            } else {
                this.$5.debugTrace("LongPollingRunner", "Creating regular Polling client");
                return new (b("MqttLongPollingClient"))()
            }
        }
        ;
        c.$31 = function() {
            this.$5.debugTrace("LongPollingRunner", "Poll success"),
            this.$19.onPollRequestSuccess(),
            this.$18.reset(),
            this.$24("LPActive"),
            this.$26(),
            g.configWrite(n, o),
            this.$25("ReceivingData")
        }
        ;
        c.$32 = function(a) {
            var b = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$5.debugTrace("LongPollingRunner", "Poll response received, message received:" + b);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.$19.onPollResponse(c.topic);
                this.$8(c.topic, c.payload, c.qos)
            }
        }
        ;
        c.$33 = function() {
            this.$5.debugTrace("LongPollingRunner", "Poll finish"),
            this.$19.onPollFinish(),
            this.$14 && this.$14.abort(),
            this.$14 = null,
            this.$23(),
            this.$25("NotSent")
        }
        ;
        c.$34 = function(a) {
            this.$19.onPollRequestFailed(a),
            this.$14 && this.$14.abort(),
            this.$14 = null,
            this.$18(),
            this.$27(),
            this.$25("NotSent")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
