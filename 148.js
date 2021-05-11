if (self.CavalryLogger) {
    CavalryLogger.start_js(["nAVBE"]);
}

/**
 * License: https://www.facebook.com/legal/license/mcoD67ejzPB/
 */
__d("WitUnderscore", [], (function(a, b, c, d, e, f) {
    (function() {
        var a = this
          , b = a._
          , c = Array.prototype
          , d = Object.prototype
          , g = Function.prototype
          , h = c.push
          , i = c.slice
          , j = d.toString
          , k = d.hasOwnProperty
          , l = Array.isArray
          , m = Object.keys
          , n = g.bind
          , o = Object.create
          , p = function() {}
          , q = function a(b) {
            if (b instanceof a)
                return b;
            if (!(this instanceof a))
                return new a(b);
            this._wrapped = b
        };
        typeof f !== "undefined" ? (typeof e !== "undefined" && e.exports && (f = e.exports = q),
        f._ = q) : a._ = q;
        q.VERSION = "1.8.3";
        var r = function(a, b, c) {
            if (b === void 0)
                return a;
            switch (c == null ? 3 : c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                }
                ;
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                }
                ;
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                }
                ;
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
          , s = function(a, b, c) {
            if (a == null)
                return q.identity;
            if (q.isFunction(a))
                return r(a, b, c);
            return q.isObject(a) ? q.matcher(a) : q.property(a)
        };
        q.iteratee = function(a, b) {
            return s(a, b, Infinity)
        }
        ;
        var t = function(a, b) {
            return function(c) {
                var d = arguments.length;
                if (d < 2 || c == null)
                    return c;
                for (var e = 1; e < d; e++) {
                    var f = arguments[e]
                      , g = a(f)
                      , h = g.length;
                    for (var i = 0; i < h; i++) {
                        var j = g[i];
                        (!b || c[j] === void 0) && (c[j] = f[j])
                    }
                }
                return c
            }
        }
          , u = function(a) {
            if (!q.isObject(a))
                return {};
            if (o)
                return o(a);
            p.prototype = a;
            a = new p();
            p.prototype = null;
            return a
        }
          , v = function(a) {
            return function(b) {
                return b == null ? void 0 : b[a]
            }
        }
          , w = Math.pow(2, 53) - 1
          , x = v("length")
          , y = function(a) {
            a = x(a);
            return typeof a === "number" && a >= 0 && a <= w
        };
        q.each = q.forEach = function(a, b, c) {
            b = r(b, c);
            var d;
            if (y(a))
                for (c = 0,
                d = a.length; c < d; c++)
                    b(a[c], c, a);
            else {
                var e = q.keys(a);
                for (c = 0,
                d = e.length; c < d; c++)
                    b(a[e[c]], e[c], a)
            }
            return a
        }
        ;
        q.map = q.collect = function(a, b, c) {
            b = s(b, c);
            c = !y(a) && q.keys(a);
            var d = (c || a).length
              , e = Array(d);
            for (var f = 0; f < d; f++) {
                var g = c ? c[f] : f;
                e[f] = b(a[g], g, a)
            }
            return e
        }
        ;
        function z(a) {
            function b(b, c, d, e, f, g) {
                for (; f >= 0 && f < g; f += a) {
                    var h = e ? e[f] : f;
                    d = c(d, b[h], h, b)
                }
                return d
            }
            return function(c, d, e, f) {
                d = r(d, f, 4);
                var g = !y(c) && q.keys(c)
                  , h = (g || c).length
                  , i = a > 0 ? 0 : h - 1;
                arguments.length < 3 && (e = c[g ? g[i] : i],
                i += a);
                return b(c, d, e, g, i, h)
            }
        }
        q.reduce = q.foldl = q.inject = z(1);
        q.reduceRight = q.foldr = z(-1);
        q.find = q.detect = function(a, b, c) {
            var d;
            y(a) ? d = q.findIndex(a, b, c) : d = q.findKey(a, b, c);
            if (d !== void 0 && d !== -1)
                return a[d]
        }
        ;
        q.filter = q.select = function(a, b, c) {
            var d = [];
            b = s(b, c);
            q.each(a, function(a, c, e) {
                b(a, c, e) && d.push(a)
            });
            return d
        }
        ;
        q.reject = function(a, b, c) {
            return q.filter(a, q.negate(s(b)), c)
        }
        ;
        q.every = q.all = function(a, b, c) {
            b = s(b, c);
            c = !y(a) && q.keys(a);
            var d = (c || a).length;
            for (var e = 0; e < d; e++) {
                var f = c ? c[e] : e;
                if (!b(a[f], f, a))
                    return !1
            }
            return !0
        }
        ;
        q.some = q.any = function(a, b, c) {
            b = s(b, c);
            c = !y(a) && q.keys(a);
            var d = (c || a).length;
            for (var e = 0; e < d; e++) {
                var f = c ? c[e] : e;
                if (b(a[f], f, a))
                    return !0
            }
            return !1
        }
        ;
        q.contains = q.includes = q.include = function(a, b, c, d) {
            y(a) || (a = q.values(a));
            (typeof c !== "number" || d) && (c = 0);
            return q.indexOf(a, b, c) >= 0
        }
        ;
        q.invoke = function(a, b) {
            var c = i.call(arguments, 2)
              , d = q.isFunction(b);
            return q.map(a, function(a) {
                var e = d ? b : a[b];
                return e == null ? e : e.apply(a, c)
            })
        }
        ;
        q.pluck = function(a, b) {
            return q.map(a, q.property(b))
        }
        ;
        q.where = function(a, b) {
            return q.filter(a, q.matcher(b))
        }
        ;
        q.findWhere = function(a, b) {
            return q.find(a, q.matcher(b))
        }
        ;
        q.max = function(b, c, d) {
            var a = -Infinity, e = -Infinity, f;
            if (c == null && b != null) {
                b = y(b) ? b : q.values(b);
                for (var g = 0, h = b.length; g < h; g++)
                    f = b[g],
                    f > a && (a = f)
            } else
                c = s(c, d),
                q.each(b, function(b, d, f) {
                    b = c(b, d, f),
                    (b > e || b === -Infinity && a === -Infinity) && (a = b,
                    e = b)
                });
            return a
        }
        ;
        q.min = function(b, c, d) {
            var a = Infinity, e = Infinity, f;
            if (c == null && b != null) {
                b = y(b) ? b : q.values(b);
                for (var g = 0, h = b.length; g < h; g++)
                    f = b[g],
                    f < a && (a = f)
            } else
                c = s(c, d),
                q.each(b, function(b, d, f) {
                    b = c(b, d, f),
                    (b < e || b === Infinity && a === Infinity) && (a = b,
                    e = b)
                });
            return a
        }
        ;
        q.shuffle = function(a) {
            a = y(a) ? a : q.values(a);
            var b = a.length
              , c = Array(b);
            for (var d = 0, e; d < b; d++)
                e = q.random(0, d),
                e !== d && (c[d] = c[e]),
                c[e] = a[d];
            return c
        }
        ;
        q.sample = function(a, b, c) {
            if (b == null || c) {
                y(a) || (a = q.values(a));
                return a[q.random(a.length - 1)]
            }
            return q.shuffle(a).slice(0, Math.max(0, b))
        }
        ;
        q.sortBy = function(a, b, c) {
            b = s(b, c);
            return q.pluck(q.map(a, function(a, c, d) {
                return {
                    value: a,
                    index: c,
                    criteria: b(a, c, d)
                }
            }).sort(function(a, b) {
                var c = a.criteria
                  , d = b.criteria;
                if (c !== d) {
                    if (c > d || c === void 0)
                        return 1;
                    if (c < d || d === void 0)
                        return -1
                }
                return a.index - b.index
            }), "value")
        }
        ;
        var A = function(a) {
            return function(c, d, e) {
                var b = {};
                d = s(d, e);
                q.each(c, function(e, f) {
                    f = d(e, f, c);
                    a(b, e, f)
                });
                return b
            }
        };
        q.groupBy = A(function(a, b, c) {
            q.has(a, c) ? a[c].push(b) : a[c] = [b]
        });
        q.indexBy = A(function(a, b, c) {
            a[c] = b
        });
        q.countBy = A(function(a, b, c) {
            q.has(a, c) ? a[c]++ : a[c] = 1
        });
        q.toArray = function(a) {
            if (!a)
                return [];
            if (q.isArray(a))
                return i.call(a);
            return y(a) ? q.map(a, q.identity) : q.values(a)
        }
        ;
        q.size = function(a) {
            return a == null ? 0 : y(a) ? a.length : q.keys(a).length
        }
        ;
        q.partition = function(a, b, c) {
            b = s(b, c);
            var d = []
              , e = [];
            q.each(a, function(c, f, a) {
                (b(c, f, a) ? d : e).push(c)
            });
            return [d, e]
        }
        ;
        q.first = q.head = q.take = function(a, b, c) {
            if (a == null)
                return void 0;
            return b == null || c ? a[0] : q.initial(a, a.length - b)
        }
        ;
        q.initial = function(a, b, c) {
            return i.call(a, 0, Math.max(0, a.length - (b == null || c ? 1 : b)))
        }
        ;
        q.last = function(a, b, c) {
            if (a == null)
                return void 0;
            return b == null || c ? a[a.length - 1] : q.rest(a, Math.max(0, a.length - b))
        }
        ;
        q.rest = q.tail = q.drop = function(a, b, c) {
            return i.call(a, b == null || c ? 1 : b)
        }
        ;
        q.compact = function(a) {
            return q.filter(a, q.identity)
        }
        ;
        var B = function a(b, c, d, e) {
            var f = []
              , g = 0;
            for (var e = e || 0, h = x(b); e < h; e++) {
                var i = b[e];
                if (y(i) && (q.isArray(i) || q.isArguments(i))) {
                    c || (i = a(i, c, d));
                    var j = 0
                      , k = i.length;
                    f.length += k;
                    while (j < k)
                        f[g++] = i[j++]
                } else
                    d || (f[g++] = i)
            }
            return f
        };
        q.flatten = function(a, b) {
            return B(a, b, !1)
        }
        ;
        q.without = function(a) {
            return q.difference(a, i.call(arguments, 1))
        }
        ;
        q.uniq = q.unique = function(a, b, c, d) {
            q.isBoolean(b) || (d = c,
            c = b,
            b = !1);
            c != null && (c = s(c, d));
            d = [];
            var e = [];
            for (var f = 0, g = x(a); f < g; f++) {
                var h = a[f]
                  , i = c ? c(h, f, a) : h;
                b ? ((!f || e !== i) && d.push(h),
                e = i) : c ? q.contains(e, i) || (e.push(i),
                d.push(h)) : q.contains(d, h) || d.push(h)
            }
            return d
        }
        ;
        q.union = function() {
            return q.uniq(B(arguments, !0, !0))
        }
        ;
        q.intersection = function(b) {
            var a = []
              , c = arguments.length;
            for (var d = 0, e = x(b); d < e; d++) {
                var f = b[d];
                if (q.contains(a, f))
                    continue;
                for (var g = 1; g < c; g++)
                    if (!q.contains(arguments[g], f))
                        break;
                g === c && a.push(f)
            }
            return a
        }
        ;
        q.difference = function(a) {
            var b = B(arguments, !0, !0, 1);
            return q.filter(a, function(a) {
                return !q.contains(b, a)
            })
        }
        ;
        q.zip = function() {
            return q.unzip(arguments)
        }
        ;
        q.unzip = function(b) {
            var c = b && q.max(b, x).length || 0
              , a = Array(c);
            for (var d = 0; d < c; d++)
                a[d] = q.pluck(b, d);
            return a
        }
        ;
        q.object = function(b, c) {
            var a = {};
            for (var d = 0, e = x(b); d < e; d++)
                c ? a[b[d]] = c[d] : a[b[d][0]] = b[d][1];
            return a
        }
        ;
        function C(a) {
            return function(b, c, d) {
                c = s(c, d);
                d = x(b);
                var e = a > 0 ? 0 : d - 1;
                for (; e >= 0 && e < d; e += a)
                    if (c(b[e], e, b))
                        return e;
                return -1
            }
        }
        q.findIndex = C(1);
        q.findLastIndex = C(-1);
        q.sortedIndex = function(a, b, c, d) {
            c = s(c, d, 1);
            d = c(b);
            b = 0;
            var e = x(a);
            while (b < e) {
                var f = Math.floor((b + e) / 2);
                c(a[f]) < d ? b = f + 1 : e = f
            }
            return b
        }
        ;
        function D(a, b, c) {
            return function(d, e, f) {
                var g = 0
                  , h = x(d);
                if (typeof f === "number")
                    a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
                else if (c && f && h) {
                    f = c(d, e);
                    return d[f] === e ? f : -1
                }
                if (e !== e) {
                    f = b(i.call(d, g, h), q.isNaN);
                    return f >= 0 ? f + g : -1
                }
                for (f = a > 0 ? g : h - 1; f >= 0 && f < h; f += a)
                    if (d[f] === e)
                        return f;
                return -1
            }
        }
        q.indexOf = D(1, q.findIndex, q.sortedIndex);
        q.lastIndexOf = D(-1, q.findLastIndex);
        q.range = function(a, b, c) {
            b == null && (b = a || 0,
            a = 0);
            c = c || 1;
            b = Math.max(Math.ceil((b - a) / c), 0);
            var d = Array(b);
            for (var e = 0; e < b; e++,
            a += c)
                d[e] = a;
            return d
        }
        ;
        var E = function(a, b, c, d, e) {
            if (!(d instanceof b))
                return a.apply(c, e);
            d = u(a.prototype);
            b = a.apply(d, e);
            return q.isObject(b) ? b : d
        };
        q.bind = function(a, b) {
            if (n && a.bind === n)
                return n.apply(a, i.call(arguments, 1));
            if (!q.isFunction(a))
                throw new TypeError("Bind must be called on a function");
            var c = i.call(arguments, 2)
              , d = function d() {
                return E(a, d, b, this, c.concat(i.call(arguments)))
            };
            return d
        }
        ;
        q.partial = function(a) {
            var b = i.call(arguments, 1)
              , c = function c() {
                var d = 0
                  , e = b.length
                  , f = Array(e);
                for (var g = 0; g < e; g++)
                    f[g] = b[g] === q ? arguments[d++] : b[g];
                while (d < arguments.length)
                    f.push(arguments[d++]);
                return E(a, c, this, this, f)
            };
            return c
        }
        ;
        q.bindAll = function(a) {
            var b, c = arguments.length, d;
            if (c <= 1)
                throw new Error("bindAll must be passed function names");
            for (b = 1; b < c; b++)
                d = arguments[b],
                a[d] = q.bind(a[d], a);
            return a
        }
        ;
        q.memoize = function(a, b) {
            var c = function c(d) {
                var e = c.cache
                  , f = "" + (b ? b.apply(this, arguments) : d);
                q.has(e, f) || (e[f] = a.apply(this, arguments));
                return e[f]
            };
            c.cache = {};
            return c
        }
        ;
        q.delay = function(a, b) {
            var c = i.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c)
            }, b)
        }
        ;
        q.defer = q.partial(q.delay, q, 1);
        q.throttle = function(b, c, d) {
            var e, f, a, g = null, h = 0;
            d || (d = {});
            var i = function() {
                h = d.leading === !1 ? 0 : q.now(),
                g = null,
                a = b.apply(e, f),
                g || (e = f = null)
            };
            return function() {
                var j = q.now();
                !h && d.leading === !1 && (h = j);
                var k = c - (j - h);
                e = this;
                f = arguments;
                k <= 0 || k > c ? (g && (clearTimeout(g),
                g = null),
                h = j,
                a = b.apply(e, f),
                g || (e = f = null)) : !g && d.trailing !== !1 && (g = setTimeout(i, k));
                return a
            }
        }
        ;
        q.debounce = function(b, c, d) {
            var e, f, g, h, a, i = function i() {
                var j = q.now() - h;
                j < c && j >= 0 ? e = setTimeout(i, c - j) : (e = null,
                d || (a = b.apply(g, f),
                e || (g = f = null)))
            };
            return function() {
                g = this;
                f = arguments;
                h = q.now();
                var j = d && !e;
                e || (e = setTimeout(i, c));
                j && (a = b.apply(g, f),
                g = f = null);
                return a
            }
        }
        ;
        q.wrap = function(a, b) {
            return q.partial(b, a)
        }
        ;
        q.negate = function(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }
        ;
        q.compose = function() {
            var a = arguments
              , b = a.length - 1;
            return function() {
                var d = b
                  , c = a[b].apply(this, arguments);
                while (d--)
                    c = a[d].call(this, c);
                return c
            }
        }
        ;
        q.after = function(a, b) {
            return function() {
                if (--a < 1)
                    return b.apply(this, arguments)
            }
        }
        ;
        q.before = function(a, b) {
            var c;
            return function() {
                --a > 0 && (c = b.apply(this, arguments));
                a <= 1 && (b = null);
                return c
            }
        }
        ;
        q.once = q.partial(q.before, 2);
        var F = !{
            toString: null
        }.propertyIsEnumerable("toString")
          , G = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        function H(a, b) {
            var c = G.length
              , e = a.constructor;
            e = q.isFunction(e) && e.prototype || d;
            var f = "constructor";
            q.has(a, f) && !q.contains(b, f) && b.push(f);
            while (c--)
                f = G[c],
                f in a && a[f] !== e[f] && !q.contains(b, f) && b.push(f)
        }
        q.keys = function(a) {
            if (!q.isObject(a))
                return [];
            if (m)
                return m(a);
            var b = [];
            for (var c in a)
                q.has(a, c) && b.push(c);
            F && H(a, b);
            return b
        }
        ;
        q.allKeys = function(a) {
            if (!q.isObject(a))
                return [];
            var b = [];
            for (var c in a)
                b.push(c);
            F && H(a, b);
            return b
        }
        ;
        q.values = function(a) {
            var b = q.keys(a)
              , c = b.length
              , d = Array(c);
            for (var e = 0; e < c; e++)
                d[e] = a[b[e]];
            return d
        }
        ;
        q.mapObject = function(a, b, c) {
            b = s(b, c);
            c = q.keys(a);
            var d = c.length, e = {}, f;
            for (var g = 0; g < d; g++)
                f = c[g],
                e[f] = b(a[f], f, a);
            return e
        }
        ;
        q.pairs = function(a) {
            var b = q.keys(a)
              , c = b.length
              , d = Array(c);
            for (var e = 0; e < c; e++)
                d[e] = [b[e], a[b[e]]];
            return d
        }
        ;
        q.invert = function(b) {
            var a = {}
              , c = q.keys(b);
            for (var d = 0, e = c.length; d < e; d++)
                a[b[c[d]]] = c[d];
            return a
        }
        ;
        q.functions = q.methods = function(a) {
            var b = [];
            for (var c in a)
                q.isFunction(a[c]) && b.push(c);
            return b.sort()
        }
        ;
        q.extend = t(q.allKeys);
        q.extendOwn = q.assign = t(q.keys);
        q.findKey = function(a, b, c) {
            b = s(b, c);
            c = q.keys(a);
            var d;
            for (var e = 0, f = c.length; e < f; e++) {
                d = c[e];
                if (b(a[d], d, a))
                    return d
            }
        }
        ;
        q.pick = function(b, c, d) {
            var a = {}, e = b, f, g;
            if (e == null)
                return a;
            q.isFunction(c) ? (g = q.allKeys(e),
            f = r(c, d)) : (g = B(arguments, !1, !1, 1),
            f = function(c, b, a) {
                return b in a
            }
            ,
            e = Object(e));
            for (var h = 0, i = g.length; h < i; h++) {
                var j = g[h]
                  , k = e[j];
                f(k, j, e) && (a[j] = k)
            }
            return a
        }
        ;
        q.omit = function(a, b, c) {
            if (q.isFunction(b))
                b = q.negate(b);
            else {
                var d = q.map(B(arguments, !1, !1, 1), String);
                b = function(a, b) {
                    return !q.contains(d, b)
                }
            }
            return q.pick(a, b, c)
        }
        ;
        q.defaults = t(q.allKeys, !0);
        q.create = function(a, b) {
            a = u(a);
            b && q.extendOwn(a, b);
            return a
        }
        ;
        q.clone = function(a) {
            return !q.isObject(a) ? a : q.isArray(a) ? a.slice() : q.extend({}, a)
        }
        ;
        q.tap = function(a, b) {
            b(a);
            return a
        }
        ;
        q.isMatch = function(a, b) {
            var c = q.keys(b)
              , d = c.length;
            if (a == null)
                return !d;
            a = Object(a);
            for (var e = 0; e < d; e++) {
                var f = c[e];
                if (b[f] !== a[f] || !(f in a))
                    return !1
            }
            return !0
        }
        ;
        var I = function a(b, c, d, e) {
            if (b === c)
                return b !== 0 || 1 / b === 1 / c;
            if (b == null || c == null)
                return b === c;
            b instanceof q && (b = b._wrapped);
            c instanceof q && (c = c._wrapped);
            var f = j.call(b);
            if (f !== j.call(c))
                return !1;
            switch (f) {
            case "[object RegExp]":
            case "[object String]":
                return "" + b === "" + c;
            case "[object Number]":
                return +b !== +b ? +c !== +c : +b === 0 ? 1 / +b === 1 / c : +b === +c;
            case "[object Date]":
            case "[object Boolean]":
                return +b === +c
            }
            f = f === "[object Array]";
            if (!f) {
                if (typeof b !== "object" || typeof c !== "object")
                    return !1;
                var g = b.constructor
                  , h = c.constructor;
                if (g !== h && !(q.isFunction(g) && g instanceof g && q.isFunction(h) && h instanceof h) && "constructor"in b && "constructor"in c)
                    return !1
            }
            d = d || [];
            e = e || [];
            g = d.length;
            while (g--)
                if (d[g] === b)
                    return e[g] === c;
            d.push(b);
            e.push(c);
            if (f) {
                g = b.length;
                if (g !== c.length)
                    return !1;
                while (g--)
                    if (!a(b[g], c[g], d, e))
                        return !1
            } else {
                h = q.keys(b);
                g = h.length;
                if (q.keys(c).length !== g)
                    return !1;
                while (g--) {
                    f = h[g];
                    if (!(q.has(c, f) && a(b[f], c[f], d, e)))
                        return !1
                }
            }
            d.pop();
            e.pop();
            return !0
        };
        q.isEqual = function(a, b) {
            return I(a, b)
        }
        ;
        q.isEmpty = function(a) {
            if (a == null)
                return !0;
            return y(a) && (q.isArray(a) || q.isString(a) || q.isArguments(a)) ? a.length === 0 : q.keys(a).length === 0
        }
        ;
        q.isElement = function(a) {
            return !!(a && a.nodeType === 1)
        }
        ;
        q.isArray = l || function(a) {
            return j.call(a) === "[object Array]"
        }
        ;
        q.isObject = function(a) {
            var b = typeof a;
            return b === "function" || b === "object" && !!a
        }
        ;
        q.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
            q["is" + a] = function(b) {
                return j.call(b) === "[object " + a + "]"
            }
        });
        q.isArguments(arguments) || (q.isArguments = function(a) {
            return q.has(a, "callee")
        }
        );
        typeof Int8Array !== "object" && (q.isFunction = function(a) {
            return typeof a === "function" || !1
        }
        );
        q.isFinite = function(a) {
            return isFinite(a) && !isNaN(parseFloat(a))
        }
        ;
        q.isNaN = function(a) {
            return q.isNumber(a) && a !== +a
        }
        ;
        q.isBoolean = function(a) {
            return a === !0 || a === !1 || j.call(a) === "[object Boolean]"
        }
        ;
        q.isNull = function(a) {
            return a === null
        }
        ;
        q.isUndefined = function(a) {
            return a === void 0
        }
        ;
        q.has = function(a, b) {
            return a != null && k.call(a, b)
        }
        ;
        q.noConflict = function() {
            a._ = b;
            return this
        }
        ;
        q.identity = function(a) {
            return a
        }
        ;
        q.constant = function(a) {
            return function() {
                return a
            }
        }
        ;
        q.noop = function() {}
        ;
        q.property = v;
        q.propertyOf = function(a) {
            return a == null ? function() {}
            : function(b) {
                return a[b]
            }
        }
        ;
        q.matcher = q.matches = function(a) {
            a = q.extendOwn({}, a);
            return function(b) {
                return q.isMatch(b, a)
            }
        }
        ;
        q.times = function(a, b, c) {
            var d = Array(Math.max(0, a));
            b = r(b, c, 1);
            for (var c = 0; c < a; c++)
                d[c] = b(c);
            return d
        }
        ;
        q.random = function(a, b) {
            b == null && (b = a,
            a = 0);
            return a + Math.floor(Math.random() * (b - a + 1))
        }
        ;
        q.now = Date.now || function() {
            return new Date().getTime()
        }
        ;
        var J = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , K = q.invert(J)
          , L = function(b) {
            var a = function(a) {
                return b[a]
            }
              , c = "(?:" + q.keys(b).join("|") + ")"
              , d = RegExp(c)
              , e = RegExp(c, "g");
            return function(b) {
                b = b == null ? "" : "" + b;
                return d.test(b) ? b.replace(e, a) : b
            }
        };
        q.escape = L(J);
        q.unescape = L(K);
        q.result = function(b, a, c) {
            a = b == null ? void 0 : b[a];
            a === void 0 && (a = c);
            return q.isFunction(a) ? a.call(b) : a
        }
        ;
        var M = 0;
        q.uniqueId = function(a) {
            var b = ++M + "";
            return a ? a + b : b
        }
        ;
        q.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var N = /(.)^/
          , O = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , P = /\\|\'|\r|\n|\u2028|\u2029/g
          , Q = function(a) {
            return "\\" + O[a]
        };
        q.template = function(a, b, c) {
            !b && c && (b = c);
            b = q.defaults({}, b, q.templateSettings);
            c = RegExp([(b.escape || N).source, (b.interpolate || N).source, (b.evaluate || N).source].join("|") + "|$", "g");
            var d = 0
              , e = "__p+='";
            a.replace(c, function(b, c, f, g, h) {
                e += a.slice(d, h).replace(P, Q);
                d = h + b.length;
                c ? e += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : f ? e += "'+\n((__t=(" + f + "))==null?'':__t)+\n'" : g && (e += "';\n" + g + "\n__p+='");
                return b
            });
            e += "';\n";
            b.variable || (e = "with(obj||{}){\n" + e + "}\n");
            e = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + e + "return __p;\n";
            try {
                var f = new Function(b.variable || "obj","_",e)
            } catch (a) {
                a.source = e;
                throw a
            }
            c = function(a) {
                return f.call(this, a, q)
            }
            ;
            b = b.variable || "obj";
            c.source = "function(" + b + "){\n" + e + "}";
            return c
        }
        ;
        q.chain = function(a) {
            a = q(a);
            a._chain = !0;
            return a
        }
        ;
        var R = function(a, b) {
            return a._chain ? q(b).chain() : b
        };
        q.mixin = function(a) {
            q.each(q.functions(a), function(b) {
                var c = q[b] = a[b];
                q.prototype[b] = function() {
                    var a = [this._wrapped];
                    h.apply(a, arguments);
                    return R(this, c.apply(q, a))
                }
            })
        }
        ;
        q.mixin(q);
        q.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
            var b = c[a];
            q.prototype[a] = function() {
                var c = this._wrapped;
                b.apply(c, arguments);
                (a === "shift" || a === "splice") && c.length === 0 && delete c[0];
                return R(this, c)
            }
        });
        q.each(["concat", "join", "slice"], function(a) {
            var b = c[a];
            q.prototype[a] = function() {
                return R(this, b.apply(this._wrapped, arguments))
            }
        });
        q.prototype.value = function() {
            return this._wrapped
        }
        ;
        q.prototype.valueOf = q.prototype.toJSON = q.prototype.value;
        q.prototype.toString = function() {
            return "" + this._wrapped
        }
        ;
        typeof define === "function" && define.amd && define("underscore", [], function() {
            return q
        })
    }
    ).call(this)
}
), null);
