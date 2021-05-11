if (self.CavalryLogger) {
    CavalryLogger.start_js(["YsL1+"]);
}

__d("bs_caml_builtin_exceptions", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = ["Out_of_memory", 0];
    b = ["Sys_error", -1];
    c = ["Failure", -2];
    d = ["Invalid_argument", -3];
    e = ["End_of_file", -4];
    var g = ["Division_by_zero", -5]
      , h = ["Not_found", -6]
      , i = ["Match_failure", -7]
      , j = ["Stack_overflow", -8]
      , k = ["Sys_blocked_io", -9]
      , l = ["Assert_failure", -10]
      , m = ["Undefined_recursive_module", -11];
    a.tag = 248;
    b.tag = 248;
    c.tag = 248;
    d.tag = 248;
    e.tag = 248;
    g.tag = 248;
    h.tag = 248;
    i.tag = 248;
    j.tag = 248;
    k.tag = 248;
    l.tag = 248;
    m.tag = 248;
    f.out_of_memory = a;
    f.sys_error = b;
    f.failure = c;
    f.invalid_argument = d;
    f.end_of_file = e;
    f.division_by_zero = g;
    f.not_found = h;
    f.match_failure = i;
    f.stack_overflow = j;
    f.sys_blocked_io = k;
    f.assert_failure = l;
    f.undefined_recursive_module = m
}
), null);
__d("bs_caml_array", ["bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(b, c, a) {
        var d = new Array(a)
          , e = 0;
        c = c;
        while (e < a)
            d[e] = b[c],
            e = e + 1 | 0,
            c = c + 1 | 0;
        return d
    }
    function g(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (c) {
                b = c[1];
                a = c[0].length + d | 0;
                continue
            } else
                return d
        }
    }
    function h(a, b, c) {
        while (!0) {
            var d = c
              , e = b;
            if (d) {
                var f = d[0]
                  , g = f.length;
                e = e;
                var h = 0;
                while (h < g)
                    a[e] = f[h],
                    e = e + 1 | 0,
                    h = h + 1 | 0;
                c = d[1];
                b = e;
                continue
            } else
                return 0
        }
    }
    function c(a) {
        var b = g(0, a);
        b = new Array(b);
        h(b, 0, a);
        return b
    }
    function d(a, c, d) {
        if (c < 0 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "index out of bounds"];
        a[c] = d;
        return 0
    }
    function e(a, c) {
        if (c < 0 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "index out of bounds"];
        return a[c]
    }
    function i(a, b) {
        var c = new Array(a);
        for (var d = 0, a = a - 1 | 0; d <= a; ++d)
            c[d] = b;
        return c
    }
    function j(a) {
        var b = new Array(a);
        for (var c = 0, a = a - 1 | 0; c <= a; ++c)
            b[c] = 0;
        return b
    }
    function k(b, c, d, e, a) {
        if (e <= c) {
            for (var f = 0, h = a - 1 | 0; f <= h; ++f)
                d[f + e | 0] = b[f + c | 0];
            return 0
        } else {
            for (var f = a - 1 | 0; f >= 0; --f)
                d[f + e | 0] = b[f + c | 0];
            return 0
        }
    }
    function l(a) {
        return a.slice(0)
    }
    f.caml_array_dup = l;
    f.caml_array_sub = a;
    f.caml_array_concat = c;
    f.caml_make_vect = i;
    f.caml_make_float_vect = j;
    f.caml_array_blit = k;
    f.caml_array_get = e;
    f.caml_array_set = d
}
), null);
__d("bs_caml_option", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    function h(a) {
        if (a === void 0) {
            var b = [g, 0];
            b.tag = 256;
            return b
        } else if (a !== null && a[0] === g) {
            b = a[1] + 1 | 0;
            b = [g, b];
            b.tag = 256;
            return b
        } else
            return a
    }
    function a(a) {
        if (a === null || a === void 0)
            return;
        else
            return h(a)
    }
    function b(a) {
        if (a === void 0)
            return;
        else
            return h(a)
    }
    function c(a) {
        if (a === null)
            return;
        else
            return h(a)
    }
    function i(a) {
        if (a !== null && a[0] === g) {
            var b = a[1];
            if (b === 0)
                return;
            else
                return [g, b - 1 | 0]
        } else
            return a
    }
    function d(a) {
        if (a === void 0)
            return;
        else
            return i(a)
    }
    function e(a) {
        if (a === void 0)
            return;
        else
            return i(a)[1]
    }
    f.nullable_to_opt = a;
    f.undefined_to_opt = b;
    f.null_to_opt = c;
    f.valFromOption = i;
    f.some = h;
    f.option_get = d;
    f.option_get_unwrap = e
}
), null);
__d("bs_curry", ["bs_caml_array"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c) {
        while (!0) {
            var d = c
              , e = a
              , f = e.length;
            f = f === 0 ? 1 : f;
            var h = d.length;
            h = f - h | 0;
            if (h === 0)
                return e.apply(null, d);
            else if (h < 0) {
                c = b("bs_caml_array").caml_array_sub(d, f, -h | 0);
                a = e.apply(null, b("bs_caml_array").caml_array_sub(d, 0, f));
                continue
            } else
                return function(b, a) {
                    return function(c) {
                        return g(b, a.concat([c]))
                    }
                }(e, d)
        }
    }
    function h(a, b, c) {
        switch (c) {
        case 1:
            return a(b);
        case 2:
            return function(c) {
                return a(b, c)
            }
            ;
        case 3:
            return function(c, d) {
                return a(b, c, d)
            }
            ;
        case 4:
            return function(c, d, e) {
                return a(b, c, d, e)
            }
            ;
        case 5:
            return function(c, d, e, f) {
                return a(b, c, d, e, f)
            }
            ;
        case 6:
            return function(c, d, e, f, g) {
                return a(b, c, d, e, f, g)
            }
            ;
        case 7:
            return function(c, d, e, f, g, h) {
                return a(b, c, d, e, f, g, h)
            }
            ;
        default:
            return g(a, [b])
        }
    }
    function i(a, b) {
        var c = a.length;
        if (c === 1)
            return a(b);
        else
            return h(a, b, c)
    }
    function a(a) {
        var b = a.length;
        if (b === 1)
            return a;
        else
            return function(b) {
                return i(a, b)
            }
    }
    function j(a, b, c, d) {
        switch (d) {
        case 1:
            return g(a(b), [c]);
        case 2:
            return a(b, c);
        case 3:
            return function(d) {
                return a(b, c, d)
            }
            ;
        case 4:
            return function(d, e) {
                return a(b, c, d, e)
            }
            ;
        case 5:
            return function(d, e, f) {
                return a(b, c, d, e, f)
            }
            ;
        case 6:
            return function(d, e, f, g) {
                return a(b, c, d, e, f, g)
            }
            ;
        case 7:
            return function(d, e, f, g, h) {
                return a(b, c, d, e, f, g, h)
            }
            ;
        default:
            return g(a, [b, c])
        }
    }
    function k(a, b, c) {
        var d = a.length;
        if (d === 2)
            return a(b, c);
        else
            return j(a, b, c, d)
    }
    function c(a) {
        var b = a.length;
        if (b === 2)
            return a;
        else
            return function(b, c) {
                return k(a, b, c)
            }
    }
    function l(a, b, c, d, e) {
        switch (e) {
        case 1:
            return g(a(b), [c, d]);
        case 2:
            return g(a(b, c), [d]);
        case 3:
            return a(b, c, d);
        case 4:
            return function(e) {
                return a(b, c, d, e)
            }
            ;
        case 5:
            return function(e, f) {
                return a(b, c, d, e, f)
            }
            ;
        case 6:
            return function(e, f, g) {
                return a(b, c, d, e, f, g)
            }
            ;
        case 7:
            return function(e, f, g, h) {
                return a(b, c, d, e, f, g, h)
            }
            ;
        default:
            return g(a, [b, c, d])
        }
    }
    function m(a, b, c, d) {
        var e = a.length;
        if (e === 3)
            return a(b, c, d);
        else
            return l(a, b, c, d, e)
    }
    function d(a) {
        var b = a.length;
        if (b === 3)
            return a;
        else
            return function(b, c, d) {
                return m(a, b, c, d)
            }
    }
    function n(a, b, c, d, e, f) {
        switch (f) {
        case 1:
            return g(a(b), [c, d, e]);
        case 2:
            return g(a(b, c), [d, e]);
        case 3:
            return g(a(b, c, d), [e]);
        case 4:
            return a(b, c, d, e);
        case 5:
            return function(f) {
                return a(b, c, d, e, f)
            }
            ;
        case 6:
            return function(f, g) {
                return a(b, c, d, e, f, g)
            }
            ;
        case 7:
            return function(f, g, h) {
                return a(b, c, d, e, f, g, h)
            }
            ;
        default:
            return g(a, [b, c, d, e])
        }
    }
    function o(a, b, c, d, e) {
        var f = a.length;
        if (f === 4)
            return a(b, c, d, e);
        else
            return n(a, b, c, d, e, f)
    }
    function e(a) {
        var b = a.length;
        if (b === 4)
            return a;
        else
            return function(b, c, d, e) {
                return o(a, b, c, d, e)
            }
    }
    function p(a, b, c, d, e, f, h) {
        switch (h) {
        case 1:
            return g(a(b), [c, d, e, f]);
        case 2:
            return g(a(b, c), [d, e, f]);
        case 3:
            return g(a(b, c, d), [e, f]);
        case 4:
            return g(a(b, c, d, e), [f]);
        case 5:
            return a(b, c, d, e, f);
        case 6:
            return function(g) {
                return a(b, c, d, e, f, g)
            }
            ;
        case 7:
            return function(g, h) {
                return a(b, c, d, e, f, g, h)
            }
            ;
        default:
            return g(a, [b, c, d, e, f])
        }
    }
    function q(a, b, c, d, e, f) {
        var g = a.length;
        if (g === 5)
            return a(b, c, d, e, f);
        else
            return p(a, b, c, d, e, f, g)
    }
    function r(a) {
        var b = a.length;
        if (b === 5)
            return a;
        else
            return function(b, c, d, e, f) {
                return q(a, b, c, d, e, f)
            }
    }
    function s(a, b, c, d, e, f, h, i) {
        switch (i) {
        case 1:
            return g(a(b), [c, d, e, f, h]);
        case 2:
            return g(a(b, c), [d, e, f, h]);
        case 3:
            return g(a(b, c, d), [e, f, h]);
        case 4:
            return g(a(b, c, d, e), [f, h]);
        case 5:
            return g(a(b, c, d, e, f), [h]);
        case 6:
            return a(b, c, d, e, f, h);
        case 7:
            return function(g) {
                return a(b, c, d, e, f, h, g)
            }
            ;
        default:
            return g(a, [b, c, d, e, f, h])
        }
    }
    function t(a, b, c, d, e, f, g) {
        var h = a.length;
        if (h === 6)
            return a(b, c, d, e, f, g);
        else
            return s(a, b, c, d, e, f, g, h)
    }
    function u(a) {
        var b = a.length;
        if (b === 6)
            return a;
        else
            return function(b, c, d, e, f, g) {
                return t(a, b, c, d, e, f, g)
            }
    }
    function v(a, b, c, d, e, f, h, i, j) {
        switch (j) {
        case 1:
            return g(a(b), [c, d, e, f, h, i]);
        case 2:
            return g(a(b, c), [d, e, f, h, i]);
        case 3:
            return g(a(b, c, d), [e, f, h, i]);
        case 4:
            return g(a(b, c, d, e), [f, h, i]);
        case 5:
            return g(a(b, c, d, e, f), [h, i]);
        case 6:
            return g(a(b, c, d, e, f, h), [i]);
        case 7:
            return a(b, c, d, e, f, h, i);
        default:
            return g(a, [b, c, d, e, f, h, i])
        }
    }
    function w(a, b, c, d, e, f, g, h) {
        var i = a.length;
        if (i === 7)
            return a(b, c, d, e, f, g, h);
        else
            return v(a, b, c, d, e, f, g, h, i)
    }
    function x(a) {
        var b = a.length;
        if (b === 7)
            return a;
        else
            return function(b, c, d, e, f, g, h) {
                return w(a, b, c, d, e, f, g, h)
            }
    }
    function y(a, b, c, d, e, f, h, i, j, k) {
        switch (k) {
        case 1:
            return g(a(b), [c, d, e, f, h, i, j]);
        case 2:
            return g(a(b, c), [d, e, f, h, i, j]);
        case 3:
            return g(a(b, c, d), [e, f, h, i, j]);
        case 4:
            return g(a(b, c, d, e), [f, h, i, j]);
        case 5:
            return g(a(b, c, d, e, f), [h, i, j]);
        case 6:
            return g(a(b, c, d, e, f, h), [i, j]);
        case 7:
            return g(a(b, c, d, e, f, h, i), [j]);
        default:
            return g(a, [b, c, d, e, f, h, i, j])
        }
    }
    function z(a, b, c, d, e, f, g, h, i) {
        var j = a.length;
        if (j === 8)
            return a(b, c, d, e, f, g, h, i);
        else
            return y(a, b, c, d, e, f, g, h, i, j)
    }
    function A(a) {
        var b = a.length;
        if (b === 8)
            return a;
        else
            return function(b, c, d, e, f, g, h, i) {
                return z(a, b, c, d, e, f, g, h, i)
            }
    }
    f.app = g;
    f.curry_1 = h;
    f._1 = i;
    f.__1 = a;
    f.curry_2 = j;
    f._2 = k;
    f.__2 = c;
    f.curry_3 = l;
    f._3 = m;
    f.__3 = d;
    f.curry_4 = n;
    f._4 = o;
    f.__4 = e;
    f.curry_5 = p;
    f._5 = q;
    f.__5 = r;
    f.curry_6 = s;
    f._6 = t;
    f.__6 = u;
    f.curry_7 = v;
    f._7 = w;
    f.__7 = x;
    f.curry_8 = y;
    f._8 = z;
    f.__8 = A
}
), null);
__d("bs_belt_Option", ["bs_curry", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c) {
        if (a !== void 0)
            return c(b("bs_caml_option").valFromOption(a));
        else
            return 0
    }
    function a(a, c) {
        return g(a, b("bs_curry").__1(c))
    }
    function c(a) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a);
        else
            throw new Error("getExn")
    }
    function h(a, c, d) {
        if (a !== void 0)
            return d(b("bs_caml_option").valFromOption(a));
        else
            return c
    }
    function d(a, c, d) {
        return h(a, c, b("bs_curry").__1(d))
    }
    function i(a, c) {
        if (a !== void 0)
            return b("bs_caml_option").some(c(b("bs_caml_option").valFromOption(a)))
    }
    function e(a, c) {
        return i(a, b("bs_curry").__1(c))
    }
    function j(a, c) {
        if (a !== void 0)
            return c(b("bs_caml_option").valFromOption(a))
    }
    function k(a, c) {
        return j(a, b("bs_curry").__1(c))
    }
    function l(a, c) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a);
        else
            return c
    }
    function m(a) {
        return a !== void 0
    }
    function n(a) {
        return a === void 0
    }
    function o(a, c, d) {
        if (a !== void 0)
            if (c !== void 0)
                return d(b("bs_caml_option").valFromOption(a), b("bs_caml_option").valFromOption(c));
            else
                return !1;
        else
            return c === void 0
    }
    function p(a, c, d) {
        return o(a, c, b("bs_curry").__2(d))
    }
    function q(a, c, d) {
        if (a !== void 0)
            if (c !== void 0)
                return d(b("bs_caml_option").valFromOption(a), b("bs_caml_option").valFromOption(c));
            else
                return 1;
        else if (c !== void 0)
            return -1;
        else
            return 0
    }
    function r(a, c, d) {
        return q(a, c, b("bs_curry").__2(d))
    }
    f.forEachU = g;
    f.forEach = a;
    f.getExn = c;
    f.mapWithDefaultU = h;
    f.mapWithDefault = d;
    f.mapU = i;
    f.map = e;
    f.flatMapU = j;
    f.flatMap = k;
    f.getWithDefault = l;
    f.isSome = m;
    f.isNone = n;
    f.eqU = o;
    f.eq = p;
    f.cmpU = q;
    f.cmp = r
}
), null);
