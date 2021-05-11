if (self.CavalryLogger) {
    CavalryLogger.start_js(["YEhrR"]);
}

__d("XConsentCookieController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/cookie/consent/", {})
}
), null);
__d("DeferredCookie", ["Cookie", "CookieConsent", "SubscriptionList", "XConsentCookieController", "flattenPHPQueryData", "killswitch", "promiseDone", "requireCond", "cr:1697455", "cr:1083116", "cr:1069930", "cr:1083117"], (function(a, b, c, d, e, f) {
    "use strict";
    f.addToQueue = a;
    f.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing = c;
    f.flushAllCookies = d;
    f.removeDefaultInteractionListener = e;
    f.addDefaultInteractionListener = i;
    f.setDefaultInteractionListener = j;
    f.registerCallbackOnCookieFlush = k;
    f.baseInteractionHandler = l;
    f.isValidClick = m;
    f.canEmbedThirdPartyPixel = n;
    f._attachDefaultHandler = o;
    var g, h = new Map();
    a = !0;
    f.shouldAddDefaultListener = a;
    c = null;
    f.defaultHandler = c;
    d = !1;
    f.sentConsentToServer = d;
    e = new (b("SubscriptionList"))();
    f.callbacks = e;
    function a(a, c, d, e, f, i, j) {
        if (!(g || (g = b("CookieConsent"))).isDeferCookies()) {
            f ? b("Cookie").setWithoutChecksIfFirstPartyContext(a, c, d, e, j) : b("Cookie").setWithoutChecks(a, c, d, e, j);
            return
        }
        if (h.has(a))
            return;
        h.set(a, {
            name: a,
            value: c,
            nMilliSecs: d,
            path: e,
            firstPartyOnly: f,
            secure: j
        });
        i && this.addDefaultInteractionListener()
    }
    function c() {
        h.forEach(function(a, c) {
            a.firstPartyOnly ? b("Cookie").setWithoutChecksIfFirstPartyContext(a.name, a.value, a.nMilliSecs, a.path, a.secure) : b("Cookie").setWithoutChecks(a.name, a.value, a.nMilliSecs, a.path, a.secure)
        }),
        b("killswitch")("DEFERREDCOOKIE_EMPTY_COOKIES_BEFORE_CALLBACK") ? ((g || (g = b("CookieConsent"))).setConsented(),
        this.callbacks.fireCallbacks(),
        h.clear()) : (h.clear(),
        (g || (g = b("CookieConsent"))).setConsented(),
        this.callbacks.fireCallbacks()),
        this.removeDefaultInteractionListener()
    }
    function d(a, c) {
        a === void 0 && (a = !1);
        this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();
        var d = {
            accept_consent: a
        };
        c != null && (c = Object.fromEntries(c),
        d = {
            accept_consent: a,
            optouts: c
        });
        a = b("flattenPHPQueryData")(d);
        if (!this.sentConsentToServer) {
            c = b("XConsentCookieController").getURIBuilder().getURI();
            this.sentConsentToServer = !0;
            b("cr:1069930") != null ? b("promiseDone")(b("cr:1069930")(c.toString(), {
                data: a,
                method: "POST"
            }), null, function(a) {
                b("cr:1083117") && b("cr:1083117")("Cookie consent has not been set successfully: " + a.errorMsg, "comet_infra")
            }) : b("cr:1083116") != null && new (b("cr:1083116"))(c).setData(a).send()
        }
    }
    function e() {
        this.shouldAddDefaultListener = !1,
        this.defaultHandler && (window.removeEventListener ? window.removeEventListener("click", this.defaultHandler, !0) : document.detachEvent && document.detachEvent("onclick", this.defaultHandler),
        this.defaultHandler = null)
    }
    function i(a) {
        this.shouldAddDefaultListener && (this.shouldAddDefaultListener = !1,
        this.defaultHandler = a != null ? a : this.baseInteractionHandler.bind(this),
        this._attachDefaultHandler())
    }
    function j(a) {
        this.removeDefaultInteractionListener(),
        this.defaultHandler = a,
        this._attachDefaultHandler()
    }
    function k(a) {
        !(g || (g = b("CookieConsent"))).isDeferCookies() ? a() : this.callbacks.add(a)
    }
    function l(a) {
        var c = a.target;
        if (!(c instanceof HTMLElement))
            return;
        if (a instanceof MouseEvent && !this.isValidClick(a))
            return;
        b("cr:1697455") != null && !b("cr:1697455").isClickNotConsideredConsent(c) && this.flushAllCookies(!1)
    }
    function m(a) {
        return a.which === void 0 ? !0 : a.which == 1
    }
    function n() {
        return (g || (g = b("CookieConsent"))).isCookiesBlocked() || (g || (g = b("CookieConsent"))).isDeferCookies() ? !1 : h.size === 0
    }
    function o() {
        window.addEventListener ? window.addEventListener("click", this.defaultHandler, !0) : document.attachEvent && document.attachEvent("onclick", this.defaultHandler)
    }
}
), null);
__d("XRefererFrameController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/common/referer_frame.php", {})
}
), null);
__d("ControlledReferer", ["Bootloader", "DeferredCookie", "URI", "XRefererFrameController", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI", "lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    f.shouldUseFacebookReferer = h;
    f.useFacebookRefererHtml = a;
    var g;
    function h(a, c, d) {
        if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
            b("Bootloader").loadModules(["BanzaiODS"], function(a) {
                a.bumpEntityKey(2966, "defer_cookies", "block_controlled_referer_iframe")
            }, "ControlledReferer");
            return
        }
        var e = !1;
        function f() {
            if (e)
                return;
            var b = a.contentWindow.location.pathname;
            if (b !== "/intern/common/referer_frame.php" && b !== "/common/referer_frame.php")
                return;
            e = !0;
            a.contentWindow.document.body.style.margin = 0;
            c()
        }
        var h;
        b("isMessengerDotComURI")((g || (g = b("URI"))).getRequestURI()) ? h = b("XRefererFrameController").getURIBuilder().getURI().toString() : b("isOculusDotComURI")((g || (g = b("URI"))).getRequestURI()) ? h = "/common/referer_frame.php" : !b("lowerFacebookDomain").isValidDocumentDomain() ? h = "/intern/common/referer_frame.php" : h = b("XRefererFrameController").getURIBuilder().getURI().toString();
        d == null && b("isWorkplaceDotComURI")((g || (g = b("URI"))).getRequestURI()) && (d = "workplace");
        d && (h += "?fb_source=" + d);
        a.onload = f;
        a.src = h
    }
    function a(a, b, c) {
        h(a, function() {
            a.contentWindow.document.body.innerHTML = b
        }, c)
    }
}
), null);
__d("TrackingPixel", ["Arbiter", "ControlledReferer", "DeferredCookie", "FBLogger"], (function(a, b, c, d, e, f) {
    var g = {
        _iframe: void 0,
        setIFrame: function(a) {
            g._iframe = a
        },
        loadWithNoReferrer: function(a) {
            if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
                b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.", a);
                return
            }
            if (!g._iframe) {
                var c = document.createElement("iframe");
                c.frameBorder = "0";
                c.width = c.height = "1";
                c.style.position = "absolute";
                c.style.top = "-10px";
                b("ControlledReferer").shouldUseFacebookReferer(c, function() {
                    b("Arbiter").inform("TrackingPixel/iframeIsLoaded", null, "persistent")
                });
                document.body != null && document.body.appendChild(c);
                g._iframe = c
            }
            b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded", function() {
                if (g._iframe != void 0) {
                    var b = g._iframe.contentWindow;
                    b = new b.Image();
                    b.src = a
                }
            })
        }
    };
    e.exports = g
}
), null);
__d("AsyncTypedRequest", ["AsyncRequest"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            b = a.call(this, b) || this;
            b.setReplaceTransportMarkers();
            return b
        }
        var c = b.prototype;
        c.promisePayload = function(b) {
            return a.prototype.promisePayload.call(this, b)
        }
        ;
        c.setPayloadHandler = function(b) {
            a.prototype.setPayloadHandler.call(this, b);
            return this
        }
        ;
        return b
    }(b("AsyncRequest"));
    e.exports = a
}
), null);
__d("ClientServiceWorkerMessage", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c
        }
        var b = a.prototype;
        b.sendViaController = function() {
            if (!navigator.serviceWorker || !navigator.serviceWorker.controller)
                return;
            var a = new self.MessageChannel();
            this.$3 && (a.port1.onmessage = this.$3);
            navigator.serviceWorker.controller.postMessage({
                command: this.$1,
                data: this.$2
            }, [a.port2])
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ServiceWorkerRegistration", ["Promise", "BrowserPaymentHandlerConfig", "ClientServiceWorkerMessage", "EventListener", "Run", "promiseDone"], (function(a, b, c, d, e, f) {
    var g = !!navigator.serviceWorker
      , h = {}
      , i = {
        name: "Facebook Pay",
        method: self.location.origin + "/pay"
    };
    function j(a) {
        if (!b("BrowserPaymentHandlerConfig").enabled)
            return;
        (a = a.paymentManager) == null ? void 0 : (a = a.instruments) == null ? void 0 : a.set("Facebook", i)
    }
    function k() {
        var a = navigator.serviceWorker;
        if (!g || !a)
            throw new Error("serviceWorker is not supported in this browser");
        return a
    }
    var l = {
        isSupported: function() {
            return g
        },
        registerWorkerIfUnregisteredAfterDD: function(a) {
            b("Run").onAfterLoad(function() {
                l.registerWorkerIfUnregistered(a)
            })
        },
        registerWorkerIfUnregistered: function(a) {
            if (h[a])
                return h[a];
            var c = k()
              , d = h[a] = new (b("Promise"))(function(d, e) {
                b("promiseDone")(l.getWorkerRegistration(a), function(f) {
                    if (!f) {
                        var g = b("EventListener").listen(window, "message", function(a) {
                            (a == null ? void 0 : (a = a.data) == null ? void 0 : a.command) === "ServiceWorkerInstallError" && e()
                        });
                        b("promiseDone")(b("Promise").resolve(c.register(a, {
                            updateViaCache: "all"
                        })), function() {
                            g.remove(),
                            b("promiseDone")(b("Promise").resolve(c.ready), d)
                        })
                    } else
                        d(f)
                })
            }
            );
            b("promiseDone")(d, function(b) {
                h[a] = null,
                j(b)
            });
            return d
        },
        unregisterControllingWorker: function() {
            return new (b("Promise"))(function(a, c) {
                c = new (b("ClientServiceWorkerMessage"))("unregister",{},function() {
                    a(!0)
                }
                );
                c.sendViaController()
            }
            )
        },
        getWorkerRegistration: function(a) {
            var b = k();
            return b.getRegistration(a)
        },
        isAWorkerActivated: function() {
            return !navigator.serviceWorker || !navigator.serviceWorker.getRegistration ? b("Promise").resolve(!1) : navigator.serviceWorker.getRegistration().then(function(a) {
                return !!(a && a.active)
            })
        }
    };
    e.exports = l
}
), null);
__d("TimeSpentImmediateActiveSecondsLoggerBlue", ["Banzai", "ImmediateActiveSecondsConfig", "ScriptPath"], (function(a, b, c, d, e, f) {
    var g = "immediate_active_seconds"
      , h = {
        signal: !0,
        retry: !0
    }
      , i = b("ImmediateActiveSecondsConfig").sampling_rate
      , j = b("ImmediateActiveSecondsConfig").ias_bucket
      , k = 0;
    function l(a) {
        if (i <= 0)
            return !1;
        a = Math.floor(a / 1e3) % i;
        return a === j
    }
    function a(a) {
        if (a >= k && a - k < 1e3)
            return;
        if (l(a)) {
            var c = {
                activity_time_ms: a,
                last_activity_time_ms: k,
                script_path: b("ScriptPath").getTopViewEndpoint()
            };
            b("Banzai").post(g, c, h)
        }
        k = Math.floor(a / 1e3) * 1e3
    }
    e.exports = {
        maybeReportActiveSecond: a
    }
}
), null);
