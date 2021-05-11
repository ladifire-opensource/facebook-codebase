if (self.CavalryLogger) {
    CavalryLogger.start_js(["P4Wtm"]);
}

__d("SphericalPhotoConstants", [], (function(a, b, c, d, e, f) {
    e.exports = {
        QE_SPHERICAL_PHOTO_UNIVERSE: "spherical_photo",
        QE_WWW_UNIVERSE: "spherical_photo_www_universe",
        QE_WWW_COMPOSER_UNIVERSE: "spherical_photo_www_composer_universe",
        FEED_TRACKING_KEY: "spherical_photo_interaction"
    }
}
), null);
__d("ArgumentError", ["ManagedError"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            return a.call(this, b, c) || this
        }
        return b
    }(b("ManagedError"));
    e.exports = a
}
), null);
__d("flattenObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = {};
        for (var c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (null === d || void 0 === d)
                    continue;
                else
                    typeof d === "string" ? b[c] = d : b[c] = JSON.stringify(d)
            }
        return b
    }
}
), null);
__d("sdk.URI", ["QueryString", "URIAbstractBase"], (function(a, b, c, d, e, f) {
    var g = /\.facebook\.com$/
      , h = {
        serialize: function(a) {
            return a ? b("QueryString").encode(a) : ""
        },
        deserialize: function(a) {
            return a ? b("QueryString").decode(a) : {}
        }
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            return a.call(this, b, h) || this
        }
        var d = c.prototype;
        d.isFacebookURI = function() {
            return g.test(this.getDomain())
        }
        ;
        d.valueOf = function() {
            return this.toString()
        }
        ;
        c.isValidURI = function(a) {
            return b("URIAbstractBase").isValid(a, h)
        }
        ;
        return c
    }(b("URIAbstractBase"));
    e.exports = a
}
), null);
__d("ApiClientUtils", ["ArgumentError", "Assert", "Log", "flattenObject", "sdk.URI", "sprintf"], (function(a, b, c, d, e, f) {
    f.parseCallDataFromArgs = a;
    var g = {
        get: !0,
        post: !0,
        "delete": !0,
        put: !0
    };
    function a(a) {
        var c = a.shift();
        b("Assert").isString(c, "Invalid path");
        !/^https?/.test(c) && c.charAt(0) !== "/" && (c = "/" + c);
        var d = {};
        try {
            c = new (b("sdk.URI"))(c)
        } catch (a) {
            throw new (b("ArgumentError"))(a.message,a)
        }
        a.forEach(function(a) {
            return d[typeof a] = a
        });
        a = (d.string || "get").toLowerCase();
        b("Assert").isTrue(Object.prototype.hasOwnProperty.call(g, a), b("sprintf")("Invalid method passed to ApiClient: %s", a));
        var e = d["function"];
        e || b("Log").warn("No callback passed to the ApiClient");
        d.object && c.addQueryData(b("flattenObject")(d.object));
        var f = c.getQueryData();
        f.method = a;
        return {
            uri: c,
            callback: e,
            params: f
        }
    }
}
), null);
__d("sdk.safelyParseResponse", ["errorCode", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c = function(a, b, c) {
        return h
    }
    ;
    function a(a, d) {
        d === void 0 && (d = null);
        try {
            return a === null ? h : JSON.parse(b("nullthrows")(a))
        } catch (b) {
            return c(b, a, d)
        }
    }
    var h = {
        error: {
            code: 1,
            error_subcode: 1357046,
            message: "Received Invalid JSON reply.",
            type: "http"
        }
    };
    a.ERROR = h;
    a.setErrorHandler = function(a) {
        c = a
    }
    ;
    d = a;
    e.exports = d
}
), null);
__d("ApiBatcher", ["invariant", "ApiClientUtils", "QueryString", "sdk.safelyParseResponse", "whitelistObjectKeys"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 50
      , i = 105440539523;
    a = function() {
        function a(a, b) {
            this.$1 = [],
            this.$2 = [],
            this.$4 = null,
            this.executeRequest = a,
            this.$3 = b
        }
        var c = a.prototype;
        c.scheduleBatchCall = function() {
            var b = this;
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
                d[e] = arguments[e];
            var f = a.prepareBatchParams(d)
              , g = f.body
              , i = f.callback
              , j = f.method
              , k = f.relative_url
              , l = {
                method: j,
                relative_url: k
            };
            g && (l.body = g);
            this.$1.push(l);
            this.$2.push(i);
            this.$1.length == h ? (this.$4 && clearTimeout(this.$4),
            this.$5()) : this.$4 || (this.$4 = setTimeout(function() {
                b.$5()
            }, 0))
        }
        ;
        a.prepareBatchParams = function(a, c) {
            c === void 0 && (c = []);
            a = b("ApiClientUtils").parseCallDataFromArgs(a);
            var d = a.uri
              , e = a.callback;
            a = a.params.method;
            var f, g = d.removeQueryData("method").toString();
            if (a.toLowerCase() == "post") {
                var h = d.getQueryData();
                f = b("QueryString").encode(h);
                h = b("whitelistObjectKeys")(h, c);
                g = d.setQueryData(h).toString()
            }
            return {
                body: f,
                callback: e,
                method: a,
                relative_url: g
            }
        }
        ;
        c.$5 = function() {
            this.$1.length > 0 || g(0, 4698);
            this.$1.length === this.$2.length || g(0, 4699);
            var a = this.$1
              , c = this.$2;
            this.$1 = [];
            this.$2 = [];
            this.$4 = null;
            if (a.length === 1) {
                var d = a[0]
                  , e = c[0]
                  , f = d.body ? b("QueryString").decode(d.body) : null;
                this.executeRequest(d.relative_url, d.method, f, e);
                return
            }
            this.executeRequest("/", "POST", {
                batch: a,
                include_headers: !1,
                batch_app_id: this.$3 || i
            }, function(a) {
                Array.isArray(a) ? a.forEach(function(a, d) {
                    c[d](b("sdk.safelyParseResponse")(a && a.body))
                }) : c.forEach(function(a) {
                    return a({
                        error: {
                            message: "Fatal: batch call failed."
                        }
                    })
                })
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("RequestConstants", ["errorCode"], (function(a, b, c, d, e, f, g) {
    a = {
        code: 1,
        error_subcode: 1357045,
        message: "unknown error (empty response)",
        type: "http",
        status: 0
    };
    f.PARSE_ERROR_TEMPLATE = a
}
), null);
__d("CORSRequest", ["Log", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"], (function(a, b, c, d, e, f) {
    function g(a, c) {
        if (!self.XMLHttpRequest)
            return null;
        var d = new XMLHttpRequest()
          , e = function() {};
        if ("withCredentials"in d)
            d.open(a, c, !0),
            d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        else if (self.XDomainRequest) {
            d = new XDomainRequest();
            try {
                d.open(a, c),
                d.onprogress = d.ontimeout = e
            } catch (a) {
                return null
            }
        } else
            return null;
        var f = {
            send: function(a) {
                d.send(a)
            }
        }
          , g = b("wrapFunction")(function() {
            g = e,
            "onload"in f && f.onload(d)
        }, "entry", "XMLHttpRequest:load")
          , h = b("wrapFunction")(function() {
            h = e,
            "onerror"in f && f.onerror(d)
        }, "entry", "XMLHttpRequest:error");
        d.onload = function() {
            g()
        }
        ;
        d.onerror = function() {
            h()
        }
        ;
        d.onreadystatechange = function() {
            d.readyState == 4 && (d.status == 200 ? g() : h())
        }
        ;
        return f
    }
    function a(a, c, d, e) {
        if (a.includes("/../") || a.includes("/..\\") || a.includes("\\../") || a.includes("\\..\\")) {
            b("Log").error("CORSRequest.execute(): path traversal is not allowed.");
            return !1
        }
        d.suppress_http_code = 1;
        d = b("QueryString").encode(d);
        c != "post" && (a = b("QueryString").appendToUrl(a, d),
        d = "");
        c = g(c, a);
        if (!c)
            return !1;
        c.onload = function(c) {
            e(b("sdk.safelyParseResponse")(c.responseText, a))
        }
        ;
        c.onerror = function(c) {
            c.responseText ? e(b("sdk.safelyParseResponse")(c.responseText, a)) : e({
                error: babelHelpers["extends"]({}, b("RequestConstants").PARSE_ERROR_TEMPLATE, {
                    status: c.status
                })
            })
        }
        ;
        c.send(d);
        return !0
    }
    c = {
        execute: a
    };
    e.exports = c
}
), null);
__d("ChunkedRequest", ["Log", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"], (function(a, b, c, d, e, f) {
    f.execute = a;
    var g = "{}"
      , h = function() {
        function a(a) {
            a === void 0 && (a = "\r\n"),
            this.offset = 0,
            this.delimiter = "\r\n",
            this.delimiter = a
        }
        var b = a.prototype;
        b.parse = function(a, b) {
            b === void 0 && (b = !1);
            var c = []
              , d = a.substring(this.offset)
              , e = 0
              , f = d.indexOf(this.delimiter, e);
            f === 0 && (e = this.delimiter.length,
            f = d.indexOf(this.delimiter, e));
            while (f > -1) {
                var g = d.substring(e, f);
                g && c.push(g);
                e = f + this.delimiter.length;
                f = d.indexOf(this.delimiter, e)
            }
            this.offset += e;
            if (b && d && f === -1) {
                g = a.substring(this.offset);
                c.push(g)
            }
            return c
        }
        ;
        return a
    }();
    function i(a, c) {
        if (!self.XMLHttpRequest)
            return null;
        var d = new XMLHttpRequest();
        if (!("withCredentials"in d))
            return null;
        d.open(a, c, !0);
        d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var e = new h()
          , f = {
            send: function(a) {
                d.send(a)
            }
        }
          , i = b("wrapFunction")(function(a, b) {
            if (f.onchunk) {
                a = e.parse(a);
                a.forEach(function(a) {
                    return f.onchunk(a, b)
                });
                b && f.onchunk(g, b)
            }
        }, "entry", "XMLHttpRequest:onchunk")
          , j = b("wrapFunction")(function() {
            f.onerror && f.onerror(d)
        }, "entry", "XMLHttpRequest:error");
        d.onerror = j;
        d.onreadystatechange = function() {
            d.readyState == 4 ? d.status === 200 ? i(d.responseText, !0) : j() : d.readyState == 3 && i(d.responseText, !1)
        }
        ;
        return f
    }
    function a(a, c, d, e) {
        if (a.includes("/../") || a.includes("/..\\") || a.includes("\\../") || a.includes("\\..\\")) {
            b("Log").error("ChunkedRequest.execute(): path traversal is not allowed.");
            return !1
        }
        d.suppress_http_code = 1;
        d = b("QueryString").encode(d);
        c != "post" && (a = b("QueryString").appendToUrl(a, d),
        d = "");
        c = i(c, a);
        if (!c)
            return !1;
        c.onchunk = function(a, c) {
            e(b("sdk.safelyParseResponse")(a), c)
        }
        ;
        c.onerror = function(a) {
            a.responseText ? e(b("sdk.safelyParseResponse")(a.responseText)) : e({
                error: babelHelpers["extends"]({}, b("RequestConstants").PARSE_ERROR_TEMPLATE, {
                    status: a.status
                })
            })
        }
        ;
        c.send(d);
        return !0
    }
}
), null);
__d("ApiClient", ["ApiBatcher", "ApiClientUtils", "Assert", "ChunkedRequest", "CORSRequest", "JSONPRequest", "Log", "ObservableMixin", "QueryString", "UrlMap", "flattenObject"], (function(a, b, c, d, e, f) {
    var g, h, i, j = [], k = b("JSONPRequest").MAX_QUERYSTRING_LENGTH, l = {
        fql_query: !0,
        fql_multiquery: !0,
        friends_get: !0,
        notifications_get: !0,
        stream_get: !0,
        users_getinfo: !0
    }, m = ["cors", "jsonp"], n = 0, o = [], p = 0, q = 0, r, s = b("Log");
    function t(a, c, d, e) {
        var f = p !== 0 && n >= p;
        if (f) {
            o.push(function() {
                return t(a, c, d, e)
            });
            w.inform("request.queued", a, c, d);
            return
        }
        n++;
        var h = babelHelpers["extends"]({}, i, d);
        h.pretty = h.pretty || 0;
        h = b("flattenObject")(h);
        f = {
            jsonp: b("JSONPRequest"),
            cors: b("CORSRequest"),
            chunked: b("ChunkedRequest")
        };
        var k = {}
          , l = h.access_token || g;
        l && (k.access_token = l);
        c !== "get" && j.forEach(function(a) {
            k[a] = h[a]
        });
        l = Object.keys(k);
        l.length > 0 && (a = b("QueryString").appendToUrl(a, k),
        delete h.access_token);
        l = m;
        for (var q = 0; q < l.length; q++) {
            var r = f[l[q]]
              , s = Object.assign({}, h);
            if (r.execute(a, c, s, e))
                return
        }
        e({
            error: {
                type: "no-transport",
                message: "Could not find a usable transport for request"
            }
        })
    }
    function u(a, b, c, d, e, f, g, h) {
        if (d.transport && d.transport === "chunked" && h === !1) {
            a(g, !1);
            return
        }
        g && g.error && w.inform("request.error", b, c, d, g, Date.now() - e, f);
        w.inform("request.complete", b, c, d, g, Date.now() - e, f);
        n--;
        a && a(g);
        h = o.length > 0 && n < p;
        if (h) {
            b = o.shift();
            b()
        }
    }
    function v() {
        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
            c[d] = arguments[d];
        var e = b("ApiClientUtils").parseCallDataFromArgs(c)
          , f = e.uri
          , g = e.callback
          , h = e.params
          , i = h.method;
        x(f, i) && (i = "post");
        var j = f.getProtocol() && f.getDomain() ? f.setQueryData({}).toString() : b("UrlMap").resolve("graph_domain") + f.getPath()
          , k = q++;
        "_fb_domain"in h && w.setKeptQueryParams(["_fb_domain"]);
        w.inform("request.prepare", j, h, k);
        t(j, i == "get" ? "get" : "post", h, u.bind(null, g, f.getPath(), i, h, Date.now(), k))
    }
    function a() {
        var a;
        r || (r = new (b("ApiBatcher"))(v,h));
        (a = r).scheduleBatchCall.apply(a, arguments)
    }
    function c(a, c) {
        b("Assert").isObject(a);
        b("Assert").isString(a.method, "method missing");
        c || s.warn("No callback passed to the ApiClient");
        var d = a.method.toLowerCase().replace(".", "_");
        a.format = "json-strings";
        a.api_key = h;
        d = d in l ? "api_read" : "api";
        d = b("UrlMap").resolve(d) + "/restserver.php";
        var e = q++;
        c = u.bind(null, c, "/restserver.php", "get", a, Date.now(), e);
        t(d, "get", a, c)
    }
    function d(a) {
        return b("ApiBatcher").prepareBatchParams(a, j)
    }
    var w = Object.assign(new (b("ObservableMixin"))(), {
        setAccessToken: function(a) {
            g && a && g !== a && s.error("You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."),
            g = a
        },
        setAccessTokenForClientID: function(a, b) {
            g && h && h !== b ? s.error("Not overriding access token since it was not initialized by your application.") : g = a
        },
        getClientID: function() {
            return h
        },
        getAccessToken: function() {
            return g
        },
        setClientID: function(a) {
            h && h !== a && s.warn("Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."),
            h = a
        },
        setDefaultParams: function(a) {
            i = a
        },
        getDefaultParams: function() {
            return i
        },
        setDefaultTransports: function(a) {
            m = a
        },
        setLogger: function(a) {
            s = a
        },
        setMaxConcurrentRequests: function(a) {
            p = a
        },
        setKeptQueryParams: function(a) {
            j = a
        },
        getCurrentlyExecutingRequestCount: function() {
            return n
        },
        getQueuedRequestCount: function() {
            return o.length
        },
        rest: c,
        graph: v,
        scheduleBatchCall: a,
        prepareBatchParams: d
    });
    function x(a, b) {
        return a.toString().length > k && b === "get"
    }
    f = w;
    e.exports = f
}
), null);
__d("TimeFormatUtil", ["DateConsts", "formatDate"], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var c = a.prototype;
        c.formatTime = function(a) {
            return b("formatDate")(new Date(a), "i:s.X", {
                skipPatternLocalization: !0,
                utc: !0
            })
        }
        ;
        c.formatTimeForSRT = function(a) {
            return b("formatDate")(new Date(a), "H:i:s,X", {
                skipPatternLocalization: !0,
                utc: !0
            })
        }
        ;
        c.getMMSS = function(a) {
            return b("formatDate")(new Date(a), "i:s", {
                skipPatternLocalization: !0,
                utc: !0
            })
        }
        ;
        c.parseToTimeInMs = function(a) {
            if (/^\d*:\d*\.\d*$/.test(a)) {
                a = a.split(".");
                var c = a[0].split(":");
                a = parseInt(a[1], 10) + (parseInt(c[0], 10) * b("DateConsts").SEC_PER_MIN + parseInt(c[1], 10)) * b("DateConsts").MS_PER_SEC;
                return a ? a : 0
            }
            return 0
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("isIE11", ["Random", "UserAgent", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("Random").coinflip(5);
    function a() {
        return b("gkx")("928653") && g ? !0 : b("UserAgent").isBrowser("IE")
    }
}
), null);
__d("VideoCaptionUtil", ["fbt", "FileSaver", "GraphAPI", "GraphAPIPolling", "SimpleXUIDialog", "TimeFormatUtil", "gkx", "isIE11"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "2.5"
      , i = 18e4
      , j = 3e3;
    a = function() {
        function a() {}
        var c = a.prototype;
        c.download = function(a, b, c) {
            a = this.saveToString(a);
            return this.downloadCaptionFile(a, c, b)
        }
        ;
        c.downloadCaptionFile = function(a, c, d) {
            try {
                a = new Blob([a],{
                    type: "text/plain"
                });
                c = c + "." + d + ".srt";
                if (b("gkx")("678834"))
                    b("FileSaver")(a, c);
                else if (b("isIE11")())
                    window.navigator.msSaveOrOpenBlob(a, c);
                else {
                    d = window.URL.createObjectURL(a);
                    a = document.createElement("a");
                    a.href = d;
                    a.setAttribute("download", c);
                    document.body && document.body.appendChild(a);
                    a.click();
                    document.body && document.body.removeChild(a)
                }
                return !0
            } catch (a) {
                b("SimpleXUIDialog").show(g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Ch\u00fang t\u00f4i \u0111ang c\u1ed1 g\u1eafng kh\u1eafc ph\u1ee5c s\u1edbm nh\u1ea5t c\u00f3 th\u1ec3. B\u1ea1n c\u00f3 th\u1ec3 th\u1eed l\u1ea1i."), g._("L\u1ed7i t\u1ea3i xu\u1ed1ng"))
            }
            return !1
        }
        ;
        c.saveToString = function(a) {
            var c = 1
              , d = "";
            a.forEach(function(a) {
                a = a.node;
                var e = a.text.trim();
                if (e) {
                    var f = a.start_time_in_ms + a.duration_in_ms;
                    d = d + c + "\n" + b("TimeFormatUtil").formatTimeForSRT(a.start_time_in_ms) + " --> " + b("TimeFormatUtil").formatTimeForSRT(f) + "\n" + e + "\n\n";
                    c++
                }
            });
            return d
        }
        ;
        c.saveToFile = function(a, b, c) {
            if (!a)
                return null;
            a = this.saveToString(a);
            if (!a)
                return null;
            b = b || "en_US";
            return new File([a],(c ? "captions_auto." : "captions.") + b + ".srt",{
                type: "text/plain",
                lastModified: new Date()
            })
        }
        ;
        c.$1 = function(a, c, d) {
            var f = {}
              , g = b("GraphAPIPolling").poll(function() {
                return b("GraphAPI")(h, e.id).object("video", a.toString()).edge("auto_generated_captions").get({
                    fields: ["id", "locale", "last_published_time", "last_save_time", "review_expire_time", "status"],
                    access_token: c
                })
            }, function(a) {
                if (!a.data || a.data.length === 0) {
                    var b = d && a.data.length === 0;
                    return b
                }
                f = a;
                return !0
            }, i, j);
            return g(f).then(function() {
                return f
            })
        }
        ;
        c.fetchAutoCaption = function(a, b) {
            return this.$1(a, b, !1)
        }
        ;
        c.fetchAutoCaptionFast = function(a, b) {
            return this.$1(a, b, !0)
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("XVideoCaptionGenerateAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/captioneditor/generate/", {
        video_id: {
            type: "Int",
            required: !0
        },
        regenerate: {
            type: "Bool",
            defaultValue: !1
        },
        locale: {
            type: "String"
        },
        work_shared_draft_mode: {
            type: "Enum",
            enumType: 1
        },
        try_blocking_generation: {
            type: "Bool",
            defaultValue: !0
        }
    })
}
), null);
__d("ContextualLayerShowAndHideOnScrollOut", ["Event", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.enable = function() {
            this.$2 || (this.$2 = new (b("SubscriptionsHandler"))(),
            this.$2.addSubscriptions(this.$1.subscribe("contextchange", this.$5.bind(this)))),
            this.attach()
        }
        ;
        c.disable = function() {
            if (this.$2)
                while (this.$2.length)
                    this.$2.pop().unsubscribe();
            this.detach()
        }
        ;
        c.attach = function() {
            if (this.$3)
                return;
            this.$4 = this.$1.getContextScrollParent();
            if (this.$4 === window)
                return;
            this.$3 = b("Event").listen(this.$4, "scroll", this.$6.bind(this))
        }
        ;
        c.detach = function() {
            this.$3 && this.$3.remove(),
            this.$3 = null
        }
        ;
        c.$6 = function() {
            var a = this.$1.getContext().getBoundingClientRect()
              , b = this.$4.getBoundingClientRect()
              , c = a.bottom <= b.top || a.top >= b.bottom;
            a = a.right <= b.left || a.left >= b.right;
            c || a ? this.$1.hide() : this.$1.show()
        }
        ;
        c.$5 = function() {
            this.detach(),
            this.$1.isShown() && this.attach()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("AdsWhatsAppStrings", ["fbt", "AdsWhatsAppUtils", "Link.react", "React", "$InternalEnum"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getConnectToWhatsAppLabel = a;
    f.getPageOrProfileNotConnectedPopoverWhatsAppBusinessLabel = c;
    f.getPageOrProfileNotConnectedPopoverWhatsAppNumberLabel = d;
    f.getWhatsAppConnectMessage = e;
    f.getConnectAccountDialogPrompt = j;
    f.getInvalidPhoneNumberErrorMessage = k;
    f.getVerificationDisplayMessageText = l;
    f.getWhatsAppMessageDestinationLabel = m;
    f.getWhatsAppLabel = n;
    f.getWhatsAppVerificationFlowStepperLabel = o;
    a = b("React");
    var h = b("$InternalEnum").Mirrored(["ADD_PHONE_NUMBER", "INSTALL_WHATSAPP_BUSINESS", "CONFIRM_ACCOUNT"]);
    f.StepperStringEnum = h;
    function a(a) {
        return a ? g._("K\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n WhatsApp Business") : g._("K\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n WhatsApp")
    }
    c = g._("K\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n");
    f.getConnectAccountLabel = c;
    function c(a) {
        return a === !0 ? g._("Trang c\u00e1 nh\u00e2n n\u00e0y ch\u01b0a k\u1ebft n\u1ed1i v\u1edbi t\u00e0i kho\u1ea3n WhatsApp Business. H\u00e3y thi\u1ebft l\u1eadp v\u00e0 x\u00e1c minh t\u00e0i kho\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng qu\u1ea3ng c\u00e1o c\u00f3 n\u00fat m\u1edf WhatsApp.") : g._("Trang n\u00e0y ch\u01b0a \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i v\u1edbi t\u00e0i kho\u1ea3n WhatsApp Business. H\u00e3y thi\u1ebft l\u1eadp v\u00e0 x\u00e1c minh t\u00e0i kho\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng qu\u1ea3ng c\u00e1o c\u00f3 n\u00fat m\u1edf WhatsApp.")
    }
    function d(a) {
        return a === !0 ? g._("Trang c\u00e1 nh\u00e2n n\u00e0y ch\u01b0a k\u1ebft n\u1ed1i v\u1edbi t\u00e0i kho\u1ea3n WhatsApp. H\u00e3y thi\u1ebft l\u1eadp v\u00e0 x\u00e1c minh t\u00e0i kho\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng qu\u1ea3ng c\u00e1o c\u00f3 n\u00fat m\u1edf WhatsApp.") : g._("Trang n\u00e0y ch\u01b0a \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i v\u1edbi t\u00e0i kho\u1ea3n WhatsApp. H\u00e3y thi\u1ebft l\u1eadp v\u00e0 x\u00e1c minh t\u00e0i kho\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng qu\u1ea3ng c\u00e1o c\u00f3 n\u00fat m\u1edf WhatsApp.")
    }
    function e(a, b) {
        switch (a) {
        case "VERIFICATION_CODE_TOO_FAST":
            return g._("Vui l\u00f2ng \u0111\u1ee3i 30 gi\u00e2y r\u1ed3i m\u1edbi y\u00eau c\u1ea7u m\u00e3 x\u00e1c minh kh\u00e1c.");
        case "INVALID_WHATSAPP_BUSINESS_NUMBER":
            return g._("S\u1ed1 n\u00e0y ch\u01b0a \u0111\u01b0\u1ee3c \u0111\u0103ng k\u00fd v\u1edbi t\u00e0i kho\u1ea3n WhatsApp Business");
        case "INVALID_WHATSAPP_NUMBER":
            return g._("S\u1ed1 n\u00e0y ch\u01b0a \u0111\u01b0\u1ee3c \u0111\u0103ng k\u00fd v\u1edbi t\u00e0i kho\u1ea3n WhatsApp.");
        case "INVALID_VERIFICATION_CODE":
            return g._("M\u00e3 x\u00e1c minh b\u1ea1n \u0111\u00e3 cung c\u1ea5p kh\u00f4ng kh\u1edbp v\u1edbi m\u00e3 ch\u00fang t\u00f4i g\u1eedi cho b\u1ea1n.");
        case "VERIFICATION_CODE_EXPIRED":
            return g._("M\u00e3 x\u00e1c minh hi\u1ec7n \u0111\u00e3 h\u1ebft h\u1ea1n, vui l\u00f2ng y\u00eau c\u1ea7u m\u00e3 kh\u00e1c.");
        case "VERIFIED":
            if (b)
                return g._("\u0110\u00e3 k\u1ebft n\u1ed1i th\u00e0nh c\u00f4ng trang v\u00e0 t\u00e0i kho\u1ea3n WhatsApp Business.");
            else
                return g._("\u0110\u00e3 k\u1ebft n\u1ed1i th\u00e0nh c\u00f4ng trang v\u00e0 t\u00e0i kho\u1ea3n WhatsApp.")
        }
        return null
    }
    var i = a.jsx(b("Link.react"), {
        href: b("AdsWhatsAppUtils").whatsAppBusinessLink,
        target: "_blank",
        children: g._("t\u1ea1i \u0111\u00e2y")
    });
    function j(a) {
        return a ? g._("Th\u00eam s\u1ed1 \u0111i\u1ec7n tho\u1ea1i li\u00ean k\u1ebft v\u1edbi t\u00e0i kho\u1ea3n WhatsApp Business s\u1ebd nh\u1eadn tin nh\u1eafn t\u1eeb kh\u00e1ch h\u00e0ng. Sau \u0111\u00f3, x\u00e1c nh\u1eadn b\u1ea1n \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c m\u00e3 x\u00e1c minh g\u1eedi qua WhatsApp. Nh\u1ea5p v\u00e0o {url} \u0111\u1ec3 c\u00e0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng WhatsApp Business.", [g._param("url", i)]) : g._("Th\u00eam s\u1ed1 \u0111i\u1ec7n tho\u1ea1i li\u00ean k\u1ebft v\u1edbi t\u00e0i kho\u1ea3n WhatsApp m\u00e0 kh\u00e1ch h\u00e0ng s\u1ebd s\u1eed d\u1ee5ng \u0111\u1ec3 g\u1eedi tin nh\u1eafn cho b\u1ea1n. Sau \u0111\u00f3, x\u00e1c nh\u1eadn r\u1eb1ng b\u1ea1n \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c m\u00e3 x\u00e1c minh g\u1eedi qua WhatsApp.")
    }
    d = function(a) {
        return a ? g._("WhatsApp Business ch\u01b0a \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i") : g._("S\u1ed1 WhatsApp ch\u01b0a \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i")
    }
    ;
    f.pageNotConnectedToWhatsAppSubtitle = d;
    e = g._("\u0110\u1ec3 k\u1ebft n\u1ed1i v\u1edbi m\u1ed9t t\u00e0i kho\u1ea3n th\u00ec b\u1ea1n ph\u1ea3i l\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean c\u1ee7a Trang n\u00e0y.");
    f.userCannotConnectPageToWhatsAppLabel = e;
    function k(a) {
        return g._("Vui l\u00f2ng nh\u1eadp s\u1ed1 {'WhatsApp' or 'WhatsApp Business'} h\u1ee3p l\u1ec7.", [g._param("'WhatsApp' or 'WhatsApp Business'", a === !0 ? "WhatsApp Business" : "WhatsApp")])
    }
    function l(a) {
        return a === "VERIFICATION_CODE_SENT_AGAIN" ? g._("M\u00e3 x\u00e1c nh\u1eadn c\u1ee7a b\u1ea1n \u0111ang \u0111\u01b0\u1ee3c g\u1eedi") : g._("Nh\u1eadp m\u00e3 g\u1ed3m 5 ch\u1eef s\u1ed1")
    }
    function m() {
        return g._("WhatsApp Business")
    }
    function n() {
        return g._("WhatsApp")
    }
    function o(a) {
        switch (a) {
        case h.ADD_PHONE_NUMBER:
            return g._("Th\u00eam s\u1ed1 \u0111i\u1ec7n tho\u1ea1i");
        case h.INSTALL_WHATSAPP_BUSINESS:
            return g._("Chuy\u1ec3n \u1ee9ng d\u1ee5ng");
        case h.CONFIRM_ACCOUNT:
            return g._("X\u00e1c nh\u1eadn t\u00e0i kho\u1ea3n")
        }
    }
}
), null);
__d("XUICheckboxInput.react", ["cx", "AbstractCheckboxInput.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return h.jsx(b("AbstractCheckboxInput.react"), babelHelpers["extends"]({}, this.props, {
                ref: function(b) {
                    return a.$1 = b
                },
                className: b("joinClasses")(this.props.className, "_55sg"),
                children: void 0
            }))
        }
        ;
        d.focusInput = function() {
            this.$1 && this.$1.focusInput()
        }
        ;
        d.blurInput = function() {
            this.$1 && this.$1.blurInput()
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("useSimpleNUX", ["React", "SimpleNUXMessage", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useState(!b("SimpleNUXMessage").hasUserSeenMessage(a))
          , d = c[0]
          , e = c[1];
        c = g.useCallback(function() {
            b("SimpleNUXMessage").markMessageSeenByUser(a),
            e(!1)
        }, [a]);
        return [d, d ? c : b("emptyFunction")]
    }
}
), null);
__d("ScheduledLiveTimeStringUtil", ["fbt", "DateStrings", "React", "formatDate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getStr = a;
    f.getDateStr = c;
    f.getUppercaseDateStr = d;
    f._renderUppercaseDayOfWeekString = e;
    f._renderDayOfWeekString = j;
    var h = b("React")
      , i = 24 * 60 * 60 * 1e3;
    function a(a, c) {
        return c ? h.jsx("span", {
            children: this.getUppercaseDateStr(a)
        }) : h.jsxs("span", {
            children: [this.getDateStr(a), " ", g._("{date}", [g._param("date", b("formatDate")(a, "g:ia"))])]
        })
    }
    function c(a) {
        var c = new Date(Date.now())
          , d = new Date(Date.now() + i)
          , e = new Date(Date.now() + 2 * i)
          , f = new Date(Date.now() + 3 * i)
          , h = a.toDateString();
        c.toDateString() === h ? c = g._("H\u00f4m nay l\u00fac") : d.toDateString() === h ? c = g._("Ng\u00e0y mai l\u00fac") : e.toDateString() === h || f.toDateString() === h ? c = this._renderDayOfWeekString(a.getDay()) : c = b("formatDate")(a, "F d");
        return c
    }
    function d(a) {
        var c = new Date(Date.now())
          , d = new Date(Date.now() + i)
          , e = new Date(Date.now() + 2 * i)
          , f = new Date(Date.now() + 3 * i)
          , h = a.toDateString()
          , j = b("formatDate")(a, "g:iA");
        c.toDateString() === h ? c = g._("{time of day} H\u00d4M NAY", [g._param("time of day", j)]) : d.toDateString() === h ? c = g._("{time of day} NG\u00c0Y MAI", [g._param("time of day", j)]) : e.toDateString() === h || f.toDateString() === h ? c = this._renderUppercaseDayOfWeekString(a.getDay(), a) : c = g._("{day of month} L\u00daC {time of day}", [g._param("day of month", b("formatDate")(a, "F d")), g._param("time of day", j)]);
        return c
    }
    function e(a, c) {
        if (a >= 0 && a <= 6) {
            c = b("formatDate")(c, "g:iA");
            return g._("{time of day} {day of week}", [g._param("day of week", b("DateStrings").getUppercaseWeekdayName(a)), g._param("time of day", c)])
        }
        return null
    }
    function j(a) {
        switch (a) {
        case 0:
            return g._("Ch\u1ee7 Nh\u1eadt l\u00fac");
        case 1:
            return g._("Th\u1ee9 Hai l\u00fac");
        case 2:
            return g._("Th\u1ee9 Ba l\u00fac");
        case 3:
            return g._("Th\u1ee9 T\u01b0 l\u00fac");
        case 4:
            return g._("Th\u1ee9 N\u0103m l\u00fac");
        case 5:
            return g._("Th\u1ee9 S\u00e1u l\u00fac");
        case 6:
            return g._("Th\u1ee9 B\u1ea3y l\u00fac")
        }
        return null
    }
}
), null);
__d("ScheduledLiveStoryVideoPreviewFooter.react", ["ix", "cx", "fbt", "Image.react", "React", "ScheduledLiveTimeStringUtil", "XUIButton.react", "XUICardSection.react", "XUIText.react", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    e.exports = a;
    var j = b("React");
    function a(a) {
        var c = a.isPremiere && a.plannedStartTime === 0;
        c = c ? i._("S\u1eafp b\u1eaft \u0111\u1ea7u") : b("ScheduledLiveTimeStringUtil").getStr(new Date(a.plannedStartTime), !0);
        var d = a.isPremiere ? g("591214") : g("595518");
        d = j.jsx("div", {
            className: "_6lz _6mb _1t62",
            children: j.jsxs(b("XUIText.react"), {
                className: "_6d27",
                children: [j.jsx(b("Image.react"), {
                    src: d,
                    className: "_6cfz"
                }), c]
            })
        });
        c = j.jsx("div", {
            className: "_6m6 _2cnj _fwx _6etm",
            children: j.jsx(b("XUIText.react"), {
                size: "body1",
                children: a.previewTitle
            })
        });
        a = j.jsx(b("XUIText.react"), {
            color: "secondary",
            className: "_20l4 _svw",
            children: i._("H\u00e3y theo d\u00f5i \u0111\u1ec3 xem tr\u1ef1c ti\u1ebfp")
        });
        var e = j.jsx("div", {
            className: "_44af _2e6-",
            children: j.jsx(b("XUIButton.react"), {
                size: "medium",
                label: i._("Nh\u1eadn l\u1eddi nh\u1eafc"),
                image: j.jsx(b("Image.react"), {
                    src: g("492370")
                })
            })
        });
        return j.jsx(b("XUICardSection.react"), {
            className: "_64lx _3eqz _pmm _267a _66cd _6d28 _2v9b",
            children: j.jsxs("div", {
                className: "_44ae _651x",
                children: [j.jsxs("div", {
                    className: "_59tj _2iau _oq1 _6m3 _--6 _4dhn",
                    children: [d, c, a]
                }), e]
            })
        })
    }
}
), null);
__d("ScheduledLiveStoryVideoPreviewV2.react", ["cx", "BackgroundImage.react", "Image.react", "React", "ScaledImage.react", "ScheduledLiveStoryVideoPreviewFooter.react", "XUICardSection.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = a.URL || a.webkitURL || {}
      , j = 504
      , k = 265;
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("div", {
                children: this.$1()
            })
        }
        ;
        d.$2 = function() {
            return this.props.backgroundImage.imageURL && this.props.backgroundImage.width && this.props.backgroundImage.height ? this.props.customProfileImage ? this.$3() : h.jsx(b("ScaledImage.react"), {
                width: 500,
                height: 280,
                src: this.props.backgroundImage.imageURL,
                imageSize: {
                    width: this.props.backgroundImage.width,
                    height: this.props.backgroundImage.height
                }
            }) : null
        }
        ;
        d.$3 = function() {
            var a = this.props.customProfileImage
              , c = this.props.customProfileImagePosition;
            c = c ? c.x * 100 + "% " + c.y * 100 + "%" : "50% 50%";
            if (a != null)
                return h.jsx(b("BackgroundImage.react"), {
                    backgroundSize: "coverinside",
                    backgroundPosition: c,
                    height: k,
                    src: i.createObjectURL(a),
                    width: j
                });
            return this.props.previousCustomImage != null ? h.jsx(b("Image.react"), {
                className: "_as4",
                src: this.props.previousCustomImage
            }) : h.jsx(b("Image.react"), {
                className: "_as4",
                src: this.props.profileImageURL
            })
        }
        ;
        d.$1 = function() {
            return h.jsxs("div", {
                children: [h.jsx(b("XUICardSection.react"), {
                    className: "_6dw8",
                    children: this.$2()
                }), h.jsx(b("ScheduledLiveStoryVideoPreviewFooter.react"), {
                    isPremiere: this.props.isPremiere === !0,
                    plannedStartTime: this.props.plannedStartTime,
                    previewTitle: this.props.previewTitle
                })]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = c
}
), null);
__d("StoryProfile.react", ["cx", "BackgroundImage.react", "FBProfilePhotoShadow.react", "Image.react", "ImageBlock.react", "InlineBlock.react", "Link.react", "PrivacyConst", "React", "XUIGrayText.react", "XUIText.react", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function() {
                var a = null;
                if (d.props.privacyIndicator)
                    a = d.props.privacyIndicator;
                else if (d.props.privacySetting) {
                    var c = d.props.privacySetting == b("PrivacyConst").BaseValue.EVERYONE
                      , e = d.props.privacySetting == b("PrivacyConst").BaseValue.ALL_FRIENDS;
                    a = h.jsx(b("BackgroundImage.react"), {
                        width: 13,
                        height: 12,
                        "data-hover": "tooltip",
                        "data-tooltip-content": d.props.privacyTooltip,
                        className: "_14g-" + (c ? " _14g_" : "") + (e ? " _5qhp" : "") + (!e && !c ? " _14h0" : "")
                    })
                }
                return !a ? null : h.jsxs("span", {
                    children: [h.jsx(b("XUIGrayText.react"), {
                        shade: "light",
                        size: "meta1",
                        display: "inline",
                        children: "\xa0\xb7\xa0"
                    }), a]
                })
            }
            ,
            d.$2 = function() {
                var a, c;
                if (d.props.profileURL) {
                    var e;
                    d.props.openProfileURLInNewPage && (e = "_blank");
                    c = "bold";
                    a = h.jsx(b("Link.react"), {
                        href: d.props.profileURL,
                        target: e,
                        children: d.props.username
                    })
                } else
                    a = d.props.username;
                if (d.props.description)
                    return h.jsxs("div", {
                        children: [h.jsx(b("XUIText.react"), {
                            className: "_14gz",
                            size: "header4",
                            weight: c,
                            children: a
                        }), " ", d.props.description]
                    });
                else
                    return h.jsx(b("XUIText.react"), {
                        className: "_14gz",
                        size: "header4",
                        weight: c,
                        display: "block",
                        children: a
                    })
            }
            ,
            d.$3 = function() {
                return d.props.additionalLinks ? h.jsx(b("XUIGrayText.react"), {
                    shade: "light",
                    size: "meta1",
                    display: "inline",
                    children: d.props.additionalLinks.map(function(a, c) {
                        return h.jsxs("span", {
                            children: ["\xa0\xb7\xa0", h.jsx(b("Link.react"), {
                                href: a.URL,
                                target: "_blank",
                                children: a.text
                            })]
                        }, c)
                    })
                }) : null
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsxs(b("ImageBlock.react"), {
                spacing: "medium",
                className: b("joinClasses")(this.props.className, "_56-3"),
                children: [this.props.profilePicture ? h.jsx(b("FBProfilePhotoShadow.react"), {
                    children: h.jsx(b("Image.react"), {
                        className: "_56-4" + (this.props.useRoundPicture ? " _6y18" : ""),
                        src: this.props.profilePicture
                    })
                }) : h.jsx("span", {}), h.jsxs(b("InlineBlock.react"), {
                    alignv: "middle",
                    height: 40,
                    fullWidth: !0,
                    children: [this.$2(), h.jsxs("div", {
                        children: [h.jsx(b("XUIGrayText.react"), {
                            shade: "light",
                            size: "meta1",
                            display: "inline",
                            children: this.props.uploadTime
                        }), this.$1(), this.$3()]
                    })]
                })]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        privacySetting: (c = b("prop-types")).number,
        privacyIndicator: c.object,
        profilePicture: c.string,
        privacyTooltip: c.node,
        username: c.string.isRequired,
        uploadTime: c.node.isRequired,
        profileURL: c.string,
        openProfileURLInNewPage: c.bool,
        additionalLinks: c.arrayOf(c.shape({
            URL: c.string,
            text: c.node
        })),
        description: c.node
    };
    a.defaultProps = {
        openProfileURLInNewPage: !1
    }
}
), null);
__d("XLiveScheduleStoryPreviewController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/live/schedule/preview/", {
        target_id: {
            type: "FBID"
        },
        broadcast_id: {
            type: "FBID"
        }
    })
}
), null);
__d("ScheduledLiveStoryPreview.react", ["cx", "fbt", "ActorURI", "AsyncRequest", "React", "ScheduledLiveStoryVideoPreviewV2.react", "StoryProfile.react", "XLiveScheduleStoryPreviewController", "XUICard.react", "XUICardSection.react", "XUIText.react", "cxMargin"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React")
      , j = "/images/silhouettes/person_50x50.png";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this, b) || this;
            c.$2 = function(a) {
                a = a.getPayload();
                c.setState({
                    plannedStartTime: a.plannedStartTime,
                    profileName: a.profileName,
                    profileImageURL: a.profileImageURL,
                    profileURL: a.profileURL,
                    backgroundImage: a.backgroundImage,
                    previousCustomImage: a.previousCustomImage
                })
            }
            ;
            c.state = {
                profileName: "",
                profileImageURL: j,
                profileURL: "",
                backgroundImage: {},
                previousCustomImage: null,
                plannedStartTime: null
            };
            return c
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1(this.props)
        }
        ;
        d.componentDidUpdate = function(a, b) {
            (a.actorID !== this.props.actorID || a.targetID !== this.props.targetID) && this.$1(this.props)
        }
        ;
        d.$1 = function(a) {
            var c = b("XLiveScheduleStoryPreviewController").getURIBuilder().setFBID("target_id", a.targetID).setFBID("broadcast_id", a.broadcastID).getURI();
            c = b("ActorURI").create(c, (c = a.actorID) != null ? c : a.targetID);
            new (b("AsyncRequest"))().setURI(c).setMethod("POST").setHandler(this.$2).send()
        }
        ;
        d.render = function() {
            var a;
            return i.jsxs(b("XUICard.react"), {
                children: [i.jsxs(b("XUICardSection.react"), {
                    children: [this.$3(), this.$4()]
                }), i.jsx(b("ScheduledLiveStoryVideoPreviewV2.react"), {
                    backgroundImage: this.state.backgroundImage,
                    customProfileImage: this.props.customProfileImage,
                    customProfileImagePosition: this.props.customProfileImagePosition,
                    isPremiere: this.props.isPremiere,
                    plannedStartTime: (a = this.state.plannedStartTime) != null ? a : this.props.plannedStartTime,
                    previousCustomImage: this.state.previousCustomImage,
                    profileImageURL: this.state.profileImageURL,
                    profileName: this.state.profileName,
                    previewTitle: this.props.previewTitle
                })]
            })
        }
        ;
        d.$3 = function() {
            var a = h._("c\u00f3 k\u1ebf ho\u1ea1ch ph\u00e1t tr\u1ef1c ti\u1ebfp.");
            this.props.isPremiere && (a = this.props.plannedStartTime ? h._("k\u1ebf ho\u1ea1ch c\u00f4ng chi\u1ebfu video.") : h._("k\u1ebf ho\u1ea1ch ph\u00e1t h\u00e0nh video m\u1edbi."));
            return i.jsx("div", {
                className: "_3-8j",
                children: i.jsx(b("StoryProfile.react"), {
                    openProfileURLInNewPage: !0,
                    profilePicture: this.state.profileImageURL,
                    profileURL: this.state.profileURL,
                    useRoundPicture: !0,
                    username: this.state.profileName,
                    uploadTime: h._("V\u1eeba xong"),
                    description: a
                })
            })
        }
        ;
        d.$4 = function() {
            return i.jsx(b("XUIText.react"), {
                className: "_as3",
                display: "block",
                size: "header4",
                children: this.props.description
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("XSproutPromotionUpdateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/react_composer/sprouts/promotions/update/", {
        promotion_id: {
            type: "Int"
        },
        increment_view: {
            type: "Exists",
            defaultValue: !1
        },
        end_promotion: {
            type: "Exists",
            defaultValue: !1
        },
        current_promotion: {
            type: "Exists",
            defaultValue: !1
        }
    })
}
), null);
__d("ReactComposerSproutBadgePromotionUtils", ["AsyncRequest", "ReactComposerActions", "XSproutPromotionUpdateController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initWWWPromotion = a;
    f.addView = c;
    f.endPromotion = d;
    function a(a) {
        a = b("XSproutPromotionUpdateController").getURIBuilder().setInt("promotion_id", a).setExists("current_promotion", !0).getURI();
        new (b("AsyncRequest"))().setURI(a).send()
    }
    function c(a, c) {
        a = b("XSproutPromotionUpdateController").getURIBuilder().setInt("promotion_id", a).setExists("increment_view", !0).getURI();
        new (b("AsyncRequest"))().setURI(a).setHandler(function(a) {
            a.payload && a.payload.clear_badge_on_next_composer && b("ReactComposerActions").setQueueFinishedSproutPromotion(c)
        }).send();
        b("ReactComposerActions").setLoggedSproutPromotionView(c)
    }
    function d(a, c) {
        a = b("XSproutPromotionUpdateController").getURIBuilder().setInt("promotion_id", a).setExists("end_promotion", !0).getURI();
        new (b("AsyncRequest"))().setURI(a).send();
        b("ReactComposerActions").setFinishedSproutPromotion(c)
    }
}
), null);
__d("recollectParser", ["DateTime", "URI", "getByPath", "objectKeys"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = function(a, c, d) {
        c = c.length > 0 ? a != null && typeof a === "object" && b("getByPath")(a, c) : a;
        return c == null ? d ? d.defaultValue : null : c
    }, i = function(a, b) {
        var c = "";
        try {
            c = "when parsing " + JSON.stringify(a)
        } catch (a) {}
        return "Unexpected type of value at path " + b.toString() + " " + c
    }, j = function(a, b, c) {
        if (c === null)
            throw new Error(i(a, b));
        return c
    }, k = {
        array: function(a, b, c, d) {
            a = h(a, b, d);
            return !Array.isArray(a) ? null : a.map(function(a) {
                try {
                    return c(a)
                } catch (a) {
                    return null
                }
            }).filter(Boolean)
        },
        "boolean": function(a, b, c) {
            a = h(a, b, c);
            return typeof a === "boolean" ? a : null
        },
        dateTime: function(a, c, d) {
            a = h(a, c, d);
            if (typeof a !== "number")
                return null;
            c = new (b("DateTime"))(a,0);
            return c instanceof b("DateTime") ? c : null
        },
        "enum": function(a, c, d, e) {
            a = h(a, c, e);
            c = b("objectKeys")(d);
            for (var e = 0; e < c.length; e++)
                if (d[c[e]] === a)
                    return d[c[e]];
            return null
        },
        fbid: function(a, b) {
            a = h(a, b);
            return typeof a === "string" ? a : null
        },
        number: function(a, b, c) {
            a = h(a, b, c);
            return typeof a === "number" ? a : null
        },
        string: function(a, b, c) {
            a = h(a, b, c);
            return typeof a === "string" ? a : null
        },
        uri: function(a, c, d) {
            a = h(a, c, d);
            if (typeof a !== "string")
                return null;
            try {
                return new (g || (g = b("URI")))(a)
            } catch (a) {
                return null
            }
        }
    };
    f.nullable = k;
    a = {
        array: function(a, b, c, d) {
            return j(a, b, k.array(a, b, c, d))
        },
        "boolean": function(a, b, c) {
            return j(a, b, k["boolean"](a, b, c))
        },
        dateTime: function(a, b, c) {
            return j(a, b, k.dateTime(a, b, c))
        },
        "enum": function(a, b, c, d) {
            return j(a, b, k["enum"](a, b, c, d))
        },
        fbid: function(a, b) {
            return j(a, b, k.fbid(a, b))
        },
        number: function(a, b, c) {
            return j(a, b, k.number(a, b, c))
        },
        string: function(a, b, c) {
            return j(a, b, k.string(a, b, c))
        },
        uri: function(a, b, c) {
            return j(a, b, k.uri(a, b, c))
        }
    };
    f.required = a
}
), null);
__d("XStickerPhotoEditorController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/photos/editor/sticker_editor/", {
        grid_id: {
            type: "String"
        },
        feedback_id: {
            type: "String"
        },
        target_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        photo_fbid: {
            type: "Int",
            required: !0
        },
        latest_fbid: {
            type: "Int"
        },
        initial_tab: {
            type: "Enum",
            enumType: 1
        },
        encrypted_photo_id: {
            type: "String"
        },
        enable_text: {
            type: "Bool",
            defaultValue: !0
        },
        enable_stickers: {
            type: "Bool",
            defaultValue: !0
        },
        enable_tagging: {
            type: "Bool",
            defaultValue: !0
        },
        enable_square_crop_mode: {
            type: "Bool",
            defaultValue: !0
        },
        aspect_ratio: {
            type: "Float"
        },
        work_shared_draft_mode: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
