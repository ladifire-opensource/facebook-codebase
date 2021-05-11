if (self.CavalryLogger) {
    CavalryLogger.start_js(["3RBeS"]);
}

__d("BanzaiScuba", ["Banzai", "FBLogger"], (function(a, b, c, d, e, f) {
    var g = "scuba_sample";
    a = function() {
        function a(a, c, d) {
            this.posted = !1,
            a || b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),
            this.dataset = a,
            this.$1 = c,
            this.options = d
        }
        var c = a.prototype;
        c.$2 = function(a, c, d) {
            if (this.posted) {
                b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");
                return a
            }
            a = a || {};
            a[c] = d;
            return a
        }
        ;
        c.addNormal = function(a, b) {
            this.normal = this.$2(this.normal, a, b);
            return this
        }
        ;
        c.addInteger = function(a, b) {
            this["int"] = this.$2(this["int"], a, b);
            return this
        }
        ;
        c.addDenorm = function(a, b) {
            this.denorm = this.$2(this.denorm, a, b);
            return this
        }
        ;
        c.addTagSet = function(a, b) {
            this.tags = this.$2(this.tags, a, b);
            return this
        }
        ;
        c.addNormVector = function(a, b) {
            this.normvector = this.$2(this.normvector, a, b);
            return this
        }
        ;
        c.post = function(a) {
            if (this.posted) {
                b("FBLogger")("BanzaiScuba").warn("Trying to re-post");
                return
            }
            if (!this.dataset)
                return;
            var c = {};
            c._ds = this.dataset;
            c._options = this.options;
            this.normal && (c.normal = this.normal);
            this["int"] && (c["int"] = this["int"]);
            this.denorm && (c.denorm = this.denorm);
            this.tags && (c.tags = this.tags);
            this.normvector && (c.normvector = this.normvector);
            this.$1 !== null && this.$1 !== "" && this.$1 !== void 0 && (c._lid = this.$1);
            b("Banzai").post(g, c, a);
            this.posted = !0
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("monitorCodeUse", ["invariant", "BanzaiScuba", "ErrorNormalizeUtils", "ScriptPath", "SiteData", "forEachObject", "gkx", "ReactCurrentOwner"], (function(a, b, c, d, e, f, g) {
    var h;
    function i(a) {
        a = a.type;
        if (typeof a === "string")
            return a;
        return typeof a === "function" ? a.displayName || a.name : null
    }
    function j(a) {
        var b = 1e3
          , c = [];
        while (a && c.length < b)
            c.push(i(a) || ""),
            typeof a.tag === "number" ? a = a["return"] : a = a._currentElement && a._currentElement._owner;
        return c
    }
    function k(a) {
        return Array.isArray(a) ? "[...]" : l(a)
    }
    function l(a) {
        if (a == null)
            return "" + String(a);
        if (Array.isArray(a)) {
            if (a.length > 10) {
                var b = a.slice(0, 5).map(k);
                return "[" + b.join(", ") + ", ...]"
            }
            b = a.map(k);
            return "[" + b.join(", ") + "]"
        }
        if (typeof a === "string")
            return "'" + a + "'";
        if (typeof a === "object") {
            b = Object.keys(a).map(function(a) {
                return a + "=..."
            });
            return "{" + b.join(", ") + "}"
        }
        return String(a)
    }
    function m(a) {
        return a.identifier || ""
    }
    function n(a) {
        var b;
        return ((b = a.script) != null ? b : "") + "  " + ((b = a.line) != null ? b : "") + ":" + ((b = a.column) != null ? b : "")
    }
    var o;
    function a(a, c, d) {
        c === void 0 && (c = {});
        d === void 0 && (d = {});
        a && !/[^a-z0-9_]/.test(a) || g(0, 2789);
        var e = {};
        d.sampleRate != null && (e.sampleRate = d.sampleRate);
        var f = new (b("BanzaiScuba"))("core_monitor",null,e);
        f.addNormal("event", a);
        o === void 0 && (o = b("gkx")("708253"));
        f.addNormal("is_comet", o);
        e = h || (h = b("ReactCurrentOwner"));
        f.addNormVector("owners", j(e.current));
        f.addNormal("uri", window.location.href);
        f.addNormal("script_path", b("ScriptPath").getScriptPath());
        f.addNormal("devserver_username", b("SiteData").devserver_username || "");
        e = !1;
        d.forceIncludeStackTrace && (e = !0);
        if (e)
            try {
                d = new Error(a);
                d.framesToPop = 1;
                e = b("ErrorNormalizeUtils").normalizeError(d).stackFrames;
                a = e.map(m);
                d = e.map(n).join("\n");
                f.addNormVector("stacktrace", a);
                f.addDenorm("stack", d)
            } catch (a) {}
        b("forEachObject")(c, function(a, b, c) {
            typeof a === "string" ? f.addNormal(b, a) : typeof a === "number" && (a | 0) === a ? f.addInteger(b, a) : Array.isArray(a) ? f.addNormVector(b, a.map(l)) : f.addNormal(b, l(a))
        });
        f.post()
    }
    e.exports = a
}
), null);
__d("Dispatcher_DEPRECATED", ["invariant", "FBLogger", "monitorCodeUse"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "ID_";
    a = function() {
        function a() {
            this.$1 = new Map(),
            this.$2 = !1,
            this.$3 = new Map(),
            this.$4 = new Map(),
            this.$5 = 1
        }
        var b = a.prototype;
        b.register = function(a, b) {
            b = this.__genID(b);
            this.$1.set(b, a);
            return b
        }
        ;
        b.unregister = function(a) {
            this.$1.get(a) || g(0, 1331, a),
            this.$1["delete"](a)
        }
        ;
        b.waitFor = function(a) {
            this.$2 || g(0, 1332);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (this.$4.get(c)) {
                    this.$3.get(c) || g(0, 2380, c);
                    continue
                }
                this.$1.get(c) || g(0, 2381, c);
                this.$7(c)
            }
        }
        ;
        b.dispatch = function(a) {
            var b = this;
            j(this.$2, this.$6, a);
            this.$8(a);
            try {
                this.$1.forEach(function(a, c) {
                    if (b.$4.get(c))
                        return;
                    b.$7(c)
                })
            } finally {
                this.$9()
            }
        }
        ;
        b.isDispatching = function() {
            return this.$2
        }
        ;
        b.$7 = function(a) {
            this.$4.set(a, !0);
            var b = this.$1.get(a);
            b && this.__invokeCallback(a, b, this.$6);
            this.$3.set(a, !0)
        }
        ;
        b.__invokeCallback = function(a, b, c) {
            b(c)
        }
        ;
        b.$8 = function(a) {
            for (var b = this.$1.keys(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
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
                this.$4.set(e, !1);
                this.$3.set(e, !1)
            }
            this.$6 = a;
            this.$2 = !0
        }
        ;
        b.$9 = function() {
            delete this.$6,
            this.$2 = !1
        }
        ;
        b.__genID = function(a) {
            var b = a ? a + "_" : h;
            a = a || b + this.$5++;
            while (this.$1.get(a))
                a = b + this.$5++;
            return a
        }
        ;
        return a
    }();
    e.exports = a;
    function i(a) {
        var b = "<unknown>";
        if (!a)
            return b;
        if (typeof a.type === "string")
            return a.type;
        if (typeof a.actionType === "string")
            return a.actionType;
        if (!a.action)
            return b;
        if (typeof a.action.type === "string")
            return a.action.type;
        return typeof a.action.actionType === "string" ? a.action.actionType : b
    }
    function j(a, c, d) {
        if (a) {
            a = new Error("Cannot dispatch in the middle of a dispatch");
            b("FBLogger")("flux_dispatcher").catching(a).mustfix("Tried to dispatch action %s while already dispatching %s", i(d), i(c));
            throw a
        }
    }
}
), null);
__d("fbglyph", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        throw new Error("fbglyph(" + JSON.stringify(a) + "): Unexpected fbglyph reference.")
    }
}
), null);
