/**
 * Code pulled from https://static.xx.fbcdn.net/rsrc.php/v3iSgH4/y6/l/en_US/Hd9DSuyOZWy.js
 * Originally loaded from allenbwest.com
 * Details in this post: https://funnymonkey.com/2017/adtech-and-misinformation-the-middlemen-who-sell-to-all-sides
 */

if (self.CavalryLogger) {
    CavalryLogger.start_js(["Z3urS"]);
}

self.__DEV__ = self.__DEV__ || 0;
'use strict';
if (!Array.from) Array.from = function(a) {
    if (a == null) throw new TypeError('Object is null or undefined');
    var b = arguments[1],
        c = arguments[2],
        d = this,
        e = Object(a),
        f = typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator',
        g = typeof b === 'function',
        h = typeof e[f] === 'function',
        i = 0,
        j, k;
    if (h) {
        j = typeof d === 'function' ? new d() : [];
        var l = e[f](),
            m;
        while (!(m = l.next()).done) {
            k = m.value;
            if (g) k = b.call(c, k, i);
            j[i] = k;
            i += 1;
        }
        j.length = i;
        return j;
    }
    var n = e.length;
    if (isNaN(n) || n < 0) n = 0;
    j = typeof d === 'function' ? new d(n) : new Array(n);
    while (i < n) {
        k = e[i];
        if (g) k = b.call(c, k, i);
        j[i] = k;
        i += 1;
    }
    j.length = i;
    return j;
};

'use strict';
(function(a) {
    function b(c, d) {
        if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
        if (typeof c !== 'function') throw new TypeError('predicate must be a function');
        var e = Object(this),
            f = e.length >>> 0;
        for (var g = 0; g < f; g++)
            if (c.call(d, e[g], g, e)) return g;
        return -1;
    }
    if (!Array.prototype.findIndex) Array.prototype.findIndex = b;
    if (!Array.prototype.find) Array.prototype.find = function(c, d) {
        if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
        var e = b.call(this, c, d);
        return e === -1 ? a : this[e];
    };
    if (!Array.prototype.fill) Array.prototype.fill = function(c) {
        if (this == null) throw new TypeError('Array.prototype.fill called on null or undefined');
        var d = Object(this),
            e = d.length >>> 0,
            f = arguments[1],
            g = f >> 0,
            h = g < 0 ? Math.max(e + g, 0) : Math.min(g, e),
            i = arguments[2],
            j = i === a ? e : i >> 0,
            k = j < 0 ? Math.max(e + j, 0) : Math.min(j, e);
        while (h < k) {
            d[h] = c;
            h++;
        }
        return d;
    };
})();

(function() {
    'use strict';
    var a = Array.prototype.indexOf;
    if (!Array.prototype.includes) Array.prototype.includes = function(e) {
        'use strict';
        if (e !== undefined && Array.isArray(this) && !Number.isNaN(e)) return a.apply(this, arguments) !== -1;
        var f = Object(this),
            g = f.length ? b(f.length) : 0;
        if (g === 0) return false;
        var h = arguments.length > 1 ? c(arguments[1]) : 0,
            i = h < 0 ? Math.max(g + h, 0) : h,
            j = Number.isNaN(e);
        while (i < g) {
            var k = f[i];
            if (k === e || j && Number.isNaN(k)) return true;
            i++;
        }
        return false;
    };

    function b(e) {
        return Math.min(Math.max(c(e), 0), Number.MAX_SAFE_INTEGER);
    }

    function c(e) {
        var f = Number(e);
        return Number.isFinite(f) && f !== 0 ? d(f) * Math.floor(Math.abs(f)) : f;
    }

    function d(e) {
        return e >= 0 ? 1 : -1;
    }
})();
(function() {
    var a = {},
        b = function i(j, k) {
            if (!j && !k) return null;
            var l = {};
            if (typeof j !== 'undefined') l.type = j;
            if (typeof k !== 'undefined') l.signature = k;
            return l;
        },
        c = function i(j, k) {
            return b(j && /^[A-Z]/.test(j) ? j : undefined, k && (k.params && k.params.length || k.returns) ? 'function(' + (k.params ? k.params.map(function(l) {
                return /\?/.test(l) ? '?' + l.replace('?', '') : l;
            }).join(',') : '') + ')' + (k.returns ? ':' + k.returns : '') : undefined);
        },
        d = function i(j, k, l) {
            return j;
        },
        e = function i(j, k, l) {
            if ('sourcemeta' in __transform_includes) j.__SMmeta = k;
            if ('typechecks' in __transform_includes) {
                var m = c(k ? k.name : undefined, l);
                if (m) __w(j, m);
            }
            return j;
        },
        f = function i(j, k, l) {
            return l.apply(j, k);
        },
        g = function i(j, k, l, m) {
            if (m && m.params) __t.apply(j, m.params);
            var n = l.apply(j, k);
            if (m && m.returns) __t([n, m.returns]);
            return n;
        },
        h = function i(j, k, l, m, n) {
            if (n) {
                if (!n.callId) n.callId = n.module + ':' + (n.line || 0) + ':' + (n.column || 0);
                var o = n.callId;
                a[o] = (a[o] || 0) + 1;
            }
            return l.apply(j, k);
        };
    if (typeof __transform_includes === 'undefined') {
        __annotator = d;
        __bodyWrapper = f;
    } else {
        __annotator = e;
        if ('codeusage' in __transform_includes) {
            __annotator = d;
            __bodyWrapper = h;
            __bodyWrapper.getCodeUsage = function() {
                return a;
            };
            __bodyWrapper.clearCodeUsage = function() {
                a = {};
            };
        } else if ('typechecks' in __transform_includes) {
            __bodyWrapper = g;
        } else __bodyWrapper = f;
    }
})();
__t = function(a) {
    return a[0];
};
__w = function(a) {
    return a;
};

(function() {
    if (Object.assign) return;
    var a = Object.prototype.hasOwnProperty,
        b;
    if (Object.keys && Object.keys.name !== 'object_keys_polyfill') {
        b = function c(d, e) {
            var f = Object.keys(e);
            for (var g = 0; g < f.length; g++) d[f[g]] = e[f[g]];
        };
    } else b = function c(d, e) {
        for (var f in e)
            if (a.call(e, f)) d[f] = e[f];
    };
    Object.assign = function(c, d) {
        if (c == null) throw new TypeError('Object.assign target cannot be null or undefined');
        var e = Object(c);
        for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            if (g != null) b(e, Object(g));
        }
        return e;
    };
})();
(function(a, b) {
    var c = 'keys',
        d = 'values',
        e = 'entries',
        f = function() {
            var l = h(Array),
                m = void 0;
            if (!l) m = function() {
                function n(o, p) {
                    'use strict';
                    this.$ArrayIterator1 = o;
                    this.$ArrayIterator2 = p;
                    this.$ArrayIterator3 = 0;
                }
                n.prototype.next = function() {
                    'use strict';
                    if (this.$ArrayIterator1 == null) return {
                        value: b,
                        done: true
                    };
                    var o = this.$ArrayIterator1,
                        p = this.$ArrayIterator1.length,
                        q = this.$ArrayIterator3,
                        r = this.$ArrayIterator2;
                    if (q >= p) {
                        this.$ArrayIterator1 = b;
                        return {
                            value: b,
                            done: true
                        };
                    }
                    this.$ArrayIterator3 = q + 1;
                    if (r === c) {
                        return {
                            value: q,
                            done: false
                        };
                    } else if (r === d) {
                        return {
                            value: o[q],
                            done: false
                        };
                    } else if (r === e) return {
                        value: [q, o[q]],
                        done: false
                    };
                };
                n.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                    'use strict';
                    return this;
                };
                return n;
            }();
            return {
                keys: l ? function(n) {
                    return n.keys();
                } : function(n) {
                    return new m(n, c);
                },
                values: l ? function(n) {
                    return n.values();
                } : function(n) {
                    return new m(n, d);
                },
                entries: l ? function(n) {
                    return n.entries();
                } : function(n) {
                    return new m(n, e);
                }
            };
        }(),
        g = function() {
            var l = h(String),
                m = void 0;
            if (!l) m = function() {
                function n(o) {
                    'use strict';
                    this.$StringIterator1 = o;
                    this.$StringIterator2 = 0;
                }
                n.prototype.next = function() {
                    'use strict';
                    if (this.$StringIterator1 == null) return {
                        value: b,
                        done: true
                    };
                    var o = this.$StringIterator2,
                        p = this.$StringIterator1,
                        q = p.length;
                    if (o >= q) {
                        this.$StringIterator1 = b;
                        return {
                            value: b,
                            done: true
                        };
                    }
                    var r = void 0,
                        s = p.charCodeAt(o);
                    if (s < 55296 || s > 56319 || o + 1 === q) {
                        r = p[o];
                    } else {
                        var t = p.charCodeAt(o + 1);
                        if (t < 56320 || t > 57343) {
                            r = p[o];
                        } else r = p[o] + p[o + 1];
                    }
                    this.$StringIterator2 = o + r.length;
                    return {
                        value: r,
                        done: false
                    };
                };
                n.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                    'use strict';
                    return this;
                };
                return n;
            }();
            return {
                keys: function n() {
                    throw TypeError('Strings default iterator doesn\'t implement keys.');
                },
                values: l ? function(n) {
                    return n[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
                } : function(n) {
                    return new m(n);
                },
                entries: function n() {
                    throw TypeError('Strings default iterator doesn\'t implement entries.');
                }
            };
        }();

    function h(l) {
        return typeof l.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] === 'function' && typeof l.prototype.values === 'function' && typeof l.prototype.keys === 'function' && typeof l.prototype.entries === 'function';
    }

    function i(l, m) {
        'use strict';
        this.$ObjectIterator1 = l;
        this.$ObjectIterator2 = m;
        this.$ObjectIterator3 = Object.keys(l);
        this.$ObjectIterator4 = 0;
    }
    i.prototype.next = function() {
        'use strict';
        var l = this.$ObjectIterator3.length,
            m = this.$ObjectIterator4,
            n = this.$ObjectIterator2,
            o = this.$ObjectIterator3[m];
        if (m >= l) {
            this.$ObjectIterator1 = b;
            return {
                value: b,
                done: true
            };
        }
        this.$ObjectIterator4 = m + 1;
        if (n === c) {
            return {
                value: o,
                done: false
            };
        } else if (n === d) {
            return {
                value: this.$ObjectIterator1[o],
                done: false
            };
        } else if (n === e) return {
            value: [o, this.$ObjectIterator1[o]],
            done: false
        };
    };
    i.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
        'use strict';
        return this;
    };
    var j = {
        keys: function l(m) {
            return new i(m, c);
        },
        values: function l(m) {
            return new i(m, d);
        },
        entries: function l(m) {
            return new i(m, e);
        }
    };

    function k(l, m) {
        if (typeof l === 'string') {
            return g[m || d](l);
        } else if (Array.isArray(l)) {
            return f[m || d](l);
        } else if (l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']) {
            return l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
        } else return j[m || e](l);
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function l(m) {
            return k(m, c);
        },
        values: function l(m) {
            return k(m, d);
        },
        entries: function l(m) {
            return k(m, e);
        },
        generic: j.entries
    });
    a.FB_enumerate = k;
})(typeof global === 'undefined' ? this : global);
(function(a, b) {
    var c = a.window || a;

    function d() {
        return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
    }

    function e(j) {
        var k = j ? j.ownerDocument || j : document,
            l = k.defaultView || c;
        return !!(j && (typeof l.Node === 'function' ? j instanceof l.Node : typeof j === 'object' && typeof j.nodeType === 'number' && typeof j.nodeName === 'string'));
    }

    function f(j) {
        var k = c[j];
        if (k == null) return true;
        if (typeof c.Symbol !== 'function') return true;
        var l = k.prototype;
        return k == null || typeof k !== 'function' || typeof l.clear !== 'function' || new k().size !== 0 || typeof l.keys !== 'function' || typeof l['for' + 'Each'] !== 'function';
    }
    var g = a.FB_enumerate,
        h = function() {
            if (!f('Map')) return c.Map;
            var j = 'key',
                k = 'value',
                l = 'key+value',
                m = '$map_',
                n = void 0,
                o = 'IE_HASH_';

            function p(ba) {
                'use strict';
                if (!u(this)) throw new TypeError('Wrong map object type.');
                t(this);
                if (ba != null) {
                    var ca = g(ba),
                        da = void 0;
                    while (!(da = ca.next()).done) {
                        if (!u(da.value)) throw new TypeError('Expected iterable items to be pair objects.');
                        this.set(da.value[0], da.value[1]);
                    }
                }
            }
            p.prototype.clear = function() {
                'use strict';
                t(this);
            };
            p.prototype.has = function(ba) {
                'use strict';
                var ca = r(this, ba);
                return !!(ca != null && this._mapData[ca]);
            };
            p.prototype.set = function(ba, ca) {
                'use strict';
                var da = r(this, ba);
                if (da != null && this._mapData[da]) {
                    this._mapData[da][1] = ca;
                } else {
                    da = this._mapData.push([ba, ca]) - 1;
                    s(this, ba, da);
                    this.size += 1;
                }
                return this;
            };
            p.prototype.get = function(ba) {
                'use strict';
                var ca = r(this, ba);
                if (ca == null) {
                    return b;
                } else return this._mapData[ca][1];
            };
            p.prototype['delete'] = function(ba) {
                'use strict';
                var ca = r(this, ba);
                if (ca != null && this._mapData[ca]) {
                    s(this, ba, b);
                    this._mapData[ca] = b;
                    this.size -= 1;
                    return true;
                } else return false;
            };
            p.prototype.entries = function() {
                'use strict';
                return new q(this, l);
            };
            p.prototype.keys = function() {
                'use strict';
                return new q(this, j);
            };
            p.prototype.values = function() {
                'use strict';
                return new q(this, k);
            };
            p.prototype.forEach = function(ba, ca) {
                'use strict';
                if (typeof ba !== 'function') throw new TypeError('Callback must be callable.');
                var da = ba.bind(ca || b),
                    ea = this._mapData;
                for (var fa = 0; fa < ea.length; fa++) {
                    var ga = ea[fa];
                    if (ga != null) da(ga[1], ga[0], this);
                }
            };
            p.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                'use strict';
                return this.entries();
            };

            function q(ba, ca) {
                'use strict';
                if (!(u(ba) && ba._mapData)) throw new TypeError('Object is not a map.');
                if ([j, l, k].indexOf(ca) === -1) throw new Error('Invalid iteration kind.');
                this._map = ba;
                this._nextIndex = 0;
                this._kind = ca;
            }
            q.prototype.next = function() {
                'use strict';
                if (!this instanceof p) throw new TypeError('Expected to be called on a MapIterator.');
                var ba = this._map,
                    ca = this._nextIndex,
                    da = this._kind;
                if (ba == null) return v(b, true);
                var ea = ba._mapData;
                while (ca < ea.length) {
                    var fa = ea[ca];
                    ca += 1;
                    this._nextIndex = ca;
                    if (fa)
                        if (da === j) {
                            return v(fa[0], false);
                        } else if (da === k) {
                        return v(fa[1], false);
                    } else if (da) return v(fa, false);
                }
                this._map = b;
                return v(b, true);
            };
            q.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                'use strict';
                return this;
            };

            function r(ba, ca) {
                if (u(ca)) {
                    var da = z(ca);
                    return da ? ba._objectIndex[da] : b;
                } else {
                    var ea = m + ca;
                    if (typeof ca === 'string') {
                        return ba._stringIndex[ea];
                    } else return ba._otherIndex[ea];
                }
            }

            function s(ba, ca, da) {
                var ea = da == null;
                if (u(ca)) {
                    var fa = z(ca);
                    if (!fa) fa = aa(ca);
                    if (ea) {
                        delete ba._objectIndex[fa];
                    } else ba._objectIndex[fa] = da;
                } else {
                    var ga = m + ca;
                    if (typeof ca === 'string') {
                        if (ea) {
                            delete ba._stringIndex[ga];
                        } else ba._stringIndex[ga] = da;
                    } else if (ea) {
                        delete ba._otherIndex[ga];
                    } else ba._otherIndex[ga] = da;
                }
            }

            function t(ba) {
                ba._mapData = [];
                ba._objectIndex = {};
                ba._stringIndex = {};
                ba._otherIndex = {};
                ba.size = 0;
            }

            function u(ba) {
                return ba != null && (typeof ba === 'object' || typeof ba === 'function');
            }

            function v(ba, ca) {
                return {
                    value: ba,
                    done: ca
                };
            }
            p.__isES5 = function() {
                try {
                    Object.defineProperty({}, '__.$#x', {});
                    return true;
                } catch (ba) {
                    return false;
                }
            }();

            function w(ba) {
                if (!p.__isES5 || !Object.isExtensible) {
                    return true;
                } else return Object.isExtensible(ba);
            }

            function x(ba) {
                var ca = void 0;
                switch (ba.nodeType) {
                    case 1:
                        ca = ba.uniqueID;
                        break;
                    case 9:
                        ca = ba.documentElement.uniqueID;
                        break;
                    default:
                        return null;
                }
                if (ca) {
                    return o + ca;
                } else return null;
            }
            var y = d();

            function z(ba) {
                if (ba[y]) {
                    return ba[y];
                } else if (!p.__isES5 && ba.propertyIsEnumerable && ba.propertyIsEnumerable[y]) {
                    return ba.propertyIsEnumerable[y];
                } else if (!p.__isES5 && e(ba) && x(ba)) {
                    return x(ba);
                } else if (!p.__isES5 && ba[y]) return ba[y];
            }
            var aa = function() {
                var ba = Object.prototype.propertyIsEnumerable,
                    ca = 0;
                return function da(ea) {
                    if (w(ea)) {
                        ca += 1;
                        if (p.__isES5) {
                            Object.defineProperty(ea, y, {
                                enumerable: false,
                                writable: false,
                                configurable: false,
                                value: ca
                            });
                        } else if (ea.propertyIsEnumerable) {
                            ea.propertyIsEnumerable = function() {
                                return ba.apply(this, arguments);
                            };
                            ea.propertyIsEnumerable[y] = ca;
                        } else if (e(ea)) {
                            ea[y] = ca;
                        } else throw new Error('Unable to set a non-enumerable property on object.');
                        return ca;
                    } else throw new Error('Non-extensible objects are not allowed as keys.');
                };
            }();
            return __annotator(p, {
                name: 'Map'
            });
        }(),
        i = function() {
            if (!f('Set')) return c.Set;

            function j(l) {
                'use strict';
                if (this == null || typeof this !== 'object' && typeof this !== 'function') throw new TypeError('Wrong set object type.');
                k(this);
                if (l != null) {
                    var m = g(l),
                        n = void 0;
                    while (!(n = m.next()).done) this.add(n.value);
                }
            }
            j.prototype.add = function(l) {
                'use strict';
                this._map.set(l, l);
                this.size = this._map.size;
                return this;
            };
            j.prototype.clear = function() {
                'use strict';
                k(this);
            };
            j.prototype['delete'] = function(l) {
                'use strict';
                var m = this._map['delete'](l);
                this.size = this._map.size;
                return m;
            };
            j.prototype.entries = function() {
                'use strict';
                return this._map.entries();
            };
            j.prototype.forEach = function(l) {
                'use strict';
                var m = arguments[1],
                    n = this._map.keys(),
                    o = void 0;
                while (!(o = n.next()).done) l.call(m, o.value, o.value, this);
            };
            j.prototype.has = function(l) {
                'use strict';
                return this._map.has(l);
            };
            j.prototype.values = function() {
                'use strict';
                return this._map.values();
            };
            j.prototype.keys = function() {
                'use strict';
                return this.values();
            };
            j.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                'use strict';
                return this.values();
            };

            function k(l) {
                l._map = new h();
                l.size = l._map.size;
            }
            return __annotator(j, {
                name: 'Set'
            });
        }();
    a.Map = h;
    a.Set = i;
})(typeof global === 'undefined' ? this : global);

if (typeof window !== 'undefined' && window.JSON && JSON.stringify(['\u2028\u2029']) === '["\u2028\u2029"]') JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function d(e, f, g) {
        var h = a.call(this, e, f, g);
        if (h) {
            if (-1 < h.indexOf('\u2028')) h = h.replace(b, '\\u2028');
            if (-1 < h.indexOf('\u2029')) h = h.replace(c, '\\u2029');
        }
        return h;
    };
}(JSON.stringify);

(function() {
    var a = Object.prototype.hasOwnProperty;
    if (typeof Object.entries !== 'function') Object.entries = function(b) {
        if (b == null) throw new TypeError('Object.entries called on non-object');
        var c = [];
        for (var d in b)
            if (a.call(b, d)) c.push([d, b[d]]);
        return c;
    };
    if (typeof Object.values !== 'function') Object.values = function(b) {
        if (b == null) throw new TypeError('Object.values called on non-object');
        var c = [];
        for (var d in b)
            if (a.call(b, d)) c.push(b[d]);
        return c;
    };
})();

(function(a) {
    a.__m = function(b, c) {
        b.__SMmeta = c;
        return b;
    };
})(this);
if (typeof String.fromCodePoint !== 'function') String.fromCodePoint = function() {
    var a = [];
    for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
    for (var e = 0; e < c.length; e++) {
        var f = Number(c[e]);
        if (!isFinite(f) || Math.floor(f) != f || f < 0 || 1114111 < f) throw RangeError('Invalid code point ' + f);
        if (f < 65536) {
            a.push(String.fromCharCode(f));
        } else {
            f -= 65536;
            a.push(String.fromCharCode((f >> 10) + 55296), String.fromCharCode(f % 1024 + 56320));
        }
    }
    return a.join('');
};
if (!String.prototype.startsWith) String.prototype.startsWith = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0,
        d = Math.min(Math.max(c, 0), b.length);
    return b.indexOf(String(a), c) == d;
};
if (!String.prototype.endsWith) String.prototype.endsWith = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = b.length,
        d = String(a),
        e = arguments.length > 1 ? Number(arguments[1]) || 0 : c,
        f = Math.min(Math.max(e, 0), c),
        g = f - d.length;
    if (g < 0) return false;
    return b.lastIndexOf(d, g) == g;
};
if (!String.prototype.includes) String.prototype.includes = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
    return b.indexOf(String(a), c) != -1;
};
if (!String.prototype.repeat) String.prototype.repeat = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this);
    a = Number(a) || 0;
    if (a < 0 || a === Infinity) throw RangeError();
    if (a === 1) return b;
    var c = '';
    while (a) {
        if (a & 1) c += b;
        if (a >>= 1) b += b;
    }
    return c;
};
if (!String.prototype.codePointAt) String.prototype.codePointAt = function(a) {
    'use strict';
    if (this == null) throw TypeError('Invalid context: ' + this);
    var b = String(this),
        c = b.length;
    a = Number(a) || 0;
    if (a < 0 || c <= a) return undefined;
    var d = b.charCodeAt(a);
    if (55296 <= d && d <= 56319 && c > a + 1) {
        var e = b.charCodeAt(a + 1);
        if (56320 <= e && e <= 57343) return (d - 55296) * 1024 + e - 56320 + 65536;
    }
    return d;
};
if (!String.prototype.contains) String.prototype.contains = String.prototype.includes;
if (!String.prototype.trimLeft) String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, '');
};
if (!String.prototype.trimRight) String.prototype.trimRight = function() {
    return this.replace(/\s+$/, '');
};

(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    b.inherits = function(d, e) {
        Object.assign(d, e);
        d.prototype = Object.create(e && e.prototype);
        d.prototype.constructor = d;
        d.__superConstructor__ = e;
        return e;
    };
    b._extends = Object.assign;
    b['extends'] = b._extends;
    b.objectWithoutProperties = function(d, e) {
        var f = {};
        for (var g in d) {
            if (!c.call(d, g) || e.indexOf(g) >= 0) continue;
            f[g] = d[g];
        }
        return f;
    };
    b.taggedTemplateLiteralLoose = function(d, e) {
        d.raw = e;
        return d;
    };
    b.bind = Function.prototype.bind;
})(typeof global === 'undefined' ? self : global);

(function(a) {
    var b = a.performance;
    if (b && b.setResourceTimingBufferSize) {
        b.setResourceTimingBufferSize(100000);
        b.setResourceTimingBufferSize = function() {};
    }
})(this);
(function a(b) {
    if (b.require) return;
    var c = {},
        d = {},
        e = {},
        f = {},
        g = 0,
        h = 1,
        i = 2,
        j = 4,
        k = {},
        l = Object.prototype.hasOwnProperty,
        m = Object.prototype.toString;

    function n(ta) {
        var ua = Array.prototype.slice.call(ta),
            va = {},
            wa, xa, ya, za;
        while (ua.length) {
            xa = ua.shift();
            if (va[xa]) continue;
            va[xa] = true;
            ya = c[xa];
            if (!ya || !ya.waiting) continue;
            for (wa = 0; wa < ya.dependencies.length; wa++) {
                za = ya.dependencies[wa];
                if (!c[za] || c[za].waiting) ua.push(za);
            }
        }
        for (xa in va)
            if (l.call(va, xa)) ua.push(xa);
        var ab = [];
        for (wa = 0; wa < ua.length; wa++) {
            xa = ua[wa];
            var bb = xa;
            ya = c[xa];
            if (!ya) {
                bb += ' is not defined';
            } else if (!ya.waiting) {
                bb += ' is ready';
            } else {
                var cb = [];
                for (var db = 0; db < ya.dependencies.length; db++) {
                    za = ya.dependencies[db];
                    if (!c[za] || c[za].waiting) cb.push(za);
                }
                bb += ' is waiting for ' + cb.join(', ');
            }
            ab.push(bb);
        }
        return ab.join('\n');
    }

    function o(ta) {
        this.name = 'ModuleError';
        this.message = ta;
        this.stack = Error(ta).stack;
        this.framesToPop = 2;
    }
    o.prototype = Object.create(Error.prototype);
    o.prototype.constructor = o;
    var p = (b.Env || {}).profile_require_factories,
        q = b.performance || b.msPerformance || b.webkitPerformance || {},
        r;
    if (q.now && q.timing && q.timing.navigationStart) {
        var s = q.timing.navigationStart;
        r = function ta() {
            return q.now() + s;
        };
    } else r = function ta() {
        return Date.now();
    };
    var t = 0,
        u = 0;

    function v(ta) {
        u++;
        var ua = c[ta];
        if (ua && ua.exports != null) {
            if (ua.refcount-- === 1) c[ta] = void 0;
            return ua.exports;
        }
        return x(ta);
    }

    function w(ta) {
        var ua = c[ta],
            va = d[ta];
        if (ua.factoryLength === -1) {
            var wa = p && b.ProfilingCounters,
                xa, ya;
            if (wa) xa = wa.startTiming('FACTORY_COMPILE_TIME');
            ua.factoryLength = ua.factory.length;
            if (xa != null) {
                ya = wa.stopTiming(xa);
                va.compileTime += ya;
            }
        }
        return ua.factoryLength;
    }

    function x(ta) {
        if (b.ErrorUtils && !b.ErrorUtils.inGuard()) return b.ErrorUtils.applyWithGuard(x, null, [ta]);
        var ua = c[ta];
        if (!ua) {
            var va = 'Requiring unknown module "' + ta + '"';
            throw new o(va);
        }
        if (ua.hasError) throw new o('Requiring module "' + ta + '" which threw an exception');
        if (ua.waiting) throw new o('Requiring module "' + ta + '" with unresolved dependencies: ' + n([ta]));
        var wa = ua.exports = {},
            xa = ua.factory;
        if (m.call(xa) === '[object Function]') {
            var ya = ua.dependencies,
                za = ya.length,
                ab;
            try {
                try {
                    la(ua);
                } catch (bb) {
                    y(bb, ta);
                }
                var cb = [],
                    db = za;
                if (ua.special & i) {
                    var eb = w(ta);
                    db = Math.min(za, eb);
                }
                for (var fb = 0; fb < za; fb++) {
                    var gb = ya[fb];
                    if (cb.length < db) cb.push(gb === 'module' ? ua : gb === 'exports' ? wa : v.call(null, gb));
                }++t;
                var hb = p && b.ProfilingCounters,
                    ib;
                if (hb) {
                    hb.incrementCounter('FACTORY_COUNT', 1);
                    ib = hb.startTiming('FACTORY_EXEC_TIME');
                }
                try {
                    ab = xa.apply(ua.context || b, cb);
                } catch (bb) {
                    y(bb, ta);
                } finally {
                    if (p) {
                        var jb = r(),
                            kb = 0;
                        if (ib != null) kb = hb.stopTiming(ib);
                        var lb = d[ua.id];
                        lb.factoryTime = kb;
                        lb.factoryEnd = jb;
                        if (xa.__SMmeta)
                            for (var mb in xa.__SMmeta)
                                if (xa.__SMmeta.hasOwnProperty(mb)) lb[mb] = xa.__SMmeta[mb];
                    }
                }
            } catch (bb) {
                ua.hasError = true;
                ua.exports = null;
                throw bb;
            }
            if (ab) ua.exports = ab;
            if (typeof ua.exports === 'function') {
                var nb = ua.exports,
                    ob = nb.__superConstructor__;
                if (!nb.displayName || ob && ob.displayName === nb.displayName) nb.displayName = (nb.name || '(anonymous)') + ' [from ' + ta + ']';
            }
            ua.factoryFinished = true;
        } else ua.exports = xa;
        var pb = '__isRequired__' + ta;
        if (e[pb]) ea(pb, k);
        if (ua.refcount-- === 1) c[ta] = void 0;
        return ua.exports;
    }

    function y(ta, ua) {
        if (!(ta instanceof Error)) ta = new Error(ta);
        if (c.ex && c.erx) {
            var va = v.call(null, 'ex'),
                wa = v.call(null, 'erx'),
                xa = wa(ta.message);
            if (xa[0].indexOf(' from module "%s"') < 0) {
                xa[0] += ' from module "%s"';
                xa[xa.length] = ua;
            }
            ta.message = va.apply(null, xa);
        }
        throw ta;
    }

    function z() {
        var ta = 0;
        for (var ua in d)
            if (d.hasOwnProperty(ua)) ta += d[ua].factoryTime;
        return ta;
    }

    function aa() {
        var ta = 0;
        for (var ua in d)
            if (d.hasOwnProperty(ua)) ta += d[ua].compileTime;
        return ta;
    }

    function ba() {
        return t;
    }

    function ca() {
        return u;
    }

    function da() {
        var ta = {};
        for (var ua in d)
            if (d.hasOwnProperty(ua)) ta[ua] = d[ua];
        return ta;
    }

    function ea(ta, ua, va, wa, xa, ya, za) {
        if (ua === undefined) {
            ua = [];
            va = ta;
            ta = ia();
        } else if (va === undefined) {
            va = ua;
            if (m.call(ta) === '[object Array]') {
                ua = ta;
                ta = ia(ua.join(','));
            } else ua = [];
        }
        var ab = {
                cancel: ga.bind(this, ta)
            },
            bb = c[ta];
        if (bb) {
            if (ya) bb.refcount += ya;
            return ab;
        } else if (!ua && !va && ya) {
            f[ta] = (f[ta] || 0) + ya;
            return ab;
        }
        var cb = (f[ta] || 0) + (ya || 0);
        delete f[ta];
        bb = new fa(ta, cb, null, va, ua, xa, wa);
        c[ta] = bb;
        d[ta] = {
            id: ta,
            dependencies: ua,
            meta: za,
            category: wa,
            defined: p ? r() : null,
            compileTime: null,
            factoryTime: null,
            factoryEnd: null
        };
        ka(ta);
        return ab;
    }

    function fa(ta, ua, va, wa, xa, ya, za) {
        this.id = ta;
        this.refcount = ua;
        this.exports = va || null;
        this.factory = wa;
        this.factoryLength = -1;
        this.factoryFinished = false;
        this.dependencies = xa;
        this.context = ya;
        this.special = za || 0;
        this.waitingMap = {};
        this.waiting = 0;
        this.hasError = false;
        this.ranRecursiveSideEffects = false;
        this.sideEffectDependencyException = null;
    }

    function ga(ta) {
        if (!c[ta]) return;
        var ua = c[ta];
        c[ta] = void 0;
        for (var va in ua.waitingMap)
            if (ua.waitingMap[va]) delete e[va][ta];
        for (var wa = 0; wa < ua.dependencies.length; wa++) {
            va = ua.dependencies[wa];
            if (c[va]) {
                if (c[va].refcount-- === 1) ga(va);
            } else if (f[va]) f[va]--;
        }
    }

    function ha(ta, ua, va) {
        return ea('__requireLazy__' + (ta.length > 0 ? ta.join(',') + '__' : '') + g++, ta, sa()(ua, 'requireLazy'), h, va, 1);
    }

    function ia(ta) {
        return '__mod__' + (ta ? ta + '__' : '') + g++;
    }

    function ja(ta, ua) {
        if (!ta.waitingMap[ua] && ta.id !== ua) {
            ta.waiting++;
            ta.waitingMap[ua] = 1;
            e[ua] || (e[ua] = {});
            e[ua][ta.id] = 1;
        }
    }

    function ka(ta) {
        var ua = [],
            va = c[ta],
            wa, xa, ya;
        for (xa = 0; xa < va.dependencies.length; xa++) {
            wa = va.dependencies[xa];
            if (!c[wa]) {
                ja(va, wa);
            } else if (c[wa].waiting)
                for (ya in c[wa].waitingMap)
                    if (c[wa].waitingMap[ya]) ja(va, ya);
        }
        if (va.waiting === 0 && va.special & h) ua.push(ta);
        if (e[ta]) {
            var za = e[ta],
                ab;
            e[ta] = undefined;
            for (wa in za) {
                ab = c[wa];
                for (ya in va.waitingMap)
                    if (va.waitingMap[ya]) ja(ab, ya);
                if (ab.waitingMap[ta]) {
                    ab.waitingMap[ta] = 0;
                    ab.waiting--;
                }
                if (ab.waiting === 0 && ab.special & h) ua.push(wa);
            }
        }
        for (xa = 0; xa < ua.length; xa++) v.call(null, ua[xa]);
    }

    function la(ta) {
        if (ta.sideEffectDependencyException) throw ta.sideEffectDependencyException;
        if (ta.ranRecursiveSideEffects) return;
        ta.ranRecursiveSideEffects = true;
        var ua = ta.dependencies;
        if (ua)
            for (var va = 0; va < ua.length; va++) {
                var wa = ua[va],
                    xa = c[wa];
                try {
                    la(xa);
                } catch (ya) {
                    ta.sideEffectDependencyException = ya;
                    throw ya;
                }
                if (xa.special & j) try {
                    v.call(null, wa);
                } catch (ya) {
                    ta.sideEffectDependencyException = ya;
                    throw ya;
                }
            }
    }

    function ma(ta, ua) {
        c[ta] = new fa(ta, 0, ua);
        d[ta] = {
            id: ta,
            dependencies: [],
            category: 0,
            compileTime: null,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryEnd: null
        };
    }
    ma('module', 0);
    ma('exports', 0);
    ma('define', ea);
    ma('global', b);
    ma('require', v);
    ma('requireDynamic', na);
    ma('requireLazy', ha);
    ma('requireWeak', oa);
    ma('ifRequired', pa);
    ea.amd = {};
    b.define = ea;
    b.require = v;
    b.requireDynamic = na;
    b.requireLazy = ha;

    function na(ta, ua) {
        throw new ReferenceError('requireDynamic is not defined');
    }

    function oa(ta, ua) {
        pa.call(null, ta, function(va) {
            ua(va);
        }, function() {
            ea('__requireWeak__' + ta + '__' + g++, ['__isRequired__' + ta], sa()(function() {
                ua(c[ta].exports);
            }, 'requireWeak'), h, null, 1);
        });
    }

    function pa(ta, ua, va) {
        var wa = c[ta];
        if (wa && wa.factoryFinished) {
            if (typeof ua === 'function') return ua(wa.exports);
        } else if (typeof va === 'function') return va();
    }
    var qa = {
        getModules: function ta() {
            var ua = {};
            for (var va in c)
                if (c[va] && c.hasOwnProperty(va)) ua[va] = c[va];
            return ua;
        },
        modulesMap: c,
        deps: e,
        printDependencyInfo: function ta() {
            if (!b.console) return;
            var ua = Object.keys(qa.deps);
            b.console.log(n(ua));
        },
        debugUnresolvedDependencies: n
    };

    function ra(ta) {
        return ta;
    }

    function sa() {
        return b.TimeSlice && b.TimeSlice.guard || ra;
    }
    ma('__getFactoryTime', z);
    ma('__getCompileTime', aa);
    ma('__getTotalFactories', ba);
    ma('__getTotalRequireCalls', ca);
    ma('__getModuleTimeDetails', da);
    ma('__debug', qa);
    b.__d = function(ta, ua, va, wa) {
        var xa = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
        sa()(function ya() {
            ea(ta, xa.concat(ua), va, wa || i, null, null);
        }, 'define ' + ta, {
            root: true
        })();
    };
})(this);
__d("Env", [], (function a(b, c, d, e, f, g) {
    var h = {
        start: Date.now(),
        nocatch: b.FB_GKS && b.FB_GKS.js_nocatch
    };
    if (b.Env) Object.assign(h, b.Env);
    b.Env = h;
    f.exports = h;
}), null);
__d('eprintf', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
        var m = k.map(function(p) {
                return String(p);
            }),
            n = i.split('%s').length - 1;
        if (n !== m.length) return h('eprintf args number mismatch: %s', JSON.stringify([i].concat(m)));
        var o = 0;
        return i.replace(/%s/g, function() {
            return String(m[o++]);
        });
    }
    f.exports = h;
}), null);
__d('ex', ['eprintf'], (function a(b, c, d, e, f, g) {
    function h(i) {
        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
        var m = k.map(function(o) {
                return String(o);
            }),
            n = i.split('%s').length - 1;
        if (n !== m.length) return h('ex args number mismatch: %s', JSON.stringify([i].concat(m)));
        return h._prefix + JSON.stringify([i].concat(m)) + h._suffix;
    }
    h._prefix = '<![EX[';
    h._suffix = ']]>';
    f.exports = h;
}), null);
__d('erx', ['ex'], (function a(b, c, d, e, f, g) {
    function h(i) {
        if (typeof i !== 'string') return i;
        var j = i.indexOf(c('ex')._prefix),
            k = i.lastIndexOf(c('ex')._suffix);
        if (j < 0 || k < 0) return [i];
        var l = j + c('ex')._prefix.length,
            m = k + c('ex')._suffix.length;
        if (l >= k) return ['erx slice failure: %s', i];
        var n = i.substring(0, j),
            o = i.substring(m);
        i = i.substring(l, k);
        try {
            var q = JSON.parse(i);
            q[0] = n + q[0] + o;
            return q;
        } catch (p) {
            return ['erx parse failure: %s', i];
        }
    }
    f.exports = h;
}), null);
__d("removeFromArray", [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = i.indexOf(j);
        if (k !== -1) i.splice(k, 1);
    }
    f.exports = h;
}), null);
__d('ErrorUtils', ['Env', 'eprintf', 'erx', 'removeFromArray'], (function a(b, c, d, e, f, g) {
    var h = '<anonymous guard>',
        i = '<generated guard>',
        j = typeof window === 'undefined' ? '<self.onerror>' : '<window.onerror>',
        k = /^https?:\/\//i,
        l = /^Type Mismatch for/,
        m = /(.*)[@\s][^\s]+$/,
        n = [],
        o = void 0,
        p = [],
        q = 50,
        r = [],
        s = false,
        t = false,
        u = location.search.indexOf('nocatch') !== -1,
        v = ['Unknown script code', 'Function code', 'eval code'];
    if (c('Env').long_stack_traces && Error.stackTraceLimit != null) Error.stackTraceLimit = 100;

    function w(ha) {
        var ia = ha.columnNumber || ha.column;
        return ia != null ? String(ia) : '';
    }

    function x(ha) {
        return ha[0] && ha[0].column || '';
    }

    function y(ha) {
        for (var ia = 0; ia < v.length; ia++) {
            var ja = ' ' + v[ia];
            if (ha.endsWith(ja)) return [ha, ha.substring(0, ha.length - ja.length)];
        }
        return null;
    }

    function z(ha) {
        var ia = ha.lineNumber || ha.line;
        return ia != null ? String(ia) : '';
    }

    function aa(ha) {
        return ha[0] && ha[0].line || '';
    }

    function ba(ha) {
        var ia = ha.fileName || ha.sourceURL;
        return ia != null ? String(ia) : '';
    }

    function ca(ha) {
        return ha[0] && ha[0].script || '';
    }

    function da(ha) {
        if (!ha) return [];
        return ha.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]|^[\w \.]+:\s.*?\n/g, '').split('\n').map(function(ia) {
            ia = ia.trim();
            var ja = void 0,
                ka = void 0,
                la = ia.match(/:(\d+)(?::(\d+))?$/);
            if (la) {
                ja = la[1];
                ka = la[2];
                ia = ia.slice(0, -la[0].length);
            }
            var ma = void 0,
                na = y(ia) || ia.match(m);
            if (na) {
                ia = ia.substring(na[1].length + 1);
                var oa = na[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
                ma = oa ? oa[1] : '';
            }
            if (ia.includes('charset=utf-8;base64,')) ia = '<inlined-file>';
            var pa = {
                column: ka,
                identifier: ma,
                line: ja,
                script: ia
            };
            if (o) o(pa);
            var qa = '    at' + (pa.identifier ? ' ' + pa.identifier + ' (' : ' ') + pa.script + (pa.line ? ':' + pa.line : '') + (pa.column ? ':' + pa.column : '') + (pa.identifier ? ')' : '');
            return babelHelpers['extends']({}, pa, {
                text: qa
            });
        });
    }

    function ea(ha) {
        r.unshift(ha);
        s = true;
    }

    function fa() {
        r.shift();
        s = r.length !== 0;
    }
    var ga = {
        ANONYMOUS_GUARD_TAG: h,
        GENERATED_GUARD_TAG: i,
        GLOBAL_ERROR_HANDLER_TAG: j,
        history: p,
        addListener: function ha(ia) {
            var ja = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
            n.push(ia);
            if (!ja) p.forEach(ia);
        },
        removeListener: function ha(ia) {
            c('removeFromArray')(n, ia);
        },
        setSourceResolver: function ha(ia) {
            o = ia;
        },
        applyWithGuard: function ha(ia, ja, ka, la, ma) {
            ea(ma || h);
            if (c('Env').nocatch) u = true;
            if (u) {
                var na = void 0;
                try {
                    na = ia.apply(ja, ka || []);
                } finally {
                    fa();
                }
                return na;
            }
            try {
                return ia.apply(ja, ka || []);
            } catch (oa) {
                var pa = ga.normalizeError(oa);
                if (la) la(pa);
                if (ia) pa.callee = ia.toString().substring(0, 100);
                if (ka) pa.args = Array.from(ka).toString().substring(0, 100);
                pa.guard = r[0];
                pa.guardList = r.slice();
                ga.reportError(pa);
            } finally {
                fa();
            }
        },
        guard: function ha(ia, ja, ka) {
            ja = ja || ia.name || i;

            function la() {
                return ga.applyWithGuard(ia, ka || this, arguments, null, ja);
            }
            if (ia.__SMmeta) la.__SMmeta = ia.__SMmeta;
            return la;
        },
        inGuard: function ha() {
            return s;
        },
        normalizeError: function ha(ia) {
            if (ia._originalError) return ia;
            var ja = da(ia.stackTrace || ia.stack),
                ka = false;
            if (ia.framesToPop) {
                var la = ia.framesToPop,
                    ma = void 0;
                while (la > 0 && ja.length > 0) {
                    ma = ja.shift();
                    la--;
                    ka = true;
                }
                if (l.test(ia.message) && ia.framesToPop === 2 && ma)
                    if (k.test(ma.script)) ia.message += ' at ' + ma.script + (ma.line ? ':' + ma.line : '') + (ma.column ? ':' + ma.column : '');
            }
            var na = {
                _originalError: ia,
                column: ka ? x(ja) : w(ia) || x(ja),
                extra: ia.extra,
                guard: ia.guard,
                guardList: ia.guardList,
                line: ka ? aa(ja) : z(ia) || aa(ja),
                message: ia.message,
                messageWithParams: ia.messageWithParams,
                name: ia.name,
                script: ka ? ca(ja) : ba(ia) || ca(ja),
                snapshot: ia.snapshot,
                stack: ja.map(function(pa) {
                    return pa.text;
                }).join('\n'),
                stackFrames: ja,
                type: ia.type
            };
            if (typeof na.message === 'string') {
                na.messageWithParams = na.messageWithParams || c('erx')(na.message);
            } else {
                na.messageObject = na.message;
                na.message = String(na.message) + ' (' + typeof na.message + ')';
            }
            if (na.messageWithParams) na.message = c('eprintf').apply(undefined, na.messageWithParams);
            if (typeof window !== 'undefined' && window && window.location) na.windowLocationURL = window.location.href;
            if (o) o(na);
            for (var oa in na)
                if (na[oa] == null) delete na[oa];
            return na;
        },
        onerror: function ha(ia, ja, ka, la, ma) {
            ma = ma || {};
            ma.message = ma.message || ia;
            ma.script = ma.script || ja;
            ma.line = ma.line || ka;
            ma.column = ma.column || la;
            ma.guard = j;
            ma.guardList = [j];
            ga.reportError(ma, true);
        },
        reportError: function ha(ia) {
            var ja = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
            if (t) return false;
            if (r.length > 0) {
                ia.guard = ia.guard || r[0];
                ia.guardList = r.slice();
            }
            var ka = ga.normalizeError(ia);
            !ja;
            if (p.length > q) p.splice(q / 2, 1);
            p.push(ka);
            t = true;
            for (var la = 0; la < n.length; la++) try {
                n[la](ka);
            } catch (ma) {}
            t = false;
            return true;
        }
    };
    b.onerror = ga.onerror;
    f.exports = b.ErrorUtils = ga;
    if (typeof __t === 'function' && __t.setHandler) __t.setHandler(ga.reportError);
}), 3);
__d('CallbackDependencyManager', ['ErrorUtils'], (function a(b, c, d, e, f, g) {
    function h() {
        'use strict';
        this.$CallbackDependencyManager1 = {};
        this.$CallbackDependencyManager2 = {};
        this.$CallbackDependencyManager3 = 1;
        this.$CallbackDependencyManager4 = {};
    }
    h.prototype.$CallbackDependencyManager5 = function(i, j) {
        'use strict';
        var k = 0,
            l = {};
        for (var m = 0, n = j.length; m < n; m++) l[j[m]] = 1;
        for (var o in l) {
            if (this.$CallbackDependencyManager4[o]) continue;
            k++;
            if (this.$CallbackDependencyManager1[o] === undefined) this.$CallbackDependencyManager1[o] = {};
            this.$CallbackDependencyManager1[o][i] = (this.$CallbackDependencyManager1[o][i] || 0) + 1;
        }
        return k;
    };
    h.prototype.$CallbackDependencyManager6 = function(i) {
        'use strict';
        if (!this.$CallbackDependencyManager1[i]) return;
        for (var j in this.$CallbackDependencyManager1[i]) {
            this.$CallbackDependencyManager1[i][j]--;
            if (this.$CallbackDependencyManager1[i][j] <= 0) delete this.$CallbackDependencyManager1[i][j];
            this.$CallbackDependencyManager2[j].$CallbackDependencyManager7--;
            if (this.$CallbackDependencyManager2[j].$CallbackDependencyManager7 <= 0) {
                var k = this.$CallbackDependencyManager2[j].$CallbackDependencyManager8;
                delete this.$CallbackDependencyManager2[j];
                c('ErrorUtils').applyWithGuard(k);
            }
        }
    };
    h.prototype.addDependenciesToExistingCallback = function(i, j) {
        'use strict';
        if (!this.$CallbackDependencyManager2[i]) return null;
        var k = this.$CallbackDependencyManager5(i, j);
        this.$CallbackDependencyManager2[i].$CallbackDependencyManager7 += k;
        return i;
    };
    h.prototype.isPersistentDependencySatisfied = function(i) {
        'use strict';
        return !!this.$CallbackDependencyManager4[i];
    };
    h.prototype.satisfyPersistentDependency = function(i) {
        'use strict';
        this.$CallbackDependencyManager4[i] = 1;
        this.$CallbackDependencyManager6(i);
    };
    h.prototype.satisfyNonPersistentDependency = function(i) {
        'use strict';
        var j = this.$CallbackDependencyManager4[i] === 1;
        if (!j) this.$CallbackDependencyManager4[i] = 1;
        this.$CallbackDependencyManager6(i);
        if (!j) delete this.$CallbackDependencyManager4[i];
    };
    h.prototype.registerCallback = function(i, j) {
        'use strict';
        var k = this.$CallbackDependencyManager3;
        this.$CallbackDependencyManager3++;
        var l = this.$CallbackDependencyManager5(k, j);
        if (l === 0) {
            c('ErrorUtils').applyWithGuard(i);
            return null;
        }
        this.$CallbackDependencyManager2[k] = {
            $CallbackDependencyManager8: i,
            $CallbackDependencyManager7: l
        };
        return k;
    };
    h.prototype.unsatisfyPersistentDependency = function(i) {
        'use strict';
        delete this.$CallbackDependencyManager4[i];
    };
    f.exports = h;
}), null);
__d('EventSubscription', [], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i) {
        this.subscriber = i;
    }
    h.prototype.remove = function() {
        if (this.subscriber) {
            this.subscriber.removeSubscription(this);
            this.subscriber = null;
        }
    };
    f.exports = h;
}), null);
__d('EmitterSubscription', ['EventSubscription'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h, i;
    h = babelHelpers.inherits(j, c('EventSubscription'));
    i = h && h.prototype;

    function j(k, l, m) {
        i.constructor.call(this, k);
        this.listener = l;
        this.context = m;
    }
    f.exports = j;
}), null);
__d("sprintf", [], (function a(b, c, d, e, f, g) {
    function h(i) {
        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
        var m = 0;
        return i.replace(/%s/g, function() {
            return String(k[m++]);
        });
    }
    f.exports = h;
}), null);
__d('invariant', ['ex', 'sprintf'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = c('ex');

    function i(j, k) {
        if (!j) {
            var l = void 0;
            if (k === undefined) {
                l = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
            } else {
                for (var m = arguments.length, n = Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
                l = new Error(h.apply(undefined, [k].concat(n)));
                l.name = 'Invariant Violation';
                l.messageWithParams = [k].concat(n);
            }
            l.framesToPop = 1;
            throw l;
        }
    }
    f.exports = i;
}), null);
__d('EventSubscriptionVendor', ['invariant'], (function a(b, c, d, e, f, g, h) {
    'use strict';

    function i() {
        this.$EventSubscriptionVendor1 = {};
    }
    i.prototype.addSubscription = function(j, k) {
        k.subscriber === this || h(0);
        if (!this.$EventSubscriptionVendor1[j]) this.$EventSubscriptionVendor1[j] = [];
        var l = this.$EventSubscriptionVendor1[j].length;
        this.$EventSubscriptionVendor1[j].push(k);
        k.eventType = j;
        k.key = l;
        return k;
    };
    i.prototype.removeAllSubscriptions = function(j) {
        if (j === undefined) {
            this.$EventSubscriptionVendor1 = {};
        } else delete this.$EventSubscriptionVendor1[j];
    };
    i.prototype.removeSubscription = function(j) {
        var k = j.eventType,
            l = j.key,
            m = this.$EventSubscriptionVendor1[k];
        if (m) delete m[l];
    };
    i.prototype.getSubscriptionsForType = function(j) {
        return this.$EventSubscriptionVendor1[j];
    };
    f.exports = i;
}), null);
__d("emptyFunction", [], (function a(b, c, d, e, f, g) {
    function h(j) {
        return function() {
            return j;
        };
    }
    var i = function j() {};
    i.thatReturns = h;
    i.thatReturnsFalse = h(false);
    i.thatReturnsTrue = h(true);
    i.thatReturnsNull = h(null);
    i.thatReturnsThis = function() {
        return this;
    };
    i.thatReturnsArgument = function(j) {
        return j;
    };
    f.exports = i;
}), null);
__d('BaseEventEmitter', ['invariant', 'EmitterSubscription', 'ErrorUtils', 'EventSubscriptionVendor', 'emptyFunction'], (function a(b, c, d, e, f, g, h) {
    function i() {
        'use strict';
        this.$BaseEventEmitter2 = new(c('EventSubscriptionVendor'))();
        this.$BaseEventEmitter1 = null;
    }
    i.prototype.addListener = function(j, k, l) {
        'use strict';
        return this.$BaseEventEmitter2.addSubscription(j, new(c('EmitterSubscription'))(this.$BaseEventEmitter2, k, l));
    };
    i.prototype.once = function(j, k, l) {
        'use strict';
        var m = this;
        return this.addListener(j, function() {
            m.removeCurrentListener();
            k.apply(l, arguments);
        });
    };
    i.prototype.removeAllListeners = function(j) {
        'use strict';
        this.$BaseEventEmitter2.removeAllSubscriptions(j);
    };
    i.prototype.removeCurrentListener = function() {
        'use strict';
        !!this.$BaseEventEmitter1 || h(0);
        this.$BaseEventEmitter2.removeSubscription(this.$BaseEventEmitter1);
    };
    i.prototype.listeners = function(j) {
        'use strict';
        var k = this.$BaseEventEmitter2.getSubscriptionsForType(j);
        return k ? k.filter(c('emptyFunction').thatReturnsTrue).map(function(l) {
            return l.listener;
        }) : [];
    };
    i.prototype.emit = function(j) {
        'use strict';
        var k = this.$BaseEventEmitter2.getSubscriptionsForType(j);
        if (k) {
            var l = Object.keys(k),
                m;
            for (var n = 0; n < l.length; n++) {
                var o = l[n],
                    p = k[o];
                if (p) {
                    this.$BaseEventEmitter1 = p;
                    if (m == null) {
                        m = [p];
                        for (var q = 0, r = arguments.length; q < r; q++) m[q + 1] = arguments[q];
                    } else m[0] = p;
                    this.__emitToSubscription.apply(this, m);
                }
            }
            this.$BaseEventEmitter1 = null;
        }
    };
    i.prototype.__emitToSubscription = function(j, k) {
        'use strict';
        for (var l = arguments.length, m = Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++) m[n - 2] = arguments[n];
        c('ErrorUtils').applyWithGuard(j.listener, j.context, m, null, 'EventEmitter ' + k + ' event');
    };
    f.exports = i;
}), null);
__d('EventEmitter', ['BaseEventEmitter'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('BaseEventEmitter'));
    i = h && h.prototype;

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    f.exports = j;
}), null);
__d('EventEmitterWithHolding', [], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i, j) {
        this.$EventEmitterWithHolding1 = i;
        this.$EventEmitterWithHolding2 = j;
        this.$EventEmitterWithHolding3 = null;
        this.$EventEmitterWithHolding4 = [];
        this.$EventEmitterWithHolding5 = 0;
    }
    h.prototype.addListener = function(i, j, k) {
        return this.$EventEmitterWithHolding1.addListener(i, j, k);
    };
    h.prototype.once = function(i, j, k) {
        return this.$EventEmitterWithHolding1.once(i, j, k);
    };
    h.prototype.addRetroactiveListener = function(i, j, k) {
        var l = this.$EventEmitterWithHolding1.addListener(i, j, k),
            m = this.$EventEmitterWithHolding4;
        m.push(false);
        this.$EventEmitterWithHolding5++;
        this.$EventEmitterWithHolding2.emitToListener(i, j, k);
        this.$EventEmitterWithHolding5--;
        if (m[m.length - 1]) l.remove();
        m.pop();
        return l;
    };
    h.prototype.removeAllListeners = function(i) {
        this.$EventEmitterWithHolding1.removeAllListeners(i);
    };
    h.prototype.removeCurrentListener = function() {
        if (this.$EventEmitterWithHolding5) {
            var i = this.$EventEmitterWithHolding4;
            i[i.length - 1] = true;
        } else this.$EventEmitterWithHolding1.removeCurrentListener();
    };
    h.prototype.listeners = function(i) {
        return this.$EventEmitterWithHolding1.listeners(i);
    };
    h.prototype.emit = function(i, j, k, l, m, n, o) {
        this.$EventEmitterWithHolding1.emit(i, j, k, l, m, n, o);
    };
    h.prototype.emitAndHold = function(i, j, k, l, m, n, o) {
        this.$EventEmitterWithHolding3 = this.$EventEmitterWithHolding2.holdEvent(i, j, k, l, m, n, o);
        this.$EventEmitterWithHolding1.emit(i, j, k, l, m, n, o);
        this.$EventEmitterWithHolding3 = null;
    };
    h.prototype.releaseCurrentEvent = function() {
        if (this.$EventEmitterWithHolding3 !== null) {
            this.$EventEmitterWithHolding2.releaseEvent(this.$EventEmitterWithHolding3);
        } else if (!!this.$EventEmitterWithHolding5) this.$EventEmitterWithHolding2.releaseCurrentEvent();
    };
    h.prototype.releaseHeldEventType = function(i) {
        this.$EventEmitterWithHolding2.releaseEventType(i);
    };
    f.exports = h;
}), null);
__d('EventHolder', ['invariant'], (function a(b, c, d, e, f, g, h) {
    'use strict';

    function i() {
        this.$EventHolder1 = {};
        this.$EventHolder2 = [];
    }
    i.prototype.holdEvent = function(j, k, l, m, n, o, p) {
        this.$EventHolder1[j] = this.$EventHolder1[j] || [];
        var q = this.$EventHolder1[j],
            r = {
                eventType: j,
                index: q.length
            };
        q.push([k, l, m, n, o, p]);
        return r;
    };
    i.prototype.emitToListener = function(j, k, l) {
        var m = this.$EventHolder1[j];
        if (!m) return;
        m.forEach(function(n, o) {
            if (!n) return;
            this.$EventHolder2.push({
                eventType: j,
                index: o
            });
            k.apply(l, n);
            this.$EventHolder2.pop();
        }.bind(this));
    };
    i.prototype.releaseCurrentEvent = function() {
        this.$EventHolder2.length || h(0);
        this.releaseEvent(this.$EventHolder2[this.$EventHolder2.length - 1]);
    };
    i.prototype.releaseEvent = function(j) {
        delete this.$EventHolder1[j.eventType][j.index];
    };
    i.prototype.releaseEventType = function(j) {
        this.$EventHolder1[j] = [];
    };
    f.exports = i;
}), null);
__d('Arbiter', ['invariant', 'CallbackDependencyManager', 'ErrorUtils', 'EventEmitter', 'EventEmitterWithHolding', 'EventHolder'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;

    function k(o) {
        return Array.isArray(o) ? o : [o];
    }

    function l() {
        var o = new(c('EventEmitter'))();
        this.$Arbiter1 = new m();
        this.$Arbiter2 = new(c('EventEmitterWithHolding'))(o, this.$Arbiter1);
        this.$Arbiter3 = new(c('CallbackDependencyManager'))();
        this.$Arbiter4 = [];
    }
    l.prototype.subscribe = function(o, p, q) {
        o = k(o);
        o.forEach(function(s) {
            s && typeof s === 'string' || h(0);
        });
        typeof p === 'function' || h(0);
        q = q || l.SUBSCRIBE_ALL;
        q === l.SUBSCRIBE_NEW || q === l.SUBSCRIBE_ALL || h(0);
        var r = o.map(function(s) {
            var t = this.$Arbiter5.bind(this, p, s);
            t.__SMmeta = p.__SMmeta;
            if (q === l.SUBSCRIBE_NEW) return this.$Arbiter2.addListener(s, t);
            this.$Arbiter4.push({});
            var u = this.$Arbiter2.addRetroactiveListener(s, t);
            this.$Arbiter4.pop();
            return u;
        }, this);
        return new n(this, r);
    };
    l.prototype.$Arbiter5 = function(o, p, q) {
        var r = this.$Arbiter4[this.$Arbiter4.length - 1];
        if (r[p] === false) return;
        var s = c('ErrorUtils').applyWithGuard(o, null, [p, q]);
        if (s === false) this.$Arbiter2.releaseCurrentEvent();
        r[p] = s;
    };
    l.prototype.unsubscribeCurrentSubscription = function() {
        this.$Arbiter2.removeCurrentListener();
    };
    l.prototype.releaseCurrentPersistentEvent = function() {
        this.$Arbiter2.releaseCurrentEvent();
    };
    l.prototype.subscribeOnce = function(o, p, q) {
        var r = this.subscribe(o, function(s, t) {
            this.unsubscribeCurrentSubscription();
            return p(s, t);
        }.bind(this), q);
        return r;
    };
    l.prototype.unsubscribe = function(o) {
        o.isForArbiterInstance(this) || h(0);
        o.unsubscribe();
    };
    l.prototype.inform = function(o, p, q) {
        var r = Array.isArray(o);
        o = k(o);
        q = q || l.BEHAVIOR_EVENT;
        var s = q === l.BEHAVIOR_STATE || q === l.BEHAVIOR_PERSISTENT;
        this.$Arbiter4.push({});
        for (var t = 0; t < o.length; t++) {
            var u = o[t];
            u || h(0);
            this.$Arbiter1.setHoldingBehavior(u, q);
            this.$Arbiter2.emitAndHold(u, p);
            this.$Arbiter6(u, p, s);
        }
        var v = this.$Arbiter4.pop();
        return r ? v : v[o[0]];
    };
    l.prototype.query = function(o) {
        var p = this.$Arbiter1.getHoldingBehavior(o);
        !p || p === l.BEHAVIOR_STATE || h(0);
        var q = null;
        this.$Arbiter1.emitToListener(o, function(r) {
            q = r;
        });
        return q;
    };
    l.prototype.registerCallback = function(o, p) {
        if (typeof o === 'function') {
            return this.$Arbiter3.registerCallback(o, p);
        } else return this.$Arbiter3.addDependenciesToExistingCallback(o, p);
    };
    l.prototype.$Arbiter6 = function(o, p, q) {
        if (p === null) return;
        if (q) {
            this.$Arbiter3.satisfyPersistentDependency(o);
        } else this.$Arbiter3.satisfyNonPersistentDependency(o);
    };
    i = babelHelpers.inherits(m, c('EventHolder'));
    j = i && i.prototype;

    function m() {
        j.constructor.call(this);
        this.$ArbiterEventHolder1 = {};
    }
    m.prototype.setHoldingBehavior = function(o, p) {
        this.$ArbiterEventHolder1[o] = p;
    };
    m.prototype.getHoldingBehavior = function(o) {
        return this.$ArbiterEventHolder1[o];
    };
    m.prototype.holdEvent = function(o, p, q, r, s) {
        var t = this.$ArbiterEventHolder1[o];
        if (t !== l.BEHAVIOR_PERSISTENT) this.$ArbiterEventHolder2(o);
        if (t !== l.BEHAVIOR_EVENT) return j.holdEvent.call(this, o, p, q, r, s);
    };
    m.prototype.$ArbiterEventHolder2 = function(o) {
        this.emitToListener(o, this.releaseCurrentEvent, this);
    };
    m.prototype.releaseEvent = function(o) {
        if (o) j.releaseEvent.call(this, o);
    };
    Object.assign(l, {
        SUBSCRIBE_NEW: 'new',
        SUBSCRIBE_ALL: 'all',
        BEHAVIOR_EVENT: 'event',
        BEHAVIOR_STATE: 'state',
        BEHAVIOR_PERSISTENT: 'persistent'
    });

    function n(o, p) {
        this.$ArbiterToken1 = o;
        this.$ArbiterToken2 = p;
    }
    n.prototype.unsubscribe = function() {
        for (var o = 0; o < this.$ArbiterToken2.length; o++) this.$ArbiterToken2[o].remove();
        this.$ArbiterToken2.length = 0;
    };
    n.prototype.isForArbiterInstance = function(o) {
        this.$ArbiterToken1 || h(0);
        return this.$ArbiterToken1 === o;
    };
    Object.keys(l.prototype).forEach(function(o) {
        l[o] = function() {
            var p = this instanceof l ? this : l;
            return l.prototype[o].apply(p, arguments);
        };
    });
    l.call(l);
    f.exports = l;
}), null);
__d('CSRFGuard', [], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = 'for (;;);',
        i = /^for ?\(;;\);/,
        j = {
            length: h.length,
            regex: i,
            exists: function k(l) {
                return !!l.match(i);
            },
            clean: function k(l) {
                var m = l.match(i);
                return m ? l.substr(m[0].length) : m;
            }
        };
    f.exports = j;
}), null);
__d('JSLog', ['ErrorUtils', 'ex', 'sprintf'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = c('ex'),
        i = ['error', 'warn', 'info'];

    function j(l, m) {
        if (m === undefined) {
            k.error('JSLog.%s requires an error message argument', l);
            return;
        }
        for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), p = 2; p < n; p++) o[p - 2] = arguments[p];
        var q = new Error(h.apply(undefined, [m].concat(o)));
        q.name = c('sprintf')('JSLog.%s', l);
        q.type = l;
        q.messageWithParams = [m].concat(o);
        q.framesToPop = 1;
        c('ErrorUtils').reportError(q);
    }
    var k = i.reduce(function(l, m) {
        l[m] = j.bind(l, m);
        return l;
    }, {});
    f.exports = k;
}), null);
__d('CircularBuffer', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        'use strict';
        j > 0 || h(0);
        this.$CircularBuffer1 = j;
        this.$CircularBuffer2 = 0;
        this.$CircularBuffer3 = [];
    }
    i.prototype.write = function(j) {
        'use strict';
        if (this.$CircularBuffer3.length < this.$CircularBuffer1) {
            this.$CircularBuffer3.push(j);
        } else {
            this.$CircularBuffer3[this.$CircularBuffer2] = j;
            this.$CircularBuffer2++;
            this.$CircularBuffer2 %= this.$CircularBuffer1;
        }
        return this;
    };
    i.prototype.read = function() {
        'use strict';
        return this.$CircularBuffer3.slice(this.$CircularBuffer2).concat(this.$CircularBuffer3.slice(0, this.$CircularBuffer2));
    };
    i.prototype.clear = function() {
        'use strict';
        this.$CircularBuffer2 = 0;
        this.$CircularBuffer3 = [];
        return this;
    };
    f.exports = i;
}), null);
__d('LogBuffer', ['CircularBuffer'], (function a(b, c, d, e, f, g) {
    var h = b.setTimeout.nativeBackup || b.setTimeout,
        i = 5000,
        j = {},
        k = {},
        l = {
            write: function m(n, o) {
                var p = j[n] = j[n] || new(c('CircularBuffer'))(i);
                p.write(o);
                if (k[n]) k[n].forEach(function(q) {
                    try {
                        q(o);
                    } catch (r) {}
                });
            },
            read: function m(n) {
                if (!j[n]) {
                    return [];
                } else return j[n].read();
            },
            tail: function m(n, o) {
                if (typeof o !== 'function') return;
                k[n] = k[n] || [];
                k[n].push(o);
                if (j[n]) {
                    var p = j[n];
                    p.read().forEach(function(q) {
                        try {
                            o(q);
                        } catch (r) {}
                    });
                }
            },
            clear: function m(n) {
                if (j[n]) h(function() {
                    j[n].clear();
                }, 0);
            }
        };
    f.exports = l;
}), null);
__d('ExecutionEnvironment', [], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = !!(typeof window !== 'undefined' && window.document && window.document.createElement),
        i = {
            canUseDOM: h,
            canUseWorkers: typeof Worker !== 'undefined',
            canUseEventListeners: h && !!(window.addEventListener || window.attachEvent),
            canUseViewport: h && !!window.screen,
            isInWorker: !h
        };
    f.exports = i;
}), null);
__d('performance', ['ExecutionEnvironment'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = void 0;
    if (c('ExecutionEnvironment').canUseDOM) h = window.performance || window.msPerformance || window.webkitPerformance;
    f.exports = h || {};
}), null);
__d('performanceAbsoluteNow', ['performance'], (function a(b, c, d, e, f, g) {
    var h;
    if (c('performance').now && c('performance').timing && c('performance').timing.navigationStart) {
        var i = c('performance').timing.navigationStart;
        h = function j() {
            return c('performance').now() + i;
        };
    } else h = function j() {
        return Date.now();
    };
    f.exports = h;
}), null);
__d('ProfilingCounters', ['performanceAbsoluteNow'], (function a(b, c, d, e, f, g) {
    c('performanceAbsoluteNow')();

    function h() {
        'use strict';
        this.$ProfilingCounters1 = [];
        this.$ProfilingCounters2 = {};
        this.$ProfilingCounters3 = {};
        this.$ProfilingCounters4 = {};
    }
    h.startCapturing = function() {
        'use strict';
        h.$ProfilingCounters6.push(new h());
    };
    h.stopCapturing = function() {
        'use strict';
        var i = h.$ProfilingCounters6.pop();
        if (!i) throw new Error('Called ProfilingCounters.stopCapturing too many times.');
    };
    h.$ProfilingCounters7 = function() {
        'use strict';
        var i = h.$ProfilingCounters6.length;
        if (i === 0) throw new Error('Must call ProfilingCounters.startCapturing first.');
        return h.$ProfilingCounters6[i - 1];
    };
    h.startTiming = function(i) {
        'use strict';
        return h.$ProfilingCounters7().$ProfilingCounters8(i);
    };
    h.prototype.$ProfilingCounters8 = function(i) {
        'use strict';
        var j = h.$ProfilingCounters5++,
            k = {
                value: 0,
                counter: i,
                id: j,
                lastStartTime: 0
            };
        this.$ProfilingCounters2[j] = this.$ProfilingCounters1.length;
        this.$ProfilingCounters1.push(k);
        var l = c('performanceAbsoluteNow')();
        k.lastStartTime = l;
        if (this.$ProfilingCounters1.length > 1) {
            var m = this.$ProfilingCounters1[this.$ProfilingCounters1.length - 2];
            m.value += l - m.lastStartTime;
        }
        return j;
    };
    h.stopTiming = function(i) {
        'use strict';
        return h.$ProfilingCounters7().$ProfilingCounters9(i);
    };
    h.prototype.$ProfilingCounters9 = function(i) {
        'use strict';
        var j = c('performanceAbsoluteNow')(),
            k = this.$ProfilingCounters2[i];
        delete this.$ProfilingCounters2[i];
        if (k == null || this.$ProfilingCounters1[k] == null) return 0;
        var l = null,
            m = 0;
        while (this.$ProfilingCounters1.length - 1 > k) {
            var n = this.$ProfilingCounters1.pop();
            m += n.value;
            delete this.$ProfilingCounters2[n.id];
            if (l == null && n.lastStartTime != null) l = n.lastStartTime;
        }
        var o = this.$ProfilingCounters1.pop();
        o.value += j - (l || o.lastStartTime);
        o.value += m;
        this.$ProfilingCounters4[o.counter] = this.$ProfilingCounters4[o.counter] || 0;
        this.$ProfilingCounters4[o.counter] += o.value;
        if (this.$ProfilingCounters1.length > 0) this.$ProfilingCounters1[this.$ProfilingCounters1.length - 1].lastStartTime = j;
        return o.value;
    };
    h.incrementCounter = function(i, j) {
        'use strict';
        h.$ProfilingCounters7().$ProfilingCounters10(i, j);
    };
    h.prototype.$ProfilingCounters10 = function(i, j) {
        'use strict';
        this.$ProfilingCounters3[i] = this.$ProfilingCounters3[i] || 0;
        this.$ProfilingCounters3[i] += j;
    };
    h.getTotals = function() {
        'use strict';
        return h.$ProfilingCounters7().$ProfilingCounters11();
    };
    h.prototype.$ProfilingCounters11 = function() {
        'use strict';
        return babelHelpers['extends']({}, this.$ProfilingCounters4, this.$ProfilingCounters3);
    };
    h.$ProfilingCounters6 = [];
    h.$ProfilingCounters5 = 1;
    h.startCapturing();
    b.ProfilingCounters = h;
    f.exports = h;
}), 3);
__d('TimeSliceRefCountingWrapper', [], (function a(b, c, d, e, f, g) {
    var h = [],
        i = null,
        j = null,
        k = 1,
        l = {},
        m = {};

    function n(p, q, r, s) {
        if (p == null || p.length === 0) return;
        var t = 0,
            u = 0,
            v = [];
        while (u < p.length) {
            var w = p[u],
                x = true;
            if (!(s !== null && s !== w.rootContext && q)) {
                w.refCount--;
                if (w.refCount === 0) {
                    w.callbacks.forEach(function(y) {
                        return v.push(y);
                    });
                    w.callbacks = [];
                    x = false;
                }
            }
            if (x) {
                p[t] = w;
                t++;
            }
            u++;
        }
        p.splice(t, u - t);
        if (j != null) j.scheduleCallbacks(v);
    }
    var o = {
        wrapWithReferenceCounting: function p(q, r, s, t) {
            var u = null,
                v = false;
            if (s && h.length > 0) {
                h.forEach(function(z) {
                    return z.refCount++;
                });
                u = h;
            }
            var w = false,
                x = k++,
                y = function z() {
                    w = true;
                    var aa = m[x];
                    if (aa) {
                        delete l[aa];
                        delete m[x];
                    }
                    var ba = h;
                    if (u != null) h = u;
                    var ca = r.apply(this, arguments),
                        da = t.getLastCompletedTimeSliceContextID(),
                        ea = i != null && i.rootContext === da;
                    if (u != null || ea) {
                        n(h, v, q, t.getLastCompletedTimeSliceContextID());
                        h = ba;
                    }
                    v = true;
                    return ca;
                };
            y.__creationID = x;
            y.__cancelCallback = function() {
                if (u != null && !w) {
                    w = true;
                    n(u, v, q, null);
                    v = true;
                }
            };
            return y;
        },
        getCurrentActiveReferenceRootIds: function p() {
            return h.map(function(q) {
                return q.rootContext;
            });
        },
        addOrCreateRefCounter: function p(q, r) {
            if (i != null && i.rootContext === r) {
                i.callbacks.push(q);
            } else {
                i = {
                    refCount: 1,
                    callbacks: [q],
                    rootContext: r
                };
                h = h.slice();
                h.push(i);
            }
        },
        registerForCancelling: function p(q, r) {
            if (l[q] != null) {
                return;
            } else if (!q) return;
            l[q] = r;
            m[r.__creationID] = q;
        },
        cancelTimeSlice: function p(q) {
            var r = l[q];
            if (r) {
                delete l[q];
                delete m[r.__creationID];
                r.__cancelCallback();
            }
        },
        isValidCancellationToken: function p(q) {
            return l[q] != null;
        },
        registerRefCountingCallbackManager: function p(q) {
            j = q;
        }
    };
    f.exports = o;
}), null);
__d('wrapFunction', [], (function a(b, c, d, e, f, g) {
    var h = {},
        i = function j(k, l, m) {
            var n = l || 'default';
            return function() {
                var o = n in h ? h[n](k, m) : k;
                return o.apply(this, arguments);
            };
        };
    i.setWrapper = function(j) {
        var k = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
        h[k] = j;
    };
    f.exports = i;
}), null);
__d('TimeSlice', ['invariant', 'CircularBuffer', 'ErrorUtils', 'Env', 'LogBuffer', 'ProfilingCounters', 'TimeSliceRefCountingWrapper', 'performanceAbsoluteNow', 'wrapFunction'], (function a(b, c, d, e, f, g, h) {
    var i = 1,
        j = false,
        k = void 0,
        l = void 0,
        m = void 0,
        n = 0,
        o = 1,
        p = 2,
        q = n,
        r = new(c('CircularBuffer'))(100),
        s = 0,
        t = 0,
        u = c('Env').shouldLogCounters,
        v = 'stackTraceLimit' in Error,
        w = 60000,
        x = 240000,
        y = null,
        z = false,
        aa = 0,
        ba = [],
        ca = {
            _enabled: false,
            _lastEnabledStartTimeMs: null,
            _firstEnabledStartTimeMs: null,
            _delayMs: 33,
            _idleGapThresholdMs: 60,
            _lastEvent: {
                type: 'unknown',
                timeMs: null
            },
            _intervalHandle: null,
            _ignoredTimesliceNames: {},
            _expectedNextHeartbeatMs: null,
            _activeHeartbeatHandles: {},
            enable: function ea() {
                var fa, ga = this,
                    ha = c('performanceAbsoluteNow')();
                if (!this._enabled) {
                    var ia = c('Env').timeslice_heartbeat_config || {};
                    this._enabled = true;
                    this._delayMs = ia.pollIntervalMs || this._delayMs;
                    this._idleGapThresholdMs = ia.idleGapThresholdMs || this._idleGapThresholdMs;
                    this._ignoredTimesliceNames = ia.ignoredTimesliceNames || this._ignoredTimesliceNames;
                    this._intervalHandle = setInterval(this._beat.bind(this), this._delayMs);
                    this._expectedNextHeartbeatMs = ha + this._delayMs;
                    if (this._firstEnabledStartTimeMs == null) this._firstEnabledStartTimeMs = ha;
                }
                if (z) {
                    return null;
                } else if (ha - this._firstEnabledStartTimeMs > x) {
                    z = true;
                    return null;
                } else {
                    var fa = function() {
                        ga._lastEnabledStartTimeMs = ha;
                        var ja = aa++,
                            ka = {
                                disable: function() {
                                    if (this._activeHeartbeatHandles[ja] != null) {
                                        delete this._activeHeartbeatHandles[ja];
                                        this._checkShouldDisable();
                                    }
                                }.bind(ga),
                                enabledTime: ga._lastEnabledStartTimeMs
                            };
                        ga._activeHeartbeatHandles[ja] = ka;
                        return {
                            v: ka
                        };
                    }();
                    if (typeof fa === "object") return fa.v;
                }
            },
            _checkShouldDisable: function ea() {
                var fa, ga = this;
                if (this._enabled)(function() {
                    var ha = c('performanceAbsoluteNow')(),
                        ia = false;
                    Object.keys(ga._activeHeartbeatHandles).forEach(function(ja) {
                        if (ha - this._activeHeartbeatHandles[ja].enabledTime > w) {
                            delete this._activeHeartbeatHandles[ja];
                        } else ia = true;
                    }.bind(ga));
                    if (!ia) {
                        ga._enabled = false;
                        clearInterval(ga._intervalHandle);
                        ga._intervalHandle = null;
                        ga._firstEnabledStartTimeMs = null;
                    }
                })();
            },
            updateExecution: function ea(fa, ga, ha) {
                if (!this._enabled) return;
                if (this._ignoredTimesliceNames[ha]) {
                    this._updateState({
                        type: 'ignored_exec',
                        timeMs: fa
                    }, true);
                    this._updateState({
                        type: 'ignored_exec',
                        timeMs: ga
                    }, false);
                } else {
                    this._updateState({
                        type: 'exec',
                        timeMs: fa
                    }, true);
                    this._updateState({
                        type: 'exec',
                        timeMs: ga
                    }, false);
                }
            },
            _isIdleMarker: function ea(event) {
                return event.type == 'beat' || event.type == 'ignored_exec';
            },
            _updateState: function ea(fa, ga) {
                var ha = this._lastEvent.timeMs,
                    ia = fa.timeMs;
                if (ga) {
                    var ja = this._expectedNextHeartbeatMs + this._idleGapThresholdMs,
                        ka = ia > ja;
                    if (this._lastEvent.type === 'exec') {
                        if (fa.type === 'exec') {
                            this._outputBrowserBlock(ha, ia, ka ? 'likely_btwn_exec' : 'btwn_exec');
                        } else if (this._isIdleMarker(fa)) this._outputBrowserBlock(ha, ia, ka ? 'likely_post_exec' : 'post_exec');
                    } else if (this._isIdleMarker(this._lastEvent))
                        if (fa.type === 'exec') {
                            this._outputBrowserBlock(ha, ia, ka ? 'likely_pre_exec' : 'pre_exec');
                        } else if (this._isIdleMarker(fa) && ka) {
                        var la = fa.type === 'beat' ? 'delayed_beat' : 'delayed_beat_btwn_ignored';
                        this._outputBrowserBlock(ha, ia, la);
                    }
                }
                this._lastEvent = fa;
            },
            _outputBrowserBlock: function ea(fa, ga, ha) {
                if (fa < ga) c('LogBuffer').write('time_slice_heartbeat', {
                    begin: fa,
                    end: ga,
                    id: i++,
                    parentID: null,
                    guard: 'browser time: ' + ha
                });
            },
            _beat: function ea() {
                var fa = c('performanceAbsoluteNow')();
                if (!this._enabled) {
                    return;
                } else if (fa - this._lastEnabledStartTimeMs > w) {
                    this._activeHeartbeatHandles = {};
                    this._checkShouldDisable();
                    return;
                }
                this._updateState({
                    type: 'beat',
                    timeMs: fa
                }, true);
                this._expectedNextHeartbeatMs = fa + this._delayMs;
            },
            isOn: function ea() {
                return this._enabled;
            }
        },
        da = {
            guard: function ea(fa, ga, ha) {
                typeof fa === 'function' || h(0);
                typeof ga === 'string' || h(0);
                if (fa.__tsGuarded) return fa;
                if (!ha || !ha.root) da.checkCoverage();
                var ia = void 0;
                if (j) ia = k;
                var ja = function ka() {
                    var la = void 0;
                    ba.push(ga);
                    var ma = k;
                    k = i++;
                    if (j) {
                        la = fa.apply(this, arguments);
                    } else {
                        var na = 'TimeSlice' + (ga ? ': ' + ga : '');
                        c('ProfilingCounters').startCapturing();
                        var oa = c('performanceAbsoluteNow')();
                        j = true;
                        m = ga;
                        la = c('ErrorUtils').applyWithGuard(fa, this, arguments, null, na);
                        j = false;
                        var pa = c('performanceAbsoluteNow')();
                        t += pa - oa;
                        c('LogBuffer').write('time_slice', babelHelpers['extends']({
                            begin: oa,
                            end: pa,
                            id: k,
                            parentID: ia,
                            guard: ga,
                            counters: u ? c('ProfilingCounters').getTotals() : null,
                            activeRefTreeIds: c('TimeSliceRefCountingWrapper').getCurrentActiveReferenceRootIds()
                        }, ha, fa.__SMmeta));
                        c('ProfilingCounters').stopCapturing();
                        ca.updateExecution(oa, pa, ga);
                    }
                    l = k;
                    k = ma;
                    ba.pop();
                    return la;
                };
                ja = c('TimeSliceRefCountingWrapper').wrapWithReferenceCounting(ga, ja, ha != null && ha.isContinuation, da);
                ja.__tsGuarded = true;
                return ja;
            },
            inGuard: function ea() {
                return j;
            },
            checkCoverage: function ea() {
                var fa = void 0;
                if (q !== p && !j) {
                    if (v) {
                        fa = Error.stackTraceLimit;
                        Error.stackTraceLimit = 50;
                    }
                    var ga = new Error('Missing TimeSlice coverage');
                    if (v) Error.stackTraceLimit = fa;
                    ga.type = 'warn';
                    if (q === o && Math.random() < s) {
                        c('ErrorUtils').reportError(ga);
                    } else if (q === n) r.write(ga);
                }
            },
            setLogging: function ea(fa, ga) {
                if (q !== n) return;
                s = ga;
                if (fa) {
                    q = o;
                    r.read().forEach(function(ha) {
                        if (Math.random() < s) c('ErrorUtils').reportError(ha);
                    });
                } else q = p;
                r.clear();
                r = undefined;
            },
            enableHeartbeat: function ea() {
                return ca.enable();
            },
            disablePageHeartbeat: function ea() {
                if (y != null) y.disable();
            },
            isHeartbeatOn: function ea() {
                return ca.isOn();
            },
            getContext: function ea() {
                if (!j) return null;
                return {
                    id: k,
                    name: m
                };
            },
            getLastCompletedTimeSliceContextID: function ea() {
                return l;
            },
            getTotalTime: function ea() {
                return t;
            },
            getGuardedContinuation: function ea(fa) {
                return da.guard(function() {
                    return arguments[0].apply(this, Array.prototype.slice.call(arguments, 1));
                }, fa, {
                    isContinuation: true
                });
            },
            getGuardNameStack: function ea() {
                return ba.slice();
            }
        };
    c('wrapFunction').setWrapper(da.guard, 'entry');
    if (c('Env').timeslice_heartbeat_config && c('Env').timeslice_heartbeat_config.enableOnRequire) y = da.enableHeartbeat();
    b.TimeSlice = da;
    f.exports = da;
}), 3);
__d('CurrentCommunity', ['CurrentCommunityInitialData'], (function a(b, c, d, e, f, g) {
    var h = {
        getID: function i() {
            return c('CurrentCommunityInitialData').COMMUNITY_ID || '0';
        },
        getName: function i() {
            return c('CurrentCommunityInitialData').COMMUNITY_NAME || '';
        }
    };
    f.exports = h;
}), null);
__d('DTSG', ['invariant', 'DTSGInitialData'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = c('DTSGInitialData').token || null,
        j = {
            getToken: function k() {
                return i;
            },
            setToken: function k(l) {
                i = l;
            },
            refresh: function k() {
                h(0);
            }
        };
    f.exports = j;
}), null);
__d('BitMap', [], (function a(b, c, d, e, f, g) {
    var h = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';

    function i() {
        'use strict';
        this.$BitMap1 = [];
    }
    i.prototype.set = function(l) {
        'use strict';
        this.$BitMap1[l] = 1;
        return this;
    };
    i.prototype.toString = function() {
        'use strict';
        var l = [];
        for (var m = 0; m < this.$BitMap1.length; m++) l.push(this.$BitMap1[m] ? 1 : 0);
        return l.length ? k(l.join('')) : '';
    };
    i.prototype.toCompressedString = function() {
        'use strict';
        if (this.$BitMap1.length === 0) return '';
        var l = [],
            m = 1,
            n = this.$BitMap1[0] || 0,
            o = n.toString(2);
        for (var p = 1; p < this.$BitMap1.length; p++) {
            var q = this.$BitMap1[p] || 0;
            if (q === n) {
                m++;
            } else {
                l.push(j(m));
                n = q;
                m = 1;
            }
        }
        if (m) l.push(j(m));
        return k(o + l.join(''));
    };

    function j(l) {
        var m = l.toString(2),
            n = '0'.repeat(m.length - 1);
        return n + m;
    }

    function k(l) {
        var m = (l + '00000').match(/[01]{6}/g),
            n = '';
        for (var o = 0; o < m.length; o++) n += h[parseInt(m[o], 2)];
        return n;
    }
    f.exports = i;
}), null);
__d('Map', [], (function a(b, c, d, e, f, g) {
    'use strict';
    f.exports = function(h) {
        return h.Map;
    }(b);
}), null);
__d('Set', [], (function a(b, c, d, e, f, g) {
    'use strict';
    f.exports = function(h) {
        return h.Set;
    }(b);
}), null);
__d('ge', [], (function a(b, c, d, e, f, g) {
    function h(k, l, m) {
        return typeof k != 'string' ? k : !l ? document.getElementById(k) : i(k, l, m);
    }

    function i(k, l, m) {
        var n = void 0,
            o = void 0,
            p = void 0;
        if (j(l) == k) {
            return l;
        } else if (l.getElementsByTagName) {
            o = l.getElementsByTagName(m || '*');
            for (p = 0; p < o.length; p++)
                if (j(o[p]) == k) return o[p];
        } else {
            o = l.childNodes;
            for (p = 0; p < o.length; p++) {
                n = i(k, o[p]);
                if (n) return n;
            }
        }
        return null;
    }

    function j(k) {
        return k.getAttribute ? k.getAttribute('id') : null;
    }
    f.exports = h;
}), null);
__d('memoize', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        var k = void 0;
        return function() {
            !arguments.length || h(0);
            if (j) {
                k = j();
                j = null;
            }
            return k;
        };
    }
    f.exports = i;
}), null);
__d('replaceTransportMarkers', ['Map', 'Set', 'ge', 'memoize'], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        var l = k !== undefined ? j[k] : j,
            m;
        if (Array.isArray(l)) {
            for (m = 0; m < l.length; m++) h(i, l, m);
        } else if (l && typeof l == 'object')
            if (l.__m) {
                if (l.__lazy) {
                    j[k] = c('memoize')(c.bind(null, l.__m));
                } else j[k] = c.call(null, l.__m);
            } else if (l.__e) {
            j[k] = c('ge')(l.__e);
        } else if (l.__rel) {
            j[k] = i;
        } else {
            for (var n in l) h(i, l, n);
            if (l.__map) {
                j[k] = new(c('Map'))(l.__map);
            } else if (l.__set) j[k] = new(c('Set'))(l.__set);
        }
    }
    f.exports = h;
}), null);
__d('ServerJSDefine', ['BitMap', 'replaceTransportMarkers'], (function a(b, c, d, e, f, g) {
    var h = 2,
        i = new(c('BitMap'))(),
        j = {
            getLoadedModuleHash: function k() {
                return i.toCompressedString();
            },
            handleDefine: function k(l, m, n, o, p) {
                i.set(o);
                define(l, m, function q() {
                    c('replaceTransportMarkers')(p, n);
                    return n;
                }, h);
            },
            handleDefines: function k(l, m) {
                l.forEach(function(n) {
                    if (m) n.push(m);
                    j.handleDefine.apply(null, n);
                });
            }
        };
    f.exports = j;
}), null);
__d('CSSCore', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(k, l) {
        var m = k;
        while (m.parentNode) m = m.parentNode;
        var n = m.querySelectorAll(l);
        return Array.prototype.indexOf.call(n, k) !== -1;
    }
    var j = {
        addClass: function k(l, m) {
            !/\s/.test(m) || h(0);
            if (m)
                if (l.classList) {
                    l.classList.add(m);
                } else if (!j.hasClass(l, m)) l.className = l.className + ' ' + m;
            return l;
        },
        removeClass: function k(l, m) {
            !/\s/.test(m) || h(0);
            if (m)
                if (l.classList) {
                    l.classList.remove(m);
                } else if (j.hasClass(l, m)) l.className = l.className.replace(new RegExp('(^|\\s)' + m + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
            return l;
        },
        conditionClass: function k(l, m, n) {
            return (n ? j.addClass : j.removeClass)(l, m);
        },
        hasClass: function k(l, m) {
            !/\s/.test(m) || h(0);
            if (l.classList) return !!m && l.classList.contains(m);
            return (' ' + l.className + ' ').indexOf(' ' + m + ' ') > -1;
        },
        matchesSelector: function k(l, m) {
            var n = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector || function(o) {
                return i(l, o);
            };
            return n.call(l, m);
        }
    };
    f.exports = j;
}), null);
__d('isSocialPlugin', ['CSSCore'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        return document.body && c('CSSCore').hasClass(document.body, 'plugin');
    }
    f.exports = h;
}), null);
__d('getAsyncParams', ['CurrentCommunity', 'CurrentUserInitialData', 'DTSG', 'ISB', 'LSD', 'ServerJSDefine', 'SiteData', 'SprinkleConfig', 'isSocialPlugin'], (function a(b, c, d, e, f, g) {
    var h = 1;

    function i(j) {
        var k, l = (k = {
            __user: c('CurrentUserInitialData').USER_ID,
            __a: 1,
            __dyn: c('ServerJSDefine').getLoadedModuleHash(),
            __af: c('SiteData').features,
            __req: (h++).toString(36)
        }, k[c('SiteData').be_key] = c('SiteData').be_mode, k[c('SiteData').pkg_cohort_key] = c('SiteData').pkg_cohort, k.__rev = c('SiteData').revision, k);
        window.location.search.slice(1).split('&').forEach(function(p) {
            var q = p.split('='),
                r = q[0],
                s = q[1];
            if (r === 'locale' || r === 'cxobfus' || r === 'js_debug' || r.substr(0, 3) === 'mh_') l[r] = s;
        });
        if (j == 'POST') {
            var m = c('DTSG').getCachedToken ? c('DTSG').getCachedToken() : c('DTSG').getToken();
            if (m) {
                l.fb_dtsg = m;
                var n = '';
                for (var o = 0; o < l.fb_dtsg.length; o++) n += l.fb_dtsg.charCodeAt(o);
                if (c('SprinkleConfig').param_name) l[c('SprinkleConfig').param_name] = '2' + n;
            }
            if (c('LSD').token) l.lsd = c('LSD').token;
        }
        if (c('ISB').token) l.fb_isb = c('ISB').token;
        if (c('CurrentCommunity').getID() !== '0') l.__cid = c('CurrentCommunity').getID();
        if (c('isSocialPlugin')()) l.__sp = 1;
        if (c('SiteData').page_gen_time) l[c('SiteData').page_gen_time_key] = c('SiteData').page_gen_time;
        if (c('SiteData').branch_name) l[c('SiteData').branch_name_key] = c('SiteData').branch_name;
        return l;
    }
    f.exports = i;
}), null);
__d('getSameOriginTransport', ['ex'], (function a(b, c, d, e, f, g) {
    function h() {
        try {
            return b.XMLHttpRequest ? new b.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (i) {
            throw new Error(c('ex')('getSameOriginTransport: %s', i.message));
        }
    }
    f.exports = h;
}), null);
__d('ix', ['invariant'], (function a(b, c, d, e, f, g, h) {
    var i = {};

    function j(k) {
        var l = i[k];
        !!l || h(0);
        return l;
    }
    j.add = function(k) {
        var l = false;
        for (var m in k)
            if (!(m in i)) i[m] = k[m];
    };
    f.exports = j;
}), null);
__d('Bootloader', ['ix', 'Arbiter', 'BootloaderConfig', 'CSSLoader', 'CallbackDependencyManager', 'CSRFGuard', 'ErrorUtils', 'JSLog', 'ServerJS', 'TimeSlice', 'TimeSliceInteraction', 'ex', 'getAsyncParams', 'getSameOriginTransport', 'performanceAbsoluteNow'], (function a(b, c, d, e, f, g, h) {
    var i = function ua() {},
        j = {},
        k = {},
        l = {},
        m = {},
        n = null,
        o = {},
        p = {},
        q = {},
        r = {},
        s = {},
        t = [],
        u = {},
        v = {},
        w = {},
        x = {},
        y = false,
        z = false,
        aa = [],
        ba = new(c('CallbackDependencyManager'))(),
        ca = 0,
        da = c('BootloaderConfig').jsRetries || [],
        ea = c('BootloaderConfig').jsRetryAbortNum,
        fa = c('BootloaderConfig').jsRetryAbortTime,
        ga = da.length > 0,
        ha = {
            BOOTLOAD: 'bootloader/bootload',
            HASTE_RESPONSE: 'bootloader/hasteResponse'
        };
    c('ErrorUtils').addListener(function(ua) {
        ua.loadingUrls = Object.keys(p);
    }, true);

    function ia(ua) {
        var va = l[ua];
        if (va) return va;
        throw new Error(c('ex')('Bootloader: %s is not in the component map', ua));
    }

    function ja() {
        if (!n) n = document.head || document.getElementsByTagName('head')[0] || document.body;
        return n;
    }

    function ka() {
        if (!ga) return false;
        var ua = t.length;
        if (ua < ea) return true;
        var va = t[ua - 1] - t[ua - ea];
        if (va < fa) {
            c('JSLog').error('JS retry abort');
            ga = false;
        }
        return ga;
    }

    function la(ua, va, wa, xa) {
        var ya = document.createElement('script');
        ya.src = ua;
        ya.async = true;
        if (va != null && o[va].crossOrigin) ya.crossOrigin = 'anonymous';
        var za = c('performanceAbsoluteNow')(),
            ab = c('TimeSlice').getGuardedContinuation('Bootloader script.onresponse');
        c('TimeSliceInteraction').informGlobally('bootloader._loadJS').addStringAnnotation('source', ua).addStringAnnotation('hash', va != null ? va : '');
        ya.onload = ab.bind(undefined, function() {
            if (s[ua]) c('JSLog').info('JS retry success [%s] at %s | time: %s | retries: %s', va, ua, c('performanceAbsoluteNow')() - za, s[ua]);
            wa();
        });
        ya.onreadystatechange = function() {
            if (['loaded', 'complete'].includes(this.readyState)) ab.bind(undefined, wa)();
        }.bind(this);
        ya.onerror = ab.bind(undefined, function() {
            if (!s[ua]) s[ua] = 0;
            if (ka() && s[ua] < da.length) {
                t.push(c('performanceAbsoluteNow')());
                setTimeout(function() {
                    if (!ka()) return;
                    var bb = ya.parentNode;
                    bb.removeChild(ya);
                    la(ua, va, wa, bb);
                }, da[s[ua]]);
                s[ua]++;
            } else {
                r[ua] = true;
                c('JSLog').error('JS loading error [%s] at %s | time: %s | retries: %s' + ' | concurrency: %s', va, ua, c('performanceAbsoluteNow')() - za, s[ua], Object.keys(p).length);
                wa();
            }
        });
        xa.appendChild(ya);
        return ya;
    }

    function ma(ua, va, wa, xa) {
        var ya = function ab() {
            return ta.done([wa], va);
        };
        p[va] = c('performanceAbsoluteNow')();
        if (ua === 'js') {
            la(va, wa, ya, xa);
        } else if (ua === 'async') {
            na(va, ya);
        } else if (ua === 'css') {
            var za = wa != null && o[wa].crossOrigin;
            c('CSSLoader').loadStyleSheet(wa, va, xa, za, ya, function() {
                c('JSLog').warn('CSS timeout [%s] at %s | concurrency: %s', wa, va, Object.keys(p).length);
                r[va] = true;
                ya();
            });
        }
    }

    function na(ua, va) {
        var wa = c('getAsyncParams')('GET');
        for (var xa in wa) {
            var ya = encodeURIComponent(xa),
                za = encodeURIComponent(wa[xa]);
            ua += '&' + ya + '=' + za;
        }
        var ab = c('getSameOriginTransport')();
        ab.open('GET', ua, true);
        ab.onreadystatechange = function() {
            if (ab.readyState === 4) {
                var bb = ab.status === 200 ? JSON.parse(c('CSRFGuard').clean(ab.responseText)) : {},
                    cb = oa();
                cb(bb, ua, va);
            }
        };
        ab.send();
    }

    function oa() {
        return c('TimeSlice').guard(function(ua, va, wa) {
            var xa = ua.jsmods,
                ya = ua.resource_map,
                za = ua.bootloadable,
                ab = ua.ixData,
                bb = ua.allResources,
                cb = [0, 0, 0];
            if (ya) cb = ta.setResourceMap(ya);
            if (ab) h.add(ab);
            if (za) ta.enableBootload(za);
            ta.loadResources(bb || [], function() {
                new(c('ServerJS'))().handle(xa || {});
                wa();
            });
            var db = {
                uri: va,
                components: Object.keys(za || {}),
                resourceCounts: cb
            };
            c('Arbiter').inform(ha.HASTE_RESPONSE, db, c('Arbiter').BEHAVIOR_PERSISTENT);
        }, 'Bootloader receiveEndpointData', {
            isContinuation: true
        });
    }

    function pa(ua) {
        if (!o[ua]) {
            c('JSLog').error('Missing unloading resource %s', ua);
            return;
        }
        if (o[ua].type === 'css') {
            c('CSSLoader').unloadStyleSheet(ua);
            delete j[ua];
            ba.unsatisfyPersistentDependency(ua);
            if (u[ua]) {
                u[ua].cancel();
                delete u[ua];
            }
        }
    }

    function qa(ua, va, wa, xa) {
        var ya, za = {},
            ab = {},
            bb = {},
            cb = window.CavalryLogger && window.CavalryLogger.getInstance();
        ua.forEach(function(fb) {
            var gb = o[fb];
            if (!gb) {
                c('JSLog').error('Unable to resolve resource %s.', fb);
                return;
            }
            if (gb.nonblocking && !c('BootloaderConfig').assumeNotNonblocking) {
                bb[fb] = true;
            } else ab[fb] = true;
            if (!j[fb]) {
                j[fb] = true;
                if (gb.permanent || c('BootloaderConfig').assumePermanent) k[fb] = true;
                za[fb] = gb;
                cb && cb.measureResources({
                    name: fb,
                    type: gb.type
                }, wa);
            }
        });
        var db = va;
        if (xa)(function() {
            var fb = c('performanceAbsoluteNow')();
            db = function gb() {
                var hb = Math.round(c('performanceAbsoluteNow')() - fb),
                    ib = Object.keys(ab).length,
                    jb = Object.keys(za),
                    kb = {
                        blocking_resources_downloaded: jb.filter(function(nb) {
                            return (nb in ab);
                        }).length,
                        blocking_resources_count: ib,
                        all_resources_downloaded: jb.length,
                        all_resources_count: ib + Object.keys(bb).length,
                        err_count: Object.values(za).filter(function(nb) {
                            var ob = nb.src;
                            return (ob in r);
                        }).length
                    },
                    lb = c('TimeSlice').getContext(),
                    mb = babelHelpers['extends']({}, xa, kb, {
                        timeslice_context: lb && lb.name,
                        start_time: fb,
                        duration: hb
                    });
                c('Arbiter').inform(ha.BOOTLOAD, mb, c('Arbiter').BEHAVIOR_PERSISTENT);
                va && va();
            };
        })();
        if (db) ba.registerCallback(db, Object.keys(ab));
        var eb = document.createDocumentFragment();
        Object.entries(za).forEach(function(fb) {
            var gb = fb[0],
                hb = fb[1],
                ib = hb.type,
                jb = hb.src;
            ma(ib, jb, gb, eb);
        });
        ja().appendChild(eb);
    }

    function ra() {
        return c('TimeSlice').guard(function(ua, va, wa, xa) {
            if (va) {
                for (var ya = arguments.length, za = Array(ya > 4 ? ya - 4 : 0), ab = 4; ab < ya; ab++) za[ab - 4] = arguments[ab];
                va.apply(ua, za);
            }
            if (xa) c('JSLog').error('JS loading error [%s] at %s', wa, ua.src);
            ta.done([wa]);
        }, 'Bootloader _onScriptDone', {
            isContinuation: true
        });
    }

    function sa() {
        if (y) return;
        y = true;
        Array.from(document.getElementsByTagName('link')).forEach(function(ua) {
            var va = void 0;
            if (va = ua.getAttribute('data-bootloader-hash')) {
                o[va] = {
                    src: ua.href,
                    type: 'css'
                };
                if (ua.getAttribute('data-permanent') || c('BootloaderConfig').assumePermanent) {
                    o[va].permanent = 1;
                    k[va] = true;
                }
                c('CSSLoader').registerLoadedStyleSheet(va, ua);
                ta.done([va]);
                x[va] = true;
            }
        });
        Array.from(document.getElementsByTagName('script')).forEach(function(ua) {
            var va = void 0;
            if (va = ua.getAttribute('data-bootloader-hash')) {
                o[va] = {
                    src: ua.src,
                    type: 'js'
                };
                if (ua.getAttribute('async')) {
                    if (window._btldr && window._btldr[va]) {
                        ta.done([va]);
                    } else {
                        var wa = ra();
                        ua.onload = wa.bind(null, ua, ua.onload, va, false);
                        ua.onerror = wa.bind(null, ua, ua.onerror, va, true);
                        j[va] = true;
                    }
                } else ta.done([va]);
                x[va] = true;
            }
        });
    }
    var ta = {
        loadModules: function ua(va) {
            var wa, xa = arguments.length <= 1 || arguments[1] === undefined ? i : arguments[1],
                ya = arguments.length <= 2 || arguments[2] === undefined ? 'loadModules: unknown caller' : arguments[2];
            if (!z) {
                var za = 'Deferred: Bootloader.loadModules',
                    ab = c('TimeSlice').getGuardedContinuation(za);
                aa.push([va, xa, ya, ab]);
                return;
            }
            var bb = c('performanceAbsoluteNow')(),
                cb = JSON.stringify([ya, va]),
                db = false;
            if (!(cb in w)) {
                db = true;
                w[cb] = bb;
            }
            var eb = [],
                fb = [],
                gb = [],
                hb = false,
                ib = 0;
            va.forEach(function(jb) {
                var kb = ia(jb);
                if (kb.needsAsync) {
                    ib++;
                    if (jb in m) {
                        fb.push(m[jb]);
                    } else gb.push(jb);
                }
                if (!(jb in v)) {
                    hb = true;
                    v[jb] = bb;
                }
                if (kb.module) eb.push(jb);
                fb.push.apply(fb, kb.resources);
            });
            if (gb.length > 0)(function() {
                var jb = c('BootloaderConfig').payloadEndpointURI,
                    kb = 'async:' + ca++,
                    lb = encodeURIComponent(gb.join(',')),
                    mb = jb.indexOf('?') > -1 ? '&' : '?';
                o[kb] = {
                    src: '' + jb + mb + 'modules=' + lb,
                    type: 'async'
                };
                fb.push(kb);
                gb.forEach(function(nb) {
                    m[nb] = kb;
                });
            })();
            qa(fb, e.bind(null, eb, xa), null, {
                ref: ya,
                components: va,
                has_new_component: hb,
                first_identical_request: db,
                async_resources_count: ib,
                async_resources_downloaded: gb.length
            });
        },
        loadResources: function ua(va, wa, xa, ya) {
            var za;
            c('TimeSliceInteraction').informGlobally('Bootloader.loadResources').addSetAnnotation('hashes', va);
            sa();
            if (xa)(function() {
                var ab = {};
                va.forEach(function(cb) {
                    ab[cb] = true;
                });
                for (var bb in j)
                    if (!(bb in k || bb in ab || bb in x)) pa(bb);
                x = {};
            })();
            qa(va, wa, ya);
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function ua(va) {
            ma('js', va, null, ja());
        },
        done: function ua(va, wa) {
            if (wa != null) {
                q[wa] = c('performanceAbsoluteNow')() - p[wa];
                delete p[wa];
            }
            if (window.CavalryLogger) window.CavalryLogger.done_js(va);
            va.forEach(function(xa) {
                if (xa != null) {
                    j[xa] = true;
                    ba.satisfyPersistentDependency(xa);
                    if (o[xa] && o[xa].type === 'css' && !u[xa]) u[xa] = define(c('CSSLoader').moduleName(xa), [], 'x', 2, null, 1);
                }
            });
        },
        enableBootload: function ua(va) {
            for (var wa in va)
                if (!l[wa]) l[wa] = va[wa];
            if (!z) {
                sa();
                z = true;
                aa.forEach(function(xa) {
                    xa[3](function() {
                        ta.loadModules.apply(ta, xa);
                    });
                });
                aa = [];
            }
        },
        setResourceMap: function ua(va) {
            var wa = 0,
                xa = 0,
                ya = 0;
            for (var za in va)
                if (!o[za]) {
                    o[za] = va[za];
                    wa++;
                } else if (o[za].src === va[za].src) {
                ya++;
            } else xa++;
            return [wa, xa, ya];
        },
        getURLToHashMap: function ua() {
            var va = {};
            for (var wa in o) va[o[wa].src] = wa;
            return va;
        },
        loadPredictedResources: function ua(va, wa) {
            va.forEach(function(xa) {
                x[xa] = true;
            });
            qa(va, wa);
        },
        loadPredictedResourceMap: function ua(va, wa) {
            ta.setResourceMap(va);
            ta.loadPredictedResources(Object.keys(va), wa);
        },
        getLoadingUrls: function ua() {
            var va = {},
                wa = c('performanceAbsoluteNow')();
            for (var xa in p) va[xa] = wa - p[xa];
            return va;
        },
        getBootloadedComponents: function ua() {
            return v;
        },
        getLoadedUrlTimes: function ua() {
            return q;
        },
        getErrorUrls: function ua() {
            return Object.keys(r);
        },
        __debug: {
            callbackManager: ba,
            componentMap: l,
            requested: j,
            resources: o,
            retries: s,
            errors: r,
            loading: p,
            predictedResources: x,
            bootloaded: v
        },
        Events: ha
    };
    f.exports = ta;
}), null);
__d('isEmpty', ['invariant'], (function a(b, c, d, e, f, g, h) {
    'use strict';

    function i(k) {
        if (Array.isArray(k)) {
            return k.length === 0;
        } else if (typeof k === 'object') {
            if (k) {
                !j(k) || k.size === undefined || h(0);
                for (var l in k) return false;
            }
            return true;
        } else return !k;
    }

    function j(k) {
        if (typeof Symbol === 'undefined') return false;
        return k[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'];
    }
    f.exports = i;
}), null);
__d('setIntervalAcrossTransitions', ['TimeSlice'], (function a(b, c, d, e, f, g) {
    var h = b.setInterval.nativeBackup || b.setInterval;
    f.exports = function() {
        for (var i = arguments.length, j = Array(i), k = 0; k < i; k++) j[k] = arguments[k];
        j[0] = c('TimeSlice').guard(j[0], 'setInterval');
        return Function.prototype.apply.call(h, b, j);
    };
}), null);
__d('CSSLoader', ['CSSLoaderConfig', 'TimeSlice', 'TimeSliceInteraction', 'isEmpty', 'setIntervalAcrossTransitions'], (function a(b, c, d, e, f, g) {
    var h = 20,
        i = c('CSSLoaderConfig').timeout,
        j = c('CSSLoaderConfig').loadEventSupported,
        k, l = {},
        m = [],
        n, o = {};

    function p(t) {
        if (k) return;
        k = true;
        var u = document.createElement('link');
        u.onload = function() {
            j = true;
            u.parentNode.removeChild(u);
        };
        u.rel = 'stylesheet';
        u.href = 'data:text/css;base64,';
        t.appendChild(u);
    }

    function q() {
        var t, u = [],
            v = [];
        if (Date.now() >= n) {
            for (t in o) {
                v.push(o[t].signal);
                u.push(o[t].error);
            }
            o = {};
        } else
            for (t in o) {
                var w = o[t].signal,
                    x = window.getComputedStyle ? getComputedStyle(w, null) : w.currentStyle;
                if (x && parseInt(x.height, 10) > 1) {
                    u.push(o[t].load);
                    v.push(w);
                    delete o[t];
                }
            }
        for (var y = 0; y < v.length; y++) v[y].parentNode.removeChild(v[y]);
        if (!c('isEmpty')(u)) {
            for (y = 0; y < u.length; y++) u[y]();
            n = Date.now() + i;
        }
        return c('isEmpty')(o);
    }

    function r(t, u, v, w) {
        var x = document.createElement('meta');
        x.id = 'bootloader_' + t.replace(/[^a-z0-9]/ig, '_');
        u.appendChild(x);
        var y = !c('isEmpty')(o);
        n = Date.now() + i;
        o[t] = {
            signal: x,
            load: v,
            error: w
        };
        if (!y) var z = c('setIntervalAcrossTransitions')(function aa() {
            if (q()) clearInterval(z);
        }, h);
    }
    var s = {
        loadStyleSheet: function t(u, v, w, x, y, z) {
            if (l[u]) throw new Error('CSS component ' + u + ' has already been requested.');
            c('TimeSliceInteraction').informGlobally('CSSLoader.loadStyleSheet').addStringAnnotation('source', v).addStringAnnotation('name', u);
            if (document.createStyleSheet) {
                var aa;
                for (var ba = 0; ba < m.length; ba++)
                    if (m[ba].imports.length < 31) {
                        aa = ba;
                        break;
                    }
                if (aa === undefined) {
                    try {
                        m.push(document.createStyleSheet());
                    } catch (ca) {
                        z();
                        return;
                    }
                    aa = m.length - 1;
                }
                m[aa].addImport(v);
                l[u] = {
                    styleSheet: m[aa],
                    uri: v
                };
                r(u, w, y, z);
                return;
            }
            var da = document.createElement('link');
            da.rel = 'stylesheet';
            da.type = 'text/css';
            var ea = v.match(/^data:[^,]+,/);
            if (ea && !ea[0].match(/base64/)) v = ea[0] + encodeURIComponent(v.substr(ea[0].length));
            da.href = v;
            if (x) da.crossOrigin = 'anonymous';
            l[u] = {
                link: da
            };
            var fa = c('TimeSlice').getGuardedContinuation('CSSLoader link.onresponse');
            if (j) {
                da.onload = fa.bind(undefined, function ga() {
                    da.onload = da.onerror = null;
                    y();
                });
                da.onerror = fa.bind(undefined, function ga() {
                    da.onload = da.onerror = null;
                    z();
                });
            } else {
                r(u, w, y, z);
                if (j === undefined) p(w);
            }
            w.appendChild(da);
        },
        registerLoadedStyleSheet: function t(u, v) {
            if (l[u]) throw new Error('CSS component ' + u + ' has been requested and should not be ' + 'loaded more than once.');
            l[u] = {
                link: v
            };
        },
        unloadStyleSheet: function t(u) {
            var v = l[u];
            if (v == null) return;
            var w = v.link;
            if (w) {
                w.onload = w.onerror = null;
                w.parentNode.removeChild(w);
            } else {
                var x = v.styleSheet;
                for (var y = 0; y < x.imports.length; y++)
                    if (x.imports[y].href == v.uri) {
                        x.removeImport(y);
                        break;
                    }
            }
            delete o[u];
            delete l[u];
        },
        moduleName: function t(u) {
            return c('CSSLoaderConfig').modulePrefix + u;
        }
    };
    f.exports = s;
}), null);
__d('getMarkupWrap', ['invariant', 'ExecutionEnvironment'], (function a(b, c, d, e, f, g, h) {
    var i = c('ExecutionEnvironment').canUseDOM ? document.createElement('div') : null,
        j = {},
        k = [1, '<select multiple="true">', '</select>'],
        l = [1, '<table>', '</table>'],
        m = [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        n = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'],
        o = {
            '*': [1, '?<div>', '</div>'],
            area: [1, '<map>', '</map>'],
            col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
            legend: [1, '<fieldset>', '</fieldset>'],
            param: [1, '<object>', '</object>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            optgroup: k,
            option: k,
            caption: l,
            colgroup: l,
            tbody: l,
            tfoot: l,
            thead: l,
            td: m,
            th: m
        },
        p = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
    p.forEach(function(r) {
        o[r] = n;
        j[r] = true;
    });

    function q(r) {
        !!i || h(0);
        if (!o.hasOwnProperty(r)) r = '*';
        if (!j.hasOwnProperty(r)) {
            if (r === '*') {
                i.innerHTML = '<link />';
            } else i.innerHTML = '<' + r + '></' + r + '>';
            j[r] = !i.firstChild;
        }
        return j[r] ? o[r] : null;
    }
    f.exports = q;
}), null);
__d('createNodesFromMarkup', ['invariant', 'ExecutionEnvironment', 'getMarkupWrap'], (function a(b, c, d, e, f, g, h) {
    var i = c('ExecutionEnvironment').canUseDOM ? document.createElement('div') : null,
        j = /^\s*<(\w+)/;

    function k(m) {
        var n = m.match(j);
        return n && n[1].toLowerCase();
    }

    function l(m, n) {
        var o = i;
        !!i || h(0);
        var p = k(m),
            q = p && c('getMarkupWrap')(p);
        if (q) {
            o.innerHTML = q[1] + m + q[2];
            var r = q[0];
            while (r--) o = o.lastChild;
        } else o.innerHTML = m;
        var s = o.getElementsByTagName('script');
        if (s.length) {
            n || h(0);
            Array.from(s).forEach(n);
        }
        var t = Array.from(o.childNodes);
        while (o.lastChild) o.removeChild(o.lastChild);
        return t;
    }
    f.exports = l;
}), null);
__d('evalGlobal', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        if (typeof i != 'string') throw new TypeError('JS sent to evalGlobal is not a string. Only strings are permitted.');
        if (!i) return;
        var j = document.createElement('script');
        try {
            j.appendChild(document.createTextNode(i));
        } catch (k) {
            j.text = i;
        }
        var l = document.getElementsByTagName('head')[0] || document.documentElement;
        l.appendChild(j);
        l.removeChild(j);
    }
    f.exports = h;
}), null);
__d('HTML', ['invariant', 'Bootloader', 'createNodesFromMarkup', 'emptyFunction', 'evalGlobal'], (function a(b, c, d, e, f, g, h) {
    var i = /(<(\w+)[^>]*?)\/>/g,
        j = {
            abbr: true,
            area: true,
            br: true,
            col: true,
            embed: true,
            hr: true,
            img: true,
            input: true,
            link: true,
            meta: true,
            param: true
        };

    function k(l) {
        'use strict';
        if (l && typeof l.__html === 'string') l = l.__html;
        if (!(this instanceof k)) {
            if (l instanceof k) return l;
            return new k(l);
        }
        if (l) {
            var m = typeof l;
            m === 'string' || h(0);
        }
        this._markup = l || '';
        this._defer = false;
        this._nodes = null;
        this._inlineJS = c('emptyFunction');
        this._rootNode = null;
    }
    k.prototype.toString = function() {
        'use strict';
        return this._markup;
    };
    k.prototype.getContent = function() {
        'use strict';
        return this._markup;
    };
    k.prototype.getNodes = function() {
        'use strict';
        this._fillCache();
        return this._nodes;
    };
    k.prototype.getRootNode = function() {
        'use strict';
        !this._rootNode || h(0);
        var l = this.getNodes();
        if (l.length === 1) {
            this._rootNode = l[0];
        } else {
            var m = document.createDocumentFragment();
            for (var n = 0; n < l.length; n++) m.appendChild(l[n]);
            this._rootNode = m;
        }
        return this._rootNode;
    };
    k.prototype.getAction = function() {
        'use strict';
        this._fillCache();
        var l = function() {
            this._inlineJS();
        }.bind(this);
        return this._defer ? function() {
            setTimeout(l, 0);
        } : l;
    };
    k.prototype._fillCache = function() {
        'use strict';
        if (this._nodes !== null) return;
        if (!this._markup) {
            this._nodes = [];
            return;
        }
        var l = this._markup.replace(i, function(o, p, q) {
                return j[q.toLowerCase()] ? o : p + '></' + q + '>';
            }),
            m = null,
            n = c('createNodesFromMarkup')(l, function(o) {
                m = m || [];
                m.push(o.src ? c('Bootloader').requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(c('Bootloader'), o.src) : c('evalGlobal').bind(null, o.innerHTML));
                o.parentNode.removeChild(o);
            });
        if (m) this._inlineJS = function() {
            for (var o = 0; o < m.length; o++) m[o]();
        };
        this._nodes = n;
    };
    k.prototype.setDeferred = function(l) {
        'use strict';
        this._defer = !!l;
        return this;
    };
    k.isHTML = function(l) {
        'use strict';
        return !!l && (l instanceof k || l.__html !== undefined);
    };
    k.replaceJSONWrapper = function(l) {
        'use strict';
        return l && l.__html !== undefined ? new k(l.__html) : l;
    };
    f.exports = k;
}), null);
/**
 * Copyright (C) 2010 by Johannes Baagoe <baagoe@baagoe.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @providesModule Alea
 * @preserve-header
 */
__d('Alea', [], (function a(b, c, d, e, f, g) {
    function h() {
        var j = 4022871197,
            k = function l(m) {
                m = m.toString();
                for (var o = 0; o < m.length; o++) {
                    j += m.charCodeAt(o);
                    var p = .02519603282416938 * j;
                    j = p >>> 0;
                    p -= j;
                    p *= j;
                    j = p >>> 0;
                    p -= j;
                    j += p * 4294967296;
                }
                return (j >>> 0) * 2.3283064365386963e-10;
            };
        k.version = 'Mash 0.9';
        return k;
    }

    function i() {
        return function(j) {
            var k = 0,
                l = 0,
                m = 0,
                n = 1;
            if (j.length === 0) j = [new Date()];
            var o = new h();
            k = o(' ');
            l = o(' ');
            m = o(' ');
            for (var p = 0; p < j.length; p++) {
                k -= o(j[p]);
                if (k < 0) k += 1;
                l -= o(j[p]);
                if (l < 0) l += 1;
                m -= o(j[p]);
                if (m < 0) m += 1;
            }
            o = null;
            var q = function r() {
                var s = 2091639 * k + n * 2.3283064365386963e-10;
                k = l;
                l = m;
                m = s - (n = s | 0);
                return m;
            };
            q.version = 'Alea 0.9';
            q.args = j;
            return q;
        }(Array.prototype.slice.call(arguments));
    }
    f.exports = i;
}), null);
__d("ArtilleryJSPointTypes", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        ASYNC_REQUEST_SENT: 1,
        ASYNC_RESPONSE_RECEIVED: 2,
        TRACE_STARTED: 3,
        TRACE_ENDED: 4
    };
}), null);
__d('ArtilleryTraceIDUtils', ['Alea', 'ErrorUtils', 'ServerNonce'], (function a(b, c, d, e, f, g) {
    var h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        i = c('Alea')(c('ServerNonce').ServerNonce),
        j = function l() {
            var m = 0,
                n = 0,
                o = '';
            for (var p = 10; p >= 0; p--) {
                if (m < 6) {
                    n = Math.floor(2147483648 * i());
                    m = 32;
                }
                if (p === 0) n &= 7;
                o = h.charAt(n & 63) + o;
                n >>= 6;
                m -= 6;
            }
            return o;
        },
        k = {
            newTraceId: function l() {
                var m = void 0;
                for (var n = 3; n > 0; n--) {
                    m = j();
                    if (m != this.getDummyId()) return m;
                }
                c('ErrorUtils').reportError(new Error('failed to generate valid Fbtrace id'));
                return this.getDummyId();
            },
            newObjectId: function l() {
                return this.newTraceId();
            },
            getDummyId: function l() {
                return 'AAAAAAAAAAA';
            },
            traceIdToBucket: function l(m) {
                var n = m.charAt(m.length - 1);
                return h.indexOf(n) % 32;
            }
        };
    f.exports = k;
}), null);
__d("CurrentEventMeta", [], (function a(b, c, d, e, f, g) {
    var h = null,
        i = {},
        j = {
            __setCurrentEventID: function k(l) {
                h = l;
            },
            __informEventDataReady: function k(l, m) {
                if (i[l]) {
                    i[l].forEach(function(n) {
                        return n(m);
                    });
                    delete i[l];
                }
            },
            hasCurrentEvent: function k() {
                return !!h;
            },
            registerForCurrentEventData: function k(l) {
                if (h) {
                    i[h] = i[h] || [];
                    i[h].push(l);
                }
            }
        };
    f.exports = j;
}), null);
__d('TimerStorage', [], (function a(b, c, d, e, f, g) {
    var h = {
            ANIMATION_FRAME: 'ANIMATION_FRAME',
            IDLE_CALLBACK: 'IDLE_CALLBACK',
            IMMEDIATE: 'IMMEDIATE',
            INTERVAL: 'INTERVAL',
            TIMEOUT: 'TIMEOUT'
        },
        i = {};
    Object.keys(h).forEach(function(k) {
        return i[k] = {};
    });
    var j = babelHelpers['extends']({}, h, {
        set: function k(l, m) {
            i[l][m] = true;
        },
        unset: function k(l, m) {
            delete i[l][m];
        },
        clearAll: function k(l, m) {
            Object.keys(i[l]).forEach(m);
            i[l] = {};
        }
    });
    f.exports = j;
}), null);
__d('performanceNow', ['performance'], (function a(b, c, d, e, f, g) {
    var h;
    if (c('performance').now) {
        h = function i() {
            return c('performance').now();
        };
    } else h = function i() {
        return Date.now();
    };
    f.exports = h;
}), null);
__d("nativeRequestAnimationFrame", [], (function a(b, c, d, e, f, g) {
    var h = b.requestAnimationFrame && b.requestAnimationFrame.nativeBackup || b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
    f.exports = h;
}), null);
__d('requestAnimationFramePolyfill', ['emptyFunction', 'nativeRequestAnimationFrame'], (function a(b, c, d, e, f, g) {
    var h = 0,
        i = c('nativeRequestAnimationFrame') || function(j) {
            var k = Date.now(),
                l = Math.max(0, 16 - (k - h));
            h = k + l;
            return b.setTimeout(function() {
                j(Date.now());
            }, l);
        };
    i(c('emptyFunction'));
    f.exports = i;
}), null);
__d('IdleCallbackImplementation', ['performanceNow', 'requestAnimationFramePolyfill'], (function a(b, c, d, e, f, g) {
    var h = [],
        i = 0,
        j = 0,
        k = -1,
        l = false,
        m = 1000 / 60,
        n = 2;

    function o(y, z) {
        var aa = j++;
        h[aa] = y;
        q();
        if (z != null && z.timeout > 0) b.setTimeout(function() {
            return w(aa);
        }, z.timeout);
        return aa;
    }

    function p(y) {
        h[y] = null;
    }

    function q() {
        if (!l) {
            l = true;
            c('requestAnimationFramePolyfill')(function(y) {
                l = false;
                s(c('performanceNow')() - y);
            });
        }
    }

    function r(y) {
        var z = m - n;
        if (y < z) return z - y;
        var aa = y % m;
        if (aa > z || aa < n) {
            return 0;
        } else return z - aa;
    }

    function s(y) {
        var z = c('performanceNow')();
        if (z > k) {
            var aa = r(y);
            if (aa > 0) {
                var ba = z + aa;
                v(ba);
                k = ba;
            }
        }
        if (t()) q();
    }

    function t() {
        return i < h.length;
    }

    function u() {
        while (t()) {
            var y = h[i];
            i++;
            if (y) return y;
        }
    }

    function v(y) {
        var z = void 0;
        while (c('performanceNow')() < y && (z = u())) z(new x(y));
    }

    function w(y) {
        var z = h[y];
        if (z) {
            p(y);
            z(new x(null));
        }
    }

    function x(y) {
        'use strict';
        this.didTimeout = y == null;
        this.$IdleCallbackDeadline1 = y;
    }
    x.prototype.timeRemaining = function() {
        'use strict';
        var y = this.$IdleCallbackDeadline1;
        if (y != null) {
            var z = c('performanceNow')();
            if (z < y) return y - z;
        }
        return 0;
    };
    f.exports = {
        requestIdleCallback: o,
        cancelIdleCallback: p
    };
}), null);
__d('requestIdleCallbackAcrossTransitions', ['IdleCallbackImplementation', 'TimeSlice'], (function a(b, c, d, e, f, g) {
    var h = b.requestIdleCallback || c('IdleCallbackImplementation').requestIdleCallback;
    f.exports = function i(j, k) {
        return h.call(b, c('TimeSlice').guard(j, 'requestIdleCallback', {
            isContinuation: true
        }), k);
    };
}), null);
__d('requestIdleCallback', ['TimerStorage', 'requestIdleCallbackAcrossTransitions'], (function a(b, c, d, e, f, g) {
    f.exports = function h(i, j) {
        var k = void 0,
            l = function m(n) {
                c('TimerStorage').unset(c('TimerStorage').IDLE_CALLBACK, k);
                i(n);
            };
        k = c('requestIdleCallbackAcrossTransitions').call(b, l, j);
        c('TimerStorage').set(c('TimerStorage').IDLE_CALLBACK, k);
        return k;
    };
}), null);
__d('TimeSliceRefCountingCallbackManager', ['TimeSlice', 'TimeSliceRefCountingWrapper', 'requestIdleCallback'], (function a(b, c, d, e, f, g) {
    var h = false;

    function i() {
        if (!h) {
            c('TimeSliceRefCountingWrapper').registerRefCountingCallbackManager(j);
            h = true;
        }
    }
    var j = {
        onAllChildrenFinished: function k(l) {
            i();
            var m = c('TimeSlice').getContext();
            if (m != null) {
                c('TimeSliceRefCountingWrapper').addOrCreateRefCounter(l, m.id);
                return true;
            } else return false;
        },
        scheduleCallbacks: function k(l) {
            if (l.length > 0) c('requestIdleCallback')(c('TimeSlice').guard(function() {
                return l.forEach(function(m) {
                    return m();
                });
            }, 'invoking onAllChildrenFinished callbacks', {
                isContinuation: false
            }));
        }
    };
    f.exports = j;
}), null);
__d('TimingAnnotations', ['Map', 'Set'], (function a(b, c, d, e, f, g) {
    var h, i, j, k;
    l.prototype.addStringAnnotation = function(p, q) {
        'use strict';
        return this;
    };
    l.prototype.addSetAnnotation = function(p, q) {
        'use strict';
        return this;
    };
    l.prototype.addSetElement = function(p, q) {
        'use strict';
        return this;
    };
    l.prototype.registerOnBeforeSend = function(p) {
        'use strict';
        return this;
    };

    function l() {
        'use strict';
    }
    h = babelHelpers.inherits(m, l);
    i = h && h.prototype;
    m.prototype.addVectorAnnotation = function(p, q) {
        'use strict';
        return this;
    };

    function m() {
        'use strict';
        h.apply(this, arguments);
    }

    function n() {
        'use strict';
        this.$TimingAnnotations1 = null;
        this.$TimingAnnotations2 = null;
        this.$TimingAnnotations3 = [];
    }
    n.prototype.addStringAnnotation = function(p, q) {
        'use strict';
        this.$TimingAnnotations2 = this.$TimingAnnotations2 || new(c('Map'))();
        this.$TimingAnnotations2.set(p, q);
        return this;
    };
    n.prototype.addSetAnnotation = function(p, q) {
        'use strict';
        var r = this.$TimingAnnotations1 || new(c('Map'))(),
            s = r.get(p) || new(c('Set'))();
        q.forEach(function(t) {
            return s.add(t);
        });
        r.set(p, s);
        this.$TimingAnnotations1 = r;
        return this;
    };
    n.prototype.addSetElement = function(p, q) {
        'use strict';
        var r = this.$TimingAnnotations1 || new(c('Map'))(),
            s = r.get(p) || new(c('Set'))();
        s.add(q);
        r.set(p, s);
        this.$TimingAnnotations1 = r;
        return this;
    };
    n.prototype.registerOnBeforeSend = function(p) {
        'use strict';
        this.$TimingAnnotations3.push(p);
        return this;
    };
    n.prototype.prepareToSend = function() {
        'use strict';
        this.$TimingAnnotations3.forEach(function(fa) {
            return fa(this);
        }.bind(this));
        this.$TimingAnnotations3 = [];
        var p = {};
        if (this.$TimingAnnotations1 != null)
            for (var q = this.$TimingAnnotations1, r = Array.isArray(q), s = 0, q = r ? q : q[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var t;
                if (r) {
                    if (s >= q.length) break;
                    t = q[s++];
                } else {
                    s = q.next();
                    if (s.done) break;
                    t = s.value;
                }
                var u = t,
                    v = u[0],
                    w = u[1];
                p[v] = Array.from(w.values());
            }
        var x = {};
        if (this.$TimingAnnotations2 != null)
            for (var y = this.$TimingAnnotations2, z = Array.isArray(y), aa = 0, y = z ? y : y[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var ba;
                if (z) {
                    if (aa >= y.length) break;
                    ba = y[aa++];
                } else {
                    aa = y.next();
                    if (aa.done) break;
                    ba = aa.value;
                }
                var ca = ba,
                    da = ca[0],
                    ea = ca[1];
                x[da] = ea;
            }
        return {
            setProps: p,
            stringProps: x
        };
    };
    n.EmptyTimingAnnotations = l;
    n.EmptyTraceTimingAnnotations = m;
    n.TraceTimingAnnotations = o;
    j = babelHelpers.inherits(o, n);
    k = j && j.prototype;

    function o() {
        var p, q;
        'use strict';
        for (var r = arguments.length, s = Array(r), t = 0; t < r; t++) s[t] = arguments[t];
        return q = (p = k.constructor).call.apply(p, [this].concat(s)), this.$TraceTimingAnnotations1 = null, q;
    }
    o.prototype.addVectorAnnotation = function(p, q) {
        'use strict';
        this.$TraceTimingAnnotations1 = this.$TraceTimingAnnotations1 || new(c('Map'))();
        this.$TraceTimingAnnotations1.set(p, q);
        return this;
    };
    o.prototype.prepareToSend = function() {
        'use strict';
        var p = k.prepareToSend.call(this);
        p.vectorProps = {};
        if (this.$TraceTimingAnnotations1 != null)
            for (var q = this.$TraceTimingAnnotations1, r = Array.isArray(q), s = 0, q = r ? q : q[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var t;
                if (r) {
                    if (s >= q.length) break;
                    t = q[s++];
                } else {
                    s = q.next();
                    if (s.done) break;
                    t = s.value;
                }
                var u = t,
                    v = u[0],
                    w = u[1];
                p.vectorProps[v] = w;
            }
        return p;
    };
    f.exports = n;
}), null);
__d('clearTimeout', ['TimerStorage', 'TimeSliceRefCountingWrapper'], (function a(b, c, d, e, f, g) {
    var h = b.clearTimeout.nativeBackup || b.clearTimeout,
        i = c('TimerStorage').TIMEOUT;
    f.exports = function() {
        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
        c('TimerStorage').unset(i, k[0]);
        var m = i + k[0];
        if (k[0] != null && c('TimeSliceRefCountingWrapper').isValidCancellationToken(m)) c('TimeSliceRefCountingWrapper').cancelTimeSlice(m);
        return Function.prototype.apply.call(h, b, k);
    };
}), null);
__d('setTimeoutAcrossTransitions', ['TimerStorage', 'TimeSlice', 'TimeSliceRefCountingWrapper'], (function a(b, c, d, e, f, g) {
    var h = b.setTimeout.nativeBackup || b.setTimeout,
        i = c('TimerStorage').TIMEOUT;
    f.exports = function() {
        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
        var m = c('TimeSlice').guard(k[0], 'setTimeout', {
            isContinuation: true
        });
        k[0] = m;
        var n = Function.prototype.apply.call(h, b, k);
        c('TimeSliceRefCountingWrapper').registerForCancelling(i + n, k[0]);
        return n;
    };
}), null);
__d('TimeSliceInteraction', ['ArtilleryJSPointTypes', 'Alea', 'Bootloader', 'CircularBuffer', 'CurrentEventMeta', 'ErrorUtils', 'ArtilleryTraceIDUtils', 'ServerNonce', 'TimeSlice', 'TimeSliceRefCountingCallbackManager', 'TimingAnnotations', 'TimeSliceInteractionCoinflips', 'clearTimeout', 'performance', 'performanceAbsoluteNow', 'requestIdleCallbackAcrossTransitions', 'setTimeoutAcrossTransitions', 'Map', 'Set'], (function a(b, c, d, e, f, g) {
    var h = {
            pointGroup: null,
            type: null,
            isPointOfInterest: null
        },
        i = 250,
        j = new(c('CircularBuffer'))(i),
        k = 100,
        l = new(c('CircularBuffer'))(k),
        m = 60 * 1000,
        n = new(c('Map'))(),
        o = new(c('TimingAnnotations').EmptyTimingAnnotations)(),
        p = new(c('TimingAnnotations').EmptyTraceTimingAnnotations)(),
        q = c('Alea')(c('ServerNonce')),
        r = 'artillery_javascript_actions',
        s = 'artillery_javascript_lite_actions';

    function t(z) {
        return z !== 0 && q() * z <= 1;
    }

    function u(z) {
        var aa = c('TimeSliceInteractionCoinflips').interaction_to_coinflip,
            ba = c('TimeSliceInteractionCoinflips').interaction_to_lite_coinflip,
            ca = aa.hasOwnProperty(z) ? aa[z] : c('TimeSliceInteractionCoinflips').default_rate,
            da = ba.hasOwnProperty(z) ? ba[z] : c('TimeSliceInteractionCoinflips').lite_default_rate,
            ea = new(c('Set'))();
        if (t(da)) ea.add('lite');
        if (t(ca)) ea.add('full');
        var fa = 0;
        if (ea.has('lite') && ea.has('full')) {
            fa = 1 / da * (1 / ca);
        } else if (ea.has('lite')) {
            fa = 1 / da * (1 - 1 / ca);
        } else if (ea.has('full')) fa = 1 / ca * (1 - 1 / da);
        return {
            modes: ea,
            probability: fa
        };
    }

    function v() {
        var z = c('ErrorUtils').normalizeError(Error()).stackFrames;
        if (z) z.forEach(function(aa) {
            return delete aa.text;
        });
        return z;
    }

    function w() {
        return n.size !== 0;
    }

    function x(z) {
        return babelHelpers['extends']({}, z, {
            annotations: z.annotations.prepareToSend()
        });
    }
    y.create = function(z) {
        'use strict';
        var aa = u(z),
            ba = aa.modes,
            ca = aa.probability,
            da = new y(z, ba, ca);
        if (ba.size === 0) {
            da.disable();
        } else {
            l.write({
                interaction: da,
                ts: c('performanceAbsoluteNow')()
            });
            da.trace().addStringAnnotation('initiatorType', 'manually_ended');
        }
        return da;
    };
    y.createAutoclosed = function(z) {
        var aa;
        'use strict';
        var ba = y.create(z);
        if (ba.isEnabled())(function() {
            ba.trace().addStringAnnotation('initiatorType', 'autoclosed');
            var ca = c('setTimeoutAcrossTransitions')(c('TimeSlice').guard(function() {
                ba.trace().addStringAnnotation('terminated_by_timeout_ms', m.toString());
                ba.finish();
            }, 'timeout for interaction ' + z, {
                isContinuation: false
            }), m);
            c('TimeSliceRefCountingCallbackManager').onAllChildrenFinished(function() {
                c('clearTimeout')(ca);
                ba.finish();
            });
        })();
        return ba;
    };
    y.informGlobally = function(z, aa) {
        'use strict';
        if (!w()) return o;
        var ba = c('performanceAbsoluteNow')(),
            ca = new(c('TimingAnnotations'))(),
            da = babelHelpers['extends']({
                ts: ba,
                name: z,
                annotations: ca,
                stacktrace: [],
                guardStack: c('TimeSlice').getGuardNameStack()
            }, h, aa);
        ca.addStringAnnotation('global_point', '1');
        n.forEach(function(ea) {
            return ea.push(da);
        });
        return ca;
    };
    y.informOnPage = function(z, aa) {
        'use strict';
        var ba = c('performanceAbsoluteNow')(),
            ca = new(c('TimingAnnotations'))(),
            da = babelHelpers['extends']({
                ts: ba,
                name: z,
                annotations: ca,
                stacktrace: [],
                guardStack: []
            }, h, aa);
        j.write(da);
        return ca;
    };

    function y(z, aa, ba) {
        'use strict';
        this.$TimeSliceInteraction2 = null;
        this.$TimeSliceInteraction4 = true;
        this.$TimeSliceInteraction5 = null;
        this.$TimeSliceInteraction6 = [];
        this.$TimeSliceInteraction7 = false;
        this.$TimeSliceInteraction8 = false;
        this.$TimeSliceInteraction9 = [];
        this.$TimeSliceInteraction10 = [];
        this.$TimeSliceInteraction11 = new(c('TimingAnnotations').TraceTimingAnnotations)();
        this.$TimeSliceInteraction14 = false;
        this.$TimeSliceInteraction15 = null;
        this.$TimeSliceInteraction17 = 1;
        this.$TimeSliceInteraction20 = function(da) {
            this.$TimeSliceInteraction14 = false;
            Object.keys(da).forEach(function(ea) {
                var fa = '' + da[ea];
                this.$TimeSliceInteraction11.addStringAnnotation(ea, fa);
            }.bind(this));
            if (this.$TimeSliceInteraction15) this.$TimeSliceInteraction15();
        }.bind(this);
        this.$TimeSliceInteraction12 = aa;
        this.$TimeSliceInteraction1 = z;
        this.$TimeSliceInteraction18 = ba;
        this.$TimeSliceInteraction13 = c('performanceAbsoluteNow')();
        var ca = c('TimeSlice').getContext();
        this.inform('trace_started', {
            type: c('ArtilleryJSPointTypes').TRACE_STARTED,
            pointGroup: 'e2e',
            isPointOfInterest: true
        });
        this.$TimeSliceInteraction16 = ca != null ? ca.id : null;
        n.set(this, []);
        if (this.$TimeSliceInteraction19('full')) {
            if (c('TimeSliceInteractionCoinflips').enable_heartbeat) this.$TimeSliceInteraction5 = c('TimeSlice').enableHeartbeat();
            if (c('CurrentEventMeta').hasCurrentEvent()) {
                this.$TimeSliceInteraction14 = true;
                c('CurrentEventMeta').registerForCurrentEventData(this.$TimeSliceInteraction20);
            }
        }
        this.$TimeSliceInteraction3 = c('ArtilleryTraceIDUtils').newTraceId();
    }
    y.prototype.inform = function(z, aa) {
        'use strict';
        var ba = aa != null && aa.isPointOfInterest;
        if (!this.$TimeSliceInteraction19('full') && !(this.$TimeSliceInteraction19('lite') && ba)) return o;
        var ca = c('performanceAbsoluteNow')(),
            da = new(c('TimingAnnotations'))(),
            ea = this.$TimeSliceInteraction19('full') ? c('TimeSlice').getGuardNameStack() : [];
        this.$TimeSliceInteraction9.push(babelHelpers['extends']({
            ts: ca,
            name: z,
            annotations: da,
            stacktrace: [],
            guardStack: ea
        }, h, aa));
        if (!this.$TimeSliceInteraction19('full')) {
            return o;
        } else return da;
    };
    y.prototype.invokeWithProfiling = function(z, aa) {
        'use strict';
        if (!this.$TimeSliceInteraction19('full')) return aa();
        var ba = this.inform('start_' + z);
        this.$TimeSliceInteraction6.push(ba);
        var ca = c('ErrorUtils').applyWithGuard(aa, b, null, null, z);
        this.inform('finished_' + z);
        this.$TimeSliceInteraction6.pop();
        return ca;
    };
    y.prototype.getCurrentInvocation = function() {
        'use strict';
        if (!this.$TimeSliceInteraction19('full')) {
            return o;
        } else if (this.$TimeSliceInteraction6.length < 1) {
            return o;
        } else return this.$TimeSliceInteraction6[this.$TimeSliceInteraction6.length - 1];
    };
    y.prototype.finish = function() {
        var z, aa = this;
        'use strict';
        if (!this.$TimeSliceInteraction4) return;
        if (this.$TimeSliceInteraction8) {
            c('ErrorUtils').reportError(new Error('Trace was already marked as ended'));
        } else(function() {
            aa.$TimeSliceInteraction8 = true;
            aa.inform('trace_ended', {
                type: c('ArtilleryJSPointTypes').TRACE_STARTED,
                pointGroup: 'e2e',
                isPointOfInterest: true
            });
            aa.trace().addStringAnnotation('weight', '' + 1 / (aa.$TimeSliceInteraction17 * aa.$TimeSliceInteraction18));
            var ba = c('performanceAbsoluteNow')(),
                ca = n.get(aa);
            n['delete'](aa);
            if (aa.$TimeSliceInteraction5) aa.$TimeSliceInteraction5.disable();
            if (aa.$TimeSliceInteraction19('lite')) c('requestIdleCallbackAcrossTransitions')(function() {
                return this.$TimeSliceInteraction21();
            }.bind(aa));
            if (aa.$TimeSliceInteraction19('full')) {
                var da = function() {
                    c('requestIdleCallbackAcrossTransitions')(function() {
                        this.$TimeSliceInteraction22(ba, ca);
                        this.$TimeSliceInteraction23();
                    }.bind(this));
                }.bind(aa);
                if (aa.$TimeSliceInteraction14) {
                    aa.$TimeSliceInteraction15 = da;
                } else da();
            }
        })();
    };
    y.prototype.registerOnBeforeSend = function(z) {
        'use strict';
        if (this.$TimeSliceInteraction19('full')) this.$TimeSliceInteraction10.push(z);
        return this;
    };
    y.prototype.trace = function() {
        'use strict';
        if (!this.$TimeSliceInteraction19('full') && !this.$TimeSliceInteraction19('lite')) return p;
        return this.$TimeSliceInteraction11;
    };
    y.prototype.getTraceID = function() {
        'use strict';
        if (this.$TimeSliceInteraction4) return this.$TimeSliceInteraction3;
        return null;
    };
    y.prototype.addExtraSampleRate = function(z) {
        'use strict';
        this.$TimeSliceInteraction17 = z;
        return this;
    };
    y.prototype.isEnabled = function() {
        'use strict';
        return this.$TimeSliceInteraction4;
    };
    y.prototype.disable = function() {
        'use strict';
        this.$TimeSliceInteraction4 = false;
        n['delete'](this);
        if (this.$TimeSliceInteraction5) this.$TimeSliceInteraction5.disable();
        this.$TimeSliceInteraction23();
    };
    y.getPageLoadPoints = function(z, aa) {
        'use strict';
        var ba = [],
            ca = j.read();
        for (var da = ca.length - 1; da >= 0; da--) {
            var ea = ca[da];
            if (ea.ts < z) {
                return ba;
            } else if (ea.ts < aa) ba.push(x(ea));
        }
        return ba;
    };
    y.getInteractionIDsBetween = function(z, aa) {
        'use strict';
        var ba = [],
            ca = l.read();
        for (var da = ca.length - 1; da >= 0; da--) {
            var ea = ca[da],
                fa = ea.interaction,
                ga = ea.ts,
                ha = fa.getTraceID();
            if (ga < z) {
                return ba;
            } else if (ga < aa && ha != null) ba.push(ha);
        }
        return ba;
    };
    y.prototype.setIsDefaultAsyncInteraction = function() {
        'use strict';
        this.$TimeSliceInteraction7 = true;
        return this;
    };
    y.prototype.receiveAsyncResponse = function(z) {
        'use strict';
        if (z != null && z.artillery_info && this.$TimeSliceInteraction19('full')) {
            this.$TimeSliceInteraction24(z.artillery_info.artillery_join_points);
        } else this.disable();
        return this;
    };
    y.prototype.addArtilleryIDHeader = function(z) {
        'use strict';
        if (this.$TimeSliceInteraction4) z.setRequestHeader('X-ARTILLERY-REQ-METADATA', JSON.stringify({
            trace_id: this.$TimeSliceInteraction3
        }));
        return this;
    };
    y.prototype.finishAsyncRequest = function() {
        'use strict';
        if (this.$TimeSliceInteraction7 && this.$TimeSliceInteraction19('full'))
            if (this.$TimeSliceInteraction2 != null) {
                this.finish();
            } else this.disable();
    };
    y.prototype.$TimeSliceInteraction24 = function(z) {
        'use strict';
        if (!this.$TimeSliceInteraction19('full')) return this;
        this.$TimeSliceInteraction2 = z;
        return this;
    };
    y.prototype.$TimeSliceInteraction21 = function() {
        'use strict';
        c('Bootloader').loadModules(["Banzai"], function(z) {
            var aa = [];
            this.$TimeSliceInteraction9.forEach(function(ca) {
                if (ca.isPointOfInterest) aa.push({
                    ts: ca.ts,
                    name: ca.name
                });
            });
            var ba = {
                trace_id: this.$TimeSliceInteraction3,
                action_name: this.$TimeSliceInteraction1,
                trace_annotations: this.$TimeSliceInteraction11.prepareToSend(),
                points: aa
            };
            z.post(s, ba);
        }.bind(this), 'TimeSliceInteraction');
    };
    y.prototype.$TimeSliceInteraction22 = function(z, aa) {
        'use strict';
        this.$TimeSliceInteraction10.forEach(function(da) {
            return da();
        });
        var ba = aa != null ? this.$TimeSliceInteraction9.concat(aa) : this.$TimeSliceInteraction9,
            ca = ba.map(x);
        c('Bootloader').loadModules(["Banzai", "ResourceTimingBootloaderHelper", "TimeSliceHelper"], function(da, ea, fa) {
            var ga = fa.getMetrics(this.$TimeSliceInteraction13, z, 1, 1, true),
                ha = ga.reduce(function(la, ma) {
                    if (la == null || ma.begin < la.begin) {
                        return ma;
                    } else return la;
                }, null),
                ia = ha != null && ha.begin <= this.$TimeSliceInteraction13 && ha.end >= this.$TimeSliceInteraction13;
            this.$TimeSliceInteraction11.addStringAnnotation('overflown_timeslice_buffer', ia ? '0' : '1');
            var ja = void 0;
            if (c('performance') && c('performance').timing && c('performance').timing.navigationStart) {
                ja = ea.getMetrics(this.$TimeSliceInteraction13 - c('performance').timing.navigationStart, false, null, z - c('performance').timing.navigationStart, true);
            } else ja = {};
            var ka = {
                trace_id: this.$TimeSliceInteraction3,
                join_points: this.$TimeSliceInteraction2,
                action_name: this.$TimeSliceInteraction1,
                points: ca,
                traceAnnotations: this.$TimeSliceInteraction11.prepareToSend(),
                timeslices: fa.formatMetricsForTransport(ga),
                resource_timings: ja,
                first_timeslice_id: this.$TimeSliceInteraction16
            };
            da.post(r, ka);
        }.bind(this), 'TimeSliceInteraction');
    };
    y.prototype.$TimeSliceInteraction23 = function() {
        'use strict';
        delete this.$TimeSliceInteraction9;
        delete this.$TimeSliceInteraction10;
    };
    y.prototype.$TimeSliceInteraction19 = function(z) {
        'use strict';
        return this.$TimeSliceInteraction4 && this.$TimeSliceInteraction12.has(z);
    };
    f.exports = y;
}), null);
__d('ConstBitMap', [], (function a(b, c, d, e, f, g) {
    var h = {};
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('').forEach(function(m, n) {
        h[m] = n;
    });

    function i(m) {
        'use strict';
        if (m) {
            var n = l(m, 0),
                o = j(m);
            this.$ConstBitMap1 = k(o, n);
        } else this.$ConstBitMap1 = [];
    }
    i.prototype.contains = function(m) {
        'use strict';
        return !!this.$ConstBitMap1[m];
    };
    i.prototype.__toBinaryString_FOR_TEST = function() {
        'use strict';
        var m = '';
        for (var n = 0; n < this.$ConstBitMap1.length; n++) m += this.$ConstBitMap1[n] ? '1' : '0';
        return m;
    };

    function j(m) {
        var n = m.length * 6,
            o = [],
            p = 1;
        while (p < n) {
            var q = 0;
            while (p < n) {
                var r = l(m, p);
                if (r == 1) break;
                q++;
                p++;
            }
            var s = 0;
            while (q >= 0 && p < n) {
                var t = l(m, p++);
                s |= t << q--;
            }
            if (s) o.push(s);
        }
        return o;
    }

    function k(m, n) {
        var o = [],
            p = 0;
        m.forEach(function(q) {
            if (n === 1)
                for (var r = 0; r < q; r++) o[p + r] = 1;
            n = n === 1 ? 0 : 1;
            p += q;
        });
        return o;
    }

    function l(m, n) {
        return h[m[Math.floor(n / 6)]] >> 5 - n % 6 & 1;
    }
    f.exports = i;
}), null);
__d('memoizeStringOnly', [], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i) {
        var j = {};
        return function(k) {
            if (!j.hasOwnProperty(k)) j[k] = i.call(this, k);
            return j[k];
        };
    }
    f.exports = h;
}), null);
__d('AsyncFeature', ['invariant', 'ConstBitMap', 'memoizeStringOnly'], (function a(b, c, d, e, f, g, h) {
    function i(q) {}
    var j = c('memoizeStringOnly')(function(q) {
            return new(c('ConstBitMap'))(q);
        }),
        k = 2,
        l = [],
        m = {};

    function n(q) {
        var r = k++;
        m[r] = j(q);
        l.push(r);
        return r;
    }

    function o(q) {
        var r = l.length - 1;
        if (r < 0) {
            i('AsyncFeature: Stack should not be empty!');
            return;
        }
        if (l[r] !== q) {
            i('AsyncFeature: _pop token does not match!');
            return;
        }
        delete m[q];
        l.pop();
    }
    var p = {
        SERVER_HAS_FEATURE: function q(r) {
            h(0);
        },
        __serverHasFeatureImpl: function q(r) {
            var s = l.length - 1;
            if (s < 0) {
                i('SERVER_HAS_FEATURE stack is empty! You are calling it in at a point ' + 'where the AsyncResponse context has been lost! If you are using it in ' + 'a JS::call() or JS::instance(), make sure to use it synchronously! ' + 'You cannot use it in an asynchronous callback!');
                return true;
            }
            return m[l[s]].contains(r);
        },
        __invokeWithServerBitMap: function q(r, s) {
            if (typeof r !== 'string' || r === '') {
                i('Invalid bitMapStr supplied to AsyncFeature.__invokeWithServerBitMap!');
                return s();
            }
            var t = n(r);
            try {
                return s();
            } finally {
                o(t);
            }
        },
        __getBitMapFromString: j
    };
    f.exports = p;
}), null);
__d('ifRequired', [], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        typeof k === 'function' && k();
    }
    f.exports = h;
}), null);
__d('AsyncFeatureLogging', ['AsyncFeatureDeployment', 'SiteData', 'ifRequired'], (function a(b, c, d, e, f, g) {
    var h, i = {
        maybeLogServerJSCheck: function l(m, n, o) {},
        maybeLogAsyncResponse: function l(m, n, o) {}
    };

    function j() {
        return c('ifRequired')('URI', function(l) {
            return String(l.getMostRecentURI());
        }, function() {
            return null;
        });
    }

    function k() {
        return c('ifRequired')('URI', function(l) {
            return String(l.getRequestURI());
        }, function() {
            return null;
        });
    }
    if (c('AsyncFeatureDeployment').module)(function() {
        var l = c('AsyncFeatureDeployment').sampling,
            m = c('AsyncFeatureDeployment').module;

        function n(o, p, q) {
            var r = l['default'];
            if (l.event[o + '::' + p]) {
                r = l.event[o + '::' + p];
            } else if (l.event[o]) r = l.event[o];
            return r[q ? 'all_good' : 'not_all_good'];
        }
        i.maybeLogServerJSCheck = function(o, p, q) {
            var r = n('ServerJS', o, p);
            if (Math.random() < r) new m().setClientRequestURI(k()).setClientMostRecentURI(j()).setClientSampleRate(l.coinflip / r).setClientSvnRevision(c('SiteData').revision).setHasValidFeatures(p).setMajorSource('ServerJS').setMinorSource(o).setServerFeatures(q).log();
        };
        i.maybeLogAsyncResponse = function(o, p, q) {
            var r = q && q.__sf,
                s = typeof r === 'string' && r !== '',
                t = n('AsyncRequest', o, s);
            if (Math.random() < t) new m().setAsyncRequestURI(String(p.uri)).setClientRequestURI(k()).setClientMostRecentURI(j()).setClientSampleRate(l.coinflip / t).setClientSvnRevision(c('SiteData').revision).setHasValidFeatures(s).setMajorSource('AsyncRequest').setMinorSource(o).setServerFeatures(r).log();
        };
    })();
    f.exports = i;
}), null);
__d("__debug", [], (function a(b, c, d, e, f, g) {
    f.exports = {};
}), null);
__d('ServerJS', ['AsyncFeature', 'ErrorUtils', 'ServerJSDefine', 'ex', 'ge', 'replaceTransportMarkers', '__debug'], (function a(b, c, d, e, f, g) {
    var h = 1,
        i = 2,
        j = 0,
        k = function() {
            var p;
            return function(q) {
                if (p) {
                    q(p);
                } else e(['AsyncFeatureLogging'], function(r) {
                    p = r;
                    q(p);
                });
            };
        }();

    function l() {
        'use strict';
        this.$ServerJS1 = {};
        this.$ServerJS2 = null;
        this.$ServerJS3 = {};
        this.$ServerJS4 = undefined;
        this.$ServerJS5 = undefined;
    }
    l.prototype.handle = function(p, q) {
        'use strict';
        this.$ServerJS4 = q;
        if (p.__guard) throw new Error('ServerJS.handle called on data that has already been handled');
        p.__guard = true;
        this.$ServerJS6('handle');
        m(p.define || [], this.$ServerJS7, this);
        m(p.markup || [], this.$ServerJS8, this);
        m(p.elements || [], this.$ServerJS9, this);
        m(p.instances || [], this.$ServerJS10, this);
        var r = m(p.require || [], this.$ServerJS11, this);
        return {
            cancel: function s() {
                for (var t = 0; t < r.length; t++)
                    if (r[t]) r[t].cancel();
            }
        };
    };
    l.prototype.handlePartial = function(p, q) {
        'use strict';
        (p.instances || []).forEach(n.bind(null, this.$ServerJS1, 3));
        (p.markup || []).forEach(n.bind(null, this.$ServerJS1, 2));
        (p.elements || []).forEach(n.bind(null, this.$ServerJS1, 2));
        return this.handle(p, q);
    };
    l.prototype.setRelativeTo = function(p) {
        'use strict';
        this.$ServerJS2 = p;
        return this;
    };
    l.prototype.setServerFeatures = function(p) {
        'use strict';
        this.$ServerJS5 = p;
        return this;
    };
    l.prototype.cleanup = function() {
        'use strict';
        var p = Object.keys(this.$ServerJS1);
        e.call(null, p, o);
        this.$ServerJS1 = {};

        function q(s) {
            var t = this.$ServerJS3[s],
                u = t[0],
                v = t[1];
            delete this.$ServerJS3[s];
            var w = v ? 'JS::call("' + u + '", "' + v + '", ...)' : 'JS::requireModule("' + u + '")',
                x = c('ex')('%s did not fire because it has missing dependencies.\n%s', w, c('__debug').debugUnresolvedDependencies([u]));
            throw new Error(x);
        }
        for (var r in this.$ServerJS3) c('ErrorUtils').applyWithGuard(q, this, [r], null, 'ServerJS:cleanup' + ' id: ' + r);
    };
    l.prototype.$ServerJS7 = function(p, q, r, s) {
        'use strict';
        return c('ErrorUtils').applyWithGuard(c('ServerJSDefine').handleDefine, c('ServerJSDefine'), [p, q, r, s, this.$ServerJS2], null, 'JS::define');
    };
    l.prototype.$ServerJS11 = function(p, q, r, s, t) {
        'use strict';
        return c('ErrorUtils').applyWithGuard(this.$ServerJS12, this, [p, q, r, s, t], null, q ? 'JS::call' : 'JS::requireModule');
    };
    l.prototype.$ServerJS12 = function(p, q, r, s, t) {
        'use strict';
        if (typeof q == 'object') {
            t = q;
            q = undefined;
        }
        var u = [p].concat(r || []).concat(t || []),
            v;
        if (q) {
            v = '__call__' + p + '.' + q;
        } else v = '__requireModule__' + p;
        v += '__' + j++;
        this.$ServerJS3[v] = [p, q];
        var w = c('ErrorUtils').guard(function x(y) {
            var y = c.call(null, p);
            delete this.$ServerJS3[v];
            s && c('replaceTransportMarkers')(this.$ServerJS2, s);
            if (q) {
                if (!y[q]) throw new TypeError(c('ex')('Module %s has no method "%s"', p, q));
                this.$ServerJS6('call:' + p + '.' + q);
                c('AsyncFeature').__invokeWithServerBitMap(this.$ServerJS5, function() {
                    return y[q].apply(y, s || []);
                });
                w.__SMmeta = y[q].__SMmeta || {};
                w.__SMmeta.module = w.__SMmeta.module || p;
                w.__SMmeta.name = w.__SMmeta.name || q;
            }
        }.bind(this), q ? "JS::call('" + p + "', '" + q + "', ...)" : "JS::requireModule('" + p + "')");
        return define(v, u, w, h | i, this, 1, this.$ServerJS4);
    };
    l.prototype.$ServerJS10 = function(p, q, r, s) {
        'use strict';
        return c('ErrorUtils').applyWithGuard(this.$ServerJS13, this, [p, q, r, s], null, 'JS::instance');
    };
    l.prototype.$ServerJS13 = function(p, q, r, s) {
        'use strict';
        var t = null;
        if (q) t = function u() {
            var v = c.call(null, q[0]);
            c('replaceTransportMarkers')(this.$ServerJS2, r);
            this.$ServerJS6('instance:' + p);
            return c('AsyncFeature').__invokeWithServerBitMap(this.$ServerJS5, function() {
                var w = Object.create(v.prototype);
                v.apply(w, r);
                return w;
            });
        }.bind(this);
        define(p, q, t, i, null, s);
    };
    l.prototype.$ServerJS8 = function(p, q, r) {
        'use strict';
        return c('ErrorUtils').applyWithGuard(this.$ServerJS14, this, [p, q, r], null, 'JS::markup');
    };
    l.prototype.$ServerJS14 = function(p, q, r) {
        'use strict';
        define(p, ['HTML'], function s(t) {
            return t.replaceJSONWrapper(q).getRootNode();
        }, 0, null, r);
    };
    l.prototype.$ServerJS9 = function(p, q, r, s) {
        'use strict';
        return c('ErrorUtils').applyWithGuard(this.$ServerJS15, this, [p, q, r, s], null, 'JS::element');
    };
    l.prototype.$ServerJS15 = function(p, q, r, s) {
        'use strict';
        if (q === null && r) {
            define(p, null, null, 0, null, r);
            return;
        }
        var t = [],
            u = 0;
        if (s) {
            t.push(s);
            u = h;
            r++;
        }
        define(p, t, function v(w) {
            var x = c('ge')(q, w);
            if (!x) {
                var y = '';
                throw new Error(c('ex')('Could not find element "%s"%s', q, y));
            }
            return x;
        }, u, null, r);
    };
    l.prototype.$ServerJS6 = function(p) {
        'use strict';
        k(function(q) {
            q.maybeLogServerJSCheck(p, typeof this.$ServerJS5 === 'string' && this.$ServerJS5 !== '', this.$ServerJS5);
        }.bind(this));
    };
    (function() {
        e(['HTML'], function(p) {});
    });

    function m(p, q, r) {
        return p.map(function s(t) {
            return q.apply(r, t);
        });
    }

    function n(p, q, r) {
        var s = r[0];
        if (!(s in p)) r[q] = (r[q] || 0) + 1;
        p[s] = true;
    }

    function o() {
        return {};
    }
    f.exports = l;
}), null);
__d('CookieCore', ['CookieCoreConfig'], (function a(b, c, d, e, f, g) {
    var h = /^.*(\.(facebook|messenger|oculus|instagram)\..*)$/i,
        i = /_js_(.*)/;

    function j(q) {
        if (window.self != window.top) return false;
        return true;
    }
    var k = {
            set: function q(r, s, t) {
                var u = arguments.length <= 3 || arguments[3] === undefined ? '/' : arguments[3],
                    v = Date.now();
                if (t != null)
                    if (t > v) {
                        t -= v;
                    } else if (t == 1) {
                    k.clear(r, u);
                    return;
                }
                var w = p(r);
                document.cookie = r + '=' + encodeURIComponent(s) + '; ' + (t ? 'expires=' + new Date(v + t).toUTCString() + '; ' : '') + 'path=' + u + '; domain=' + window.location.hostname.replace(h, '$1') + (w ? '; secure' : '');
            },
            setWithoutChecks: function q(r, s, t, u, v) {
                k.set(r, s, t, u, v);
            },
            setIfFirstPartyContext: function q(r, s, t, u) {
                if (!j(r)) return;
                k.set(r, s, t, u);
            },
            setWithoutChecksIfFirstPartyContext: function q(r, s, t, u, v) {
                if (!j(r)) return;
                k.setWithoutChecks(r, s, t, u, v);
            },
            clear: function q(r) {
                var s = arguments.length <= 1 || arguments[1] === undefined ? '/' : arguments[1];
                s = s || '/';
                document.cookie = r + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; ' + 'path=' + s + '; domain=' + window.location.hostname.replace(h, '$1');
            },
            get: function q(r) {
                var s = document.cookie.match('(?:^|;\\s*)' + r + '=(.*?)(?:;|$)');
                return s ? decodeURIComponent(s[1]) : s;
            }
        },
        l = void 0;

    function m(q) {
        return {
            insecure: q.i || false,
            path: q.p || '/',
            ttlSeconds: q.t || 0
        };
    }

    function n(q) {
        if (c('CookieCoreConfig')[q] !== undefined) return m(c('CookieCoreConfig')[q]);
        var r = q.match(i);
        if (r && r.length > 1) return n(r[1]);
        return null;
    }

    function o(q) {
        return n(q) !== null;
    }

    function p(q) {
        var r = n(q);
        if (r == null) return true;
        return !r.insecure;
    }
    f.exports = k;
}), null);
__d('Cookie', ['Bootloader', 'CookieCore', 'Env'], (function a(b, c, d, e, f, g) {
    function h(k) {
        if (c('Env').no_cookies) return false;
        if (c('Env').defer_cookies) {
            c('Bootloader').loadModules(["BanzaiODS"], function(l) {
                l.bumpEntityKey('defer_cookies', 'set.' + k);
            }, 'Cookie');
            return false;
        }
        return true;
    }

    function i(k, l, m) {
        var n = arguments.length <= 3 || arguments[3] === undefined ? '/' : arguments[3];
        if (!h(k)) return;
        c('CookieCore').set(k, l, m, n);
    }

    function j(k, l, m, n, o) {
        if (!h(k)) return;
        c('CookieCore').setWithoutChecks(k, l, m, n, o);
    }
    f.exports = babelHelpers['extends']({}, c('CookieCore'), {
        set: i,
        setWithoutChecks: j
    });
}), null);
__d('$-core', ['ex'], (function a(b, c, d, e, f, g) {
    function h(j) {
        var k = typeof j === 'string' ? document.getElementById(j) : j;
        if (!k) throw new Error(c('ex')('Tried to get element with id of "%s" but it is not present on the page.', j));
        return k;
    }

    function i(j) {
        return h(j);
    }
    i.unsafe = h;
    f.exports = i;
}), null);
__d('$', ['$-core'], (function a(b, c, d, e, f, g) {
    f.exports = c('$-core');
}), null);
__d('DOMEvent', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        'use strict';
        this.event = j || window.event;
        typeof this.event.srcElement != 'unknown' || h(0);
        this.target = this.event.target || this.event.srcElement;
    }
    i.prototype.preventDefault = function() {
        'use strict';
        var j = this.event;
        if (j.preventDefault) {
            j.preventDefault();
            if (!('defaultPrevented' in j)) j.defaultPrevented = true;
        } else j.returnValue = false;
        return this;
    };
    i.prototype.isDefaultPrevented = function() {
        'use strict';
        var j = this.event;
        return 'defaultPrevented' in j ? j.defaultPrevented : j.returnValue === false;
    };
    i.prototype.stopPropagation = function() {
        'use strict';
        var j = this.event;
        j.stopPropagation ? j.stopPropagation() : j.cancelBubble = true;
        return this;
    };
    i.prototype.kill = function() {
        'use strict';
        this.stopPropagation().preventDefault();
        return this;
    };
    i.killThenCall = function(j) {
        'use strict';
        return function(k) {
            new i(k).kill();
            return j();
        };
    };
    f.exports = i;
}), null);
__d('DOMEventListener', ['invariant', 'wrapFunction'], (function a(b, c, d, e, f, g, h) {
    var i = void 0,
        j = void 0;
    if (window.addEventListener) {
        i = function l(m, n, o) {
            o.wrapper = c('wrapFunction')(o, 'entry', 'DOMEventListener.add ' + n);
            m.addEventListener(n, o.wrapper, false);
        };
        j = function l(m, n, o) {
            m.removeEventListener(n, o.wrapper, false);
        };
    } else if (window.attachEvent) {
        i = function l(m, n, o) {
            o.wrapper = c('wrapFunction')(o, 'entry', 'DOMEventListener.add ' + n);
            m.attachEvent || h(0);
            m.attachEvent('on' + n, o.wrapper);
        };
        j = function l(m, n, o) {
            m.detachEvent || h(0);
            m.detachEvent('on' + n, o.wrapper);
        };
    } else j = i = function l() {};
    var k = {
        add: function l(m, n, o) {
            i(m, n, o);
            return {
                remove: function p() {
                    j(m, n, o);
                }
            };
        },
        remove: j
    };
    f.exports = k;
}), null);
__d('CSS', ['$', 'CSSCore'], (function a(b, c, d, e, f, g) {
    var h = c('$').unsafe,
        i = 'hidden_elem',
        j = {
            setClass: function k(l, m) {
                h(l).className = m || '';
                return l;
            },
            hasClass: function k(l, m) {
                return c('CSSCore').hasClass(h(l), m);
            },
            matchesSelector: function k(l, m) {
                return c('CSSCore').matchesSelector(h(l), m);
            },
            addClass: function k(l, m) {
                return c('CSSCore').addClass(h(l), m);
            },
            removeClass: function k(l, m) {
                return c('CSSCore').removeClass(h(l), m);
            },
            conditionClass: function k(l, m, n) {
                return c('CSSCore').conditionClass(h(l), m, n);
            },
            toggleClass: function k(l, m) {
                return j.conditionClass(l, m, !j.hasClass(l, m));
            },
            shown: function k(l) {
                return !j.hasClass(l, i);
            },
            hide: function k(l) {
                return j.addClass(l, i);
            },
            show: function k(l) {
                return j.removeClass(l, i);
            },
            toggle: function k(l) {
                return j.toggleClass(l, i);
            },
            conditionShow: function k(l, m) {
                return j.conditionClass(l, i, !m);
            }
        };
    f.exports = j;
}), null);
__d('isNode', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = i ? i.ownerDocument || i : document,
            k = j.defaultView || window;
        return !!(i && (typeof k.Node === 'function' ? i instanceof k.Node : typeof i === 'object' && typeof i.nodeType === 'number' && typeof i.nodeName === 'string'));
    }
    f.exports = h;
}), null);
__d('isTextNode', ['isNode'], (function a(b, c, d, e, f, g) {
    function h(i) {
        return c('isNode')(i) && i.nodeType == 3;
    }
    f.exports = h;
}), null);
__d('containsNode', ['isTextNode'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        if (!i || !j) {
            return false;
        } else if (i === j) {
            return true;
        } else if (c('isTextNode')(i)) {
            return false;
        } else if (c('isTextNode')(j)) {
            return h(i, j.parentNode);
        } else if ('contains' in i) {
            return i.contains(j);
        } else if (i.compareDocumentPosition) {
            return !!(i.compareDocumentPosition(j) & 16);
        } else return false;
    }
    f.exports = h;
}), null);
__d('createArrayFromMixed', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(l) {
        var m = l.length;
        !Array.isArray(l) && (typeof l === 'object' || typeof l === 'function') || h(0);
        typeof m === 'number' || h(0);
        m === 0 || m - 1 in l || h(0);
        typeof l.callee !== 'function' || h(0);
        if (l.hasOwnProperty) try {
            return Array.prototype.slice.call(l);
        } catch (n) {}
        var o = Array(m);
        for (var p = 0; p < m; p++) o[p] = l[p];
        return o;
    }

    function j(l) {
        return (!!l && (typeof l == 'object' || typeof l == 'function') && 'length' in l && !('setInterval' in l) && typeof l.nodeType != 'number' && (Array.isArray(l) || 'callee' in l || 'item' in l));
    }

    function k(l) {
        if (!j(l)) {
            return [l];
        } else if (Array.isArray(l)) {
            return l.slice();
        } else return i(l);
    }
    f.exports = k;
}), null);
__d('createObjectFrom', [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = {},
            l = Array.isArray(j);
        if (j === undefined) j = true;
        for (var m = i.length - 1; m >= 0; m--) k[i[m]] = l ? j[m] : j;
        return k;
    }
    f.exports = h;
}), null);
__d('isElementNode', ['isNode'], (function a(b, c, d, e, f, g) {
    function h(i) {
        return c('isNode')(i) && i.nodeType == 1;
    }
    f.exports = h;
}), null);
__d('DOMQuery', ['CSS', 'ErrorUtils', 'containsNode', 'createArrayFromMixed', 'createObjectFrom', 'ge', 'ifRequired', 'isElementNode', 'isNode'], (function a(b, c, d, e, f, g) {
    var h = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function i(k, l) {
        return k.hasAttribute ? k.hasAttribute(l) : k.getAttribute(l) !== null;
    }
    var j = {
        find: function k(l, m) {
            var n = j.scry(l, m);
            return n[0];
        },
        findPushSafe: function k(l, m, n) {
            var o = j.scry(l, m),
                p = j.scry(l, n),
                q;
            if (o.length === 1 && p.length === 1 && o[0] === p[0]) {
                q = o;
            } else q = o.concat(p);
            return q[0];
        },
        scry: function k(l, m) {
            if (!l || !l.getElementsByTagName) return [];
            var n = m.split(' '),
                o = [l];
            for (var p = 0; p < n.length; p++) {
                if (o.length === 0) break;
                if (n[p] === '') continue;
                var q = n[p],
                    r = n[p],
                    s = [],
                    t = false;
                if (q.charAt(0) == '^')
                    if (p === 0) {
                        t = true;
                        q = q.slice(1);
                    } else return [];
                q = q.replace(/\[(?:[^=\]]*=(?:"[^"]*"|'[^']*'))?|[.#]/g, ' $&');
                var u = q.split(' '),
                    v = u[0] || '*',
                    w = v == '*',
                    x = u[1] && u[1].charAt(0) == '#';
                if (x) {
                    var y = c('ge')(u[1].slice(1), l, v);
                    if (y && (w || y.tagName.toLowerCase() == v))
                        for (var z = 0; z < o.length; z++)
                            if (t && c('containsNode')(y, o[z])) {
                                s = [y];
                                break;
                            } else if (document == o[z] || c('containsNode')(o[z], y) && o[z] !== y) {
                        s = [y];
                        break;
                    }
                } else {
                    var aa = [],
                        ba = o.length,
                        ca, da = !t && r.indexOf('[') < 0 && document.querySelectorAll;
                    for (var ea = 0; ea < ba; ea++) {
                        if (t) {
                            ca = [];
                            var fa = o[ea].parentNode;
                            while (c('isElementNode')(fa)) {
                                if (w || fa.tagName.toLowerCase() == v) ca.push(fa);
                                fa = fa.parentNode;
                            }
                        } else if (da) {
                            if (h.test(r)) {
                                ca = o[ea].getElementsByClassName(r.substring(1));
                            } else ca = o[ea].querySelectorAll(r);
                        } else ca = o[ea].getElementsByTagName(v);
                        var ga = ca.length;
                        for (var ha = 0; ha < ga; ha++) aa.push(ca[ha]);
                    }
                    if (!da)
                        for (var ia = 1; ia < u.length; ia++) {
                            var ja = u[ia],
                                ka = ja.charAt(0) == '.',
                                la = ja.substring(1);
                            for (ea = 0; ea < aa.length; ea++) {
                                var ma = aa[ea];
                                if (!ma || ma.nodeType !== 1) continue;
                                if (ka) {
                                    if (!c('CSS').hasClass(ma, la)) delete aa[ea];
                                    continue;
                                } else {
                                    var na = ja.slice(1, ja.length - 1),
                                        oa = na.indexOf('=');
                                    if (oa < 0) {
                                        if (!i(ma, na)) {
                                            delete aa[ea];
                                            continue;
                                        }
                                    } else {
                                        var pa = na.substr(0, oa),
                                            qa = na.substr(oa + 1);
                                        qa = qa.slice(1, qa.length - 1);
                                        if (ma.getAttribute(pa) != qa) {
                                            delete aa[ea];
                                            continue;
                                        }
                                    }
                                }
                            }
                        }
                    for (ea = 0; ea < aa.length; ea++)
                        if (aa[ea]) {
                            s.push(aa[ea]);
                            if (t) break;
                        }
                }
                o = s;
            }
            return o;
        },
        getSelection: function k() {
            var l = window.getSelection;
            if (l) {
                return l() + '';
            } else {
                var m = document.selection;
                if (m) return m.createRange().text;
            }
            return null;
        },
        contains: function k(l, m) {
            return c('containsNode')(c('ge')(l), c('ge')(m));
        },
        getRootElement: function k() {
            var l = c('ifRequired')('Quickling', function(m) {
                return (m.isActive() ? c('ge')('content') : null);
            });
            return l || document.body;
        },
        isNodeOfType: function k(l, m) {
            var n = c('createArrayFromMixed')(m).join('|').toUpperCase().split('|'),
                o = c('createObjectFrom')(n);
            return c('isNode')(l) && l.nodeName in o;
        },
        isInputNode: function k(l) {
            return j.isNodeOfType(l, ['input', 'textarea']) || l.contentEditable === 'true';
        }
    };
    f.exports = j;
}), null);
__d('DataStore', ['isEmpty'], (function a(b, c, d, e, f, g) {
    var h = {},
        i = 1;

    function j(m) {
        if (typeof m == 'string') {
            return 'str_' + m;
        } else return 'elem_' + (m.__FB_TOKEN || (m.__FB_TOKEN = [i++]))[0];
    }

    function k(m) {
        var n = j(m);
        return h[n] || (h[n] = {});
    }
    var l = {
        set: function m(n, o, p) {
            if (!n) throw new TypeError('DataStore.set: namespace is required, got ' + typeof n);
            var q = k(n);
            q[o] = p;
            return n;
        },
        get: function m(n, o, p) {
            if (!n) throw new TypeError('DataStore.get: namespace is required, got ' + typeof n);
            var q = k(n),
                r = q[o];
            if (typeof r === 'undefined' && n.getAttribute)
                if (n.hasAttribute && !n.hasAttribute('data-' + o)) {
                    r = undefined;
                } else {
                    var s = n.getAttribute('data-' + o);
                    r = null === s ? undefined : s;
                }
            if (p !== undefined && r === undefined) r = q[o] = p;
            return r;
        },
        remove: function m(n, o) {
            if (!n) throw new TypeError('DataStore.remove: namespace is required, got ' + typeof n);
            var p = k(n),
                q = p[o];
            delete p[o];
            if (c('isEmpty')(p)) l.purge(n);
            return q;
        },
        purge: function m(n) {
            delete h[j(n)];
        },
        _storage: h
    };
    f.exports = l;
}), null);
__d('Parent', ['CSSCore'], (function a(b, c, d, e, f, g) {
    var h = {
        byTag: function i(j, k) {
            k = k.toUpperCase();
            while (j && j.nodeName !== k) j = j.parentNode;
            return j;
        },
        byClass: function i(j, k) {
            while (j && !c('CSSCore').hasClass(j, k)) j = j.parentNode;
            return j;
        },
        bySelector: function i(j, k) {
            if (j === null) return null;
            if (typeof j.matches === 'function') {
                while (j && j !== document && !j.matches(k)) j = j.parentNode;
                return j === document ? null : j;
            } else if (typeof j.msMatchesSelector === 'function') {
                while (j && j !== document && !j.msMatchesSelector(k)) j = j.parentNode;
                return j === document ? null : j;
            } else return h.bySelector_SLOW(j, k);
        },
        bySelector_SLOW: function i(j, k) {
            var l = j;
            while (l.parentNode) l = l.parentNode;
            var m = l.querySelectorAll(k);
            while (j) {
                if (Array.prototype.indexOf.call(m, j) !== -1) return j;
                j = j.parentNode;
            }
            return j;
        },
        byAttribute: function i(j, k) {
            while (j && (!j.getAttribute || !j.getAttribute(k))) j = j.parentNode;
            return j;
        }
    };
    f.exports = h;
}), null);
__d('SubscriptionList', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(j, k) {
        'use strict';
        this.$SubscriptionList1 = [];
        this.$SubscriptionList2 = j;
        this.$SubscriptionList3 = k;
    }
    i.prototype.add = function(j) {
        'use strict';
        var k = {
            callback: j
        };
        this.$SubscriptionList1.push(k);
        if (this.$SubscriptionList2 && this.$SubscriptionList1.length === 1) this.$SubscriptionList2();
        return {
            remove: function() {
                var l = this.$SubscriptionList1.indexOf(k);
                l !== -1 || h(0);
                this.$SubscriptionList1.splice(l, 1);
                if (this.$SubscriptionList3 && this.$SubscriptionList1.length === 0) this.$SubscriptionList3();
            }.bind(this)
        };
    };
    i.prototype.getCallbacks = function() {
        'use strict';
        return this.$SubscriptionList1.map(function(j) {
            return j.callback;
        });
    };
    i.prototype.fireCallbacks = function(j) {
        'use strict';
        this.$SubscriptionList1.forEach(function(k) {
            k.callback(j);
        });
    };
    f.exports = i;
}), null);
__d("TimeSpentPageTransitionCause", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        PAGE_LOAD: "load",
        PAGE_UNLOAD: "unload",
        TRANSITION: "transition",
        OPEN_OVERLAY_VIEW: "open_overlay_view",
        REPLACE_OVERLAY_VIEW: "replace_overlay_view",
        CLOSE_OVERLAY_VIEW: "close_overlay_view"
    };
}), null);
__d('WebStorage', ['ErrorUtils', 'ex'], (function a(b, c, d, e, f, g) {
    var h = {},
        i = {};

    function j(p, q, r) {
        if (!h.hasOwnProperty(r)) h[r] = q(r);
        return h[r];
    }

    function k(p) {
        try {
            return window[p];
        } catch (q) {}
        return null;
    }

    function l(p) {
        try {
            var r = window[p];
            if (r) {
                var s = '__test__' + Date.now();
                r.setItem(s, '');
                r.removeItem(s);
            }
            return r;
        } catch (q) {}
        return null;
    }

    function m(p) {
        var q = [];
        for (var r = 0; r < p.length; r++) q.push(p.key(r) || '');
        return q;
    }

    function n(p, q, r) {
        var s = null;
        try {
            p.setItem(q, r);
        } catch (t) {
            var u = m(p).map(function(v) {
                var w = (p.getItem(v) || '').length;
                return v + '(' + w + ')';
            });
            s = new Error(c('ex')('%sStorage quota exceeded while setting %s(%s). Items(length) follows: ' + '%s', t.name ? t.name + ': ' : '', q, r.length, u.join()));
            c('ErrorUtils').reportError(s);
        }
        return s;
    }
    var o = {
        getLocalStorage: function p() {
            return j(h, l, 'localStorage');
        },
        getSessionStorage: function p() {
            return j(h, l, 'sessionStorage');
        },
        getLocalStorageForRead: function p() {
            return j(i, k, 'localStorage');
        },
        getSessionStorageForRead: function p() {
            return j(i, k, 'sessionStorage');
        },
        setItemGuarded: n
    };
    f.exports = o;
}), null);
__d("isInIframe", [], (function a(b, c, d, e, f, g) {
    var h = window != window.top;

    function i() {
        return h;
    }
    f.exports = i;
}), null);
__d('ScriptPath', ['WebStorage', 'ErrorUtils', 'SubscriptionList', 'TimeSpentPageTransitionCause', 'isInIframe'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = 'sp_pi',
        i = 1000 * 30,
        j = null,
        k = null,
        l = new(c('SubscriptionList'))(),
        m = null,
        n = [];

    function o(t, u) {
        l.getCallbacks().forEach(function(v) {
            c('ErrorUtils').applyWithGuard(function() {
                v({
                    source: j,
                    dest: k,
                    cause: t,
                    extraData: u
                });
            });
        });
    }

    function p() {
        return k ? k.scriptPath : undefined;
    }

    function q() {
        var t = c('WebStorage').getSessionStorage();
        if (!t || c('isInIframe')()) return;
        t.setItem(h, JSON.stringify({
            pageInfo: k,
            clickPoint: m,
            time: Date.now()
        }));
    }

    function r() {
        var t = c('WebStorage').getSessionStorageForRead();
        if (!t) return;
        var u = t.getItem(h);
        if (u) {
            var v = JSON.parse(u);
            if (v) {
                if (v.time < Date.now() - i) {
                    t = c('WebStorage').getSessionStorage();
                    if (t) t.removeItem(h);
                }
                k = v.pageInfo;
                m = v.clickPoint;
                if (k) k.restored = true;
            }
        }
    }
    r();
    var s = {
        set: function t(u, v, w) {
            j = k;
            k = {
                scriptPath: u,
                categoryToken: v,
                extraData: w || {}
            };
            n = [];
            window._script_path = u;
            o();
        },
        openOverlayView: function t(u, v, w) {
            if (!u) return;
            var x = n.length;
            if (x === 0 || n[x - 1] !== u) {
                j = Object.assign({}, k);
                if (k) k.topViewEndpoint = u;
                if (w && w.replaceTopOverlay && x > 0) {
                    n[x - 1] = u;
                    o(c('TimeSpentPageTransitionCause').REPLACE_OVERLAY_VIEW, v);
                } else {
                    n.push(u);
                    o(c('TimeSpentPageTransitionCause').OPEN_OVERLAY_VIEW, v);
                }
            }
        },
        closeOverlayView: function t(u, v) {
            var w = n.lastIndexOf(u);
            if (w === -1) return;
            j = Object.assign({}, k);
            if (k)
                if (w > 0) {
                    k.topViewEndpoint = n[w - 1];
                } else k.topViewEndpoint = null;
            n = n.slice(0, w);
            o(c('TimeSpentPageTransitionCause').CLOSE_OVERLAY_VIEW, v);
        },
        setClickPointInfo: function t(u) {
            m = u;
            q();
        },
        getClickPointInfo: function t() {
            return m;
        },
        getScriptPath: p,
        getCategoryToken: function t() {
            return k ? k.categoryToken : undefined;
        },
        getTopViewEndpoint: function t() {
            var u = n.length;
            return u > 0 ? n[u - 1] : p();
        },
        getPageInfo: function t() {
            return k;
        },
        getSourcePageInfo: function t() {
            return j;
        },
        subscribe: function t(u) {
            return l.add(u);
        },
        shutdown: function t() {
            q();
        }
    };
    f.exports = s;
}), null);
__d('requestAnimationFrameAcrossTransitions', ['TimerStorage', 'TimeSlice', 'TimeSliceRefCountingWrapper', 'requestAnimationFramePolyfill'], (function a(b, c, d, e, f, g) {
    var h = c('TimerStorage').ANIMATION_FRAME;
    f.exports = function i() {
        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
        var m = c('TimeSlice').guard(k[0], 'requestAnimationFrame', {
            isContinuation: true
        });
        k[0] = m;
        var n = c('requestAnimationFramePolyfill').apply(b, k);
        c('TimeSliceRefCountingWrapper').registerForCancelling(h + n, k[0]);
        return n;
    };
}), null);
__d("requireWeak", [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        e.call(null, [i], j);
    }
    f.exports = h;
}), null);
__d('uniqueID', [], (function a(b, c, d, e, f, g) {
    var h = 'js_',
        i = 36,
        j = 0;

    function k() {
        return h + (j++).toString(i);
    }
    f.exports = k;
}), null);
__d('EventProfiler', ['CurrentEventMeta', 'EventConfig', 'Parent', 'ScriptPath', 'TimeSlice', 'TimeSliceInteraction', 'performanceNow', 'requestAnimationFrameAcrossTransitions', 'requireWeak', 'setTimeoutAcrossTransitions', 'uniqueID'], (function a(b, c, d, e, f, g) {
    var h = c('EventConfig').sampling || {},
        i = {},
        j = {},
        k = null,
        l = {
            __wrapEventListenHandler: function s(t) {
                return function u(v, event) {
                    if (!h[v]) return t.call(this, v, event);
                    var w = m(event),
                        x = c('performanceNow')();
                    event.id = event.id || c('uniqueID')();
                    var y = event.id;
                    c('CurrentEventMeta').__setCurrentEventID(y);
                    var z = void 0,
                        aa = j[y];
                    if (i[y] === undefined && !aa) {
                        if (w) {
                            k = c('TimeSliceInteraction').createAutoclosed('Event').addExtraSampleRate(1 / w);
                        } else k = null;
                        z = t.call(this, v, event);
                        j[y] = c('TimeSlice').getGuardedContinuation('Event Bubble Continuation');
                    } else z = aa(function() {
                        j[y] = c('TimeSlice').getGuardedContinuation('Event Bubble Continuation');
                        return t.call(this, v, event);
                    }.bind(this));
                    var ba = c('performanceNow')();
                    if (i[y] === undefined) {
                        var ca = o(event);
                        ca = ca ? Math.round(ca) : null;
                        var da = ca ? x - ca : 0,
                            ea = q(event.target),
                            fa = r(event.target, 'data-referrer'),
                            ga = r(event.target, 'data-interaction-root-id');
                        i[y] = {
                            event_name: v,
                            event_target_raw: ea,
                            event_start_ms: ca,
                            main_thread_wait_ms: Math.round(da),
                            event_handlers_runtime_ms: 0,
                            script_path: c('ScriptPath').getScriptPath() || '<unknown>',
                            event_end_ms: 0,
                            total_time_since_first_handler_start: 0,
                            request_animation_frame_wait_ms: 0,
                            set_timeout_wait_ms: 0,
                            weight: w
                        };
                        if (k) k.trace().addVectorAnnotation('event_target_stack', ea).addVectorAnnotation('interaction_ids', ga).addVectorAnnotation('pagelets', fa);
                        c('requestAnimationFrameAcrossTransitions')(function() {
                            var ia = c('performanceNow')();
                            i[y].request_animation_frame_wait_ms = Math.round(ia - i[y].event_end_ms);
                            c('setTimeoutAcrossTransitions')(function() {
                                i[y].set_timeout_wait_ms = Math.round(c('performanceNow')() - ia);
                                n(y, x);
                                var ja = j[y];
                                if (ja) {
                                    ja.__cancelCallback();
                                    delete j[y];
                                }
                                delete i[y];
                            }, 0);
                        });
                    }
                    var ha = i[y];
                    ha.event_handlers_runtime_ms += ba - x;
                    ha.event_end_ms = ba;
                    c('CurrentEventMeta').__setCurrentEventID(null);
                    return z;
                };
            }
        };

    function m(event) {
        if (event.__samplingWeight !== undefined) return event.__samplingWeight;
        var s = 0,
            t = event.type in h ? h[event.type] : 1;
        if (t) {
            t *= h.__default;
            var u = h.__min || 1;
            t = Math.round(Math.max(u, t));
            if (Math.random() * t < 1) s = t;
        }
        event.__samplingWeight = s;
        return s;
    }

    function n(s, t) {
        var u = c('performanceNow')(),
            v = i[s];
        v.event_end_ms = Math.round(v.event_end_ms);
        v.event_handlers_runtime_ms = Math.round(v.event_handlers_runtime_ms);
        v.total_time_since_first_handler_start = Math.round(u - t);
        if (v.weight) c('requireWeak')('BanzaiLogger', function(x) {
            x.log('WebSpeedInteractionsLoggerConfig', v);
        });
        var w = Object.assign({}, v);
        delete w.event_target_raw;
        delete w.weight;
        c('CurrentEventMeta').__informEventDataReady(s, w);
    }
    var o = function() {
        function s(event) {
            return null;
        }
        if (!b.performance || !b.performance.now) return s;
        var t = b.CustomEvent && (typeof b.CustomEvent === 'function' || b.CustomEvent.toString().indexOf('CustomEventConstructor') > -1),
            u = t ? new b.CustomEvent('test').timeStamp : b.document.createEvent('KeyboardEvent').timeStamp;
        if (u && u <= b.performance.now()) return function(event) {
            return event.timeStamp;
        };
        return s;
    }();

    function p(s) {
        if (!s || !(s instanceof HTMLElement)) return '';
        var t = s.id,
            u = s.nodeName,
            v = s.getAttribute('class');
        u = u ? u.replace(/^#/, '') : 'unknown';
        t = t ? '#' + t : '';
        v = v ? ' ' + v.replace(/\s+/g, ' ').trim() : '';
        return ':' + u + t + v;
    }

    function q(s) {
        var t = [];
        while (s && s instanceof HTMLElement) {
            t.push(p(s));
            s = s.parentElement;
        }
        t.reverse();
        return t;
    }

    function r(s, t) {
        var u = [];
        while (s && s instanceof HTMLElement) {
            var v = s.getAttribute(t);
            if (v) u.push(v);
            s = c('Parent').byAttribute(s.parentNode, t);
        }
        return u.reverse();
    }
    f.exports = l;
}), null);
__d("Scroll", [], (function a(b, c, d, e, f, g) {
    function h(j, k) {
        return !!k && (j === k.documentElement || j === k.body);
    }
    var i = {
        getTop: function j(k) {
            var l = k.ownerDocument;
            return h(k, l) ? l.body.scrollTop || l.documentElement.scrollTop : k.scrollTop;
        },
        setTop: function j(k, l) {
            var m = k.ownerDocument;
            if (h(k, m)) {
                m.body.scrollTop = m.documentElement.scrollTop = l;
            } else k.scrollTop = l;
        },
        getLeft: function j(k) {
            var l = k.ownerDocument;
            return h(k, l) ? l.body.scrollLeft || l.documentElement.scrollLeft : k.scrollLeft;
        },
        setLeft: function j(k, l) {
            var m = k.ownerDocument;
            if (h(k, m)) {
                m.body.scrollLeft = m.documentElement.scrollLeft = l;
            } else k.scrollLeft = l;
        }
    };
    f.exports = i;
}), null);
__d('VersionRange', ['invariant'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = /\./,
        j = /\|\|/,
        k = /\s+\-\s+/,
        l = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        m = /^(\d*)(.*)/;

    function n(fa, ga) {
        var ha = fa.split(j);
        if (ha.length > 1) {
            return ha.some(function(ia) {
                return ea.contains(ia, ga);
            });
        } else {
            fa = ha[0].trim();
            return o(fa, ga);
        }
    }

    function o(fa, ga) {
        var ha = fa.split(k);
        ha.length > 0 && ha.length <= 2 || h(0);
        if (ha.length === 1) {
            return p(ha[0], ga);
        } else {
            var ia = ha[0],
                ja = ha[1];
            y(ia) && y(ja) || h(0);
            return (p('>=' + ia, ga) && p('<=' + ja, ga));
        }
    }

    function p(fa, ga) {
        fa = fa.trim();
        if (fa === '') return true;
        var ha = ga.split(i),
            ia = w(fa),
            ja = ia.modifier,
            ka = ia.rangeComponents;
        switch (ja) {
            case '<':
                return q(ha, ka);
            case '<=':
                return r(ha, ka);
            case '>=':
                return t(ha, ka);
            case '>':
                return u(ha, ka);
            case '~':
            case '~>':
                return v(ha, ka);
            default:
                return s(ha, ka);
        }
    }

    function q(fa, ga) {
        return da(fa, ga) === -1;
    }

    function r(fa, ga) {
        var ha = da(fa, ga);
        return ha === -1 || ha === 0;
    }

    function s(fa, ga) {
        return da(fa, ga) === 0;
    }

    function t(fa, ga) {
        var ha = da(fa, ga);
        return ha === 1 || ha === 0;
    }

    function u(fa, ga) {
        return da(fa, ga) === 1;
    }

    function v(fa, ga) {
        var ha = ga.slice(),
            ia = ga.slice();
        if (ia.length > 1) ia.pop();
        var ja = ia.length - 1,
            ka = parseInt(ia[ja], 10);
        if (x(ka)) ia[ja] = ka + 1 + '';
        return (t(fa, ha) && q(fa, ia));
    }

    function w(fa) {
        var ga = fa.split(i),
            ha = ga[0].match(l);
        ha || h(0);
        return {
            modifier: ha[1],
            rangeComponents: [ha[2]].concat(ga.slice(1))
        };
    }

    function x(fa) {
        return !isNaN(fa) && isFinite(fa);
    }

    function y(fa) {
        return !w(fa).modifier;
    }

    function z(fa, ga) {
        for (var ha = fa.length; ha < ga; ha++) fa[ha] = '0';
    }

    function aa(fa, ga) {
        fa = fa.slice();
        ga = ga.slice();
        z(fa, ga.length);
        for (var ha = 0; ha < ga.length; ha++) {
            var ia = ga[ha].match(/^[x*]$/i);
            if (ia) {
                ga[ha] = fa[ha] = '0';
                if (ia[0] === '*' && ha === ga.length - 1)
                    for (var ja = ha; ja < fa.length; ja++) fa[ja] = '0';
            }
        }
        z(ga, fa.length);
        return [fa, ga];
    }

    function ba(fa, ga) {
        var ha = fa.match(m)[1],
            ia = ga.match(m)[1],
            ja = parseInt(ha, 10),
            ka = parseInt(ia, 10);
        if (x(ja) && x(ka) && ja !== ka) {
            return ca(ja, ka);
        } else return ca(fa, ga);
    }

    function ca(fa, ga) {
        typeof fa === typeof ga || h(0);
        if (fa > ga) {
            return 1;
        } else if (fa < ga) {
            return -1;
        } else return 0;
    }

    function da(fa, ga) {
        var ha = aa(fa, ga),
            ia = ha[0],
            ja = ha[1];
        for (var ka = 0; ka < ja.length; ka++) {
            var la = ba(ia[ka], ja[ka]);
            if (la) return la;
        }
        return 0;
    }
    var ea = {
        contains: function fa(ga, ha) {
            return n(ga.trim(), ha.trim());
        }
    };
    f.exports = ea;
}), null);
__d('mapObject', [], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = Object.prototype.hasOwnProperty;

    function i(j, k, l) {
        if (!j) return null;
        var m = {};
        for (var n in j)
            if (h.call(j, n)) m[n] = k.call(l, j[n], n, j);
        return m;
    }
    f.exports = i;
}), null);
__d('UserAgent', ['UserAgentData', 'VersionRange', 'mapObject', 'memoizeStringOnly'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(k, l, m, n) {
        if (k === m) return true;
        if (!m.startsWith(k)) return false;
        var o = m.slice(k.length);
        if (l) {
            o = n ? n(o) : o;
            return c('VersionRange').contains(o, l);
        }
        return false;
    }

    function i(k) {
        if (c('UserAgentData').platformName === 'Windows') return k.replace(/^\s*NT/, '');
        return k;
    }
    var j = {
        isBrowser: function k(l) {
            return h(c('UserAgentData').browserName, c('UserAgentData').browserFullVersion, l);
        },
        isBrowserArchitecture: function k(l) {
            return h(c('UserAgentData').browserArchitecture, null, l);
        },
        isDevice: function k(l) {
            return h(c('UserAgentData').deviceName, null, l);
        },
        isEngine: function k(l) {
            return h(c('UserAgentData').engineName, c('UserAgentData').engineVersion, l);
        },
        isPlatform: function k(l) {
            return h(c('UserAgentData').platformName, c('UserAgentData').platformFullVersion, l, i);
        },
        isPlatformArchitecture: function k(l) {
            return h(c('UserAgentData').platformArchitecture, null, l);
        }
    };
    f.exports = c('mapObject')(j, c('memoizeStringOnly'));
}), null);
__d('UserAgent_DEPRECATED', [], (function a(b, c, d, e, f, g) {
    var h = false,
        i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    function x() {
        if (h) return;
        h = true;
        var z = navigator.userAgent,
            aa = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),
            ba = /(Mac OS X)|(Windows)|(Linux)/.exec(z);
        t = /\b(iPhone|iP[ao]d)/.exec(z);
        u = /\b(iP[ao]d)/.exec(z);
        r = /Android/i.exec(z);
        v = /FBAN\/\w+;/i.exec(z);
        w = /Mobile/i.exec(z);
        s = !!/Win64/.exec(z);
        if (aa) {
            i = aa[1] ? parseFloat(aa[1]) : aa[5] ? parseFloat(aa[5]) : NaN;
            if (i && document && document.documentMode) i = document.documentMode;
            var ca = /(?:Trident\/(\d+.\d+))/.exec(z);
            n = ca ? parseFloat(ca[1]) + 4 : i;
            j = aa[2] ? parseFloat(aa[2]) : NaN;
            k = aa[3] ? parseFloat(aa[3]) : NaN;
            l = aa[4] ? parseFloat(aa[4]) : NaN;
            if (l) {
                aa = /(?:Chrome\/(\d+\.\d+))/.exec(z);
                m = aa && aa[1] ? parseFloat(aa[1]) : NaN;
            } else m = NaN;
        } else i = j = k = m = l = NaN;
        if (ba) {
            if (ba[1]) {
                var da = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);
                o = da ? parseFloat(da[1].replace('_', '.')) : true;
            } else o = false;
            p = !!ba[2];
            q = !!ba[3];
        } else o = p = q = false;
    }
    var y = {
        ie: function z() {
            return x() || i;
        },
        ieCompatibilityMode: function z() {
            return x() || n > i;
        },
        ie64: function z() {
            return y.ie() && s;
        },
        firefox: function z() {
            return x() || j;
        },
        opera: function z() {
            return x() || k;
        },
        webkit: function z() {
            return x() || l;
        },
        safari: function z() {
            return y.webkit();
        },
        chrome: function z() {
            return x() || m;
        },
        windows: function z() {
            return x() || p;
        },
        osx: function z() {
            return x() || o;
        },
        linux: function z() {
            return x() || q;
        },
        iphone: function z() {
            return x() || t;
        },
        mobile: function z() {
            return x() || t || u || r || w;
        },
        nativeApp: function z() {
            return x() || v;
        },
        android: function z() {
            return x() || r;
        },
        ipad: function z() {
            return x() || u;
        }
    };
    f.exports = y;
}), null);
__d('event-form-bubbling', [], (function a(b, c, d, e, f, g) {
    b.Event = b.Event || function() {};
    b.Event.__inlineSubmit = function(h, event) {
        var i = b.Event.__getHandler && b.Event.__getHandler(h, 'submit');
        return (i && i !== h.onsubmit ? null : b.Event.__bubbleSubmit(h, event));
    };
    b.Event.__bubbleSubmit = function(h, event) {
        if (document.documentElement.attachEvent) {
            var i;
            while (i !== false && (h = h.parentNode)) i = h.onsubmit ? h.onsubmit(event) : b.Event.__fire && b.Event.__fire(h, 'submit', event);
            return i;
        }
    };
}), 3);
__d('getDocumentScrollElement', [], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('AppleWebKit') > -1;

    function i(j) {
        j = j || document;
        return !h && j.compatMode === 'CSS1Compat' ? j.documentElement : j.body;
    }
    f.exports = i;
}), null);
__d("getObjectValues", [], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = [];
        for (var k in i) j.push(i[k]);
        return j;
    }
    f.exports = h;
}), null);
__d('Event', ['invariant', 'event-form-bubbling', 'Arbiter', 'DataStore', 'DOMQuery', 'DOMEvent', 'ErrorUtils', 'EventProfiler', 'ExecutionEnvironment', 'Parent', 'Scroll', 'TimeSlice', 'UserAgent', 'UserAgent_DEPRECATED', 'DOMEventListener', 'requireWeak', 'SiteData', '$', 'getDocumentScrollElement', 'ifRequired', 'getObjectValues', 'performanceNow'], (function a(b, c, d, e, f, g, h) {
    c('event-form-bubbling');
    var i = {
            C2: .125,
            C3: .125,
            dev: .01,
            'default': .01
        },
        j = b.Event,
        k = 'Event.listeners';
    if (!j.prototype) j.prototype = {};

    function l(w) {
        if (w.type === 'click' || w.type === 'mouseover' || w.type === 'keydown') c('Arbiter').inform('Event/stop', {
            event: w
        });
    }

    function m(w, x, y) {
        this.target = w;
        this.type = x;
        this.data = y;
    }
    Object.assign(m.prototype, {
        getData: function w() {
            this.data = this.data || {};
            return this.data;
        },
        stop: function w() {
            return j.stop(this);
        },
        prevent: function w() {
            return j.prevent(this);
        },
        isDefaultPrevented: function w() {
            return j.isDefaultPrevented(this);
        },
        kill: function w() {
            return j.kill(this);
        },
        getTarget: function w() {
            return new(c('DOMEvent'))(this).target || null;
        }
    });

    function n(w) {
        if (w instanceof m) return w;
        if (!w)
            if (!window.addEventListener && document.createEventObject) {
                w = window.event ? document.createEventObject(window.event) : {};
            } else w = {};
        if (!w._inherits_from_prototype)
            for (var x in j.prototype) try {
                w[x] = j.prototype[x];
            } catch (y) {}
        return w;
    }
    Object.assign(j.prototype, {
        _inherits_from_prototype: true,
        getRelatedTarget: function w() {
            var x = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return x && x.nodeType ? x : null;
        },
        getModifiers: function w() {
            var x = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            x.access = c('UserAgent_DEPRECATED').osx() ? x.control : x.alt;
            x.any = x.control || x.shift || x.alt || x.meta;
            return x;
        },
        isRightClick: function w() {
            if (this.which) return this.which === 3;
            return this.button && this.button === 2;
        },
        isMiddleClick: function w() {
            if (this.which) return this.which === 2;
            return this.button && this.button === 4;
        },
        isDefaultRequested: function w() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick();
        }
    }, m.prototype);
    Object.assign(j, {
        listen: function w(x, y, z, aa) {
            if (!c('ExecutionEnvironment').canUseDOM) return new v(z, fa, y, aa, ia);
            if (typeof x == 'string') x = c('$')(x);
            if (typeof aa == 'undefined') aa = j.Priority.NORMAL;
            if (typeof y == 'object') {
                var ba = {};
                for (var ca in y) ba[ca] = j.listen(x, ca, y[ca], aa);
                return ba;
            }
            if (y.match(/^on/i)) throw new TypeError('Bad event name `' + y + "': use `click', not `onclick'.");
            if (x.nodeName == 'LABEL' && y == 'click') {
                var da = x.getElementsByTagName('input');
                x = da.length == 1 ? da[0] : x;
            } else if (x === window && y === 'scroll') {
                var ea = c('getDocumentScrollElement')();
                if (ea !== document.documentElement && ea !== document.body) x = ea;
            }
            var fa = c('DataStore').get(x, k, {}),
                ga = q[y];
            if (ga) {
                y = ga.base;
                if (ga.wrap) z = ga.wrap(z);
            }
            s(x, fa, y);
            var ha = fa[y];
            if (!(aa in ha)) ha[aa] = [];
            var ia = ha[aa].length,
                ja = new v(z, fa, y, aa, ia);
            if (y === 'keydown') {
                var ka = c('SiteData').push_phase,
                    la = i[ka] || i['default'];
                if (Math.random() < la) ja._stack = c('ErrorUtils').normalizeError(new Error('generate a keydown handler stack trace')).stack;
            }
            ha[aa][ia] = ja;
            ha.numHandlers++;
            return ja;
        },
        stop: function w(x) {
            var y = new(c('DOMEvent'))(x).stopPropagation();
            l(y.event);
            return x;
        },
        prevent: function w(x) {
            new(c('DOMEvent'))(x).preventDefault();
            return x;
        },
        isDefaultPrevented: function w(x) {
            return new(c('DOMEvent'))(x).isDefaultPrevented(x);
        },
        kill: function w(x) {
            var y = new(c('DOMEvent'))(x).kill();
            l(y.event);
            return false;
        },
        getKeyCode: function w(event) {
            event = new(c('DOMEvent'))(event).event;
            if (!event) return false;
            switch (event.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34;
            }
            if (event.shiftKey) switch (event.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null;
            }
            return event.keyCode;
        },
        getPriorities: function w() {
            if (!o) {
                var x = c('getObjectValues')(j.Priority);
                x.sort(function(y, z) {
                    return y - z;
                });
                o = x;
            }
            return o;
        },
        fire: function w(x, y, z) {
            var aa = new m(x, y, z),
                ba;
            do {
                var ca = j.__getHandler(x, y);
                if (ca) ba = ca(aa);
                x = x.parentNode;
            } while (x && ba !== false && !aa.cancelBubble);
            return ba !== false;
        },
        __fire: function w(x, y, event) {
            var z = j.__getHandler(x, y);
            if (z) return z(n(event));
        },
        __getHandler: function w(x, y) {
            var z = c('DataStore').get(x, k);
            if (z && z[y]) return z[y].domHandler;
            return x['on' + y];
        },
        getPosition: function w(x) {
            x = new(c('DOMEvent'))(x).event;
            var y = c('getDocumentScrollElement')(),
                z = x.clientX + c('Scroll').getLeft(y),
                aa = x.clientY + c('Scroll').getTop(y);
            return {
                x: z,
                y: aa
            };
        }
    });
    var o = null,
        p = function w(x) {
            return function(y) {
                if (!c('DOMQuery').contains(this, y.getRelatedTarget())) return x.call(this, y);
            };
        },
        q;
    if (!window.navigator.msPointerEnabled) {
        q = {
            mouseenter: {
                base: 'mouseover',
                wrap: p
            },
            mouseleave: {
                base: 'mouseout',
                wrap: p
            }
        };
    } else q = {
        mousedown: {
            base: 'MSPointerDown'
        },
        mousemove: {
            base: 'MSPointerMove'
        },
        mouseup: {
            base: 'MSPointerUp'
        },
        mouseover: {
            base: 'MSPointerOver'
        },
        mouseout: {
            base: 'MSPointerOut'
        },
        mouseenter: {
            base: 'MSPointerOver',
            wrap: p
        },
        mouseleave: {
            base: 'MSPointerOut',
            wrap: p
        }
    };
    if (c('UserAgent_DEPRECATED').firefox()) {
        var r = function w(x, event) {
            event = n(event);
            var y = event.getTarget();
            while (y) {
                j.__fire(y, x, event);
                y = y.parentNode;
            }
        };
        document.documentElement.addEventListener('focus', r.bind(null, 'focusin'), true);
        document.documentElement.addEventListener('blur', r.bind(null, 'focusout'), true);
    }
    var s = function w(x, y, z) {
        if (z in y) return;
        var aa = c('TimeSlice').guard(u.bind(x, z), 'Event listenHandler ' + z);
        y[z] = {
            numHandlers: 0,
            domHandlerRemover: c('DOMEventListener').add(x, z, aa),
            domHandler: aa
        };
        var ba = 'on' + z;
        if (x[ba]) {
            var ca = x === document.documentElement ? j.Priority._BUBBLE : j.Priority.TRADITIONAL,
                da = x[ba];
            x[ba] = null;
            j.listen(x, z, da, ca);
        }
        if (x.nodeName === 'FORM' && z === 'submit' && c('UserAgent').isBrowser('IE < 9')) j.listen(x, z, j.__bubbleSubmit.bind(null, x), j.Priority._BUBBLE);
    };

    function t(w, x) {
        return (w.nodeName === 'INPUT' && w.type === x);
    }
    var u = c('EventProfiler').__wrapEventListenHandler(function w(x, event) {
        var y;
        event = n(event);
        if (!c('DataStore').get(this, k)) throw new Error('Bad listenHandler context.');
        var z = c('DataStore').get(this, k)[x];
        if (!z) throw new Error('No registered handlers for `' + x + "'.");
        if (x == 'click')(function() {
            var ga = event.getTarget(),
                ha = c('Parent').byTag(ga, 'a');
            if (ha && ha.href && ha.href.endsWith('#') && !t(ga, 'file') && !t(ga, 'submit')) event.prevent();
            c('ifRequired')('clickRefAction', function(ia) {
                ia('click', ha, event);
            });
        })();
        var aa = j.getPriorities();
        for (var ba = 0; ba < aa.length; ba++) {
            var ca = aa[ba];
            if (ca in z) {
                var da = z[ca];
                for (var ea = 0; ea < da.length; ea++) {
                    if (!da[ea]) continue;
                    var fa = da[ea].fire(this, event);
                    if (fa === false) {
                        return event.kill();
                    } else if (event.cancelBubble) event.stop();
                }
            }
        }
        return event.returnValue;
    });
    j.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1000
    };

    function v(w, x, y, z, aa) {
        this._handler = w;
        this._handlers = x;
        this._type = y;
        this._priority = z;
        this._id = aa;
    }
    Object.assign(v.prototype, {
        remove: function w() {
            if (c('ExecutionEnvironment').canUseDOM) {
                this._handlers || h(0);
                var x = this._handlers[this._type];
                if (x.numHandlers <= 1) {
                    x.domHandlerRemover.remove();
                    delete this._handlers[this._type];
                } else {
                    delete x[this._priority][this._id];
                    x.numHandlers--;
                }
                this._handlers = null;
            }
        },
        fire: function w(x, event) {
            var y, z = this;
            if (c('ExecutionEnvironment').canUseDOM) {
                var y = function() {
                    var aa = z._stack && c('performanceNow')(),
                        ba = c('ErrorUtils').applyWithGuard(z._handler, x, [event], function(ea) {
                            ea.event_type = event.type;
                            ea.dom_element = x.name || x.id;
                            ea.category = 'eventhandler';
                        }),
                        ca = z._stack && c('performanceNow')(),
                        da = ca - aa;
                    if (da > 100 && z._stack) c('requireWeak')('BanzaiScuba', function(ea) {
                        var fa = new ea('interaction_debugging');
                        fa.addNormal('location', this._stack);
                        fa.addInteger('event_handler_runtime', da);
                        fa.post();
                    }.bind(z));
                    return {
                        v: ba
                    };
                }();
                if (typeof y === "object") return y.v;
            }
            return true;
        }
    });
    b.$E = j.$E = n;
    f.exports = j;
}), null);
__d('cx', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        throw new Error('cx: Unexpected class transformation.');
    }
    f.exports = h;
}), null);
__d('FbtResult', ['cx', 'ErrorUtils'], (function a(b, c, d, e, f, g, h) {
    var i = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 60103,
        j = false;

    function k(o, p, q, r) {
        var s = "_4qba";
        if (r)
            if (p === 'TRANSLATION') {
                s = "_4qbb";
            } else if (p === 'APPROVE') {
            s = "_4qbc";
        } else if (p === 'REPORT') s = "_4qbd";
        return {
            $$typeof: i,
            type: 'em',
            key: null,
            ref: null,
            props: {
                className: s,
                'data-intl-hash': r,
                'data-intl-translation': q,
                'data-intl-trid': '',
                children: o
            },
            _owner: null
        };
    }
    var l = function o(p) {
        return k(p.content, p.inlineMode, p.translation, p.hash);
    };

    function m(o) {}

    function n(o, p, q, r) {
        'use strict';
        this.$FbtResult1 = o;
        this.$FbtResult2 = null;
        this.$$typeof = i;
        this.type = l;
        this.props = {
            content: this.$FbtResult1,
            inlineMode: p,
            translation: q,
            hash: r
        };
        this.key = null;
        this.ref = null;
    }
    n.prototype.flattenToArray = function() {
        'use strict';
        return n.flattenToArray(this.$FbtResult1);
    };
    n.prototype.getContents = function() {
        'use strict';
        return this.$FbtResult1;
    };
    n.prototype.toString = function() {
        'use strict';
        if (this.$FbtResult2 !== null) return this.$FbtResult2;
        var o = '',
            p = this.flattenToArray();
        for (var q = 0; q < p.length; ++q) {
            var r = p[q];
            if (typeof r === 'string' || r instanceof n) {
                o += r;
            } else {
                var s = new Error('Converting to a string will drop content data');
                c('ErrorUtils').reportError(s, true);
            }
        }
        if (!Object.isFrozen(this)) this.$FbtResult2 = o;
        return o;
    };
    n.prototype.toJSON = function() {
        'use strict';
        return this.toString();
    };
    n.flattenToArray = function(o) {
        'use strict';
        var p = [];
        for (var q = 0; q < o.length; ++q) {
            var r = o[q];
            if (Array.isArray(r)) {
                p.push.apply(p, n.flattenToArray(r));
            } else if (r instanceof n) {
                p.push.apply(p, r.flattenToArray());
            } else p.push(r);
        }
        return p;
    };
    ['replace', 'split', 'toLowerCase', 'toUpperCase', 'indexOf', 'charAt', 'charCodeAt', 'substr', 'substring', 'trim', 'lastIndexOf', 'search', 'match', 'slice', 'codePointAt', 'endsWith', 'includes', 'localeCompare', 'normalize', 'repeat', 'startsWith', 'toLocaleLowerCase', 'toLocaleUpperCase', 'trimLeft', 'trimRight', 'link', 'anchor', 'fontcolor', 'fontsize', 'big', 'blink', 'bold', 'fixed', 'italics', 'small', 'strike', 'sub', 'sup', 'contains'].forEach(function(o) {
        n.prototype[o] = function() {
            'use strict';
            m(o);
            return this.toString()[o].apply(this, arguments);
        };
    }.bind(this));
    f.exports = n;
}), null);
__d("isScalar", [], (function a(b, c, d, e, f, g) {
    function h(i) {
        return /string|number|boolean/.test(typeof i);
    }
    f.exports = h;
}), null);
__d('DOM', ['$', 'DOMQuery', 'ErrorUtils', 'Event', 'FbtResult', 'HTML', 'UserAgent_DEPRECATED', 'createArrayFromMixed', 'isNode', 'isScalar', 'isTextNode'], (function a(b, c, d, e, f, g) {
    var h = {
        create: function k(l, m, n) {
            var o = document.createElement(l);
            if (m) h.setAttributes(o, m);
            if (n != null) h.setContent(o, n);
            return o;
        },
        setAttributes: function k(l, m) {
            if (m.type) l.type = m.type;
            for (var n in m) {
                var o = m[n],
                    p = /^on/i.test(n);
                if (n == 'type') {
                    continue;
                } else if (n == 'style') {
                    if (typeof o == 'string') {
                        l.style.cssText = o;
                    } else Object.assign(l.style, o);
                } else if (p) {
                    c('Event').listen(l, n.substr(2), o);
                } else if (n in l) {
                    l[n] = o;
                } else if (l.setAttribute) l.setAttribute(n, o);
            }
        },
        prependContent: function k(l, m) {
            if (!l) throw new Error('DOM.prependContent: reference element is not a node');
            return j(m, l, function(n) {
                l.firstChild ? l.insertBefore(n, l.firstChild) : l.appendChild(n);
            });
        },
        insertAfter: function k(l, m) {
            if (!l || !l.parentNode) throw new Error('DOM.insertAfter: reference element does not ' + 'have a parent.');
            var n = l.parentNode;
            return j(m, n, function(o) {
                l.nextSibling ? n.insertBefore(o, l.nextSibling) : n.appendChild(o);
            });
        },
        insertBefore: function k(l, m) {
            if (!l || !l.parentNode) throw new Error('DOM.insertBefore: reference element does not have a parent.');
            var n = l.parentNode;
            return j(m, n, function(o) {
                n.insertBefore(o, l);
            });
        },
        setContent: function k(l, m) {
            if (!l) throw new Error('DOM.setContent: reference element is not a node.');
            while (l.firstChild) i(l.firstChild);
            return h.appendContent(l, m);
        },
        appendContent: function k(l, m) {
            if (!l) throw new Error('DOM.appendContent: reference element is not a node.');
            return j(m, l, function(n) {
                l.appendChild(n);
            });
        },
        replace: function k(l, m) {
            if (!l || !l.parentNode) throw new Error('DOM.replace: reference element does not ' + 'have a parent.');
            var n = l.parentNode;
            return j(m, n, function(o) {
                n.replaceChild(o, l);
            });
        },
        remove: function k(l) {
            i(c('$')(l));
        },
        empty: function k(l) {
            l = c('$')(l);
            while (l.firstChild) i(l.firstChild);
        }
    };
    Object.assign(h, c('DOMQuery'));

    function i(k) {
        if (k.parentNode) k.parentNode.removeChild(k);
    }

    function j(k, l, m) {
        k = c('HTML').replaceJSONWrapper(k);
        if (k instanceof c('HTML') && l.firstChild === null && -1 === k.toString().indexOf('<scr' + 'ipt')) {
            var n = c('UserAgent_DEPRECATED').ie();
            if (!n || n > 7 && !c('DOMQuery').isNodeOfType(l, ['table', 'tbody', 'thead', 'tfoot', 'tr', 'select', 'fieldset'])) {
                var o = n ? '<em style="display:none;">&nbsp;</em>' : '';
                l.innerHTML = o + k;
                n && l.removeChild(l.firstChild);
                return Array.from(l.childNodes);
            }
        } else if (c('isTextNode')(l)) {
            l.data = k;
            return [k];
        }
        var p = document.createDocumentFragment(),
            q, r = [],
            s = [];
        k = c('createArrayFromMixed')(k);
        if (k.length === 1 && k[0] instanceof c('FbtResult')) k = k[0].getContents();
        for (var t = 0; t < k.length; t++) {
            q = c('HTML').replaceJSONWrapper(k[t]);
            if (q instanceof c('HTML')) {
                s.push(q.getAction());
                var u = q.getNodes();
                for (var v = 0; v < u.length; v++) {
                    r.push(u[v]);
                    p.appendChild(u[v]);
                }
            } else if (c('isScalar')(q) || q instanceof c('FbtResult')) {
                var w = document.createTextNode(q);
                r.push(w);
                p.appendChild(w);
            } else if (c('isNode')(q)) {
                r.push(q);
                p.appendChild(q);
            }
        }
        m(p);
        s.forEach(function(x) {
            x();
        });
        return r;
    }
    f.exports = h;
}), null);
__d('DOMControl', ['DataStore', '$'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this.root = c('$')(i);
        this.updating = false;
        c('DataStore').set(i, 'DOMControl', this);
    }
    h.prototype.getRoot = function() {
        'use strict';
        return this.root;
    };
    h.prototype.beginUpdate = function() {
        'use strict';
        if (this.updating) return false;
        this.updating = true;
        return true;
    };
    h.prototype.endUpdate = function() {
        'use strict';
        this.updating = false;
    };
    h.prototype.update = function(i) {
        'use strict';
        if (!this.beginUpdate()) return this;
        this.onupdate(i);
        this.endUpdate();
    };
    h.prototype.onupdate = function(i) {
        'use strict';
    };
    h.getInstance = function(i) {
        'use strict';
        return c('DataStore').get(i, 'DOMControl');
    };
    f.exports = h;
}), null);
__d('Input', ['CSS', 'DOMQuery', 'DOMControl'], (function a(b, c, d, e, f, g) {
    var h = {
        isWhiteSpaceOnly: function i(j) {
            return !/\S/.test(j || '');
        },
        isEmpty: function i(j) {
            return h.isWhiteSpaceOnly(j.value);
        },
        getValue: function i(j) {
            return h.isEmpty(j) ? '' : j.value;
        },
        getValueRaw: function i(j) {
            return j.value;
        },
        setValue: function i(j, k) {
            j.value = k || '';
            var l = c('DOMControl').getInstance(j);
            l && l.resetHeight && l.resetHeight();
        },
        setPlaceholder: function i(j, k) {
            j.setAttribute('aria-label', k);
            j.setAttribute('placeholder', k);
        },
        reset: function i(j) {
            j.value = '';
            j.style.height = '';
        },
        setSubmitOnEnter: function i(j, k) {
            c('CSS').conditionClass(j, 'enter_submit', k);
        },
        getSubmitOnEnter: function i(j) {
            return c('CSS').hasClass(j, 'enter_submit');
        },
        setMaxLength: function i(j, k) {
            if (k > 0) {
                j.setAttribute('maxlength', k);
            } else j.removeAttribute('maxlength');
        }
    };
    f.exports = h;
}), null);
__d("camelize", [], (function a(b, c, d, e, f, g) {
    var h = /-(.)/g;

    function i(j) {
        return j.replace(h, function(k, l) {
            return l.toUpperCase();
        });
    }
    f.exports = i;
}), null);
__d('getOpacityStyleName', [], (function a(b, c, d, e, f, g) {
    var h = false,
        i = null;

    function j() {
        if (!h) {
            if ('opacity' in document.body.style) {
                i = 'opacity';
            } else {
                var k = document.createElement('div');
                k.style.filter = 'alpha(opacity=100)';
                if (k.style.filter) i = 'filter';
                k = null;
            }
            h = true;
        }
        return i;
    }
    f.exports = j;
}), null);
__d('hyphenate', [], (function a(b, c, d, e, f, g) {
    var h = /([A-Z])/g;

    function i(j) {
        return j.replace(h, '-$1').toLowerCase();
    }
    f.exports = i;
}), null);
__d('getStyleProperty', ['camelize', 'hyphenate'], (function a(b, c, d, e, f, g) {
    function h(j) {
        return j == null ? j : String(j);
    }

    function i(j, k) {
        var l = void 0;
        if (window.getComputedStyle) {
            l = window.getComputedStyle(j, null);
            if (l) return h(l.getPropertyValue(c('hyphenate')(k)));
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            l = document.defaultView.getComputedStyle(j, null);
            if (l) return h(l.getPropertyValue(c('hyphenate')(k)));
            if (k === 'display') return 'none';
        }
        if (j.currentStyle) {
            if (k === 'float') return h(j.currentStyle.cssFloat || j.currentStyle.styleFloat);
            return h(j.currentStyle[c('camelize')(k)]);
        }
        return h(j.style && j.style[c('camelize')(k)]);
    }
    f.exports = i;
}), null);
__d('StyleCore', ['invariant', 'camelize', 'containsNode', 'ex', 'getOpacityStyleName', 'getStyleProperty', 'hyphenate'], (function a(b, c, d, e, f, g, h) {
    function i(p, q) {
        var r = o.get(p, q);
        return r === 'auto' || r === 'scroll';
    }
    var j = new RegExp('\\s*' + '([^\\s:]+)' + '\\s*:\\s*' + '([^;(\'"]*(?:(?:\\([^)]*\\)|"[^"]*"|\'[^\']*\')[^;(?:\'"]*)*)' + '(?:;|$)', 'g');

    function k(p) {
        var q = {};
        p.replace(j, function(r, s, t) {
            q[s] = t;
        });
        return q;
    }

    function l(p) {
        var q = '';
        for (var r in p)
            if (p[r]) q += r + ':' + p[r] + ';';
        return q;
    }

    function m(p) {
        return p !== '' ? 'alpha(opacity=' + p * 100 + ')' : '';
    }

    function n(p, q, r) {
        switch (c('hyphenate')(q)) {
            case 'font-weight':
            case 'line-height':
            case 'opacity':
            case 'z-index':
            case 'animation-iteration-count':
            case '-webkit-animation-iteration-count':
                break;
            case 'width':
            case 'height':
                var s = parseInt(r, 10) < 0;
                !s || h(0);
            default:
                isNaN(r) || !r || r === '0' || h(0);
                break;
        }
    }
    var o = {
        set: function p(q, r, s) {
            n('Style.set', r, s);
            var t = q.style;
            switch (r) {
                case 'opacity':
                    if (c('getOpacityStyleName')() === 'filter') {
                        t.filter = m(s);
                    } else t.opacity = s;
                    break;
                case 'float':
                    t.cssFloat = t.styleFloat = s || '';
                    break;
                default:
                    try {
                        t[c('camelize')(r)] = s;
                    } catch (u) {
                        throw new Error(c('ex')('Style.set: "%s" argument is invalid: %s', r, s));
                    }
            }
        },
        apply: function p(q, r) {
            var s = void 0;
            for (s in r) n('Style.apply', s, r[s]);
            if ('opacity' in r && c('getOpacityStyleName')() === 'filter') {
                r.filter = m(r.opacity);
                delete r.opacity;
            }
            var t = k(q.style.cssText);
            for (s in r) {
                var u = r[s];
                delete r[s];
                var v = c('hyphenate')(s);
                for (var w in t)
                    if (w === v || w.indexOf(v + '-') === 0) delete t[w];
                r[v] = u;
            }
            Object.assign(t, r);
            q.style.cssText = l(t);
        },
        get: c('getStyleProperty'),
        getFloat: function p(q, r) {
            return parseFloat(o.get(q, r), 10);
        },
        getOpacity: function p(q) {
            if (c('getOpacityStyleName')() === 'filter') {
                var r = o.get(q, 'filter');
                if (r) {
                    var s = /(\d+(?:\.\d+)?)/.exec(r);
                    if (s) return parseFloat(s.pop()) / 100;
                }
            }
            return o.getFloat(q, 'opacity') || 1;
        },
        isFixed: function p(q) {
            while (c('containsNode')(document.body, q)) {
                if (o.get(q, 'position') === 'fixed') return true;
                q = q.parentNode;
            }
            return false;
        },
        getScrollParent: function p(q) {
            if (!q) return null;
            while (q && q !== document.body) {
                if (i(q, 'overflow') || i(q, 'overflowY') || i(q, 'overflowX')) return q;
                q = q.parentNode;
            }
            return window;
        }
    };
    f.exports = o;
}), null);
__d('Style', ['StyleCore', '$'], (function a(b, c, d, e, f, g) {
    var h = babelHelpers['extends']({}, c('StyleCore'), {
        get: function i(j, k) {
            typeof j === 'string';
            return c('StyleCore').get(c('$')(j), k);
        },
        getFloat: function i(j, k) {
            typeof j === 'string';
            return c('StyleCore').getFloat(c('$')(j), k);
        }
    });
    f.exports = h;
}), null);
__d('FlipDirection', ['DOM', 'Input', 'Style'], (function a(b, c, d, e, f, g) {
    var h = {
        setDirection: function i(j) {
            var k = c('DOM').isNodeOfType(j, 'input') && j.type == 'text',
                l = c('DOM').isNodeOfType(j, 'textarea');
            if (!(k || l) || j.getAttribute('data-prevent-auto-flip')) return;
            var m = c('Input').getValue(j),
                n = j.style && j.style.direction;
            if (!n) {
                var o = 0,
                    p = true;
                for (var q = 0; q < m.length; q++) {
                    var r = m.charCodeAt(q);
                    if (r >= 48) {
                        if (p) {
                            p = false;
                            o++;
                        }
                        if (r >= 1470 && r <= 1920) {
                            c('Style').set(j, 'direction', 'rtl');
                            j.setAttribute('dir', 'rtl');
                            return;
                        }
                        if (o == 5) {
                            c('Style').set(j, 'direction', 'ltr');
                            j.setAttribute('dir', 'ltr');
                            return;
                        }
                    } else p = true;
                }
            } else if (m.length === 0) {
                c('Style').set(j, 'direction', '');
                j.removeAttribute('dir');
            }
        }
    };
    f.exports = h;
}), null);
__d('FlipDirectionOnKeypress', ['Event', 'FlipDirection'], (function a(b, c, d, e, f, g) {
    var h = function i(event) {
        var j = event.getTarget();
        c('FlipDirection').setDirection(j);
    };
    c('Event').listen(document.documentElement, {
        keyup: h,
        input: h
    });
}), null);
__d('getActiveElement', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        i = i || document;
        if (typeof i === 'undefined') return null;
        try {
            return i.activeElement || i.body;
        } catch (j) {
            return i.body;
        }
    }
    f.exports = h;
}), null);
__d('FocusListener', ['Arbiter', 'CSS', 'Parent', 'getActiveElement'], (function a(b, c, d, e, f, g) {
    var h = {
        expandInput: function m(n) {
            c('CSS').addClass(n, 'child_is_active');
            c('CSS').addClass(n, 'child_is_focused');
            c('CSS').addClass(n, 'child_was_focused');
            c('Arbiter').inform('reflow');
        }
    };

    function i(m, n) {
        if (n.getAttribute('data-silentfocuslistener')) return;
        var o = c('Parent').byClass(n, 'focus_target');
        if (o)
            if ('focus' == m || 'focusin' == m) {
                h.expandInput(o);
            } else {
                if (n.value === '') c('CSS').removeClass(o, 'child_is_active');
                c('CSS').removeClass(o, 'child_is_focused');
            }
    }
    var j = c('getActiveElement')();
    if (j) i('focus', j);

    function k(event) {
        event = event || window.event;
        i(event.type, event.target || event.srcElement);
    }
    var l = document.documentElement;
    if (l.addEventListener) {
        l.addEventListener('focus', k, true);
        l.addEventListener('blur', k, true);
    } else {
        l.attachEvent('onfocusin', k);
        l.attachEvent('onfocusout', k);
    }
    f.exports = h;
}), null);
__d('guid', [], (function a(b, c, d, e, f, g) {
    function h() {
        return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
    }
    f.exports = h;
}), null);
__d('ArbiterMixin', ['Arbiter', 'guid'], (function a(b, c, d, e, f, g) {
    var h = "arbiter$" + c('guid')(),
        i = Object.prototype.hasOwnProperty,
        j = {
            _getArbiterInstance: function k() {
                return i.call(this, h) ? this[h] : this[h] = new(c('Arbiter'))();
            },
            inform: function k(l, m, n) {
                return this._getArbiterInstance().inform(l, m, n);
            },
            subscribe: function k(l, m, n) {
                return this._getArbiterInstance().subscribe(l, m, n);
            },
            subscribeOnce: function k(l, m, n) {
                return this._getArbiterInstance().subscribeOnce(l, m, n);
            },
            unsubscribe: function k(l) {
                this._getArbiterInstance().unsubscribe(l);
            },
            unsubscribeCurrentSubscription: function k() {
                this._getArbiterInstance().unsubscribeCurrentSubscription();
            },
            releaseCurrentPersistentEvent: function k() {
                this._getArbiterInstance().releaseCurrentPersistentEvent();
            },
            registerCallback: function k(l, m) {
                return this._getArbiterInstance().registerCallback(l, m);
            },
            query: function k(l) {
                return this._getArbiterInstance().query(l);
            }
        };
    f.exports = j;
}), null);
__d('flattenPHPQueryData', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(k) {
        return j(k);
    }

    function j(k, l, m) {
        l = l || '';
        m = m || {};
        if (k === null || k === undefined) {
            m[l] = undefined;
        } else if (typeof k == 'object') {
            typeof k.appendChild !== 'function' || h(0);
            for (var n in k) {
                if (n === '$$typeof') continue;
                if (k.hasOwnProperty(n) && k[n] !== undefined) j(k[n], l ? l + '[' + n + ']' : n, m);
            }
        } else m[l] = k;
        return m;
    }
    f.exports = i;
}), null);
__d('PHPQuerySerializer', ['invariant', 'flattenPHPQueryData'], (function a(b, c, d, e, f, g, h) {
    function i(p) {
        var q = [],
            r = c('flattenPHPQueryData')(p);
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                var t = j(s);
                if (r[s] === undefined) {
                    q.push(t);
                } else q.push(t + '=' + j(r[s]));
            }
        return q.join('&');
    }

    function j(p) {
        return encodeURIComponent(p).replace(/%5D/g, ']').replace(/%5B/g, '[');
    }
    var k = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function l(p) {
        if (p === 'hasOwnProperty' || p === '__proto__') return '\ud83d\udf56';
        return p;
    }

    function m(p) {
        if (!p) return {};
        var q = {};
        p = p.replace(/%5B/ig, '[').replace(/%5D/ig, ']');
        p = p.split('&');
        var r = Object.prototype.hasOwnProperty;
        for (var s = 0, t = p.length; s < t; s++) {
            var u = p[s].match(k);
            if (!u) {
                var v = p[s].split('=');
                q[n(v[0])] = v[1] === undefined ? null : n(v[1]);
            } else {
                var w = u[2].split(/\]\[|\[|\]/).slice(0, -1),
                    x = u[1],
                    y = n(u[3] || '');
                w[0] = x;
                var z = q;
                for (var aa = 0; aa < w.length - 1; aa++) {
                    var ba = l(w[aa]);
                    if (ba) {
                        if (!r.call(z, ba)) {
                            var ca = w[aa + 1] && !w[aa + 1].match(/^\d{1,3}$/) ? {} : [];
                            z[ba] = ca;
                            if (z[ba] !== ca) return q;
                        }
                        z = z[ba];
                    } else {
                        if (w[aa + 1] && !w[aa + 1].match(/^\d{1,3}$/)) {
                            z.push({});
                        } else z.push([]);
                        z = z[z.length - 1];
                    }
                }
                if (z instanceof Array && w[w.length - 1] === '') {
                    z.push(y);
                } else z[l(w[w.length - 1])] = y;
            }
        }
        return q;
    }

    function n(p) {
        try {
            return decodeURIComponent(p.replace(/\+/g, ' '));
        } catch (q) {
            return p;
        }
    }
    var o = {
        serialize: i,
        encodeComponent: j,
        deserialize: m,
        decodeComponent: n
    };
    f.exports = o;
}), null);
__d('URIRFC3986', [], (function a(b, c, d, e, f, g) {
    var h = new RegExp('^' + '([^:/?#]+:)?' + '(//' + '([^\\\\/?#@]*@)?' + '(' + '\\[[A-Fa-f0-9:.]+\\]|' + '[^\\/?#:]*' + ')' + '(:[0-9]*)?' + ')?' + '([^?#]*)' + '(\\?[^#]*)?' + '(#.*)?'),
        i = {
            parse: function j(k) {
                if (k.trim() === '') return null;
                var l = k.match(h);
                if (l == null) return null;
                var m = {};
                m.uri = l[0] ? l[0] : null;
                m.scheme = l[1] ? l[1].substr(0, l[1].length - 1) : null;
                m.authority = l[2] ? l[2].substr(2) : null;
                m.userinfo = l[3] ? l[3].substr(0, l[3].length - 1) : null;
                m.host = l[2] ? l[4] : null;
                m.port = l[5] ? l[5].substr(1) ? parseInt(l[5].substr(1), 10) : null : null;
                m.path = l[6] ? l[6] : null;
                m.query = l[7] ? l[7].substr(1) : null;
                m.fragment = l[8] ? l[8].substr(1) : null;
                m.isGenericURI = m.authority === null && !!m.scheme;
                return m;
            }
        };
    f.exports = i;
}), null);
__d('URISchemes', ['createObjectFrom'], (function a(b, c, d, e, f, g) {
    var h = c('createObjectFrom')(['blob', 'cmms', 'fb', 'fbatwork', 'fb-ama', 'fb-messenger', 'fb-page-messages', 'fb-pma', 'fbcf', 'fbconnect', 'fbmobilehome', 'fbrpc', 'file', 'ftp', 'http', 'https', 'mailto', 'ms-app', 'intent', 'itms', 'itms-apps', 'itms-services', 'market', 'svn+ssh', 'fbstaging', 'tel', 'sms', 'pebblejs', 'sftp', 'whatsapp', 'moments', 'fblite', 'chrome-extension', 'webcal', 'fb124024574287414', 'fb124024574287414rc', 'fb124024574287414master', 'fb1576585912599779', 'fb929757330408142', 'designpack']),
        i = {
            isAllowed: function j(k) {
                if (!k) return true;
                return h.hasOwnProperty(k.toLowerCase());
            }
        };
    f.exports = i;
}), null);
__d('setHostSubdomain', [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = i.split('.');
        if (k.length < 3) {
            k.unshift(j);
        } else k[0] = j;
        return k.join('.');
    }
    f.exports = h;
}), null);
__d('URIBase', ['invariant', 'URIRFC3986', 'URISchemes', 'ex', 'setHostSubdomain'], (function a(b, c, d, e, f, g, h) {
    var i = new RegExp('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f' + '\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF' + '\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'),
        j = new RegExp('^(?:[^/]*:|' + '[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');

    function k(n, o, p, q) {
        if (!o) return true;
        if (o instanceof m) {
            n.setProtocol(o.getProtocol());
            n.setDomain(o.getDomain());
            n.setPort(o.getPort());
            n.setPath(o.getPath());
            n.setQueryData(q.deserialize(q.serialize(o.getQueryData())));
            n.setFragment(o.getFragment());
            n.setIsGeneric(o.getIsGeneric());
            n.setForceFragmentSeparator(o.getForceFragmentSeparator());
            return true;
        }
        o = o.toString().trim();
        var r = c('URIRFC3986').parse(o) || {
            fragment: null,
            scheme: null
        };
        if (!p && !c('URISchemes').isAllowed(r.scheme)) return false;
        n.setProtocol(r.scheme || '');
        if (!p && i.test(r.host || '')) return false;
        n.setDomain(r.host || '');
        n.setPort(r.port || '');
        n.setPath(r.path || '');
        if (p) {
            n.setQueryData(q.deserialize(r.query || '') || {});
        } else try {
            n.setQueryData(q.deserialize(r.query || '') || {});
        } catch (s) {
            return false;
        }
        n.setFragment(r.fragment || '');
        if (r.fragment === '') n.setForceFragmentSeparator(true);
        n.setIsGeneric(r.isGenericURI || false);
        if (r.userinfo !== null)
            if (p) {
                throw new Error(c('ex')('URI.parse: invalid URI (userinfo is not allowed in a URI): %s', n.toString()));
            } else return false;
        if (!n.getDomain() && n.getPath().indexOf('\\') !== -1)
            if (p) {
                throw new Error(c('ex')('URI.parse: invalid URI (no domain but multiple back-slashes): %s', n.toString()));
            } else return false;
        if (!n.getProtocol() && j.test(o))
            if (p) {
                throw new Error(c('ex')('URI.parse: invalid URI (unsafe protocol-relative URLs): %s', n.toString()));
            } else return false;
        if (n.getDomain() && n.getPath() && !n.getPath().startsWith('/'))
            if (p) {
                throw new Error(c('ex')('URI.parse: invalid URI (domain and path where path lacks leading slash): %s', n.toString()));
            } else return false;
        return true;
    }
    var l = [];
    m.isValidURI = function(n, o) {
        'use strict';
        return k(new m(null, o), n, false, o);
    };

    function m(n, o) {
        'use strict';
        o || h(0);
        this.$URIBase9 = o;
        this.$URIBase7 = '';
        this.$URIBase1 = '';
        this.$URIBase6 = '';
        this.$URIBase5 = '';
        this.$URIBase3 = '';
        this.$URIBase4 = false;
        this.$URIBase8 = {};
        this.$URIBase2 = false;
        k(this, n, true, o);
    }
    m.prototype.setProtocol = function(n) {
        'use strict';
        c('URISchemes').isAllowed(n) || h(0);
        this.$URIBase7 = n;
        return this;
    };
    m.prototype.getProtocol = function() {
        'use strict';
        return (this.$URIBase7 || '').toLowerCase();
    };
    m.prototype.setSecure = function(n) {
        'use strict';
        return this.setProtocol(n ? 'https' : 'http');
    };
    m.prototype.isSecure = function() {
        'use strict';
        return this.getProtocol() === 'https';
    };
    m.prototype.setDomain = function(n) {
        'use strict';
        if (i.test(n)) throw new Error(c('ex')('URI.setDomain: unsafe domain specified: %s for url %s', n, this.toString()));
        this.$URIBase1 = n;
        return this;
    };
    m.prototype.getDomain = function() {
        'use strict';
        return this.$URIBase1;
    };
    m.prototype.setPort = function(n) {
        'use strict';
        this.$URIBase6 = n;
        return this;
    };
    m.prototype.getPort = function() {
        'use strict';
        return this.$URIBase6;
    };
    m.prototype.setPath = function(n) {
        'use strict';
        this.$URIBase5 = n;
        return this;
    };
    m.prototype.getPath = function() {
        'use strict';
        return this.$URIBase5;
    };
    m.prototype.addQueryData = function(n, o) {
        'use strict';
        if (Object.prototype.toString.call(n) === '[object Object]') {
            Object.assign(this.$URIBase8, n);
        } else this.$URIBase8[n] = o;
        return this;
    };
    m.prototype.setQueryData = function(n) {
        'use strict';
        this.$URIBase8 = n;
        return this;
    };
    m.prototype.getQueryData = function() {
        'use strict';
        return this.$URIBase8;
    };
    m.prototype.removeQueryData = function(n) {
        'use strict';
        if (!Array.isArray(n)) n = [n];
        for (var o = 0, p = n.length; o < p; ++o) delete this.$URIBase8[n[o]];
        return this;
    };
    m.prototype.setFragment = function(n) {
        'use strict';
        this.$URIBase3 = n;
        this.setForceFragmentSeparator(false);
        return this;
    };
    m.prototype.getFragment = function() {
        'use strict';
        return this.$URIBase3;
    };
    m.prototype.setForceFragmentSeparator = function(n) {
        'use strict';
        this.$URIBase2 = n;
        return this;
    };
    m.prototype.getForceFragmentSeparator = function() {
        'use strict';
        return this.$URIBase2;
    };
    m.prototype.setIsGeneric = function(n) {
        'use strict';
        this.$URIBase4 = n;
        return this;
    };
    m.prototype.getIsGeneric = function() {
        'use strict';
        return this.$URIBase4;
    };
    m.prototype.isEmpty = function() {
        'use strict';
        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment());
    };
    m.prototype.toString = function() {
        'use strict';
        var n = this;
        for (var o = 0; o < l.length; o++) n = l[o](n);
        return n.$URIBase10();
    };
    m.prototype.$URIBase10 = function() {
        'use strict';
        var n = '',
            o = this.getProtocol();
        if (o) n += o + ':' + (this.getIsGeneric() ? '' : '//');
        var p = this.getDomain();
        if (p) n += p;
        var q = this.getPort();
        if (q) n += ':' + q;
        var r = this.getPath();
        if (r) {
            n += r;
        } else if (n) n += '/';
        var s = this.$URIBase9.serialize(this.getQueryData());
        if (s) n += '?' + s;
        var t = this.getFragment();
        if (t) {
            n += '#' + t;
        } else if (this.getForceFragmentSeparator()) n += '#';
        return n;
    };
    m.registerFilter = function(n) {
        'use strict';
        l.push(n);
    };
    m.prototype.getOrigin = function() {
        'use strict';
        var n = this.getPort();
        return this.getProtocol() + '://' + this.getDomain() + (n ? ':' + n : '');
    };
    m.prototype.getQualifiedURIBase = function() {
        'use strict';
        return new m(this, this.$URIBase9).qualify();
    };
    m.prototype.qualify = function() {
        'use strict';
        if (!this.getDomain()) {
            var n = new m(window.location.href, this.$URIBase9);
            this.setProtocol(n.getProtocol()).setDomain(n.getDomain()).setPort(n.getPort());
        }
        return this;
    };
    m.prototype.setSubdomain = function(n) {
        'use strict';
        var o = this.qualify().getDomain();
        return this.setDomain(c('setHostSubdomain')(o, n));
    };
    m.prototype.getSubdomain = function() {
        'use strict';
        if (!this.getDomain()) return '';
        var n = this.getDomain().split('.');
        if (n.length <= 2) {
            return '';
        } else return n[0];
    };
    f.exports = m;
}), null);
__d("areSameOrigin", [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        if (i.isEmpty() || j.isEmpty()) return false;
        if (i.getProtocol() && i.getProtocol() != j.getProtocol()) return false;
        if (i.getDomain() && i.getDomain() != j.getDomain()) return false;
        if (i.getPort() && i.getPort() != j.getPort()) return false;
        return true;
    }
    f.exports = h;
}), null);
__d("ReloadPage", [], (function a(b, c, d, e, f, g) {
    var h = {
        now: function i(j) {
            b.window.location.reload(j);
        },
        delay: function i(j) {
            b.setTimeout(this.now.bind(this), j);
        }
    };
    f.exports = h;
}), null);
__d('goURIOnWindow', ['ReloadPage', 'URISchemes'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i, j, k, l) {
        i = i.toString();
        var m = j ? j : window;
        if (/^([^.:/?#]+):/.test(i) && !c('URISchemes').isAllowed(RegExp.$1)) throw new Error('goURI: URI scheme rejected, URI: ' + i);
        if (!k && b.PageTransitions) {
            b.PageTransitions.go(i, l);
        } else if (window.location.href === i) {
            c('ReloadPage').now();
        } else if (l) {
            m.location.replace(i);
        } else m.location.href = i;
    }
    f.exports = h;
}), null);
__d('goURI', ['goURIOnWindow'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i, j, k) {
        c('goURIOnWindow')(i, window, j, k);
    }
    f.exports = h;
}), null);
__d('isFacebookURI', [], (function a(b, c, d, e, f, g) {
    var h = null,
        i = ['http', 'https'];

    function j(k) {
        if (!h) h = new RegExp('(^|\\.)facebook\\.com$', 'i');
        if (k.isEmpty() && k.toString() !== '#') return false;
        if (!k.getDomain() && !k.getProtocol()) return true;
        return i.indexOf(k.getProtocol()) !== -1 && h.test(k.getDomain());
    }
    j.setRegex = function(k) {
        h = k;
    };
    f.exports = j;
}), null);
__d('isMessengerDotComURI', [], (function a(b, c, d, e, f, g) {
    var h = new RegExp('(^|\\.)messenger\\.com$', 'i'),
        i = ['https'];

    function j(k) {
        if (k.isEmpty() && k.toString() !== '#') return false;
        if (!k.getDomain() && !k.getProtocol()) return false;
        return (i.indexOf(k.getProtocol()) !== -1 && h.test(k.getDomain()));
    }
    f.exports = j;
}), null);
__d("unqualifyURI", [], (function a(b, c, d, e, f, g) {
    function h(i) {
        i.setProtocol(null).setDomain(null).setPort(null);
    }
    f.exports = h;
}), null);
__d('URI', ['CdnAkamaiDomainsConfig', 'PHPQuerySerializer', 'URIBase', 'areSameOrigin', 'goURI', 'ifRequired', 'isFacebookURI', 'isMessengerDotComURI', 'memoize', 'unqualifyURI'], (function a(b, c, d, e, f, g) {
    var h, i, j, k = this,
        l = c('memoize')(function() {
            return new n(window.location.href);
        });

    function m() {
        return c('ifRequired')('PageTransitions', function(o) {
            if (o.isInitialized()) return o;
        });
    }
    h = babelHelpers.inherits(n, c('URIBase'));
    i = h && h.prototype;

    function n(o) {
        'use strict';
        i.constructor.call(this, o || '', c('PHPQuerySerializer'));
    }
    n.prototype.setPath = function(o) {
        'use strict';
        this.path = o;
        return i.setPath.call(this, o);
    };
    n.prototype.getPath = function() {
        'use strict';
        var o = i.getPath.call(this);
        if (o) return o.replace(/^\/+/, '/');
        return o;
    };
    n.prototype.setProtocol = function(o) {
        'use strict';
        this.protocol = o;
        return i.setProtocol.call(this, o);
    };
    n.prototype.setDomain = function(o) {
        'use strict';
        this.domain = o;
        return i.setDomain.call(this, o);
    };
    n.prototype.setPort = function(o) {
        'use strict';
        this.port = o;
        return i.setPort.call(this, o);
    };
    n.prototype.setFragment = function(o) {
        'use strict';
        this.fragment = o;
        return i.setFragment.call(this, o);
    };
    n.prototype.valueOf = function() {
        'use strict';
        return this.toString();
    };
    n.prototype.isFacebookURI = function() {
        'use strict';
        return c('isFacebookURI')(this);
    };
    n.prototype.isLinkshimURI = function() {
        'use strict';
        if ((this.getPath() === '/l.php' || this.getPath().indexOf('/si/ajax/l/') === 0 || this.getPath().indexOf('/l/') === 0 || this.getPath().indexOf('l/') === 0) && (c('isFacebookURI')(this) || c('isMessengerDotComURI')(this))) return true;
        return false;
    };
    n.prototype.isCdnURI = function() {
        'use strict';
        if (this.getProtocol() !== 'http' && this.getProtocol() !== 'https') return false;
        var o = this.getPort();
        if (!!o && o !== 80 && o !== 443) return false;
        if (this.isSubdomainOfDomain('fbcdn.net')) return true;
        return c('CdnAkamaiDomainsConfig')[this.getDomain()] != undefined;
    };
    n.prototype.isSubdomainOfDomain = function(o) {
        'use strict';
        var p = this.getDomain();
        if (o === '' || p === '') return false;
        if (p.endsWith(o)) {
            var q = p.length,
                r = o.length,
                s = q - r - 1;
            if (q === r || p[s] === '.') return n.isValidURI(o);
        }
        return false;
    };
    n.prototype.getRegisteredDomain = function() {
        'use strict';
        if (!this.getDomain()) return '';
        if (!c('isFacebookURI')(this)) return null;
        var o = this.getDomain().split('.'),
            p = o.indexOf('facebook');
        return o.slice(p).join('.');
    };
    n.prototype.getUnqualifiedURI = function() {
        'use strict';
        var o = new n(this);
        c('unqualifyURI')(o);
        return o;
    };
    n.prototype.getQualifiedURI = function() {
        'use strict';
        return new n(this).qualify();
    };
    n.prototype.isSameOrigin = function(o) {
        'use strict';
        var p = o;
        if (!p) {
            p = l();
        } else if (!(p instanceof n)) p = new n(p.toString());
        return c('areSameOrigin')(this, p);
    };
    n.prototype.go = function(o) {
        'use strict';
        c('goURI')(this, o);
    };
    n.isValidURI = function(o) {
        'use strict';
        return c('URIBase').isValidURI(o, c('PHPQuerySerializer'));
    };
    n.getRequestURI = function(o, p) {
        'use strict';
        o = o === undefined || o;
        if (o) {
            var q = m();
            if (q) return q.getCurrentURI(!!p).getQualifiedURI();
        }
        return new n(window.location.href);
    };
    n.getMostRecentURI = function() {
        'use strict';
        var o = m();
        if (o) return o.getMostRecentURI().getQualifiedURI();
        return new n(window.location.href);
    };
    n.getNextURI = function() {
        'use strict';
        var o = m();
        if (o) return o.getNextURI().getQualifiedURI();
        return new n(window.location.href);
    };
    n.encodeComponent = function(o) {
        'use strict';
        return encodeURIComponent(o).replace(/%5D/g, ']').replace(/%5B/g, '[');
    };
    n.decodeComponent = function(o) {
        'use strict';
        return decodeURIComponent(o.replace(/\+/g, ' '));
    };
    Object.assign(n, {
        expression: /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
        arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/
    });
    f.exports = n;
}), null);
__d('mixin', [], (function a(b, c, d, e, f, g) {
    function h(i, j, k, l, m, n, o, p, q, r, s) {
        var t = function y() {},
            u = [i, j, k, l, m, n, o, p, q, r],
            v = 0,
            w = void 0;
        while (u[v]) {
            w = u[v];
            for (var x in w)
                if (w.hasOwnProperty(x)) t.prototype[x] = w[x];
            v += 1;
        }
        return t;
    }
    f.exports = h;
}), null);
__d('JSONPTransport', ['ArbiterMixin', 'DOM', 'HTML', 'TimeSlice', 'URI', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i, j = {},
        k = 2,
        l = 'jsonp',
        m = 'iframe';

    function n(p) {
        delete j[p];
    }
    h = babelHelpers.inherits(o, c('mixin')(c('ArbiterMixin')));
    i = h && h.prototype;

    function o(p, q) {
        'use strict';
        i.constructor.call(this);
        this._type = p;
        this._uri = q;
        this._hasResponse = false;
        j[this.getID()] = this;
    }
    o.prototype.getID = function() {
        'use strict';
        return this._id || (this._id = k++);
    };
    o.prototype.hasFinished = function() {
        'use strict';
        return !(this.getID() in j);
    };
    o.prototype.getRequestURI = function() {
        'use strict';
        return new(c('URI'))(this._uri).addQueryData({
            __a: 1,
            __adt: this.getID(),
            __req: 'jsonp_' + this.getID()
        });
    };
    o.prototype.getTransportFrame = function() {
        'use strict';
        if (this._iframe) return this._iframe;
        var p = 'transport_frame_' + this.getID(),
            q = c('HTML')('<iframe class="hidden_elem" name="' + p + '" src="javascript:void(0)" />');
        return this._iframe = c('DOM').appendContent(document.body, q)[0];
    };
    o.prototype.send = function() {
        'use strict';
        if (this._type === l) {
            setTimeout(function() {
                c('DOM').appendContent(document.body, c('DOM').create('script', {
                    src: this.getRequestURI().toString(),
                    type: 'text/javascript'
                }));
            }.bind(this), 0);
        } else {
            this.getTransportFrame().onload = this._checkForErrors.bind(this);
            this.getTransportFrame().src = this.getRequestURI().toString();
        }
    };
    o.prototype.handleResponse = function(p) {
        'use strict';
        this.inform('response', p);
        if (this.hasFinished()) setTimeout(this._cleanup.bind(this), 0);
    };
    o.prototype.abort = function() {
        'use strict';
        if (this._aborted) return;
        this._aborted = true;
        this._cleanup();
        n(this.getID());
        this.inform('abort');
    };
    o.prototype._checkForErrors = function() {
        'use strict';
        if (!this._hasResponse) this.abort();
    };
    o.prototype._cleanup = function() {
        'use strict';
        if (this._iframe) {
            c('DOM').remove(this._iframe);
            this._iframe = null;
        }
    };
    o.respond = function(p, q, r) {
        'use strict';
        var s = j[p];
        if (s) {
            s._hasResponse = true;
            if (!r) n(p);
            if (s._type == m)
                if (typeof q === 'string') {
                    q = JSON.parse(q);
                } else q = JSON.parse(JSON.stringify(q));
            s.handleResponse(q);
        } else {
            var t = b.ErrorSignal;
            if (t && !r) t.logJSError('ajax', {
                error: 'UnexpectedJsonResponse',
                extra: {
                    id: p,
                    uri: q.payload && q.payload.uri || ''
                }
            });
        }
    };
    o.respond = c('TimeSlice').guard(o.respond, 'JSONPTransport.respond', {
        root: true
    });
    f.exports = o;
}), null);
__d('StrSet', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this.$StrSet2 = {};
        this.$StrSet1 = 0;
        if (i) this.addAll(i);
    }
    h.prototype.add = function(i) {
        'use strict';
        if (!this.$StrSet2.hasOwnProperty(i)) {
            this.$StrSet2[i] = true;
            this.$StrSet1++;
        }
        return this;
    };
    h.prototype.addAll = function(i) {
        'use strict';
        i.forEach(this.add, this);
        return this;
    };
    h.prototype.remove = function(i) {
        'use strict';
        if (this.$StrSet2.hasOwnProperty(i)) {
            delete this.$StrSet2[i];
            this.$StrSet1--;
        }
        return this;
    };
    h.prototype.removeAll = function(i) {
        'use strict';
        i.forEach(this.remove, this);
        return this;
    };
    h.prototype.toArray = function() {
        'use strict';
        return Object.keys(this.$StrSet2);
    };
    h.prototype.toMap = function(i) {
        'use strict';
        var j = {};
        Object.keys(this.$StrSet2).forEach(function(k) {
            j[k] = typeof i == 'function' ? i(k) : i || true;
        });
        return j;
    };
    h.prototype.contains = function(i) {
        'use strict';
        return this.$StrSet2.hasOwnProperty(i);
    };
    h.prototype.count = function() {
        'use strict';
        return this.$StrSet1;
    };
    h.prototype.clear = function() {
        'use strict';
        this.$StrSet2 = {};
        this.$StrSet1 = 0;
        return this;
    };
    h.prototype.clone = function() {
        'use strict';
        return new h(this);
    };
    h.prototype.forEach = function(i, j) {
        'use strict';
        Object.keys(this.$StrSet2).forEach(i, j);
    };
    h.prototype.map = function(i, j) {
        'use strict';
        return Object.keys(this.$StrSet2).map(i, j);
    };
    h.prototype.some = function(i, j) {
        'use strict';
        return Object.keys(this.$StrSet2).some(i, j);
    };
    h.prototype.every = function(i, j) {
        'use strict';
        return Object.keys(this.$StrSet2).every(i, j);
    };
    h.prototype.filter = function(i, j) {
        'use strict';
        return new h(Object.keys(this.$StrSet2).filter(i, j));
    };
    h.prototype.union = function(i) {
        'use strict';
        return this.clone().addAll(i);
    };
    h.prototype.intersect = function(i) {
        'use strict';
        return this.filter(function(j) {
            return i.contains(j);
        });
    };
    h.prototype.difference = function(i) {
        'use strict';
        return i.filter(function(j) {
            return !this.contains(j);
        }.bind(this));
    };
    h.prototype.equals = function(i) {
        'use strict';
        var j = function n(o, p) {
                return o === p ? 0 : o < p ? -1 : 1;
            },
            k = this.toArray(),
            l = i.toArray();
        if (k.length !== l.length) return false;
        var m = k.length;
        k = k.sort(j);
        l = l.sort(j);
        while (m--)
            if (k[m] !== l[m]) return false;
        return true;
    };
    f.exports = h;
}), null);
__d('PlatformBaseVersioning', ['invariant', 'PlatformVersions', 'getObjectValues', 'StrSet'], (function a(b, c, d, e, f, g, h) {
    var i = new(c('StrSet'))(c('getObjectValues')(c('PlatformVersions').versions)),
        j = location.pathname,
        k = j.substring(1, j.indexOf('/', 1)),
        l = i.contains(k) ? k : c('PlatformVersions').versions.UNVERSIONED;

    function m(p, q) {
        if (q == c('PlatformVersions').versions.UNVERSIONED) return p;
        i.contains(q) || h(0);
        if (p.indexOf('/') !== 0) p = '/' + p;
        return '/' + q + p;
    }

    function n(p) {
        if (i.contains(p.substring(1, p.indexOf('/', 1)))) return p.substring(p.indexOf('/', 1));
        return p;
    }
    var o = {
        addVersionToPath: m,
        getLatestVersion: function p() {
            return c('PlatformVersions').LATEST;
        },
        versionAwareURI: function p(q) {
            return q.setPath(m(q.getPath(), l));
        },
        versionAwarePath: function p(q) {
            return m(q, l);
        },
        getUnversionedPath: n
    };
    f.exports = o;
}), null);
__d('PluginMessage', ['DOMEventListener'], (function a(b, c, d, e, f, g) {
    var h = {
        listen: function i() {
            c('DOMEventListener').add(window, 'message', function(event) {
                if (/\.facebook\.com$/.test(event.origin) && /^FB_POPUP:/.test(event.data)) {
                    var j = JSON.parse(event.data.substring(9));
                    if ('reload' in j && /^https?:/.test(j.reload)) document.location.replace(j.reload);
                }
            });
        }
    };
    f.exports = h;
}), null);
__d('DOMDimensions', ['Style', 'getDocumentScrollElement'], (function a(b, c, d, e, f, g) {
    var h = {
        getElementDimensions: function i(j) {
            return {
                width: j.offsetWidth || 0,
                height: j.offsetHeight || 0
            };
        },
        getDocumentDimensions: function i(j) {
            var k = c('getDocumentScrollElement')(j),
                l = k.scrollWidth || 0,
                m = k.scrollHeight || 0;
            return {
                width: l,
                height: m
            };
        },
        measureElementBox: function i(j, k, l, m, n) {
            var o;
            switch (k) {
                case 'left':
                case 'right':
                case 'top':
                case 'bottom':
                    o = [k];
                    break;
                case 'width':
                    o = ['left', 'right'];
                    break;
                case 'height':
                    o = ['top', 'bottom'];
                    break;
                default:
                    throw Error('Invalid plane: ' + k);
            }
            var p = function q(r, s) {
                var t = 0;
                for (var u = 0; u < o.length; u++) t += parseInt(c('Style').get(j, r + '-' + o[u] + s), 10) || 0;
                return t;
            };
            return (l ? p('padding', '') : 0) + (m ? p('border', '-width') : 0) + (n ? p('margin', '') : 0);
        }
    };
    f.exports = h;
}), null);
__d('BehaviorsMixin', [], (function a(b, c, d, e, f, g) {
    function h(l) {
        'use strict';
        this.$InstalledBehavior1 = l;
        this.$InstalledBehavior2 = false;
    }
    h.prototype.enable = function() {
        'use strict';
        if (!this.$InstalledBehavior2) {
            this.$InstalledBehavior2 = true;
            this.$InstalledBehavior1.enable();
        }
    };
    h.prototype.disable = function() {
        'use strict';
        if (this.$InstalledBehavior2) {
            this.$InstalledBehavior2 = false;
            this.$InstalledBehavior1.disable();
        }
    };
    var i = 1;

    function j(l) {
        if (!l.__BEHAVIOR_ID) l.__BEHAVIOR_ID = i++;
        return l.__BEHAVIOR_ID;
    }
    var k = {
        enableBehavior: function l(m) {
            if (!this._behaviors) this._behaviors = {};
            var n = j(m);
            if (!this._behaviors[n]) this._behaviors[n] = new h(new m(this));
            this._behaviors[n].enable();
            return this;
        },
        disableBehavior: function l(m) {
            if (this._behaviors) {
                var n = j(m);
                if (this._behaviors[n]) this._behaviors[n].disable();
            }
            return this;
        },
        enableBehaviors: function l(m) {
            m.forEach(this.enableBehavior, this);
            return this;
        },
        destroyBehaviors: function l() {
            if (this._behaviors) {
                for (var m in this._behaviors) this._behaviors[m].disable();
                this._behaviors = {};
            }
        },
        hasBehavior: function l(m) {
            return this._behaviors && j(m) in this._behaviors;
        }
    };
    f.exports = k;
}), null);
__d('BootloadedReact', ['Bootloader'], (function a(b, c, d, e, f, g) {
    var h = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 60103,
        i = function k(l) {
            c('Bootloader').loadModules(["ReactDOM"], l, 'BootloadedReact');
        },
        j = {
            isValidElement: function k(l) {
                return !!(typeof l === 'object' && l !== null && l.$$typeof === h);
            },
            render: function k(l, m, n) {
                i(function(o) {
                    o.render(l, m, function() {
                        n && n(this);
                    });
                });
            },
            unmountComponentAtNode: function k(l, m) {
                i(function(n) {
                    n.unmountComponentAtNode(l);
                    m && m();
                });
            }
        };
    f.exports = j;
}), null);
__d('getOrCreateDOMID', ['uniqueID'], (function a(b, c, d, e, f, g) {
    function h(i) {
        if (!i.id) i.id = c('uniqueID')();
        return i.id;
    }
    f.exports = h;
}), null);
__d('ContextualThing', ['CSS', 'containsNode', 'ge', 'getOrCreateDOMID'], (function a(b, c, d, e, f, g) {
    var h = {
        register: function i(j, k) {
            j.setAttribute('data-ownerid', c('getOrCreateDOMID')(k));
        },
        containsIncludingLayers: function i(j, k) {
            var l = k;
            while (l) {
                if (c('containsNode')(j, l)) return true;
                l = h.getContext(l);
            }
            return false;
        },
        getContext: function i(j) {
            var k = j,
                l = void 0;
            while (k) {
                if (k.getAttribute && (l = k.getAttribute('data-ownerid'))) return c('ge')(l);
                k = k.parentNode;
            }
            return null;
        },
        parentByClass: function i(j, k) {
            var l = j,
                m = void 0;
            while (l && !c('CSS').hasClass(l, k))
                if (l.getAttribute && (m = l.getAttribute('data-ownerid'))) {
                    l = c('ge')(m);
                } else l = l.parentNode;
            return l;
        }
    };
    f.exports = h;
}), null);
__d('PageEvents', [], (function a(b, c, d, e, f, g) {
    var h = {
        NATIVE_ONLOAD: 'onload/onload',
        BIGPIPE_ONLOAD: 'onload/onload_callback',
        AJAXPIPE_ONLOAD: 'ajaxpipe/onload_callback',
        NATIVE_DOMREADY: 'onload/dom_content_ready',
        BIGPIPE_DOMREADY: 'onload/domcontent_callback',
        AJAXPIPE_DOMREADY: 'ajaxpipe/domcontent_callback',
        NATIVE_ONBEFOREUNLOAD: 'onload/beforeunload',
        NATIVE_ONUNLOAD: 'onload/unload',
        AJAXPIPE_ONUNLOAD: 'onload/exit',
        AJAXPIPE_SEND: 'ajaxpipe/send',
        AJAXPIPE_ONBEFORECLEARCANVAS: 'ajaxpipe/onbeforeclearcanvas'
    };
    f.exports = h;
}), null);
__d('createCancelableFunction', ['emptyFunction'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = function k() {
            for (var l = arguments.length, m = Array(l), n = 0; n < l; n++) m[n] = arguments[n];
            return i.apply(null, m);
        };
        j.cancel = function() {
            i = c('emptyFunction');
        };
        return j;
    }
    f.exports = h;
}), null);
__d('Run', ['Arbiter', 'ExecutionEnvironment', 'PageEvents', 'TimeSlice', 'createCancelableFunction', 'emptyFunction', 'performanceAbsoluteNow'], (function a(b, c, d, e, f, g) {
    var h = 'onunloadhooks',
        i = 'onafterunloadhooks',
        j = c('Arbiter').BEHAVIOR_STATE;

    function k(aa, ba) {
        var ca = b.CavalryLogger,
            da = ca && ca.getInstance();
        if (!da) return;
        if (ba) {
            da.setAbsTimeStamp && da.setAbsTimeStamp(aa, ba);
        } else da.setTimeStamp(aa);
    }

    function l() {
        return !window.loading_page_chrome;
    }

    function m(aa) {
        var ba = b.PageHooks;
        if (window.domready && ba) {
            ba.runHook(aa, 'domreadyhooks:late');
            return {
                remove: c('emptyFunction')
            };
        } else return t('domreadyhooks', aa);
    }

    function n(aa) {
        var ba = b.PageHooks;
        if (window.loaded && ba) {
            var ca = setTimeout(function() {
                ba.runHook(aa, 'onloadhooks:late');
            }, 0);
            return {
                remove: function da() {
                    return clearTimeout(ca);
                }
            };
        } else return t('onloadhooks', aa);
    }

    function o(aa, ba) {
        if (ba === undefined) ba = l();
        return ba ? t('onbeforeleavehooks', aa) : t('onbeforeunloadhooks', aa);
    }

    function p(aa, ba) {
        if (!window.onunload) window.onunload = c('TimeSlice').guard(function() {
            c('Arbiter').inform(c('PageEvents').NATIVE_ONUNLOAD, true, j);
        }, 'window.onunload');
        return t(aa, ba);
    }

    function q(aa) {
        return p(h, aa);
    }

    function r(aa) {
        return p(i, aa);
    }

    function s(aa) {
        return t('onleavehooks', aa);
    }

    function t(aa, ba) {
        ba = c('createCancelableFunction')(ba);
        window[aa] = (window[aa] || []).concat(ba);
        return {
            remove: function ca() {
                ba.cancel();
            }
        };
    }

    function u(aa) {
        window[aa] = [];
    }
    var v = c('TimeSlice').guard(function() {
        c('Arbiter').inform(c('PageEvents').NATIVE_DOMREADY, true, j);
    }, 'DOMContentLoaded');
    b._domcontentready = v;

    function w() {
        var aa = document,
            ba = window;
        if (aa.addEventListener) {
            var ca = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (ca && ca[1] < 525) {
                var da = setInterval(function() {
                    if (/loaded|complete/.test(aa.readyState)) {
                        v();
                        clearInterval(da);
                    }
                }, 10);
            } else aa.addEventListener("DOMContentLoaded", v, true);
        } else {
            var ea = 'javascript:void(0)';
            if (ba.location.protocol == 'https:') ea = '//:';
            aa.write('<script onreadystatechange="if (this.readyState==\'complete\') {' + 'this.parentNode.removeChild(this);_domcontentready();}" ' + 'defer="defer" src="' + ea + '"><\/script\>');
        }
        var fa = ba.onload;
        ba.onload = c('TimeSlice').guard(function() {
            k('t_layout');
            fa && fa();
            c('Arbiter').inform(c('PageEvents').NATIVE_ONLOAD, true, j);
        }, 'window.onload');
        ba.onbeforeunload = c('TimeSlice').guard(function() {
            var ga = {};
            c('Arbiter').inform(c('PageEvents').NATIVE_ONBEFOREUNLOAD, ga, j);
            if (!ga.warn) c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONUNLOAD, {
                transition_type: 'normal'
            });
            return ga.warn;
        }, 'window.onbeforeunload');
    }
    var x = c('Arbiter').registerCallback(function() {
            var aa = c('performanceAbsoluteNow')();
            if (window.console && console.timeStamp) console.timeStamp('perf_trace {"name": "e2e",' + ' "parent": "PageEvents.BIGPIPE_ONLOAD"}');
            k('t_onload', aa);
            c('Arbiter').inform(c('PageEvents').BIGPIPE_ONLOAD, {
                ts: aa
            }, j);
        }, [c('PageEvents').NATIVE_ONLOAD]),
        y = c('Arbiter').registerCallback(function() {
            k('t_domcontent');
            var aa = {
                timeTriggered: Date.now()
            };
            c('Arbiter').inform(c('PageEvents').BIGPIPE_DOMREADY, aa, j);
        }, [c('PageEvents').NATIVE_DOMREADY]);
    if (c('ExecutionEnvironment').canUseDOM) w();
    var z = {
        onLoad: m,
        onAfterLoad: n,
        onLeave: s,
        onBeforeUnload: o,
        onUnload: q,
        onAfterUnload: r,
        __domContentCallback: y,
        __onloadCallback: x,
        __removeHook: u
    };
    f.exports = z;
}), null);
__d('getElementText', ['isElementNode', 'isTextNode'], (function a(b, c, d, e, f, g) {
    var h = null;

    function i(j) {
        if (c('isTextNode')(j)) {
            return j.data;
        } else if (c('isElementNode')(j)) {
            if (h === null) {
                var k = document.createElement('div');
                h = k.textContent != null ? 'textContent' : 'innerText';
            }
            return j[h];
        } else return '';
    }
    f.exports = i;
}), null);
__d('KeyEventController', ['DOMQuery', 'Event', 'Run', 'emptyFunction', 'getElementText', 'isEmpty'], (function a(b, c, d, e, f, g) {
    var h = null,
        i = ['input', 'select', 'textarea', 'object', 'embed'],
        j = {
            button: 1,
            checkbox: 1,
            radio: 1,
            submit: 1,
            file: 1
        },
        k = {
            BACKSPACE: [8],
            TAB: [9],
            RETURN: [13],
            ALT: [18],
            ESCAPE: [27],
            LEFT: [37, 63234],
            UP: [38, 63232],
            RIGHT: [39, 63235],
            DOWN: [40, 63233],
            DELETE: [46],
            COMMA: [188],
            PERIOD: [190],
            SLASH: [191],
            '`': [192],
            '[': [219],
            ']': [221],
            PAGE_UP: [33],
            PAGE_DOWN: [34],
            END: [35],
            HOME: [36],
            SPACE: [32],
            KP_DOT: [46, 110],
            '-': [189],
            '=': [187]
        },
        l = {
            8: 1,
            9: 1,
            13: 1,
            27: 1,
            32: 1,
            37: 1,
            63234: 1,
            38: 1,
            63232: 1,
            39: 1,
            63235: 1,
            40: 1,
            63233: 1,
            46: 1
        };

    function m() {
        'use strict';
        this.handlers = {};
        document.onkeyup = this.onkeyevent.bind(this, 'onkeyup');
        document.onkeydown = this.onkeyevent.bind(this, 'onkeydown');
        document.onkeypress = this.onkeyevent.bind(this, 'onkeypress');
    }
    m.prototype.mapKey = function(n) {
        'use strict';
        if (n >= 0 && n <= 9) {
            if (typeof n != 'number') n = n.charCodeAt(0) - 48;
            return [48 + n, 96 + n];
        }
        var o = k[n.toUpperCase()];
        if (o) return o;
        return [n.toUpperCase().charCodeAt(0)];
    };
    m.prototype.onkeyevent = function(n, o) {
        'use strict';
        o = c('Event').$E(o);
        var p = this.handlers[o.keyCode] || this.handlers[o.which],
            q, r, s;
        if (p)
            for (var t = 0; t < p.length; t++) {
                q = p[t].callback;
                r = p[t].filter;
                try {
                    if (!r || r(o, n)) {
                        s = q(o, n);
                        if (s === false) return c('Event').kill(o);
                    }
                } catch (u) {}
            }
        return true;
    };
    m.prototype.resetHandlers = function() {
        'use strict';
        for (var n in this.handlers)
            if (this.handlers.hasOwnProperty(n)) {
                var o = this.handlers[n].filter(function(p) {
                    return p.preserve();
                });
                if (o.length) {
                    this.handlers[n] = o;
                } else delete this.handlers[n];
            }
    };
    m.getInstance = function() {
        'use strict';
        return h || (h = new m());
    };
    m.defaultFilter = function(event, n) {
        'use strict';
        event = c('Event').$E(event);
        return m.filterEventTypes(event, n) && m.filterEventTargets(event, n) && m.filterEventModifiers(event, n);
    };
    m.filterEventTypes = function(event, n) {
        'use strict';
        if (n === 'onkeydown') return true;
        return false;
    };
    m.filterEventTargets = function(event, n) {
        'use strict';
        var o = event.getTarget(),
            p = o.contentEditable === 'true' || o.contentEditable === 'plaintext-only';
        return (!(p || c('DOMQuery').isNodeOfType(o, i)) || o.type in j || event.keyCode in l && (c('DOMQuery').isNodeOfType(o, ['input', 'textarea']) && o.value.length === 0 || p && c('getElementText')(o).length === 0));
    };
    m.filterEventModifiers = function(event, n) {
        'use strict';
        if (event.ctrlKey || event.altKey || event.metaKey || event.repeat) return false;
        return true;
    };
    m.registerKey = function(n, o) {
        var p = arguments.length <= 2 || arguments[2] === undefined ? m.defaultFilter : arguments[2],
            q = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3],
            r = arguments.length <= 4 || arguments[4] === undefined ? c('emptyFunction').thatReturnsFalse : arguments[4];
        'use strict';
        var s = m.getInstance(),
            t = s.mapKey(n);
        if (c('isEmpty')(s.handlers)) c('Run').onLeave(s.resetHandlers.bind(s));
        var u = {};
        for (var v = 0; v < t.length; v++) {
            n = t[v];
            if (!s.handlers[n] || q) s.handlers[n] = [];
            var w = {
                callback: o,
                filter: p,
                preserve: r
            };
            u[n] = w;
            s.handlers[n].push(w);
        }
        return {
            remove: function x() {
                for (var y in u) {
                    if (s.handlers[y] && s.handlers[y].length) {
                        var z = s.handlers[y].indexOf(u[y]);
                        z >= 0 && s.handlers[y].splice(z, 1);
                    }
                    delete u[y];
                }
            }
        };
    };
    f.exports = m;
}), null);
__d('KeyStatus', ['Event', 'ExecutionEnvironment'], (function a(b, c, d, e, f, g) {
    var h = null,
        i = null;

    function j() {
        if (!i) i = c('Event').listen(window, 'blur', function() {
            h = null;
            k();
        });
    }

    function k() {
        if (i) {
            i.remove();
            i = null;
        }
    }

    function l(event) {
        h = c('Event').getKeyCode(event);
        j();
    }

    function m() {
        h = null;
        k();
    }
    if (c('ExecutionEnvironment').canUseDOM) {
        var n = document.documentElement;
        if (n.addEventListener) {
            n.addEventListener('keydown', l, true);
            n.addEventListener('keyup', m, true);
        } else if (n.attachEvent) {
            var o = n.attachEvent;
            o('onkeydown', l);
            o('onkeyup', m);
        }
    }
    var p = {
        isKeyDown: function q() {
            return !!h;
        },
        getKeyDownCode: function q() {
            return h;
        }
    };
    f.exports = p;
}), null);
/**
 * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic
 * Denicola
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @preserve-header
 * @providesModule ImmediateImplementation
 */
__d("ImmediateImplementation", [], (function a(b, c, d, e, f, g) {
    (function(h, i) {
        "use strict";
        var j = 1,
            k = {},
            l = {},
            m = l,
            n = false,
            o = h.document,
            p = void 0;

        function q(y) {
            var z = y[0];
            y = Array.prototype.slice.call(y, 1);
            k[j] = function() {
                z.apply(i, y);
            };
            m = m.next = {
                handle: j++
            };
            return m.handle;
        }

        function r() {
            var y = void 0,
                z = void 0;
            while (!n && (y = l.next)) {
                l = y;
                if (z = k[y.handle]) {
                    n = true;
                    try {
                        z();
                        n = false;
                    } finally {
                        s(y.handle);
                        if (n) {
                            n = false;
                            if (l.next) p(r);
                        }
                    }
                }
            }
        }

        function s(y) {
            delete k[y];
        }

        function t() {
            var y;
            if (h.postMessage && !h.importScripts) {
                var y = function() {
                    var z = true,
                        aa = function ba() {
                            z = false;
                            if (h.removeEventListener) {
                                h.removeEventListener("message", ba, false);
                            } else h.detachEvent("onmessage", ba);
                        };
                    if (h.addEventListener) {
                        h.addEventListener("message", aa, false);
                    } else if (h.attachEvent) {
                        h.attachEvent("onmessage", aa);
                    } else return {
                        v: false
                    };
                    h.postMessage("", "*");
                    return {
                        v: z
                    };
                }();
                if (typeof y === "object") return y.v;
            }
        }

        function u() {
            var y = "setImmediate$" + Math.random() + "$",
                z = function aa(event) {
                    if (event.source === h && typeof event.data === "string" && event.data.indexOf(y) === 0) r();
                };
            if (h.addEventListener) {
                h.addEventListener("message", z, false);
            } else h.attachEvent("onmessage", z);
            p = function aa() {
                var ba = q(arguments);
                h.postMessage(y + ba, "*");
                return ba;
            };
        }

        function v() {
            var y = new MessageChannel();
            y.port1.onmessage = r;
            p = function z() {
                var aa = q(arguments);
                y.port2.postMessage(aa);
                return aa;
            };
        }

        function w() {
            var y = o.documentElement;
            p = function z() {
                var aa = q(arguments),
                    ba = o.createElement("script");
                ba.onreadystatechange = function() {
                    ba.onreadystatechange = null;
                    y.removeChild(ba);
                    ba = null;
                    r();
                };
                y.appendChild(ba);
                return aa;
            };
        }

        function x() {
            p = function y() {
                setTimeout(r, 0);
                return q(arguments);
            };
        }
        if (t()) {
            u();
        } else if (h.MessageChannel) {
            v();
        } else if (o && o.createElement && "onreadystatechange" in o.createElement("script")) {
            w();
        } else x();
        g.setImmediate = p;
        g.clearImmediate = s;
    })(Function("return this")());
}), null);
__d('setImmediatePolyfill', ['invariant', 'ImmediateImplementation'], (function a(b, c, d, e, f, g, h) {
    var i = b.setImmediate;
    if (!i) {
        var j = c('ImmediateImplementation');
        i = j.setImmediate;
    }

    function k() {
        for (var l = arguments.length, m = Array(l), n = 0; n < l; n++) m[n] = arguments[n];
        typeof m[0] === 'function' || h(0);
        return i.apply(null, m);
    }
    f.exports = k;
}), null);
__d('setImmediateAcrossTransitions', ['TimeSlice', 'setImmediatePolyfill'], (function a(b, c, d, e, f, g) {
    f.exports = function() {
        for (var h = arguments.length, i = Array(h), j = 0; j < h; j++) i[j] = arguments[j];
        i[0] = c('TimeSlice').guard(i[0], 'setImmediate', {
            isContinuation: true
        });
        return c('setImmediatePolyfill').apply(b, i);
    };
}), null);
__d('setImmediate', ['TimerStorage', 'setImmediateAcrossTransitions'], (function a(b, c, d, e, f, g) {
    f.exports = function() {
        for (var h = arguments.length, i = Array(h), j = 0; j < h; j++) i[j] = arguments[j];
        var k, l = i[0];
        i[0] = function() {
            c('TimerStorage').unset(c('TimerStorage').IMMEDIATE, k);
            Function.prototype.apply.call(l, this, arguments);
        };
        k = c('setImmediateAcrossTransitions').apply(b, i);
        c('TimerStorage').set(c('TimerStorage').IMMEDIATE, k);
        return k;
    }.bind(this);
}), null);
__d('Layer', ['KeyStatus', 'ArbiterMixin', 'BehaviorsMixin', 'BootloadedReact', 'ContextualThing', 'CSS', 'DataStore', 'DOM', 'Event', 'HTML', 'KeyEventController', 'Parent', 'Style', 'ge', 'isNode', 'mixin', 'removeFromArray', 'setImmediate'], (function a(b, c, d, e, f, g) {
    var h, i;
    c('KeyStatus');
    var j = [];
    h = babelHelpers.inherits(k, c('mixin')(c('ArbiterMixin'), c('BehaviorsMixin')));
    i = h && h.prototype;

    function k(n, o) {
        'use strict';
        i.constructor.call(this);
        this._config = n || {};
        if (o) {
            this._configure(this._config, o);
            var p = this._config.addedBehaviors || [];
            this.enableBehaviors(this._getDefaultBehaviors().concat(p));
        }
    }
    k.prototype.init = function(n) {
        'use strict';
        this._configure(this._config, n);
        var o = this._config.addedBehaviors || [];
        this.enableBehaviors(this._getDefaultBehaviors().concat(o));
        this._initialized = true;
        return this;
    };
    k.prototype._configure = function(n, o) {
        var p, q = this;
        'use strict';
        if (o) {
            var r = c('isNode')(o),
                s = typeof o === 'string' || c('HTML').isHTML(o);
            this.containsReactComponent = c('BootloadedReact').isValidElement(o);
            if (s) {
                o = c('HTML')(o).getRootNode();
            } else if (this.containsReactComponent) {
                var t;
                (function() {
                    t = document.createElement('div');
                    var u = true;
                    c('BootloadedReact').render(o, t, function() {
                        this.inform('reactshow');
                        if (!u) this.updatePosition();
                    }.bind(q));
                    u = false;
                    o = q._reactContainer = t;
                })();
            }
        }
        this._root = this._buildWrapper(n, o);
        if (n.attributes) c('DOM').setAttributes(this._root, n.attributes);
        if (n.classNames) n.classNames.forEach(c('CSS').addClass.bind(null, this._root));
        c('CSS').addClass(this._root, 'uiLayer');
        if (n.causalElement) this._causalElement = c('ge')(n.causalElement);
        if (n.permanent) this._permanent = n.permanent;
        c('DataStore').set(this._root, 'layer', this);
    };
    k.prototype._getDefaultBehaviors = function() {
        'use strict';
        return [];
    };
    k.prototype.getCausalElement = function() {
        'use strict';
        return this._causalElement;
    };
    k.prototype.setCausalElement = function(n) {
        'use strict';
        this._causalElement = n;
        return this;
    };
    k.prototype.getInsertParent = function() {
        'use strict';
        return this._insertParent || document.body;
    };
    k.prototype.getRoot = function() {
        'use strict';
        return this._root;
    };
    k.prototype.getContentRoot = function() {
        'use strict';
        return this._root;
    };
    k.prototype._buildWrapper = function(n, o) {
        'use strict';
        return o;
    };
    k.prototype.setInsertParent = function(n) {
        'use strict';
        if (n) {
            if (this._shown && n !== this.getInsertParent()) {
                c('DOM').appendContent(n, this.getRoot());
                this.updatePosition();
            }
            this._insertParent = n;
        }
        return this;
    };
    k.prototype.showAfterDelay = function(n) {
        'use strict';
        setTimeout(this.show.bind(this), n);
    };
    k.prototype.show = function() {
        'use strict';
        if (this._shown) return this;
        var n = this.getRoot();
        this.inform('beforeshow');
        c('Style').set(n, 'visibility', 'hidden');
        c('Style').set(n, 'overflow', 'hidden');
        c('CSS').show(n);
        c('DOM').appendContent(this.getInsertParent(), n);
        if (this.updatePosition() !== false) {
            this._shown = true;
            this.inform('show');
            k.inform('show', this);
            if (!this._permanent) setTimeout(function() {
                if (this._shown) j.push(this);
            }.bind(this), 0);
        } else c('CSS').hide(n);
        c('Style').set(n, 'visibility', '');
        c('Style').set(n, 'overflow', '');
        this.inform('aftershow');
        return this;
    };
    k.prototype.hide = function() {
        'use strict';
        if (this._hiding || !this._shown || this.inform('beforehide') === false) return this;
        this._hiding = true;
        if (this.inform('starthide') !== false) this.finishHide();
        return this;
    };
    k.prototype.conditionShow = function(n) {
        'use strict';
        return n ? this.show() : this.hide();
    };
    k.prototype.finishHide = function() {
        'use strict';
        if (this._shown) {
            if (!this._permanent) c('removeFromArray')(j, this);
            this._hiding = false;
            this._shown = false;
            c('CSS').hide(this.getRoot());
            this.inform('hide');
            k.inform('hide', this);
        }
    };
    k.prototype.isShown = function() {
        'use strict';
        return this._shown;
    };
    k.prototype.updatePosition = function() {
        'use strict';
        return true;
    };
    k.prototype.destroy = function() {
        'use strict';
        if (this.containsReactComponent) c('BootloadedReact').unmountComponentAtNode(this._reactContainer);
        this.finishHide();
        var n = this.getRoot();
        c('DOM').remove(n);
        this.destroyBehaviors();
        this.inform('destroy');
        k.inform('destroy', this);
        c('DataStore').remove(n, 'layer');
        this._root = this._causalElement = null;
    };
    k.init = function(n, o) {
        'use strict';
        n.init(o);
    };
    k.initAndShow = function(n, o) {
        'use strict';
        n.init(o).show();
    };
    k.show = function(n) {
        'use strict';
        n.show();
    };
    k.showAfterDelay = function(n, o) {
        'use strict';
        n.showAfterDelay(o);
    };
    k.getTopmostLayer = function() {
        'use strict';
        return j[j.length - 1];
    };
    Object.assign(k, c('ArbiterMixin'));
    Object.assign(k.prototype, {
        _initialized: false,
        _root: null,
        _shown: false,
        _hiding: false,
        _causalElement: null,
        _reactContainer: null
    });
    c('Event').listen(document.documentElement, 'keydown', function(event) {
        if (c('KeyEventController').filterEventTargets(event, 'keydown'))
            for (var n = j.length - 1; n >= 0; n--)
                if (j[n].inform('key', event) === false) return false;
    }, c('Event').Priority.URGENT);
    var l;
    c('Event').listen(document.documentElement, 'mousedown', function(event) {
        l = event.getTarget();
    });
    var m;
    c('Event').listen(document.documentElement, 'mouseup', function(event) {
        m = event.getTarget();
        c('setImmediate')(function() {
            l = null;
            m = null;
        });
    });
    c('Event').listen(document.documentElement, 'click', function(event) {
        var n = l,
            o = m;
        l = null;
        m = null;
        var p = j.length;
        if (!p) return;
        var q = event.getTarget();
        if (q !== o || q !== n) return;
        if (!c('DOM').contains(document.documentElement, q)) return;
        if (!q.offsetWidth) return;
        if (c('Parent').byClass(q, 'generic_dialog')) return;
        while (p--) {
            var r = j[p],
                s = r.getContentRoot();
            if (c('ContextualThing').containsIncludingLayers(s, q)) return;
            if (r.inform('blur', {
                    target: q
                }) === false || r.isShown()) return;
        }
    });
    f.exports = k;
}), null);
__d('Popup', [], (function a(b, c, d, e, f, g) {
    var h = {
        open: function i(j, k, l, m) {
            var n = document.body,
                o = 'screenX' in window ? window.screenX : window.screenLeft,
                p = 'screenY' in window ? window.screenY : window.screenTop,
                q = 'outerWidth' in window ? window.outerWidth : n.clientWidth,
                r = 'outerHeight' in window ? window.outerHeight : n.clientHeight - 22,
                s = Math.floor(o + (q - k) / 2),
                t = Math.floor(p + (r - l) / 2.5),
                u = ['width=' + k, 'height=' + l, 'left=' + s, 'top=' + t, 'scrollbars'];
            return window.open(j, m || '_blank', u.join(','));
        }
    };
    f.exports = h;
}), null);
__d("getViewportDimensions", [], (function a(b, c, d, e, f, g) {
    function h() {
        var k = void 0;
        if (document.documentElement) k = document.documentElement.clientWidth;
        if (!k && document.body) k = document.body.clientWidth;
        return k || 0;
    }

    function i() {
        var k = void 0;
        if (document.documentElement) k = document.documentElement.clientHeight;
        if (!k && document.body) k = document.body.clientHeight;
        return k || 0;
    }

    function j() {
        return {
            width: window.innerWidth || h(),
            height: window.innerHeight || i()
        };
    }
    j.withoutScrollbars = function() {
        return {
            width: h(),
            height: i()
        };
    };
    f.exports = j;
}), null);
__d('PopupWindow', ['DOMDimensions', 'DOMQuery', 'Layer', 'Popup', 'getViewportDimensions'], (function a(b, c, d, e, f, g) {
    var h = {
        _opts: {
            allowShrink: true,
            strategy: 'vector',
            timeout: 100,
            widthElement: null
        },
        init: function i(j) {
            Object.assign(h._opts, j);
            setInterval(h._resizeCheck, h._opts.timeout);
        },
        _resizeCheck: function i() {
            var j = c('getViewportDimensions')(),
                k = h._getDocumentSize(),
                l = c('Layer').getTopmostLayer();
            if (l) {
                var m = l.getRoot().firstChild,
                    n = c('DOMDimensions').getElementDimensions(m);
                n.height += c('DOMDimensions').measureElementBox(m, 'height', true, true, true);
                n.width += c('DOMDimensions').measureElementBox(m, 'width', true, true, true);
                k.height = Math.max(k.height, n.height);
                k.width = Math.max(k.width, n.width);
            }
            var o = k.height - j.height,
                p = k.width - j.width;
            if (p < 0 && !h._opts.widthElement) p = 0;
            p = p > 1 ? p : 0;
            if (!h._opts.allowShrink && o < 0) o = 0;
            if (o || p) try {
                window.console && window.console.firebug;
                window.resizeBy(p, o);
                if (p) window.moveBy(p / -2, 0);
            } catch (q) {}
        },
        _getDocumentSize: function i() {
            var j = c('DOMDimensions').getDocumentDimensions();
            if (h._opts.strategy === 'offsetHeight') j.height = document.body.offsetHeight;
            if (h._opts.widthElement) {
                var k = c('DOMQuery').scry(document.body, h._opts.widthElement)[0];
                if (k) j.width = c('DOMDimensions').getElementDimensions(k).width;
            }
            var l = b.Dialog;
            if (l && l.max_bottom && l.max_bottom > j.height) j.height = l.max_bottom;
            return j;
        },
        open: function i(j, k, l, m) {
            return c('Popup').open(j, l, k, m);
        }
    };
    f.exports = h;
}), null);
__d('PluginConfirm', ['DOMEvent', 'DOMEventListener', 'PluginMessage', 'PopupWindow', 'URI', 'PlatformBaseVersioning'], (function a(b, c, d, e, f, g) {
    function h(i) {
        Object.assign(this, {
            plugin: i,
            confirm_params: {},
            return_params: c('URI').getRequestURI().getQueryData()
        });
        this.addReturnParams({
            ret: 'sentry'
        });
        delete this.return_params.hash;
    }
    Object.assign(h.prototype, {
        addConfirmParams: function i(j) {
            Object.assign(this.confirm_params, j);
        },
        addReturnParams: function i(j) {
            Object.assign(this.return_params, j);
            return this;
        },
        start: function i() {
            var j = c('PlatformBaseVersioning').versionAwareURI(new(c('URI'))('/plugins/error/confirm/' + this.plugin)).addQueryData(this.confirm_params).addQueryData({
                secure: c('URI').getRequestURI().isSecure(),
                plugin: this.plugin,
                return_params: JSON.stringify(this.return_params)
            });
            this.popup = c('PopupWindow').open(j.toString(), 320, 486);
            c('PluginMessage').listen();
            return this;
        }
    });
    h.starter = function(i, j, k) {
        var l = new h(i);
        l.addConfirmParams(j || {});
        l.addReturnParams(k || {});
        return l.start.bind(l);
    };
    h.listen = function(i, j, k, l) {
        c('DOMEventListener').add(i, 'click', function(m) {
            new(c('DOMEvent'))(m).kill();
            h.starter(j, k, l)();
        });
    };
    f.exports = h;
}), null);
__d('TooltipData', ['DataStore', 'DOM', 'URI', 'getElementText', 'ifRequired', 'isTextNode'], (function a(b, c, d, e, f, g) {
    function h(m) {
        var n = m.getAttribute('data-tooltip-delay'),
            o = n ? parseInt(n, 10) || 1000 : 0;
        return babelHelpers['extends']({
            content: m.getAttribute('data-tooltip-content'),
            delay: o,
            position: m.getAttribute('data-tooltip-position') || 'above',
            alignH: m.getAttribute('data-tooltip-alignh') || 'left',
            suppress: false,
            overflowDisplay: m.getAttribute('data-tooltip-display') === 'overflow',
            persistOnClick: m.getAttribute('data-pitloot-persistonclick'),
            textDirection: m.getAttribute('data-tooltip-text-direction')
        }, c('DataStore').get(m, 'tooltip'));
    }

    function i(m, n) {
        var o = h(m);
        c('DataStore').set(m, 'tooltip', {
            content: n.content || o.content,
            position: n.position || o.position,
            alignH: n.alignH || o.alignH,
            suppress: n.suppress !== undefined ? n.suppress : o.suppress,
            overflowDisplay: n.overflowDisplay || o.overflowDisplay,
            persistOnClick: n.persistOnClick || o.persistOnClick
        });
    }

    function j(m, n) {
        i(m, n);
        m.setAttribute('data-hover', 'tooltip');
    }

    function k(m, n) {}
    var l = {
        remove: function m(n) {
            c('DataStore').remove(n, 'tooltip');
            n.removeAttribute('data-hover');
            n.removeAttribute('data-tooltip-position');
            n.removeAttribute('data-tooltip-alignh');
            c('ifRequired')('Tooltip', function(o) {
                o.isActive(n) && o.hide();
            });
        },
        set: function m(n, o, p, q) {
            k(n, o);
            if (o instanceof c('URI')) {
                n.setAttribute('data-tooltip-uri', o);
                c('ifRequired')('Tooltip', function(s) {
                    s.isActive(n) && s.fetchIfNecessary(n);
                });
            } else {
                var r = l._store({
                    context: n,
                    content: o,
                    position: p,
                    alignH: q
                });
                if (typeof r.content !== 'string') {
                    n.setAttribute('data-tooltip-content', c('getElementText')(r.content));
                } else n.setAttribute('data-tooltip-content', r.content);
                c('ifRequired')('Tooltip', function(s) {
                    s.isActive(n) && s.show(n);
                });
            }
        },
        _store: function m(n) {
            var o = n.context,
                p = n.content,
                q = n.position,
                r = n.alignH;
            k(o, p);
            if (c('isTextNode')(p)) p = c('getElementText')(p);
            var s = false;
            if (typeof p !== 'string') {
                p = c('DOM').create('div', {}, p);
            } else s = p === '';
            var t = {
                alignH: r,
                content: p,
                position: q,
                suppress: s
            };
            j(o, t);
            return t;
        },
        propsFor: function m(n, o) {
            if (!n) return {};
            var p = {
                'data-tooltip-content': n,
                'data-hover': 'tooltip'
            };
            if (o) p['data-tooltip-position'] = o;
            return p;
        },
        enableDisplayOnOverflow: function m(n) {
            n.removeAttribute('data-tooltip-display');
            j(n, {
                overflowDisplay: true
            });
        },
        enablePersistOnClick: function m(n) {
            n.removeAttribute('data-pitloot-persistOnClick');
            j(n, {
                persistOnClick: true
            });
        },
        suppress: function m(n, o) {
            i(n, {
                suppress: o
            });
        },
        _get: h
    };
    f.exports = l;
}), null);
__d('Focus', ['cx', 'CSS', 'Event', 'KeyStatus', 'Run', 'TooltipData', 'ge', 'getOrCreateDOMID', 'ifRequired'], (function a(b, c, d, e, f, g, h) {
    var i = c('KeyStatus').isKeyDown,
        j = {},
        k = void 0,
        l = {
            set: function r(s) {
                var t = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
                if (s) {
                    var u = c('ifRequired')('VirtualCursorStatus', function(v) {
                        return v.isVirtualCursorTriggered();
                    }, function() {
                        return false;
                    });
                    if (t || i() || u) {
                        m(s);
                    } else l.setWithoutOutline(s);
                }
            },
            setWithoutOutline: function r(s) {
                if (s) {
                    c('CSS').addClass(s, "_5f0v");
                    var t = c('Event').listen(s, 'blur', function() {
                        c('CSS').removeClass(s, "_5f0v");
                        t.remove();
                    });
                    c('TooltipData').suppress(s, true);
                    m(s);
                    c('TooltipData').suppress(s, false);
                }
            },
            relocate: function r(s, t) {
                function u(v) {
                    c('CSS').conditionClass(t, "_3oxt", v);
                    c('CSS').conditionClass(t, "_16jm", v);
                }
                c('CSS').addClass(s, "_5f0v");
                return l.listen(s, u);
            },
            listen: function r(s, t) {
                o();
                var u = c('getOrCreateDOMID')(s);
                j[u] = t;
                return n(u);
            }
        };

    function m(r) {
        try {
            r.tabIndex = r.tabIndex;
            r.focus();
        } catch (s) {}
    }

    function n(r) {
        c('Run').onLeave(function() {
            !c('ge')(r) && q(r);
        });
        return {
            remove: function s() {
                return q(r);
            }
        };
    }

    function o() {
        if (k) return;
        c('Event').listen(document.documentElement, 'focusout', p);
        c('Event').listen(document.documentElement, 'focusin', p);
        k = true;
    }

    function p(event) {
        var r = event.getTarget();
        if (typeof j[r.id] === 'function') {
            var s = event.type === 'focusin' || event.type === 'focus';
            j[r.id](s);
        }
    }

    function q(r) {
        if (j[r]) delete j[r];
    }
    f.exports = l;
}), null);
__d('errorCode', [], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i) {
        throw new Error('errorCode' + '("' + i + '"): This should not happen. Oh noes!');
    }
    f.exports = h;
}), null);
__d('AsyncResponse', ['errorCode', 'invariant', 'AsyncFeature', 'Bootloader', 'DTSG', 'SiteData'], (function a(b, c, d, e, f, g, h, i) {
    function j(l) {}

    function k(l, m) {
        'use strict';
        this.__sf = '';
        this.error = 0;
        this.errorSummary = null;
        this.errorDescription = null;
        this.onload = null;
        this.replay = false;
        this.payload = m;
        this.request = l;
        this.silentError = false;
        this.transientError = false;
        this.blockedAction = false;
        this.is_last = true;
    }
    k.prototype.getRequest = function() {
        'use strict';
        return this.request;
    };
    k.prototype.getPayload = function() {
        'use strict';
        return this.payload;
    };
    k.prototype.getError = function() {
        'use strict';
        return this.error;
    };
    k.prototype.getErrorSummary = function() {
        'use strict';
        return this.errorSummary;
    };
    k.prototype.setErrorSummary = function(l) {
        'use strict';
        l = l === undefined ? null : l;
        this.errorSummary = l;
        return this;
    };
    k.prototype.getErrorDescription = function() {
        'use strict';
        return this.errorDescription;
    };
    k.prototype.getErrorIsWarning = function() {
        'use strict';
        return !!this.errorIsWarning;
    };
    k.prototype.isTransient = function() {
        'use strict';
        return !!this.transientError;
    };
    k.prototype.isBlockedAction = function() {
        'use strict';
        return !!this.blockedAction;
    };
    k.prototype.logError = function(l, m) {
        'use strict';
        var n = b.ErrorSignal;
        if (n && this.request) {
            var o = this.request.getURI(),
                p = {
                    err_code: this.error,
                    vip: c('SiteData').vip || '-',
                    path: o || '-',
                    aid: this.request ? this.request.userActionID : null
                };
            if (m) {
                p.duration = m.duration;
                p.xfb_ip = m.xfb_ip;
            }
            if (o && o.indexOf('scribe_endpoint.php') != -1) l = 'async_error_double';
            n.sendErrorSignal(l, JSON.stringify(p));
        }
    };
    k.prototype.logErrorByGroup = function(l, m) {
        'use strict';
        if (Math.floor(Math.random() * m) === 0)
            if (this.error == 1357010 || this.error < 15000) {
                this.logError('async_error_oops_' + l);
            } else this.logError('async_error_logic_' + l);
    };
    k.prototype.SERVER_HAS_FEATURE = function(l) {
        'use strict';
        i(0);
    };
    k.prototype.__serverHasFeatureImpl = function(l) {
        'use strict';
        if (typeof this.__sf !== 'string' || this.__sf === '') {
            j('AsyncResponse does not contain a `__sf` (server features) property!');
            return true;
        }
        return c('AsyncFeature').__getBitMapFromString(this.__sf).contains(l);
    };
    k.defaultErrorHandler = function(l) {
        'use strict';
        try {
            if (!l.silentError) {
                k.verboseErrorHandler(l);
            } else l.logErrorByGroup('silent', 10);
        } catch (m) {
            alert(l);
        }
    };
    k.verboseErrorHandler = function(l) {
        'use strict';
        c('Bootloader').loadModules(["ExceptionDialog"], function(m) {
            return m.showAsyncError(l);
        }, 'AsyncResponse');
    };
    k.renewDTSG = function(l) {
        'use strict';
        c('DTSG').setToken(l);
    };
    f.exports = k;
}), null);
__d('HTTPErrors', ['emptyFunction'], (function a(b, c, d, e, f, g) {
    var h = {
        get: c('emptyFunction'),
        getAll: c('emptyFunction')
    };
    f.exports = h;
}), null);
__d('JSCC', [], (function a(b, c, d, e, f, g) {
    var h = {};

    function i(k) {
        var l, m = false;
        return function() {
            if (!m) {
                l = k();
                m = true;
            }
            return l;
        };
    }
    var j = {
        get: function k(l) {
            if (!h[l]) throw new Error('JSCC entry is missing');
            return h[l]();
        },
        init: function k(l) {
            for (var m in l) h[m] = i(l[m]);
            return function n() {
                for (var o in l) delete h[o];
            };
        }
    };
    f.exports = j;
}), null);
__d("PixelRatioConst", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        cookieName: "dpr"
    };
}), null);
__d('Promise', ['invariant', 'TimeSlice', 'setImmediate', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g, h) {
    'use strict';

    function i() {}
    var j = null,
        k = {};

    function l(da) {
        try {
            return da.then;
        } catch (ea) {
            j = ea;
            return k;
        }
    }

    function m(da, ea) {
        try {
            return da(ea);
        } catch (fa) {
            j = fa;
            return k;
        }
    }

    function n(da, ea, fa) {
        try {
            da(ea, fa);
        } catch (ga) {
            j = ga;
            return k;
        }
    }

    function o(da) {
        if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
        if (typeof da !== 'function') throw new TypeError('not a function');
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (da === i) return;
        v(da, this);
    }
    o._noop = i;
    o.prototype.then = function(da, ea) {
        if (this.constructor !== o) return p(this, da, ea);
        var fa = new o(i);
        q(this, new u(da, ea, fa));
        return fa;
    };

    function p(da, ea, fa) {
        return new da.constructor(function(ga, ha) {
            var ia = new o(i);
            ia.then(ga, ha);
            q(da, new u(ea, fa, ia));
        });
    }

    function q(da, ea) {
        while (da._state === 3) da = da._value;
        if (da._state === 0) {
            da._deferreds.push(ea);
            return;
        }
        c('setImmediate')(function fa() {
            var ga = da._state === 1 ? ea.onFulfilled : ea.onRejected;
            if (ga === null) {
                ea.continuation(function() {});
                if (da._state === 1) {
                    r(ea.promise, da._value);
                } else s(ea.promise, da._value);
                return;
            }
            var ha = m(ea.continuation.bind(null, ga), da._value);
            if (ha === k) {
                s(ea.promise, j);
            } else r(ea.promise, ha);
        });
    }

    function r(da, ea) {
        if (ea === da) return s(da, new TypeError('A promise cannot be resolved with itself.'));
        if (ea && (typeof ea === 'object' || typeof ea === 'function')) {
            var fa = l(ea);
            if (fa === k) return s(da, j);
            if (fa === da.then && ea instanceof o) {
                da._state = 3;
                da._value = ea;
                t(da);
                return;
            } else if (typeof fa === 'function') {
                v(fa.bind(ea), da);
                return;
            }
        }
        da._state = 1;
        da._value = ea;
        t(da);
    }

    function s(da, ea) {
        da._state = 2;
        da._value = ea;
        t(da);
    }

    function t(da) {
        for (var ea = 0; ea < da._deferreds.length; ea++) q(da, da._deferreds[ea]);
        da._deferreds = null;
    }

    function u(da, ea, fa) {
        this.onFulfilled = typeof da === 'function' ? da : null;
        this.onRejected = typeof ea === 'function' ? ea : null;
        this.continuation = c('TimeSlice').getGuardedContinuation('Promise Handler');
        this.promise = fa;
    }

    function v(da, ea) {
        var fa = false,
            ga = n(da, function(ha) {
                if (fa) return;
                fa = true;
                r(ea, ha);
            }, function(ha) {
                if (fa) return;
                fa = true;
                s(ea, ha);
            });
        if (!fa && ga === k) {
            fa = true;
            s(ea, j);
        }
    }
    o.prototype.done = function(da, ea) {
        var fa = arguments.length ? this.then.apply(this, arguments) : this;
        fa.then(null, function(ga) {
            c('setTimeoutAcrossTransitions')(function() {
                throw ga;
            }, 0);
        });
    };
    var w = ca(true),
        x = ca(false),
        y = ca(null),
        z = ca(undefined),
        aa = ca(0),
        ba = ca('');

    function ca(da) {
        var ea = new o(o._noop);
        ea._state = 1;
        ea._value = da;
        return ea;
    }
    o.resolve = function(da) {
        if (da instanceof o) return da;
        if (da === null) return y;
        if (da === undefined) return z;
        if (da === true) return w;
        if (da === false) return x;
        if (da === 0) return aa;
        if (da === '') return ba;
        if (typeof da === 'object' || typeof da === 'function') try {
            var fa = da.then;
            if (typeof fa === 'function') return new o(fa.bind(da));
        } catch (ea) {
            return new o(function(ga, ha) {
                ha(ea);
            });
        }
        return ca(da);
    };
    o.all = function(da) {
        if (!Array.isArray(da)) da = [new o(function() {
            throw new TypeError('Promise.all must be passed an iterable.');
        })];
        var ea = Array.prototype.slice.call(da);
        return new o(function(fa, ga) {
            if (ea.length === 0) return fa([]);
            var ha = ea.length;

            function ia(ka, la) {
                if (la && (typeof la === 'object' || typeof la === 'function'))
                    if (la instanceof o && la.then === o.prototype.then) {
                        while (la._state === 3) la = la._value;
                        if (la._state === 1) return ia(ka, la._value);
                        if (la._state === 2) ga(la._value);
                        la.then(function(oa) {
                            ia(ka, oa);
                        }, ga);
                        return;
                    } else {
                        var ma = la.then;
                        if (typeof ma === 'function') {
                            var na = new o(ma.bind(la));
                            na.then(function(oa) {
                                ia(ka, oa);
                            }, ga);
                            return;
                        }
                    }
                ea[ka] = la;
                if (--ha === 0) fa(ea);
            }
            for (var ja = 0; ja < ea.length; ja++) ia(ja, ea[ja]);
        });
    };
    o.reject = function(da) {
        return new o(function(ea, fa) {
            fa(da);
        });
    };
    o.race = function(da) {
        return new o(function(ea, fa) {
            da.forEach(function(ga) {
                o.resolve(ga).then(ea, fa);
            });
        });
    };
    o.prototype['catch'] = function(da) {
        return this.then(null, da);
    };
    f.exports = o;
}), null);
__d('SessionName', ['SessionNameConfig', 'isInIframe'], (function a(b, c, d, e, f, g) {
    var h = '_e_',
        i;

    function j() {
        i = (window.name || '').toString();
        if (i.length == 7 && i.substr(0, 3) == h) {
            i = i.substr(3);
        } else {
            i = c('SessionNameConfig').seed || '';
            if (!c('isInIframe')()) window.name = h + i;
        }
    }
    f.exports = {
        TOKEN: h,
        getName: function k() {
            if (i === undefined) j();
            return i;
        }
    };
}), null);
__d('WebPixelRatio', ['Cookie', 'DOMEventListener', 'PixelRatioConst', 'Run'], (function a(b, c, d, e, f, g) {
    var h = c('PixelRatioConst').cookieName,
        i, j = false;

    function k() {
        return window.devicePixelRatio || 1;
    }

    function l() {
        c('Cookie').set(h, k(), null);
    }

    function m() {
        c('Cookie').clear(h);
    }

    function n() {
        var p = k();
        if (p !== i) {
            l();
        } else m();
    }
    var o = {
        startDetecting: function p(q) {
            i = q || 1;
            m();
            if (j) return;
            j = true;
            if ('onpagehide' in window) {
                c('DOMEventListener').add(window, 'pagehide', n);
            } else c('Run').onBeforeUnload(n, false);
        },
        getOriginalValue: function p() {
            return i || k();
        }
    };
    f.exports = o;
}), null);
__d('getCrossOriginTransport', ['invariant', 'ex'], (function a(b, c, d, e, f, g, h) {
    function i() {
        try {
            var k = new XMLHttpRequest();
            if (!('withCredentials' in k) && typeof XDomainRequest !== 'undefined') k = new XDomainRequest();
            return k;
        } catch (j) {
            throw new Error(c('ex')('getCrossOriginTransport: %s', j.message));
        }
    }
    i.withCredentials = function() {
        var j = i();
        'withCredentials' in j || h(0);
        var k = j.open;
        j.open = function() {
            k.apply(this, arguments);
            this.withCredentials = true;
        };
        return j;
    };
    f.exports = i;
}), null);
__d('ZeroRewrites', ['getSameOriginTransport', 'getCrossOriginTransport', 'isFacebookURI', 'URI', 'ZeroRewriteRules'], (function a(b, c, d, e, f, g) {
    var h = {
        rewriteURI: function i(j) {
            if (!c('isFacebookURI')(j) || h._isWhitelisted(j)) return j;
            var k = h._getRewrittenSubdomain(j);
            if (k !== null && k !== undefined) j = j.setSubdomain(k);
            return j;
        },
        getTransportBuilderForURI: function i(j) {
            return h._isRewritten(j) ? c('getCrossOriginTransport').withCredentials : c('getSameOriginTransport');
        },
        isRewriteSafe: function i(j) {
            if (Object.keys(c('ZeroRewriteRules').rewrite_rules).length === 0 || !c('isFacebookURI')(j)) return false;
            var k = h._getCurrentURI().getDomain(),
                l = new(c('URI'))(j).qualify().getDomain();
            return k === l || h._isRewritten(j);
        },
        _isWhitelisted: function i(j) {
            var k = j.getPath();
            if (!k.endsWith('/')) k += '/';
            return c('ZeroRewriteRules').whitelist && c('ZeroRewriteRules').whitelist[k] == 1;
        },
        _getRewrittenSubdomain: function i(j) {
            var k = new(c('URI'))(j).qualify().getSubdomain();
            return c('ZeroRewriteRules').rewrite_rules[k];
        },
        _isRewritten: function i(j) {
            j = new(c('URI'))(j).qualify();
            if (Object.keys(c('ZeroRewriteRules').rewrite_rules).length === 0 || !c('isFacebookURI')(j) || h._isWhitelisted(j)) return false;
            var k = j.getSubdomain(),
                l = h._getCurrentURI(),
                m = h._getRewrittenSubdomain(l);
            return j.getDomain() !== l.getDomain() && k === m;
        },
        _getCurrentURI: function i() {
            return new(c('URI'))('/').qualify();
        }
    };
    f.exports = h;
}), null);
__d('bind', [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = Array.prototype.slice.call(arguments, 2);
        if (typeof j != 'string') return Function.prototype.bind.apply(j, [i].concat(k));

        function l() {
            var m = k.concat(Array.prototype.slice.call(arguments));
            if (i[j]) return i[j].apply(i, m);
        }
        l.toString = function() {
            return 'bound lazily: ' + i[j];
        };
        return l;
    }
    f.exports = h;
}), null);
__d("executeAfter", [], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        return function l() {
            i.apply(k || this, arguments);
            j.apply(k || this, arguments);
        };
    }
    f.exports = h;
}), null);
__d('BGSyncConst', [], (function a(b, c, d, e, f, g) {
    f.exports = {
        msgTag: {
            requestID: 'request-bg-sync-id',
            requestUpload: 'request-bg-sync-upload',
            removeRequest: 'remove-cached-request',
            queueRequest: 'queue-request'
        },
        reqTag: {
            banzai: 'banzai'
        }
    };
}), null);
__d('CurrentUser', ['Cookie', 'CurrentUserInitialData'], (function a(b, c, d, e, f, g) {
    var h = {
        getID: function i() {
            return c('CurrentUserInitialData').USER_ID;
        },
        getAccountID: function i() {
            return c('CurrentUserInitialData').ACCOUNT_ID;
        },
        isLoggedIn: function i() {
            return c('CurrentUserInitialData').USER_ID && c('CurrentUserInitialData').USER_ID !== '0';
        },
        isLoggedInNow: function i() {
            if (!h.isLoggedIn()) return false;
            if (c('CurrentUserInitialData').IS_INTERN_SITE) return true;
            if (c('CurrentUserInitialData').IS_WORK_USER) return true;
            if (c('CurrentUserInitialData').ORIGINAL_USER_ID) return c('CurrentUserInitialData').ORIGINAL_USER_ID === c('Cookie').get('c_user');
            return c('CurrentUserInitialData').USER_ID === c('Cookie').get('c_user');
        },
        isEmployee: function i() {
            return !!c('CurrentUserInitialData').IS_EMPLOYEE;
        },
        hasWorkUser: function i() {
            return !!c('CurrentUserInitialData').HAS_WORK_USER;
        },
        isWorkUser: function i() {
            return !!c('CurrentUserInitialData').IS_WORK_USER;
        },
        isGray: function i() {
            return !!c('CurrentUserInitialData').IS_GRAY;
        },
        isUnderage: function i() {
            return !!c('CurrentUserInitialData').IS_UNDERAGE;
        }
    };
    f.exports = h;
}), null);
__d('Miny', [], (function a(b, c, d, e, f, g) {
    var h = 'Miny1',
        i = 'wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split(''),
        j = {
            encode: function k(l) {
                if (/^$|[~\\]|__proto__/.test(l)) return l;
                var m = l.match(/\w+|\W+/g),
                    n, o = Object.create(null);
                for (n = 0; n < m.length; n++) o[m[n]] = (o[m[n]] || 0) + 1;
                var p = Object.keys(o);
                p.sort(function(s, t) {
                    return o[t] - o[s];
                });
                for (n = 0; n < p.length; n++) {
                    var q = (n - n % 32) / 32;
                    o[p[n]] = q ? q.toString(32) + i[n % 32] : i[n % 32];
                }
                var r = '';
                for (n = 0; n < m.length; n++) r += o[m[n]];
                p.unshift(h, p.length);
                p.push(r);
                return p.join('~');
            }
        };
    f.exports = j;
}), null);
__d('QueryString', [], (function a(b, c, d, e, f, g) {
    function h(l) {
        var m = [];
        Object.keys(l).sort().forEach(function(n) {
            var o = l[n];
            if (typeof o === 'undefined') return;
            if (o === null) {
                m.push(n);
                return;
            }
            m.push(encodeURIComponent(n) + '=' + encodeURIComponent(o));
        });
        return m.join('&');
    }

    function i(l, m) {
        var n = {};
        if (l === '') return n;
        var o = l.split('&');
        for (var p = 0; p < o.length; p++) {
            var q = o[p].split('=', 2),
                r = decodeURIComponent(q[0]);
            if (m && n.hasOwnProperty(r)) throw new URIError('Duplicate key: ' + r);
            n[r] = q.length === 2 ? decodeURIComponent(q[1]) : null;
        }
        return n;
    }

    function j(l, m) {
        return l + (l.indexOf('?') !== -1 ? '&' : '?') + (typeof m === 'string' ? m : k.encode(m));
    }
    var k = {
        encode: h,
        decode: i,
        appendToUrl: j
    };
    f.exports = k;
}), null);
__d("ClientServiceWorkerMessage", [], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        "use strict";
        this.$ClientServiceWorkerMessage1 = i;
        this.$ClientServiceWorkerMessage2 = j;
        this.$ClientServiceWorkerMessage3 = k;
    }
    h.prototype.sendViaController = function() {
        "use strict";
        if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
        var i = new self.MessageChannel();
        if (this.$ClientServiceWorkerMessage3) i.port1.onmessage = this.$ClientServiceWorkerMessage3;
        navigator.serviceWorker.controller.postMessage({
            command: this.$ClientServiceWorkerMessage1,
            data: this.$ClientServiceWorkerMessage2
        }, [i.port2]);
    };
    f.exports = h;
}), null);
__d('SharedClientServiceWorkerBackgroundSync', ['BGSyncConst', 'ClientServiceWorkerMessage', 'DOM', 'memoize', 'ServiceWorkerBackgroundSyncGK'], (function a(b, c, d, e, f, g) {
    var h = c('memoize')(function() {
        var l = new Uint32Array(1);
        return self.crypto.getRandomValues(l)[0].toString().substring(2, 16);
    });

    function i(event, l, m) {
        var n = h(),
            o = event.data && event.data.data ? event.data.data : {},
            p = l.toString();
        if (n && o.param) {
            if (p.indexOf('?') > -1) {
                p += '&';
            } else p += '?';
            p = '' + p + o.param + '&client_id=' + n;
        }
        if (m) m(p, o);
    }

    function j(l, m, n, o) {
        new(c('ClientServiceWorkerMessage'))('bgSync', {
            clientID: h(),
            data: n,
            msgTag: l,
            reqTag: m
        }, o).sendViaController();
    }
    var k = {
        getBackgroundSyncUri: function l(m, n, o, p) {
            if (k.isBackgroundSyncAvailable()) {
                j(c('BGSyncConst').msgTag.requestID, n, o, function(event) {
                    return i(event, m, p);
                });
            } else if (p) p(m, o);
        },
        isBackgroundSyncAvailable: function l() {
            return (self && 'serviceWorker' in self.navigator && 'SyncManager' in self && !!self.navigator.serviceWorker.controller && c('ServiceWorkerBackgroundSyncGK').background_sync_sw);
        },
        makeFileList: function l(m) {
            var n = {},
                o = c('DOM').scry(m, 'input'),
                p = 0;
            for (var q = o, r = Array.isArray(q), s = 0, q = r ? q : q[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var t;
                if (r) {
                    if (s >= q.length) break;
                    t = q[s++];
                } else {
                    s = q.next();
                    if (s.done) break;
                    t = s.value;
                }
                var u = t,
                    v = u.files;
                if (v)
                    for (var w = v, x = Array.isArray(w), y = 0, w = x ? w : w[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                        var z;
                        if (x) {
                            if (y >= w.length) break;
                            z = w[y++];
                        } else {
                            y = w.next();
                            if (y.done) break;
                            z = y.value;
                        }
                        var aa = z;
                        n[p++] = aa;
                    }
            }
            return n;
        },
        makeFormData: function l(m) {
            var n = c('DOM').convertFormToDictionary(m),
                o = k.makeFileList(m),
                p = new FormData();
            Object.values(o).forEach(function(r) {
                p.append('filelist[]', r);
            });
            for (var q in n) p.append(q, n[q]);
            return p;
        },
        postFailureHandler: function l(m, n) {
            j(c('BGSyncConst').msgTag.requestUpload, n, null, null);
        },
        postSuccessHandler: function l(m, n, o) {
            j(c('BGSyncConst').msgTag.removeRequest, n, {
                bgSyncID: o
            }, null);
        },
        queueRequest: function l(m, n) {
            if (k.isBackgroundSyncAvailable()) j(c('BGSyncConst').msgTag.queueRequest, n, m, null);
        }
    };
    f.exports = k;
}), null);
__d('getAsyncHeaders', ['isFacebookURI', 'ZeroCategoryHeader'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = {};
        if (c('isFacebookURI')(i) && c('ZeroCategoryHeader').value) j[c('ZeroCategoryHeader').header] = c('ZeroCategoryHeader').value;
        return j;
    }
    f.exports = h;
}), null);
__d('ServiceWorkerBackgroundSyncRequest', ['getAsyncHeaders', 'SharedClientServiceWorkerBackgroundSync', 'URI', 'ZeroRewrites'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        'use strict';
        this.setMethod('POST');
        this.setPostData(null);
        this.setTag(i);
        this.setBgSyncID('default');
        if (j !== undefined) this.setURI(j);
    }
    h.prototype.queueRequest = function() {
        'use strict';
        if (this.$ServiceWorkerBackgroundSyncRequest4 === undefined) return;
        c('SharedClientServiceWorkerBackgroundSync').getBackgroundSyncUri(this.getURI(), this.$ServiceWorkerBackgroundSyncRequest2, null, function(i, j) {
            return this.$ServiceWorkerBackgroundSyncRequest8(i, j);
        }.bind(this));
    };
    h.prototype.send = function() {
        'use strict';
        if (this.$ServiceWorkerBackgroundSyncRequest4 === undefined) return;
        c('SharedClientServiceWorkerBackgroundSync').getBackgroundSyncUri(this.getURI(), this.$ServiceWorkerBackgroundSyncRequest2, null, function(i, j) {
            return this.$ServiceWorkerBackgroundSyncRequest9(i, j);
        }.bind(this));
    };
    h.prototype.setBgSyncID = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest1 = i;
        return this;
    };
    h.prototype.getBgSyncID = function() {
        'use strict';
        return this.$ServiceWorkerBackgroundSyncRequest1;
    };
    h.prototype.setMethod = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest3 = i;
        return this;
    };
    h.prototype.setPostData = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest5 = i;
        return this;
    };
    h.prototype.setTag = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest2 = i;
        return this;
    };
    h.prototype.getTag = function() {
        'use strict';
        return this.$ServiceWorkerBackgroundSyncRequest2;
    };
    h.prototype.setURI = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest4 = c('ZeroRewrites').rewriteURI(new(c('URI'))(i));
        return this;
    };
    h.prototype.getURI = function() {
        'use strict';
        return this.$ServiceWorkerBackgroundSyncRequest4.getQualifiedURI().toString();
    };
    h.prototype.setErrorHandler = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest6 = i;
        return this;
    };
    h.prototype.setSuccessHandler = function(i) {
        'use strict';
        this.$ServiceWorkerBackgroundSyncRequest7 = i;
        return this;
    };
    h.prototype.$ServiceWorkerBackgroundSyncRequest8 = function(i, j) {
        'use strict';
        this.setBgSyncID(j.bgSyncID);
        var k = new Blob([this.$ServiceWorkerBackgroundSyncRequest5], {
                type: 'application/x-www-form-urlencoded'
            }),
            l = {
                request: {
                    body: k,
                    credentials: 'include',
                    headers: c('getAsyncHeaders')(new(c('URI'))(i)),
                    method: this.$ServiceWorkerBackgroundSyncRequest3,
                    referrer: self.location.href,
                    registeredTime: Date.now(),
                    tryCount: 1,
                    url: i
                },
                bgSyncID: this.getBgSyncID()
            };
        c('SharedClientServiceWorkerBackgroundSync').queueRequest(l, this.$ServiceWorkerBackgroundSyncRequest2);
    };
    h.prototype.$ServiceWorkerBackgroundSyncRequest9 = function(i, j) {
        'use strict';
        if (c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()) this.setBgSyncID(j.bgSyncID);
        var k = c('ZeroRewrites').getTransportBuilderForURI(this.$ServiceWorkerBackgroundSyncRequest4)();
        k.open(this.$ServiceWorkerBackgroundSyncRequest3, this.$ServiceWorkerBackgroundSyncRequest4.toString(), true);
        k.onreadystatechange = function() {
            if (k.readyState >= 4) {
                var l = void 0;
                try {
                    l = k.status;
                } catch (m) {
                    l = 0;
                }
                if (l === 200) {
                    this.$ServiceWorkerBackgroundSyncRequest10(k.responseText);
                } else this.$ServiceWorkerBackgroundSyncRequest11(k.statusText);
            }
        }.bind(this);
        k.send(this.$ServiceWorkerBackgroundSyncRequest5);
    };
    h.prototype.$ServiceWorkerBackgroundSyncRequest11 = function(i) {
        'use strict';
        if (this.$ServiceWorkerBackgroundSyncRequest6) this.$ServiceWorkerBackgroundSyncRequest6(i);
        if (c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()) c('SharedClientServiceWorkerBackgroundSync').postFailureHandler(i, this.$ServiceWorkerBackgroundSyncRequest2);
    };
    h.prototype.$ServiceWorkerBackgroundSyncRequest10 = function(i) {
        'use strict';
        if (this.$ServiceWorkerBackgroundSyncRequest7) this.$ServiceWorkerBackgroundSyncRequest7(i);
        if (c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()) c('SharedClientServiceWorkerBackgroundSync').postSuccessHandler(i, this.$ServiceWorkerBackgroundSyncRequest2, this.$ServiceWorkerBackgroundSyncRequest1);
    };
    f.exports = h;
}), null);
__d('BanzaiAdapter', ['Arbiter', 'CurrentUser', 'Miny', 'QueryString', 'Run', 'SiteData', 'UserAgent', 'URI', 'ZeroRewrites', 'BGSyncConst', 'ServiceWorkerBackgroundSyncRequest', 'SharedClientServiceWorkerBackgroundSync', 'getAsyncParams', 'setTimeoutAcrossTransitions', 'BanzaiConfig'], (function a(b, c, d, e, f, g) {
    var h = [],
        i = new(c('Arbiter'))(),
        j = '/ajax/bz',
        k = 'POST',
        l = {},
        m = l.adapter = {
            config: c('BanzaiConfig'),
            endpoint: j,
            getUserID: function n() {
                return c('CurrentUser').getID();
            },
            inform: function n(o) {
                i.inform(o);
            },
            subscribe: function n(o, p) {
                return i.subscribe(o, p);
            },
            cleanup: function n() {
                var o = h;
                h = [];
                o.forEach(function(p) {
                    if (p.readyState < 4) p.abort();
                });
            },
            readyToSend: function n() {
                return c('UserAgent').isBrowser('IE <= 8') || navigator.onLine;
            },
            send: function n(o, p, q, r) {
                if (c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()) {
                    var s = new(c('ServiceWorkerBackgroundSyncRequest'))(c('BGSyncConst').reqTag.banzai);
                    s.setURI(new(c('URI'))(j));
                    s.setMethod(k);
                    s.setSuccessHandler(function() {
                        if (p) p();
                        if (!r) m.inform(l.OK);
                    });
                    s.setErrorHandler(function(v) {
                        if (q) q(v.status);
                        if (!r) m.inform(l.ERROR);
                    });
                    s.setPostData(m.prepForTransit(o));
                    s.send();
                    return;
                }
                var t = c('ZeroRewrites').rewriteURI(new(c('URI'))(j)),
                    u = c('ZeroRewrites').getTransportBuilderForURI(t)();
                u.open(k, t.toString(), true);
                u.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                u.onreadystatechange = function() {
                    if (u.readyState >= 4) {
                        var v;
                        try {
                            v = u.status;
                        } catch (w) {
                            v = 0;
                        }
                        if (v == 200) {
                            if (p) p();
                            if (!r) m.inform(l.OK);
                        } else {
                            if (q) q(v);
                            if (!r) m.inform(l.ERROR);
                        }
                    }
                };
                h.push(u);
                u.send(m.prepForTransit(o));
            },
            addRequestAuthData: function n(o) {
                return o;
            },
            prepForTransit: function n(o) {
                var p = c('getAsyncParams')(k);
                p.q = JSON.stringify(o);
                p.ts = Date.now();
                p.ph = c('SiteData').push_phase;
                if (l.FBTRACE) p.fbtrace = l.FBTRACE;
                if (l.isEnabled('miny_compression')) {
                    var q = Date.now(),
                        r = c('Miny').encode(p.q);
                    if (r.length < p.q.length) {
                        p.q = r;
                        p.miny_encode_ms = Date.now() - q;
                    }
                }
                return c('QueryString').encode(p);
            },
            setHooks: function n() {},
            setUnloadHook: function n() {
                c('Run').onAfterUnload(l._unload);
            },
            onUnload: function n(o) {
                c('Run').onAfterUnload(o);
            },
            isOkToSendViaBeacon: function n() {
                return true;
            },
            queueRequest: function n(o) {
                var p = new(c('ServiceWorkerBackgroundSyncRequest'))(c('BGSyncConst').reqTag.banzai, new(c('URI'))(j).getQualifiedURI());
                p.setMethod(k);
                p.setPostData(m.prepForTransit(o));
                p.queueRequest();
            }
        };
    f.exports = l;
}), null);
__d('BanzaiServiceWorker', ['BanzaiAdapter', 'BGSyncConst', 'setTimeoutAcrossTransitions', 'SharedClientServiceWorkerBackgroundSync', 'ServiceWorkerBackgroundSyncBanzaiGK'], (function a(b, c, d, e, f, g) {
    var h = c('BanzaiAdapter').adapter,
        i = 60000,
        j = void 0,
        k = void 0;

    function l(o) {
        var p = Date.now() + o;
        if (!k || p < k) {
            k = p;
            clearTimeout(j);
            j = c('setTimeoutAcrossTransitions')(n.sync, o);
        }
    }

    function m(o) {
        h.queueRequest(o);
    }
    var n = {
        flush: function o() {
            clearTimeout(j);
            j = 0;
            n.sync();
        },
        isEnabled: function o() {
            return (c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable() && c('ServiceWorkerBackgroundSyncBanzaiGK').sw_background_sync_banzai);
        },
        send: function o(p, q, r, s) {
            if (q) {
                h.send(p);
                if (!s) return;
            }
            m(p);
            l(r);
        },
        sync: function o() {
            k = null;
            l(i);
            c('SharedClientServiceWorkerBackgroundSync').postFailureHandler(null, c('BGSyncConst').reqTag.banzai);
        }
    };
    f.exports = n;
}), null);
__d("FBJSON", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        parse: JSON.parse,
        stringify: JSON.stringify
    };
}), null);
__d('BigPipePlugins', ['DataStore'], (function a(b, c, d, e, f, g) {
    h.runPluginOnPagelet = function(i) {
        'use strict';
        h.getPluginList().forEach(function(j) {
            j(i);
        });
    };
    h.getPluginList = function() {
        'use strict';
        return [h.$BigPipePlugins1];
    };
    h.$BigPipePlugins1 = function(i) {
        'use strict';
        if (!i) return;
        var j = i.querySelectorAll('div[data-fte]');
        for (var k = 0, l = j.length; k < l; k++) h.$BigPipePlugins2(j[k], 'data-ft', 'data-ft');
    };
    h.$BigPipePlugins2 = function(i, j, k) {
        'use strict';
        var l = i.getAttribute(j);
        if (l) {
            c('DataStore').set(i, k, l);
            i.removeAttribute(j);
        }
    };

    function h() {
        'use strict';
    }
    f.exports = h;
}), null);
__d("PageletEventConstsJS", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        ARRIVE_START: "prearrive",
        ARRIVE_END: "arrive",
        CSS_START: "css",
        CSS_END: "css_load",
        DISPLAY_START: "display_start",
        DISPLAY_END: "display",
        JS_START: "jsstart",
        JS_END: "jsdone",
        ONLOAD_START: "preonload",
        ONLOAD_END: "onload",
        SETUP: "setup"
    };
}), null);
__d('PageletSet', ['Arbiter'], (function a(b, c, d, e, f, g) {
    var h = {},
        i = {
            hasPagelet: function l(m) {
                return h.hasOwnProperty(m);
            },
            getPagelet: function l(m) {
                return h[m];
            },
            getOrCreatePagelet: function l(m) {
                if (!i.hasPagelet(m)) {
                    var n = new k(m);
                    h[m] = n;
                }
                return i.getPagelet(m);
            },
            getPageletIDs: function l() {
                return Object.keys(h);
            },
            removePagelet: function l(m) {
                if (i.hasPagelet(m)) {
                    h[m].destroy();
                    delete h[m];
                }
            }
        };

    function j(l, m) {
        return l.contains ? l.contains(m) : l.compareDocumentPosition(m) & 16;
    }

    function k(l) {
        'use strict';
        this.id = l;
        this._root = null;
        this._destructors = [];
        this.addDestructor(function m() {
            c('Arbiter').inform('pagelet/destroy', {
                id: this.id,
                root: this._root
            });
        }.bind(this));
    }
    k.prototype.setRoot = function(l) {
        'use strict';
        this._root = l;
    };
    k.prototype._getDescendantPagelets = function() {
        'use strict';
        var l = [];
        if (!this._root) return l;
        var m = i.getPageletIDs();
        for (var n = 0; n < m.length; n++) {
            var o = m[n];
            if (o === this.id) continue;
            var p = h[o];
            if (p._root && j(this._root, p._root)) l.push(p);
        }
        return l;
    };
    k.prototype.addDestructor = function(l) {
        'use strict';
        this._destructors.push(l);
    };
    k.prototype.destroy = function() {
        'use strict';
        var l = this._getDescendantPagelets();
        for (var m = 0; m < l.length; m++) {
            var n = l[m];
            if (i.hasPagelet(n.id)) i.removePagelet(n.id);
        }
        for (m = 0; m < this._destructors.length; m++) this._destructors[m]();
        if (this._root)
            while (this._root.firstChild) this._root.removeChild(this._root.firstChild);
    };
    f.exports = i;
}), null);
__d("__getCompileTime", [], (function a(b, c, d, e, f, g) {
    f.exports = {};
}), null);
__d("__getFactoryTime", [], (function a(b, c, d, e, f, g) {
    f.exports = {};
}), null);
__d("__getTotalFactories", [], (function a(b, c, d, e, f, g) {
    f.exports = {};
}), null);
__d('setTimeout', ['TimerStorage', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    f.exports = function() {
        for (var h = arguments.length, i = Array(h), j = 0; j < h; j++) i[j] = arguments[j];
        var k, l = i[0];
        i[0] = function() {
            c('TimerStorage').unset(c('TimerStorage').TIMEOUT, k);
            Function.prototype.apply.call(l, this, arguments);
        };
        k = c('setTimeoutAcrossTransitions').apply(b, i);
        c('TimerStorage').set(c('TimerStorage').TIMEOUT, k);
        return k;
    }.bind(this);
}), null);
__d('BigPipe', ['ix', 'Arbiter', 'BigPipeExperiments', 'BigPipePlugins', 'Bootloader', 'ErrorUtils', 'JSCC', 'PageEvents', 'PageletEventConstsJS', 'PageletSet', 'Run', 'ServerJS', 'TimeSlice', '$', 'ge', 'performanceAbsoluteNow', 'setTimeout', 'setTimeoutAcrossTransitions', '__getTotalFactories', '__getCompileTime', '__getFactoryTime'], (function a(b, c, d, e, f, g, h) {
    var i = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
        j = c('Arbiter').BEHAVIOR_STATE,
        k = c('Arbiter').BEHAVIOR_PERSISTENT,
        l = [],
        m = console.timeStamp && window.location.search.indexOf('pagelet_ts=1') > 0;

    function n(x, y) {
        if (x)
            for (var z = 0; z < x.length; z++) c('ErrorUtils').applyWithGuard(new Function(x[z]), y);
    }

    function o() {
        q.forEach(function(x) {
            return x.inform('release_pagelet_suspension');
        });
        q = [];
    }
    var p = 0,
        q = [];

    function r(x) {
        'use strict';
        Object.assign(this, {
            arbiter: c('Arbiter'),
            rootNodeID: 'content',
            lid: null,
            isAjax: false,
            domContentCallback: c('Run').__domContentCallback,
            onloadCallback: c('Run').__onloadCallback,
            domContentEvt: c('PageEvents').BIGPIPE_DOMREADY,
            onloadEvt: c('PageEvents').BIGPIPE_ONLOAD,
            forceFinish: false,
            _phaseDisplayEndCallbacks: [],
            _currentPhase: 0,
            _lastPhase: -1,
            _lastRealPhase: -1,
            _livePagelets: {},
            _displayDoneFired: false,
            _awaitingLIDEventQueue: []
        }, x);
        if (this.automatic) {
            this._relevant_instance = r._current_instance;
        } else r._current_instance = this;
        this._serverJS = new(c('ServerJS'))();
        this._serverJS.setServerFeatures(this.__sf);
        this._informEventExternal(r.Events.init, {
            arbiter: this.arbiter
        }, c('Arbiter'));
        this._displayDoneCallback = this.arbiter.registerCallback(function() {
            var y = this._captureUsageSnapshot();
            this._informEventExternal(r.Events.displayed, {
                rid: this.rid,
                ajax: this.isAjax,
                usageSnapshot: y
            });
        }.bind(this), ['display_done']);
        this.arbiter.registerCallback(this.domContentCallback, ['pagelet_displayed_all']);
        this._beginPhase(0);
        this.arbiter.registerCallback(this.onloadCallback, ['bigpipe_e2e_reported']);
        this._loadedCallback = this.arbiter.registerCallback(function() {
            this._informEventExternal(r.Events.loaded, {
                rid: this.rid,
                ajax: this.isAjax
            });
            this.arbiter.inform('bigpipe_e2e_reported', true);
        }.bind(this), ['pagelet_displayed_all']);
        this.arbiter.registerCallback(this._serverJS.cleanup.bind(this._serverJS), [this.onloadEvt]);
    }
    r.prototype._beginPhase = function(x) {
        'use strict';
        this._informEventExternal('phase_begin', {
            phase: x
        });
        this.arbiter.inform('phase_begin_' + x, true, j);
    };
    r.prototype._endPhase = function(x) {
        'use strict';
        this.arbiter.inform('phase_arrived_' + x, true, j);
        if (!this.isAjax) l.push(Date.now());
    };
    r.prototype._displayPageletHandler = function(x) {
        'use strict';
        if (this.displayCallback) {
            this.displayCallback(this._displayPagelet.bind(this, x));
        } else this._displayPagelet(x);
    };
    r.prototype._displayPagelet = function(x) {
        'use strict';
        this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_START, x);
        var y = this._getPagelet(x),
            z = [];
        for (var aa in x.content) {
            var ba = x.content[aa];
            if (x.append) aa = this._getPageletRootID(x);
            var ca = c('ge')(aa);
            if (!ca) continue;
            if (aa === y.id) y.setRoot(ca);
            if (ba) {
                if (x.append) {
                    u(ca, ba, z);
                } else if (ba.nodeType) {
                    ca.innerHTML = '';
                    u(ca, ba, z);
                } else {
                    ca.innerHTML = s(ba);
                    z.push(ca);
                }
                if (c('BigPipeExperiments').enable_bigpipe_plugins) c('BigPipePlugins').runPluginOnPagelet(ca);
            }
            var da = ca.getAttribute('data-referrer');
            if (!da) ca.setAttribute('data-referrer', aa);
        }
        x.displayed = true;
        if (x.jsmods) {
            var ea = this._serverJS.handlePartial(x.jsmods, {
                pagelet: x.id
            });
            y.addDestructor(ea.cancel.bind(ea));
        }
        var fa = [];
        z.forEach(function(ga) {
            if (typeof ga.getElementsByTagName === 'function') {
                var ha = ga.getElementsByTagName('img');
                for (var ia = 0; ia < ha.length; ia++) fa.push(ha[ia].src);
            }
        });
        if (fa.length > 0) this._informEventExternal('images_displayed', {
            pagelet: x.id,
            timeslice: c('TimeSlice').getContext().id,
            images: fa
        });
        this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_END, x);
        this.arbiter.inform(x.id + '_displayed', true, j);
    };
    r.prototype._captureUsageSnapshot = function() {
        'use strict';
        var x = window.__bodyWrapper;
        if (!x.getCodeUsage) return {};
        var y = babelHelpers['extends']({}, x.getCodeUsage()),
            z = document.body.outerHTML,
            aa = {};
        Array.from(document.styleSheets).forEach(function(ba) {
            if (ba.href) aa[ba.href] = true;
        });
        return {
            js_calls: y,
            document_html: z,
            stylesheets: aa
        };
    };
    r.prototype._onPhaseDisplayEnd = function() {
        'use strict';
        if (this._currentPhase === this._ttiPhase) {
            var x = c('Bootloader').__debug.predictedResources,
                y = c('Bootloader').__debug.requested,
                z = 0;
            for (var aa in y) z += !(aa in x);
            var ba = {
                    pre_tti_non_ef_resources: z
                },
                ca = this._captureUsageSnapshot();
            if (!this.isAjax) {
                ba.cjs_factory_count_tti = c('__getTotalFactories')();
                ba.cjs_compile_time_tti = c('__getCompileTime')();
                ba.cjs_factory_time_tti = c('__getFactoryTime')();
            }
            this._informEventExternal(r.Events.tti, {
                phase: this._ttiPhase,
                rid: this.rid,
                ajax: this.isAjax,
                metrics: ba,
                usageSnapshot: ca
            });
            this.arbiter.inform('tti_pagelet_displayed', true, j);
            if (this._secondFlushPayload) {
                this.loadSecondFlushPayload(this._secondFlushPayload);
                delete this._secondFlushPayload;
            }
        }
        if (this._isRelevant()) {
            if (this._currentPhase === this._lastRealPhase) this._fireDisplayDone();
            if (this._currentPhase === this._lastPhase) {
                if (!this._displayDoneFired) this._fireDisplayDone();
                this.arbiter.inform('pagelet_displayed_all', true, j);
            }
        }
        this._currentPhase++;
        if (i <= 8) {
            c('setTimeout')(this._beginPhase.bind(this, this._currentPhase), 20);
        } else this._beginPhase(this._currentPhase);
    };
    r.prototype._fireDisplayDone = function() {
        'use strict';
        this._displayDoneFired = true;
        this.arbiter.inform('display_done', true);
    };
    r.prototype._downloadJsForPagelet = function(x) {
        'use strict';
        this._informPageletEvent(c('PageletEventConstsJS').JS_START, x);
        c('Bootloader').loadResources(x.allResources || [], function y() {
            this._informPageletEvent(c('PageletEventConstsJS').JS_END, x);
            x.requires = x.requires || [];
            if (!this.isAjax || x.phase >= 1) x.requires.push('uipage_onload');
            var z = function() {
                    this._informPageletEvent(c('PageletEventConstsJS').ONLOAD_START, x);
                    if (this._isRelevantPagelet(x)) n(x.onload);
                    this._informPageletEvent(c('PageletEventConstsJS').ONLOAD_END, x);
                    this.arbiter.inform('pagelet_onload', true);
                    x.provides && this.arbiter.inform(x.provides, true, j);
                }.bind(this),
                aa = function() {
                    this._isRelevantPagelet(x) && n(x.onafterload);
                }.bind(this);
            this.arbiter.registerCallback(z, x.requires);
            this.arbiter.registerCallback(aa, [this.onloadEvt]);
        }.bind(this), false, x.id);
    };
    r.prototype._getPagelet = function(x) {
        'use strict';
        var y = this._getPageletRootID(x);
        return c('PageletSet').getPagelet(y);
    };
    r.prototype._getPageletRootID = function(x) {
        'use strict';
        var y = x.append;
        if (y) return y === 'bigpipe_root' ? this.rootNodeID : y;
        return Object.keys(x.content)[0] || null;
    };
    r.prototype._isRelevant = function() {
        'use strict';
        return this == r._current_instance || this.automatic && this._relevant_instance == r._current_instance || this.jsNonBlock || this.forceFinish || r._current_instance && r._current_instance.allowIrrelevantRequests;
    };
    r.prototype._isRelevantPagelet = function(x) {
        'use strict';
        if (!this._isRelevant()) return false;
        var y = this._getPageletRootID(x);
        return !!this._livePagelets[y];
    };
    r.prototype._informEventExternal = function(x, y, z) {
        'use strict';
        y = y || {};
        z = z || this.arbiter;
        y.ts = c('performanceAbsoluteNow')();
        if (m) console.timeStamp(x + ' ' + JSON.stringify(y));
        if (this.lid === null) {
            this._awaitingLIDEventQueue.push([z, x, y]);
        } else {
            y.lid = this.lid;
            z.inform(x, y, k);
        }
    };
    r.prototype._informPageletEvent = function(x, y) {
        'use strict';
        var z = {
            event: x,
            id: y.id
        };
        if (y.phase) z.phase = y.phase;
        if (y.categories) z.categories = y.categories;
        if (y.allResources) z.allResources = y.allResources;
        if (y.displayResources) z.displayResources = y.displayResources;
        this._informEventExternal('pagelet_event', z);
    };
    r.getCurrentInstance = function() {
        'use strict';
        return r._current_instance;
    };
    r.prototype.loadSecondFlushPayload = function(x) {
        'use strict';
        var y = {
            id: 'second_flush'
        };
        this._informPageletEvent(c('PageletEventConstsJS').CSS_START, y);
        this.arbiter.registerCallback(this._displayDoneCallback, ['pagelet_prefetch']);
        c('Bootloader').loadPredictedResourceMap(x.resources || {}, function() {
            this._informPageletEvent(c('PageletEventConstsJS').CSS_END, y);
            this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_START, y);
            if (x.jsmods) this._serverJS.handlePartial(x.jsmods);
            this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_END, y);
            this.arbiter.inform('pagelet_prefetch', true);
        }.bind(this));
    };
    r.suspendPageletDisplay = function(x) {
        'use strict';
        var y = c('setTimeoutAcrossTransitions')(function() {
                z();
            }, x),
            z = function aa() {
                if (!y) return;
                clearTimeout(y);
                y = null;
                p--;
                if (p === 0) o();
            };
        p++;
        return z;
    };
    Object.assign(r.prototype, {
        beforePageletArrive: function x(y) {
            c('TimeSlice').guard(function() {
                return (this._informPageletEvent(c('PageletEventConstsJS').ARRIVE_START, {
                    id: y
                }));
            }.bind(this), 'beforePageletArrive ' + y, {
                root: true
            })();
        },
        setSecondFlushPayload: function x(y) {
            if (y.immediate_start || this._ttiPhase != undefined && this._currentPhase > this._ttiPhase) {
                this.loadSecondFlushPayload(y);
            } else this._secondFlushPayload = y;
        },
        setPageID: function x(y) {
            this.lid = y;
            this._awaitingLIDEventQueue.forEach(function(z) {
                var aa = z[0],
                    ba = z[1],
                    ca = z[2];
                ca.lid = y;
                aa.inform(ba, ca, k);
            });
            this._awaitingLIDEventQueue = [];
        },
        onPageletArrive: c('ErrorUtils').guard(function(x) {
            this._informPageletEvent(c('PageletEventConstsJS').ARRIVE_END, x);
            x.content = x.content || {};
            if (c('BigPipeExperiments').preparse_content == 'on_arrive') {
                v(x);
            } else if (c('BigPipeExperiments').preparse_content == 'after_tti') {
                this.arbiter.registerCallback(function() {
                    return v(x);
                }, ['tti_pagelet_displayed']);
            } else if (c('BigPipeExperiments').preparse_content == 'on_idle') {
                if (b.requestIdleCallback) {
                    b.requestIdleCallback(function() {
                        return v(x);
                    });
                } else c('setTimeout')(function() {
                    return v(x);
                }, 1);
            } else if (c('BigPipeExperiments').preparse_content == 'on_idle_after_tti') {
                this.arbiter.registerCallback(function() {
                    if (b.requestIdleCallback) {
                        b.requestIdleCallback(function() {
                            return v(x);
                        });
                    } else c('setTimeout')(function() {
                        return v(x);
                    }, 1);
                }, ['tti_pagelet_displayed']);
            } else if (c('BigPipeExperiments').preparse_content == 'on_idle_after_tti_ric') this.arbiter.registerCallback(function() {
                if (b.requestIdleCallback) b.requestIdleCallback(function() {
                    return v(x);
                });
            }, ['tti_pagelet_displayed']);
            var y = x.phase;
            if (!this._phaseDisplayEndCallbacks[y]) this._phaseDisplayEndCallbacks[y] = this.arbiter.registerCallback(this._onPhaseDisplayEnd.bind(this), ['phase_arrived_' + y]);
            this.arbiter.registerCallback(this._phaseDisplayEndCallbacks[y], [x.id + '_displayed']);
            var z = this._getPageletRootID(x),
                aa = c('PageletSet').getOrCreatePagelet(z);
            if (x.last_pagelet) this._lastRealPhase = y;
            if (x.the_end) this._lastPhase = y;
            if (x.tti_phase !== undefined) this._ttiPhase = x.tti_phase;
            this._livePagelets[aa.id] = true;
            aa.addDestructor(function() {
                delete this._livePagelets[aa.id];
            }.bind(this));
            if (x.jscc_map) {
                var ba = (eval)(x.jscc_map),
                    ca = c('JSCC').init(ba);
                aa.addDestructor(ca);
            }
            c('Bootloader').setResourceMap(x.resource_map || {});
            if (x.bootloadable) c('Bootloader').enableBootload(x.bootloadable);
            h.add(x.ixData);
            this._informPageletEvent(c('PageletEventConstsJS').SETUP, x);
            var da = ['phase_begin_' + x.phase, x.id + '_css_end'];
            if (p > 0) {
                da.push('release_pagelet_suspension');
                q.push(this.arbiter);
            }(x.display_dependency || []).forEach(function(ia) {
                return da.push(ia + '_displayed');
            });
            if (x.display_group) {
                var ea = document.body.getElementsByClassName('pagelet-group');
                for (var fa = 0; fa < ea.length; fa++) {
                    var ga = ea[fa];
                    if (ga.id === x.id) break;
                    if (ga.getAttribute('data-display-group') === x.display_group) da.push(ga.id + '_displayed');
                }
            }
            this.arbiter.registerCallback(function() {
                return this._displayPageletHandler(x);
            }.bind(this), da);
            this.arbiter.registerCallback(function() {
                this._informPageletEvent(c('PageletEventConstsJS').CSS_START, x);
                var ia = x.displayResources || [];
                c('Bootloader').loadResources(ia, function ja() {
                    this._informPageletEvent(c('PageletEventConstsJS').CSS_END, x);
                    this.arbiter.inform(x.id + '_css_end', true, j);
                }.bind(this), false, x.id);
            }.bind(this), ['phase_begin_' + y]);
            this.arbiter.registerCallback(this._loadedCallback, ['pagelet_onload']);
            var ha = [x.id + '_displayed'];
            if (!this.jsNonBlock) ha.push(this.domContentEvt);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, x), ha);
            if (x.is_last) this._endPhase(y);
            if (x.prefetchRsrcs) {
                this.arbiter.registerCallback(this._displayDoneCallback, ['pagelet_prefetch']);
                c('Bootloader').loadPredictedResources(x.prefetchRsrcs, function ia() {
                    x.prefetchJsmods && this._serverJS.handlePartial(x.prefetchJsmods);
                    this.arbiter.inform('pagelet_prefetch', true);
                }.bind(this));
            } else if (x.prefetchJsmods) this._serverJS.handlePartial(x.prefetchJsmods);
        }, 'BigPipe#onPageletArrive')
    });
    r.Events = {
        init: 'BigPipe/init',
        tti: 'tti_bigpipe',
        displayed: 'all_pagelets_displayed',
        loaded: 'all_pagelets_loaded'
    };

    function s(x) {
        if (!x || typeof x === 'string') return x;
        if (x.container_id) {
            var y = c('$')(x.container_id);
            x = t(y) || '';
            y.parentNode.removeChild(y);
            return x;
        }
        x.nodeType;
        return null;
    }

    function t(x) {
        if (!x.firstChild) {
            c('Bootloader').loadModules(["ErrorSignal"], function(z) {
                z.sendErrorSignal('bigpipe', 'Pagelet markup container is empty.');
            }, 'BigPipe');
            return null;
        }
        if (x.firstChild.nodeType !== 8) return null;
        var y = x.firstChild.nodeValue;
        y = y.substring(1, y.length - 1);
        return y.replace(/\\([\s\S]|$)/g, '$1');
    }

    function u(x, y, z) {
        var aa = w(y);
        for (var ba = 0; ba < aa.childNodes.length; ba++) z.push(aa.childNodes[ba]);
        x.appendChild(aa);
    }

    function v(x) {
        if (x.displayed) return;
        var y = x.content;
        for (var z in y) y[z] = w(y[z]);
    }

    function w(x) {
        if (x.nodeType) return x;
        var y = document.createDocumentFragment();
        x = s(x);
        if (x) {
            var z = document.createElement('div');
            z.innerHTML = x;
            while (z.firstChild) y.appendChild(z.firstChild);
        }
        return y;
    }
    f.exports = r;
}), null);
__d('EventEmitterWithValidation', ['BaseEventEmitter'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h, i;
    h = babelHelpers.inherits(j, c('BaseEventEmitter'));
    i = h && h.prototype;

    function j(m) {
        i.constructor.call(this);
        this.$EventEmitterWithValidation1 = Object.keys(m);
    }
    j.prototype.emit = function(m) {
        k(m, this.$EventEmitterWithValidation1);
        return i.emit.apply(this, arguments);
    };

    function k(m, n) {
        if (n.indexOf(m) === -1) throw new TypeError(l(m, n));
    }

    function l(m, n) {
        var o = 'Unknown event type "' + m + '". ';
        o += 'Known event types: ' + n.join(', ') + '.';
        return o;
    }
    f.exports = j;
}), null);
__d('mixInEventEmitter', ['invariant', 'EventEmitterWithHolding', 'EventEmitterWithValidation', 'EventHolder'], (function a(b, c, d, e, f, g, h) {
    'use strict';

    function i(k, l) {
        l || h(0);
        var m = k.prototype || k;
        !m.__eventEmitter || h(0);
        var n = k.constructor;
        if (n) n === Object || n === Function || h(0);
        m.__types = babelHelpers['extends']({}, m.__types, l);
        Object.assign(m, j);
    }
    var j = {
        emit: function k(l, m, n, o, p, q, r) {
            return this.__getEventEmitter().emit(l, m, n, o, p, q, r);
        },
        emitAndHold: function k(l, m, n, o, p, q, r) {
            return this.__getEventEmitter().emitAndHold(l, m, n, o, p, q, r);
        },
        addListener: function k(l, m, n) {
            return this.__getEventEmitter().addListener(l, m, n);
        },
        once: function k(l, m, n) {
            return this.__getEventEmitter().once(l, m, n);
        },
        addRetroactiveListener: function k(l, m, n) {
            return this.__getEventEmitter().addRetroactiveListener(l, m, n);
        },
        listeners: function k(l) {
            return this.__getEventEmitter().listeners(l);
        },
        removeAllListeners: function k() {
            this.__getEventEmitter().removeAllListeners();
        },
        removeCurrentListener: function k() {
            this.__getEventEmitter().removeCurrentListener();
        },
        releaseHeldEventType: function k(l) {
            this.__getEventEmitter().releaseHeldEventType(l);
        },
        __getEventEmitter: function k() {
            if (!this.__eventEmitter) {
                var l = new(c('EventEmitterWithValidation'))(this.__types),
                    m = new(c('EventHolder'))();
                this.__eventEmitter = new(c('EventEmitterWithHolding'))(l, m);
            }
            return this.__eventEmitter;
        }
    };
    f.exports = i;
}), null);
__d("pageID", [], (function a(b, c, d, e, f, g) {
    f.exports = Math.floor(2147483648 * Math.random()).toString(36);
}), null);
__d('NavigationMetricsCore', ['mixInEventEmitter', 'pageID'], (function a(b, c, d, e, f, g) {
    var h = {
            NAVIGATION_DONE: 'NAVIGATION_DONE',
            EVENT_OCCURRED: 'EVENT_OCCURRED'
        },
        i = {
            tti: 'tti',
            e2e: 'e2e',
            all_pagelets_loaded: 'all_pagelets_loaded',
            all_pagelets_displayed: 'all_pagelets_displayed'
        },
        j = 0,
        k = {},
        l = void 0;
    m.lastServerLID = function() {
        'use strict';
        return l;
    };

    function m() {
        'use strict';
        this.eventTimings = {
            tti: null,
            e2e: null,
            all_pagelets_loaded: null,
            all_pagelets_displayed: null
        };
        this.lid = c('pageID') + ':' + j++;
        this.extras = {};
    }
    m.prototype.getLID = function() {
        'use strict';
        return this.lid;
    };
    m.prototype.setRequestStart = function(o) {
        'use strict';
        this.start = o;
        return this;
    };
    m.prototype.setTTI = function(o) {
        'use strict';
        this.eventTimings.tti = o;
        this.$NavigationEntryImpl1(i.tti, o);
        return this;
    };
    m.prototype.setE2E = function(o) {
        'use strict';
        this.eventTimings.e2e = o;
        this.$NavigationEntryImpl1(i.e2e, o);
        return this;
    };
    m.prototype.setExtra = function(o, p) {
        'use strict';
        this.extras[o] = p;
        return this;
    };
    m.prototype.setDisplayDone = function(o) {
        'use strict';
        this.eventTimings.all_pagelets_displayed = o;
        this.setExtra('all_pagelets_displayed', o);
        this.$NavigationEntryImpl1(i.all_pagelets_displayed, o);
        return this;
    };
    m.prototype.setAllPageletsLoaded = function(o) {
        'use strict';
        this.eventTimings.all_pagelets_loaded = o;
        this.setExtra('all_pagelets_loaded', o);
        this.$NavigationEntryImpl1(i.all_pagelets_loaded, o);
        return this;
    };
    m.prototype.setServerLID = function(o) {
        'use strict';
        this.serverLID = o;
        return this;
    };
    m.prototype.$NavigationEntryImpl1 = function(event, o) {
        'use strict';
        var p = {};
        if (k != null && this.serverLID != null && k[this.serverLID] != null) p = k[this.serverLID];
        var q = babelHelpers['extends']({}, p, {
            event: event,
            timestamp: o,
            visibilityState: null
        });
        if (document.visibilityState) q.visibilityState = document.visibilityState;
        n.emitAndHold(h.EVENT_OCCURRED, this.serverLID, q);
        return this;
    };
    m.prototype.doneNavigation = function() {
        'use strict';
        var o = babelHelpers['extends']({
            start: this.start,
            extras: this.extras
        }, this.eventTimings);
        if (this.serverLID && k[this.serverLID]) {
            var p = this.serverLID;
            Object.assign(o, k[p]);
            delete k[p];
        }
        n.emitAndHold(h.NAVIGATION_DONE, this.lid, o);
    };
    var n = {
        Events: h,
        postPagelet: function o(p, q) {},
        postScheduler: function o() {},
        siteInit: function o(p) {
            p(m);
        },
        setPage: function o(p) {
            if (!p.serverLID) return;
            k[p.serverLID] = {
                page: p.page,
                pageType: p.page_type,
                pageURI: p.page_uri,
                serverLID: p.serverLID
            };
            l = p.serverLID;
        },
        getFullPageLoadLid: function o() {
            throw new Error('getFullPageLoadLid is not implemented on this site');
        }
    };
    c('mixInEventEmitter')(n, h);
    f.exports = n;
}), null);
__d('NavigationMetrics', ['Arbiter', 'BigPipe', 'NavigationMetricsCore', 'PageEvents', 'performance'], (function a(b, c, d, e, f, g) {
    var h = '0';
    c('NavigationMetricsCore').getFullPageLoadLid = function() {
        return h;
    };
    c('NavigationMetricsCore').siteInit(function(i) {
        var j = new i(),
            k = true;
        c('Arbiter').subscribe(c('BigPipe').Events.init, function(l, m) {
            var n = k ? j : new i();
            if (k) h = m.lid;
            k = false;
            n.setServerLID(m.lid);
            var o = m.arbiter;
            o.subscribe(c('BigPipe').Events.tti, function(p, q) {
                var r = q.ts;
                n.setTTI(r);
            });
            o.subscribe(c('PageEvents').AJAXPIPE_SEND, function(p, q) {
                var r = q.ts;
                n.setRequestStart(r);
            });
            o.subscribe(c('PageEvents').AJAXPIPE_ONLOAD, function(p, q) {
                var r = q.ts;
                n.setE2E(r).doneNavigation();
            });
            o.subscribe(c('BigPipe').Events.displayed, function(p, q) {
                var r = q.ts;
                n.setDisplayDone(r);
            });
            o.subscribe(c('BigPipe').Events.loaded, function(p, q) {
                var r = q.ts;
                n.setAllPageletsLoaded(r);
            });
        });
        c('Arbiter').subscribe(c('PageEvents').BIGPIPE_ONLOAD, function(l, m) {
            var n = m.ts;
            k = false;
            j.setRequestStart(c('performance').timing && c('performance').timing.navigationStart).setE2E(n).doneNavigation();
        });
    });
    f.exports = c('NavigationMetricsCore');
}), null);
__d('Visibility', ['TimeSlice', 'mixInEventEmitter'], (function a(b, c, d, e, f, g) {
    var h = void 0,
        i = void 0;
    if (document.hidden !== undefined) {
        h = 'hidden';
        i = 'visibilitychange';
    } else if (document.mozHidden !== undefined) {
        h = 'mozHidden';
        i = 'mozvisibilitychange';
    } else if (document.msHidden !== undefined) {
        h = 'msHidden';
        i = 'msvisibilitychange';
    } else if (document.webkitHidden !== undefined) {
        h = 'webkitHidden';
        i = 'webkitvisibilitychange';
    }

    function j() {
        return h ? document[h] : false;
    }

    function k() {
        return document.addEventListener && i !== undefined;
    }
    var l = {
        HIDDEN: 'hidden',
        VISIBLE: 'visible',
        isHidden: j,
        isSupported: k
    };
    c('mixInEventEmitter')(l, {
        visible: true,
        hidden: true
    });
    if (k()) document.addEventListener(i, c('TimeSlice').guard(function m() {
        l.emit(j() ? l.HIDDEN : l.VISIBLE);
    }, 'visibility change'));
    f.exports = l;
}), null);
__d('WebStorageMutex', ['WebStorage', 'setTimeoutAcrossTransitions', 'pageID'], (function a(b, c, d, e, f, g) {
    var h = null,
        i = false,
        j = c('pageID');

    function k() {
        if (!i) {
            i = true;
            h = c('WebStorage').getLocalStorage();
        }
        return h;
    }

    function l(m) {
        'use strict';
        this.name = m;
    }
    l.testSetPageID = function(m) {
        'use strict';
        j = m;
    };
    l.prototype.$WebStorageMutex1 = function() {
        'use strict';
        if (!k()) return j;
        var m = k().getItem('mutex_' + this.name);
        m = m ? m.split(':') : null;
        return m && m[1] >= Date.now() ? m[0] : null;
    };
    l.prototype.$WebStorageMutex2 = function(m) {
        'use strict';
        if (!k()) return;
        var n = Date.now() + (m || 10000);
        c('WebStorage').setItemGuarded(k(), 'mutex_' + this.name, j + ':' + n);
    };
    l.prototype.hasLock = function() {
        'use strict';
        return this.$WebStorageMutex1() == j;
    };
    l.prototype.lock = function(m, n, o) {
        'use strict';
        if (this.$WebStorageMutex3) clearTimeout(this.$WebStorageMutex3);
        if (j == (this.$WebStorageMutex1() || j)) this.$WebStorageMutex2(o);
        this.$WebStorageMutex3 = c('setTimeoutAcrossTransitions')(function() {
            this.$WebStorageMutex3 = null;
            var p = this.hasLock() ? m : n;
            if (p) p(this);
        }.bind(this), 0);
    };
    l.prototype.unlock = function() {
        'use strict';
        if (this.$WebStorageMutex3) clearTimeout(this.$WebStorageMutex3);
        if (k() && this.hasLock()) k().removeItem('mutex_' + this.name);
    };
    f.exports = l;
}), null);
__d('lowerFacebookDomain', [], (function a(b, c, d, e, f, g) {
    var h = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.onion)$/),
        i = h ? h[1] : 'facebook.com';
    j.setDomain = function(k) {
        i = k;
    };
    j.isValidDocumentDomain = function() {
        if (document.domain == i) return true;
        return false;
    };

    function j() {
        document.domain = i;
    }
    f.exports = j;
}), null);
__d('Banzai', ['BanzaiAdapter', 'BanzaiServiceWorker', 'CurrentUser', 'ErrorUtils', 'ExecutionEnvironment', 'FBJSON', 'NavigationMetrics', 'TimeSlice', 'Visibility', 'WebStorage', 'emptyFunction', 'isInIframe', 'lowerFacebookDomain', 'pageID', 'setTimeoutAcrossTransitions', 'WebStorageMutex'], (function a(b, c, d, e, f, g) {
    var h = c('BanzaiAdapter').adapter,
        i = c('isInIframe')(),
        j = 'bz:',
        k = 'ods:banzai',
        l = 'send_via_beacon_failure',
        m = 0,
        n = 1,
        o = 2,
        p, q, r = [],
        s = null,
        t = [];

    function u(ia) {
        return ia[2] >= Date.now() - (h.config.EXPIRY || c('BanzaiAdapter').EXPIRY);
    }

    function v(ia, ja) {
        ia.__meta.status = m;
        ia[3] = (ia[3] || 0) + 1;
        if (!ia.__meta.retry && ja >= 400 && ja < 600) r.push(ia);
    }

    function w(ia, ja, ka, la) {
        var ma = [ia, ja, ka, 0];
        ma.__meta = {
            retry: la === true,
            pageID: c('pageID'),
            userID: c('CurrentUser').getID(),
            status: m
        };
        return ma;
    }

    function x() {
        var ia = [];
        t.forEach(function(na) {
            var oa = na.cb();
            oa.forEach(function(pa) {
                var qa = na.route;
                if (qa) {
                    var ra = w(qa, pa, Date.now());
                    ra.__meta.onSuccess = na.onSuccess;
                    ra.__meta.onFailure = na.onFailure;
                    ia.push(ra);
                }
            });
        });
        t = [];
        var ja = [],
            ka = [];
        ca(ja, ka, true, ia);
        if (ja.length > 0) {
            ja[0].send_method = 'beacon';
            var la = new Blob([h.addRequestAuthData(h.prepForTransit(ja))], {
                    type: 'application/x-www-form-urlencoded'
                }),
                ma = navigator.sendBeacon(c('BanzaiAdapter').adapter.endpoint, la);
            if (ma) {
                ka.forEach(function(na) {
                    return ia.__meta && na.__meta.onSuccess && na.__meta.onSuccess();
                });
            } else ka.forEach(function(na) {
                return ia.__meta && na.__meta.onFailure && na.__meta.onFailure();
            });
        }
    }

    function y(ia) {
        var ja = Date.now() + ia;
        if (!q || ja < q) {
            q = ja;
            clearTimeout(p);
            p = c('setTimeoutAcrossTransitions')(z, ia);
            return true;
        }
        return false;
    }
    var z = c('TimeSlice').guard(function() {
        aa(null, null);
    }, 'Banzai.send', {
        isContinuation: false
    });

    function aa(ia, ja) {
        q = null;
        y(c('BanzaiAdapter').BASIC.delay);
        if (!h.readyToSend()) {
            if (ja) ja();
            return;
        }
        h.inform(c('BanzaiAdapter').SEND);
        var ka = [],
            la = [];
        r = ca(ka, la, true, r);
        if (ka.length <= 0) {
            h.inform(c('BanzaiAdapter').OK);
            if (ia) ia();
            return;
        }
        ka[0].trigger = s;
        s = null;
        ka[0].send_method = 'ajax';
        h.send(ka, function() {
            la.forEach(function(ma) {
                ma.__meta.status = o;
            });
            if (ia) ia();
        }, function(ma) {
            la.forEach(function(na) {
                v(na, ma);
            });
            if (ja) ja();
        });
    }

    function ba() {
        if (!(navigator && navigator.sendBeacon && h.isOkToSendViaBeacon())) return;
        var ia = [],
            ja = [];
        r = ca(ia, ja, false, r);
        if (ia.length <= 0) return;
        ia[0].send_method = 'beacon';
        var ka = new Blob([h.addRequestAuthData(h.prepForTransit(ia))], {
                type: 'application/x-www-form-urlencoded'
            }),
            la = navigator.sendBeacon(c('BanzaiAdapter').adapter.endpoint, ka);
        if (!la) {
            var ma;
            ja.forEach(function(na) {
                r.push(na);
            });
            r.push(w(k, (ma = {}, ma[l] = [1], ma), Date.now()));
        }
    }

    function ca(ia, ja, ka, la) {
        var ma = {};
        return la.filter(function(na) {
            var oa = na.__meta;
            if (oa.status >= o || !u(na)) return false;
            if (oa.status >= n) return true;
            var pa = oa.pageID + oa.userID,
                qa = ma[pa];
            if (!qa) {
                qa = {
                    user: oa.userID,
                    page_id: oa.pageID,
                    posts: []
                };
                ma[pa] = qa;
                ia.push(qa);
            }
            oa.status = n;
            qa.posts.push(na);
            ja.push(na);
            return ka && oa.retry;
        });
    }
    var da, ea, fa = false;

    function ga() {
        if (!fa) {
            fa = true;
            ea = c('WebStorage').getLocalStorage();
        }
        return ea;
    }

    function ha() {
        if (!da)
            if (!i) {
                da = {
                    store: function ia() {
                        var ja = ga();
                        if (!ja || r.length <= 0) return;
                        var ka = r.map(function(la) {
                            return [la[0], la[1], la[2], la[3] || 0, la.__meta];
                        });
                        r = [];
                        ja.setItem(j + c('pageID') + '.' + Date.now(), c('FBJSON').stringify(ka));
                    },
                    restore: function ia() {
                        var ja = ga();
                        if (!ja) return;
                        var ka = c('WebStorageMutex');
                        new ka('banzai').lock(function(la) {
                            var ma = [];
                            for (var na = 0; na < ja.length; na++) {
                                var oa = ja.key(na);
                                if (oa.indexOf(j) === 0 && oa.indexOf('bz:__') !== 0) ma.push(oa);
                            }
                            ma.forEach(function(pa) {
                                var qa = ja.getItem(pa);
                                ja.removeItem(pa);
                                if (!qa) return;
                                var ra = c('FBJSON').parse(qa, f.id);
                                ra.forEach(function(sa) {
                                    if (!sa) return;
                                    var ta = sa.__meta = sa.pop(),
                                        ua = u(sa);
                                    if (!ua) return;
                                    var va = c('CurrentUser').getID();
                                    if (ta.userID === va || va === '0') {
                                        ta.status = m;
                                        r.push(sa);
                                    }
                                });
                            });
                            la.unlock();
                        });
                    }
                };
            } else da = {
                store: c('emptyFunction'),
                restore: c('emptyFunction')
            };
    }
    c('BanzaiAdapter').SEND = 'Banzai:SEND';
    c('BanzaiAdapter').OK = 'Banzai:OK';
    c('BanzaiAdapter').ERROR = 'Banzai:ERROR';
    c('BanzaiAdapter').SHUTDOWN = 'Banzai:SHUTDOWN';
    c('BanzaiAdapter').VITAL_WAIT = 1000;
    c('BanzaiAdapter').BASIC_WAIT = 60000;
    c('BanzaiAdapter').EXPIRY = 30 * 60000;
    c('BanzaiAdapter').VITAL = {
        delay: h.config.MIN_WAIT || c('BanzaiAdapter').VITAL_WAIT
    };
    c('BanzaiAdapter').BASIC = {
        delay: h.config.MAX_WAIT || c('BanzaiAdapter').BASIC_WAIT
    };
    c('BanzaiAdapter').FBTRACE = h.config.fbtrace;
    c('BanzaiAdapter').isEnabled = function(ia) {
        return h.config.gks && h.config.gks[ia];
    };
    c('BanzaiAdapter').post = function(ia, ja, ka) {
        if (!ia) c('ErrorUtils').reportError(new Error('Banzai.post called without specifying a route'));
        ka = ka || {};
        var la = ka.retry;
        if (h.config.disabled) return;
        if (!c('ExecutionEnvironment').canUseDOM) return;
        var ma = h.config.blacklist;
        if (ma)
            if (ma.indexOf)
                if (typeof ma.indexOf == 'function')
                    if (ma.indexOf(ia) != -1) return;
        if (i && c('lowerFacebookDomain').isValidDocumentDomain()) {
            var na = void 0;
            try {
                na = b.top.require('Banzai');
            } catch (oa) {
                na = null;
            }
            if (na) {
                na.post.apply(na, arguments);
                return;
            }
        }
        var pa = w(ia, ja, Date.now(), la),
            qa = ka.delay;
        if (qa == null) qa = c('BanzaiAdapter').BASIC_WAIT;
        if (c('BanzaiServiceWorker').isEnabled()) {
            var ra = [{
                user: c('CurrentUser').getID(),
                page_id: c('pageID'),
                posts: [pa],
                trigger: ia
            }];
            c('BanzaiServiceWorker').send(ra, ka.signal, qa, la);
            return;
        }
        if (ka.signal) {
            pa.__meta.status = n;
            var sa = [{
                user: c('CurrentUser').getID(),
                page_id: c('pageID'),
                posts: [pa],
                trigger: ia
            }];
            h.send(sa, function() {
                pa.__meta.status = o;
            }, function(ta) {
                v(pa, ta);
            }, true);
            if (!la) return;
        }
        r.push(pa);
        if (y(qa) || !s) s = ia;
    };
    c('BanzaiAdapter').registerToSendWithBeacon = function(ia, ja, ka, la) {
        if (!(navigator && navigator.sendBeacon && h.isOkToSendViaBeacon())) return false;
        if (!ia) {
            c('ErrorUtils').reportError(new Error('Banzai.registerToSendWithBeacon called without specifying a route'));
            return false;
        }
        t.push({
            cb: ja,
            route: ia,
            onSuccess: ka,
            onFailure: la
        });
        return true;
    };
    c('BanzaiAdapter').flush = function(ia, ja) {
        clearTimeout(p);
        p = 0;
        aa(ia, ja);
    };
    c('BanzaiAdapter').subscribe = h.subscribe;
    c('BanzaiAdapter').canUseNavigatorBeacon = function() {
        return navigator && navigator.sendBeacon && h.isOkToSendViaBeacon();
    };
    c('BanzaiAdapter')._schedule = y;
    c('BanzaiAdapter')._store = function(ia) {
        ha();
        c('ErrorUtils').applyWithGuard(da.store, da);
    };
    c('BanzaiAdapter')._restore = function(ia) {
        ha();
        c('ErrorUtils').applyWithGuard(da.restore, da);
        y(h.config.RESTORE_WAIT || c('BanzaiAdapter').VITAL_WAIT);
    };
    c('BanzaiAdapter')._unload = function() {
        if (c('BanzaiServiceWorker').isEnabled()) c('BanzaiServiceWorker').sync();
        if (navigator && navigator.sendBeacon && h.isOkToSendViaBeacon()) x();
        h.cleanup();
        h.inform(c('BanzaiAdapter').SHUTDOWN);
        if (c('BanzaiAdapter').isEnabled('beacon_hailmary') && r.length > 0) ba();
        if (r.length > 0) {
            ha();
            c('ErrorUtils').applyWithGuard(da.store, da);
        }
    };
    c('BanzaiAdapter')._testState = function() {
        return {
            postBuffer: r,
            triggerRoute: s
        };
    };
    (c('BanzaiAdapter')._initialize = function() {
        if (c('ExecutionEnvironment').canUseDOM) {
            if (c('BanzaiAdapter').isEnabled('beacon_hailmary') && c('Visibility').isSupported()) {
                c('Visibility').addListener(c('Visibility').HIDDEN, function() {
                    if (r.length > 0) ba();
                    if (r.length > 0) {
                        ha();
                        c('ErrorUtils').applyWithGuard(da.store, da);
                    }
                });
            } else h.setHooks();
            h.setUnloadHook();
            c('NavigationMetrics').addListener(c('NavigationMetrics').Events.NAVIGATION_DONE, function(ia, ja) {
                if (ja.pageType !== 'normal') return;
                c('BanzaiAdapter')._restore();
                c('NavigationMetrics').removeCurrentListener();
            });
        }
    })();
    f.exports = c('BanzaiAdapter');
}), null);
__d("IntlVariations", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        BITMASK_NUMBER: 805306368,
        NUMBER_ZERO: 1073741824,
        NUMBER_ONE: 268435456,
        NUMBER_TWO: 536870912,
        NUMBER_FEW: 1342177280,
        NUMBER_MANY: 805306368,
        NUMBER_OTHER: 1610612736,
        BITMASK_GENDER: 50331648,
        GENDER_MALE: 16777216,
        GENDER_FEMALE: 33554432,
        GENDER_UNKNOWN: 50331648
    };
}), null);
__d('FbtNumberType', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d("GenderConst", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_SINGULAR: 5,
        MIXED_PLURAL: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11,
        UNKNOWN: 0
    };
}), null);
__d('Intl', ['IntlPhonologicalRules', 'memoize'], (function a(b, c, d, e, f, g) {
    var h = '[.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']',
        i = new RegExp(h + '[)"\'' + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\\s' + ']*$'),
        j = c('memoize')(function() {
            var m = [];
            for (var n in c('IntlPhonologicalRules').patterns) {
                var o = c('IntlPhonologicalRules').patterns[n];
                for (var p in c('IntlPhonologicalRules').meta) {
                    var q = new RegExp(p.slice(1, -1), 'g'),
                        r = c('IntlPhonologicalRules').meta[p];
                    n = n.replace(q, r);
                    o = o.replace(q, r);
                }
                if (o === 'javascript') o = function s(t) {
                    return t.slice(1).toLowerCase();
                };
                m.push([new RegExp(n.slice(1, -1), 'g'), o]);
            }
            return m;
        });

    function k(m) {
        var n = j();
        for (var o = 0; o < n.length; o++) {
            var p = n[o],
                q = p[0],
                r = p[1];
            m = m.replace(q, r);
        }
        return m.replace(/\x01/g, '');
    }

    function l(m) {
        if (typeof m !== 'string') return false;
        return i.test(m);
    }
    f.exports = {
        PUNCT_CHAR_CLASS: h,
        endsInPunct: l,
        applyPhonologicalRules: k
    };
}), null);
__d('substituteTokens', ['invariant', 'Intl'], (function a(b, c, d, e, f, g, h) {
    var i = new RegExp('\\{([^}]+)\\}(' + c('Intl').PUNCT_CHAR_CLASS + '*)', 'g');

    function j(l) {
        return l;
    }

    function k(l, m) {
        var n = m;
        if (!n) return l;
        typeof n === 'object' || h(0);
        var o = [],
            p = [],
            q = l.replace(i, function(t, u, v) {
                var w = n[u];
                if (w && typeof w === 'object') {
                    o.push(w);
                    p.push(u);
                    return '\x17' + v;
                } else if (w === null) return '';
                return w + (c('Intl').endsInPunct(w) ? '' : v);
            }).split('\x17').map(c('Intl').applyPhonologicalRules);
        if (q.length === 1) return q[0];
        var r = [q[0]];
        for (var s = 0; s < o.length; s++) r.push(j(o[s]), q[s + 1]);
        return r;
    }
    f.exports = k;
}), null);
__d('fbt', ['invariant', 'Banzai', 'FbtNumberType', 'FbtResult', 'FbtResultGK', 'GenderConst', 'IntlVariations', 'IntlViewerContext', 'substituteTokens', 'FbtLogger', 'FbtQTOverrides'], (function a(b, c, d, e, f, g, h) {
    var i = c('FbtLogger').logger,
        j = c('FbtQTOverrides').overrides,
        k = {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        l = {
            NUMBER: 0,
            GENDER: 1
        },
        m = {
            OBJECT: 0,
            POSSESSIVE: 1,
            REFLEXIVE: 2,
            SUBJECT: 3
        },
        n = function q() {};
    n._ = function(q, r) {
        var s = {},
            t = q;
        if (q.__vcg) {
            r = r || [];
            r.unshift([
                [c('IntlViewerContext').GENDER, '*'], null
            ]);
        }
        if (r !== undefined) {
            t = this._accessTable(q, s, r, 0);
            t !== null || h(0);
        }
        var u = t,
            v = null;
        typeof t === 'string' || Array.isArray(t) || h(0);
        if (Array.isArray(t)) {
            u = t[0];
            v = t[1];
            var w = '1_' + v;
            u = j[w] || u;
            if (j[w]) n.logQTImpression(v);
            n.logImpression(v);
        }
        var x = c('substituteTokens')(u, s);
        return p(x, u, v);
    };
    n._accessTable = function(q, r, s, t) {
        if (t >= s.length) {
            return q;
        } else if (q == null) return null;
        var u = null,
            v = s[t],
            w = v[k.INDEX];
        if (Array.isArray(w)) {
            for (var x = 0; x < w.length; ++x) {
                var y = q[w[x]];
                u = this._accessTable(y, r, s, t + 1);
                if (u != null) break;
            }
        } else {
            q = w !== null ? q[w] : q;
            u = this._accessTable(q, r, s, t + 1);
        }
        if (u != null) Object.assign(r, v[k.SUBSTITUTION]);
        return u;
    };
    n['enum'] = function(q, r) {
        return [q, null];
    };
    n.param = function(q, r, s) {
        var t = null;
        if (s)
            if (s[0] === l.NUMBER) {
                var u = s.length > 1 ? s[1] : r;
                typeof u === 'number' || h(0);
                t = [c('FbtNumberType').getNumberVariationType(u), '*'];
            } else if (s[0] === l.GENDER) {
            s.length > 1 && s[1] & c('IntlVariations').BITMASK_GENDER || h(0);
            t = [s[1], '*'];
        } else h(0);
        var v = {};
        v[q] = r;
        return [t, v];
    };
    n.plural = function(q, r, s) {
        var t = [c('FbtNumberType').getNumberVariationType(q), '*'],
            u = {};
        if (r) u[r] = s || q + '';
        return [t, u];
    };
    n.pronoun = function(q, r, s) {
        r !== c('GenderConst').NOT_A_PERSON || !s || !s.human || h(0);
        var t = o(q, r);
        return [
            [t, '*'], null
        ];
    };

    function o(q, r) {
        switch (r) {
            case c('GenderConst').NOT_A_PERSON:
                return q === m.OBJECT || q === m.REFLEXIVE ? c('GenderConst').NOT_A_PERSON : c('GenderConst').UNKNOWN_PLURAL;
            case c('GenderConst').FEMALE_SINGULAR:
            case c('GenderConst').FEMALE_SINGULAR_GUESS:
                return c('GenderConst').FEMALE_SINGULAR;
            case c('GenderConst').MALE_SINGULAR:
            case c('GenderConst').MALE_SINGULAR_GUESS:
                return c('GenderConst').MALE_SINGULAR;
            case c('GenderConst').MIXED_SINGULAR:
            case c('GenderConst').FEMALE_PLURAL:
            case c('GenderConst').MALE_PLURAL:
            case c('GenderConst').NEUTER_PLURAL:
            case c('GenderConst').UNKNOWN_PLURAL:
                return c('GenderConst').UNKNOWN_PLURAL;
            case c('GenderConst').NEUTER_SINGULAR:
            case c('GenderConst').UNKNOWN_SINGULAR:
                return q === m.REFLEXIVE ? c('GenderConst').NOT_A_PERSON : c('GenderConst').UNKNOWN_PLURAL;
        }
        return c('GenderConst').NOT_A_PERSON;
    }
    n.name = function(q, r, s) {
        s & c('IntlVariations').BITMASK_GENDER || h(0);
        var t = [s, '*'],
            u = {};
        u[q] = r;
        return [t, u];
    };
    n.genderOfMany = function(q) {
        0 < q.length || h(0);
        return q.length === 1 ? q[0] : c('GenderConst').UNKNOWN_PLURAL;
    };
    n.logImpression = function(q) {
        if (i) i.logImpression(q);
        return q;
    };
    n.logQTImpression = function(q) {
        c('Banzai').post('intl_qt_event', {
            hash: q
        });
        return q;
    };

    function p(q, r, s) {
        if (!c('FbtResultGK').shouldReturnFbtResult && c('FbtResultGK').inlineMode !== 'REPORT') return q;
        return new(c('FbtResult'))(typeof q === 'string' ? [q] : q, c('FbtResultGK').inlineMode, r, s);
    }
    f.exports = n;
}), null);
__d('AsyncRequest', ['errorCode', 'invariant', 'ix', 'fbt', 'Promise', 'Arbiter', 'TimeSliceInteraction', 'ArtilleryJSPointTypes', 'AsyncFeature', 'AsyncFeatureLogging', 'AsyncRequestConfig', 'AsyncResponse', 'Bootloader', 'CSS', 'DTSG', 'Env', 'ErrorUtils', 'Event', 'HTTPErrors', 'JSCC', 'Parent', 'WebPixelRatio', 'PixelRatioConst', 'PHPQuerySerializer', 'ProfilingCounters', 'Run', 'ServerJS', 'SessionName', 'TimeSlice', 'URI', 'UserAgent_DEPRECATED', 'ZeroRewrites', 'isFacebookURI', 'isMessengerDotComURI', 'bind', 'emptyFunction', 'evalGlobal', 'executeAfter', 'ge', 'getAsyncHeaders', 'getAsyncParams', 'goURI', 'isEmpty', 'setTimeout', 'setTimeoutAcrossTransitions'], (function a(global, require, requireDynamic, requireLazy, module, exports, errorCode, invariant, ix, fbt) {
    var EVENTS = {
        SR_PAYLOAD: 'asyncRequest/srPayload'
    };

    function hasUnloaded() {
        try {
            return !window.domready;
        } catch (ignore) {
            return true;
        }
    }

    function supportsUploadProgress(transport) {
        return 'upload' in transport && 'onprogress' in transport.upload;
    }

    function supportsCrossOrigin(transport) {
        return 'withCredentials' in transport;
    }

    function isNetworkError(transport) {
        return transport.status in {
            '0': 1,
            '12029': 1,
            '12030': 1,
            '12031': 1,
            '12152': 1
        };
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === 'function';
        return valid;
    }
    var last_id = 2,
        id_threshold = last_id;
    require('Arbiter').subscribe('page_transition', function(_, message) {
        id_threshold = message.id;
    });

    function AsyncRequest(uri) {
        'use strict';
        this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
            var error = asyncResponse.getError();
            this.clearStatusIndicator();
            var log_data = this._sendTimeStamp && {
                duration: Date.now() - this._sendTimeStamp,
                xfb_ip: this._xFbServer || '-'
            };
            asyncResponse.logError('async_error', log_data);
            if (!this._isRelevant() || error === 1010) {
                this.abort();
                return;
            }
            if (error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001) {
                var is_confirmation = error == 1357008 || error == 1357007;
                require('AsyncFeature').__invokeWithServerBitMap(asyncResponse.__sf, function() {
                    return this.interceptHandler(asyncResponse);
                }.bind(this));
                if (error == 1357041) {
                    this._solveQuicksandChallenge(asyncResponse);
                } else if (error == 1357007) {
                    this._displayServerDialog(asyncResponse, is_confirmation, true);
                } else this._displayServerDialog(asyncResponse, is_confirmation);
            } else if (this._invokeInitialHandler(asyncResponse) !== false) {
                clearTimeout(this.timer);
                try {
                    require('AsyncFeature').__invokeWithServerBitMap(asyncResponse.__sf, function() {
                        return errorHandler(asyncResponse);
                    });
                } catch (e) {
                    this._applyFinallyHandler(asyncResponse);
                    throw e;
                }
                this._applyFinallyHandler(asyncResponse);
            }
        }.bind(this);
        this._onStateChange = function() {
            var transport = this.transport;
            if (!transport) return;
            try {
                AsyncRequest._inflightCount--;
                AsyncRequest._inflightPurge();
                try {
                    if (typeof transport.getResponseHeader !== 'undefined' && transport.getResponseHeader('X-FB-Debug')) this._xFbServer = transport.getResponseHeader('X-FB-Debug');
                } catch (ignore) {}
                if (transport.status >= 200 && transport.status < 300) {
                    AsyncRequest.lastSuccessTime = Date.now();
                    this._handleXHRResponse(transport);
                } else if (require('UserAgent_DEPRECATED').webkit() && typeof transport.status == 'undefined') {
                    this._invokeErrorHandler(1002);
                } else if (require('AsyncRequestConfig').retryOnNetworkError && isNetworkError(transport) && this.remainingRetries > 0 && !this._requestTimeout) {
                    this.remainingRetries--;
                    delete this.transport;
                    this.send(true);
                    return;
                } else this._invokeErrorHandler();
                if (this.getOption('asynchronous_DEPRECATED') !== false) delete this.transport;
            } catch (exception) {
                if (hasUnloaded()) return;
                delete this.transport;
                if (this.remainingRetries > 0) {
                    this.remainingRetries--;
                    this.send(true);
                } else {
                    !this.getOption('suppressErrorAlerts');
                    var ErrorSignal = global.ErrorSignal;
                    ErrorSignal && ErrorSignal.sendErrorSignal('async_xport_resp', [1007, this._xFbServer || '-', this.getURI(), exception.message].join(':'));
                    this._invokeErrorHandler(1007);
                }
            }
        }.bind(this);
        this.transport = null;
        this.method = 'POST';
        this.uri = '';
        this.timeout = null;
        this.timer = null;
        this.initialHandler = require('emptyFunction');
        this.handler = null;
        this.uploadProgressHandler = null;
        this.errorHandler = require('AsyncResponse').defaultErrorHandler;
        this.transportErrorHandler = null;
        this.timeoutHandler = null;
        this.interceptHandler = require('emptyFunction');
        this.finallyHandler = require('emptyFunction');
        this.abortHandler = require('emptyFunction');
        this.serverDialogCancelHandler = null;
        this.relativeTo = null;
        this.statusElement = null;
        this.statusClass = '';
        this.data = {};
        this.headers = {};
        this.file = null;
        this.context = {};
        this.readOnly = false;
        this.writeRequiredParams = [];
        this.remainingRetries = 0;
        this.userActionID = '-';
        this.logErrorsEnabled = require('AsyncRequestConfig').logAsyncRequest;
        this.shouldTraceWithArtillery = true;
        this.option = {
            asynchronous_DEPRECATED: true,
            suppressErrorHandlerWarning: false,
            suppressEvaluation: false,
            suppressErrorAlerts: false,
            retries: 0,
            jsonp: false,
            bundle: false,
            useIframeTransport: false,
            handleErrorAfterUnload: false
        };
        this.transportErrorHandler = require('bind')(this, 'errorHandler');
        if (uri !== undefined) this.setURI(uri);
        this.setAllowCrossPageTransition(require('AsyncRequestConfig').asyncRequestsSurviveTransitionsDefault || false);
    }
    AsyncRequest.prototype._invokeInitialHandler = function(asyncResponse) {
        'use strict';
        return require('AsyncFeature').__invokeWithServerBitMap(asyncResponse.__sf, function() {
            return this.initialHandler(asyncResponse);
        }.bind(this));
    };
    AsyncRequest.prototype._dispatchResponse = function(asyncResponse) {
        'use strict';
        this.clearStatusIndicator();
        if (!this._isRelevant()) {
            this._invokeErrorHandler(1010);
            return;
        }
        if (this._invokeInitialHandler(asyncResponse) === false) return;
        clearTimeout(this.timer);
        if (asyncResponse.jscc_map) {
            var jscc_map = (eval)(asyncResponse.jscc_map);
            require('JSCC').init(jscc_map);
        }
        var suppress_js, handler = this.getHandler();
        if (handler) try {
            suppress_js = this._shouldSuppressJS(require('AsyncFeature').__invokeWithServerBitMap(asyncResponse.__sf, function() {
                return handler(asyncResponse);
            }));
        } catch (e) {
            asyncResponse.is_last && this._applyFinallyHandler(asyncResponse);
            throw e;
        }
        if (!suppress_js) this._handleJSResponse(asyncResponse);
        asyncResponse.is_last && this._applyFinallyHandler(asyncResponse);
    };
    AsyncRequest.prototype._shouldSuppressJS = function(handler_return_value) {
        'use strict';
        return handler_return_value === AsyncRequest.suppressOnloadToken;
    };
    AsyncRequest.prototype._handleJSResponse = function(asyncResponse) {
        'use strict';
        var relativeTo = this.getRelativeTo(),
            domOps = asyncResponse.domops,
            dtsgToken = asyncResponse.dtsgToken,
            jsMods = asyncResponse.jsmods,
            serverJS = new(require('ServerJS'))();
        serverJS.setRelativeTo(relativeTo);
        serverJS.setServerFeatures(asyncResponse.__sf);
        var requires;
        if (jsMods && jsMods.require) {
            requires = jsMods.require;
            delete jsMods.require;
        }
        if (jsMods) serverJS.handle(jsMods);
        if (dtsgToken) require('DTSG').setToken(dtsgToken);
        var finishHandleResp = function(AsyncDOM) {
            if (domOps && AsyncDOM) AsyncDOM.invoke(domOps, relativeTo);
            if (requires) serverJS.handle({
                require: requires
            });
            this._handleJSRegisters(asyncResponse, 'onload');
            if (this.lid) require('Arbiter').inform('tti_ajax', {
                s: this.lid,
                d: [this._sendTimeStamp || 0, this._sendTimeStamp && this._responseTime ? this._responseTime - this._sendTimeStamp : 0]
            }, require('Arbiter').BEHAVIOR_EVENT);
            this._handleJSRegisters(asyncResponse, 'onafterload');
            serverJS.cleanup();
        }.bind(this);
        if (domOps) {
            require('Bootloader').loadModules(["AsyncDOM"], finishHandleResp, 'AsyncRequest');
        } else finishHandleResp(null);
    };
    AsyncRequest.prototype._handleJSRegisters = function(asyncResponse, phase) {
        'use strict';
        var registers = asyncResponse[phase];
        if (registers)
            for (var ii = 0; ii < registers.length; ii++) require('ErrorUtils').applyWithGuard(new Function(registers[ii]), this);
    };
    AsyncRequest.prototype.invokeResponseHandler = function(interpreted) {
        'use strict';
        if (typeof interpreted.redirect !== 'undefined') {
            require('setTimeout')(function() {
                this.setURI(interpreted.redirect).send();
            }.bind(this), 0);
            return;
        }
        if (!this.handler && !this.errorHandler && !this.transportErrorHandler) return;
        var response = interpreted.asyncResponse;
        if (typeof response !== 'undefined') {
            if (this._timesliceInteraction != null) this._timesliceInteraction.receiveAsyncResponse(response).inform('async_response_received', {
                type: require('ArtilleryJSPointTypes').ASYNC_RESPONSE_RECEIVED
            });
            if (!this._isRelevant()) {
                this._invokeErrorHandler(1010);
                return;
            }
            if (response.inlinejs) require('evalGlobal')(response.inlinejs);
            if (response.lid) {
                this._responseTime = Date.now();
                if (global.CavalryLogger) this.cavalry = global.CavalryLogger.getInstance(response.lid);
                this.lid = response.lid;
            }
            var resourceCounts = [0, 0, 0];
            if (response.resource_map) resourceCounts = require('Bootloader').setResourceMap(response.resource_map);
            if (response.bootloadable) require('Bootloader').enableBootload(response.bootloadable);
            ix.add(response.ixData);
            var dispatch, arbiter_event;
            if (response.getError() && !response.getErrorIsWarning()) {
                var handler = function() {
                    var _getErrorHandler;
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return require('AsyncFeature').__invokeWithServerBitMap(response.__sf, (_getErrorHandler = this.getErrorHandler()).bind.apply(_getErrorHandler, [this].concat(args)));
                }.bind(this);
                dispatch = require('ErrorUtils').guard(this._dispatchErrorResponse, 'AsyncRequest#_dispatchErrorResponse for ' + this.getURI());
                dispatch = dispatch.bind(this, response, handler);
                this._logError(response);
                arbiter_event = 'error';
            } else {
                dispatch = require('ErrorUtils').guard(this._dispatchResponse.bind(this), 'AsyncRequest#_dispatchResponse for ' + this.getURI());
                dispatch = dispatch.bind(this, response);
                arbiter_event = 'response';
            }
            dispatch = require('executeAfter')(dispatch, function() {
                require('Arbiter').inform('AsyncRequest/' + arbiter_event, {
                    request: this,
                    response: response
                });
            }.bind(this));
            var replace = false;
            if (this.preBootloadHandler) replace = this.preBootloadHandler(response);
            response.css = response.css || [];
            response.js = response.js || [];
            require('Bootloader').loadResources(response.css.concat(response.js), require('AsyncRequestConfig').immediateDispatch ? dispatch : function() {
                return require('setTimeout')(dispatch, 0);
            }, replace, this.getURI());
            var fields = {
                uri: this.uri,
                components: Object.keys(response.bootloadable || {}),
                resourceCounts: resourceCounts
            };
            require('Arbiter').inform(EVENTS.SR_PAYLOAD, fields, require('Arbiter').BEHAVIOR_PERSISTENT);
        } else if (typeof interpreted.transportError !== 'undefined') {
            if (this._xFbServer) {
                this._invokeErrorHandler(1008);
            } else this._invokeErrorHandler(1012);
        } else this._invokeErrorHandler(1007);
    };
    AsyncRequest.prototype._logError = function(response) {
        'use strict';
        if (this.logErrorsEnabled && !this.getOption('suppressErrorAlerts')) {
            var message = void 0;
            try {
                message = JSON.stringify(response);
            } catch (e) {
                try {
                    message = JSON.stringify({
                        error: response.error,
                        errorSummary: response.errorSummary,
                        errorDescription: response.errorDescription
                    });
                } catch (ee) {
                    message = 'Too many circular references in the error message.';
                }
            }
            require('ErrorUtils').reportError(new Error(message), true);
        }
    };
    AsyncRequest.prototype._invokeErrorHandler = function(explicitError) {
        'use strict';
        var transport = this.transport;
        if (!transport) return;
        var error;
        if (this.responseText === '') {
            error = 1002;
        } else if (this._requestAborted) {
            error = 1011;
        } else {
            try {
                error = explicitError || transport.status || 1004;
            } catch (e2) {
                error = 1005;
            }
            if (false === navigator.onLine) error = 1006;
        }
        var desc, summary, silent = true;
        if (error === 1006) {
            summary = fbt._("No Network Connection");
            desc = fbt._("Your browser appears to be offline. Please check your internet connection and try again.");
        } else if (error >= 300 && error <= 399) {
            summary = fbt._("Redirection");
            desc = fbt._("Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.");
            var location = transport.getResponseHeader('Location');
            if (location) require('goURI')(location, true);
            silent = true;
        } else {
            summary = fbt._("Oops");
            desc = fbt._("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.");
        }
        var async_response = new(require('AsyncResponse'))(this, transport);
        Object.assign(async_response, {
            error: error,
            errorSummary: summary,
            errorDescription: desc,
            silentError: silent
        });
        require('AsyncFeatureLogging').maybeLogAsyncResponse('_invokeErrorHandler', this, async_response);
        if (this._timesliceInteraction != null) this._timesliceInteraction.inform('async_transport_error_received').addStringAnnotation('error_code', error.toString());
        this._logError(async_response);
        require('setTimeout')(function() {
            require('Arbiter').inform('AsyncRequest/error', {
                request: this,
                response: async_response
            });
        }.bind(this), 0);
        if (hasUnloaded() && !this.getOption('handleErrorAfterUnload')) return;
        if (!this.transportErrorHandler) return;
        var error_handler = this.getTransportErrorHandler().bind(this);
        !this.getOption('suppressErrorAlerts');
        require('ErrorUtils').applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler]);
    };
    AsyncRequest.prototype._solveQuicksandChallenge = function(async_response) {
        'use strict';
        var payload = async_response.getPayload();
        require('Bootloader').loadModules(["QuickSandSolver"], function(QuickSandSolver) {
            QuickSandSolver.solveAndSendRequestBack(this, payload);
        }.bind(this), 'AsyncRequest');
    };
    AsyncRequest.prototype._displayServerDialog = function(async_response, is_confirmation) {
        var allow_get = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        'use strict';
        var payload = async_response.getPayload();
        if (payload.__dialog !== undefined) {
            this._displayServerLegacyDialog(async_response, is_confirmation);
            return;
        }
        var json = payload.__dialogx;
        new(require('ServerJS'))().handle(json);
        require('Bootloader').loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
            ConfirmationDialog.setupConfirmation(async_response, this, allow_get);
        }.bind(this), 'AsyncRequest');
    };
    AsyncRequest.prototype._displayServerLegacyDialog = function(async_response, is_confirmation) {
        'use strict';
        var model = async_response.getPayload().__dialog;
        require('Bootloader').loadModules(["Dialog"], function(Dialog) {
            var dialog = new Dialog(model);
            if (is_confirmation) dialog.setHandler(this._displayConfirmationHandler.bind(this, dialog));
            dialog.setCancelHandler(function() {
                var handler = this.getServerDialogCancelHandler();
                try {
                    handler && handler(async_response);
                } catch (e) {
                    throw e;
                } finally {
                    this._applyFinallyHandler(async_response);
                }
            }.bind(this)).setCausalElement(this.relativeTo).show();
        }.bind(this), 'AsyncRequest');
    };
    AsyncRequest.prototype._displayConfirmationHandler = function(dialog) {
        'use strict';
        this.data.confirmed = 1;
        Object.assign(this.data, dialog.getFormData());
        this.send();
    };
    AsyncRequest.prototype.setJSONPTransport = function(transport) {
        'use strict';
        transport.subscribe('response', this._handleJSONPResponse.bind(this));
        transport.subscribe('abort', this._handleJSONPAbort.bind(this));
        this.transport = transport;
    };
    AsyncRequest.prototype._handleJSONPResponse = function(_, data) {
        'use strict';
        var transport = this.transport;
        if (!transport) return;
        this.is_first = this.is_first === undefined;
        var interpreted = this._interpretResponse(data);
        interpreted.asyncResponse.is_first = this.is_first;
        interpreted.asyncResponse.is_last = transport.hasFinished();
        this.invokeResponseHandler(interpreted);
        if (transport.hasFinished()) delete this.transport;
    };
    AsyncRequest.prototype._handleJSONPAbort = function() {
        'use strict';
        this._invokeErrorHandler();
        delete this.transport;
    };
    AsyncRequest.prototype._handleXHRResponse = function(transport) {
        'use strict';
        var interpreted;
        if (this.getOption('suppressEvaluation')) {
            interpreted = {
                asyncResponse: new(require('AsyncResponse'))(this, transport)
            };
            require('AsyncFeatureLogging').maybeLogAsyncResponse('_handleXHRResponse:suppressEvaluation', this, interpreted.asyncResponse);
        } else {
            var text = transport.responseText,
                error = null;
            try {
                var safe_text = this._unshieldResponseText(text);
                try {
                    var response = eval('(' + safe_text + ')');
                    interpreted = this._interpretResponse(response);
                } catch (exception) {
                    error = 'excep';
                    interpreted = {
                        transportError: 'eval() failed on async to ' + this.getURI()
                    };
                }
            } catch (exception) {
                error = 'empty';
                interpreted = {
                    transportError: exception.message
                };
            }
            if (error) {
                var ErrorSignal = global.ErrorSignal;
                ErrorSignal && ErrorSignal.sendErrorSignal('async_xport_resp', [(this._xFbServer ? '1008_' : '1012_') + error, this._xFbServer || '-', this.getURI(), text.length, text.substr(0, 1600)].join(':'));
            }
        }
        this.invokeResponseHandler(interpreted);
    };
    AsyncRequest.prototype._unshieldResponseText = function(text) {
        'use strict';
        var shield = "for (;;);",
            shieldlen = shield.length;
        if (text.length <= shieldlen) throw new Error('Response too short on async to ' + this.getURI());
        var offset = 0;
        while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
        offset && text.substring(offset, offset + shieldlen) == shield;
        return text.substring(offset + shieldlen);
    };
    AsyncRequest.prototype._interpretResponse = function(response) {
        'use strict';
        if (response.redirect) return {
            redirect: response.redirect
        };
        var r = new(require('AsyncResponse'))(this);
        if (response.__ar != 1) {
            r.payload = response;
        } else Object.assign(r, response);
        require('AsyncFeatureLogging').maybeLogAsyncResponse('_interpretResponse', this, response);
        return {
            asyncResponse: r
        };
    };
    AsyncRequest.prototype._isMultiplexable = function() {
        'use strict';
        if (this.getOption('jsonp') || this.getOption('useIframeTransport')) return false;
        if (!require('isFacebookURI')(new(require('URI'))(this.uri))) return false;
        if (!this.getOption('asynchronous_DEPRECATED')) return false;
        return true;
    };
    AsyncRequest.prototype._applyFinallyHandler = function(response) {
        'use strict';
        require('AsyncFeature').__invokeWithServerBitMap(response.__sf, function() {
            var timesliceInteraction = this._timesliceInteraction;
            if (timesliceInteraction) {
                timesliceInteraction.invokeWithProfiling('finally_handler', function() {
                    return this.finallyHandler(response);
                }.bind(this));
                timesliceInteraction.finishAsyncRequest();
            } else this.finallyHandler(response);
        }.bind(this));
    };
    AsyncRequest.prototype.handleResponse = function(response) {
        'use strict';
        var interpreted = this._interpretResponse(response);
        this.invokeResponseHandler(interpreted);
    };
    AsyncRequest.prototype.setMethod = function(m) {
        'use strict';
        this.method = m.toString().toUpperCase();
        return this;
    };
    AsyncRequest.prototype.getMethod = function() {
        'use strict';
        return this.method;
    };
    AsyncRequest.prototype.setData = function(obj) {
        'use strict';
        this.data = obj;
        return this;
    };
    AsyncRequest.prototype.setRequestHeader = function(name, value) {
        'use strict';
        this.headers[name] = value;
        return this;
    };
    AsyncRequest.prototype.setRawData = function(raw_data) {
        'use strict';
        this.rawData = raw_data;
        return this;
    };
    AsyncRequest.prototype.getData = function() {
        'use strict';
        return this.data;
    };
    AsyncRequest.prototype.setContextData = function(key, value, enabled) {
        'use strict';
        enabled = enabled === undefined ? true : enabled;
        if (enabled) this.context['_log_' + key] = value;
        return this;
    };
    AsyncRequest.prototype._setUserActionID = function() {
        'use strict';
        this.userActionID = (require('SessionName').getName() || '-') + '/-';
    };
    AsyncRequest.prototype.setURI = function(uri) {
        'use strict';
        var uri_obj = new(require('URI'))(uri);
        if (this.getOption('useIframeTransport') && !require('isFacebookURI')(uri_obj)) return this;
        if (!this._allowCrossOrigin && !this.getOption('jsonp') && !this.getOption('useIframeTransport') && !uri_obj.isSameOrigin()) return this;
        this._setUserActionID();
        if (!uri || uri_obj.isEmpty()) {
            var ErrorSignal = global.ErrorSignal;
            if (ErrorSignal) {
                var data = {
                    err_code: 1013,
                    vip: '-',
                    duration: 0,
                    xfb_ip: '-',
                    path: window.location.href,
                    aid: this.userActionID
                };
                ErrorSignal.sendErrorSignal('async_error', JSON.stringify(data));
                ErrorSignal.sendErrorSignal('async_xport_stack', [1013, window.location.href, null, require('ErrorUtils').normalizeError(new Error()).stack].join(':'));
            }
            return this;
        }
        this.uri = require('ZeroRewrites').rewriteURI(uri_obj);
        return this;
    };
    AsyncRequest.prototype.getURI = function() {
        'use strict';
        return this.uri.toString();
    };
    AsyncRequest.prototype.setInitialHandler = function(fn) {
        'use strict';
        this.initialHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setHandler = function(fn) {
        'use strict';
        if (validateResponseHandler(fn)) this.handler = fn;
        return this;
    };
    AsyncRequest.prototype.getHandler = function() {
        'use strict';
        var func = this.handler || require('emptyFunction'),
            timesliceInteraction = this._timesliceInteraction;
        if (timesliceInteraction) return function(response) {
            return timesliceInteraction.invokeWithProfiling('handler', function() {
                return func(response);
            });
        };
        return func;
    };
    AsyncRequest.prototype.setUploadProgressHandler = function(fn) {
        'use strict';
        if (validateResponseHandler(fn)) this.uploadProgressHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setErrorHandler = function(fn) {
        'use strict';
        if (validateResponseHandler(fn)) this.errorHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setTransportErrorHandler = function(fn) {
        'use strict';
        this.transportErrorHandler = fn;
        return this;
    };
    AsyncRequest.prototype.getErrorHandler = function() {
        'use strict';
        var func = this.errorHandler || require('emptyFunction'),
            timesliceInteraction = this._timesliceInteraction;
        if (timesliceInteraction) return function(response) {
            return timesliceInteraction.invokeWithProfiling('error_handler', function() {
                return func(response);
            });
        };
        return func;
    };
    AsyncRequest.prototype.getTransportErrorHandler = function() {
        'use strict';
        var func = this.transportErrorHandler || require('emptyFunction'),
            timesliceInteraction = this._timesliceInteraction;
        if (timesliceInteraction) return function(response) {
            return timesliceInteraction.invokeWithProfiling('transport_error_handler', function() {
                return func(response);
            });
        };
        return func;
    };
    AsyncRequest.prototype.setTimeoutHandler = function(timeout, fn) {
        'use strict';
        if (validateResponseHandler(fn)) {
            this.timeout = timeout;
            this.timeoutHandler = fn;
        }
        return this;
    };
    AsyncRequest.prototype.resetTimeout = function(timeout) {
        'use strict';
        if (!(this.timeoutHandler === null))
            if (timeout === null) {
                this.timeout = null;
                clearTimeout(this.timer);
                this.timer = null;
            } else {
                var clear_on_quickling_event = !this._allowCrossPageTransition;
                this.timeout = timeout;
                clearTimeout(this.timer);
                if (clear_on_quickling_event) {
                    this.timer = require('setTimeout')(this._handleTimeout.bind(this), this.timeout);
                } else this.timer = require('setTimeoutAcrossTransitions')(this._handleTimeout.bind(this), this.timeout);
            }
        return this;
    };
    AsyncRequest.prototype._handleTimeout = function() {
        'use strict';
        this._requestTimeout = true;
        var func = this.timeoutHandler;
        this.abandon();
        if (this._timesliceInteraction) {
            this._timesliceInteraction.invokeWithProfiling('timeout_handler', function() {
                return func && func(this);
            }.bind(this));
        } else func && func(this);
        this._logError({
            timeout: this
        });
    };
    AsyncRequest.prototype.disableArtilleryTracing = function() {
        'use strict';
        this.shouldTraceWithArtillery = false;
        this._timesliceInteraction = null;
        return this;
    };
    AsyncRequest.prototype.setNewSerial = function() {
        'use strict';
        this.id = ++last_id;
        return this;
    };
    AsyncRequest.prototype.setInterceptHandler = function(fn) {
        'use strict';
        this.interceptHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setFinallyHandler = function(fn) {
        'use strict';
        this.finallyHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setAbortHandler = function(fn) {
        'use strict';
        this.abortHandler = fn;
        return this;
    };
    AsyncRequest.prototype.getServerDialogCancelHandler = function() {
        'use strict';
        return this.serverDialogCancelHandler;
    };
    AsyncRequest.prototype.setServerDialogCancelHandler = function(fn) {
        'use strict';
        this.serverDialogCancelHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setPreBootloadHandler = function(fn) {
        'use strict';
        this.preBootloadHandler = fn;
        return this;
    };
    AsyncRequest.prototype.setReadOnly = function(readOnly) {
        'use strict';
        if (!(typeof readOnly != 'boolean')) this.readOnly = readOnly;
        return this;
    };
    AsyncRequest.prototype.getReadOnly = function() {
        'use strict';
        return this.readOnly;
    };
    AsyncRequest.prototype.setRelativeTo = function(element) {
        'use strict';
        this.relativeTo = element;
        return this;
    };
    AsyncRequest.prototype.getRelativeTo = function() {
        'use strict';
        return this.relativeTo;
    };
    AsyncRequest.prototype.setStatusClass = function(c) {
        'use strict';
        this.statusClass = c;
        return this;
    };
    AsyncRequest.prototype.setStatusElement = function(element) {
        'use strict';
        this.statusElement = element;
        return this;
    };
    AsyncRequest.prototype.getStatusElement = function() {
        'use strict';
        return require('ge')(this.statusElement);
    };
    AsyncRequest.prototype._isRelevant = function() {
        'use strict';
        if (this._allowCrossPageTransition) return true;
        if (!this.id) return true;
        return this.id > id_threshold;
    };
    AsyncRequest.prototype.clearStatusIndicator = function() {
        'use strict';
        var statusElem = this.getStatusElement();
        if (statusElem) {
            require('CSS').removeClass(statusElem, 'async_saving');
            require('CSS').removeClass(statusElem, this.statusClass);
        }
    };
    AsyncRequest.prototype.addStatusIndicator = function() {
        'use strict';
        var statusElem = this.getStatusElement();
        if (statusElem) {
            require('CSS').addClass(statusElem, 'async_saving');
            require('CSS').addClass(statusElem, this.statusClass);
        }
    };
    AsyncRequest.prototype.specifiesWriteRequiredParams = function() {
        'use strict';
        return this.writeRequiredParams.every(function(param) {
            this.data[param] = this.data[param] || require('Env')[param] || (require('ge')(param) || {}).value;
            if (this.data[param] !== undefined) return true;
            return false;
        }, this);
    };
    AsyncRequest.prototype.setOption = function(opt, v) {
        'use strict';
        if (typeof this.option[opt] != 'undefined') this.option[opt] = v;
        return this;
    };
    AsyncRequest.prototype.getOption = function(opt) {
        'use strict';
        typeof this.option[opt] == 'undefined';
        return this.option[opt];
    };
    AsyncRequest.prototype.abort = function() {
        'use strict';
        var transport = this.transport;
        if (transport) {
            var old_handler = this.getTransportErrorHandler();
            this.setOption('suppressErrorAlerts', true);
            this.setTransportErrorHandler(require('emptyFunction'));
            this._requestAborted = true;
            transport.abort();
            this.setTransportErrorHandler(old_handler);
        }
        this.abortHandler();
        AsyncMultiplex.unschedule(this);
    };
    AsyncRequest.prototype.abandon = function() {
        'use strict';
        clearTimeout(this.timer);
        this.setOption('suppressErrorAlerts', true).setHandler(require('emptyFunction')).setErrorHandler(require('emptyFunction')).setTransportErrorHandler(require('emptyFunction'));
        if (this.transport) {
            this._requestAborted = true;
            this.transport.abort();
        }
        this.abortHandler();
        AsyncMultiplex.unschedule(this);
    };
    AsyncRequest.prototype.setNectarData = function(nctrParams) {
        'use strict';
        if (nctrParams) {
            if (this.data.nctr === undefined) this.data.nctr = {};
            Object.assign(this.data.nctr, nctrParams);
        }
        return this;
    };
    AsyncRequest.prototype.setNectarModuleDataSafe = function(elem) {
        'use strict';
        var setNectarModuleData = this.setNectarModuleData;
        if (setNectarModuleData) setNectarModuleData.call(this, elem);
        return this;
    };
    AsyncRequest.prototype.setAllowCrossPageTransition = function(allow) {
        'use strict';
        this._allowCrossPageTransition = !!allow;
        if (this.timer) this.resetTimeout(this.timeout);
        return this;
    };
    AsyncRequest.prototype.setAllowIrrelevantRequests = function(allowIrrelevantRequests) {
        'use strict';
        this._allowIrrelevantRequests = allowIrrelevantRequests;
        return this;
    };
    AsyncRequest.prototype.setAllowCrossOrigin = function(allow) {
        'use strict';
        this._allowCrossOrigin = allow;
        return this;
    };
    AsyncRequest.prototype.setAllowCredentials = function(allow) {
        'use strict';
        this._allowCredentials = allow;
        return this;
    };
    AsyncRequest.prototype.setIsBackgroundRequest = function(isBackgroundRequest) {
        'use strict';
        this._isBackgroundRequest = isBackgroundRequest;
        return this;
    };
    AsyncRequest.prototype.setTimeSliceInteraction = function(interaction) {
        'use strict';
        if (this.shouldTraceWithArtillery) this._timesliceInteraction = interaction;
        return this;
    };
    AsyncRequest.prototype.send = function(isRetry) {
        var _uri$addQueryData;
        'use strict';
        isRetry = isRetry || false;
        if (!this.uri) return false;
        !this.errorHandler && !this.getOption('suppressErrorHandlerWarning');
        if (this.getOption('jsonp') && this.method != 'GET') this.setMethod('GET');
        if (this.getOption('useIframeTransport') && this.method != 'GET') this.setMethod('GET');
        this.timeoutHandler !== null && (this.getOption('jsonp') || this.getOption('useIframeTransport'));
        if (!this.getReadOnly()) {
            this.specifiesWriteRequiredParams();
            if (this.method != 'POST') return false;
        }
        Object.assign(this.data, require('getAsyncParams')(this.method));
        var timesliceInteraction = this._timesliceInteraction;
        if (this.shouldTraceWithArtillery) {
            if (!timesliceInteraction) {
                timesliceInteraction = require('TimeSliceInteraction').create('async_request');
                timesliceInteraction.setIsDefaultAsyncInteraction().addArtilleryIDHeader(this);
                this._timesliceInteraction = timesliceInteraction;
            }
            timesliceInteraction.trace().addStringAnnotation('uri', this.getURI());
            timesliceInteraction.inform('async_request_sent', {
                type: require('ArtilleryJSPointTypes').ASYNC_REQUEST_SENT
            });
        }
        if (!require('isEmpty')(this.context)) {
            Object.assign(this.data, this.context);
            this.data.ajax_log = 1;
        }
        if (require('Env').force_param) Object.assign(this.data, require('Env').force_param);
        this._setUserActionID();
        if (this.getOption('bundle') && this._isMultiplexable()) {
            AsyncMultiplex.schedule(this);
            return true;
        }
        this.setNewSerial();
        if (!this.getOption('asynchronous_DEPRECATED')) this.uri.addQueryData({
            __s: 1
        });
        this.uri.addQueryData((_uri$addQueryData = {}, _uri$addQueryData[require('PixelRatioConst').cookieName] = require('WebPixelRatio').getOriginalValue(), _uri$addQueryData));
        require('Arbiter').inform('AsyncRequest/send', {
            request: this
        });
        var uri_str, query;
        if (this.method == 'GET' || this.rawData) {
            uri_str = this.uri.addQueryData(this.data).toString();
            query = this.rawData || '';
        } else {
            if (this._allowCrossOrigin) this.uri.addQueryData({
                __a: 1
            });
            uri_str = this.uri.toString();
            query = require('PHPQuerySerializer').serialize(this.data);
        }
        if (this.transport) return false;
        if (this.getOption('jsonp') || this.getOption('useIframeTransport')) {
            requireLazy(['JSONPTransport'], function(JSONPTransport) {
                var transport = new JSONPTransport(this.getOption('jsonp') ? 'jsonp' : 'iframe', this.uri);
                this.setJSONPTransport(transport);
                transport.send();
            }.bind(this));
            return true;
        }
        var transport = require('ZeroRewrites').getTransportBuilderForURI(this.uri)();
        if (!transport) return false;
        var guardedOnReadyStateChange = require('TimeSlice').guard(this._onStateChange, 'XHR.onreadystatechange', {
            isContinuation: true
        });
        transport.onreadystatechange = function() {
            if (transport.readyState === 4) guardedOnReadyStateChange();
        };
        if (this.uploadProgressHandler && supportsUploadProgress(transport)) transport.upload.onprogress = this.uploadProgressHandler.bind(this);
        if (!isRetry) this.remainingRetries = this.getOption('retries');
        if (global.ErrorSignal) this._sendTimeStamp = this._sendTimeStamp || Date.now();
        this.transport = transport;
        try {
            transport.open(this.method, uri_str, this.getOption('asynchronous_DEPRECATED'));
        } catch (exception) {
            return false;
        }
        if (!this.uri.isSameOrigin() && !this.getOption('jsonp') && !this.getOption('useIframeTransport')) {
            if (!supportsCrossOrigin(transport)) return false;
            if ((require('isFacebookURI')(new(require('URI'))(this.uri)) || require('isMessengerDotComURI')(this.uri)) && this._allowCredentials !== false) transport.withCredentials = true;
        }
        if (this.method == 'POST' && !this.rawData) transport.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (this._isBackgroundRequest) transport.setRequestHeader('X_FB_BACKGROUND_STATE', '1');
        var asyncHeaders = require('getAsyncHeaders')(this.uri);
        Object.keys(asyncHeaders).forEach(function(name) {
            transport && transport.setRequestHeader(name, asyncHeaders[name]);
        });
        require('Arbiter').inform('AsyncRequest/will_send', {
            request: this
        });
        if (transport)
            for (var headerName in this.headers)
                if (this.headers.hasOwnProperty(headerName)) transport.setRequestHeader(headerName, this.headers[headerName]);
        this.addStatusIndicator();
        transport.send(query);
        if (this.timeout !== null) this.resetTimeout(this.timeout);
        AsyncRequest._inflightCount++;
        AsyncRequest._inflightAdd(this);
        require('ProfilingCounters').incrementCounter('ASYNC_REQUEST_COUNT', 1);
        return true;
    };
    AsyncRequest._inflightAdd = function(ar) {
        'use strict';
        this._inflight.push(ar);
    };
    AsyncRequest._inflightPurge = function() {
        'use strict';
        AsyncRequest._inflight = AsyncRequest._inflight.filter(function(ar) {
            return ar.transport && ar.transport.readyState < 4;
        });
    };
    AsyncRequest.prototype.exec = function(isRetry) {
        'use strict';
        if (this.getHandler() !== require('emptyFunction') || this.getErrorHandler() !== require('AsyncResponse').defaultErrorHandler) throw new Error('exec is an async function and does not allow previously set handlers');
        return new(require('Promise'))(function(resolve, reject) {
            this.setHandler(resolve).setErrorHandler(reject).send(isRetry);
        }.bind(this));
    };
    AsyncRequest.bootstrap = function(href, elem, is_post) {
        'use strict';
        var method = 'GET',
            readonly = true,
            data = {};
        if (is_post || elem && elem.rel == 'async-post') {
            method = 'POST';
            readonly = false;
            if (href) {
                href = new(require('URI'))(href);
                data = href.getQueryData();
                href.setQueryData({});
            }
        }
        var status_elem = require('Parent').byClass(elem, 'stat_elem') || elem;
        if (status_elem && require('CSS').hasClass(status_elem, 'async_saving')) return false;
        var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
        if (elem) {
            async.setHandler(function(response) {
                require('Event').fire(elem, 'success', {
                    response: response
                });
            });
            async.setErrorHandler(function(response) {
                if (require('Event').fire(elem, 'error', {
                        response: response
                    }) !== false) require('AsyncResponse').defaultErrorHandler(response);
            });
        }
        if (status_elem) {
            async.setStatusElement(status_elem);
            var status_class = status_elem.getAttribute('data-status-class');
            status_class && async.setStatusClass(status_class);
        }
        async.send();
        return false;
    };
    AsyncRequest.post = function(href, data) {
        'use strict';
        new AsyncRequest(href).setReadOnly(false).setMethod('POST').setData(data).send();
        return false;
    };
    AsyncRequest.getLastID = function() {
        'use strict';
        return last_id;
    };
    AsyncRequest.getInflightCount = function() {
        'use strict';
        return this._inflightCount;
    };
    AsyncRequest._inflightEnable = function() {
        'use strict';
        if (require('UserAgent_DEPRECATED').ie()) require('Run').onUnload(function() {
            AsyncRequest._inflight.forEach(function(ar) {
                if (ar.transport && ar.transport.readyState < 4) {
                    ar.transport.abort();
                    delete ar.transport;
                }
            });
        });
    };
    var _asyncMultiplex, _pendingAsyncMultiplexes = [];

    function AsyncMultiplex() {
        'use strict';
        this._requests = [];
    }
    AsyncMultiplex.prototype.add = function(request) {
        'use strict';
        this._requests.push(request);
    };
    AsyncMultiplex.prototype.remove = function(request) {
        'use strict';
        var requests = this._requests,
            requestsSent = this._requestsSent;
        for (var ii = 0, jj = requests.length; ii < jj; ii++)
            if (requests[ii] === request)
                if (requestsSent) {
                    requests[ii] = null;
                } else requests.splice(ii, 1);
    };
    AsyncMultiplex.prototype.send = function() {
        'use strict';
        !this._requestsSent || invariant(0);
        this._requestsSent = true;
        this._wrapperRequest = null;
        var requests = this._requests;
        if (!requests.length) return;
        var request;
        if (requests.length === 1) {
            request = requests[0];
        } else {
            var data = requests.filter(Boolean).map(function(request) {
                return [request.uri.getPath(), require('PHPQuerySerializer').serialize(request.data)];
            });
            request = this._wrapperRequest = new AsyncRequest('/ajax/proxy.php').setAllowCrossPageTransition(true).setData({
                data: data
            }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this));
        }
        request && request.setOption('bundle', false).send();
    };
    AsyncMultiplex.prototype._handler = function(response) {
        'use strict';
        var responses = response.getPayload().responses;
        if (responses.length !== this._requests.length) return;
        for (var ii = 0; ii < this._requests.length; ii++) {
            var request = this._requests[ii];
            if (!request) continue;
            var request_path = request.uri.getPath();
            if (this._wrapperRequest) request.id = this._wrapperRequest.id;
            if (responses[ii][0] !== request_path) {
                request.invokeResponseHandler({
                    transportError: 'Wrong response order in bundled request to ' + request_path
                });
                continue;
            }
            request.handleResponse(responses[ii][1]);
        }
        _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1));
    };
    AsyncMultiplex.prototype._transportErrorHandler = function(response) {
        'use strict';
        var interpreted = {
                transportError: response.errorDescription
            },
            paths = this._requests.filter(Boolean).map(function(request) {
                if (this._wrapperRequest) request.id = this._wrapperRequest.id;
                request.invokeResponseHandler(interpreted);
                return request.uri.getPath();
            }, this);
    };
    AsyncMultiplex.schedule = function(request) {
        'use strict';
        if (!_asyncMultiplex) {
            _asyncMultiplex = new AsyncMultiplex();
            _pendingAsyncMultiplexes.push(_asyncMultiplex);
            require('setTimeout')(function() {
                if (_asyncMultiplex) {
                    _asyncMultiplex.send();
                    _asyncMultiplex = null;
                }
            }, 0);
        }
        _asyncMultiplex.add(request);
        return _asyncMultiplex;
    };
    AsyncMultiplex.unschedule = function(request) {
        'use strict';
        _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
            asyncMultiplex.remove(request);
        });
    };
    AsyncRequest.EVENTS = EVENTS;
    AsyncRequest.suppressOnloadToken = {};
    AsyncRequest._inflight = [];
    AsyncRequest._inflightCount = 0;
    AsyncRequest._inflightAdd = require('emptyFunction');
    AsyncRequest._inflightPurge = require('emptyFunction');
    global.AsyncRequest = AsyncRequest;
    module.exports = AsyncRequest;
}), null);
__d('Random', ['ServerNonce', 'Alea'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = 4294967296,
        i = c('ServerNonce').ServerNonce,
        j = c('Alea')(i),
        k = {
            random: function l() {
                if (typeof window !== 'undefined' && typeof Uint32Array !== 'undefined') {
                    var m = new Uint32Array(1);
                    if (window.crypto && window.crypto.getRandomValues) {
                        return window.crypto.getRandomValues(m)[0] / h;
                    } else if (window.msCrypto && window.msCrypto.getRandomValues) return window.msCrypto.getRandomValues(m)[0] / h;
                }
                return j();
            },
            uint32: function l() {
                return Math.floor(this.random() * h);
            }
        };
    f.exports = k;
}), null);
__d('getElementRect', ['containsNode'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = i.ownerDocument.documentElement;
        if (!('getBoundingClientRect' in i) || !c('containsNode')(j, i)) return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        var k = i.getBoundingClientRect();
        return {
            left: Math.round(k.left) - j.clientLeft,
            right: Math.round(k.right) - j.clientLeft,
            top: Math.round(k.top) - j.clientTop,
            bottom: Math.round(k.bottom) - j.clientTop
        };
    }
    f.exports = h;
}), null);
__d('getElementPosition', ['getElementRect'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = c('getElementRect')(i);
        return {
            x: j.left,
            y: j.top,
            width: j.right - j.left,
            height: j.bottom - j.top
        };
    }
    f.exports = h;
}), null);
__d('Form', ['DataStore', 'DOM', 'DOMQuery', 'DTSG', 'Input', 'LSD', 'Random', 'PHPQuerySerializer', 'URI', 'getElementPosition', 'isFacebookURI', 'isNode'], (function a(b, c, d, e, f, g) {
    var h = 'FileList' in window,
        i = 'FormData' in window;

    function j(l) {
        var m = {};
        c('PHPQuerySerializer').serialize(l).split('&').forEach(function(n) {
            if (n) {
                var o = /^([^=]*)(?:=(.*))?$/.exec(n),
                    p = c('URI').decodeComponent(o[1]),
                    q = o[2] !== undefined,
                    r = q ? c('URI').decodeComponent(o[2]) : null;
                m[p] = r;
            }
        });
        return m;
    }
    var k = {
        getInputs: function l() {
            var m = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];
            return [].concat(c('DOMQuery').scry(m, 'input'), c('DOMQuery').scry(m, 'select'), c('DOMQuery').scry(m, 'textarea'), c('DOMQuery').scry(m, 'button'));
        },
        getInputsByName: function l(m) {
            var n = {};
            k.getInputs(m).forEach(function(o) {
                var p = n[o.name];
                n[o.name] = typeof p === 'undefined' ? o : [o].concat(p);
            });
            return n;
        },
        getSelectValue: function l(m) {
            return m.options[m.selectedIndex].value;
        },
        setSelectValue: function l(m, n) {
            for (var o = 0; o < m.options.length; ++o)
                if (m.options[o].value == n) {
                    m.selectedIndex = o;
                    break;
                }
        },
        getRadioValue: function l(m) {
            for (var n = 0; n < m.length; n++)
                if (m[n].checked) return m[n].value;
            return null;
        },
        getElements: function l(m) {
            return m.tagName == 'FORM' && m.elements != m ? Array.from(m.elements) : k.getInputs(m);
        },
        getAttribute: function l(m, n) {
            return (m.getAttributeNode(n) || {}).value || null;
        },
        setDisabled: function l(m, n) {
            k.getElements(m).forEach(function(o) {
                if (o.disabled !== undefined) {
                    var p = c('DataStore').get(o, 'origDisabledState');
                    if (n) {
                        if (p === undefined) c('DataStore').set(o, 'origDisabledState', o.disabled);
                        o.disabled = n;
                    } else if (p === false) o.disabled = false;
                }
            });
        },
        forEachValue: function l(m, n, o) {
            k.getElements(m).forEach(function(p) {
                if (!p.name || p.disabled) return;
                if (p.type === 'submit') return;
                if (p.type === 'reset' || p.type === 'button' || p.type === 'image') return;
                if ((p.type === 'radio' || p.type === 'checkbox') && !p.checked) return;
                if (p.nodeName === 'SELECT') {
                    for (var q = 0, r = p.options.length; q < r; q++) {
                        var s = p.options[q];
                        if (s.selected) o('select', p.name, s.value);
                    }
                    return;
                }
                if (p.type === 'file') {
                    if (h) {
                        var t = p.files;
                        for (var u = 0; u < t.length; u++) o('file', p.name, t.item(u));
                    }
                    return;
                }
                o(p.type, p.name, c('Input').getValue(p));
            });
            if (n && n.name && n.type === 'submit' && c('DOMQuery').contains(m, n) && c('DOMQuery').isNodeOfType(n, ['input', 'button'])) o('submit', n.name, n.value);
        },
        createFormData: function l(m, n) {
            if (!i) return null;
            var o = new FormData();
            if (m)
                if (c('isNode')(m)) {
                    k.forEachValue(m, n, function(r, s, t) {
                        o.append(s, t);
                    });
                } else {
                    var p = j(m);
                    for (var q in p)
                        if (p[q] == null) {
                            o.append(q, '');
                        } else o.append(q, p[q]);
                }
            return o;
        },
        serialize: function l(m, n) {
            var o = {};
            k.forEachValue(m, n, function(p, q, r) {
                if (p === 'file') return;
                k._serializeHelper(o, q, r);
            });
            return k._serializeFix(o);
        },
        _serializeHelper: function l(m, n, o) {
            var p = Object.prototype.hasOwnProperty,
                q = /([^\]]+)\[([^\]]*)\](.*)/.exec(n);
            if (q) {
                if (!m[q[1]] || !p.call(m, q[1])) {
                    var r;
                    m[q[1]] = r = {};
                    if (m[q[1]] !== r) return;
                }
                var s = 0;
                if (q[2] === '') {
                    while (m[q[1]][s] !== undefined) s++;
                } else s = q[2];
                if (q[3] === '') {
                    m[q[1]][s] = o;
                } else k._serializeHelper(m[q[1]], s.concat(q[3]), o);
            } else m[n] = o;
        },
        _serializeFix: function l(m) {
            for (var n in m)
                if (m[n] instanceof Object) m[n] = k._serializeFix(m[n]);
            var o = Object.keys(m);
            if (o.length === 0 || o.some(isNaN)) return m;
            o.sort(function(r, s) {
                return r - s;
            });
            var p = 0,
                q = o.every(function(r) {
                    return +r === p++;
                });
            if (q) return o.map(function(r) {
                return m[r];
            });
            return m;
        },
        post: function l(m, n, o) {
            var p = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3],
                q = new(c('URI'))(m),
                r = document.createElement('form');
            r.action = q.toString();
            r.method = 'POST';
            r.style.display = 'none';
            var s = !c('isFacebookURI')(q);
            if (o) {
                if (s) {
                    r.rel = 'noopener';
                    if (o === '_blank') {
                        o = btoa(c('Random').uint32());
                        var t = window.open('about:blank', o);
                        if (!(t === undefined)) t.opener = null;
                    }
                }
                r.target = o;
            }
            if (p)
                if (!s && q.getSubdomain() !== 'apps') {
                    n.fb_dtsg = c('DTSG').getToken();
                    if (c('LSD').token) n.lsd = c('LSD').token;
                }
            k.createHiddenInputs(n, r);
            c('DOMQuery').getRootElement().appendChild(r);
            r.submit();
            return false;
        },
        createHiddenInputs: function l(m, n, o) {
            var p = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
            o = o || {};
            var q = j(m);
            for (var r in q) {
                if (q[r] === null) continue;
                if (o[r] && p) {
                    o[r].value = q[r];
                } else {
                    var s = c('DOM').create('input', {
                        type: 'hidden',
                        name: r,
                        value: q[r]
                    });
                    o[r] = s;
                    n.appendChild(s);
                }
            }
            return o;
        },
        getFirstElement: function l(m) {
            var n = arguments.length <= 1 || arguments[1] === undefined ? ['input[type="text"]', 'textarea', 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]'] : arguments[1],
                o = [];
            for (var p = 0; p < n.length; p++) {
                o = c('DOMQuery').scry(m, n[p]);
                for (var q = 0; q < o.length; q++) {
                    var r = o[q];
                    try {
                        var t = c('getElementPosition')(r);
                        if (t.y > 0 && t.x > 0) return r;
                    } catch (s) {}
                }
            }
            return null;
        },
        focusFirst: function l(m) {
            var n = k.getFirstElement(m);
            if (n) {
                n.focus();
                return true;
            }
            return false;
        }
    };
    f.exports = k;
}), null);
__d('trackReferrer', ['Cookie', 'Parent'], (function a(b, c, d, e, f, g) {
    var h = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function i(k) {
        return h.exec(k)[1] || '';
    }

    function j(k, l) {
        k = c('Parent').byAttribute(k, 'data-referrer');
        if (k) {
            var m = i(l);
            if (!m) return;
            var n = m + '|' + k.getAttribute('data-referrer');
            c('Cookie').set('x-src', n, 1000);
        }
        return k;
    }
    f.exports = j;
}), null);
__d('FormSubmit', ['AsyncRequest', 'AsyncResponse', 'CSS', 'DOMQuery', 'Event', 'Form', 'Parent', 'trackReferrer'], (function a(b, c, d, e, f, g) {
    var h = {
        send: function i(j, k) {
            var l = (c('Form').getAttribute(j, 'method') || 'GET').toUpperCase();
            k = c('Parent').byTag(k, 'button') || k;
            var m = c('Parent').byClass(k, 'stat_elem') || j;
            if (c('CSS').hasClass(m, 'async_saving')) return null;
            if (k && (k.form !== j || k.nodeName != 'INPUT' && k.nodeName != 'BUTTON' || k.type != 'submit')) {
                var n = c('DOMQuery').scry(j, '.enter_submit_target')[0];
                n && (k = n);
            }
            var o = c('Form').serialize(j, k);
            c('Form').setDisabled(j, true);
            var p = c('Form').getAttribute(j, 'ajaxify') || c('Form').getAttribute(j, 'action'),
                q = !!c('Form').getAttribute(j, 'data-cors');
            c('trackReferrer')(j, p);
            var r = new(c('AsyncRequest'))().setAllowCrossOrigin(q).setURI(p).setData(o).setNectarModuleDataSafe(j).setReadOnly(l == 'GET').setMethod(l).setRelativeTo(j).setStatusElement(m).setInitialHandler(c('Form').setDisabled.bind(null, j, false)).setHandler(function(s) {
                c('Event').fire(j, 'success', {
                    response: s
                });
            }).setErrorHandler(function(s) {
                if (c('Event').fire(j, 'error', {
                        response: s
                    }) !== false) c('AsyncResponse').defaultErrorHandler(s);
            }).setFinallyHandler(c('Form').setDisabled.bind(null, j, false));
            r.send();
            return r;
        }
    };
    f.exports = h;
}), null);
__d('PlatformWidgetEndpoint', ['PlatformBaseVersioning'], (function a(b, c, d, e, f, g) {
    function h(m, n) {
        return c('PlatformBaseVersioning').versionAwarePath('/dialog' + '/' + m + (n ? '/' + n : ''));
    }

    function i(m, n) {
        return c('PlatformBaseVersioning').versionAwarePath('/plugins' + '/' + m + (n ? '/' + n : ''));
    }

    function j(m) {
        return /^\/plugins\//.test(c('PlatformBaseVersioning').getUnversionedPath(m));
    }

    function k(m) {
        return /^\/dialog\//.test(c('PlatformBaseVersioning').getUnversionedPath(m));
    }
    var l = {
        dialog: h,
        plugins: i,
        isPluginEndpoint: j,
        isDialogEndpoint: k
    };
    f.exports = l;
}), null);
__d('ArbiterFrame', [], (function a(b, c, d, e, f, g) {
    var h = {
        inform: function i(j, k, l) {
            var m = parent.frames,
                n = m.length,
                o;
            k.crossFrame = true;
            for (var p = 0; p < n; p++) {
                o = m[p];
                try {
                    if (!o || o == window) continue;
                    if (o.require) {
                        o.require('Arbiter').inform(j, k, l);
                    } else if (o.ServerJSAsyncLoader) o.ServerJSAsyncLoader.wakeUp(j, k, l);
                } catch (q) {}
            }
        }
    };
    f.exports = h;
}), null);
__d('Plugin', ['Arbiter', 'ArbiterFrame'], (function a(b, c, d, e, f, g) {
    var h = {
        CONNECT: 'platform/plugins/connect',
        DISCONNECT: 'platform/plugins/disconnect',
        ERROR: 'platform/plugins/error',
        RELOAD: 'platform/plugins/reload',
        DIALOG: 'platform/plugins/dialog',
        connect: function i(j, k) {
            var l = {
                identifier: j,
                href: j,
                story_fbid: k
            };
            c('Arbiter').inform(h.CONNECT, l);
            c('ArbiterFrame').inform(h.CONNECT, l);
        },
        disconnect: function i(j, k) {
            var l = {
                identifier: j,
                href: j,
                story_fbid: k
            };
            c('Arbiter').inform(h.DISCONNECT, l);
            c('ArbiterFrame').inform(h.DISCONNECT, l);
        },
        error: function i(j, k) {
            c('Arbiter').inform(h.ERROR, {
                action: j,
                content: k
            });
        },
        reload: function i(j) {
            c('Arbiter').inform(h.RELOAD, {
                reloadUrl: j || ''
            });
            c('ArbiterFrame').inform(h.RELOAD, {
                reloadUrl: j || ''
            });
        },
        reloadOtherPlugins: function i(j, k) {
            c('ArbiterFrame').inform(h.RELOAD, {
                reloadUrl: '',
                reload: j || '',
                identifier: k || ''
            });
        }
    };
    f.exports = h;
}), null);
__d("PluginConnectButtonType", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        BLUE_BASE: 1,
        WHITE_BASE: 2
    };
}), null);
__d('csx', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        throw new Error('csx: Unexpected class selector transformation.');
    }
    f.exports = h;
}), null);
__d('Button', ['csx', 'cx', 'CSS', 'DataStore', 'DOM', 'Event', 'Parent', 'emptyFunction', 'isNode'], (function a(b, c, d, e, f, g, h, i) {
    var j = 'uiButtonDisabled',
        k = 'uiButtonDepressed',
        l = "_42fr",
        m = "_42fs",
        n = 'button:blocker',
        o = 'href',
        p = 'ajaxify';

    function q(w, x) {
        var y = c('DataStore').get(w, n);
        if (x) {
            if (y) {
                y.remove();
                c('DataStore').remove(w, n);
            }
        } else if (!y) c('DataStore').set(w, n, c('Event').listen(w, 'click', c('emptyFunction').thatReturnsFalse, c('Event').Priority.URGENT));
    }

    function r(w) {
        var x = c('Parent').byClass(w, 'uiButton') || c('Parent').bySelector(w, "._42ft");
        if (!x) throw new Error('invalid use case');
        return x;
    }

    function s(w) {
        return c('DOM').isNodeOfType(w, 'a');
    }

    function t(w) {
        return c('DOM').isNodeOfType(w, 'button');
    }

    function u(w) {
        return c('CSS').matchesSelector(w, "._42ft");
    }
    var v = {
        getInputElement: function w(x) {
            x = r(x);
            if (s(x)) throw new Error('invalid use case');
            return t(x) ? x : c('DOM').find(x, 'input');
        },
        isEnabled: function w(x) {
            return !(c('CSS').hasClass(r(x), j) || c('CSS').hasClass(r(x), l));
        },
        setEnabled: function w(x, y) {
            x = r(x);
            var z = u(x) ? l : j;
            c('CSS').conditionClass(x, z, !y);
            if (s(x)) {
                var aa = x.getAttribute('href'),
                    ba = x.getAttribute('ajaxify'),
                    ca = c('DataStore').get(x, o, '#'),
                    da = c('DataStore').get(x, p);
                if (y) {
                    if (!aa) x.setAttribute('href', ca);
                    if (!ba && da) x.setAttribute('ajaxify', da);
                    x.removeAttribute('tabIndex');
                } else {
                    if (aa && aa !== ca) c('DataStore').set(x, o, aa);
                    if (ba && ba !== da) c('DataStore').set(x, p, ba);
                    x.removeAttribute('href');
                    x.removeAttribute('ajaxify');
                    x.setAttribute('tabIndex', '-1');
                }
                q(x, y);
            } else {
                var ea = v.getInputElement(x);
                ea.disabled = !y;
                q(ea, y);
            }
        },
        setDepressed: function w(x, y) {
            x = r(x);
            var z = u(x) ? m : k;
            c('CSS').conditionClass(x, z, y);
        },
        isDepressed: function w(x) {
            x = r(x);
            var y = u(x) ? m : k;
            return c('CSS').hasClass(x, y);
        },
        setLabel: function w(x, y) {
            x = r(x);
            if (u(x)) {
                var z = [];
                if (y) z.push(y);
                var aa = c('DOM').scry(x, '.img')[0];
                if (aa)
                    if (x.firstChild == aa) {
                        z.unshift(aa);
                    } else z.push(aa);
                c('DOM').setContent(x, z);
            } else if (s(x)) {
                var ba = c('DOM').find(x, 'span.uiButtonText');
                c('DOM').setContent(ba, y);
            } else v.getInputElement(x).value = y;
            var ca = u(x) ? "_42fv" : 'uiButtonNoText';
            c('CSS').conditionClass(x, ca, !y);
        },
        getIcon: function w(x) {
            x = r(x);
            return c('DOM').scry(x, '.img')[0];
        },
        setIcon: function w(x, y) {
            if (y && !c('isNode')(y)) return;
            var z = v.getIcon(x);
            if (!y) {
                z && c('DOM').remove(z);
                return;
            }
            c('CSS').addClass(y, 'customimg');
            if (z != y)
                if (z) {
                    c('DOM').replace(z, y);
                } else c('DOM').prependContent(r(x), y);
        }
    };
    f.exports = v;
}), null);
__d("debounceCore", [], (function a(b, c, d, e, f, g) {
    function h(i, j, k, l, m) {
        l = l || setTimeout;
        m = m || clearTimeout;
        var n = void 0;

        function o() {
            for (var p = arguments.length, q = Array(p), r = 0; r < p; r++) q[r] = arguments[r];
            o.reset();
            var s = function t() {
                i.apply(k, q);
            };
            s.__SMmeta = i.__SMmeta;
            n = l(s, j);
        }
        o.reset = function() {
            m(n);
        };
        return o;
    }
    f.exports = h;
}), null);
__d('debounce', ['debounceCore', 'setTimeout'], (function a(b, c, d, e, f, g) {
    function h(i, j, k, l) {
        if (j == null) j = 100;
        var m = function n(o, p, q) {
            return c('setTimeout')(o, p, q, !l);
        };
        return c('debounceCore')(i, j, k, m);
    }
    f.exports = h;
}), null);
__d('TextInputControl', ['DOMControl', 'Event', 'Input', 'debounce'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('DOMControl'));
    i = h && h.prototype;

    function j(k) {
        'use strict';
        i.constructor.call(this, k);
        var l = this.getRoot(),
            m = c('debounce')(this.update.bind(this), 0);
        c('Event').listen(l, {
            input: m,
            keydown: m,
            paste: m
        });
    }
    j.prototype.setMaxLength = function(k) {
        'use strict';
        c('Input').setMaxLength(this.getRoot(), k);
        return this;
    };
    j.prototype.getValue = function() {
        'use strict';
        return c('Input').getValue(this.getRoot());
    };
    j.prototype.isEmpty = function() {
        'use strict';
        return c('Input').isEmpty(this.getRoot());
    };
    j.prototype.setValue = function(k) {
        'use strict';
        c('Input').setValue(this.getRoot(), k);
        this.update();
        return this;
    };
    j.prototype.clear = function() {
        'use strict';
        return this.setValue('');
    };
    j.prototype.setPlaceholderText = function(k) {
        'use strict';
        c('Input').setPlaceholder(this.getRoot(), k);
        return this;
    };
    f.exports = j;
}), null);
__d('transferTextStyles', ['Style'], (function a(b, c, d, e, f, g) {
    var h = {
        fontFamily: null,
        fontSize: null,
        fontStyle: null,
        fontWeight: null,
        lineHeight: null,
        wordWrap: null
    };

    function i(j, k) {
        for (var l in h)
            if (h.hasOwnProperty(l)) h[l] = c('Style').get(j, l);
        c('Style').apply(k, h);
    }
    f.exports = i;
}), null);
__d('TextMetrics', ['DOM', 'Style', 'UserAgent', 'transferTextStyles'], (function a(b, c, d, e, f, g) {
    function h(j) {
        var k = j.clientWidth,
            l = c('Style').get(j, '-moz-box-sizing') == 'border-box';
        if (l && c('UserAgent').isBrowser('Firefox < 29')) return k;
        var m = c('Style').getFloat(j, 'paddingLeft') + c('Style').getFloat(j, 'paddingRight');
        return k - m;
    }

    function i(j, k) {
        'use strict';
        this.$TextMetrics1 = j;
        this.$TextMetrics2 = !!k;
        var l = 'textarea',
            m = 'textMetrics';
        if (this.$TextMetrics2) {
            l = 'div';
            m += ' textMetricsInline';
        }
        this.$TextMetrics3 = c('DOM').create(l, {
            className: m
        });
        c('transferTextStyles')(j, this.$TextMetrics3);
        document.body.appendChild(this.$TextMetrics3);
    }
    i.prototype.measure = function(j) {
        'use strict';
        var k = this.$TextMetrics1,
            l = this.$TextMetrics3;
        j = (j || k.value) + '...';
        if (!this.$TextMetrics2) {
            var m = h(k);
            c('Style').set(l, 'width', Math.max(m, 0) + 'px');
        }
        if (k.nodeName === 'TEXTAREA') {
            l.value = j;
        } else c('DOM').setContent(l, j);
        return {
            width: l.scrollWidth,
            height: l.scrollHeight
        };
    };
    i.prototype.destroy = function() {
        'use strict';
        c('DOM').remove(this.$TextMetrics3);
    };
    f.exports = i;
}), null);
__d("classWithMixins", [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = function l() {
            i.apply(this, arguments);
        };
        k.prototype = Object.assign(Object.create(i.prototype), j.prototype);
        return k;
    }
    f.exports = h;
}), null);
__d('TextAreaControl', ['Arbiter', 'ArbiterMixin', 'CSS', 'DOMControl', 'Event', 'Style', 'TextInputControl', 'TextMetrics', 'classWithMixins', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i;

    function j(l, m) {
        return c('Style').getFloat(l, m) || 0;
    }
    h = babelHelpers.inherits(k, c('classWithMixins')(c('TextInputControl'), c('mixin')(c('ArbiterMixin'))));
    i = h && h.prototype;

    function k(l) {
        'use strict';
        i.constructor.call(this, l);
        this.autogrow = c('CSS').hasClass(l, 'uiTextareaAutogrow');
        this.autogrowWithPlaceholder = c('CSS').hasClass(l, 'uiTextareaAutogrowWithPlaceholder');
        this.width = null;
        c('Event').listen(l, 'focus', this._handleFocus.bind(this));
    }
    k.prototype.setAutogrow = function(l) {
        'use strict';
        this.autogrow = l;
        return this;
    };
    k.prototype.onupdate = function() {
        'use strict';
        i.onupdate.call(this);
        this.updateHeight();
    };
    k.prototype.updateHeight = function() {
        'use strict';
        if (this.autogrow) {
            var l = this.getRoot();
            if (!this.metrics) this.metrics = new(c('TextMetrics'))(l);
            if (typeof this.initialHeight === 'undefined') {
                this.isBorderBox = c('Style').get(l, 'box-sizing') === 'border-box' || c('Style').get(l, '-moz-box-sizing') === 'border-box' || c('Style').get(l, '-webkit-box-sizing') === 'border-box';
                this.borderBoxOffset = j(l, 'padding-top') + j(l, 'padding-bottom') + j(l, 'border-top-width') + j(l, 'border-bottom-width');
                this.initialHeight = l.offsetHeight - this.borderBoxOffset;
            }
            var m = null;
            if ((!l.value || l.value.length === 0) && this.autogrowWithPlaceholder) {
                m = this.metrics.measure(l.placeholder);
            } else m = this.metrics.measure();
            var n = Math.max(this.initialHeight, m.height);
            if (this.isBorderBox) n += this.borderBoxOffset;
            if (this.maxHeight && n > this.maxHeight) {
                n = this.maxHeight;
                c('Arbiter').inform('maxHeightExceeded', {
                    textArea: l
                });
            }
            if (n !== this.height) {
                this.height = n;
                c('Style').set(l, 'height', n + 'px');
                c('Arbiter').inform('reflow');
                this.inform('resize');
            }
        } else if (this.metrics) {
            this.metrics.destroy();
            this.metrics = null;
        }
    };
    k.prototype.resetHeight = function() {
        'use strict';
        this.height = -1;
        this.update();
    };
    k.prototype.setMaxHeight = function(l) {
        'use strict';
        this.maxHeight = l;
    };
    k.prototype.setAutogrowWithPlaceholder = function(l) {
        'use strict';
        this.autogrowWithPlacedholder = l;
    };
    k.prototype._handleFocus = function() {
        'use strict';
        this.width = null;
    };
    k.getInstance = function(l) {
        'use strict';
        return c('DOMControl').getInstance(l) || new k(l);
    };
    f.exports = k;
}), null);
__d('PluginFlyout', ['csx', 'Arbiter', 'Button', 'CSS', 'DOM', 'DOMEvent', 'DOMEventListener', 'Focus', 'FormSubmit', 'Plugin', 'TextAreaControl'], (function a(b, c, d, e, f, g, h) {
    var i = c('Arbiter').SUBSCRIBE_NEW,
        j = c('Arbiter').subscribe,
        k = c('Arbiter').inform,
        l = function n(o, p) {
            return c('DOMEventListener').add(o, 'click', p);
        };

    function m(n, o, p) {
        var q = this,
            r = j(c('Plugin').CONNECT, function(event, s) {
                c('Arbiter').unsubscribe(r);
                q.init(n, o, p);
                q.connect(event, s);
            }, i);
        j(c('Plugin').DIALOG, function() {
            q.init(n, o, p);
            q.toggle();
        }, i);
    }
    Object.assign(m.prototype, {
        init: function n(o, p, q) {
            if (this.initialized) return;
            this.initialized = true;
            c('DOM').appendContent(o, JSON.parse(q));
            var r = c('DOM').find(o, 'form'),
                s = c('DOM').find(r, "._56zw"),
                t = c('DOM').find(r, "._56zx"),
                u = c('DOM').find(r, "._42x4"),
                v = c('TextAreaControl').getInstance(u);
            c('DOMEventListener').add(u, 'keyup', function(z) {
                c('Button').setEnabled(s, !!v.getValue());
            });
            c('DOMEventListener').add(window, 'keydown', function(z) {
                if (z.keyCode === 27) x();
            });
            c('DOMEventListener').add(r, 'submit', function(z) {
                new(c('DOMEvent'))(z).kill();
                c('FormSubmit').send(r);
            });
            var w = p === 'tiny' ? c('DOM').find(document.body, '.pluginPostFlyoutPrompt') : null;
            this.flyout = o;
            this.form = r;
            this.post_button = s;
            this.prompt = w;
            var x = this.hide.bind(this),
                y = this.show.bind(this);
            l(t, function(z) {
                new(c('DOMEvent'))(z).kill();
                x();
            });
            if (w) l(w, function(z) {
                new(c('DOMEvent'))(z).kill();
                y();
            });
            j(c('Plugin').CONNECT, this.connect.bind(this), i);
            j(c('Plugin').DISCONNECT, function() {
                x();
            }, i);
            j(m.SUCCESS, function() {
                x();
                if (w) c('CSS').hide(w);
            }, i);
            j(c('Plugin').ERROR, function(event, z) {
                if (z.action !== 'comment') return;
                c('DOM').setContent(c('DOM').find(r, "._56zy"), z.content);
                c('CSS').hide(s);
            }, i);
        },
        connect: function n(event, o) {
            if (o.crossFrame) return;
            if (this.prompt) c('CSS').show(this.prompt);
            if (!o.story_fbid) this.show();
        },
        show: function n() {
            this.shown = true;
            c('CSS').show(this.flyout);
            c('CSS').show(this.post_button);
            var o = c('DOM').scry(this.form, "._5jjo");
            if (o) {
                c('Focus').set(o[0]);
            } else c('Focus').set(this.form.comment);
            k(m.SHOW);
        },
        hide: function n() {
            this.shown = false;
            c('CSS').hide(this.flyout);
            k(m.HIDE);
        },
        toggle: function n() {
            if (this.shown) {
                this.hide();
            } else this.show();
        }
    });
    Object.assign(m, {
        SUCCESS: 'platform/plugins/flyout/success',
        SHOW: 'platform/plugins/flyout/show',
        HIDE: 'platform/plugins/flyout/hide',
        success: function n() {
            k(m.SUCCESS);
        }
    });
    f.exports = m;
}), null);
__d('GeneratedLoggerUtils', ['invariant', 'Banzai'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = c('Banzai').post;
    if (window.location.search.indexOf('showlog') > -1) i = function k(l, m, n) {
        c('Banzai').post(l, m, n);
    };
    var j = {
        log: i,
        serializeVector: function k(l) {
            if (!l) return l;
            if (Array.isArray(l)) return l;
            if (l.toArray) {
                var m = l;
                return m.toArray();
            }
            if (typeof l === 'object' && l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']) return Array.from(l);
            h(0);
        },
        serializeMap: function k(l) {
            if (!l) return l;
            if (l.toJS) {
                var m = l;
                return m.toJS();
            }
            if (typeof l === 'object' && l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']) {
                var n = l,
                    o = {};
                for (var p = n, q = Array.isArray(p), r = 0, p = q ? p : p[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                    var s;
                    if (q) {
                        if (r >= p.length) break;
                        s = p[r++];
                    } else {
                        r = p.next();
                        if (r.done) break;
                        s = r.value;
                    }
                    var t = s;
                    o[t[0]] = t[1];
                }
                return o;
            }
            if (Object.prototype.toString.call(l) === '[object Object]') return l;
            h(0);
        },
        checkExtraDataFieldNames: function k(l, m) {
            Object.keys(l).forEach(function(n) {
                !m.hasOwnProperty(n) || h(0);
            });
        },
        warnForInvalidFieldNames: function k(l, m, n, o) {},
        throwIfNull: function k(l, m) {
            l || h(0);
            return l;
        }
    };
    f.exports = j;
}), null);
__d("nullthrows", [], (function a(b, c, d, e, f, g) {
    var h = function i(j) {
        if (j != null) return j;
        throw new Error("Got unexpected null or undefined");
    };
    f.exports = h;
}), null);
__d('PluginLoggedOutUserTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        this.clear();
    }
    h.prototype.log = function() {
        c('GeneratedLoggerUtils').log('logger:PluginLoggedOutUserLoggerConfig', this.$PluginLoggedOutUserTypedLogger1, c('Banzai').BASIC);
    };
    h.prototype.logVital = function() {
        c('GeneratedLoggerUtils').log('logger:PluginLoggedOutUserLoggerConfig', this.$PluginLoggedOutUserTypedLogger1, c('Banzai').VITAL);
    };
    h.prototype.clear = function() {
        this.$PluginLoggedOutUserTypedLogger1 = {};
        return this;
    };
    h.prototype.updateData = function(j) {
        this.$PluginLoggedOutUserTypedLogger1 = babelHelpers['extends']({}, this.$PluginLoggedOutUserTypedLogger1, j);
        return this;
    };
    h.prototype.setHref = function(j) {
        this.$PluginLoggedOutUserTypedLogger1.href = j;
        return this;
    };
    h.prototype.setIsSDK = function(j) {
        this.$PluginLoggedOutUserTypedLogger1.is_sdk = j;
        return this;
    };
    h.prototype.setPluginAppID = function(j) {
        this.$PluginLoggedOutUserTypedLogger1.plugin_app_id = j;
        return this;
    };
    h.prototype.setPluginName = function(j) {
        this.$PluginLoggedOutUserTypedLogger1.plugin_name = j;
        return this;
    };
    h.prototype.setRefererURL = function(j) {
        this.$PluginLoggedOutUserTypedLogger1.referer_url = j;
        return this;
    };
    h.prototype.setVC = function(j) {
        this.$PluginLoggedOutUserTypedLogger1.vc = j;
        return this;
    };
    h.prototype.updateExtraData = function(j) {
        j = c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
        c('GeneratedLoggerUtils').checkExtraDataFieldNames(j, i);
        this.$PluginLoggedOutUserTypedLogger1 = babelHelpers['extends']({}, this.$PluginLoggedOutUserTypedLogger1, j);
        return this;
    };
    h.prototype.addToExtraData = function(j, k) {
        var l = {};
        l[j] = k;
        return this.updateExtraData(l);
    };
    var i = {
        href: true,
        is_sdk: true,
        plugin_app_id: true,
        plugin_name: true,
        referer_url: true,
        vc: true
    };
    f.exports = h;
}), null);
__d('PluginOptin', ['DOMEvent', 'DOMEventListener', 'PluginMessage', 'PopupWindow', 'URI', 'UserAgent_DEPRECATED', 'PlatformWidgetEndpoint', 'PluginLoggedOutUserTypedLogger'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        Object.assign(this, {
            return_params: c('URI').getRequestURI().getQueryData(),
            login_params: {},
            optin_params: {},
            plugin: i,
            api_key: j
        });
        this.addReturnParams({
            ret: 'optin'
        });
        this.login_params.nux = false;
        delete this.return_params.hash;
    }
    Object.assign(h.prototype, {
        addReturnParams: function i(j) {
            Object.assign(this.return_params, j);
            return this;
        },
        addLoginParams: function i(j) {
            Object.assign(this.login_params, j);
            return this;
        },
        addOptinParams: function i(j) {
            Object.assign(this.optin_params, j);
            return this;
        },
        start: function i() {
            var j = this.api_key || 127760087237610,
                k = new(c('URI'))(c('PlatformWidgetEndpoint').dialog('plugin.optin')).addQueryData(this.optin_params).addQueryData({
                    app_id: j,
                    secure: c('URI').getRequestURI().isSecure(),
                    social_plugin: this.plugin,
                    return_params: JSON.stringify(this.return_params),
                    login_params: JSON.stringify(this.login_params)
                });
            if (c('UserAgent_DEPRECATED').mobile()) {
                k.setSubdomain('m');
            } else k.addQueryData({
                display: 'popup'
            });
            if (this.return_params.act !== null && this.return_params.act === 'send') new(c('PluginLoggedOutUserTypedLogger'))().setPluginAppID(j).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();
            this.popup = c('PopupWindow').open(k.toString(), 420, 450);
            c('PluginMessage').listen();
            return this;
        }
    });
    h.starter = function(i, j, k, l) {
        var m = new h(i);
        m.addReturnParams(j || {});
        m.addLoginParams(k || {});
        m.addOptinParams(l || {});
        return m.start.bind(m);
    };
    h.listen = function(i, j, k, l, m) {
        c('DOMEventListener').add(i, 'click', function(n) {
            new(c('DOMEvent'))(n).kill();
            h.starter(j, k, l, m)();
        });
    };
    f.exports = h;
}), null);
__d('PluginConnectButton', ['csx', 'cx', 'Arbiter', 'CSS', 'DOM', 'DOMDimensions', 'DOMEvent', 'DOMEventListener', 'Focus', 'FormSubmit', 'PlatformWidgetEndpoint', 'Plugin', 'PluginConnectButtonType', 'PluginFlyout', 'PluginOptin', 'Style', 'URI', 'getElementPosition'], (function a(b, c, d, e, f, g, h, i) {
    var j = c('Arbiter').SUBSCRIBE_NEW,
        k = c('Arbiter').subscribe,
        l = function n(o, p) {
            return c('DOMEventListener').add(o, 'click', p);
        };

    function m(n) {
        this.config = n;
        this.busy = false;
        var o = c('DOM').find(n.form, '.pluginConnectButton');
        this.buttons = o;
        this.node_connected = c('DOM').find(o, '.pluginConnectButtonConnected');
        this.node_disconnected = c('DOM').find(o, '.pluginConnectButtonDisconnected');
        var p = function(r) {
            new(c('DOMEvent'))(r).kill();
            if (!this.busy) {
                this.submit();
                this.busy = this.canpersonalize;
            }
        }.bind(this);
        l(this.node_disconnected, p);
        if (n.buttontype === c('PluginConnectButtonType').BLUE_BASE) {
            l(c('DOM').find(o, '.pluginButtonX button'), p);
        } else if (n.buttontype === c('PluginConnectButtonType').WHITE_BASE) l(this.node_connected, p);
        l(this.node_connected, function(r) {
            return c('Arbiter').inform(c('Plugin').DIALOG, r);
        });
        var q = this.update.bind(this);
        k(c('Plugin').CONNECT, q, j);
        k(c('Plugin').DISCONNECT, q, j);
        k(c('Plugin').ERROR, this.error.bind(this), j);
        k('Connect.Unsafe.xd/reposition', this.flip.bind(this));
        k(c('PluginFlyout').HIDE, this.hideFlyout.bind(this));
        if (n.autosubmit) setTimeout(this.submit.bind(this), 0);
    }
    Object.assign(m.prototype, {
        update: function n(o, event) {
            this.busy = false;
            var p = this.config;
            if (event.identifier !== p.identifier) return;
            var q = o === c('Plugin').CONNECT,
                r = c('PlatformWidgetEndpoint').plugins(p.plugin);
            r += '/' + (!q ? 'connect' : 'disconnect');
            c('CSS')[q ? 'show' : 'hide'](this.node_connected);
            c('CSS')[q ? 'hide' : 'show'](this.node_disconnected);
            try {
                if (document.activeElement.nodeName.toLowerCase() === 'button') {
                    var t = q ? this.node_connected : this.node_disconnected,
                        u = c('DOM').find(t, 'button');
                    u.disabled = false;
                    c('Focus').set(u);
                }
            } catch (s) {}
            p.connected = q;
            p.form.setAttribute('action', r);
            p.form.setAttribute('ajaxify', r);
        },
        error: function n(event, o) {
            this.busy = false;
            if (o.action in {
                    connect: 1,
                    disconnect: 1
                }) {
                c('DOM').setContent(this.buttons, o.content);
                var p = c('DOM').scry(this.buttons, '.confirmButton');
                if (p.length === 1) c('Focus').set(p[0]);
            }
        },
        submit: function n() {
            if (!this.config.canpersonalize) return this.login();
            c('FormSubmit').send(this.config.form);
            this.fireStateToggle();
        },
        fireStateToggle: function n() {
            var o = this.config;
            if (o.connected) {
                c('Plugin').disconnect(o.identifier);
            } else c('Plugin').connect(o.identifier);
        },
        login: function n() {
            var o = this.config.plugin;
            new(c('PluginOptin'))(o, c('URI').getRequestURI().getQueryData().api_key).addReturnParams({
                act: 'connect'
            }).addLoginParams({
                social_plugin_action: this.config.pluginaction
            }).start();
        },
        flip: function n(o, p) {
            var q = c('DOM').scry(document.body, "._4xn8");
            if (q.length === 0) {
                return;
            } else q = q[0];
            var r = c('DOM').scry(this.config.form, '.pluginConnectButtonConnected .pluginButtonIcon'),
                s = c('Style').get(r[0], 'display') !== 'none' ? r[0] : r[1],
                t = c('DOM').find(document.body, '.pluginConnectButtonLayoutRoot'),
                u;
            if (p.type === 'reposition') {
                c('CSS').addClass(t, "_1f8a");
                c('Style').set(t, 'padding-left', 450 - t.offsetWidth + 'px');
                c('CSS').removeClass(t, "_1f8b");
                u = c('getElementPosition')(s).x + c('DOMDimensions').getElementDimensions(s).width / 2 - 6;
            } else {
                c('CSS').addClass(t, "_1f8b");
                c('Style').set(t, 'padding-left', '0px');
                c('CSS').removeClass(t, "_1f8a");
                u = 6;
            }
            c('Style').set(q, 'left', u + 'px');
        },
        hideFlyout: function n() {
            c('Focus').set(this.connected ? this.node_disconnected : this.node_connected);
        }
    });
    f.exports = m;
}), null);
__d('Locale', ['SiteData', 'ExecutionEnvironment'], (function a(b, c, d, e, f, g) {
    function h() {
        if (!c('ExecutionEnvironment').canUseDOM) {
            return false;
        } else return c('SiteData').is_rtl;
    }
    f.exports = {
        isRTL: h
    };
}), null);
__d('Log', ['sprintf'], (function a(b, c, d, e, f, g) {
    var h = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };

    function i(k, l) {
        var m = Array.prototype.slice.call(arguments, 2),
            n = c('sprintf').apply(null, m),
            o = window.console;
        if (o && j.level >= l) o[k in o ? k : 'log'](n);
    }
    var j = {
        level: -1,
        Level: h,
        debug: i.bind(null, 'debug', h.DEBUG),
        info: i.bind(null, 'info', h.INFO),
        warn: i.bind(null, 'warn', h.WARNING),
        error: i.bind(null, 'error', h.ERROR)
    };
    f.exports = j;
}), null);
__d('Queue', [], (function a(b, c, d, e, f, g) {
    var h = {};

    function i(j) {
        'use strict';
        this._opts = babelHelpers['extends']({
            interval: 0,
            processor: null
        }, j);
        this._queue = [];
        this._stopped = true;
    }
    i.prototype._dispatch = function(j) {
        'use strict';
        if (this._stopped || this._queue.length === 0) return;
        if (!this._opts.processor) {
            this._stopped = true;
            throw new Error('No processor available');
        }
        if (this._opts.interval) {
            this._opts.processor.call(this, this._queue.shift());
            this._timeout = setTimeout(this._dispatch.bind(this), this._opts.interval);
        } else
            while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
    };
    i.prototype.enqueue = function(j) {
        'use strict';
        if (this._opts.processor && !this._stopped) {
            this._opts.processor.call(this, j);
        } else this._queue.push(j);
        return this;
    };
    i.prototype.start = function(j) {
        'use strict';
        if (j) this._opts.processor = j;
        this._stopped = false;
        this._dispatch();
        return this;
    };
    i.prototype.isStarted = function() {
        'use strict';
        return !this._stopped;
    };
    i.prototype.dispatch = function() {
        'use strict';
        this._dispatch(true);
    };
    i.prototype.stop = function(j) {
        'use strict';
        this._stopped = true;
        if (j) clearTimeout(this._timeout);
        return this;
    };
    i.prototype.merge = function(j, k) {
        'use strict';
        this._queue[k ? 'unshift' : 'push'].apply(this._queue, j._queue);
        j._queue = [];
        this._dispatch();
        return this;
    };
    i.prototype.getLength = function() {
        'use strict';
        return this._queue.length;
    };
    i.get = function(j, k) {
        'use strict';
        var l;
        if (j in h) {
            l = h[j];
        } else l = h[j] = new i(k);
        return l;
    };
    i.exists = function(j) {
        'use strict';
        return j in h;
    };
    i.remove = function(j) {
        'use strict';
        return delete h[j];
    };
    f.exports = i;
}), null);
__d('resolveWindow', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = window,
            k = i.split('.');
        try {
            for (var m = 0; m < k.length; m++) {
                var n = k[m],
                    o = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(n);
                if (o) {
                    j = j.frames[o[1]];
                } else if (n === 'opener' || n === 'parent' || n === 'top') {
                    j = j[n];
                } else return null;
            }
        } catch (l) {
            return null;
        }
        return j;
    }
    f.exports = h;
}), null);
__d('XD', ['Arbiter', 'DOM', 'DOMDimensions', 'Log', 'PHPQuerySerializer', 'URI', 'Queue', 'isFacebookURI', 'isInIframe', 'resolveWindow'], (function a(b, c, d, e, f, g) {
    var h = 'fb_xdm_frame_' + location.protocol.replace(':', ''),
        i = {
            _callbacks: [],
            _opts: {
                autoResize: false,
                allowShrink: true,
                channelUrl: null,
                hideOverflow: false,
                resizeTimeout: 1000,
                resizeWidth: false,
                expectResizeAck: false,
                resizeAckTimeout: 6000
            },
            _lastResizeAckId: 0,
            _resizeCount: 0,
            _resizeTimestamp: 0,
            _shrinker: null,
            init: function k(l) {
                this._opts = babelHelpers['extends']({}, this._opts, l);
                if (this._opts.autoResize) this._startResizeMonitor();
                c('Arbiter').subscribe('Connect.Unsafe.resize.ack', function(m, n) {
                    if (!n.id) n.id = this._resizeCount;
                    if (n.id > this._lastResizeAckId) this._lastResizeAckId = n.id;
                }.bind(this));
            },
            getQueue: function k() {
                if (!this._queue) this._queue = new(c('Queue'))();
                return this._queue;
            },
            setChannelUrl: function k(l) {
                this.getQueue().start(function(m) {
                    return this.send(m, l);
                }.bind(this));
            },
            send: function k(l, m) {
                m = m || this._opts.channelUrl;
                if (!m) {
                    this.getQueue().enqueue(l);
                    return;
                }
                var n = {},
                    o = new(c('URI'))(m);
                Object.assign(n, l, c('PHPQuerySerializer').deserialize(o.getFragment()));
                var p = new(c('URI'))(n.origin).getOrigin(),
                    q = c('resolveWindow')(n.relation.replace(/^parent\./, '')),
                    r = 50,
                    s = function t() {
                        var u = q.frames[h];
                        try {
                            u.proxyMessage(c('PHPQuerySerializer').serialize(n), p);
                        } catch (v) {
                            if (--r) {
                                setTimeout(t, 100);
                            } else c('Log').warn('No such frame "' + h + '" to proxyMessage to');
                        }
                    };
                s();
            },
            _computeSize: function k() {
                var l = c('DOMDimensions').getDocumentDimensions(),
                    m = 0;
                if (this._opts.resizeWidth) {
                    var n = document.body;
                    if (n.clientWidth < n.scrollWidth) {
                        m = l.width;
                    } else {
                        var o = n.childNodes;
                        for (var p = 0; p < o.length; p++) {
                            var q = o[p],
                                r = q.offsetLeft + q.offsetWidth;
                            if (r > m) m = r;
                        }
                    }
                    m = Math.max(m, i.forced_min_width);
                }
                l.width = m;
                if (this._opts.allowShrink) {
                    if (!this._shrinker) this._shrinker = c('DOM').create('div');
                    c('DOM').appendContent(document.body, this._shrinker);
                    l.height = Math.max(this._shrinker.offsetTop, 0);
                }
                return l;
            },
            _startResizeMonitor: function k() {
                var l, m = document.documentElement;
                if (this._opts.hideOverflow) {
                    m.style.overflow = 'hidden';
                    document.body.style.overflow = 'hidden';
                }
                var n = function() {
                    var o = this._computeSize(),
                        p = Date.now(),
                        q = this._lastResizeAckId < this._resizeCount && p - this._resizeTimestamp > this._opts.resizeAckTimeout;
                    if (!l || this._opts.expectResizeAck && q || this._opts.allowShrink && l.width != o.width || !this._opts.allowShrink && l.width < o.width || this._opts.allowShrink && l.height != o.height || !this._opts.allowShrink && l.height < o.height) {
                        l = o;
                        this._resizeCount++;
                        this._resizeTimestamp = p;
                        var r = {
                            type: 'resize',
                            height: o.height,
                            ackData: {
                                id: this._resizeCount
                            }
                        };
                        if (o.width && o.width != 0) r.width = o.width;
                        try {
                            if (c('isFacebookURI')(new(c('URI'))(document.referrer)) && c('isInIframe')() && window.name && window.parent.location && window.parent.location.toString && c('isFacebookURI')(new(c('URI'))(window.parent.location))) {
                                var t = window.parent.document.getElementsByTagName('iframe');
                                for (var u = 0; u < t.length; u = u + 1)
                                    if (t[u].name == window.name) {
                                        if (this._opts.resizeWidth) t[u].style.width = r.width + 'px';
                                        t[u].style.height = r.height + 'px';
                                    }
                            }
                            this.send(r);
                        } catch (s) {
                            this.send(r);
                        }
                    }
                }.bind(this);
                n();
                setInterval(n, this._opts.resizeTimeout);
            }
        },
        j = babelHelpers['extends']({}, i);
    f.exports.UnverifiedXD = j;
    f.exports.XD = i;
    b.UnverifiedXD = j;
    b.XD = i;
}), null);
__d('UnverifiedXD', ['XD'], (function a(b, c, d, e, f, g) {
    var h = c('XD').UnverifiedXD;
    f.exports = h;
}), null);
__d('getOffsetParent', ['Style'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = i.parentNode;
        if (!j || j === document.documentElement) return document.documentElement;
        if (c('Style').get(j, 'position') !== 'static') return j;
        return j === document.body ? document.documentElement : h(j);
    }
    f.exports = h;
}), null);
__d('PluginResize', ['Locale', 'Log', 'UnverifiedXD', 'getOffsetParent', 'getStyleProperty'], (function a(b, c, d, e, f, g) {
    function h(l) {
        l = l || document.body;
        var m = 0,
            n = c('getOffsetParent')(l);
        if (c('Locale').isRTL() && n) {
            m = n.offsetWidth - l.offsetLeft - l.offsetWidth;
        } else if (!c('Locale').isRTL()) m = l.offsetLeft;
        return i(l) + m;
    }

    function i(l) {
        return Math.ceil(parseFloat(c('getStyleProperty')(l, 'width'))) || l.offsetWidth;
    }

    function j(l) {
        l = l || document.body;
        return l.offsetHeight + l.offsetTop;
    }

    function k(l, m, event, n) {
        this.calcWidth = l || h;
        this.calcHeight = m || j;
        this.width = undefined;
        this.height = undefined;
        this.reposition = !!n;
        this.event = event || 'resize';
    }
    Object.assign(k.prototype, {
        resize: function l() {
            var m = this.calcWidth(),
                n = this.calcHeight();
            if (m !== this.width || n !== this.height) {
                c('Log').debug('Resizing Plugin: (%s, %s, %s, %s)', m, n, this.event, this.reposition);
                this.width = m;
                this.height = n;
                c('UnverifiedXD').send({
                    type: this.event,
                    width: m,
                    height: n,
                    reposition: this.reposition
                });
            }
            return this;
        },
        auto: function l(m) {
            setInterval(this.resize.bind(this), m || 250);
            return this;
        }
    });
    k.auto = function(l, event, m) {
        return new k(h.bind(null, l), j.bind(null, l), event).resize().auto(m);
    };
    k.autoHeight = function(l, m, event, n) {
        return new k(function() {
            return l;
        }, j.bind(null, m), event).resize().auto(n);
    };
    k.getElementWidth = i;
    f.exports = k;
}), null);
__d('PluginConnectButtonResize', ['DOMDimensions', 'DOMQuery', 'PluginResize', 'Style', 'getElementPosition'], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        if (k) c('Style').set(i, 'width', k + 'px');
        c('PluginResize').auto(i, 'resize.flow');

        function l() {
            var m = c('DOMQuery').scry(document.body, '.uiTypeaheadView')[0];
            if (!m) return {
                x: 0,
                y: 0
            };
            var n = c('getElementPosition')(m),
                o = c('DOMDimensions').getElementDimensions(m);
            return {
                x: n.x + o.width,
                y: n.y + o.height
            };
        }
        new(c('PluginResize'))(function() {
            return (Math.max(c('PluginResize').getElementWidth(i), j && j.offsetWidth, l().x));
        }, function() {
            return (Math.max(i.offsetHeight, j ? j.offsetHeight + j.offsetTop : 0, l().y));
        }, 'resize.iframe', true).resize().auto();
    }
    f.exports = h;
}), null);
__d('PluginConnectButtonWrapIconButton', ['Arbiter', 'DOM', 'Event', 'Focus', 'FormSubmit', 'PlatformWidgetEndpoint', 'Plugin', 'PluginOptin', 'URI'], (function a(b, c, d, e, f, g) {
    var h = {
        _connected: false,
        _form: HTMLElement,
        _href: String,
        _button: Object,
        _plugin: String,
        _submitRequest: Object,
        initializeButton: function i(j, k, l, m, n, o, p, q, r, s) {
            this._connected = l;
            this._form = j;
            this._href = o;
            this._button = k;
            this._plugin = p;
            this._submitRequest = null;
            this._connecttip = r;
            this._disconnecttip = s;
            if (m) {
                c('Event').listen(j, 'click', function(t) {
                    t.preventDefault();
                    this.submit();
                }.bind(this));
                if (n) setTimeout(function() {
                    this.submit();
                    this._button.toggleButton();
                }.bind(this), 0);
                c('Arbiter').subscribe(c('Plugin').CONNECT, this._updatePlugin.bind(this));
                c('Arbiter').subscribe(c('Plugin').DISCONNECT, this._updatePlugin.bind(this));
                c('Arbiter').subscribe(c('Plugin').ERROR, function(t, u) {
                    return this._handleError(u);
                }.bind(this));
            } else c('Event').listen(this._form, 'click', function(t) {
                t.preventDefault();
                new(c('PluginOptin'))(p, c('URI').getRequestURI().getQueryData().api_key).addReturnParams({
                    act: 'connect'
                }).addLoginParams({
                    social_plugin_action: q
                }).start();
            });
        },
        submit: function i() {
            if (this._submitRequest !== null) {
                this._submitRequest.clearStatusIndicator();
                this._submitRequest.abort();
            }
            this._submitRequest = c('FormSubmit').send(this._form);
            if (this._connected) {
                c('Plugin').disconnect(this._href);
            } else c('Plugin').connect(this._href);
        },
        _updatePlugin: function i(j, k) {
            if (k.identifier !== this._href) return;
            var l = j === c('Plugin').CONNECT;
            if (l !== this._button.isActivated()) this._button.toggleButton();
            this._connected = l;
            this._toggleFormAction();
            this._button.setTitle(l ? this._disconnecttip : this._connecttip);
        },
        _toggleFormAction: function i() {
            var j = c('PlatformWidgetEndpoint').plugins(this._plugin) + '/' + (this._connected ? 'disconnect' : 'connect');
            this._form.setAttribute('action', j);
            this._form.setAttribute('ajaxify', j);
        },
        _handleError: function i(j) {
            c('DOM').setContent(this._form, j.content);
            var k = c('DOM').scry(this._form, '.confirmButton');
            if (k.length === 1) c('Focus').set(k[0]);
        }
    };
    f.exports = h;
}), null);
__d('PluginConnection', ['Arbiter', 'CSS', 'Plugin'], (function a(b, c, d, e, f, g) {
    var h = function i() {};
    Object.assign(h.prototype, {
        init: function i(j, k, l, event) {
            event = event || c('Plugin').CONNECT;
            this.identifier = j;
            this.element = k;
            this.css = l;
            c('Arbiter').subscribe([c('Plugin').CONNECT, c('Plugin').DISCONNECT], function(m, n) {
                if (j === n.href) c('CSS')[m === event ? 'addClass' : 'removeClass'](k, l);
                return true;
            });
            return this;
        },
        connected: function i() {
            return c('CSS').hasClass(this.element, this.css);
        },
        connect: function i() {
            return c('Arbiter').inform(c('Plugin').CONNECT, {
                href: this.identifier
            }, c('Arbiter').BEHAVIOR_STATE);
        },
        disconnect: function i() {
            return c('Arbiter').inform(c('Plugin').DISCONNECT, {
                href: this.identifier
            }, c('Arbiter').BEHAVIOR_STATE);
        },
        toggle: function i() {
            return this.connected() ? this.disconnect() : this.connect();
        }
    });
    h.init = function(i) {
        for (var j, k = 0; k < i.length; k++) {
            j = new h();
            j.init.apply(j, i[k]);
        }
    };
    f.exports = h;
}), null);
__d('AsyncFormRequestUtils', ['Arbiter'], (function a(b, c, d, e, f, g) {
    var h = {
        subscribe: function i(j, k, l) {
            c('Arbiter').subscribe('AsyncRequest/' + k, function(m, n) {
                var o = n.request.relativeTo;
                if (o && o === j) l(n);
            });
        }
    };
    f.exports = h;
}), null);
__d('randomInt', ['invariant'], (function a(b, c, d, e, f, g, h) {
    function i(j, k) {
        var l = arguments.length;
        l > 0 && l <= 2 || h(0);
        if (l === 1) {
            k = j;
            j = 0;
        }
        k = k;
        k > j || h(0);
        var m = this.random || Math.random;
        return Math.floor(j + m() * (k - j));
    }
    f.exports = i;
}), null);
__d('ClientIDs', ['randomInt'], (function a(b, c, d, e, f, g) {
    var h = {},
        i = {
            getNewClientID: function j() {
                var k = Date.now(),
                    l = k + ':' + (c('randomInt')(0, 4294967295) + 1);
                h[l] = true;
                return l;
            },
            isExistingClientID: function j(k) {
                return !!h[k];
            }
        };
    f.exports = i;
}), null);
__d("FBFeedLocations", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        NEWSFEED: 1,
        GROUP: 2,
        GROUP_PERMALINK: 3,
        COMMUNITY: 4,
        PERMALINK: 5,
        SHARE_OVERLAY: 6,
        PERMALINK_STREAM: 7,
        GROUP_PINNED: 8,
        FRIEND_LIST: 9,
        TIMELINE: 10,
        HASHTAG_FEED: 11,
        TOPIC_FEED: 12,
        PAGE: 13,
        NOTIFICATION_FEED: 14,
        GROUP_REPORTED: 15,
        GROUP_PENDING: 16,
        PAGES_FEED_IN_PAGES_MANAGER: 17,
        TICKER_CLASSIC: 18,
        PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER: 19,
        SEARCH: 20,
        GROUP_SEARCH: 21,
        NO_ATTACHMENT: 22,
        EMBED: 23,
        EMBED_FEED: 24,
        ATTACHMENT_PREVIEW: 25,
        STORIES_TO_SHARE: 26,
        PROMPT_PERMALINK: 27,
        TREND_HOVERCARD: 28,
        OPEN_GRAPH_PREVIEW: 30,
        HOTPOST_IN_PAGES_FEED: 31,
        SCHEDULED_POSTS: 32,
        TIMELINE_NOTES: 33,
        PAGE_INSIGHTS: 34,
        COMMENT_ATTACHMENT: 35,
        PAGE_TIMELINE: 36,
        GOODWILL_THROWBACK_PERMALINK: 37,
        LIKE_CONFIRM: 39,
        GOODWILL_THROWBACK_PROMOTION: 40,
        SPACES_FEED: 41,
        BROWSE_CONSOLE: 42,
        GROUP_FOR_SALE_COMPACT: 43,
        ENTITY_FEED: 44,
        GROUP_FOR_SALE_DISCUSSION: 45,
        PAGES_CONTENT_TAB_PREVIEW: 46,
        GOODWILL_THROWBACK_SHARE: 47,
        TIMELINE_VIDEO_SHARES: 48,
        EVENT: 49,
        PAGE_PLUGIN: 50,
        SRT: 51,
        PAGES_CONTENT_TAB_INSIGHTS: 52,
        ADS_PE_CONTENT_TAB_INSIGHTS: 53,
        PAGE_ACTIVITY_FEED: 54,
        VIDEO_CHANNEL: 55,
        POST_TO_PAGE: 56,
        GROUPS_GSYM_HOVERCARD: 57,
        GROUP_POST_TOPIC_FEED: 58,
        FEED_SURVEY: 59,
        PAGES_MODERATION: 60,
        SAVED_DASHBOARD: 61,
        PULSE_SEARCH: 62,
        GROUP_NUX: 63,
        GROUP_NUX_POST_VIEW: 64,
        EVENT_PERMALINK: 65,
        FUNDRAISER_PAGE: 66,
        EXPLORE_FEED: 67,
        CRT: 68,
        REVIEWS_FEED: 69,
        VIDEO_HOME_CHANNEL: 70,
        NEWS: 71,
        TIMELINE_FRIENDSHIP: 72,
        SAVED_REMINDERS: 73,
        PSYM: 74,
        ADMIN_FEED: 75,
        CAMPFIRE_NOTE: 76,
        PAGES_CONTEXT_CARD: 77,
        ACTIVITY_LOG: 78,
        WALL_POST_REPORT: 79,
        TIMELINE_BREAKUP: 80,
        POLITICIANS_FEED: 81,
        PRODUCT_DETAILS: 82,
        SPORTS_PLAY_FEED: 83,
        GROUP_TOP_STORIES: 84,
        PAGE_TIMELINE_PERMALINK: 86,
        OFFERS_WALLET: 87,
        INSTREAM_VIDEO_IN_LIVE: 88,
        SPOTLIGHT: 89,
        SEARCH_DERP: 90,
        SOCIAL_BALLOT: 91,
        GROUP_SUGGESTIONS_WITH_STORY: 92,
        SOCIAL_BALLOT_PERMALINK: 93,
        LOCAL_SERP: 94,
        FUNDRAISER_SELF_DONATION_FEED: 95,
        CONVERSATION_NUB: 97,
        GROUP_TOP_SALE_STORIES: 98,
        GROUP_LEARNING_COURSE_UNIT_FEED: 99,
        SUPPORT_INBOX_READ_TIME_BLOCK: 100,
        PAGE_POSTS_CARD: 101,
        CRISIS_POST: 102,
        SUPPORT_INBOX_GROUP_RESPONSIBLE: 103,
        PAGE_POST_DIALOG: 104,
        CRISIS_DIALOG_POST: 105,
        PAGE_LIVE_VIDEOS_CARD: 106,
        PAGE_POSTS_CARD_COMPACT: 107,
        GROUP_MEMBER_BIO_FEED: 108,
        LIVE_COMMENT_ATTACHMENT: 109,
        GROUP_COMPOSER: 110,
        GROUP_INBOX_GROUP: 111,
        GROUP_INBOX_AGGREGATED: 112,
        ENDORSEMENTS: 113,
        EVENTS_DASHBOARD: 114,
        CURATED_COLLECTIONS_PAGE: 115,
        OYML: 116,
        COLLEGE_HOMEPAGE: 117,
        GROUP_LIVE_VIDEOS_CARD: 118,
        COLLEGE_HIGHLIGHTS: 119,
        VIDEO_PERMALINK: 120,
        JOB_CAROUSEL_NETEGO: 121,
        TOPIC_PAGE: 122,
        USER_SCHEDULED_POSTS: 123,
        GOODWILL_THROWBACK_ATTACHMENT_PREVIEW: 124,
        INSTREAM_VIDEO_IN_WASLIVE: 125,
        INSTREAM_VIDEO_IN_NONLIVE: 126,
        SIGNAL_APP: 127,
        ALBUM_FEED: 128
    };
}), null);
__d('Keys', [], (function a(b, c, d, e, f, g) {
    'use strict';
    f.exports = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    };
}), null);
__d('PluginFeedLikeButton', ['Arbiter', 'AsyncFormRequestUtils', 'ClientIDs', 'CSS', 'DOM', 'DOMEventListener', 'FBFeedLocations', 'FormSubmit', 'Keys', 'PluginOptin', 'URI'], (function a(b, c, d, e, f, g) {
    window.resetConfirmStoryLike = function(i) {
        c('CSS').show(c('DOM').find(document, '#likeStory_' + i));
        c('DOM').remove(c('DOM').find(document, '#confirmStory_' + i));
    };
    var h = {
        addClientId: function i(j) {
            j.setAttribute('value', c('ClientIDs').getNewClientID());
        },
        loggedOutLikeButton: function i(j, k, l) {
            var m = '';
            if (k === c('FBFeedLocations').EMBED) {
                m = 'post';
            } else if (k === c('FBFeedLocations').PAGE_PLUGIN) {
                m = 'page';
            } else throw new Error('Invalid FBFeedLocation type.');
            var n = new(c('PluginOptin'))(m).addReturnParams({
                act: 'like_' + j
            });
            c('DOMEventListener').add(l, 'click', n.start.bind(n));
        },
        init: function i(j, k, l, m, n) {
            var o = function r(s) {
                if (s.type === 'keypress')
                    if (s.keyCode === c('Keys').RETURN || s.keyCode === c('Keys').SPACE) {
                        c('FormSubmit').send(n);
                    } else return;
                c('FormSubmit').send(n);
            };
            c('DOMEventListener').add(k, 'click', o);
            c('DOMEventListener').add(l, 'click', o);
            c('DOMEventListener').add(k, 'keypress', o);
            c('DOMEventListener').add(l, 'keypress', o);
            var p = m.getAttribute('value') === '1';
            c('AsyncFormRequestUtils').subscribe(n, 'send', function(r) {
                var s = m.getAttribute('value') === '1';
                c('CSS').conditionShow(l, s);
                c('CSS').conditionShow(k, !s);
                c('Arbiter').inform('embeddedUfiToggle', {
                    isLike: s,
                    storyToken: j
                });
                m.setAttribute('value', s ? '' : '1');
            });
            c('AsyncFormRequestUtils').subscribe(n, 'response', function(r) {
                var s = r.response.payload;
                if (s && !s.success) {
                    var t = s.isLike;
                    c('CSS').conditionShow(k, t);
                    c('CSS').conditionShow(l, !t);
                    c('Arbiter').inform('revertLike', {
                        isLike: t,
                        storyToken: j
                    });
                    m.setAttribute('value', t ? '1' : '');
                }
            });
            var q = new(c('URI'))(window.location.search).getQueryData();
            if (p && q.act === 'like_' + j) c('FormSubmit').send(n);
        }
    };
    f.exports = h;
}), null);
__d('PluginFlyoutDialog', ['Arbiter', 'DOMEvent', 'DOMEventListener', 'PluginFlyout'], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        this.parent = new(c('PluginFlyout'))(i, j, k);
        this.flyout = i;
        c('Arbiter').subscribe(c('PluginFlyout').SHOW, this.show.bind(this), c('Arbiter').SUBSCRIBE_NEW);
    }
    Object.assign(h.prototype, {
        show: function i() {
            if (this.subscribed) return;
            this.subscribed = 1;
            var j = window.ServerJSAsyncLoader;
            j && j.ondemandjs && j.run(j.ondemandjs);
            c('DOMEventListener').add(this.flyout.parentNode, 'click', function(k) {
                k = new(c('DOMEvent'))(k);
                if (k.target === this.flyout.parentNode) {
                    k.kill();
                    this.parent.hide();
                }
            }.bind(this));
        }
    });
    f.exports = h;
}), null);
__d('escapeRegex', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        return i.replace(/([.?*+\^$\[\]\\(){}|\-])/g, '\\$1');
    }
    f.exports = h;
}), null);
__d('intlNumUtils', ['NumberFormatConfig', 'escapeRegex'], (function a(b, c, d, e, f, g) {
    var h = /(\d)(\d\d\d)($|\D)/,
        i = {
            '\u060C': '.',
            '\u0660': '0',
            '\u0661': '1',
            '\u0662': '2',
            '\u0663': '3',
            '\u0664': '4',
            '\u0665': '5',
            '\u0666': '6',
            '\u0667': '7',
            '\u0668': '8',
            '\u0669': '9',
            '\u066B': '.',
            '\u06F0': '0',
            '\u06F1': '1',
            '\u06F2': '2',
            '\u06F3': '3',
            '\u06F4': '4',
            '\u06F5': '5',
            '\u06F6': '6',
            '\u06F7': '7',
            '\u06F8': '8',
            '\u06F9': '9'
        },
        j = ['\u0433\u0440\u043d.', '\u0434\u0435\u043d.', '\u043b\u0432.', '\u043c\u0430\u043d.', '\u0564\u0580.', '\u062c.\u0645.', '\u062f.\u0625.', '\u062f.\u0627.', '\u062f.\u0628.', '\u062f.\u062a.', '\u062f.\u062c.', '\u062f.\u0639.', '\u062f.\u0643.', '\u062f.\u0644.', '\u062f.\u0645.', '\u0631.\u0633.', '\u0631.\u0639.', '\u0631.\u0642.', '\u0631.\u064a.', '\u0644.\u0633.', '\u0644.\u0644.', '\u0783.', 'B/.', 'Bs.', 'Fr.', 'kr.', 'L.', 'p.', 'S/.'],
        k = {};

    function l(aa) {
        if (!k[aa]) k[aa] = new RegExp(aa, 'i');
        return k[aa];
    }
    var m = l(j.reduce(function(aa, ba, ca) {
        return aa + (ca ? '|' : '') + '(' + c('escapeRegex')(ba) + ')';
    }, ''));

    function n(aa, ba, ca, da, ea) {
        ca = ca || '';
        da = da || '.';
        ea = ea || 0;
        if (ba === undefined || ba === null) {
            aa = aa.toString();
        } else if (typeof aa === 'string') {
            aa = t(aa, ba);
        } else aa = r(aa, ba);
        var fa = aa.split('.'),
            ga = fa[0],
            ha = fa[1];
        if (Math.abs(parseInt(ga, 10)).toString().length >= ea) {
            var ia = '',
                ja = '$1' + ca + '$2$3';
            while ((ia = ga.replace(h, ja)) != ga) ga = ia;
        }
        var ka = ga;
        if (ha) ka += da + ha;
        return ka;
    }

    function o(aa, ba) {
        return n(aa, ba, '', c('NumberFormatConfig').decimalSeparator, c('NumberFormatConfig').minDigitsForThousandsSeparator);
    }

    function p(aa, ba) {
        return n(aa, ba, c('NumberFormatConfig').numberDelimiter, c('NumberFormatConfig').decimalSeparator, c('NumberFormatConfig').minDigitsForThousandsSeparator);
    }

    function q(aa, ba, ca) {
        var da = Math.floor(Math.log(aa) / Math.LN10),
            ea = aa;
        if (da < ca) ea = aa * Math.pow(10, -da + ca);
        var fa = Math.pow(10, Math.floor(Math.log(ea) / Math.LN10) - ca + 1),
            ga = Math.round(ea / fa) * fa;
        if (da < ca) ga /= Math.pow(10, -da + ca);
        return p(ga, ba);
    }

    function r(aa, ba) {
        var ca = ba == null ? 0 : ba,
            da = Math.pow(10, ca),
            ea = aa;
        ea = Math.round(ea * da) / da;
        ea = ea + '';
        if (!ca) return ea;
        var fa = ea.indexOf('.'),
            ga = 0;
        if (fa == -1) {
            ea += '.';
            ga = ca;
        } else ga = ca - (ea.length - fa - 1);
        for (var ha = 0, ia = ga; ha < ia; ha++) ea += '0';
        return ea;
    }
    var s = function aa(ba, ca) {
        for (var da = 0; da < ca; da++) ba += '0';
        return ba;
    };

    function t(aa, ba) {
        var ca = aa.indexOf('.'),
            da = ca === -1 ? aa : aa.slice(0, ca),
            ea = ca === -1 ? '' : aa.slice(ca + 1);
        return ba ? da + '.' + s(ea.slice(0, ba), ba - ea.length) : da;
    }
    var u = {},
        v = function aa(ba) {
            if (!u[ba]) u[ba] = new RegExp('([^\\/p]|^)' + c('escapeRegex')(ba) + '(\\d*).*', 'i');
            return u[ba];
        };

    function w(aa, ba, ca) {
        aa = aa.split('').map(function(ja) {
            return (i.hasOwnProperty(ja) ? i[ja] : ja);
        }).join('').trim();
        aa = aa.replace(/^[^\d]*\-/, '\u0002');
        aa = aa.replace(m, '');
        ca = ca || '';
        var da = c('escapeRegex')(ba),
            ea = c('escapeRegex')(ca),
            fa = l('^[^\\d]*\\d.*' + da + '.*\\d[^\\d]*$');
        if (!fa.test(aa)) {
            var ga = l('(^[^\\d]*)' + da + '(\\d*[^\\d]*$)');
            if (ga.test(aa)) {
                aa = aa.replace(ga, '$1\u0001$2');
                return x(aa);
            }
            var ha = l('^[^\\d]*[\\d ' + c('escapeRegex')(ea) + ']*[^\\d]*$');
            if (!ha.test(aa)) aa = '';
            return x(aa);
        }
        var ia = l('(^[^\\d]*[\\d ' + ea + ']*)' + da + '(\\d*[^\\d]*$)');
        aa = ia.test(aa) ? aa.replace(ia, '$1\u0001$2') : '';
        return x(aa);
    }

    function x(aa) {
        aa = aa.replace(/[^0-9\u0001\u0002]/g, '').replace('\u0001', '.').replace('\u0002', '-');
        var ba = Number(aa);
        return aa === '' || isNaN(ba) ? null : ba;
    }

    function y(aa) {
        return w(aa, c('NumberFormatConfig').decimalSeparator || '.', c('NumberFormatConfig').numberDelimiter);
    }
    var z = {
        formatNumber: o,
        formatNumberRaw: n,
        formatNumberWithThousandDelimiters: p,
        formatNumberWithLimitedSigFig: q,
        parseNumber: y,
        parseNumberRaw: w,
        getFloatString: function aa(ba, ca, da) {
            var ea = String(ba),
                fa = ea.split('.'),
                ga = z.getIntegerString(fa[0], ca);
            if (fa.length === 1) return ga;
            return ga + da + fa[1];
        },
        getIntegerString: function aa(ba, ca) {
            if (ca === '') ca = ',';
            var da = String(ba),
                ea = /(\d+)(\d{3})/;
            while (ea.test(da)) da = da.replace(ea, '$1' + ca + '$2');
            return da;
        }
    };
    f.exports = z;
}), null);
__d('formatNumber', ['intlNumUtils'], (function a(b, c, d, e, f, g) {
    function h() {
        for (var i = arguments.length, j = Array(i), k = 0; k < i; k++) j[k] = arguments[k];
        return c('intlNumUtils').formatNumber.apply(c('intlNumUtils'), j);
    }
    h.withThousandDelimiters = c('intlNumUtils').formatNumberWithThousandDelimiters;
    f.exports = h;
}), null);
__d('intlSummarizeNumber', ['fbt', 'formatNumber'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        var k = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        j = parseFloat(j.toFixed(k));
        if (Math.abs(j) < 1000) return c('formatNumber')(j, k);
        j = parseFloat((j / 1000).toFixed(k || 1));
        if (Math.abs(j) < 1000) return String(h._("{number}K", [h.param('number', c('formatNumber')(j, k || j % 1 && 1))]));
        j = parseFloat((j / 1000).toFixed(k || 1));
        if (Math.abs(j) < 1000) return String(h._("{number}M", [h.param('number', c('formatNumber')(j, k || j % 1 && 1))]));
        j = parseFloat((j / 1000).toFixed(k || 1));
        return String(h._("{number}B", [h.param('number', c('formatNumber')(j, k || j % 1 && 1))]));
    }
    f.exports = i;
}), null);
__d('PluginIconButton', ['invariant', 'fbt', 'CSS', 'DOM', 'Event', 'intlSummarizeNumber'], (function a(b, c, d, e, f, g, h, i) {
    function j(k, l, m, n, o) {
        'use strict';
        n === null || m !== null || h(0);
        this.$PluginIconButton1 = k;
        this.$PluginIconButton2 = m;
        this.$PluginIconButton3 = n;
        this.$PluginIconButton4 = o;
        if (l === false) {
            c('Event').listen(k, 'click', function() {
                return this.toggleButton();
            }.bind(this));
            c('Event').listen(k, 'toggle', function() {
                return this.toggleButton();
            }.bind(this));
            if (this.$PluginIconButton4) c('Event').listen(k, 'mouseout', function() {
                return c('CSS').removeClass(this.$PluginIconButton1, 'stop_hoverx');
            }.bind(this));
        }
    }
    j.prototype.toggleButton = function() {
        'use strict';
        if (c('CSS').hasClass(this.$PluginIconButton1, 'active') === false) {
            c('CSS').addClass(this.$PluginIconButton1, 'active');
            if (this.$PluginIconButton4) c('CSS').addClass(this.$PluginIconButton1, 'stop_hoverx');
            this.$PluginIconButton5(true);
            c('CSS').addClass(this.$PluginIconButton1, 'is_animating');
            setTimeout(function() {
                return c('CSS').removeClass(this.$PluginIconButton1, 'is_animating');
            }.bind(this), 240);
        } else {
            c('CSS').removeClass(this.$PluginIconButton1, 'active');
            this.$PluginIconButton5(false);
        }
    };
    j.prototype.setTitle = function(k) {
        'use strict';
        this.$PluginIconButton1.setAttribute('title', k);
    };
    j.prototype.$PluginIconButton5 = function(k) {
        'use strict';
        var l = function m(n) {
            return i._("{count}", [i.param('count', c('intlSummarizeNumber')(n, 0))]);
        };
        if (this.$PluginIconButton3 != null && this.$PluginIconButton3 < 1000) {
            this.$PluginIconButton3 = k ? this.$PluginIconButton3 + 1 : this.$PluginIconButton3 - 1;
            c('DOM').setContent(this.$PluginIconButton2, l(this.$PluginIconButton3));
        }
    };
    j.prototype.isActivated = function() {
        'use strict';
        return c('CSS').hasClass(this.$PluginIconButton1, 'active');
    };
    f.exports = j;
}), null);
__d('BanzaiODS', ['invariant', 'Banzai'], (function a(b, c, d, e, f, g, h) {
    function i() {
        var k = {},
            l = {};

        function m(n, o, p, q) {
            if (p === undefined) p = 1;
            if (q === undefined) q = 1;
            if (n in l)
                if (l[n] <= 0) {
                    return;
                } else p /= l[n];
            var r = k[n] || (k[n] = {}),
                s = r[o] || (r[o] = [0]);
            p = Number(p);
            q = Number(q);
            if (!isFinite(p) || !isFinite(q)) return;
            s[0] += p;
            if (arguments.length >= 4) {
                if (!s[1]) s[1] = 0;
                s[1] += q;
            }
        }
        return {
            setEntitySample: function n(o, p) {
                l[o] = Math.random() < p ? p : 0;
            },
            bumpEntityKey: function n(o, p, q) {
                m(o, p, q);
            },
            bumpFraction: function n(o, p, q, r) {
                m(o, p, q, r);
            },
            flush: function n(o) {
                for (var p in k) c('Banzai').post('ods:' + p, k[p], o);
                k = {};
            }
        };
    }
    var j = i();
    j.create = i;
    c('Banzai').subscribe(c('Banzai').SEND, j.flush.bind(j, null));
    f.exports = j;
}), null);
__d('AbstractErrorSignal', ['invariant', 'BanzaiODS', 'SessionName', 'ScriptPath', 'SiteData'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = true;

    function j() {
        this.constructor !== j || h(0);
    }
    j.prototype.logJSError = function(k, l) {
        l = l || {};
        l.svn_rev = c('SiteData').revision;
        l.push_phase = c('SiteData').push_phase;
        l.script_path = c('ScriptPath').getScriptPath();
        l.extra = l.extra || {};
        l.extra.hrm = c('SiteData').be_mode;
        var m = l.extra.type || 'error';
        if (i && k === 'onerror' && m === 'error') {
            l.extra.extra = l.extra.extra || [];
            l.extra.extra.push('first_error');
            i = false;
        }
        var n = (c('SessionName').getName() || '-') + '/-';
        this.sendErrorSignal('javascript_error', JSON.stringify({
            c: k,
            a: n,
            m: l
        }));
    };
    j.prototype.sendBeaconErrorSignal = function() {
        var k = 'beacon_error',
            l = (c('SessionName').getName() || '-') + '/-',
            m = {};
        m.error = k;
        m.svn_rev = c('SiteData').revision;
        m.push_phase = c('SiteData').push_phase;
        m.script_path = c('ScriptPath').getScriptPath();
        m.extra = {
            message: k,
            type: 'info'
        };
        this.sendErrorSignal(k, JSON.stringify({
            c: k,
            a: l,
            m: m
        }));
    };
    j.prototype.sendErrorSignal = function(k, l) {
        this.performCounterLogging(k);
        switch (k) {
            case 'async_error':
                var m = JSON.parse(l),
                    n = m.err_code,
                    o = m.path;
                if (n in {
                        '1004': 1,
                        '12029': 1,
                        '12031': 1,
                        '12152': 1
                    } && o.indexOf('scribe_endpoint.php') == -1) this.performSignalLogging(k, l);
                break;
            default:
                this.performSignalLogging(k, l);
        }
    };
    j.prototype.performCounterLogging = function(k) {
        c('BanzaiODS').bumpEntityKey('js_error_reporting', 'error_signal.category.' + k);
        switch (k) {
            case 'beacon_error':
                c('BanzaiODS').bumpEntityKey('js_error_reporting', 'beacon_error_signal.sent');
                break;
            case 'javascript_error':
                c('BanzaiODS').bumpEntityKey('js_error_reporting', 'error_signal.sent');
                break;
        }
    };
    j.prototype.performSignalLogging = function(k, l) {
        h(0);
    };
    f.exports = j;
}), null);
__d('NonBlockingIFrame', ['Promise', 'DOM', 'TimeSlice'], (function a(b, c, d, e, f, g) {
    var h = {},
        i, j;

    function k() {
        var n = arguments.length <= 0 || arguments[0] === undefined ? h : arguments[0],
            o = arguments.length <= 1 || arguments[1] === undefined ? document.body : arguments[1],
            p, q = {
                className: 'nonBlockingIframe',
                width: 0,
                height: 0,
                frameborder: 0,
                scrolling: 'no',
                'aria-hidden': 'true'
            };
        if (n !== h) q.src = n;
        p = c('DOM').create('iframe', q);
        p.style.left = '-1000px';
        p.style.position = 'absolute';
        c('DOM').appendContent(o, p);
        if (n === h) {
            p.contentDocument.open();
            p.contentDocument.close();
        }
        return p;
    }

    function l() {
        return new(c('Promise'))(function(n) {
            if (!i) i = k();
            if (i.contentDocument.readyState === 'complete') {
                n(i);
            } else {
                if (!j) j = new(c('Promise'))(function(o) {
                    i.contentWindow.onload = c('TimeSlice').guard(function() {
                        o(i);
                    }, 'NonBlockingIFrame window.onload');
                });
                n(j);
            }
        });
    }
    var m = {
        loadImage: function n(o) {
            return l().then(function(p) {
                return new(c('Promise'))(function(q, r) {
                    var s = p.contentWindow.Image,
                        t = new s();
                    t.onload = c('TimeSlice').guard(function() {
                        q(t);
                    }, 'NonBlockingIFrame image.onload');
                    t.onerror = c('TimeSlice').guard(function() {
                        r(t);
                    }, 'NonBlockingIFrame image.onerror');
                    t.onabort = c('TimeSlice').guard(function() {
                        r(t);
                    }, 'NonBlockingIFrame image.onabort');
                    t.src = o;
                });
            });
        },
        loadIFrame: function n() {
            var o = arguments.length <= 0 || arguments[0] === undefined ? h : arguments[0];
            return l().then(function(p) {
                var q = p.contentDocument.body;
                return k(o, q);
            });
        }
    };
    f.exports = m;
}), null);
__d('isAdsExcelAddinURI', [], (function a(b, c, d, e, f, g) {
    var h = new RegExp('(^|\\.)fbaddins\\.com$', 'i'),
        i = ['https'];

    function j(k) {
        if (k.isEmpty() && k.toString() !== '#') return false;
        if (!k.getDomain() && !k.getProtocol()) return false;
        return (i.indexOf(k.getProtocol()) !== -1 && h.test(k.getDomain()));
    }
    f.exports = j;
}), null);
__d('isValidURI', [], (function a(b, c, d, e, f, g) {
    var h = new RegExp('((^|\\.)atlassolutions\\.com$)|' + '((^|\\.)instagram\\.com$)|' + '((^|\\.)wit\\.ai$)|' + '((^|\\.)accountkit\\.com$)', 'i'),
        i = ['https'];

    function j(k) {
        if (k.isEmpty() && k.toString() !== '#') return false;
        if (!k.getDomain() && !k.getProtocol()) return false;
        return (i.includes(k.getProtocol()) && h.test(k.getDomain()));
    }
    f.exports = j;
}), null);
__d('AsyncSignal', ['Promise', 'ErrorUtils', 'NonBlockingIFrame', 'Run', 'QueryString', 'TrackingConfig', 'URI', 'WebSpeedExperiments', 'ZeroRewrites', 'isValidURI', 'isAdsExcelAddinURI', 'isFacebookURI', 'isMessengerDotComURI', 'getAsyncParams', 'memoize'], (function a(b, c, d, e, f, g) {
    var h;

    function i(j, k) {
        this.data = k || {};
        this.uri = j.toString();
        if (c('TrackingConfig').domain && this.uri.charAt(0) == '/') this.uri = c('TrackingConfig').domain + this.uri;
    }
    i.prototype.setHandler = function(j) {
        this.handler = j;
        return this;
    };
    i.prototype.setTimeout = function(j) {
        this.timeout = j;
        return this;
    };
    i.prototype.send = function() {
        var j = this.handler,
            k = this.data;
        k.asyncSignal = (Math.random() * 10000 | 0) + 1;
        var l = c('ZeroRewrites').rewriteURI(new(c('URI'))(this.uri)),
            m = c('isFacebookURI')(l) || c('isMessengerDotComURI')(l) || c('isAdsExcelAddinURI')(l) || c('isValidURI')(l);
        if (m) {
            Object.assign(k, c('getAsyncParams')('POST'));
        } else throw new Error("'" + this.uri + "' " + "is an external URL, you should not send async signals to offsite links.");
        var n = c('QueryString').appendToUrl(this.uri, k),
            o;
        if (c('WebSpeedExperiments').non_blocking_logger) {
            o = c('NonBlockingIFrame').loadImage(n);
        } else {
            if (!h) h = new(c('Promise'))(function(r) {
                c('Run').onAfterLoad(r);
            });
            o = h.then(function() {
                return new(c('Promise'))(function(r, s) {
                    var t = new Image();
                    t.onload = r;
                    t.onerror = t.onabort = s;
                    t.src = n;
                });
            });
        }
        if (j) {
            var p = false,
                q = c('memoize')(function() {
                    c('ErrorUtils').applyWithGuard(j, null, [p]);
                });
            o.then(function() {
                p = true;
                q();
            }, q).done();
            if (this.timeout) setTimeout(q, this.timeout);
        }
        return this;
    };
    f.exports = i;
}), null);
__d("XJavaScriptLogviewSiteCategory", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        MBASIC: "m_basic",
        MTOUCH: "m_touch",
        WWW: "www"
    };
}), null);
__d('ErrorSignal', ['AbstractErrorSignal', 'AsyncRequest', 'AsyncSignal', 'BanzaiODS', 'ErrorSignalConfig', 'XJavaScriptLogviewSiteCategory', 'emptyFunction'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('AbstractErrorSignal'));
    i = h && h.prototype;
    j.prototype.performCounterLogging = function(l) {
        'use strict';
        i.performCounterLogging.call(this, l);
        switch (l) {
            case 'javascript_error':
                c('BanzaiODS').bumpEntityKey('js_error_reporting', 'error_signal.' + c('XJavaScriptLogviewSiteCategory').WWW + '.sent');
                break;
        }
    };
    j.prototype.performSignalLogging = function(l, m) {
        'use strict';
        switch (l) {
            case 'async_error':
                new(c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({
                    c: 'async_error',
                    m: m
                }).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation', true).setOption('suppressErrorAlerts', true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);
                break;
            default:
                new(c('AsyncSignal'))(c('ErrorSignalConfig').uri, {
                    c: l,
                    m: m
                }).send();
                break;
        }
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    var k = new j();
    f.exports = k;
    b.ErrorSignal = k;
}), null);
__d('ErrorLogging', ['ErrorSignal', 'ErrorUtils', 'JSErrorExtra', 'JSErrorPlatformColumns'], (function a(b, c, d, e, f, g) {
    function h(k) {
        var l = k.extra || {},
            m = {};
        Object.keys(c('JSErrorExtra')).forEach(function(n) {
            if (c('JSErrorExtra')[n]) m[n] = true;
        });
        Object.keys(l).forEach(function(n) {
            if (l[n]) {
                m[n] = true;
            } else if (m[n]) delete m[n];
        });
        k.extra = Object.keys(m);
    }

    function i(k) {
        if (c('JSErrorPlatformColumns').app_id !== undefined) k.app_id = c('JSErrorPlatformColumns').app_id;
        if (c('JSErrorPlatformColumns').access_token !== undefined) k.access_token = c('JSErrorPlatformColumns').access_token;
    }

    function j(k) {
        h(k);
        i(k);
        var l = k.category || 'onerror';
        c('ErrorSignal').logJSError(l, {
            error: k.name || k.message,
            extra: k
        });
    }
    c('ErrorUtils').addListener(j);
    f.exports = {
        defaultJSErrorHandler: j
    };
}), null);
__d('XControllerURIBuilder', ['invariant', 'URI'], (function a(b, c, d, e, f, g, h) {
    function i(j, k) {
        'use strict';
        this.$XControllerURIBuilder1 = j;
        this.$XControllerURIBuilder2 = k;
        this.$XControllerURIBuilder3 = {};
    }
    i.prototype.setInt = function(j, k) {
        'use strict';
        return this.__setParam(j, 'Int', k);
    };
    i.prototype.setFBID = function(j, k) {
        'use strict';
        return this.__setParam(j, 'FBID', k);
    };
    i.prototype.setFloat = function(j, k) {
        'use strict';
        return this.__setParam(j, 'Float', k);
    };
    i.prototype.setString = function(j, k) {
        'use strict';
        return this.__setParam(j, 'String', k);
    };
    i.prototype.setExists = function(j, k) {
        'use strict';
        if (k === false) k = undefined;
        return this.__setParam(j, 'Exists', k);
    };
    i.prototype.setBool = function(j, k) {
        'use strict';
        return this.__setParam(j, 'Bool', k);
    };
    i.prototype.setEnum = function(j, k) {
        'use strict';
        return this.__setParam(j, 'Enum', k);
    };
    i.prototype.setIntVector = function(j, k) {
        'use strict';
        return this.__setParam(j, 'IntVector', k);
    };
    i.prototype.setIntSet = function(j, k) {
        'use strict';
        return this.__setParam(j, 'IntSet', k.join(','));
    };
    i.prototype.setFloatVector = function(j, k) {
        'use strict';
        return this.__setParam(j, 'FloatVector', k);
    };
    i.prototype.setFloatSet = function(j, k) {
        'use strict';
        return this.__setParam(j, 'FloatSet', k.join(','));
    };
    i.prototype.setStringVector = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringVector', k);
    };
    i.prototype.setStringSet = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringSet', k);
    };
    i.prototype.setFBIDVector = function(j, k) {
        'use strict';
        return this.__setParam(j, 'FBIDVector', k);
    };
    i.prototype.setFBIDSet = function(j, k) {
        'use strict';
        return this.__setParam(j, 'FBIDSet', k);
    };
    i.prototype.setEnumVector = function(j, k) {
        'use strict';
        return this.__setParam(j, 'EnumVector', k);
    };
    i.prototype.setEnumSet = function(j, k) {
        'use strict';
        return this.__setParam(j, 'EnumSet', k);
    };
    i.prototype.setEnumKeyset = function(j, k) {
        'use strict';
        return this.__setParam(j, 'EnumKeyset', k);
    };
    i.prototype.setIntToIntMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'IntToIntMap', k);
    };
    i.prototype.setIntToFloatMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'IntToFloatMap', k);
    };
    i.prototype.setIntToStringMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'IntToStringMap', k);
    };
    i.prototype.setIntToBoolMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'IntToBoolMap', k);
    };
    i.prototype.setStringToIntMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringToIntMap', k);
    };
    i.prototype.setStringToFloatMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringToFloatMap', k);
    };
    i.prototype.setStringToStringMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringToStringMap', k);
    };
    i.prototype.setStringToNullableStringMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringToNullableStringMap', k);
    };
    i.prototype.setStringToBoolMap = function(j, k) {
        'use strict';
        return this.__setParam(j, 'StringToBoolMap', k);
    };
    i.prototype.setHackType = function(j, k) {
        'use strict';
        return this.__setParam(j, 'HackType', k);
    };
    i.prototype.setTypeAssert = function(j, k) {
        'use strict';
        return this.__setParam(j, 'TypeAssert', k);
    };
    i.prototype.__validateRequiredParamsExistence = function() {
        'use strict';
        for (var j in this.$XControllerURIBuilder2) !this.$XControllerURIBuilder2[j].required || this.$XControllerURIBuilder3.hasOwnProperty(j) || h(0);
    };
    i.prototype.setParams = function(j) {
        'use strict';
        for (var k in j) {
            this.__assertParamExists(k);
            var l = this.$XControllerURIBuilder2[k].type;
            this.__setParam(k, l, j[k]);
        }
        return this;
    };
    i.prototype.__assertParamExists = function(j) {
        'use strict';
        j in this.$XControllerURIBuilder2 || h(0);
    };
    i.prototype.__setParam = function(j, k, l) {
        'use strict';
        this.__assertParamExists(j);
        var m = this.$XControllerURIBuilder2[j].type;
        m === k || h(0);
        this.__setParamInt(j, l);
        return this;
    };
    i.prototype.__setParamInt = function(j, k) {
        'use strict';
        this.$XControllerURIBuilder3[j] = k;
    };
    i.prototype.getURI = function() {
        'use strict';
        this.__validateRequiredParamsExistence();
        var j = {},
            k = '',
            l = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
            m = this.$XControllerURIBuilder1.split('/'),
            n = false;
        for (var o = 0; o < m.length; o++) {
            var p = m[o];
            if (p === '') continue;
            var q = l.exec(p);
            if (!q) {
                k += '/' + p;
            } else {
                var r = q[2] === '?',
                    s = q[4],
                    t = this.$XControllerURIBuilder2[s];
                t || h(0);
                if (r && n) continue;
                if (this.$XControllerURIBuilder3[s] == null && r) {
                    n = true;
                    continue;
                }
                this.$XControllerURIBuilder3[s] != null || h(0);
                var u = q[1] ? q[1] : '',
                    v = q[5] ? q[5] : '';
                k += '/' + u + this.$XControllerURIBuilder3[s] + v;
                j[s] = true;
            }
        }
        if (this.$XControllerURIBuilder1.slice(-1) === '/') k += '/';
        if (k === '') k = '/';
        var w = new(c('URI'))(k);
        for (var x in this.$XControllerURIBuilder3) {
            var y = this.$XControllerURIBuilder3[x];
            if (!j[x] && y != null) {
                var z = this.$XControllerURIBuilder2[x];
                w.addQueryData(x, z && z.type === 'Exists' ? null : y);
            }
        }
        return w;
    };
    i.create = function(j, k) {
        return i.bind(null, j, k);
    };
    f.exports = i;
}), null);
__d('XRequest', ['invariant'], (function a(b, c, d, e, f, g, h) {
    var i = function k(l, m, n) {
        var o;
        switch (l) {
            case 'Bool':
                o = m && m !== 'false' && m !== '0' || false;
                break;
            case 'Int':
                o = m.toString();
                /-?\d+/.test(o) || h(0);
                break;
            case 'Float':
                o = parseFloat(m, 10);
                !isNaN(o) || h(0);
                break;
            case 'FBID':
                o = m.toString();
                for (var p = 0; p < o.length; ++p) {
                    var q = o.charCodeAt(p);
                    48 <= q && q <= 57 || h(0);
                }
                break;
            case 'String':
                o = m.toString();
                break;
            case 'Enum':
                if (n === 0) {
                    o = k('Int', m, null);
                } else if (n === 1) {
                    o = k('String', m, null);
                } else if (n === 2) {
                    o = m;
                } else h(0);
                break;
            default:
                var r, s, t, u;
                if (r = /^Nullable(\w+)$/.exec(l)) {
                    if (m === null) {
                        o = null;
                    } else o = k(r[1], m, n);
                } else if (s = /^(\w+)Vector$/.exec(l)) {
                    if (!Array.isArray(m)) {
                        o = m.toString();
                        o = o === '' ? [] : o.split(',');
                    } else o = m;
                    var v = s[1];
                    typeof v === 'string' || h(0);
                    o = o.map(function(y) {
                        return k(v, y, n && n.member);
                    });
                } else if (t = /^(\w+)(Set|Keyset)$/.exec(l)) {
                    if (!Array.isArray(m)) {
                        o = m.toString();
                        o = o === '' ? [] : o.split(',');
                    } else o = m;
                    o = o.reduce(function(y, z) {
                        y[z] = z;
                        return y;
                    }, {});
                    v = t[1];
                    typeof v === 'string' || h(0);
                    o = Object.keys(o).map(function(y) {
                        return k(v, o[y], n && n.member);
                    });
                } else if (u = /^(\w+)To(\w+)Map$/.exec(l)) {
                    o = {};
                    var w = u[1],
                        x = u[2];
                    typeof w === 'string' && typeof x === 'string' || h(0);
                    Object.keys(m).forEach(function(y) {
                        o[k(w, y, n && n.key)] = k(x, m[y], n && n.value);
                    });
                } else h(0);
        }
        return o;
    };

    function j(k, l, m) {
        'use strict';
        this.$XRequest1 = l;
        this.$XRequest2 = babelHelpers['extends']({}, m.getQueryData());
        var n = k.split("/").filter(function(t) {
                return t;
            }),
            o = m.getPath().split("/").filter(function(t) {
                return t;
            });
        for (var p = 0; p < n.length; ++p) {
            var q = /^\{(\?)?(\w+)\}$/.exec(n[p]);
            if (!q) {
                n[p] === o[p] || h(0);
                continue;
            }
            var r = !!q[1],
                s = q[2];
            this.$XRequest1.hasOwnProperty(s) || h(0);
            if (this.$XRequest1[s].required) {
                !r || h(0);
                this.$XRequest2[s] = o[p];
            } else {
                r || h(0);
                if (o[p]) this.$XRequest2[s] = o[p];
            }
        }
        Object.keys(this.$XRequest1).forEach(function(t) {
            !this.$XRequest1[t].required || this.$XRequest2.hasOwnProperty(t) || h(0);
        }, this);
    }
    j.prototype.getExists = function(k) {
        'use strict';
        return this.$XRequest2[k] !== undefined;
    };
    j.prototype.getBool = function(k) {
        'use strict';
        return this.$XRequest3(k, 'Bool');
    };
    j.prototype.getInt = function(k) {
        'use strict';
        return this.$XRequest3(k, 'Int');
    };
    j.prototype.getFloat = function(k) {
        'use strict';
        return this.$XRequest3(k, 'Float');
    };
    j.prototype.getFBID = function(k) {
        'use strict';
        return this.$XRequest3(k, 'FBID');
    };
    j.prototype.getString = function(k) {
        'use strict';
        return this.$XRequest3(k, 'String');
    };
    j.prototype.getEnum = function(k) {
        'use strict';
        return this.$XRequest3(k, 'Enum');
    };
    j.prototype.getOptionalInt = function(k) {
        'use strict';
        return this.$XRequest4(k, 'Int');
    };
    j.prototype.getOptionalFloat = function(k) {
        'use strict';
        return this.$XRequest4(k, 'Float');
    };
    j.prototype.getOptionalFBID = function(k) {
        'use strict';
        return this.$XRequest4(k, 'FBID');
    };
    j.prototype.getOptionalString = function(k) {
        'use strict';
        return this.$XRequest4(k, 'String');
    };
    j.prototype.getOptionalEnum = function(k) {
        'use strict';
        return this.$XRequest4(k, 'Enum');
    };
    j.prototype.getIntVector = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntVector');
    };
    j.prototype.getFloatVector = function(k) {
        'use strict';
        return this.$XRequest3(k, 'FloatVector');
    };
    j.prototype.getFBIDVector = function(k) {
        'use strict';
        return this.$XRequest3(k, 'FBIDVector');
    };
    j.prototype.getStringVector = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringVector');
    };
    j.prototype.getEnumVector = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumVector');
    };
    j.prototype.getOptionalIntVector = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntVector');
    };
    j.prototype.getOptionalFloatVector = function(k) {
        'use strict';
        return this.$XRequest4(k, 'FloatVector');
    };
    j.prototype.getOptionalFBIDVector = function(k) {
        'use strict';
        return this.$XRequest4(k, 'FBIDVector');
    };
    j.prototype.getOptionalStringVector = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringVector');
    };
    j.prototype.getOptionalEnumVector = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumVector');
    };
    j.prototype.getIntSet = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntSet');
    };
    j.prototype.getFBIDSet = function(k) {
        'use strict';
        return this.$XRequest3(k, 'FBIDSet');
    };
    j.prototype.getStringSet = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringSet');
    };
    j.prototype.getEnumKeyset = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumKeyset');
    };
    j.prototype.getOptionalIntSet = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntSet');
    };
    j.prototype.getOptionalFBIDSet = function(k) {
        'use strict';
        return this.$XRequest4(k, 'FBIDSet');
    };
    j.prototype.getOptionalStringSet = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringSet');
    };
    j.prototype.getEnumToBoolMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToBoolMap');
    };
    j.prototype.getEnumToEnumMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToEnumMap');
    };
    j.prototype.getEnumToFloatMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToFloatMap');
    };
    j.prototype.getEnumToIntMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToIntMap');
    };
    j.prototype.getEnumToStringMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToStringMap');
    };
    j.prototype.getIntToBoolMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToBoolMap');
    };
    j.prototype.getIntToEnumMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToEnumMap');
    };
    j.prototype.getIntToFloatMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToFloatMap');
    };
    j.prototype.getIntToIntMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToIntMap');
    };
    j.prototype.getIntToStringMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToStringMap');
    };
    j.prototype.getStringToBoolMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToBoolMap');
    };
    j.prototype.getStringToEnumMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToEnumMap');
    };
    j.prototype.getStringToFloatMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToFloatMap');
    };
    j.prototype.getStringToIntMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToIntMap');
    };
    j.prototype.getStringToStringMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToStringMap');
    };
    j.prototype.getOptionalEnumToBoolMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToBoolMap');
    };
    j.prototype.getOptionalEnumToEnumMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToEnumMap');
    };
    j.prototype.getOptionalEnumToFloatMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToFloatMap');
    };
    j.prototype.getOptionalEnumToIntMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToIntMap');
    };
    j.prototype.getOptionalEnumToStringMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToStringMap');
    };
    j.prototype.getOptionalIntToBoolMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToBoolMap');
    };
    j.prototype.getOptionalIntToEnumMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToEnumMap');
    };
    j.prototype.getOptionalIntToFloatMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToFloatMap');
    };
    j.prototype.getOptionalIntToIntMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToIntMap');
    };
    j.prototype.getOptionalIntToStringMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToStringMap');
    };
    j.prototype.getOptionalStringToBoolMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToBoolMap');
    };
    j.prototype.getOptionalStringToEnumMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToEnumMap');
    };
    j.prototype.getOptionalStringToFloatMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToFloatMap');
    };
    j.prototype.getOptionalStringToIntMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToIntMap');
    };
    j.prototype.getOptionalStringToStringMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToStringMap');
    };
    j.prototype.getEnumToNullableEnumMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToNullableEnumMap');
    };
    j.prototype.getEnumToNullableFloatMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToNullableFloatMap');
    };
    j.prototype.getEnumToNullableIntMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToNullableIntMap');
    };
    j.prototype.getEnumToNullableStringMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'EnumToNullableStringMap');
    };
    j.prototype.getIntToNullableEnumMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToNullableEnumMap');
    };
    j.prototype.getIntToNullableFloatMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToNullableFloatMap');
    };
    j.prototype.getIntToNullableIntMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToNullableIntMap');
    };
    j.prototype.getIntToNullableStringMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'IntToNullableStringMap');
    };
    j.prototype.getStringToNullableEnumMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToNullableEnumMap');
    };
    j.prototype.getStringToNullableFloatMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToNullableFloatMap');
    };
    j.prototype.getStringToNullableIntMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToNullableIntMap');
    };
    j.prototype.getStringToNullableStringMap = function(k) {
        'use strict';
        return this.$XRequest3(k, 'StringToNullableStringMap');
    };
    j.prototype.getOptionalEnumToNullableEnumMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToNullableEnumMap');
    };
    j.prototype.getOptionalEnumToNullableFloatMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToNullableFloatMap');
    };
    j.prototype.getOptionalEnumToNullableIntMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToNullableIntMap');
    };
    j.prototype.getOptionalEnumToNullableStringMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'EnumToNullableStringMap');
    };
    j.prototype.getOptionalIntToNullableEnumMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToNullableEnumMap');
    };
    j.prototype.getOptionalIntToNullableFloatMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToNullableFloatMap');
    };
    j.prototype.getOptionalIntToNullableIntMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToNullableIntMap');
    };
    j.prototype.getOptionalIntToNullableStringMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'IntToNullableStringMap');
    };
    j.prototype.getOptionalStringToNullableEnumMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToNullableEnumMap');
    };
    j.prototype.getOptionalStringToNullableFloatMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToNullableFloatMap');
    };
    j.prototype.getOptionalStringToNullableIntMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToNullableIntMap');
    };
    j.prototype.getOptionalStringToNullableStringMap = function(k) {
        'use strict';
        return this.$XRequest4(k, 'StringToNullableStringMap');
    };
    j.prototype.$XRequest3 = function(k, l) {
        'use strict';
        this.$XRequest5(k, l);
        var m = this.$XRequest1[k];
        if (!this.$XRequest2.hasOwnProperty(k) && m.defaultValue) {
            !m.required || h(0);
            return i(l, m.defaultValue, m.enumType);
        }
        m.required || l === 'Bool' || m.defaultValue != null || h(0);
        return i(l, this.$XRequest2[k], m.enumType);
    };
    j.prototype.$XRequest4 = function(k, l) {
        'use strict';
        this.$XRequest5(k, l);
        var m = this.$XRequest1[k];
        !m.required || h(0);
        !m.defaultValue || h(0);
        if (this.$XRequest2.hasOwnProperty(k)) return i(l, this.$XRequest2[k], m.enumType);
        return null;
    };
    j.prototype.$XRequest5 = function(k, l) {
        'use strict';
        this.$XRequest1.hasOwnProperty(k) || h(0);
        this.$XRequest1[k].type === l || h(0);
    };
    f.exports = j;
}), null);
__d('XController', ['XControllerURIBuilder', 'XRequest'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        'use strict';
        this.$XController1 = i;
        this.$XController2 = j;
    }
    h.prototype.getURIBuilder = function(i) {
        'use strict';
        var j = new(c('XControllerURIBuilder'))(this.$XController1, this.$XController2);
        if (i) {
            var k = this.getRequest(i);
            Object.keys(this.$XController2).forEach(function(l) {
                var m = this.$XController2[l],
                    n = '';
                if (!m.required && !m.hasOwnProperty('defaultValue')) n = 'Optional';
                var o = 'get' + n + m.type,
                    p = k[o](l);
                if (p == null || m.hasOwnProperty('defaultValue') && p === m.defaultValue) return;
                var q = 'set' + m.type;
                j[q](l, p);
            }, this);
        }
        return j;
    };
    h.prototype.getRequest = function(i) {
        'use strict';
        return new(c('XRequest'))(this.$XController1, this.$XController2, i);
    };
    h.create = function(i, j) {
        'use strict';
        return new h(i, j);
    };
    f.exports = h;
}), null);
__d("XLynxAsyncCallbackController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/si\/linkclick\/ajax_callback\/", {
        lynx_uri: {
            type: "String"
        }
    });
}), null);
__d('FBLynx', ['AsyncSignal', 'XLynxAsyncCallbackController', 'Event', 'Parent'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        alreadySetup: false,
        setupDelegation: function i() {
            var j = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
            if (document.body == null) {
                if (j) return;
                setTimeout(function() {
                    h.setupDelegation(true);
                }, 100);
                return;
            }
            if (h.alreadySetup) return;
            h.alreadySetup = true;
            c('Event').listen(document.body, 'click', function(event) {
                var k = h.getMaybeLynxLink(event.target);
                if (k) h.click(k);
            });
            c('Event').listen(document.body, 'mouseover', function(event) {
                var k = h.getMaybeLynxLink(event.target);
                if (k) h.mouseover(k);
            });
            c('Event').listen(document.body, 'contextmenu', function(event) {
                var k = h.getMaybeLynxLink(event.target);
                if (k) h.contextmenu(k);
            });
        },
        getMaybeLynxLink: function i(j) {
            var k = c('Parent').byAttribute(j, 'data-lynx-async-dest');
            if (k) return k;
            k = c('Parent').byAttribute(j, 'data-lynx-uri');
            if (k) return k;
            return null;
        },
        click: function i(j) {
            h.swapLinksIfAsyncDestPresent(j);
            var k = j.getAttribute('data-lynx-uri'),
                l = c('XLynxAsyncCallbackController').getURIBuilder().getURI();
            new(c('AsyncSignal'))(l, {
                lynx_uri: k
            }).send();
        },
        mouseover: function i(j) {
            h.swapLinksIfAsyncDestPresent(j);
        },
        contextmenu: function i(j) {
            h.revertSwapIfLynxURIPresent(j);
        },
        swapLinksIfAsyncDestPresent: function i(j) {
            var k = j.getAttribute('data-lynx-async-dest');
            if (!k) return;
            var l = j.href;
            j.setAttribute('data-lynx-uri', l);
            j.removeAttribute('data-lynx-async-dest');
            j.href = k;
        },
        revertSwapIfLynxURIPresent: function i(j) {
            var k = j.getAttribute('data-lynx-uri');
            if (!k) return;
            var l = j.href;
            j.setAttribute('data-lynx-async-dest', l);
            j.removeAttribute('data-lynx-uri');
            j.href = k;
        }
    };
    f.exports = h;
}), null);
__d('BanzaiLogger', ['Banzai'], (function a(b, c, d, e, f, g) {
    var h = 'logger';

    function i(k) {
        return {
            log: function l(m, n) {
                c('Banzai').post(j._getRoute(m), n, k);
            },
            registerToSendWithBeacon: function l(m, n, o, p) {
                c('Banzai').registerToSendWithBeacon(j._getRoute(m), n, o, p);
            },
            _getRoute: function l(m) {
                return h + ':' + m;
            }
        };
    }
    var j = i();
    j.create = i;
    f.exports = j;
}), null);
__d('FbtLoggerImpl', ['BanzaiLogger', 'ScriptPath'], (function a(b, c, d, e, f, g) {
    var h = {
        logImpression: function i(j) {
            c('BanzaiLogger').log('FbtImpressionsLoggerConfig', {
                hash: j,
                sample_rate: 100,
                script_path: c('ScriptPath').getScriptPath()
            });
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType01', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType02', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0 || j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType03', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0 || j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType04', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType05', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0 || j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType06', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j >= 0 && j <= 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType07', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j >= 0 && j <= 1 || j >= 11 && j <= 99) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType08', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j >= 0 && j <= 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType09', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType10', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType11', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType12', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && j % 100 !== 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType13', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType14', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1 || j === 2 || j === 3 || j % 10 !== 4 && j % 10 !== 6 && j % 10 !== 9) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType15', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 0 || j % 100 >= 11 && j % 100 <= 19) {
                return c('IntlVariations').NUMBER_ZERO;
            } else if (j % 10 === 1 && j % 100 !== 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType16', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0) {
                return c('IntlVariations').NUMBER_ZERO;
            } else if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType17', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0) {
                return c('IntlVariations').NUMBER_ZERO;
            } else if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType18', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType19', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0 || j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j >= 2 && j <= 10) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType20', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 0 || j !== 1 && j % 100 >= 1 && j % 100 <= 19) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType21', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && j % 100 !== 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 >= 2 && j % 10 <= 4 && (j % 100 < 12 || j % 100 > 14)) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType22', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1 || j === 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2 || j === 12) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j >= 3 && j <= 10 || j >= 13 && j <= 19) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType23', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 100 === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 100 === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j % 100 >= 3 && j % 100 <= 4) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType24', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 100 === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 100 === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j % 100 >= 3 && j % 100 <= 4) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType25', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if ((j < 0 || j > 10) && j % 10 === 0) {
                return c('IntlVariations').NUMBER_MANY;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType26', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j >= 2 && j <= 4) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType27', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 >= 2 && j % 10 <= 4 && (j % 100 < 12 || j % 100 > 14)) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_MANY;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType28', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && j % 100 !== 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 >= 2 && j % 10 <= 4 && (j % 100 < 12 || j % 100 > 14)) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_MANY;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType29', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && (j % 100 < 11 || j % 100 > 19)) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 >= 2 && j % 10 <= 9 && (j % 100 < 11 || j % 100 > 19)) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType30', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 0 || j % 100 >= 2 && j % 100 <= 10) {
                return c('IntlVariations').NUMBER_FEW;
            } else if (j % 100 >= 11 && j % 100 <= 19) {
                return c('IntlVariations').NUMBER_MANY;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType31', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && j % 100 !== 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 >= 2 && j % 10 <= 4 && (j % 100 < 12 || j % 100 > 14)) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_MANY;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType32', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && j % 100 !== 11 && j % 100 !== 71 && j % 100 !== 91) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 === 2 && j % 100 !== 12 && j % 100 !== 72 && j % 100 !== 92) {
                return c('IntlVariations').NUMBER_TWO;
            } else if ((j % 10 >= 3 && j % 10 <= 4 || j % 10 === 9) && (j % 100 < 10 || j % 100 > 19) && (j % 100 < 70 || j % 100 > 79) && (j % 100 < 90 || j % 100 > 99)) {
                return c('IntlVariations').NUMBER_FEW;
            } else if (j !== 0 && j % 1e+06 === 0) {
                return c('IntlVariations').NUMBER_MANY;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType33', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j >= 3 && j <= 6) {
                return c('IntlVariations').NUMBER_FEW;
            } else if (j >= 7 && j <= 10) {
                return c('IntlVariations').NUMBER_MANY;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType34', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j % 10 === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j % 100 === 0 || j % 100 === 20 || j % 100 === 40 || j % 100 === 60 || j % 100 === 80) {
                return c('IntlVariations').NUMBER_FEW;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType35', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0) {
                return c('IntlVariations').NUMBER_ZERO;
            } else if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j % 100 >= 3 && j % 100 <= 10) {
                return c('IntlVariations').NUMBER_FEW;
            } else if (j % 100 >= 11 && j % 100 <= 99) {
                return c('IntlVariations').NUMBER_MANY;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType36', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0) {
                return c('IntlVariations').NUMBER_ZERO;
            } else if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else if (j === 3) {
                return c('IntlVariations').NUMBER_FEW;
            } else if (j === 6) {
                return c('IntlVariations').NUMBER_MANY;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType37', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0 || j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType38', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType39', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 0 || j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType40', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType41', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j === 1) {
                return c('IntlVariations').NUMBER_ONE;
            } else if (j === 2) {
                return c('IntlVariations').NUMBER_TWO;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType42', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            if (j % 10 === 1 && j % 100 !== 11) {
                return c('IntlVariations').NUMBER_ONE;
            } else return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('IntlCLDRNumberType43', ['IntlVariations'], (function a(b, c, d, e, f, g) {
    var h = {
        getNumberVariationType: function i(j) {
            return c('IntlVariations').NUMBER_OTHER;
        }
    };
    f.exports = h;
}), null);
__d('PlatformDialog', ['cx', 'DOMEventListener', 'DOMEvent', 'CSS'], (function a(b, c, d, e, f, g, h) {
    var i;
    j.getInstance = function() {
        'use strict';
        return i;
    };

    function j(k, l, m) {
        'use strict';
        i = this;
        this.$PlatformDialog1 = k;
        this.$PlatformDialog2 = l;
        this.$PlatformDialog3 = false;
        c('DOMEventListener').add(this.$PlatformDialog1, 'submit', function(n) {
            if (this.$PlatformDialog3) {
                new(c('DOMEvent'))(n).kill();
                return;
            }
            this.$PlatformDialog3 = true;
            if (m) c('CSS').addClass(k, "_32qa");
        }.bind(this));
    }
    j.prototype.getForm = function() {
        'use strict';
        return this.$PlatformDialog1;
    };
    j.prototype.getDisplay = function() {
        'use strict';
        return this.$PlatformDialog2;
    };
    j.prototype.hasBeenSubmitted = function() {
        'use strict';
        return this.$PlatformDialog3;
    };
    j.RESPONSE = 'platform/dialog/response';
    f.exports = j;
}), null);
__d('PluginReturn', ['invariant', 'Arbiter', 'Log', 'PlatformDialog', 'Plugin', 'URI', 'PlatformWidgetEndpoint'], (function a(b, c, d, e, f, g, h) {
    c('Arbiter').subscribe(c('PlatformDialog').RESPONSE, function(event, j) {
        if (j.error_code) {
            c('Log').debug('Plugin Return Error (%s): %s', j.error_code, j.error_message || j.error_description);
            return;
        }
        c('Plugin').reload(j.plugin_reload);
    });
    var i = {
        auto: function j() {
            c('Arbiter').subscribe(c('Plugin').RELOAD, function(event, k) {
                var l = typeof k == 'object' ? k.reloadUrl : k;
                i.reload(l);
            });
        },
        syncPlugins: function j() {
            c('Arbiter').subscribe(c('Plugin').RELOAD, function(event, k) {
                if (k.crossFrame) i.reload(k.reloadUrl, k.reload, k.identifier);
            });
        },
        reload: function j(k, j, l) {
            var m = c('URI').getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash').addQueryData('reload', j).addQueryData('id', l);
            if (k) {
                var j = new(c('URI'))(k);
                c('PlatformWidgetEndpoint').isPluginEndpoint(j.getPath()) || h(0);
                m.setPath(j.getPath()).addQueryData(j.getQueryData());
            }
            window.location.replace(m.toString());
        }
    };
    f.exports = i;
}), null);
__d('PluginXDReady', ['Arbiter', 'UnverifiedXD'], (function a(b, c, d, e, f, g) {
    var h = {
        handleMessage: function i(j) {
            if (!j.method) return;
            try {
                c('Arbiter').inform('Connect.Unsafe.' + j.method, JSON.parse(j.params), c('Arbiter').BEHAVIOR_PERSISTENT);
            } catch (k) {}
        }
    };
    b.XdArbiter = h;
    c('UnverifiedXD').send({
        xd_action: 'plugin_ready',
        name: window.name
    });
    f.exports = null;
}), null);
__d('legacy:bootloader', ['Bootloader'], (function a(b, c, d, e, f, g) {
    b.Bootloader = c('Bootloader');
}), 3);
__d('LinkshimAsyncLink', ['$', 'AsyncSignal', 'DOM', 'UserAgent_DEPRECATED', 'LinkshimHandlerConfig'], (function a(b, c, d, e, f, g) {
    var h = {
        swap: function i(j, k) {
            var l = c('UserAgent_DEPRECATED').ie() <= 8;
            if (l) {
                var m = c('DOM').create('wbr', {}, null);
                c('DOM').appendContent(j, m);
            }
            j.href = k;
            if (l) c('DOM').remove(m);
        },
        referrer_log: function i(j, k, l) {
            var m = c('$')('meta_referrer');
            m.content = c('LinkshimHandlerConfig').switched_meta_referrer_policy;
            h.swap(j, k);
            setTimeout(function() {
                m.content = c('LinkshimHandlerConfig').default_meta_referrer_policy;
                new(c('AsyncSignal'))(l, {}).send();
            }, 100);
        }
    };
    f.exports = h;
}), null);
__d('legacy:dom-asynclinkshim', ['LinkshimAsyncLink'], (function a(b, c, d, e, f, g) {
    b.LinkshimAsyncLink = c('LinkshimAsyncLink');
}), 3);
__d('lowerDomain', ['lowerFacebookDomain'], (function a(b, c, d, e, f, g) {
    if (document.domain.toLowerCase().match(/(^|\.)facebook\..*/)) c('lowerFacebookDomain')();
}), null);
__d('markJSEnabled', [], (function a(b, c, d, e, f, g) {
    var h = document.documentElement;
    h.className = h.className.replace('no_js', '');
}), null);
__d('wait_for_load', ['Run'], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        k = k.bind(i, j);
        if (window.domready) return k();
        switch ((j || event).type) {
            case 'load':
            case 'focus':
                c('Run').onAfterLoad(k);
                return;
            case 'click':
                var l = i.style,
                    m = document.body.style;
                l.cursor = m.cursor = 'progress';
                c('Run').onAfterLoad(function() {
                    l.cursor = m.cursor = '';
                    if (i.tagName.toLowerCase() == 'a') {
                        if (false !== k() && i.href) window.location.href = i.href;
                    } else if (i.click) i.click();
                });
                break;
        }
        return false;
    }
    b.wait_for_load = h;
}), 3);

__d('PluginQuote', ['Arbiter', 'DOM', 'DOMEventListener', 'UnverifiedXD'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        init: function i(j) {
            c('DOMEventListener').add(j, 'click', function() {
                c('UnverifiedXD').send({
                    type: 'getTextSelection'
                });
            });
            c('Arbiter').subscribe('Connect.Unsafe.setTextSelection', function(k, l) {
                c('DOM').insertAfter(j, c('DOM').create('input', {
                    type: 'hidden',
                    id: 'quotationtext',
                    value: l.text
                }));
            });
        }
    };
    f.exports = h;
}), null);
__d('PluginSend', ['Arbiter', 'CSS', 'DOM', 'DOMEvent', 'DOMEventListener', 'Focus', 'Plugin', 'PluginOptin', 'PluginResize', 'PopupWindow'], (function a(b, c, d, e, f, g) {
    var h = 3000,
        i = 5000,
        j = function k(l, m, n, o, p, q, r, s, t) {
            new(c('PluginResize'))(function() {
                return l.offsetWidth;
            }, function() {
                return l.offsetHeight;
            }).resize().auto();
            if (r !== null) {
                c('DOMEventListener').add(m, 'click', y);
                return;
            }
            if (t) {
                c('DOMEventListener').add(m, 'click', function(aa) {
                    aa = new(c('DOMEvent'))(aa);
                    aa.kill();
                    c('PopupWindow').open(t, 340, 670);
                });
                return;
            }
            if (!o) {
                var u = new(c('PluginOptin'))('send').addReturnParams({
                    act: 'send'
                });
                c('DOMEventListener').add(m, 'click', u.start.bind(u));
                return;
            }
            var v = false,
                w = false,
                x;

            function y() {
                if (s !== null) {
                    if (x !== null) clearTimeout(x);
                    var aa = Date.now();
                    x = setTimeout(function() {
                        if (Date.now() - aa < i) window.parent.location.href = s;
                    }, h);
                }
                window.parent.location.href = r;
            }

            function z() {
                w = !w;
                c('CSS').toggle(m);
                c('CSS').toggle(n);
                c('CSS').toggle(o);
                if (w) {
                    setTimeout(function() {
                        var ca = c('DOM').find(o, '.textInput');
                        c('Focus').set(ca);
                    }, 500);
                } else {
                    var aa = c('DOM').find(m, 'button');
                    c('Focus').set(aa);
                }
                if (!v) {
                    var ba = window.ServerJSAsyncLoader;
                    ba && ba.ondemandjs && ba.run(ba.ondemandjs);
                    v = true;
                }
                new(c('PluginResize'))(function() {
                    return Math.max(l.offsetWidth, o.offsetWidth);
                }, function() {
                    return Math.max(l.offsetHeight, o.offsetHeight + o.offsetTop);
                }, 'resize.iframe', true).resize().auto();
            }
            c('DOMEventListener').add(m, 'click', z);
            c('DOMEventListener').add(n, 'click', z);
            c('DOMEventListener').add(l.parentNode, 'click', function(aa) {
                aa = new(c('DOMEvent'))(aa);
                if (aa.target === l.parentNode) {
                    aa.kill();
                    z();
                }
            });
            c('Arbiter').subscribe(k.CLOSE, z);
            c('Arbiter').subscribe(c('Plugin').ERROR, function(event, aa) {
                c('DOM').setContent(l, aa.content);
                z();
            });
            if (q) z();
        };
    Object.assign(j, {
        SUCCESS: 'platform/plugins/send/success',
        CLOSE: 'platform/plugins/send/close',
        success: function k() {
            c('Arbiter').inform(this.SUCCESS);
        }
    });
    f.exports = j;
}), null);
__d("PluginShareLogTypes", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        IMPRESSION: "impression",
        CLICK: "click"
    };
}), null);
__d("XSharePluginLoggingController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/platform\/plugin\/share\/logging\/", {});
}), null);
__d('PluginShareActions', ['AsyncRequest', 'Event', 'UnverifiedXD', 'PluginShareLogTypes', 'XSharePluginLoggingController'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        init: function i(j, k, l, m, n, o, p) {
            c('Event').listen(n, 'click', function(q) {
                new(c('AsyncRequest'))().setURI(c('XSharePluginLoggingController').getURIBuilder().getURI()).setData({
                    app_id: o,
                    href: j,
                    layout: k,
                    event: c('PluginShareLogTypes').CLICK,
                    has_iframe: l,
                    referer_url: m,
                    new_ui: p
                }).send();
            });
        },
        triggerMobileIframe: function i(j, k) {
            c('Event').listen(k, 'click', function(l) {
                c('UnverifiedXD').send({
                    type: 'shareTriggerMobileIframe',
                    data: JSON.stringify({
                        href: j
                    })
                });
            });
        }
    };
    f.exports = h;
}), null);
__d('PopupLink', ['DOMEvent', 'DOMEventListener', 'Popup'], (function a(b, c, d, e, f, g) {
    var h = {
        listen: function i(j, k, l) {
            c('DOMEventListener').add(j, 'click', function(m) {
                new(c('DOMEvent'))(m).kill();
                c('Popup').open(j.href, k, l);
            });
        }
    };
    f.exports = h;
}), null);
__d('PageNavigationStageLogger', ['Arbiter', 'BigPipe', 'Run'], (function a(b, c, d, e, f, g) {
    var h = 'first_byte';
    c('Arbiter').subscribe(c('BigPipe').Events.init, function(event, j) {
        h = c('BigPipe').Events.init;
        j.arbiter.subscribe(Object.values(c('BigPipe').Events), function(k) {
            h = k;
        });
    });
    c('Run').onAfterLoad(function() {
        h = 'onafterload';
    });
    c('Run').onLoad(function() {
        h = 'onload';
    });
    var i = {
        getLoadStage: function j() {
            return h;
        }
    };
    f.exports = i;
}), null);
__d('clickRefAction', ['Arbiter'], (function a(b, c, d, e, f, g) {
    function h(l, m, n, o, p) {
        var q = l + '/' + m;
        this.ue = q;
        this._ue_ts = l;
        this._ue_count = m;
        this._context = n;
        this._ns = null;
        this._node = o;
        this._type = p;
    }
    h.prototype.set_namespace = function(l) {
        this._ns = l;
        return this;
    };
    h.prototype.coalesce_namespace = function(l) {
        if (this._ns === null) this._ns = l;
        return this;
    };
    h.prototype.add_event = function() {
        return this;
    };
    var i = 0,
        j = [];

    function k(l, m, event, n, o) {
        var p = Date.now(),
            q = event && event.type;
        o = o || {};
        if (!m && event) m = event.getTarget();
        var r = 50;
        if (m && n != "FORCE")
            for (var s = j.length - 1; s >= 0 && p - j[s]._ue_ts < r; --s)
                if (j[s]._node == m && j[s]._type == q) return j[s];
        var t = new h(p, i, l, m, q);
        j.push(t);
        while (j[0]._ue_ts + r < p || j.length > 10) j.shift();
        c('Arbiter').inform("ClickRefAction/new", {
            cfa: t,
            node: m,
            mode: n,
            event: event,
            extra_data: o
        }, c('Arbiter').BEHAVIOR_PERSISTENT);
        i++;
        return t;
    }
    f.exports = b.clickRefAction = k;
}), null);
__d('Primer', ['Arbiter', 'Bootloader', 'CSS', 'ErrorUtils', 'Event', 'PageNavigationStageLogger', 'PageNavigationStageLoggerGK', 'Parent', 'TimeSlice', 'TimeSliceInteraction', 'clickRefAction', 'ifRequired', 'nullthrows', 'performanceNow', 'trackReferrer', 'uniqueID'], (function a(b, c, d, e, f, g) {
    var h = null,
        i = /async(?:-post)?|dialog(?:-post)?|theater|toggle/,
        j = document.documentElement,
        k = {};

    function l(w, x) {
        var y = c('nullthrows')(w.id);
        if (!(y in k)) k[y] = 0;
        if (k[y] === 0) c('CSS').addClass(w, 'bootloading');
        k[y] += x;
    }

    function m(w) {
        var x = c('nullthrows')(w.id);
        k[x]--;
        if (k[x] === 0) c('CSS').removeClass(w, 'bootloading');
    }

    function n(w, x) {
        w = c('Parent').byAttribute(w, x);
        if (!w) return;
        do {
            o(w, x);
        } while (w = c('Parent').byAttribute(w.parentNode, x));
        return false;
    }

    function o(w, x) {
        var y = c('Parent').byClass(w, 'stat_elem') || w;
        y.id || y.setAttribute('id', c('uniqueID')());
        var z = JSON.parse(w.getAttribute(x));
        l(y, z.length);
        z.forEach(function(aa) {
            var ba = aa[0],
                ca = aa[1];
            c('Bootloader').loadModules.call(c('Bootloader'), [ba], function(da) {
                m(y);
                da[ca](w);
            }, 'Primer: addEventHandler');
        });
    }

    function p(w) {
        return !!w.match(/^(http(s)?(:\/\/))?(www\.)?([\w.-]*\.)?facebook\.com/i);
    }
    c('Event').listen(j, 'click', function(w) {
        w = w || window.event;
        h = w.target || w.srcElement;
        var x = c('Parent').byTag(h, 'A');
        if (!x) return n(h, 'data-onclick');
        var y = x.getAttribute('ajaxify'),
            z = x.href,
            aa = y || z;
        if (aa) c('clickRefAction')('a', x, w).coalesce_namespace('primer');
        if (y && z && !/#$/.test(z)) {
            var ba = w.which && w.which === 2,
                ca = w.altKey || w.ctrlKey || w.metaKey || w.shiftKey;
            if (ba || ca) return;
        }
        var da = n(h, 'data-onclick');
        c('trackReferrer')(x, aa);
        var ea = x.rel && x.rel.match(i);
        ea = ea && ea[0];
        if (z && !ea && !y && c('PageNavigationStageLoggerGK').gk_check && p(z)) {
            var fa = JSON.stringify({
                timestamp: Date.now(),
                load_stage: c('PageNavigationStageLogger').getLoadStage(),
                load_time: c('performanceNow')()
            });
            document.cookie = 'pnl_data=' + fa + ';path=/;max-age=1';
        }
        var ga = 'Primer: ' + ea;
        switch (ea) {
            case 'dialog':
            case 'dialog-post':
                c('Bootloader').loadModules(["AsyncDialog"], function(ka) {
                    ka.bootstrap(aa, x, ea);
                }, ga);
                break;
            case 'async':
            case 'async-post':
                c('Bootloader').loadModules(["AsyncRequest"], function(ka) {
                    ka.bootstrap(aa, x);
                }, ga);
                break;
            case 'theater':
                var ha = c('TimeSliceInteraction').createAutoclosed('snowlift_open_autoclosed'),
                    ia = c('TimeSliceInteraction').create('snowlift_open'),
                    ja = c('ifRequired')('PhotoSnowlift', function() {
                        return '1';
                    }, function() {
                        return '0';
                    });
                ha.trace().addStringAnnotation('is_bootloaded', ja);
                ia.trace().addStringAnnotation('is_bootloaded', ja);
                c('Arbiter').subscribeOnce('PhotoSnowlift.IMAGE_LOADED', function() {
                    ha.inform('image_loaded');
                    ia.finish();
                });
                setTimeout(function() {
                    ia.disable();
                    ia.finish();
                }, 20000);
                c('Bootloader').loadModules(["PhotoSnowlift"], function(ka) {
                    ka.bootstrap(aa, x);
                    ia.inform('bootloaded');
                }, ga);
                break;
            case 'toggle':
                c('CSS').toggleClass(x.parentNode, 'openToggler');
                c('Bootloader').loadModules(["Toggler"], function(ka) {
                    ka.bootstrap(x);
                }, ga);
                break;
            default:
                return da;
        }
        return false;
    });
    j.onsubmit = c('ErrorUtils').guard(function(w) {
        w = w || window.event;
        var x = w.target || w.srcElement;
        if (x && x.nodeName == 'FORM' && x.getAttribute('rel') == 'async') {
            c('clickRefAction')('f', x, w).coalesce_namespace('primer');
            var y = h;
            c('Bootloader').loadModules(["FormSubmit"], function(z) {
                z.send(x, y);
            }, 'Primer: async');
            return false;
        }
    }, 'Primer submit');
    var q = null,
        r = function w(x, y) {
            y = y || window.event;
            q = y.target || y.srcElement;
            n(q, 'data-on' + x);
            t();
            if (x === 'mouseover') u();
        },
        s = function w(x, y) {
            y = y || window.event;
            q = y.relatedTarget || y.toElement;
        },
        t = function w() {
            var x = q,
                y = c('Parent').byAttribute(q, 'data-hover');
            if (y) {
                switch (y.getAttribute('data-hover')) {
                    case 'tooltip':
                        c('Bootloader').loadModules(["Tooltip"], function(z) {
                            if (q === x) z.process(y, q);
                        }, 'Primer: tooltip');
                        break;
                }
                return;
            }
        },
        u = function w() {
            var x = q,
                y = c('Parent').byAttribute(x, 'data-hovercard');
            if (y) c('Bootloader').loadModules(["Hovercard"], function(z) {
                if (q === x) z.processNode(y);
            }, 'Primer: hovercard');
        };
    j.onmouseover = c('TimeSlice').guard(r.bind(null, 'mouseover'), 'Primer mouseover');
    j.onmouseout = c('TimeSlice').guard(s.bind(null, 'mouseout'), 'Primer mouseout');
    var v = c('TimeSlice').guard(r.bind(null, 'focus'), 'Primer focus');
    if (j.addEventListener) {
        j.addEventListener('focus', v, true);
    } else j.attachEvent('onfocusin', v);
}), null);
__d("XConsentCookieController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/cookie\/consent\/", {
        pv: {
            type: "Enum",
            enumType: 0
        }
    });
}), null);
__d('DeferredCookie', ['AsyncRequest', 'Cookie', 'Env', 'Map', 'SubscriptionList', 'XConsentCookieController'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = new(c('Map'))(),
        i = {
            shouldAddDefaultListener: true,
            defaultHandler: null,
            autoFlushCookies: false,
            sentConsentToServer: false,
            callbacks: new(c('SubscriptionList'))(),
            addToQueue: function j(k, l, m, n, o, p, q) {
                if (this.autoFlushCookies) {
                    if (o) {
                        c('Cookie').setIfFirstPartyContext(k, l, m, n);
                    } else c('Cookie').set(k, l, m, n);
                    return;
                }
                if (h.has(k)) return;
                h.set(k, {
                    name: k,
                    value: l,
                    nMilliSecs: m,
                    path: n,
                    firstPartyOnly: o
                });
                if (p) this.addDefaultInteractionListener();
            },
            flushAllCookies: function j() {
                delete c('Env').defer_cookies;
                h.forEach(function(l, m) {
                    if (l.firstPartyOnly) {
                        c('Cookie').setIfFirstPartyContext(l.name, l.value, l.nMilliSecs, l.path);
                    } else c('Cookie').set(l.name, l.value, l.nMilliSecs, l.path);
                });
                this.callbacks.fireCallbacks();
                this.autoFlushCookies = true;
                h = new(c('Map'))();
                if (!this.sentConsentToServer) {
                    this.sentConsentToServer = true;
                    var k = c('XConsentCookieController').getURIBuilder().setEnum('pv', this.getNoticePolicyVersion()).getURI();
                    new(c('AsyncRequest'))().setURI(k).send();
                }
                this.removeDefaultInteractionListener();
            },
            getNoticePolicyVersion: function j() {
                try {
                    var l = document.getElementById('cpn-pv-link');
                    if (!l) return '1';
                    return l.getAttribute('data-pv');
                } catch (k) {
                    return '1';
                }
            },
            removeDefaultInteractionListener: function j() {
                if (this.defaultHandler) {
                    if (window.removeEventListener) {
                        window.removeEventListener('click', this.defaultHandler, true);
                    } else if (document.detachEvent) document.detachEvent('onclick', this.defaultHandler);
                    this.defaultHandler = null;
                }
            },
            addDefaultInteractionListener: function j() {
                if (this.shouldAddDefaultListener) {
                    this.shouldAddDefaultListener = false;
                    this.defaultHandler = this.baseInteractionHandler.bind(this);
                    if (window.addEventListener) {
                        window.addEventListener('click', this.defaultHandler, true);
                    } else if (document.attachEvent) document.attachEvent('onclick', this.defaultHandler);
                }
            },
            registerCallbackOnCookieFlush: function j(k) {
                if (this.autoFlushCookies) {
                    k();
                } else this.callbacks.add(k);
            },
            baseInteractionHandler: function j() {
                this.flushAllCookies();
            },
            canEmbedThirdPartyPixel: function j() {
                if (c('Env').no_cookies || c('Env').defer_cookies) return false;
                return this.autoFlushCookies || h.size === 0;
            }
        };
    f.exports = i;
}), null);
__d("XRefererFrameController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/common\/referer_frame.php", {
        v: {
            type: "Int"
        }
    });
}), null);
__d('isOculusDotComURI', ['URI'], (function a(b, c, d, e, f, g) {
    var h = new RegExp('(^|\\.)oculus\\.com$', 'i'),
        i = ['https'];

    function j(k) {
        if (k.isEmpty() && k.toString() !== '#') return false;
        if (!k.getDomain() && !k.getProtocol()) return false;
        return (i.indexOf(k.getProtocol()) !== -1 && h.test(k.getDomain()));
    }
    f.exports = j;
}), null);
__d('ControlledReferer', ['Bootloader', 'DeferredCookie', 'URI', 'UserAgent', 'XRefererFrameController', 'isMessengerDotComURI', 'isOculusDotComURI', 'lowerFacebookDomain'], (function a(b, c, d, e, f, g) {
    var h = {
        useFacebookReferer: function i(j, k, l) {
            if (!c('DeferredCookie').canEmbedThirdPartyPixel()) {
                c('Bootloader').loadModules(["BanzaiODS"], function(p) {
                    p.bumpEntityKey('defer_cookies', 'block_controlled_referer_iframe');
                }, 'ControlledReferer');
                return;
            }
            var m = false;

            function n() {
                if (m) return;
                var p = j.contentWindow.location.pathname;
                if (p !== '/intern/common/referer_frame.php' && p !== '/common/referer_frame.php') return;
                m = true;
                j.contentWindow.document.body.style.margin = 0;
                k();
            }
            var o = void 0;
            if (c('isMessengerDotComURI')(c('URI').getRequestURI())) {
                o = c('XRefererFrameController').getURIBuilder().getURI().toString();
            } else if (c('isOculusDotComURI')(c('URI').getRequestURI())) {
                o = '/common/referer_frame.php';
            } else if (!c('lowerFacebookDomain').isValidDocumentDomain()) {
                o = '/intern/common/referer_frame.php';
            } else if (c('UserAgent').isBrowser('Opera')) {
                o = c('XRefererFrameController').getURIBuilder().getURI().toString();
            } else o = c('XRefererFrameController').getURIBuilder().getURI().qualify().setProtocol('https').setSubdomain('staticxx').toString();
            if (l) o += '?fb_source=' + l;
            j.onload = n;
            j.src = o;
        },
        useFacebookRefererHtml: function i(j, k, l) {
            h.useFacebookReferer(j, function() {
                j.contentWindow.document.body.innerHTML = k;
            }, l);
        }
    };
    f.exports = h;
}), null);
__d('TrackingPixel', ['Arbiter', 'ControlledReferer', 'DeferredCookie', 'JSLog', 'NonBlockingIFrame', 'WebSpeedExperiments'], (function a(b, c, d, e, f, g) {
    var h = {
        _iframe: undefined,
        loadWithNoReferrer: function i(j) {
            if (!c('DeferredCookie').canEmbedThirdPartyPixel()) {
                c('JSLog').error('Attempting to load a TrackingPixel (%s) while cookies are deferred. ' + 'This is not allowed because tracking pixels sometimes set cookies.', j);
                return;
            }
            if (!h._iframe)
                if (c('WebSpeedExperiments').non_blocking_logger) {
                    h._iframe = true;
                    c('NonBlockingIFrame').loadIFrame().then(function(l) {
                        h._iframe = l;
                        c('ControlledReferer').useFacebookReferer(l, function() {
                            c('Arbiter').inform('TrackingPixel/iframeIsLoaded', null, c('Arbiter').BEHAVIOR_PERSISTENT);
                        }, null);
                    }).done();
                } else {
                    var k = document.createElement('iframe');
                    k.frameborder = 0;
                    k.width = k.height = 1;
                    k.style.position = 'absolute';
                    k.style.top = '-10px';
                    c('ControlledReferer').useFacebookReferer(k, function() {
                        c('Arbiter').inform('TrackingPixel/iframeIsLoaded', null, c('Arbiter').BEHAVIOR_PERSISTENT);
                    }, null);
                    document.body.appendChild(k);
                    h._iframe = k;
                }
            c('Arbiter').subscribe('TrackingPixel/iframeIsLoaded', function() {
                var l = h._iframe.contentWindow,
                    m = new l.Image();
                m.src = j;
            });
        }
    };
    f.exports = h;
}), null);
__d("areJSONRepresentationsEqual", [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        return JSON.stringify(i) == JSON.stringify(j);
    }
    f.exports = h;
}), null);
__d('UIForm', ['ArbiterMixin', 'BehaviorsMixin', 'DOM', 'Event', 'Form', 'Run', 'areJSONRepresentationsEqual', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('mixin')(c('ArbiterMixin'), c('BehaviorsMixin')));
    i = h && h.prototype;

    function j(k, l, m, n, o) {
        'use strict';
        i.constructor.call(this);
        this._root = k;
        this.controller = k;
        this._message = l;
        if (n) {
            this._confirm_dialog = n;
            n.subscribe('confirm', this._handleDialogConfirm.bind(this));
            c('DOM').prependContent(this._root, c('DOM').create('input', {
                type: 'hidden',
                name: 'confirmed',
                value: 'true'
            }));
        }
        c('Run').onAfterLoad(function() {
            this._originalState = c('Form').serialize(this._root);
        }.bind(this));
        this._forceDirty = m;
        this._confirmed = false;
        this._submitted = false;
        c('Event').listen(this._root, 'submit', this._handleSubmit.bind(this));
        if (o && o.length) this.enableBehaviors(o);
        var p = true;
        c('Run').onBeforeUnload(this.checkUnsaved.bind(this), p);
    }
    j.prototype.getRoot = function() {
        'use strict';
        return this._root;
    };
    j.prototype._handleSubmit = function() {
        'use strict';
        if (this._confirm_dialog && !this._confirmed) {
            this._confirm_dialog.show();
            return false;
        }
        if (this.inform('submit') === false) return false;
        this._submitted = true;
        return true;
    };
    j.prototype._handleDialogConfirm = function() {
        'use strict';
        this._confirmed = true;
        this._confirm_dialog.hide();
        if (this._root.getAttribute('ajaxify')) {
            c('Event').fire(this._root, 'submit');
        } else if (this._handleSubmit()) this._root.submit();
    };
    j.prototype.reset = function() {
        'use strict';
        this.inform('reset');
        this._submitted = false;
        this._confirmed = false;
    };
    j.prototype.isDirty = function() {
        'use strict';
        if (this._submitted || !c('DOM').contains(document.body, this._root)) return false;
        if (this._forceDirty) return true;
        if (!this._originalState) return false;
        var k = c('Form').serialize(this._root);
        return !c('areJSONRepresentationsEqual')(k, this._originalState);
    };
    j.prototype.checkUnsaved = function() {
        'use strict';
        if (this.isDirty()) return this._message;
        return null;
    };
    f.exports = b.UIForm || j;
}), null);
__d('VerifiedXD', ['XD'], (function a(b, c, d, e, f, g) {
    var h = c('XD').XD;
    f.exports = h;
}), null);
__d('VerifyDomain', ['Arbiter', 'CSS', 'VerifiedXD', 'guid'], (function a(b, c, d, e, f, g) {
    var h = {
        VERIFIED: 'platform/plugins/verify_domain',
        verify: function i(j) {
            var k;
            if (location.ancestorOrigins && location.ancestorOrigins.length > 0) {
                if (location.ancestorOrigins[0] === j) c('Arbiter').inform(h.VERIFIED, null, c('Arbiter').BEHAVIOR_STATE);
            } else(function() {
                var l = c('guid')();
                c('Arbiter').subscribe('Connect.Unsafe.xd/verify', function(event, m) {
                    if (m === l) c('Arbiter').inform(h.VERIFIED, null, c('Arbiter').BEHAVIOR_STATE);
                });
                c('VerifiedXD').send({
                    type: 'verify',
                    token: l
                });
            })();
        },
        show: function i(j) {
            c('Arbiter').subscribe(h.VERIFIED, c('CSS').show.bind(null, j));
        }
    };
    f.exports = h;
}), null);