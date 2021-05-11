if (self.CavalryLogger) {
    CavalryLogger.start_js(["Kdw3u"]);
}

__d("CometFocusTableContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        FocusCell: null,
        FocusRow: null,
        FocusTable: null
    });
    e.exports = c
}
), null);
__d("RoomsCollapsedCreateRoomTilePlaceholder.react", ["BaseGlimmer.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx("div", {
            className: "scb9dxdr dflh9lhu",
            children: g.jsx(b("BaseGlimmer.react"), {
                className: "ygsqo3sx f9o22wc5 myj7ivm5 ad2k81qe km676qkl qypqp5cg emzo65vh fmqxjp7s czkt41v7 orhb3f3m",
                index: 0
            })
        })
    }
}
), null);
__d("CometLruCache", ["recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.create = a;
    var g = function() {
        function a(a) {
            this.$1 = a,
            a <= 0 && b("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.", "CometLruCache"),
            this.$2 = new Map()
        }
        var c = a.prototype;
        c.set = function(a, b) {
            this.$2["delete"](a);
            this.$2.set(a, b);
            if (this.$2.size > this.$1) {
                a = this.$2.keys().next();
                a.done || this.$2["delete"](a.value)
            }
        }
        ;
        c.get = function(a) {
            var b = this.$2.get(a);
            b != null && (this.$2["delete"](a),
            this.$2.set(a, b));
            return b
        }
        ;
        c.has = function(a) {
            return this.$2.has(a)
        }
        ;
        c["delete"] = function(a) {
            this.$2["delete"](a)
        }
        ;
        c.size = function() {
            return this.$2.size
        }
        ;
        c.capacity = function() {
            return this.$1 - this.$2.size
        }
        ;
        c.clear = function() {
            this.$2.clear()
        }
        ;
        return a
    }();
    function a(a) {
        return new g(a)
    }
}
), null);
__d("ConstUriUtils", ["CometLruCache", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "UriNeedRawQuerySVConfig", "URIRFC3986", "URISchemes", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isSubdomainOfDomain = r;
    f.isConstUri = a;
    var g, h, i, j = b("CometLruCache").create(5e3), k = new RegExp("(^|\\.)facebook\\.com$","i"), l = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"), m = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"), n = b("UriNeedRawQuerySVConfig").uris.map(function(a) {
        return {
            domain: a,
            valid: s(a)
        }
    });
    function o(a, c) {
        var d = {};
        if (a != null)
            for (var a = a.entries(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
                    if (f >= a.length)
                        break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done)
                        break;
                    g = f.value
                }
                g = g;
                d[g[0]] = g[1]
            }
        else
            b("FBLogger")("ConstUri").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
        return c.serialize(d)
    }
    function p(a, c) {
        var d = g || (g = b("PHPQuerySerializer"));
        ["http", "https"].includes(c) && q(a) && (d = b("PHPQuerySerializerNoEncoding"));
        return d
    }
    function q(a) {
        return a != null && n.some(function(b) {
            return b.valid && r(a, b.domain)
        })
    }
    function r(a, b) {
        if (b === "" || a === "")
            return !1;
        if (a.endsWith(b)) {
            b = a.length - b.length - 1;
            if (b === -1 || a[b] === ".")
                return !0
        }
        return !1
    }
    function s(a) {
        return !m.test(a)
    }
    function t(a, b) {
        var c = b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
        c = b.domain != null ? p(b.domain, c) : a.getSerializer();
        c = {
            domain: a.getDomain(),
            fragment: a.getFragment(),
            fragmentSeparator: a.hasFragmentSeparator(),
            isGeneric: a.isGeneric(),
            originalRawQuery: a.getOriginalRawQuery(),
            path: a.getPath(),
            port: a.getPort(),
            protocol: a.getProtocol(),
            queryParams: a.getQueryParams(),
            serializer: c,
            subdomain: a.getSubDomain()
        };
        a = babelHelpers["extends"]({}, c, b);
        c = b.queryParams != null && b.queryParams.size !== 0;
        return y.getUribyObject(a, c)
    }
    function u(a, b, c, d) {
        c === void 0 && (c = !1);
        var e = a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : ""
          , f = a.domain !== "" ? a.domain : ""
          , g = a.port !== "" ? ":" + a.port : ""
          , h = a.path !== "" ? a.path : e !== "" || f !== "" || g !== "" ? "/" : "";
        c = v(f, a.originalRawQuery, a.queryParams, b, c, (b = d) != null ? b : a.serializer);
        d = c.length > 0 ? "?" : "";
        b = a.fragment !== "" ? "#" + a.fragment : "";
        a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
        return "" + e + f + g + h + d + c + a + b
    }
    function v(a, b, c, d, e, f) {
        e === void 0 && (e = !1);
        if (!d && (e || q(a))) {
            return (d = b) != null ? d : ""
        }
        return o(c, f)
    }
    function w(a) {
        var c = a.trim();
        c = (h || (h = b("URIRFC3986"))).parse(c) || {
            fragment: null,
            host: null,
            isGenericURI: !1,
            query: null,
            scheme: null,
            userinfo: null
        };
        var d = c.host || ""
          , e = d.split(".");
        e = e.length >= 3 ? e[0] : "";
        var f = p(d, c.scheme || "")
          , g = f.deserialize(c.query || "") || {};
        g = new Map(Object.entries(g));
        g = x({
            domain: d,
            fragment: c.fragment || "",
            fragmentSeparator: c.fragment === "",
            isGeneric: c.isGenericURI,
            originalRawQuery: c.query,
            path: c.path || "",
            port: c.port != null ? String(c.port) : "",
            protocol: (c.scheme || "").toLowerCase(),
            queryParams: g,
            serializer: f,
            subdomain: e,
            userInfo: (d = c == null ? void 0 : c.userinfo) != null ? d : ""
        }, a);
        return g
    }
    function x(a, c) {
        var d = {
            components: babelHelpers["extends"]({}, a),
            error: "",
            valid: !0
        }
          , e = d.components;
        if (!(i || (i = b("URISchemes"))).isAllowed(a.protocol)) {
            d.valid = !1;
            d.error = 'The URI protocol "' + String(a.protocol) + '" is not allowed.';
            return d
        }
        if (!s(a.domain || "")) {
            d.valid = !1;
            d.error = "This is an unsafe domain " + String(a.domain);
            return d
        }
        e.port = a.port != null && String(a.port) || "";
        if (Boolean(a.userInfo)) {
            d.valid = !1;
            d.error = "Invalid URI: (userinfo is not allowed in a URI " + String(a.userInfo) + ")";
            return d
        }
        a = c != null && c !== "" ? c : u(e, !1);
        if (e.domain === "" && e.path.indexOf("\\") !== -1) {
            d.valid = !1;
            d.error = "Invalid URI: (no domain but multiple back-slashes " + a + ")";
            return d
        }
        if (!e.protocol && l.test(a)) {
            d.valid = !1;
            d.error = "Invalid URI: (unsafe protocol-relative URI " + a + ")";
            return d
        }
        if (e.domain !== "" && e.path !== "" && !e.path.startsWith("/")) {
            d.valid = !1;
            d.error = "Invalid URI: (domain and pathwhere path lacks leading slash " + a + ")";
            return d
        }
        return d
    }
    var y = function() {
        function a(a) {
            this.queryParams = new Map(),
            this.domain = a.domain,
            this.fragment = a.fragment,
            this.fragmentSeparator = Boolean(a.fragmentSeparator),
            this.isGenericProtocol = Boolean(a.isGeneric),
            this.path = a.path,
            this.originalRawQuery = a.originalRawQuery,
            this.port = a.port,
            this.protocol = a.protocol,
            this.queryParams = a.queryParams,
            this.serializer = a.serializer,
            this.subdomain = a.subdomain
        }
        var c = a.prototype;
        c.addQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return t(this, {
                    queryParams: c
                })
            }
            return this
        }
        ;
        c.addQueryParams = function(a) {
            if (a.size > 0) {
                var b = this.getQueryParams();
                a.forEach(function(a, c) {
                    b.set(c, a)
                });
                return t(this, {
                    queryParams: b
                })
            }
            return this
        }
        ;
        c.addQueryParamString = function(a) {
            if (Boolean(a)) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return t(this, {
                    queryParams: b
                })
            }
            return this
        }
        ;
        c.addTrailingSlash = function() {
            var a = this.getPath();
            return a.length > 0 && a[a.length - 1] !== "/" ? this.setPath(a + "/") : this
        }
        ;
        c.getDomain = function() {
            return this.domain
        }
        ;
        c.getFragment = function() {
            return this.fragment
        }
        ;
        c.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        }
        ;
        c.getOriginalRawQuery = function() {
            return this.originalRawQuery
        }
        ;
        c.getPath = function() {
            return this.path
        }
        ;
        c.getPort = function() {
            return this.port
        }
        ;
        c.getProtocol = function() {
            return this.protocol.toLowerCase()
        }
        ;
        c.getQualifiedUri = function() {
            if (!this.getDomain()) {
                var b = String(window.location.href);
                b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
                return a.getUri(b + this.toString())
            }
            return this
        }
        ;
        c.getQueryParam = function(a) {
            a = this.queryParams.get(a);
            if (typeof a === "string")
                return a;
            else {
                a = JSON.stringify(a);
                return a == null ? a : JSON.parse(a)
            }
        }
        ;
        c.getQueryParams = function() {
            return new Map(JSON.parse(JSON.stringify(Array.from(this.queryParams))))
        }
        ;
        c.getQueryString = function(a) {
            a === void 0 && (a = !1);
            return v(this.domain, this.originalRawQuery, this.queryParams, !1, a, this.serializer)
        }
        ;
        c.getRegisteredDomain = function() {
            if (!this.getDomain())
                return "";
            if (!this.isFacebookUri())
                return null;
            var a = this.getDomain().split(".")
              , b = a.indexOf("facebook");
            b === -1 && (b = a.indexOf("workplace"));
            return a.slice(b).join(".")
        }
        ;
        c.getSerializer = function() {
            return this.serializer
        }
        ;
        c.getSubDomain = function() {
            return this.subdomain
        }
        ;
        c.getUnqualifiedUri = function() {
            if (this.getDomain()) {
                var b = this.toString();
                return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)))
            }
            return this
        }
        ;
        a.getUri = function(c) {
            c = c.trim();
            var d = j.get(c);
            if (d == null) {
                var e = w(c);
                if (e.valid)
                    d = new a(e.components),
                    j.set(c, d);
                else {
                    b("recoverableViolation")(e.error, "ConstUri");
                    return null
                }
            }
            return d
        }
        ;
        a.getUribyObject = function(c, d) {
            var e = u(c, d)
              , f = j.get(e);
            if (f == null) {
                d && (c.originalRawQuery = o(c.queryParams, c.serializer));
                d = x(c);
                if (d.valid)
                    f = new a(d.components),
                    j.set(e, f);
                else {
                    b("recoverableViolation")(d.error, "ConstUri");
                    return null
                }
            }
            return f
        }
        ;
        c.hasFragmentSeparator = function() {
            return this.fragmentSeparator
        }
        ;
        c.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment())
        }
        ;
        c.isFacebookUri = function() {
            var a = this.toString();
            if (a === "")
                return !1;
            return !this.getDomain() && !this.getProtocol() ? !0 : ["https", "http"].indexOf(this.getProtocol()) !== -1 && k.test(this.getDomain())
        }
        ;
        c.isGeneric = function() {
            return this.isGenericProtocol
        }
        ;
        c.isSameOrigin = function(a) {
            if (this.getProtocol() && this.getProtocol() !== a.getProtocol())
                return !1;
            if (this.getDomain() && this.getDomain() !== a.getDomain())
                return !1;
            if (this.getPort() && this.getPort() !== a.getPort())
                return !1;
            return this.toString() === "" || a.toString() === "" ? !1 : !0
        }
        ;
        c.isSubdomainOfDomain = function(b) {
            var c = a.getUri(b);
            return c != null && r(this.domain, b)
        }
        ;
        c.isSecure = function() {
            return this.getProtocol() === "https"
        }
        ;
        c.removeQueryParams = function(a) {
            if (Array.isArray(a) && a.length > 0) {
                var b = this.getQueryParams();
                a.map(function(a) {
                    return b["delete"](a)
                });
                return t(this, {
                    queryParams: b
                })
            }
            return this
        }
        ;
        c.removeQueryParam = function(a) {
            if (Boolean(a)) {
                var b = this.getQueryParams();
                b["delete"](a);
                return t(this, {
                    queryParams: b
                })
            }
            return this
        }
        ;
        c.replaceQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return t(this, {
                    queryParams: c
                })
            }
            return this
        }
        ;
        c.replaceQueryParams = function(a) {
            return t(this, {
                queryParams: a
            })
        }
        ;
        c.replaceQueryParamString = function(a) {
            if (a != null) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return t(this, {
                    queryParams: b
                })
            }
            return this
        }
        ;
        c.setDomain = function(a) {
            if (Boolean(a)) {
                var b = a.split(".");
                b = b.length >= 3 ? b[0] : "";
                return t(this, {
                    domain: a,
                    subdomain: b
                })
            }
            return this
        }
        ;
        c.setFragment = function(a) {
            return Boolean(a) ? a === "#" ? t(this, {
                fragmentSeparator: !0
            }) : t(this, {
                fragment: a
            }) : this
        }
        ;
        c.setPath = function(a) {
            return a != null ? t(this, {
                path: a
            }) : this
        }
        ;
        c.setPort = function(a) {
            return Boolean(a) ? t(this, {
                port: a
            }) : this
        }
        ;
        c.setProtocol = function(a) {
            return Boolean(a) ? t(this, {
                protocol: a
            }) : this
        }
        ;
        c.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        }
        ;
        c.setSubDomain = function(a) {
            if (Boolean(a)) {
                var b = this.domain.split(".");
                b.length >= 3 ? b[0] = a : b.unshift(a);
                return t(this, {
                    domain: b.join("."),
                    subdomain: a
                })
            }
            return this
        }
        ;
        c.stripTrailingSlash = function() {
            return this.setPath(this.getPath().replace(/\/$/, ""))
        }
        ;
        c.$1 = function(a, b) {
            b === void 0 && (b = !1);
            return u({
                domain: this.domain,
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: this.queryParams,
                serializer: a,
                subdomain: this.subdomain,
                userInfo: ""
            }, !1, b)
        }
        ;
        c.toStringRawQuery = function() {
            this.rawStringValue == null && (this.rawStringValue = this.$1(b("PHPQuerySerializerNoEncoding")));
            return this.rawStringValue
        }
        ;
        c.toString = function() {
            this.stringValue == null && (this.stringValue = this.$1(this.serializer));
            return this.stringValue
        }
        ;
        c.toStringPreserveQuery = function() {
            return this.$1(this.serializer, !0)
        }
        ;
        a.isValidUri = function(b) {
            var c = j.get(b);
            if (c != null)
                return !0;
            c = w(b);
            if (c.valid) {
                j.set(b, new a(c.components));
                return !0
            }
            return !1
        }
        ;
        return a
    }();
    function a(a) {
        if (a instanceof y)
            return a;
        else
            return null
    }
    c = y.getUri;
    f.getUri = c;
    d = y.isValidUri;
    f.isValidUri = d
}
), null);
__d("classWithMixins", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, b) {
        var c = function() {
            a.apply(this, arguments)
        };
        c.prototype = Object.assign(Object.create(a.prototype), b.prototype);
        return c
    }
}
), null);
__d("ComposerPublishFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743461");
    c = b("FalcoLoggerInternal").create("composer_publish_flow", a);
    e.exports = c
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
