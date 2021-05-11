__d("CometRelativeTimestamp.react", ["fbt", "React", "useServerTime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    c = b("React");
    function h(a, b) {
        if (b === "minimized")
            return g._("1 ph\u00fat");
        else if (b === "shortened")
            return g._("V\u1eeba xong");
        return g._("v\u00e0i gi\u00e2y tr\u01b0\u1edbc")
    }
    function i(a, b) {
        if (b === "minimized")
            return g._({
                "*": "{minutes} ph\u00fat"
            }, [g._param("minutes", a, [0])]);
        else if (b === "shortened")
            return g._({
                "*": "{number} ph\u00fat",
                "_1": "1 ph\u00fat"
            }, [g._plural(a, "number")]);
        return g._({
            "*": "{number} ph\u00fat tr\u01b0\u1edbc",
            "_1": "kho\u1ea3ng 1 ph\u00fat tr\u01b0\u1edbc"
        }, [g._plural(a, "number")])
    }
    function j(a, b) {
        if (b === "minimized")
            return g._("{hours} gi\u1edd", [g._param("hours", a)]);
        else if (b === "shortened")
            return g._({
                "*": "{number} gi\u1edd",
                "_1": "1 gi\u1edd"
            }, [g._plural(a, "number")]);
        return g._({
            "*": "{number} gi\u1edd tr\u01b0\u1edbc",
            "_1": "kho\u1ea3ng 1 gi\u1edd tr\u01b0\u1edbc"
        }, [g._plural(a, "number")])
    }
    function k(a, b) {
        if (b === "minimized")
            return g._("{days} ng\u00e0y", [g._param("days", a)]);
        else if (b === "shortened")
            return g._({
                "*": "{number} ng\u00e0y",
                "_1": "1 ng\u00e0y"
            }, [g._plural(a, "number")]);
        return g._({
            "*": "{number} ng\u00e0y tr\u01b0\u1edbc",
            "_1": "1 ng\u00e0y tr\u01b0\u1edbc"
        }, [g._plural(a, "number")])
    }
    function l(a, b) {
        if (b === "minimized")
            return g._("{weeks} tu\u1ea7n", [g._param("weeks", a)]);
        else if (b === "shortened")
            return g._({
                "*": "{number} tu\u1ea7n",
                "_1": "1 tu\u1ea7n"
            }, [g._plural(a, "number")]);
        return g._({
            "*": "{number} tu\u1ea7n tr\u01b0\u1edbc",
            "_1": "1 tu\u1ea7n tr\u01b0\u1edbc"
        }, [g._plural(a, "number")])
    }
    function m(a, b) {
        if (b === "minimized")
            return g._("{years} n\u0103m", [g._param("years", a)]);
        else if (b === "shortened")
            return g._({
                "*": "{number} n\u0103m",
                "_1": "1 n\u0103m"
            }, [g._plural(a, "number")]);
        return g._({
            "*": "{number} n\u0103m tr\u01b0\u1edbc",
            "_1": "1 n\u0103m tr\u01b0\u1edbc"
        }, [g._plural(a, "number")])
    }
    var n = 60
      , o = 60
      , p = 24
      , q = 7
      , r = 365;
    function s(a, b, c) {
        c === void 0 && (c = "normal");
        a = (a.valueOf() - b.valueOf()) / 1e3;
        if (a < n)
            return h(a, c);
        b = Math.floor(a / n);
        if (b < o)
            return i(b, c);
        a = Math.floor(b / o);
        if (a < p)
            return j(a, c);
        b = Math.floor(a / p);
        if (b < q)
            return k(b, c);
        else if (b < r) {
            a = Math.floor(b / q);
            return l(a, c)
        }
        a = Math.floor(b / r);
        return m(a, c)
    }
    function a(a) {
        var c = a.date;
        a = a.format;
        var d = b("useServerTime")();
        d = s(d, c, a);
        return d
    }
    a.getRelativeTimestamp = s
}

__d("useServerTime", ["JSScheduler", "React", "ServerTime"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = 6e4
      , i = new Set()
      , j = null
      , k = !1;
    function l() {
        i.forEach(function(a) {
            return a()
        }),
        k = !1
    }
    function m(a) {
        i.add(a);
        j == null && (j = window.setInterval(function() {
            k || (k = !0,
            b("JSScheduler").scheduleSpeculativeCallback(l))
        }, h));
        return function() {
            i["delete"](a),
            i.size === 0 && (window.clearInterval(j),
            j = null)
        }
    }
    function n() {
        return new Date(b("ServerTime").getMillis())
    }
    function a() {
        var a = g.useState(function() {
            return n()
        })
          , b = a[0]
          , c = a[1]
          , d = function() {
            return c(n())
        };
        g.useEffect(function() {
            return m(d)
        }, []);
        return b
    }
}
), null);