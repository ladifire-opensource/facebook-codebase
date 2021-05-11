if (self.CavalryLogger) {
    CavalryLogger.start_js(["N3\/dq"]);
}

__d("EventListenerImplForCacheStorage", ["requireCond", "cr:1351741"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1351741")
}
), null);
__d("CacheStorage", ["ErrorGuard", "EventListenerImplForCacheStorage", "ExecutionEnvironment", "FBJSON", "WebStorage", "emptyFunction", "killswitch"], (function(a, b, c, d, e, f) {
    var g, h, i = "_@_", j = "3b", k = "CacheStorageVersion", l = {
        length: 0,
        getItem: a = b("emptyFunction"),
        setItem: a,
        clear: a,
        removeItem: a,
        key: a
    };
    c = function() {
        "use strict";
        function a(a) {
            this._store = a
        }
        var b = a.prototype;
        b.getStore = function() {
            return this._store
        }
        ;
        b.keys = function() {
            var a = [];
            for (var b = 0; b < this._store.length; b++) {
                var c = this._store.key(b);
                c != null && a.push(c)
            }
            return a
        }
        ;
        b.get = function(a) {
            return this._store.getItem(a)
        }
        ;
        b.set = function(a, b) {
            this._store.setItem(a, b)
        }
        ;
        b.remove = function(a) {
            this._store.removeItem(a)
        }
        ;
        b.clear = function() {
            this._store.clear()
        }
        ;
        b.clearWithPrefix = function(a) {
            a = a || "";
            var b = this.keys();
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d != null && d.startsWith(a) && this.remove(d)
            }
        }
        ;
        return a
    }();
    d = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            return a.call(this, (c = (g || (g = b("WebStorage"))).getLocalStorage()) != null ? c : l) || this
        }
        c.available = function() {
            return !!(g || (g = b("WebStorage"))).getLocalStorage()
        }
        ;
        return c
    }(c);
    f = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            return a.call(this, (c = (g || (g = b("WebStorage"))).getSessionStorage()) != null ? c : l) || this
        }
        c.available = function() {
            return !!(g || (g = b("WebStorage"))).getSessionStorage()
        }
        ;
        return c
    }(c);
    var m = function() {
        "use strict";
        function a() {
            this._store = {}
        }
        var b = a.prototype;
        b.getStore = function() {
            return this._store
        }
        ;
        b.keys = function() {
            return Object.keys(this._store)
        }
        ;
        b.get = function(a) {
            return this._store[a] === void 0 ? null : this._store[a]
        }
        ;
        b.set = function(a, b) {
            this._store[a] = b
        }
        ;
        b.remove = function(a) {
            a in this._store && delete this._store[a]
        }
        ;
        b.clear = function() {
            this._store = {}
        }
        ;
        b.clearWithPrefix = function(a) {
            a = a || "";
            var b = this.keys();
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.startsWith(a) && this.remove(d)
            }
        }
        ;
        a.available = function() {
            return !0
        }
        ;
        return a
    }()
      , n = {
        memory: m,
        localstorage: d,
        sessionstorage: f
    };
    a = function() {
        "use strict";
        function a(a, c) {
            this._changeCallbacks = [];
            this._key_prefix = "_cs_";
            this._exceptionMessage = null;
            c && (this._key_prefix = c);
            if (a == "AUTO" || !a)
                for (var d in n) {
                    c = n[d];
                    if (c.available()) {
                        a = d;
                        break
                    }
                }
            a && (!n[a] || !n[a].available() ? (b("ExecutionEnvironment").canUseDOM,
            this._backend = new m()) : this._backend = new n[a]());
            c = this.useBrowserStorage();
            c && b("EventListenerImplForCacheStorage").listen(window, "storage", this._onBrowserValueChanged.bind(this));
            a = c ? this._backend.getStore().getItem(k) : this._backend.getStore()[k];
            a !== j && (b("killswitch")("CACHE_STORAGE_MODULE_CLEAR_OWN_KEYS") ? this.clear() : this.clearOwnKeys())
        }
        var c = a.prototype;
        c.useBrowserStorage = function() {
            return this._backend.getStore() === (g || (g = b("WebStorage"))).getLocalStorage() || this._backend.getStore() === (g || (g = b("WebStorage"))).getSessionStorage()
        }
        ;
        c.addValueChangeCallback = function(a) {
            var b = this;
            this._changeCallbacks.push(a);
            return {
                remove: function() {
                    b._changeCallbacks.slice(b._changeCallbacks.indexOf(a), 1)
                }
            }
        }
        ;
        c._onBrowserValueChanged = function(a) {
            this._changeCallbacks && String(a.key).startsWith(this._key_prefix) && this._changeCallbacks.forEach(function(b) {
                b(a.key, a.oldValue, a.newValue)
            })
        }
        ;
        c.keys = function() {
            var a = this
              , c = [];
            (h || (h = b("ErrorGuard"))).guard(function() {
                if (a._backend) {
                    var b = a._backend.keys()
                      , d = a._key_prefix.length;
                    for (var e = 0; e < b.length; e++)
                        b[e].substr(0, d) == a._key_prefix && c.push(b[e].substr(d))
                }
            }, {
                name: "CacheStorage"
            })();
            return c
        }
        ;
        c.set = function(c, d, e) {
            if (this._backend) {
                if (this.useBrowserStorage() && a._persistentWritesDisabled) {
                    this._exceptionMessage = "writes disabled";
                    return !1
                }
                var f;
                typeof d === "string" ? f = i + d : !e ? (f = {
                    __t: Date.now(),
                    __v: d
                },
                f = b("FBJSON").stringify(f)) : f = b("FBJSON").stringify(d);
                e = this._backend;
                d = this._key_prefix + c;
                c = !0;
                var g = null;
                while (c)
                    try {
                        g = null,
                        e.set(d, f),
                        c = !1
                    } catch (a) {
                        g = a;
                        var h = e.keys().length;
                        this._evictCacheEntries();
                        c = e.keys().length < h
                    }
                if (g !== null) {
                    this._exceptionMessage = g.message;
                    return !1
                } else {
                    this._exceptionMessage = null;
                    return !0
                }
            }
            this._exceptionMessage = "no back end";
            return !1
        }
        ;
        c.getLastSetExceptionMessage = function() {
            return this._exceptionMessage
        }
        ;
        c.getStorageKeyCount = function() {
            var a = this._backend;
            return a ? a.keys().length : 0
        }
        ;
        c._evictCacheEntries = function() {
            var c = []
              , d = this._backend;
            d.keys().forEach(function(f) {
                if (f === k)
                    return;
                var g = d.get(f);
                if (g === void 0) {
                    d.remove(f);
                    return
                }
                if (a._hasMagicPrefix(g))
                    return;
                try {
                    g = b("FBJSON").parse(g, e.id)
                } catch (a) {
                    d.remove(f);
                    return
                }
                g && g.__t !== void 0 && g.__v !== void 0 && c.push([f, g.__t])
            });
            c.sort(function(a, b) {
                return a[1] - b[1]
            });
            for (var f = 0; f < Math.ceil(c.length / 2); f++)
                d.remove(c[f][0])
        }
        ;
        c.get = function(c, d) {
            var f;
            if (this._backend) {
                (h || (h = b("ErrorGuard"))).applyWithGuard(function() {
                    f = this._backend.get(this._key_prefix + c)
                }, this, [], {
                    onError: function() {
                        f = null
                    },
                    name: "CacheStorage:get"
                });
                if (f != null)
                    if (a._hasMagicPrefix(f))
                        f = f.substr(i.length);
                    else
                        try {
                            f = b("FBJSON").parse(f, e.id),
                            f && f.__t !== void 0 && f.__v !== void 0 && (f = f.__v)
                        } catch (a) {
                            f = void 0
                        }
                else
                    f = void 0
            }
            f === void 0 && d !== void 0 && (f = d,
            this.set(c, f));
            return f
        }
        ;
        c.remove = function(a) {
            this._backend && (h || (h = b("ErrorGuard"))).applyWithGuard(this._backend.remove, this._backend, [this._key_prefix + a], {
                name: "CacheStorage:remove"
            })
        }
        ;
        c._setVersion = function() {
            this.useBrowserStorage() ? this._backend.getStore().setItem(k, j) : this._backend.getStore()[k] = j
        }
        ;
        c.clear = function() {
            this._backend && ((h || (h = b("ErrorGuard"))).applyWithGuard(this._backend.clear, this._backend, [], {
                name: "CacheStorage:clear"
            }),
            this._setVersion())
        }
        ;
        c.clearOwnKeys = function() {
            this._backend && ((h || (h = b("ErrorGuard"))).applyWithGuard(this._backend.clearWithPrefix, this._backend, [this._key_prefix], {
                name: "CacheStorage:clearOwnKeys"
            }),
            this._setVersion())
        }
        ;
        a.getAllStorageTypes = function() {
            return Object.keys(n)
        }
        ;
        a._hasMagicPrefix = function(a) {
            return a.substr(0, i.length) === i
        }
        ;
        a.disablePersistentWrites = function() {
            a._persistentWritesDisabled = !0
        }
        ;
        return a
    }();
    a._persistentWritesDisabled = !1;
    e.exports = a
}
), null);
