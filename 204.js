if (self.CavalryLogger) {
    CavalryLogger.start_js(["L1Ggk"]);
}

__d("leaflet", [], (function(a, b, c, d, e, f) {
    (function(a, b, c) {
        var d = a.L
          , f = {};
        f.version = "0.7.2";
        typeof e === "object" && typeof e.exports === "object" ? e.exports = f : typeof define === "function" && define.amd && define(f);
        f.noConflict = function() {
            a.L = d;
            return this
        }
        ;
        a.L = f;
        f.Util = {
            extend: function(a) {
                var b = Array.prototype.slice.call(arguments, 1), c, d, e, f;
                for (d = 0,
                e = b.length; d < e; d++) {
                    f = b[d] || {};
                    for (c in f)
                        f.hasOwnProperty(c) && (a[c] = f[c])
                }
                return a
            },
            bind: function(a, b) {
                var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                return function() {
                    return a.apply(b, c || arguments)
                }
            },
            stamp: function() {
                var a = 0
                  , b = "_leaflet_id";
                return function(c) {
                    c[b] = c[b] || ++a;
                    return c[b]
                }
            }(),
            invokeEach: function(a, b, c) {
                var d, e;
                if (typeof a === "object") {
                    e = Array.prototype.slice.call(arguments, 3);
                    for (d in a)
                        b.apply(c, [d, a[d]].concat(e));
                    return !0
                }
                return !1
            },
            limitExecByInterval: function(a, b, c) {
                var d, e;
                return function f() {
                    var g = arguments;
                    if (d) {
                        e = !0;
                        return
                    }
                    d = !0;
                    setTimeout(function() {
                        d = !1,
                        e && (f.apply(c, g),
                        e = !1)
                    }, b);
                    a.apply(c, g)
                }
            },
            falseFn: function() {
                return !1
            },
            formatNum: function(a, b) {
                b = Math.pow(10, b || 5);
                return Math.round(a * b) / b
            },
            trim: function(a) {
                return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
            },
            splitWords: function(a) {
                return f.Util.trim(a).split(/\s+/)
            },
            setOptions: function(a, b) {
                a.options = f.extend({}, a.options, b);
                return a.options
            },
            getParamString: function(a, b, c) {
                var d = [];
                for (var e in a)
                    d.push(encodeURIComponent(c ? e.toUpperCase() : e) + "=" + encodeURIComponent(a[e]));
                return (!b || b.indexOf("?") === -1 ? "?" : "&") + d.join("&")
            },
            template: function(a, b) {
                return a.replace(/\{ *([\w_]+) *\}/g, function(a, c) {
                    c = b[c];
                    if (c === void 0)
                        throw new Error("No value provided for variable " + a);
                    else
                        typeof c === "function" && (c = c(b));
                    return c
                })
            },
            isArray: Array.isArray || function(a) {
                return Object.prototype.toString.call(a) === "[object Array]"
            }
            ,
            emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        };
        (function() {
            function b(b) {
                var c, d, e = ["webkit", "moz", "o", "ms"];
                for (c = 0; c < e.length && !d; c++)
                    d = a[e[c] + b];
                return d
            }
            var c = 0;
            function d(b) {
                var d = +new Date()
                  , e = Math.max(0, 16 - (d - c));
                c = d + e;
                return a.setTimeout(b, e)
            }
            var e = a.requestAnimationFrame || b("RequestAnimationFrame") || d
              , g = a.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function(b) {
                a.clearTimeout(b)
            }
            ;
            f.Util.requestAnimFrame = function(b, c, g, h) {
                b = f.bind(b, c);
                if (g && e === d)
                    b();
                else
                    return e.call(a, b)
            }
            ;
            f.Util.cancelAnimFrame = function(b) {
                b && g.call(a, b)
            }
        }
        )();
        f.extend = f.Util.extend;
        f.bind = f.Util.bind;
        f.stamp = f.Util.stamp;
        f.setOptions = f.Util.setOptions;
        f.Class = function() {}
        ;
        f.Class.extend = function(a) {
            var b = function() {
                this.initialize && this.initialize.apply(this, arguments),
                this._initHooks && this.callInitHooks()
            }
              , c = function() {};
            c.prototype = this.prototype;
            var d = new c();
            d.constructor = b;
            b.prototype = d;
            for (var e in this)
                this.hasOwnProperty(e) && e !== "prototype" && (b[e] = this[e]);
            a.statics && (f.extend(b, a.statics),
            delete a.statics);
            a.includes && (f.Util.extend.apply(null, [d].concat(a.includes)),
            delete a.includes);
            a.options && d.options && (a.options = f.extend({}, d.options, a.options));
            f.extend(d, a);
            d._initHooks = [];
            var g = this;
            b.__super__ = g.prototype;
            d.callInitHooks = function() {
                if (this._initHooksCalled)
                    return;
                g.prototype.callInitHooks && g.prototype.callInitHooks.call(this);
                this._initHooksCalled = !0;
                for (var a = 0, b = d._initHooks.length; a < b; a++)
                    d._initHooks[a].call(this)
            }
            ;
            return b
        }
        ;
        f.Class.include = function(a) {
            f.extend(this.prototype, a)
        }
        ;
        f.Class.mergeOptions = function(a) {
            f.extend(this.prototype.options, a)
        }
        ;
        f.Class.addInitHook = function(a) {
            var b = Array.prototype.slice.call(arguments, 1)
              , c = typeof a === "function" ? a : function() {
                this[a].apply(this, b)
            }
            ;
            this.prototype._initHooks = this.prototype._initHooks || [];
            this.prototype._initHooks.push(c)
        }
        ;
        var g = "_leaflet_events";
        f.Mixin = {};
        f.Mixin.Events = {
            addEventListener: function(a, b, c) {
                if (f.Util.invokeEach(a, this.addEventListener, this, b, c))
                    return this;
                var d = this[g] = this[g] || {}, e = c && c !== this && f.stamp(c), h, i, j, k, l, m;
                a = f.Util.splitWords(a);
                for (h = 0,
                i = a.length; h < i; h++)
                    j = {
                        action: b,
                        context: c || this
                    },
                    k = a[h],
                    e ? (l = k + "_idx",
                    m = l + "_len",
                    l = d[l] = d[l] || {},
                    l[e] || (l[e] = [],
                    d[m] = (d[m] || 0) + 1),
                    l[e].push(j)) : (d[k] = d[k] || [],
                    d[k].push(j));
                return this
            },
            hasEventListeners: function(a) {
                var b = this[g];
                return !!b && (a in b && b[a].length > 0 || a + "_idx"in b && b[a + "_idx_len"] > 0)
            },
            removeEventListener: function(a, b, c) {
                if (!this[g])
                    return this;
                if (!a)
                    return this.clearAllEventListeners();
                if (f.Util.invokeEach(a, this.removeEventListener, this, b, c))
                    return this;
                var d = this[g], e = c && c !== this && f.stamp(c), h, i, j, k, l, m, n;
                a = f.Util.splitWords(a);
                for (h = 0,
                i = a.length; h < i; h++) {
                    j = a[h];
                    k = j + "_idx";
                    l = k + "_len";
                    m = d[k];
                    if (!b)
                        delete d[j],
                        delete d[k],
                        delete d[l];
                    else {
                        k = e && m ? m[e] : d[j];
                        if (k) {
                            for (j = k.length - 1; j >= 0; j--)
                                k[j].action === b && (!c || k[j].context === c) && (n = k.splice(j, 1),
                                n[0].action = f.Util.falseFn);
                            c && m && k.length === 0 && (delete m[e],
                            d[l]--)
                        }
                    }
                }
                return this
            },
            clearAllEventListeners: function() {
                delete this[g];
                return this
            },
            fireEvent: function(a, b) {
                if (!this.hasEventListeners(a))
                    return this;
                b = f.Util.extend({}, b, {
                    type: a,
                    target: this
                });
                var c = this[g], d, e, h;
                if (c[a]) {
                    d = c[a].slice();
                    for (e = 0,
                    h = d.length; e < h; e++)
                        d[e].action.call(d[e].context, b)
                }
                c = c[a + "_idx"];
                for (a in c) {
                    d = c[a].slice();
                    if (d)
                        for (e = 0,
                        h = d.length; e < h; e++)
                            d[e].action.call(d[e].context, b)
                }
                return this
            },
            addOneTimeEventListener: function(a, b, c) {
                if (f.Util.invokeEach(a, this.addOneTimeEventListener, this, b, c))
                    return this;
                var d = f.bind(function() {
                    this.removeEventListener(a, b, c).removeEventListener(a, d, c)
                }, this);
                return this.addEventListener(a, b, c).addEventListener(a, d, c)
            }
        };
        f.Mixin.Events.on = f.Mixin.Events.addEventListener;
        f.Mixin.Events.off = f.Mixin.Events.removeEventListener;
        f.Mixin.Events.once = f.Mixin.Events.addOneTimeEventListener;
        f.Mixin.Events.fire = f.Mixin.Events.fireEvent;
        (function() {
            var c = "ActiveXObject"in a
              , d = c && !b.addEventListener
              , e = navigator.userAgent.toLowerCase()
              , g = e.indexOf("webkit") !== -1
              , h = e.indexOf("chrome") !== -1
              , i = e.indexOf("phantom") !== -1
              , j = e.indexOf("android") !== -1
              , k = e.search("android [23]") !== -1;
            e = e.indexOf("gecko") !== -1;
            var l = typeof orientation !== void 0 + ""
              , m = a.navigator && a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints && !a.PointerEvent
              , n = a.PointerEvent && a.navigator.pointerEnabled && a.navigator.maxTouchPoints || m
              , o = "devicePixelRatio"in a && a.devicePixelRatio > 1 || "matchMedia"in a && a.matchMedia("(min-resolution:144dpi)") && a.matchMedia("(min-resolution:144dpi)").matches
              , p = b.documentElement
              , q = p && c && "transition"in p.style
              , r = p && "WebKitCSSMatrix"in a && "m11"in new a.WebKitCSSMatrix() && !k
              , s = p && "MozPerspective"in p.style
              , t = p && "OTransition"in p.style
              , u = !a.L_DISABLE_3D && (q || r || s || t) && !i;
            i = !a.L_NO_TOUCH && !i && p && function() {
                var a = "ontouchstart";
                if (n || a in p)
                    return !0;
                var c = b.createElement("div")
                  , d = !1;
                if (!c.setAttribute)
                    return !1;
                c.setAttribute(a, "return;");
                typeof c[a] === "function" && (d = !0);
                c.removeAttribute(a);
                c = null;
                return d
            }();
            f.Browser = {
                ie: c,
                ielt9: d,
                webkit: g,
                gecko: e && !g && !a.opera && !c,
                android: j,
                android23: k,
                chrome: h,
                ie3d: q,
                webkit3d: r,
                gecko3d: s,
                opera3d: t,
                any3d: u,
                mobile: l,
                mobileWebkit: l && g,
                mobileWebkit3d: l && r,
                mobileOpera: l && a.opera,
                touch: i,
                msPointer: m,
                pointer: n,
                retina: o
            }
        }
        )();
        f.Point = function(a, b, c) {
            this.x = c ? Math.round(a) : a,
            this.y = c ? Math.round(b) : b
        }
        ;
        f.Point.prototype = {
            clone: function() {
                return new f.Point(this.x,this.y)
            },
            add: function(a) {
                return this.clone()._add(f.point(a))
            },
            _add: function(a) {
                this.x += a.x;
                this.y += a.y;
                return this
            },
            subtract: function(a) {
                return this.clone()._subtract(f.point(a))
            },
            _subtract: function(a) {
                this.x -= a.x;
                this.y -= a.y;
                return this
            },
            divideBy: function(a) {
                return this.clone()._divideBy(a)
            },
            _divideBy: function(a) {
                this.x /= a;
                this.y /= a;
                return this
            },
            multiplyBy: function(a) {
                return this.clone()._multiplyBy(a)
            },
            _multiplyBy: function(a) {
                this.x *= a;
                this.y *= a;
                return this
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this
            },
            distanceTo: function(a) {
                a = f.point(a);
                var b = a.x - this.x;
                a = a.y - this.y;
                return Math.sqrt(b * b + a * a)
            },
            equals: function(a) {
                a = f.point(a);
                return a.x === this.x && a.y === this.y
            },
            contains: function(a) {
                a = f.point(a);
                return Math.abs(a.x) <= Math.abs(this.x) && Math.abs(a.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + f.Util.formatNum(this.x) + ", " + f.Util.formatNum(this.y) + ")"
            }
        };
        f.point = function(a, b, c) {
            if (a instanceof f.Point)
                return a;
            if (f.Util.isArray(a))
                return new f.Point(a[0],a[1]);
            return a === void 0 || a === null ? a : new f.Point(a,b,c)
        }
        ;
        f.Bounds = function(a, b) {
            if (!a)
                return;
            b = b ? [a, b] : a;
            for (var a = 0, c = b.length; a < c; a++)
                this.extend(b[a])
        }
        ;
        f.Bounds.prototype = {
            extend: function(a) {
                a = f.point(a);
                !this.min && !this.max ? (this.min = a.clone(),
                this.max = a.clone()) : (this.min.x = Math.min(a.x, this.min.x),
                this.max.x = Math.max(a.x, this.max.x),
                this.min.y = Math.min(a.y, this.min.y),
                this.max.y = Math.max(a.y, this.max.y));
                return this
            },
            getCenter: function(a) {
                return new f.Point((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,a)
            },
            getBottomLeft: function() {
                return new f.Point(this.min.x,this.max.y)
            },
            getTopRight: function() {
                return new f.Point(this.max.x,this.min.y)
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(a) {
                var b, c;
                typeof a[0] === "number" || a instanceof f.Point ? a = f.point(a) : a = f.bounds(a);
                a instanceof f.Bounds ? (b = a.min,
                c = a.max) : b = c = a;
                return b.x >= this.min.x && c.x <= this.max.x && b.y >= this.min.y && c.y <= this.max.y
            },
            intersects: function(a) {
                a = f.bounds(a);
                var b = this.min
                  , c = this.max
                  , d = a.min;
                a = a.max;
                var e = a.x >= b.x && d.x <= c.x;
                a = a.y >= b.y && d.y <= c.y;
                return e && a
            },
            isValid: function() {
                return !!(this.min && this.max)
            }
        };
        f.bounds = function(a, b) {
            return !a || a instanceof f.Bounds ? a : new f.Bounds(a,b)
        }
        ;
        f.Transformation = function(a, b, c, d) {
            this._a = a,
            this._b = b,
            this._c = c,
            this._d = d
        }
        ;
        f.Transformation.prototype = {
            transform: function(a, b) {
                return this._transform(a.clone(), b)
            },
            _transform: function(a, b) {
                b = b || 1;
                a.x = b * (this._a * a.x + this._b);
                a.y = b * (this._c * a.y + this._d);
                return a
            },
            untransform: function(a, b) {
                b = b || 1;
                return new f.Point((a.x / b - this._b) / this._a,(a.y / b - this._d) / this._c)
            }
        };
        f.DomUtil = {
            get: function(a) {
                return typeof a === "string" ? b.getElementById(a) : a
            },
            getStyle: function(a, c) {
                var d = a.style[c];
                !d && a.currentStyle && (d = a.currentStyle[c]);
                if ((!d || d === "auto") && b.defaultView) {
                    a = b.defaultView.getComputedStyle(a, null);
                    d = a ? a[c] : null
                }
                return d === "auto" ? null : d
            },
            getViewportOffset: function(a) {
                var c = 0, d = 0, e = a, g = b.body, h = b.documentElement, i;
                do {
                    c += e.offsetTop || 0;
                    d += e.offsetLeft || 0;
                    c += parseInt(f.DomUtil.getStyle(e, "borderTopWidth"), 10) || 0;
                    d += parseInt(f.DomUtil.getStyle(e, "borderLeftWidth"), 10) || 0;
                    i = f.DomUtil.getStyle(e, "position");
                    if (e.offsetParent === g && i === "absolute")
                        break;
                    if (i === "fixed") {
                        c += g.scrollTop || h.scrollTop || 0;
                        d += g.scrollLeft || h.scrollLeft || 0;
                        break
                    }
                    if (i === "relative" && !e.offsetLeft) {
                        i = f.DomUtil.getStyle(e, "width");
                        var j = f.DomUtil.getStyle(e, "max-width")
                          , k = e.getBoundingClientRect();
                        (i !== "none" || j !== "none") && (d += k.left + e.clientLeft);
                        c += k.top + (g.scrollTop || h.scrollTop || 0);
                        break
                    }
                    e = e.offsetParent
                } while (e);e = a;
                do {
                    if (e === g)
                        break;
                    c -= e.scrollTop || 0;
                    d -= e.scrollLeft || 0;
                    e = e.parentNode
                } while (e);return new f.Point(d,c)
            },
            documentIsLtr: function() {
                f.DomUtil._docIsLtrCached || (f.DomUtil._docIsLtrCached = !0,
                f.DomUtil._docIsLtr = f.DomUtil.getStyle(b.body, "direction") === "ltr");
                return f.DomUtil._docIsLtr
            },
            create: function(a, c, d) {
                a = b.createElement(a);
                a.className = c;
                d && d.appendChild(a);
                return a
            },
            hasClass: function(a, b) {
                if (a.classList !== void 0)
                    return a.classList.contains(b);
                a = f.DomUtil._getClass(a);
                return a.length > 0 && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a)
            },
            addClass: function(a, b) {
                if (a.classList !== void 0) {
                    var c = f.Util.splitWords(b);
                    for (var d = 0, e = c.length; d < e; d++)
                        a.classList.add(c[d])
                } else if (!f.DomUtil.hasClass(a, b)) {
                    c = f.DomUtil._getClass(a);
                    f.DomUtil._setClass(a, (c ? c + " " : "") + b)
                }
            },
            removeClass: function(a, b) {
                a.classList !== void 0 ? a.classList.remove(b) : f.DomUtil._setClass(a, f.Util.trim((" " + f.DomUtil._getClass(a) + " ").replace(" " + b + " ", " ")))
            },
            _setClass: function(a, b) {
                a.className.baseVal === void 0 ? a.className = b : a.className.baseVal = b
            },
            _getClass: function(a) {
                return a.className.baseVal === void 0 ? a.className : a.className.baseVal
            },
            setOpacity: function(a, b) {
                if ("opacity"in a.style)
                    a.style.opacity = b;
                else if ("filter"in a.style) {
                    var c = !1
                      , d = "DXImageTransform.Microsoft.Alpha";
                    try {
                        c = a.filters.item(d)
                    } catch (a) {
                        if (b === 1)
                            return
                    }
                    b = Math.round(b * 100);
                    c ? (c.Enabled = b !== 100,
                    c.Opacity = b) : a.style.filter += " progid:" + d + "(opacity=" + b + ")"
                }
            },
            testProp: function(a) {
                if (!b.documentElement)
                    return !1;
                var c = b.documentElement.style;
                for (var d = 0; d < a.length; d++)
                    if (a[d]in c)
                        return a[d];
                return !1
            },
            getTranslateString: function(a) {
                var b = f.Browser.webkit3d
                  , c = "translate" + (b ? "3d" : "") + "(";
                b = (b ? ",0" : "") + ")";
                return c + a.x + "px," + a.y + "px" + b
            },
            getScaleString: function(a, b) {
                b = f.DomUtil.getTranslateString(b.add(b.multiplyBy(-1 * a)));
                a = " scale(" + a + ") ";
                return b + a
            },
            setPosition: function(a, b, c) {
                a._leaflet_pos = b,
                !c && f.Browser.any3d ? a.style[f.DomUtil.TRANSFORM] = f.DomUtil.getTranslateString(b) : (a.style.left = b.x + "px",
                a.style.top = b.y + "px")
            },
            getPosition: function(a) {
                return a._leaflet_pos
            }
        };
        f.DomUtil.TRANSFORM = f.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
        f.DomUtil.TRANSITION = f.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
        f.DomUtil.TRANSITION_END = f.DomUtil.TRANSITION === "webkitTransition" || f.DomUtil.TRANSITION === "OTransition" ? f.DomUtil.TRANSITION + "End" : "transitionend";
        (function() {
            if ("onselectstart"in b)
                f.extend(f.DomUtil, {
                    disableTextSelection: function() {
                        f.DomEvent.on(a, "selectstart", f.DomEvent.preventDefault)
                    },
                    enableTextSelection: function() {
                        f.DomEvent.off(a, "selectstart", f.DomEvent.preventDefault)
                    }
                });
            else {
                var c = f.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                f.extend(f.DomUtil, {
                    disableTextSelection: function() {
                        if (c) {
                            var a = b.documentElement.style;
                            this._userSelect = a[c];
                            a[c] = "none"
                        }
                    },
                    enableTextSelection: function() {
                        c && (b.documentElement.style[c] = this._userSelect,
                        delete this._userSelect)
                    }
                })
            }
            f.extend(f.DomUtil, {
                disableImageDrag: function() {
                    f.DomEvent.on(a, "dragstart", f.DomEvent.preventDefault)
                },
                enableImageDrag: function() {
                    f.DomEvent.off(a, "dragstart", f.DomEvent.preventDefault)
                }
            })
        }
        )();
        f.LatLng = function(a, b, c) {
            a = parseFloat(a);
            b = parseFloat(b);
            if (isNaN(a) || isNaN(b))
                throw new Error("Invalid LatLng object: (" + a + ", " + b + ")");
            this.lat = a;
            this.lng = b;
            c !== void 0 && (this.alt = parseFloat(c))
        }
        ;
        f.extend(f.LatLng, {
            DEG_TO_RAD: Math.PI / 180,
            RAD_TO_DEG: 180 / Math.PI,
            MAX_MARGIN: 1e-9
        });
        f.LatLng.prototype = {
            equals: function(a) {
                if (!a)
                    return !1;
                a = f.latLng(a);
                a = Math.max(Math.abs(this.lat - a.lat), Math.abs(this.lng - a.lng));
                return a <= f.LatLng.MAX_MARGIN
            },
            toString: function(a) {
                return "LatLng(" + f.Util.formatNum(this.lat, a) + ", " + f.Util.formatNum(this.lng, a) + ")"
            },
            distanceTo: function(a) {
                a = f.latLng(a);
                var b = 6378137
                  , c = f.LatLng.DEG_TO_RAD
                  , d = (a.lat - this.lat) * c
                  , e = (a.lng - this.lng) * c
                  , g = this.lat * c;
                a = a.lat * c;
                c = Math.sin(d / 2);
                d = Math.sin(e / 2);
                e = c * c + d * d * Math.cos(g) * Math.cos(a);
                return b * 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1 - e))
            },
            wrap: function(a, b) {
                var c = this.lng;
                a = a || -180;
                b = b || 180;
                c = (c + b) % (b - a) + (c < a || c === b ? b : a);
                return new f.LatLng(this.lat,c)
            }
        };
        f.latLng = function(a, b) {
            if (a instanceof f.LatLng)
                return a;
            if (f.Util.isArray(a))
                if (typeof a[0] === "number" || typeof a[0] === "string")
                    return new f.LatLng(a[0],a[1],a[2]);
                else
                    return null;
            if (a === void 0 || a === null)
                return a;
            if (typeof a === "object" && "lat"in a)
                return new f.LatLng(a.lat,"lng"in a ? a.lng : a.lon);
            return b === void 0 ? null : new f.LatLng(a,b)
        }
        ;
        f.LatLngBounds = function(a, b) {
            if (!a)
                return;
            b = b ? [a, b] : a;
            for (var a = 0, c = b.length; a < c; a++)
                this.extend(b[a])
        }
        ;
        f.LatLngBounds.prototype = {
            extend: function(a) {
                if (!a)
                    return this;
                var b = f.latLng(a);
                b !== null ? a = b : a = f.latLngBounds(a);
                a instanceof f.LatLng ? !this._southWest && !this._northEast ? (this._southWest = new f.LatLng(a.lat,a.lng),
                this._northEast = new f.LatLng(a.lat,a.lng)) : (this._southWest.lat = Math.min(a.lat, this._southWest.lat),
                this._southWest.lng = Math.min(a.lng, this._southWest.lng),
                this._northEast.lat = Math.max(a.lat, this._northEast.lat),
                this._northEast.lng = Math.max(a.lng, this._northEast.lng)) : a instanceof f.LatLngBounds && (this.extend(a._southWest),
                this.extend(a._northEast));
                return this
            },
            pad: function(a) {
                var b = this._southWest
                  , c = this._northEast
                  , d = Math.abs(b.lat - c.lat) * a;
                a = Math.abs(b.lng - c.lng) * a;
                return new f.LatLngBounds(new f.LatLng(b.lat - d,b.lng - a),new f.LatLng(c.lat + d,c.lng + a))
            },
            getCenter: function() {
                return new f.LatLng((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new f.LatLng(this.getNorth(),this.getWest())
            },
            getSouthEast: function() {
                return new f.LatLng(this.getSouth(),this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(a) {
                typeof a[0] === "number" || a instanceof f.LatLng ? a = f.latLng(a) : a = f.latLngBounds(a);
                var b = this._southWest, c = this._northEast, d, e;
                a instanceof f.LatLngBounds ? (d = a.getSouthWest(),
                e = a.getNorthEast()) : d = e = a;
                return d.lat >= b.lat && e.lat <= c.lat && d.lng >= b.lng && e.lng <= c.lng
            },
            intersects: function(a) {
                a = f.latLngBounds(a);
                var b = this._southWest
                  , c = this._northEast
                  , d = a.getSouthWest();
                a = a.getNorthEast();
                var e = a.lat >= b.lat && d.lat <= c.lat;
                a = a.lng >= b.lng && d.lng <= c.lng;
                return e && a
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(a) {
                if (!a)
                    return !1;
                a = f.latLngBounds(a);
                return this._southWest.equals(a.getSouthWest()) && this._northEast.equals(a.getNorthEast())
            },
            isValid: function() {
                return !!(this._southWest && this._northEast)
            }
        };
        f.latLngBounds = function(a, b) {
            return !a || a instanceof f.LatLngBounds ? a : new f.LatLngBounds(a,b)
        }
        ;
        f.Projection = {};
        f.Projection.SphericalMercator = {
            MAX_LATITUDE: 85.0511287798,
            project: function(a) {
                var b = f.LatLng.DEG_TO_RAD
                  , c = this.MAX_LATITUDE;
                c = Math.max(Math.min(c, a.lat), -c);
                a = a.lng * b;
                c = c * b;
                c = Math.log(Math.tan(Math.PI / 4 + c / 2));
                return new f.Point(a,c)
            },
            unproject: function(a) {
                var b = f.LatLng.RAD_TO_DEG
                  , c = a.x * b;
                a = (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * b;
                return new f.LatLng(a,c)
            }
        };
        f.Projection.LonLat = {
            project: function(a) {
                return new f.Point(a.lng,a.lat)
            },
            unproject: function(a) {
                return new f.LatLng(a.y,a.x)
            }
        };
        f.CRS = {
            latLngToPoint: function(a, b) {
                a = this.projection.project(a);
                b = this.scale(b);
                return this.transformation._transform(a, b)
            },
            pointToLatLng: function(a, b) {
                b = this.scale(b);
                a = this.transformation.untransform(a, b);
                return this.projection.unproject(a)
            },
            project: function(a) {
                return this.projection.project(a)
            },
            scale: function(a) {
                return 256 * Math.pow(2, a)
            },
            getSize: function(a) {
                a = this.scale(a);
                return f.point(a, a)
            }
        };
        f.CRS.Simple = f.extend({}, f.CRS, {
            projection: f.Projection.LonLat,
            transformation: new f.Transformation(1,0,-1,0),
            scale: function(a) {
                return Math.pow(2, a)
            }
        });
        f.CRS.EPSG3857 = f.extend({}, f.CRS, {
            code: "EPSG:3857",
            projection: f.Projection.SphericalMercator,
            transformation: new f.Transformation(.5 / Math.PI,.5,-.5 / Math.PI,.5),
            project: function(a) {
                a = this.projection.project(a);
                var b = 6378137;
                return a.multiplyBy(b)
            }
        });
        f.CRS.EPSG900913 = f.extend({}, f.CRS.EPSG3857, {
            code: "EPSG:900913"
        });
        f.CRS.EPSG4326 = f.extend({}, f.CRS, {
            code: "EPSG:4326",
            projection: f.Projection.LonLat,
            transformation: new f.Transformation(1 / 360,.5,-1 / 360,.5)
        });
        f.Map = f.Class.extend({
            includes: f.Mixin.Events,
            options: {
                crs: f.CRS.EPSG3857,
                fadeAnimation: f.DomUtil.TRANSITION && !f.Browser.android23,
                trackResize: !0,
                markerZoomAnimation: f.DomUtil.TRANSITION && f.Browser.any3d
            },
            initialize: function(a, b) {
                b = f.setOptions(this, b),
                this._initContainer(a),
                this._initLayout(),
                this._onResize = f.bind(this._onResize, this),
                this._initEvents(),
                b.maxBounds && this.setMaxBounds(b.maxBounds),
                b.center && b.zoom !== void 0 && this.setView(f.latLng(b.center), b.zoom, {
                    reset: !0
                }),
                this._handlers = [],
                this._layers = {},
                this._zoomBoundLayers = {},
                this._tileLayersNum = 0,
                this.callInitHooks(),
                this._addLayers(b.layers)
            },
            setView: function(a, b) {
                b = b === void 0 ? this.getZoom() : b;
                this._resetView(f.latLng(a), this._limitZoom(b));
                return this
            },
            setZoom: function(a, b) {
                if (!this._loaded) {
                    this._zoom = this._limitZoom(a);
                    return this
                }
                return this.setView(this.getCenter(), a, {
                    zoom: b
                })
            },
            zoomIn: function(a, b) {
                return this.setZoom(this._zoom + (a || 1), b)
            },
            zoomOut: function(a, b) {
                return this.setZoom(this._zoom - (a || 1), b)
            },
            setZoomAround: function(a, b, c) {
                var d = this.getZoomScale(b)
                  , e = this.getSize().divideBy(2);
                a = a instanceof f.Point ? a : this.latLngToContainerPoint(a);
                a = a.subtract(e).multiplyBy(1 - 1 / d);
                d = this.containerPointToLatLng(e.add(a));
                return this.setView(d, b, {
                    zoom: c
                })
            },
            fitBounds: function(a, b) {
                b = b || {};
                a = a.getBounds ? a.getBounds() : f.latLngBounds(a);
                var c = f.point(b.paddingTopLeft || b.padding || [0, 0])
                  , d = f.point(b.paddingBottomRight || b.padding || [0, 0])
                  , e = this.getBoundsZoom(a, !1, c.add(d));
                d = d.subtract(c).divideBy(2);
                c = this.project(a.getSouthWest(), e);
                a = this.project(a.getNorthEast(), e);
                c = this.unproject(c.add(a).divideBy(2).add(d), e);
                e = b && b.maxZoom ? Math.min(b.maxZoom, e) : e;
                return this.setView(c, e, b)
            },
            fitWorld: function(a) {
                return this.fitBounds([[-90, -180], [90, 180]], a)
            },
            panTo: function(a, b) {
                return this.setView(a, this._zoom, {
                    pan: b
                })
            },
            panBy: function(a) {
                this.fire("movestart");
                this._rawPanBy(f.point(a));
                this.fire("move");
                return this.fire("moveend")
            },
            setMaxBounds: function(a) {
                a = f.latLngBounds(a);
                this.options.maxBounds = a;
                if (!a)
                    return this.off("moveend", this._panInsideMaxBounds, this);
                this._loaded && this._panInsideMaxBounds();
                return this.on("moveend", this._panInsideMaxBounds, this)
            },
            panInsideBounds: function(a, b) {
                var c = this.getCenter();
                a = this._limitCenter(c, this._zoom, a);
                return c.equals(a) ? this : this.panTo(a, b)
            },
            addLayer: function(a) {
                var b = f.stamp(a);
                if (this._layers[b])
                    return this;
                this._layers[b] = a;
                a.options && (!isNaN(a.options.maxZoom) || !isNaN(a.options.minZoom)) && (this._zoomBoundLayers[b] = a,
                this._updateZoomLevels());
                this.options.zoomAnimation && f.TileLayer && a instanceof f.TileLayer && (this._tileLayersNum++,
                this._tileLayersToLoad++,
                a.on("load", this._onTileLayerLoad, this));
                this._loaded && this._layerAdd(a);
                return this
            },
            removeLayer: function(a) {
                var b = f.stamp(a);
                if (!this._layers[b])
                    return this;
                this._loaded && a.onRemove(this);
                delete this._layers[b];
                this._loaded && this.fire("layerremove", {
                    layer: a
                });
                this._zoomBoundLayers[b] && (delete this._zoomBoundLayers[b],
                this._updateZoomLevels());
                this.options.zoomAnimation && f.TileLayer && a instanceof f.TileLayer && (this._tileLayersNum--,
                this._tileLayersToLoad--,
                a.off("load", this._onTileLayerLoad, this));
                return this
            },
            hasLayer: function(a) {
                return !a ? !1 : f.stamp(a)in this._layers
            },
            eachLayer: function(a, b) {
                for (var c in this._layers)
                    a.call(b, this._layers[c]);
                return this
            },
            invalidateSize: function(a) {
                if (!this._loaded)
                    return this;
                a = f.extend({
                    animate: !1,
                    pan: !0
                }, a === !0 ? {
                    animate: !0
                } : a);
                var b = this.getSize();
                this._sizeChanged = !0;
                this._initialCenter = null;
                var c = this.getSize()
                  , d = b.divideBy(2).round()
                  , e = c.divideBy(2).round();
                d = d.subtract(e);
                if (!d.x && !d.y)
                    return this;
                a.animate && a.pan ? this.panBy(d) : (a.pan && this._rawPanBy(d),
                this.fire("move"),
                a.debounceMoveend ? (clearTimeout(this._sizeTimer),
                this._sizeTimer = setTimeout(f.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend"));
                return this.fire("resize", {
                    oldSize: b,
                    newSize: c
                })
            },
            addHandler: function(a, b) {
                if (!b)
                    return this;
                b = this[a] = new b(this);
                this._handlers.push(b);
                this.options[a] && b.enable();
                return this
            },
            remove: function() {
                this._loaded && this.fire("unload");
                this._initEvents("off");
                try {
                    delete this._container._leaflet
                } catch (a) {
                    this._container._leaflet = void 0
                }
                this._clearPanes();
                this._clearControlPos && this._clearControlPos();
                this._clearHandlers();
                return this
            },
            getCenter: function() {
                this._checkIfLoaded();
                return this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var a = this.getPixelBounds()
                  , b = this.unproject(a.getBottomLeft());
                a = this.unproject(a.getTopRight());
                return new f.LatLngBounds(b,a)
            },
            getMinZoom: function() {
                return this.options.minZoom === void 0 ? this._layersMinZoom === void 0 ? 0 : this._layersMinZoom : this.options.minZoom
            },
            getMaxZoom: function() {
                return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? Infinity : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(a, b, c) {
                a = f.latLngBounds(a);
                var d = this.getMinZoom() - (b ? 1 : 0)
                  , e = this.getMaxZoom()
                  , g = this.getSize()
                  , h = a.getNorthWest();
                a = a.getSouthEast();
                var i;
                c = f.point(c || [0, 0]);
                do
                    d++,
                    i = this.project(a, d).subtract(this.project(h, d)).add(c),
                    i = b ? i.x < g.x || i.y < g.y : g.contains(i);
                while (i && d <= e);return i && b ? null : b ? d : d - 1
            },
            getSize: function() {
                (!this._size || this._sizeChanged) && (this._size = new f.Point(this._container.clientWidth,this._container.clientHeight),
                this._sizeChanged = !1);
                return this._size.clone()
            },
            getPixelBounds: function() {
                var a = this._getTopLeftPoint();
                return new f.Bounds(a,a.add(this.getSize()))
            },
            getPixelOrigin: function() {
                this._checkIfLoaded();
                return this._initialTopLeftPoint
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(a) {
                var b = this.options.crs;
                return b.scale(a) / b.scale(this._zoom)
            },
            getScaleZoom: function(a) {
                return this._zoom + Math.log(a) / Math.LN2
            },
            project: function(a, b) {
                b = b === void 0 ? this._zoom : b;
                return this.options.crs.latLngToPoint(f.latLng(a), b)
            },
            unproject: function(a, b) {
                b = b === void 0 ? this._zoom : b;
                return this.options.crs.pointToLatLng(f.point(a), b)
            },
            layerPointToLatLng: function(a) {
                a = f.point(a).add(this.getPixelOrigin());
                return this.unproject(a)
            },
            latLngToLayerPoint: function(a) {
                a = this.project(f.latLng(a))._round();
                return a._subtract(this.getPixelOrigin())
            },
            containerPointToLayerPoint: function(a) {
                return f.point(a).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(a) {
                return f.point(a).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(a) {
                a = this.containerPointToLayerPoint(f.point(a));
                return this.layerPointToLatLng(a)
            },
            latLngToContainerPoint: function(a) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(f.latLng(a)))
            },
            mouseEventToContainerPoint: function(a) {
                return f.DomEvent.getMousePosition(a, this._container)
            },
            mouseEventToLayerPoint: function(a) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))
            },
            mouseEventToLatLng: function(a) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))
            },
            _initContainer: function(a) {
                a = this._container = f.DomUtil.get(a);
                if (!a)
                    throw new Error("Map container not found.");
                else if (a._leaflet)
                    throw new Error("Map container is already initialized.");
                a._leaflet = !0
            },
            _initLayout: function() {
                var a = this._container;
                f.DomUtil.addClass(a, "leaflet-container" + (f.Browser.touch ? " leaflet-touch" : "") + (f.Browser.retina ? " leaflet-retina" : "") + (f.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                var b = f.DomUtil.getStyle(a, "position");
                b !== "absolute" && b !== "relative" && b !== "fixed" && (a.style.position = "relative");
                this._initPanes();
                this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var a = this._panes = {};
                this._mapPane = a.mapPane = this._createPane("leaflet-map-pane", this._container);
                this._tilePane = a.tilePane = this._createPane("leaflet-tile-pane", this._mapPane);
                a.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane);
                a.shadowPane = this._createPane("leaflet-shadow-pane");
                a.overlayPane = this._createPane("leaflet-overlay-pane");
                a.markerPane = this._createPane("leaflet-marker-pane");
                a.popupPane = this._createPane("leaflet-popup-pane");
                var b = " leaflet-zoom-hide";
                this.options.markerZoomAnimation || (f.DomUtil.addClass(a.markerPane, b),
                f.DomUtil.addClass(a.shadowPane, b),
                f.DomUtil.addClass(a.popupPane, b))
            },
            _createPane: function(a, b) {
                return f.DomUtil.create("div", a, b || this._panes.objectsPane)
            },
            _clearPanes: function() {
                this._container.removeChild(this._mapPane)
            },
            _addLayers: function(a) {
                a = a ? f.Util.isArray(a) ? a : [a] : [];
                for (var b = 0, c = a.length; b < c; b++)
                    this.addLayer(a[b])
            },
            _resetView: function(a, b, c, d) {
                var e = this._zoom !== b;
                d || (this.fire("movestart"),
                e && this.fire("zoomstart"));
                this._zoom = b;
                this._initialCenter = a;
                this._initialTopLeftPoint = this._getNewTopLeftPoint(a);
                !c ? f.DomUtil.setPosition(this._mapPane, new f.Point(0,0)) : this._initialTopLeftPoint._add(this._getMapPanePos());
                this._tileLayersToLoad = this._tileLayersNum;
                b = !this._loaded;
                this._loaded = !0;
                b && (this.fire("load"),
                this.eachLayer(this._layerAdd, this));
                this.fire("viewreset", {
                    hard: !c
                });
                this.fire("move");
                (e || d) && this.fire("zoomend");
                this.fire("moveend", {
                    hard: !c
                })
            },
            _rawPanBy: function(a) {
                f.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(a))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _updateZoomLevels: function() {
                var a, b = Infinity, c = -Infinity, d = this._getZoomSpan();
                for (a in this._zoomBoundLayers) {
                    var e = this._zoomBoundLayers[a];
                    isNaN(e.options.minZoom) || (b = Math.min(b, e.options.minZoom));
                    isNaN(e.options.maxZoom) || (c = Math.max(c, e.options.maxZoom))
                }
                a === void 0 ? this._layersMaxZoom = this._layersMinZoom = void 0 : (this._layersMaxZoom = c,
                this._layersMinZoom = b);
                d !== this._getZoomSpan() && this.fire("zoomlevelschange")
            },
            _panInsideMaxBounds: function() {
                this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded)
                    throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(b) {
                if (!f.DomEvent)
                    return;
                b = b || "on";
                f.DomEvent[b](this._container, "click", this._onMouseClick, this);
                var c = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"], d, e;
                for (d = 0,
                e = c.length; d < e; d++)
                    f.DomEvent[b](this._container, c[d], this._fireMouseEvent, this);
                this.options.trackResize && f.DomEvent[b](a, "resize", this._onResize, this)
            },
            _onResize: function() {
                f.Util.cancelAnimFrame(this._resizeRequest),
                this._resizeRequest = f.Util.requestAnimFrame(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this, !1, this._container)
            },
            _onMouseClick: function(a) {
                if (!this._loaded || !a._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || f.DomEvent._skipped(a))
                    return;
                this.fire("preclick");
                this._fireMouseEvent(a)
            },
            _fireMouseEvent: function(a) {
                if (!this._loaded || f.DomEvent._skipped(a))
                    return;
                var b = a.type;
                b = b === "mouseenter" ? "mouseover" : b === "mouseleave" ? "mouseout" : b;
                if (!this.hasEventListeners(b))
                    return;
                b === "contextmenu" && f.DomEvent.preventDefault(a);
                var c = this.mouseEventToContainerPoint(a)
                  , d = this.containerPointToLayerPoint(c)
                  , e = this.layerPointToLatLng(d);
                this.fire(b, {
                    latlng: e,
                    layerPoint: d,
                    containerPoint: c,
                    originalEvent: a
                })
            },
            _onTileLayerLoad: function() {
                this._tileLayersToLoad--,
                this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
            },
            _clearHandlers: function() {
                for (var a = 0, b = this._handlers.length; a < b; a++)
                    this._handlers[a].disable()
            },
            whenReady: function(a, b) {
                this._loaded ? a.call(b || this, this) : this.on("load", a, b);
                return this
            },
            _layerAdd: function(a) {
                a.onAdd(this),
                this.fire("layeradd", {
                    layer: a
                })
            },
            _getMapPanePos: function() {
                return f.DomUtil.getPosition(this._mapPane)
            },
            _moved: function() {
                var a = this._getMapPanePos();
                return a && !a.equals([0, 0])
            },
            _getTopLeftPoint: function() {
                return this.getPixelOrigin().subtract(this._getMapPanePos())
            },
            _getNewTopLeftPoint: function(a, b) {
                var c = this.getSize()._divideBy(2);
                return this.project(a, b)._subtract(c)._round()
            },
            _latLngToNewLayerPoint: function(a, b, c) {
                c = this._getNewTopLeftPoint(c, b).add(this._getMapPanePos());
                return this.project(a, b)._subtract(c)
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(a) {
                return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(a, b, c) {
                if (!c)
                    return a;
                a = this.project(a, b);
                var d = this.getSize().divideBy(2);
                d = new f.Bounds(a.subtract(d),a.add(d));
                d = this._getBoundsOffset(d, c, b);
                return this.unproject(a.add(d), b)
            },
            _limitOffset: function(a, b) {
                if (!b)
                    return a;
                var c = this.getPixelBounds();
                c = new f.Bounds(c.min.add(a),c.max.add(a));
                return a.add(this._getBoundsOffset(c, b))
            },
            _getBoundsOffset: function(a, b, c) {
                var d = this.project(b.getNorthWest(), c).subtract(a.min);
                b = this.project(b.getSouthEast(), c).subtract(a.max);
                c = this._rebound(d.x, -b.x);
                a = this._rebound(d.y, -b.y);
                return new f.Point(c,a)
            },
            _rebound: function(a, b) {
                return a + b > 0 ? Math.round(a - b) / 2 : Math.max(0, Math.ceil(a)) - Math.max(0, Math.floor(b))
            },
            _limitZoom: function(a) {
                var b = this.getMinZoom()
                  , c = this.getMaxZoom();
                return Math.max(b, Math.min(c, a))
            }
        });
        f.map = function(a, b) {
            return new f.Map(a,b)
        }
        ;
        f.Projection.Mercator = {
            MAX_LATITUDE: 85.0840591556,
            R_MINOR: 6356752.314245179,
            R_MAJOR: 6378137,
            project: function(a) {
                var b = f.LatLng.DEG_TO_RAD
                  , c = this.MAX_LATITUDE;
                c = Math.max(Math.min(c, a.lat), -c);
                var d = this.R_MAJOR
                  , e = this.R_MINOR;
                a = a.lng * b * d;
                c = c * b;
                b = e / d;
                e = Math.sqrt(1 - b * b);
                b = e * Math.sin(c);
                b = Math.pow((1 - b) / (1 + b), e * .5);
                e = Math.tan(.5 * (Math.PI * .5 - c)) / b;
                c = -d * Math.log(e);
                return new f.Point(a,c)
            },
            unproject: function(a) {
                var b = f.LatLng.RAD_TO_DEG
                  , c = this.R_MAJOR
                  , d = this.R_MINOR
                  , e = a.x * b / c;
                d = d / c;
                d = Math.sqrt(1 - d * d);
                a = Math.exp(-a.y / c);
                c = Math.PI / 2 - 2 * Math.atan(a);
                var g = 15
                  , h = 1e-7;
                g = g;
                var i = .1, j;
                while (Math.abs(i) > h && --g > 0)
                    j = d * Math.sin(c),
                    i = Math.PI / 2 - 2 * Math.atan(a * Math.pow((1 - j) / (1 + j), .5 * d)) - c,
                    c += i;
                return new f.LatLng(c * b,e)
            }
        };
        f.CRS.EPSG3395 = f.extend({}, f.CRS, {
            code: "EPSG:3395",
            projection: f.Projection.Mercator,
            transformation: function() {
                var a = f.Projection.Mercator;
                a = a.R_MAJOR;
                a = .5 / (Math.PI * a);
                return new f.Transformation(a,.5,-a,.5)
            }()
        });
        f.TileLayer = f.Class.extend({
            includes: f.Mixin.Events,
            options: {
                minZoom: 0,
                maxZoom: 18,
                tileSize: 256,
                subdomains: "abc",
                errorTileUrl: "",
                attribution: "",
                zoomOffset: 0,
                opacity: 1,
                unloadInvisibleTiles: f.Browser.mobile,
                updateWhenIdle: f.Browser.mobile
            },
            initialize: function(a, b) {
                b = f.setOptions(this, b);
                b.detectRetina && f.Browser.retina && b.maxZoom > 0 && (b.tileSize = Math.floor(b.tileSize / 2),
                b.zoomOffset++,
                b.minZoom > 0 && b.minZoom--,
                this.options.maxZoom--);
                b.bounds && (b.bounds = f.latLngBounds(b.bounds));
                this._url = a;
                b = this.options.subdomains;
                typeof b === "string" && (this.options.subdomains = b.split(""))
            },
            onAdd: function(a) {
                this._map = a,
                this._animated = a._zoomAnimated,
                this._initContainer(),
                a.on({
                    viewreset: this._reset,
                    moveend: this._update
                }, this),
                this._animated && a.on({
                    zoomanim: this._animateZoom,
                    zoomend: this._endZoomAnim
                }, this),
                this.options.updateWhenIdle || (this._limitedUpdate = f.Util.limitExecByInterval(this._update, 150, this),
                a.on("move", this._limitedUpdate, this)),
                this._reset(),
                this._update()
            },
            addTo: function(a) {
                a.addLayer(this);
                return this
            },
            onRemove: function(a) {
                this._container.parentNode.removeChild(this._container),
                a.off({
                    viewreset: this._reset,
                    moveend: this._update
                }, this),
                this._animated && a.off({
                    zoomanim: this._animateZoom,
                    zoomend: this._endZoomAnim
                }, this),
                this.options.updateWhenIdle || a.off("move", this._limitedUpdate, this),
                this._container = null,
                this._map = null
            },
            bringToFront: function() {
                var a = this._map._panes.tilePane;
                this._container && (a.appendChild(this._container),
                this._setAutoZIndex(a, Math.max));
                return this
            },
            bringToBack: function() {
                var a = this._map._panes.tilePane;
                this._container && (a.insertBefore(this._container, a.firstChild),
                this._setAutoZIndex(a, Math.min));
                return this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(a) {
                this.options.opacity = a;
                this._map && this._updateOpacity();
                return this
            },
            setZIndex: function(a) {
                this.options.zIndex = a;
                this._updateZIndex();
                return this
            },
            setUrl: function(a, b) {
                this._url = a;
                b || this.redraw();
                return this
            },
            redraw: function() {
                this._map && (this._reset({
                    hard: !0
                }),
                this._update());
                return this
            },
            _updateZIndex: function() {
                this._container && this.options.zIndex !== void 0 && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(a, b) {
                a = a.children;
                var c = -b(Infinity, -Infinity), d, e, f;
                for (e = 0,
                f = a.length; e < f; e++)
                    a[e] !== this._container && (d = parseInt(a[e].style.zIndex, 10),
                    isNaN(d) || (c = b(c, d)));
                this.options.zIndex = this._container.style.zIndex = (isFinite(c) ? c : 0) + b(1, -1)
            },
            _updateOpacity: function() {
                var a, b = this._tiles;
                if (f.Browser.ielt9)
                    for (a in b)
                        f.DomUtil.setOpacity(b[a], this.options.opacity);
                else
                    f.DomUtil.setOpacity(this._container, this.options.opacity)
            },
            _initContainer: function() {
                var a = this._map._panes.tilePane;
                if (!this._container) {
                    this._container = f.DomUtil.create("div", "leaflet-layer");
                    this._updateZIndex();
                    if (this._animated) {
                        var b = "leaflet-tile-container";
                        this._bgBuffer = f.DomUtil.create("div", b, this._container);
                        this._tileContainer = f.DomUtil.create("div", b, this._container)
                    } else
                        this._tileContainer = this._container;
                    a.appendChild(this._container);
                    this.options.opacity < 1 && this._updateOpacity()
                }
            },
            _reset: function(a) {
                for (var b in this._tiles)
                    this.fire("tileunload", {
                        tile: this._tiles[b]
                    });
                this._tiles = {};
                this._tilesToLoad = 0;
                this.options.reuseTiles && (this._unusedTiles = []);
                this._tileContainer.innerHTML = "";
                this._animated && a && a.hard && this._clearBgBuffer();
                this._initContainer()
            },
            _getTileSize: function() {
                var a = this._map
                  , b = a.getZoom() + this.options.zoomOffset
                  , c = this.options.maxNativeZoom
                  , d = this.options.tileSize;
                c && b > c && (d = Math.round(a.getZoomScale(b) / a.getZoomScale(c) * d));
                return d
            },
            _update: function() {
                if (!this._map)
                    return;
                var a = this._map
                  , b = a.getPixelBounds();
                a = a.getZoom();
                var c = this._getTileSize();
                if (a > this.options.maxZoom || a < this.options.minZoom)
                    return;
                a = f.bounds(b.min.divideBy(c)._floor(), b.max.divideBy(c)._floor());
                this._addTilesFromCenterOut(a);
                (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(a)
            },
            _addTilesFromCenterOut: function(a) {
                var c = [], d = a.getCenter(), e, g, h;
                for (e = a.min.y; e <= a.max.y; e++)
                    for (g = a.min.x; g <= a.max.x; g++)
                        h = new f.Point(g,e),
                        this._tileShouldBeLoaded(h) && c.push(h);
                h = c.length;
                if (h === 0)
                    return;
                c.sort(function(a, b) {
                    return a.distanceTo(d) - b.distanceTo(d)
                });
                a = b.createDocumentFragment();
                this._tilesToLoad || this.fire("loading");
                this._tilesToLoad += h;
                for (g = 0; g < h; g++)
                    this._addTile(c[g], a);
                this._tileContainer.appendChild(a)
            },
            _tileShouldBeLoaded: function(a) {
                if (a.x + ":" + a.y in this._tiles)
                    return !1;
                var b = this.options;
                if (!b.continuousWorld) {
                    var c = this._getWrapTileNum();
                    if (b.noWrap && (a.x < 0 || a.x >= c.x) || a.y < 0 || a.y >= c.y)
                        return !1
                }
                if (b.bounds) {
                    c = b.tileSize;
                    a = a.multiplyBy(c);
                    c = a.add([c, c]);
                    a = this._map.unproject(a);
                    c = this._map.unproject(c);
                    !b.continuousWorld && !b.noWrap && (a = a.wrap(),
                    c = c.wrap());
                    if (!b.bounds.intersects([a, c]))
                        return !1
                }
                return !0
            },
            _removeOtherTiles: function(a) {
                var b, c, d;
                for (d in this._tiles)
                    b = d.split(":"),
                    c = parseInt(b[0], 10),
                    b = parseInt(b[1], 10),
                    (c < a.min.x || c > a.max.x || b < a.min.y || b > a.max.y) && this._removeTile(d)
            },
            _removeTile: function(a) {
                var b = this._tiles[a];
                this.fire("tileunload", {
                    tile: b,
                    url: b.src
                });
                this.options.reuseTiles ? (f.DomUtil.removeClass(b, "leaflet-tile-loaded"),
                this._unusedTiles.push(b)) : b.parentNode === this._tileContainer && this._tileContainer.removeChild(b);
                f.Browser.android || (b.onload = null,
                b.src = f.Util.emptyImageUrl);
                delete this._tiles[a]
            },
            _addTile: function(a, b) {
                var c = this._getTilePos(a)
                  , d = this._getTile();
                f.DomUtil.setPosition(d, c, f.Browser.chrome);
                this._tiles[a.x + ":" + a.y] = d;
                this._loadTile(d, a);
                d.parentNode !== this._tileContainer && b.appendChild(d)
            },
            _getZoomForUrl: function() {
                var a = this.options
                  , b = this._map.getZoom();
                a.zoomReverse && (b = a.maxZoom - b);
                b += a.zoomOffset;
                return a.maxNativeZoom ? Math.min(b, a.maxNativeZoom) : b
            },
            _getTilePos: function(a) {
                var b = this._map.getPixelOrigin()
                  , c = this._getTileSize();
                return a.multiplyBy(c).subtract(b)
            },
            getTileUrl: function(a) {
                return f.Util.template(this._url, f.extend({
                    s: this._getSubdomain(a),
                    z: a.z,
                    x: a.x,
                    y: a.y
                }, this.options))
            },
            _getWrapTileNum: function() {
                var a = this._map.options.crs;
                a = a.getSize(this._map.getZoom());
                return a.divideBy(this._getTileSize())._floor()
            },
            _adjustTilePoint: function(a) {
                var b = this._getWrapTileNum();
                !this.options.continuousWorld && !this.options.noWrap && (a.x = (a.x % b.x + b.x) % b.x);
                this.options.tms && (a.y = b.y - a.y - 1);
                a.z = this._getZoomForUrl()
            },
            _getSubdomain: function(a) {
                a = Math.abs(a.x + a.y) % this.options.subdomains.length;
                return this.options.subdomains[a]
            },
            _getTile: function() {
                if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                    var a = this._unusedTiles.pop();
                    this._resetTile(a);
                    return a
                }
                return this._createTile()
            },
            _resetTile: function() {},
            _createTile: function() {
                var a = f.DomUtil.create("img", "leaflet-tile");
                a.style.width = a.style.height = this._getTileSize() + "px";
                a.galleryimg = "no";
                a.onselectstart = a.onmousemove = f.Util.falseFn;
                f.Browser.ielt9 && this.options.opacity !== void 0 && f.DomUtil.setOpacity(a, this.options.opacity);
                f.Browser.mobileWebkit3d && (a.style.WebkitBackfaceVisibility = "hidden");
                return a
            },
            _loadTile: function(a, b) {
                a._layer = this,
                a.onload = this._tileOnLoad,
                a.onerror = this._tileOnError,
                this._adjustTilePoint(b),
                a.src = this.getTileUrl(b),
                this.fire("tileloadstart", {
                    tile: a,
                    url: a.src
                })
            },
            _tileLoaded: function() {
                this._tilesToLoad--,
                this._animated && f.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"),
                this._tilesToLoad || (this.fire("load"),
                this._animated && (clearTimeout(this._clearBgBufferTimer),
                this._clearBgBufferTimer = setTimeout(f.bind(this._clearBgBuffer, this), 500)))
            },
            _tileOnLoad: function() {
                var a = this._layer;
                this.src !== f.Util.emptyImageUrl && (f.DomUtil.addClass(this, "leaflet-tile-loaded"),
                a.fire("tileload", {
                    tile: this,
                    url: this.src
                }));
                a._tileLoaded()
            },
            _tileOnError: function() {
                var a = this._layer;
                a.fire("tileerror", {
                    tile: this,
                    url: this.src
                });
                var b = a.options.errorTileUrl;
                b && (this.src = b);
                a._tileLoaded()
            }
        });
        f.tileLayer = function(a, b) {
            return new f.TileLayer(a,b)
        }
        ;
        f.TileLayer.WMS = f.TileLayer.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                version: "1.1.1",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1
            },
            initialize: function(a, b) {
                this._url = a;
                a = f.extend({}, this.defaultWmsParams);
                var c = b.tileSize || this.options.tileSize;
                b.detectRetina && f.Browser.retina ? a.width = a.height = c * 2 : a.width = a.height = c;
                for (var d in b)
                    !this.options.hasOwnProperty(d) && d !== "crs" && (a[d] = b[d]);
                this.wmsParams = a;
                f.setOptions(this, b)
            },
            onAdd: function(a) {
                this._crs = this.options.crs || a.options.crs;
                this._wmsVersion = parseFloat(this.wmsParams.version);
                var b = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[b] = this._crs.code;
                f.TileLayer.prototype.onAdd.call(this, a)
            },
            getTileUrl: function(a) {
                var b = this._map
                  , c = this.options.tileSize
                  , d = a.multiplyBy(c);
                c = d.add([c, c]);
                d = this._crs.project(b.unproject(d, a.z));
                b = this._crs.project(b.unproject(c, a.z));
                c = this._wmsVersion >= 1.3 && this._crs === f.CRS.EPSG4326 ? [b.y, d.x, d.y, b.x].join(",") : [d.x, b.y, b.x, d.y].join(",");
                b = f.Util.template(this._url, {
                    s: this._getSubdomain(a)
                });
                return b + f.Util.getParamString(this.wmsParams, b, !0) + "&BBOX=" + c
            },
            setParams: function(a, b) {
                f.extend(this.wmsParams, a);
                b || this.redraw();
                return this
            }
        });
        f.tileLayer.wms = function(a, b) {
            return new f.TileLayer.WMS(a,b)
        }
        ;
        f.TileLayer.Canvas = f.TileLayer.extend({
            options: {
                async: !1
            },
            initialize: function(a) {
                f.setOptions(this, a)
            },
            redraw: function() {
                this._map && (this._reset({
                    hard: !0
                }),
                this._update());
                for (var a in this._tiles)
                    this._redrawTile(this._tiles[a]);
                return this
            },
            _redrawTile: function(a) {
                this.drawTile(a, a._tilePoint, this._map._zoom)
            },
            _createTile: function() {
                var a = f.DomUtil.create("canvas", "leaflet-tile");
                a.width = a.height = this.options.tileSize;
                a.onselectstart = a.onmousemove = f.Util.falseFn;
                return a
            },
            _loadTile: function(a, b) {
                a._layer = this,
                a._tilePoint = b,
                this._redrawTile(a),
                this.options.async || this.tileDrawn(a)
            },
            drawTile: function() {},
            tileDrawn: function(a) {
                this._tileOnLoad.call(a)
            }
        });
        f.tileLayer.canvas = function(a) {
            return new f.TileLayer.Canvas(a)
        }
        ;
        f.ImageOverlay = f.Class.extend({
            includes: f.Mixin.Events,
            options: {
                opacity: 1
            },
            initialize: function(a, b, c) {
                this._url = a,
                this._bounds = f.latLngBounds(b),
                f.setOptions(this, c)
            },
            onAdd: function(a) {
                this._map = a,
                this._image || this._initImage(),
                a._panes.overlayPane.appendChild(this._image),
                a.on("viewreset", this._reset, this),
                a.options.zoomAnimation && f.Browser.any3d && a.on("zoomanim", this._animateZoom, this),
                this._reset()
            },
            onRemove: function(a) {
                a.getPanes().overlayPane.removeChild(this._image),
                a.off("viewreset", this._reset, this),
                a.options.zoomAnimation && a.off("zoomanim", this._animateZoom, this)
            },
            addTo: function(a) {
                a.addLayer(this);
                return this
            },
            setOpacity: function(a) {
                this.options.opacity = a;
                this._updateOpacity();
                return this
            },
            bringToFront: function() {
                this._image && this._map._panes.overlayPane.appendChild(this._image);
                return this
            },
            bringToBack: function() {
                var a = this._map._panes.overlayPane;
                this._image && a.insertBefore(this._image, a.firstChild);
                return this
            },
            setUrl: function(a) {
                this._url = a,
                this._image.src = this._url
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _initImage: function() {
                this._image = f.DomUtil.create("img", "leaflet-image-layer"),
                this._map.options.zoomAnimation && f.Browser.any3d ? f.DomUtil.addClass(this._image, "leaflet-zoom-animated") : f.DomUtil.addClass(this._image, "leaflet-zoom-hide"),
                this._updateOpacity(),
                f.extend(this._image, {
                    galleryimg: "no",
                    onselectstart: f.Util.falseFn,
                    onmousemove: f.Util.falseFn,
                    onload: f.bind(this._onImageLoad, this),
                    src: this._url
                })
            },
            _animateZoom: function(a) {
                var b = this._map
                  , c = this._image
                  , d = b.getZoomScale(a.zoom)
                  , e = this._bounds.getNorthWest()
                  , g = this._bounds.getSouthEast();
                e = b._latLngToNewLayerPoint(e, a.zoom, a.center);
                b = b._latLngToNewLayerPoint(g, a.zoom, a.center)._subtract(e);
                g = e._add(b._multiplyBy(1 / 2 * (1 - 1 / d)));
                c.style[f.DomUtil.TRANSFORM] = f.DomUtil.getTranslateString(g) + " scale(" + d + ") "
            },
            _reset: function() {
                var a = this._image
                  , b = this._map.latLngToLayerPoint(this._bounds.getNorthWest())
                  , c = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(b);
                f.DomUtil.setPosition(a, b);
                a.style.width = c.x + "px";
                a.style.height = c.y + "px"
            },
            _onImageLoad: function() {
                this.fire("load")
            },
            _updateOpacity: function() {
                f.DomUtil.setOpacity(this._image, this.options.opacity)
            }
        });
        f.imageOverlay = function(a, b, c) {
            return new f.ImageOverlay(a,b,c)
        }
        ;
        f.Icon = f.Class.extend({
            options: {
                className: ""
            },
            initialize: function(a) {
                f.setOptions(this, a)
            },
            createIcon: function(a) {
                return this._createIcon("icon", a)
            },
            createShadow: function(a) {
                return this._createIcon("shadow", a)
            },
            _createIcon: function(a, b) {
                var c = this._getIconUrl(a);
                if (!c) {
                    if (a === "icon")
                        throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var d;
                !b || b.tagName !== "IMG" ? d = this._createImg(c) : d = this._createImg(c, b);
                this._setIconStyles(d, a);
                return d
            },
            _setIconStyles: function(a, b) {
                var c = this.options, d = f.point(c[b + "Size"]), e;
                b === "shadow" ? e = f.point(c.shadowAnchor || c.iconAnchor) : e = f.point(c.iconAnchor);
                !e && d && (e = d.divideBy(2, !0));
                a.className = "leaflet-marker-" + b + " " + c.className;
                e && (a.style.marginLeft = -e.x + "px",
                a.style.marginTop = -e.y + "px");
                d && (a.style.width = d.x + "px",
                a.style.height = d.y + "px")
            },
            _createImg: function(a, c) {
                c = c || b.createElement("img");
                c.src = a;
                return c
            },
            _getIconUrl: function(a) {
                return f.Browser.retina && this.options[a + "RetinaUrl"] ? this.options[a + "RetinaUrl"] : this.options[a + "Url"]
            }
        });
        f.icon = function(a) {
            return new f.Icon(a)
        }
        ;
        f.Icon.Default = f.Icon.extend({
            options: {
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(a) {
                var b = a + "Url";
                if (this.options[b])
                    return this.options[b];
                f.Browser.retina && a === "icon" && (a += "-2x");
                b = f.Icon.Default.imagePath;
                if (!b)
                    throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                return b + "/marker-" + a + ".png"
            }
        });
        f.Icon.Default.imagePath = function() {
            if (!b.getElementsByTagName)
                return null;
            var a = b.getElementsByTagName("script"), c = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/, d, e, f, g;
            for (d = 0,
            e = a.length; d < e; d++) {
                f = a[d].src;
                g = f.match(c);
                if (g) {
                    g = f.split(c)[0];
                    return (g ? g + "/" : "") + "images"
                }
            }
        }();
        f.Marker = f.Class.extend({
            includes: f.Mixin.Events,
            options: {
                icon: new f.Icon.Default(),
                title: "",
                alt: "",
                clickable: !0,
                draggable: !1,
                keyboard: !0,
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250
            },
            initialize: function(a, b) {
                f.setOptions(this, b),
                this._latlng = f.latLng(a)
            },
            onAdd: function(a) {
                this._map = a,
                a.on("viewreset", this.update, this),
                this._initIcon(),
                this.update(),
                this.fire("add"),
                a.options.zoomAnimation && a.options.markerZoomAnimation && a.on("zoomanim", this._animateZoom, this)
            },
            addTo: function(a) {
                a.addLayer(this);
                return this
            },
            onRemove: function(a) {
                this.dragging && this.dragging.disable(),
                this._removeIcon(),
                this._removeShadow(),
                this.fire("remove"),
                a.off({
                    viewreset: this.update,
                    zoomanim: this._animateZoom
                }, this),
                this._map = null
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(a) {
                this._latlng = f.latLng(a);
                this.update();
                return this.fire("move", {
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(a) {
                this.options.zIndexOffset = a;
                this.update();
                return this
            },
            setIcon: function(a) {
                this.options.icon = a;
                this._map && (this._initIcon(),
                this.update());
                this._popup && this.bindPopup(this._popup);
                return this
            },
            update: function() {
                if (this._icon) {
                    var a = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(a)
                }
                return this
            },
            _initIcon: function() {
                var a = this.options
                  , b = this._map;
                b = b.options.zoomAnimation && b.options.markerZoomAnimation;
                b = b ? "leaflet-zoom-animated" : "leaflet-zoom-hide";
                var c = a.icon.createIcon(this._icon)
                  , d = !1;
                c !== this._icon && (this._icon && this._removeIcon(),
                d = !0,
                a.title && (c.title = a.title),
                a.alt && (c.alt = a.alt));
                f.DomUtil.addClass(c, b);
                a.keyboard && (c.tabIndex = "0");
                this._icon = c;
                this._initInteraction();
                a.riseOnHover && f.DomEvent.on(c, "mouseover", this._bringToFront, this).on(c, "mouseout", this._resetZIndex, this);
                c = a.icon.createShadow(this._shadow);
                var e = !1;
                c !== this._shadow && (this._removeShadow(),
                e = !0);
                c && f.DomUtil.addClass(c, b);
                this._shadow = c;
                a.opacity < 1 && this._updateOpacity();
                b = this._map._panes;
                d && b.markerPane.appendChild(this._icon);
                c && e && b.shadowPane.appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && f.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex),
                this._map._panes.markerPane.removeChild(this._icon),
                this._icon = null
            },
            _removeShadow: function() {
                this._shadow && this._map._panes.shadowPane.removeChild(this._shadow),
                this._shadow = null
            },
            _setPos: function(a) {
                f.DomUtil.setPosition(this._icon, a),
                this._shadow && f.DomUtil.setPosition(this._shadow, a),
                this._zIndex = a.y + this.options.zIndexOffset,
                this._resetZIndex()
            },
            _updateZIndex: function(a) {
                this._icon.style.zIndex = this._zIndex + a
            },
            _animateZoom: function(a) {
                a = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center).round();
                this._setPos(a)
            },
            _initInteraction: function() {
                if (!this.options.clickable)
                    return;
                var a = this._icon
                  , b = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                f.DomUtil.addClass(a, "leaflet-clickable");
                f.DomEvent.on(a, "click", this._onMouseClick, this);
                f.DomEvent.on(a, "keypress", this._onKeyPress, this);
                for (var c = 0; c < b.length; c++)
                    f.DomEvent.on(a, b[c], this._fireMouseEvent, this);
                f.Handler.MarkerDrag && (this.dragging = new f.Handler.MarkerDrag(this),
                this.options.draggable && this.dragging.enable())
            },
            _onMouseClick: function(a) {
                var b = this.dragging && this.dragging.moved();
                (this.hasEventListeners(a.type) || b) && f.DomEvent.stopPropagation(a);
                if (b)
                    return;
                if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved())
                    return;
                this.fire(a.type, {
                    originalEvent: a,
                    latlng: this._latlng
                })
            },
            _onKeyPress: function(a) {
                a.keyCode === 13 && this.fire("click", {
                    originalEvent: a,
                    latlng: this._latlng
                })
            },
            _fireMouseEvent: function(a) {
                this.fire(a.type, {
                    originalEvent: a,
                    latlng: this._latlng
                }),
                a.type === "contextmenu" && this.hasEventListeners(a.type) && f.DomEvent.preventDefault(a),
                a.type !== "mousedown" ? f.DomEvent.stopPropagation(a) : f.DomEvent.preventDefault(a)
            },
            setOpacity: function(a) {
                this.options.opacity = a;
                this._map && this._updateOpacity();
                return this
            },
            _updateOpacity: function() {
                f.DomUtil.setOpacity(this._icon, this.options.opacity),
                this._shadow && f.DomUtil.setOpacity(this._shadow, this.options.opacity)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            }
        });
        f.marker = function(a, b) {
            return new f.Marker(a,b)
        }
        ;
        f.DivIcon = f.Icon.extend({
            options: {
                iconSize: [12, 12],
                className: "leaflet-div-icon",
                html: !1
            },
            createIcon: function(a) {
                a = a && a.tagName === "DIV" ? a : b.createElement("div");
                var c = this.options;
                c.html !== !1 ? a.innerHTML = c.html : a.innerHTML = "";
                c.bgPos && (a.style.backgroundPosition = -c.bgPos.x + "px " + -c.bgPos.y + "px");
                this._setIconStyles(a, "icon");
                return a
            },
            createShadow: function() {
                return null
            }
        });
        f.divIcon = function(a) {
            return new f.DivIcon(a)
        }
        ;
        f.Map.mergeOptions({
            closePopupOnClick: !0
        });
        f.Popup = f.Class.extend({
            includes: f.Mixin.Events,
            options: {
                minWidth: 50,
                maxWidth: 300,
                autoPan: !0,
                closeButton: !0,
                offset: [0, 7],
                autoPanPadding: [5, 5],
                keepInView: !1,
                className: "",
                zoomAnimation: !0
            },
            initialize: function(a, b) {
                f.setOptions(this, a),
                this._source = b,
                this._animated = f.Browser.any3d && this.options.zoomAnimation,
                this._isOpen = !1
            },
            onAdd: function(a) {
                this._map = a;
                this._container || this._initLayout();
                var b = a.options.fadeAnimation;
                b && f.DomUtil.setOpacity(this._container, 0);
                a._panes.popupPane.appendChild(this._container);
                a.on(this._getEvents(), this);
                this.update();
                b && f.DomUtil.setOpacity(this._container, 1);
                this.fire("open");
                a.fire("popupopen", {
                    popup: this
                });
                this._source && this._source.fire("popupopen", {
                    popup: this
                })
            },
            addTo: function(a) {
                a.addLayer(this);
                return this
            },
            openOn: function(a) {
                a.openPopup(this);
                return this
            },
            onRemove: function(a) {
                a._panes.popupPane.removeChild(this._container),
                f.Util.falseFn(this._container.offsetWidth),
                a.off(this._getEvents(), this),
                a.options.fadeAnimation && f.DomUtil.setOpacity(this._container, 0),
                this._map = null,
                this.fire("close"),
                a.fire("popupclose", {
                    popup: this
                }),
                this._source && this._source.fire("popupclose", {
                    popup: this
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(a) {
                this._latlng = f.latLng(a);
                this._map && (this._updatePosition(),
                this._adjustPan());
                return this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(a) {
                this._content = a;
                this.update();
                return this
            },
            update: function() {
                if (!this._map)
                    return;
                this._container.style.visibility = "hidden";
                this._updateContent();
                this._updateLayout();
                this._updatePosition();
                this._container.style.visibility = "";
                this._adjustPan()
            },
            _getEvents: function() {
                var a = {
                    viewreset: this._updatePosition
                };
                this._animated && (a.zoomanim = this._zoomAnimation);
                ("closeOnClick"in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (a.preclick = this._close);
                this.options.keepInView && (a.moveend = this._adjustPan);
                return a
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var a = "leaflet-popup"
                  , b = a + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide");
                b = this._container = f.DomUtil.create("div", b);
                var c;
                this.options.closeButton && (c = this._closeButton = f.DomUtil.create("a", a + "-close-button", b),
                c.href = "#close",
                c.innerHTML = "&#215;",
                f.DomEvent.disableClickPropagation(c),
                f.DomEvent.on(c, "click", this._onCloseButtonClick, this));
                c = this._wrapper = f.DomUtil.create("div", a + "-content-wrapper", b);
                f.DomEvent.disableClickPropagation(c);
                this._contentNode = f.DomUtil.create("div", a + "-content", c);
                f.DomEvent.disableScrollPropagation(this._contentNode);
                f.DomEvent.on(c, "contextmenu", f.DomEvent.stopPropagation);
                this._tipContainer = f.DomUtil.create("div", a + "-tip-container", b);
                this._tip = f.DomUtil.create("div", a + "-tip", this._tipContainer)
            },
            _updateContent: function() {
                if (!this._content)
                    return;
                if (typeof this._content === "string")
                    this._contentNode.innerHTML = this._content;
                else {
                    while (this._contentNode.hasChildNodes())
                        this._contentNode.removeChild(this._contentNode.firstChild);
                    this._contentNode.appendChild(this._content)
                }
                this.fire("contentupdate")
            },
            _updateLayout: function() {
                var a = this._contentNode
                  , b = a.style;
                b.width = "";
                b.whiteSpace = "nowrap";
                var c = a.offsetWidth;
                c = Math.min(c, this.options.maxWidth);
                c = Math.max(c, this.options.minWidth);
                b.width = c + 1 + "px";
                b.whiteSpace = "";
                b.height = "";
                c = a.offsetHeight;
                var d = this.options.maxHeight
                  , e = "leaflet-popup-scrolled";
                d && c > d ? (b.height = d + "px",
                f.DomUtil.addClass(a, e)) : f.DomUtil.removeClass(a, e);
                this._containerWidth = this._container.offsetWidth
            },
            _updatePosition: function() {
                if (!this._map)
                    return;
                var a = this._map.latLngToLayerPoint(this._latlng)
                  , b = this._animated
                  , c = f.point(this.options.offset);
                b && f.DomUtil.setPosition(this._container, a);
                this._containerBottom = -c.y - (b ? 0 : a.y);
                this._containerLeft = -Math.round(this._containerWidth / 2) + c.x + (b ? 0 : a.x);
                this._container.style.bottom = this._containerBottom + "px";
                this._container.style.left = this._containerLeft + "px"
            },
            _zoomAnimation: function(a) {
                a = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center);
                f.DomUtil.setPosition(this._container, a)
            },
            _adjustPan: function() {
                if (!this.options.autoPan)
                    return;
                var a = this._map
                  , b = this._container.offsetHeight
                  , c = this._containerWidth
                  , d = new f.Point(this._containerLeft,-b - this._containerBottom);
                this._animated && d._add(f.DomUtil.getPosition(this._container));
                d = a.layerPointToContainerPoint(d);
                var e = f.point(this.options.autoPanPadding)
                  , g = f.point(this.options.autoPanPaddingTopLeft || e);
                e = f.point(this.options.autoPanPaddingBottomRight || e);
                var h = a.getSize()
                  , i = 0
                  , j = 0;
                d.x + c + e.x > h.x && (i = d.x + c - h.x + e.x);
                d.x - i - g.x < 0 && (i = d.x - g.x);
                d.y + b + e.y > h.y && (j = d.y + b - h.y + e.y);
                d.y - j - g.y < 0 && (j = d.y - g.y);
                (i || j) && a.fire("autopanstart").panBy([i, j])
            },
            _onCloseButtonClick: function(a) {
                this._close(),
                f.DomEvent.stop(a)
            }
        });
        f.popup = function(a, b) {
            return new f.Popup(a,b)
        }
        ;
        f.Map.include({
            openPopup: function(a, b, c) {
                this.closePopup();
                if (!(a instanceof f.Popup)) {
                    var d = a;
                    a = new f.Popup(c).setLatLng(b).setContent(d)
                }
                a._isOpen = !0;
                this._popup = a;
                return this.addLayer(a)
            },
            closePopup: function(a) {
                (!a || a === this._popup) && (a = this._popup,
                this._popup = null);
                a && (this.removeLayer(a),
                a._isOpen = !1);
                return this
            }
        });
        f.Marker.include({
            openPopup: function() {
                this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng),
                this._map.openPopup(this._popup));
                return this
            },
            closePopup: function() {
                this._popup && this._popup._close();
                return this
            },
            togglePopup: function() {
                this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup());
                return this
            },
            bindPopup: function(a, b) {
                var c = f.point(this.options.icon.options.popupAnchor || [0, 0]);
                c = c.add(f.Popup.prototype.options.offset);
                b && b.offset && (c = c.add(b.offset));
                b = f.extend({
                    offset: c
                }, b);
                this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this),
                this._popupHandlersAdded = !0);
                a instanceof f.Popup ? (f.setOptions(a, b),
                this._popup = a) : this._popup = new f.Popup(b,this).setContent(a);
                return this
            },
            setPopupContent: function(a) {
                this._popup && this._popup.setContent(a);
                return this
            },
            unbindPopup: function() {
                this._popup && (this._popup = null,
                this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this),
                this._popupHandlersAdded = !1);
                return this
            },
            getPopup: function() {
                return this._popup
            },
            _movePopup: function(a) {
                this._popup.setLatLng(a.latlng)
            }
        });
        f.LayerGroup = f.Class.extend({
            initialize: function(a) {
                this._layers = {};
                var b, c;
                if (a)
                    for (b = 0,
                    c = a.length; b < c; b++)
                        this.addLayer(a[b])
            },
            addLayer: function(a) {
                var b = this.getLayerId(a);
                this._layers[b] = a;
                this._map && this._map.addLayer(a);
                return this
            },
            removeLayer: function(a) {
                a = a in this._layers ? a : this.getLayerId(a);
                this._map && this._layers[a] && this._map.removeLayer(this._layers[a]);
                delete this._layers[a];
                return this
            },
            hasLayer: function(a) {
                return !a ? !1 : a in this._layers || this.getLayerId(a)in this._layers
            },
            clearLayers: function() {
                this.eachLayer(this.removeLayer, this);
                return this
            },
            invoke: function(a) {
                var b = Array.prototype.slice.call(arguments, 1), c, d;
                for (c in this._layers)
                    d = this._layers[c],
                    d[a] && d[a].apply(d, b);
                return this
            },
            onAdd: function(a) {
                this._map = a,
                this.eachLayer(a.addLayer, a)
            },
            onRemove: function(a) {
                this.eachLayer(a.removeLayer, a),
                this._map = null
            },
            addTo: function(a) {
                a.addLayer(this);
                return this
            },
            eachLayer: function(a, b) {
                for (var c in this._layers)
                    a.call(b, this._layers[c]);
                return this
            },
            getLayer: function(a) {
                return this._layers[a]
            },
            getLayers: function() {
                var a = [];
                for (var b in this._layers)
                    a.push(this._layers[b]);
                return a
            },
            setZIndex: function(a) {
                return this.invoke("setZIndex", a)
            },
            getLayerId: function(a) {
                return f.stamp(a)
            }
        });
        f.layerGroup = function(a) {
            return new f.LayerGroup(a)
        }
        ;
        f.FeatureGroup = f.LayerGroup.extend({
            includes: f.Mixin.Events,
            statics: {
                EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
            },
            addLayer: function(a) {
                if (this.hasLayer(a))
                    return this;
                "on"in a && a.on(f.FeatureGroup.EVENTS, this._propagateEvent, this);
                f.LayerGroup.prototype.addLayer.call(this, a);
                this._popupContent && a.bindPopup && a.bindPopup(this._popupContent, this._popupOptions);
                return this.fire("layeradd", {
                    layer: a
                })
            },
            removeLayer: function(a) {
                if (!this.hasLayer(a))
                    return this;
                a in this._layers && (a = this._layers[a]);
                a.off(f.FeatureGroup.EVENTS, this._propagateEvent, this);
                f.LayerGroup.prototype.removeLayer.call(this, a);
                this._popupContent && this.invoke("unbindPopup");
                return this.fire("layerremove", {
                    layer: a
                })
            },
            bindPopup: function(a, b) {
                this._popupContent = a;
                this._popupOptions = b;
                return this.invoke("bindPopup", a, b)
            },
            unbindPopup: function() {
                this._popupContent && this.invoke("unbindPopup")
            },
            openPopup: function(a) {
                for (var b in this._layers) {
                    this._layers[b].openPopup(a);
                    break
                }
                return this
            },
            closePopup: function() {
                this._popupContent && this.invoke("closePopup")
            },
            setStyle: function(a) {
                return this.invoke("setStyle", a)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var a = new f.LatLngBounds();
                this.eachLayer(function(b) {
                    a.extend(b instanceof f.Marker ? b.getLatLng() : b.getBounds())
                });
                return a
            },
            _propagateEvent: function(a) {
                a = f.extend({
                    layer: a.target,
                    target: this
                }, a),
                this.fire(a.type, a)
            }
        });
        f.featureGroup = function(a) {
            return new f.FeatureGroup(a)
        }
        ;
        f.Path = f.Class.extend({
            includes: [f.Mixin.Events],
            statics: {
                CLIP_PADDING: function() {
                    var b = f.Browser.mobile ? 1280 : 2e3;
                    b = (b / Math.max(a.outerWidth, a.outerHeight) - 1) / 2;
                    return Math.max(0, Math.min(.5, b))
                }()
            },
            options: {
                stroke: !0,
                color: "#0033ff",
                dashArray: null,
                lineCap: null,
                lineJoin: null,
                weight: 5,
                opacity: .5,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0
            },
            initialize: function(a) {
                f.setOptions(this, a)
            },
            onAdd: function(a) {
                this._map = a,
                this._container || (this._initElements(),
                this._initEvents()),
                this.projectLatlngs(),
                this._updatePath(),
                this._container && this._map._pathRoot.appendChild(this._container),
                this.fire("add"),
                a.on({
                    viewreset: this.projectLatlngs,
                    moveend: this._updatePath
                }, this)
            },
            addTo: function(a) {
                a.addLayer(this);
                return this
            },
            onRemove: function(a) {
                a._pathRoot.removeChild(this._container),
                this.fire("remove"),
                this._map = null,
                f.Browser.vml && (this._container = null,
                this._stroke = null,
                this._fill = null),
                a.off({
                    viewreset: this.projectLatlngs,
                    moveend: this._updatePath
                }, this)
            },
            projectLatlngs: function() {},
            setStyle: function(a) {
                f.setOptions(this, a);
                this._container && this._updateStyle();
                return this
            },
            redraw: function() {
                this._map && (this.projectLatlngs(),
                this._updatePath());
                return this
            }
        });
        f.Map.include({
            _updatePathViewport: function() {
                var a = f.Path.CLIP_PADDING
                  , b = this.getSize()
                  , c = f.DomUtil.getPosition(this._mapPane);
                c = c.multiplyBy(-1)._subtract(b.multiplyBy(a)._round());
                b = c.add(b.multiplyBy(1 + a * 2)._round());
                this._pathViewport = new f.Bounds(c,b)
            }
        });
        f.Path.SVG_NS = "http://www.w3.org/2000/svg";
        f.Browser.svg = !!(b.createElementNS && b.createElementNS(f.Path.SVG_NS, "svg").createSVGRect);
        f.Path = f.Path.extend({
            statics: {
                SVG: f.Browser.svg
            },
            bringToFront: function() {
                var a = this._map._pathRoot
                  , b = this._container;
                b && a.lastChild !== b && a.appendChild(b);
                return this
            },
            bringToBack: function() {
                var a = this._map._pathRoot
                  , b = this._container
                  , c = a.firstChild;
                b && c !== b && a.insertBefore(b, c);
                return this
            },
            getPathString: function() {},
            _createElement: function(a) {
                return b.createElementNS(f.Path.SVG_NS, a)
            },
            _initElements: function() {
                this._map._initPathRoot(),
                this._initPath(),
                this._initStyle()
            },
            _initPath: function() {
                this._container = this._createElement("g"),
                this._path = this._createElement("path"),
                this.options.className && f.DomUtil.addClass(this._path, this.options.className),
                this._container.appendChild(this._path)
            },
            _initStyle: function() {
                this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"),
                this._path.setAttribute("stroke-linecap", "round")),
                this.options.fill && this._path.setAttribute("fill-rule", "evenodd"),
                this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents),
                !this.options.clickable && !this.options.pointerEvents && this._path.setAttribute("pointer-events", "none"),
                this.options["data-testid"] && this._path.setAttribute("data-testid", this.options["data-testid"]),
                this._updateStyle()
            },
            _updateStyle: function() {
                this.options.stroke ? (this._path.setAttribute("stroke", this.options.color),
                this._path.setAttribute("stroke-opacity", this.options.opacity),
                this._path.setAttribute("stroke-width", this.options.weight),
                this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"),
                this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap),
                this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"),
                this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color),
                this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
            },
            _updatePath: function() {
                var a = this.getPathString();
                a || (a = "M0 0");
                this._path.setAttribute("d", a)
            },
            _initEvents: function() {
                if (this.options.clickable) {
                    (f.Browser.svg || !f.Browser.vml) && f.DomUtil.addClass(this._path, "leaflet-clickable");
                    f.DomEvent.on(this._container, "click", this._onMouseClick, this);
                    var a = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"];
                    for (var b = 0; b < a.length; b++)
                        f.DomEvent.on(this._container, a[b], this._fireMouseEvent, this)
                }
            },
            _onMouseClick: function(a) {
                if (this._map.dragging && this._map.dragging.moved())
                    return;
                this._fireMouseEvent(a)
            },
            _fireMouseEvent: function(a) {
                if (!this.hasEventListeners(a.type))
                    return;
                var b = this._map
                  , c = b.mouseEventToContainerPoint(a)
                  , d = b.containerPointToLayerPoint(c);
                b = b.layerPointToLatLng(d);
                this.fire(a.type, {
                    latlng: b,
                    layerPoint: d,
                    containerPoint: c,
                    originalEvent: a
                });
                a.type === "contextmenu" && f.DomEvent.preventDefault(a);
                a.type !== "mousemove" && f.DomEvent.stopPropagation(a)
            }
        });
        f.Map.include({
            _initPathRoot: function() {
                this._pathRoot || (this._pathRoot = f.Path.prototype._createElement("svg"),
                this._panes.overlayPane.appendChild(this._pathRoot),
                this.options.zoomAnimation && f.Browser.any3d ? (f.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"),
                this.on({
                    zoomanim: this._animatePathZoom,
                    zoomend: this._endPathZoom
                })) : f.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"),
                this.on("moveend", this._updateSvgViewport),
                this._updateSvgViewport())
            },
            _animatePathZoom: function(a) {
                var b = this.getZoomScale(a.zoom);
                a = this._getCenterOffset(a.center)._multiplyBy(-b)._add(this._pathViewport.min);
                this._pathRoot.style[f.DomUtil.TRANSFORM] = f.DomUtil.getTranslateString(a) + " scale(" + b + ") ";
                this._pathZooming = !0
            },
            _endPathZoom: function() {
                this._pathZooming = !1
            },
            _updateSvgViewport: function() {
                if (this._pathZooming)
                    return;
                this._updatePathViewport();
                var a = this._pathViewport
                  , b = a.min;
                a = a.max;
                var c = a.x - b.x;
                a = a.y - b.y;
                var d = this._pathRoot
                  , e = this._panes.overlayPane;
                f.Browser.mobileWebkit && e.removeChild(d);
                f.DomUtil.setPosition(d, b);
                d.setAttribute("width", c);
                d.setAttribute("height", a);
                d.setAttribute("viewBox", [b.x, b.y, c, a].join(" "));
                f.Browser.mobileWebkit && e.appendChild(d)
            }
        });
        f.Path.include({
            bindPopup: function(a, b) {
                a instanceof f.Popup ? this._popup = a : ((!this._popup || b) && (this._popup = new f.Popup(b,this)),
                this._popup.setContent(a));
                this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this),
                this._popupHandlersAdded = !0);
                return this
            },
            unbindPopup: function() {
                this._popup && (this._popup = null,
                this.off("click", this._openPopup).off("remove", this.closePopup),
                this._popupHandlersAdded = !1);
                return this
            },
            openPopup: function(a) {
                this._popup && (a = a || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)],
                this._openPopup({
                    latlng: a
                }));
                return this
            },
            closePopup: function() {
                this._popup && this._popup._close();
                return this
            },
            _openPopup: function(a) {
                this._popup.setLatLng(a.latlng),
                this._map.openPopup(this._popup)
            }
        });
        f.Browser.vml = !f.Browser.svg && function() {
            try {
                var a = b.createElement("div");
                a.innerHTML = '<v:shape adj="1"/>';
                a = a.firstChild;
                a.style.behavior = "url(#default#VML)";
                return a && typeof a.adj === "object"
            } catch (a) {
                return !1
            }
        }();
        f.Path = f.Browser.svg || !f.Browser.vml ? f.Path : f.Path.extend({
            statics: {
                VML: !0,
                CLIP_PADDING: .02
            },
            _createElement: function() {
                try {
                    b.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
                    return function(a) {
                        return b.createElement("<lvml:" + a + ' class="lvml">')
                    }
                } catch (a) {
                    return function(a) {
                        return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }(),
            _initPath: function() {
                var a = this._container = this._createElement("shape");
                f.DomUtil.addClass(a, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : ""));
                this.options.clickable && f.DomUtil.addClass(a, "leaflet-clickable");
                a.coordsize = "1 1";
                this._path = this._createElement("path");
                a.appendChild(this._path);
                this._map._pathRoot.appendChild(a)
            },
            _initStyle: function() {
                this._updateStyle()
            },
            _updateStyle: function() {
                var a = this._stroke
                  , b = this._fill
                  , c = this.options
                  , d = this._container;
                d.stroked = c.stroke;
                d.filled = c.fill;
                c.stroke ? (a || (a = this._stroke = this._createElement("stroke"),
                a.endcap = "round",
                d.appendChild(a)),
                a.weight = c.weight + "px",
                a.color = c.color,
                a.opacity = c.opacity,
                c.dashArray ? a.dashStyle = f.Util.isArray(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : a.dashStyle = "",
                c.lineCap && (a.endcap = c.lineCap.replace("butt", "flat")),
                c.lineJoin && (a.joinstyle = c.lineJoin)) : a && (d.removeChild(a),
                this._stroke = null);
                c.fill ? (b || (b = this._fill = this._createElement("fill"),
                d.appendChild(b)),
                b.color = c.fillColor || c.color,
                b.opacity = c.fillOpacity) : b && (d.removeChild(b),
                this._fill = null)
            },
            _updatePath: function() {
                var a = this._container.style;
                a.display = "none";
                this._path.v = this.getPathString() + " ";
                a.display = ""
            }
        });
        f.Map.include(f.Browser.svg || !f.Browser.vml ? {} : {
            _initPathRoot: function() {
                if (this._pathRoot)
                    return;
                var a = this._pathRoot = b.createElement("div");
                a.className = "leaflet-vml-container";
                this._panes.overlayPane.appendChild(a);
                this.on("moveend", this._updatePathViewport);
                this._updatePathViewport()
            }
        });
        f.Browser.canvas = function() {
            return !!(b.createElement && b.createElement("canvas").getContext)
        }();
        f.Path = f.Path.SVG && !a.L_PREFER_CANVAS || !f.Browser.canvas ? f.Path : f.Path.extend({
            statics: {
                CANVAS: !0,
                SVG: !1
            },
            redraw: function() {
                this._map && (this.projectLatlngs(),
                this._requestUpdate());
                return this
            },
            setStyle: function(a) {
                f.setOptions(this, a);
                this._map && (this._updateStyle(),
                this._requestUpdate());
                return this
            },
            onRemove: function(a) {
                a.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this),
                this.options.clickable && (this._map.off("click", this._onClick, this),
                this._map.off("mousemove", this._onMouseMove, this)),
                this._requestUpdate(),
                this._map = null
            },
            _requestUpdate: function() {
                this._map && !f.Path._updateRequest && (f.Path._updateRequest = f.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
            },
            _fireMapMoveEnd: function() {
                f.Path._updateRequest = null,
                this.fire("moveend")
            },
            _initElements: function() {
                this._map._initPathRoot(),
                this._ctx = this._map._canvasCtx
            },
            _updateStyle: function() {
                var a = this.options;
                a.stroke && (this._ctx.lineWidth = a.weight,
                this._ctx.strokeStyle = a.color);
                a.fill && (this._ctx.fillStyle = a.fillColor || a.color)
            },
            _drawPath: function() {
                var a, b, c, d, e, g;
                this._ctx.beginPath();
                for (a = 0,
                c = this._parts.length; a < c; a++) {
                    for (b = 0,
                    d = this._parts[a].length; b < d; b++)
                        e = this._parts[a][b],
                        g = (b === 0 ? "move" : "line") + "To",
                        this._ctx[g](e.x, e.y);
                    this instanceof f.Polygon && this._ctx.closePath()
                }
            },
            _checkIfEmpty: function() {
                return !this._parts.length
            },
            _updatePath: function() {
                if (this._checkIfEmpty())
                    return;
                var a = this._ctx
                  , b = this.options;
                this._drawPath();
                a.save();
                this._updateStyle();
                b.fill && (a.globalAlpha = b.fillOpacity,
                a.fill());
                b.stroke && (a.globalAlpha = b.opacity,
                a.stroke());
                a.restore()
            },
            _initEvents: function() {
                this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this),
                this._map.on("click", this._onClick, this))
            },
            _onClick: function(a) {
                this._containsPoint(a.layerPoint) && this.fire("click", a)
            },
            _onMouseMove: function(a) {
                if (!this._map || this._map._animatingZoom)
                    return;
                this._containsPoint(a.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer",
                this._mouseInside = !0,
                this.fire("mouseover", a)) : this._mouseInside && (this._ctx.canvas.style.cursor = "",
                this._mouseInside = !1,
                this.fire("mouseout", a))
            }
        });
        f.Map.include(f.Path.SVG && !a.L_PREFER_CANVAS || !f.Browser.canvas ? {} : {
            _initPathRoot: function() {
                var a = this._pathRoot, c;
                a || (a = this._pathRoot = b.createElement("canvas"),
                a.style.position = "absolute",
                c = this._canvasCtx = a.getContext("2d"),
                c.lineCap = "round",
                c.lineJoin = "round",
                this._panes.overlayPane.appendChild(a),
                this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated",
                this.on("zoomanim", this._animatePathZoom),
                this.on("zoomend", this._endPathZoom)),
                this.on("moveend", this._updateCanvasViewport),
                this._updateCanvasViewport())
            },
            _updateCanvasViewport: function() {
                if (this._pathZooming)
                    return;
                this._updatePathViewport();
                var a = this._pathViewport
                  , b = a.min;
                a = a.max.subtract(b);
                var c = this._pathRoot;
                f.DomUtil.setPosition(c, b);
                c.width = a.x;
                c.height = a.y;
                c.getContext("2d").translate(-b.x, -b.y)
            }
        });
        f.LineUtil = {
            simplify: function(a, b) {
                if (!b || !a.length)
                    return a.slice();
                b = b * b;
                a = this._reducePoints(a, b);
                a = this._simplifyDP(a, b);
                return a
            },
            pointToSegmentDistance: function(a, b, c) {
                return Math.sqrt(this._sqClosestPointOnSegment(a, b, c, !0))
            },
            closestPointOnSegment: function(a, b, c) {
                return this._sqClosestPointOnSegment(a, b, c)
            },
            _simplifyDP: function(a, b) {
                var c = a.length
                  , d = typeof Uint8Array !== void 0 + "" ? Uint8Array : Array;
                d = new d(c);
                d[0] = d[c - 1] = 1;
                this._simplifyDPStep(a, d, b, 0, c - 1);
                var e;
                b = [];
                for (e = 0; e < c; e++)
                    d[e] && b.push(a[e]);
                return b
            },
            _simplifyDPStep: function(a, b, c, d, e) {
                var f = 0, g, h, i;
                for (h = d + 1; h <= e - 1; h++)
                    i = this._sqClosestPointOnSegment(a[h], a[d], a[e], !0),
                    i > f && (g = h,
                    f = i);
                f > c && (b[g] = 1,
                this._simplifyDPStep(a, b, c, d, g),
                this._simplifyDPStep(a, b, c, g, e))
            },
            _reducePoints: function(a, b) {
                var c = [a[0]];
                for (var d = 1, e = 0, f = a.length; d < f; d++)
                    this._sqDist(a[d], a[e]) > b && (c.push(a[d]),
                    e = d);
                e < f - 1 && c.push(a[f - 1]);
                return c
            },
            clipSegment: function(a, b, c, d) {
                d = d ? this._lastCode : this._getBitCode(a, c);
                var e = this._getBitCode(b, c), f, g, h;
                this._lastCode = e;
                while (!0)
                    if (!(d | e))
                        return [a, b];
                    else if (d & e)
                        return !1;
                    else
                        f = d || e,
                        g = this._getEdgeIntersection(a, b, f, c),
                        h = this._getBitCode(g, c),
                        f === d ? (a = g,
                        d = h) : (b = g,
                        e = h)
            },
            _getEdgeIntersection: function(a, b, c, d) {
                var e = b.x - a.x;
                b = b.y - a.y;
                var g = d.min;
                d = d.max;
                if (c & 8)
                    return new f.Point(a.x + e * (d.y - a.y) / b,d.y);
                else if (c & 4)
                    return new f.Point(a.x + e * (g.y - a.y) / b,g.y);
                else if (c & 2)
                    return new f.Point(d.x,a.y + b * (d.x - a.x) / e);
                else if (c & 1)
                    return new f.Point(g.x,a.y + b * (g.x - a.x) / e)
            },
            _getBitCode: function(a, b) {
                var c = 0;
                a.x < b.min.x ? c |= 1 : a.x > b.max.x && (c |= 2);
                a.y < b.min.y ? c |= 4 : a.y > b.max.y && (c |= 8);
                return c
            },
            _sqDist: function(a, b) {
                var c = b.x - a.x;
                b = b.y - a.y;
                return c * c + b * b
            },
            _sqClosestPointOnSegment: function(a, b, c, d) {
                var e = b.x;
                b = b.y;
                var g = c.x - e
                  , h = c.y - b
                  , i = g * g + h * h;
                i > 0 && (i = ((a.x - e) * g + (a.y - b) * h) / i,
                i > 1 ? (e = c.x,
                b = c.y) : i > 0 && (e += g * i,
                b += h * i));
                g = a.x - e;
                h = a.y - b;
                return d ? g * g + h * h : new f.Point(e,b)
            }
        };
        f.Polyline = f.Path.extend({
            initialize: function(a, b) {
                f.Path.prototype.initialize.call(this, b),
                this._latlngs = this._convertLatLngs(a)
            },
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            projectLatlngs: function() {
                this._originalPoints = [];
                for (var a = 0, b = this._latlngs.length; a < b; a++)
                    this._originalPoints[a] = this._map.latLngToLayerPoint(this._latlngs[a])
            },
            getPathString: function() {
                for (var a = 0, b = this._parts.length, c = ""; a < b; a++)
                    c += this._getPathPartStr(this._parts[a]);
                return c
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(a) {
                this._latlngs = this._convertLatLngs(a);
                return this.redraw()
            },
            addLatLng: function(a) {
                this._latlngs.push(f.latLng(a));
                return this.redraw()
            },
            spliceLatLngs: function() {
                var a = [].splice.apply(this._latlngs, arguments);
                this._convertLatLngs(this._latlngs, !0);
                this.redraw();
                return a
            },
            closestLayerPoint: function(a) {
                var b = Infinity, c = this._parts, d, e, g = null;
                for (var h = 0, i = c.length; h < i; h++) {
                    var j = c[h];
                    for (var k = 1, l = j.length; k < l; k++) {
                        d = j[k - 1];
                        e = j[k];
                        var m = f.LineUtil._sqClosestPointOnSegment(a, d, e, !0);
                        m < b && (b = m,
                        g = f.LineUtil._sqClosestPointOnSegment(a, d, e))
                    }
                }
                g && (g.distance = Math.sqrt(b));
                return g
            },
            getBounds: function() {
                return new f.LatLngBounds(this.getLatLngs())
            },
            _convertLatLngs: function(a, b) {
                var c, d;
                b = b ? a : [];
                for (c = 0,
                d = a.length; c < d; c++) {
                    if (f.Util.isArray(a[c]) && typeof a[c][0] !== "number")
                        return;
                    b[c] = f.latLng(a[c])
                }
                return b
            },
            _initEvents: function() {
                f.Path.prototype._initEvents.call(this)
            },
            _getPathPartStr: function(a) {
                var b = f.Path.VML;
                for (var c = 0, d = a.length, e = "", g; c < d; c++)
                    g = a[c],
                    b && g._round(),
                    e += (c ? "L" : "M") + g.x + " " + g.y;
                return e
            },
            _clipPoints: function() {
                var a = this._originalPoints, b = a.length, c, d, e;
                if (this.options.noClip) {
                    this._parts = [a];
                    return
                }
                this._parts = [];
                var g = this._parts
                  , h = this._map._pathViewport
                  , i = f.LineUtil;
                for (c = 0,
                d = 0; c < b - 1; c++) {
                    e = i.clipSegment(a[c], a[c + 1], h, c);
                    if (!e)
                        continue;
                    g[d] = g[d] || [];
                    g[d].push(e[0]);
                    (e[1] !== a[c + 1] || c === b - 2) && (g[d].push(e[1]),
                    d++)
                }
            },
            _simplifyPoints: function() {
                var a = this._parts
                  , b = f.LineUtil;
                for (var c = 0, d = a.length; c < d; c++)
                    a[c] = b.simplify(a[c], this.options.smoothFactor)
            },
            _updatePath: function() {
                if (!this._map)
                    return;
                this._clipPoints();
                this._simplifyPoints();
                f.Path.prototype._updatePath.call(this)
            }
        });
        f.polyline = function(a, b) {
            return new f.Polyline(a,b)
        }
        ;
        f.PolyUtil = {};
        f.PolyUtil.clipPolygon = function(a, b) {
            var c, d = [1, 4, 2, 8], e, g, h, i, j, k, l, m, n = f.LineUtil;
            for (e = 0,
            k = a.length; e < k; e++)
                a[e]._code = n._getBitCode(a[e], b);
            for (h = 0; h < 4; h++) {
                l = d[h];
                c = [];
                for (e = 0,
                k = a.length,
                g = k - 1; e < k; g = e++)
                    i = a[e],
                    j = a[g],
                    !(i._code & l) ? (j._code & l && (m = n._getEdgeIntersection(j, i, l, b),
                    m._code = n._getBitCode(m, b),
                    c.push(m)),
                    c.push(i)) : j._code & l || (m = n._getEdgeIntersection(j, i, l, b),
                    m._code = n._getBitCode(m, b),
                    c.push(m));
                a = c
            }
            return a
        }
        ;
        f.Polygon = f.Polyline.extend({
            options: {
                fill: !0
            },
            initialize: function(a, b) {
                f.Polyline.prototype.initialize.call(this, a, b),
                this._initWithHoles(a)
            },
            _initWithHoles: function(a) {
                var b, c, d;
                if (a && f.Util.isArray(a[0]) && typeof a[0][0] !== "number") {
                    this._latlngs = this._convertLatLngs(a[0]);
                    this._holes = a.slice(1);
                    for (b = 0,
                    c = this._holes.length; b < c; b++)
                        d = this._holes[b] = this._convertLatLngs(this._holes[b]),
                        d[0].equals(d[d.length - 1]) && d.pop()
                }
                a = this._latlngs;
                a.length >= 2 && a[0].equals(a[a.length - 1]) && a.pop()
            },
            projectLatlngs: function() {
                f.Polyline.prototype.projectLatlngs.call(this);
                this._holePoints = [];
                if (!this._holes)
                    return;
                var a, b, c, d;
                for (a = 0,
                c = this._holes.length; a < c; a++) {
                    this._holePoints[a] = [];
                    for (b = 0,
                    d = this._holes[a].length; b < d; b++)
                        this._holePoints[a][b] = this._map.latLngToLayerPoint(this._holes[a][b])
                }
            },
            setLatLngs: function(a) {
                if (a && f.Util.isArray(a[0]) && typeof a[0][0] !== "number") {
                    this._initWithHoles(a);
                    return this.redraw()
                } else
                    return f.Polyline.prototype.setLatLngs.call(this, a)
            },
            _clipPoints: function() {
                var a = this._originalPoints
                  , b = [];
                this._parts = [a].concat(this._holePoints);
                if (this.options.noClip)
                    return;
                for (var a = 0, c = this._parts.length; a < c; a++) {
                    var d = f.PolyUtil.clipPolygon(this._parts[a], this._map._pathViewport);
                    d.length && b.push(d)
                }
                this._parts = b
            },
            _getPathPartStr: function(a) {
                a = f.Polyline.prototype._getPathPartStr.call(this, a);
                return a + (f.Browser.svg ? "z" : "x")
            }
        });
        f.polygon = function(a, b) {
            return new f.Polygon(a,b)
        }
        ;
        (function() {
            function a(a) {
                return f.FeatureGroup.extend({
                    initialize: function(a, b) {
                        this._layers = {},
                        this._options = b,
                        this.setLatLngs(a)
                    },
                    setLatLngs: function(b) {
                        var c = 0
                          , d = b.length;
                        this.eachLayer(function(a) {
                            c < d ? a.setLatLngs(b[c++]) : this.removeLayer(a)
                        }, this);
                        while (c < d)
                            this.addLayer(new a(b[c++],this._options));
                        return this
                    },
                    getLatLngs: function() {
                        var a = [];
                        this.eachLayer(function(b) {
                            a.push(b.getLatLngs())
                        });
                        return a
                    }
                })
            }
            f.MultiPolyline = a(f.Polyline);
            f.MultiPolygon = a(f.Polygon);
            f.multiPolyline = function(a, b) {
                return new f.MultiPolyline(a,b)
            }
            ;
            f.multiPolygon = function(a, b) {
                return new f.MultiPolygon(a,b)
            }
        }
        )();
        f.Rectangle = f.Polygon.extend({
            initialize: function(a, b) {
                f.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(a), b)
            },
            setBounds: function(a) {
                this.setLatLngs(this._boundsToLatLngs(a))
            },
            _boundsToLatLngs: function(a) {
                a = f.latLngBounds(a);
                return [a.getSouthWest(), a.getNorthWest(), a.getNorthEast(), a.getSouthEast()]
            }
        });
        f.rectangle = function(a, b) {
            return new f.Rectangle(a,b)
        }
        ;
        f.Circle = f.Path.extend({
            initialize: function(a, b, c) {
                f.Path.prototype.initialize.call(this, c),
                this._latlng = f.latLng(a),
                this._mRadius = b
            },
            options: {
                fill: !0
            },
            setLatLng: function(a) {
                this._latlng = f.latLng(a);
                return this.redraw()
            },
            setRadius: function(a) {
                this._mRadius = a;
                return this.redraw()
            },
            projectLatlngs: function() {
                var a = this._getLngRadius()
                  , b = this._latlng;
                a = this._map.latLngToLayerPoint([b.lat, b.lng - a]);
                this._point = this._map.latLngToLayerPoint(b);
                this._radius = Math.max(this._point.x - a.x, 1)
            },
            getBounds: function() {
                var a = this._getLngRadius()
                  , b = this._mRadius / 40075017 * 360
                  , c = this._latlng;
                return new f.LatLngBounds([c.lat - b, c.lng - a],[c.lat + b, c.lng + a])
            },
            getLatLng: function() {
                return this._latlng
            },
            getPathString: function() {
                var a = this._point
                  , b = this._radius;
                if (this._checkIfEmpty())
                    return "";
                if (f.Browser.svg)
                    return "M" + a.x + "," + (a.y - b) + "A" + b + "," + b + ",0,1,1," + (a.x - .1) + "," + (a.y - b) + " z";
                else {
                    a._round();
                    b = Math.round(b);
                    return "AL " + a.x + "," + a.y + " " + b + "," + b + " 0," + 65535 * 360
                }
            },
            getRadius: function() {
                return this._mRadius
            },
            getPath: function() {
                return this._path
            },
            _getLatRadius: function() {
                return this._mRadius / 40075017 * 360
            },
            _getLngRadius: function() {
                return this._getLatRadius() / Math.cos(f.LatLng.DEG_TO_RAD * this._latlng.lat)
            },
            _checkIfEmpty: function() {
                if (!this._map)
                    return !1;
                var a = this._map._pathViewport
                  , b = this._radius
                  , c = this._point;
                return c.x - b > a.max.x || c.y - b > a.max.y || c.x + b < a.min.x || c.y + b < a.min.y
            }
        });
        f.circle = function(a, b, c) {
            return new f.Circle(a,b,c)
        }
        ;
        f.CircleMarker = f.Circle.extend({
            options: {
                radius: 10,
                weight: 2
            },
            initialize: function(a, b) {
                f.Circle.prototype.initialize.call(this, a, null, b),
                this._radius = this.options.radius
            },
            projectLatlngs: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng)
            },
            _updateStyle: function() {
                f.Circle.prototype._updateStyle.call(this),
                this.setRadius(this.options.radius)
            },
            setLatLng: function(a) {
                f.Circle.prototype.setLatLng.call(this, a);
                this._popup && this._popup._isOpen && this._popup.setLatLng(a);
                return this
            },
            setRadius: function(a) {
                this.options.radius = this._radius = a;
                return this.redraw()
            },
            getRadius: function() {
                return this._radius
            }
        });
        f.circleMarker = function(a, b) {
            return new f.CircleMarker(a,b)
        }
        ;
        f.Polyline.include(f.Path.CANVAS ? {
            _containsPoint: function(a, b) {
                var c, d, e, g, h, i, j, k = this.options.weight / 2;
                f.Browser.touch && (k += 10);
                for (c = 0,
                g = this._parts.length; c < g; c++) {
                    j = this._parts[c];
                    for (d = 0,
                    h = j.length,
                    e = h - 1; d < h; e = d++) {
                        if (!b && d === 0)
                            continue;
                        i = f.LineUtil.pointToSegmentDistance(a, j[e], j[d]);
                        if (i <= k)
                            return !0
                    }
                }
                return !1
            }
        } : {});
        f.Polygon.include(f.Path.CANVAS ? {
            _containsPoint: function(a) {
                var b = !1, c, d, e, g, h, i, j, k;
                if (f.Polyline.prototype._containsPoint.call(this, a, !0))
                    return !0;
                for (g = 0,
                j = this._parts.length; g < j; g++) {
                    c = this._parts[g];
                    for (h = 0,
                    k = c.length,
                    i = k - 1; h < k; i = h++)
                        d = c[h],
                        e = c[i],
                        d.y > a.y !== e.y > a.y && a.x < (e.x - d.x) * (a.y - d.y) / (e.y - d.y) + d.x && (b = !b)
                }
                return b
            }
        } : {});
        f.Circle.include(f.Path.CANVAS ? {
            _drawPath: function() {
                var a = this._point;
                this._ctx.beginPath();
                this._ctx.arc(a.x, a.y, this._radius, 0, Math.PI * 2, !1)
            },
            _containsPoint: function(a) {
                var b = this._point
                  , c = this.options.stroke ? this.options.weight / 2 : 0;
                return a.distanceTo(b) <= this._radius + c
            }
        } : {});
        f.CircleMarker.include(f.Path.CANVAS ? {
            _updateStyle: function() {
                f.Path.prototype._updateStyle.call(this)
            }
        } : {});
        f.GeoJSON = f.FeatureGroup.extend({
            initialize: function(a, b) {
                f.setOptions(this, b),
                this._layers = {},
                a && this.addData(a)
            },
            addData: function(a) {
                var b = f.Util.isArray(a) ? a : a.features, c, d, e;
                if (b) {
                    for (c = 0,
                    d = b.length; c < d; c++)
                        e = b[c],
                        (e.geometries || e.geometry || e.features || e.coordinates) && this.addData(b[c]);
                    return this
                }
                e = this.options;
                if (e.filter && !e.filter(a))
                    return;
                b = f.GeoJSON.geometryToLayer(a, e.pointToLayer, e.coordsToLatLng, e);
                b.feature = f.GeoJSON.asFeature(a);
                b.defaultOptions = b.options;
                this.resetStyle(b);
                e.onEachFeature && e.onEachFeature(a, b);
                return this.addLayer(b)
            },
            resetStyle: function(a) {
                var b = this.options.style;
                b && (f.Util.extend(a.options, a.defaultOptions),
                this._setLayerStyle(a, b))
            },
            setStyle: function(a) {
                this.eachLayer(function(b) {
                    this._setLayerStyle(b, a)
                }, this)
            },
            _setLayerStyle: function(a, b) {
                typeof b === "function" && (b = b(a.feature)),
                a.setStyle && a.setStyle(b)
            }
        });
        f.extend(f.GeoJSON, {
            geometryToLayer: function(a, b, c, d) {
                var e = a.type === "Feature" ? a.geometry : a, g = e.coordinates, h = [], i, j, k;
                c = c || this.coordsToLatLng;
                switch (e.type) {
                case "Point":
                    i = c(g);
                    return b ? b(a, i) : new f.Marker(i);
                case "MultiPoint":
                    for (j = 0,
                    k = g.length; j < k; j++)
                        i = c(g[j]),
                        h.push(b ? b(a, i) : new f.Marker(i));
                    return new f.FeatureGroup(h);
                case "LineString":
                    i = this.coordsToLatLngs(g, 0, c);
                    return new f.Polyline(i,d);
                case "Polygon":
                    if (g.length === 2 && !g[1].length)
                        throw new Error("Invalid GeoJSON object.");
                    i = this.coordsToLatLngs(g, 1, c);
                    return new f.Polygon(i,d);
                case "MultiLineString":
                    i = this.coordsToLatLngs(g, 1, c);
                    return new f.MultiPolyline(i,d);
                case "MultiPolygon":
                    i = this.coordsToLatLngs(g, 2, c);
                    return new f.MultiPolygon(i,d);
                case "GeometryCollection":
                    for (j = 0,
                    k = e.geometries.length; j < k; j++)
                        h.push(this.geometryToLayer({
                            geometry: e.geometries[j],
                            type: "Feature",
                            properties: a.properties
                        }, b, c, d));
                    return new f.FeatureGroup(h);
                default:
                    throw new Error("Invalid GeoJSON object.")
                }
            },
            coordsToLatLng: function(a) {
                return new f.LatLng(a[1],a[0],a[2])
            },
            coordsToLatLngs: function(a, b, c) {
                var d, e, f, g = [];
                for (e = 0,
                f = a.length; e < f; e++)
                    d = b ? this.coordsToLatLngs(a[e], b - 1, c) : (c || this.coordsToLatLng)(a[e]),
                    g.push(d);
                return g
            },
            latLngToCoords: function(a) {
                var b = [a.lng, a.lat];
                a.alt !== void 0 && b.push(a.alt);
                return b
            },
            latLngsToCoords: function(a) {
                var b = [];
                for (var c = 0, d = a.length; c < d; c++)
                    b.push(f.GeoJSON.latLngToCoords(a[c]));
                return b
            },
            getFeature: function(a, b) {
                return a.feature ? f.extend({}, a.feature, {
                    geometry: b
                }) : f.GeoJSON.asFeature(b)
            },
            asFeature: function(a) {
                return a.type === "Feature" ? a : {
                    type: "Feature",
                    properties: {},
                    geometry: a
                }
            }
        });
        c = {
            toGeoJSON: function() {
                return f.GeoJSON.getFeature(this, {
                    type: "Point",
                    coordinates: f.GeoJSON.latLngToCoords(this.getLatLng())
                })
            }
        };
        f.Marker.include(c);
        f.Circle.include(c);
        f.CircleMarker.include(c);
        f.Polyline.include({
            toGeoJSON: function() {
                return f.GeoJSON.getFeature(this, {
                    type: "LineString",
                    coordinates: f.GeoJSON.latLngsToCoords(this.getLatLngs())
                })
            }
        });
        f.Polygon.include({
            toGeoJSON: function() {
                var a = [f.GeoJSON.latLngsToCoords(this.getLatLngs())], b, c, d;
                a[0].push(a[0][0]);
                if (this._holes)
                    for (b = 0,
                    c = this._holes.length; b < c; b++)
                        d = f.GeoJSON.latLngsToCoords(this._holes[b]),
                        d.push(d[0]),
                        a.push(d);
                return f.GeoJSON.getFeature(this, {
                    type: "Polygon",
                    coordinates: a
                })
            }
        });
        (function() {
            function a(a) {
                return function() {
                    var b = [];
                    this.eachLayer(function(a) {
                        b.push(a.toGeoJSON().geometry.coordinates)
                    });
                    return f.GeoJSON.getFeature(this, {
                        type: a,
                        coordinates: b
                    })
                }
            }
            f.MultiPolyline.include({
                toGeoJSON: a("MultiLineString")
            });
            f.MultiPolygon.include({
                toGeoJSON: a("MultiPolygon")
            });
            f.LayerGroup.include({
                toGeoJSON: function() {
                    var b = this.feature && this.feature.geometry
                      , c = [];
                    if (b && b.type === "MultiPoint")
                        return a("MultiPoint").call(this);
                    var d = b && b.type === "GeometryCollection";
                    this.eachLayer(function(a) {
                        a.toGeoJSON && (b = a.toGeoJSON(),
                        c.push(d ? b.geometry : f.GeoJSON.asFeature(b)))
                    });
                    return d ? f.GeoJSON.getFeature(this, {
                        geometries: c,
                        type: "GeometryCollection"
                    }) : {
                        type: "FeatureCollection",
                        features: c
                    }
                }
            })
        }
        )();
        f.geoJson = function(a, b) {
            return new f.GeoJSON(a,b)
        }
        ;
        f.DomEvent = {
            addListener: function(a, b, c, d) {
                var e = f.stamp(c), g = "_leaflet_" + b + e, h, i;
                if (a[g])
                    return this;
                h = function(b) {
                    return c.call(d || a, b || f.DomEvent._getEvent())
                }
                ;
                if (f.Browser.pointer && b.indexOf("touch") === 0)
                    return this.addPointerListener(a, b, h, e);
                f.Browser.touch && b === "dblclick" && this.addDoubleTapListener && this.addDoubleTapListener(a, h, e);
                "addEventListener"in a ? b === "mousewheel" ? (a.addEventListener("DOMMouseScroll", h, !1),
                a.addEventListener(b, h, !1)) : b === "mouseenter" || b === "mouseleave" ? (i = h,
                e = b === "mouseenter" ? "mouseover" : "mouseout",
                h = function(b) {
                    if (!f.DomEvent._checkMouse(a, b))
                        return;
                    return i(b)
                }
                ,
                a.addEventListener(e, h, !1)) : b === "click" && f.Browser.android ? (i = h,
                h = function(a) {
                    return f.DomEvent._filterClick(a, i)
                }
                ,
                a.addEventListener(b, h, !1)) : a.addEventListener(b, h, !1) : "attachEvent"in a && a.attachEvent("on" + b, h);
                a[g] = h;
                return this
            },
            removeListener: function(a, b, c) {
                c = f.stamp(c);
                var d = "_leaflet_" + b + c
                  , e = a[d];
                if (!e)
                    return this;
                f.Browser.pointer && b.indexOf("touch") === 0 ? this.removePointerListener(a, b, c) : f.Browser.touch && b === "dblclick" && this.removeDoubleTapListener ? this.removeDoubleTapListener(a, c) : "removeEventListener"in a ? b === "mousewheel" ? (a.removeEventListener("DOMMouseScroll", e, !1),
                a.removeEventListener(b, e, !1)) : b === "mouseenter" || b === "mouseleave" ? a.removeEventListener(b === "mouseenter" ? "mouseover" : "mouseout", e, !1) : a.removeEventListener(b, e, !1) : "detachEvent"in a && a.detachEvent("on" + b, e);
                a[d] = null;
                return this
            },
            stopPropagation: function(a) {
                a.deliberateSync = !0;
                a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
                f.DomEvent._skipped(a);
                return this
            },
            disableScrollPropagation: function(a) {
                var b = f.DomEvent.stopPropagation;
                return f.DomEvent.on(a, "mousewheel", b).on(a, "MozMousePixelScroll", b)
            },
            disableClickPropagation: function(a) {
                var b = f.DomEvent.stopPropagation;
                for (var c = f.Draggable.START.length - 1; c >= 0; c--)
                    f.DomEvent.on(a, f.Draggable.START[c], b);
                return f.DomEvent.on(a, "click", f.DomEvent._fakeStop).on(a, "dblclick", b)
            },
            preventDefault: function(a) {
                a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                return this
            },
            stop: function(a) {
                return f.DomEvent.preventDefault(a).stopPropagation(a)
            },
            getMousePosition: function(a, b) {
                if (!b)
                    return new f.Point(a.clientX,a.clientY);
                var c = b.getBoundingClientRect();
                return new f.Point(a.clientX - c.left - b.clientLeft,a.clientY - c.top - b.clientTop)
            },
            getWheelDelta: function(a) {
                var b = 0;
                a.wheelDelta && (b = a.wheelDelta / 120);
                a.detail && (b = -a.detail / 3);
                return b
            },
            _skipEvents: {},
            _fakeStop: function(a) {
                f.DomEvent._skipEvents[a.type] = !0
            },
            _skipped: function(a) {
                var b = this._skipEvents[a.type];
                this._skipEvents[a.type] = !1;
                return b
            },
            _checkMouse: function(a, b) {
                b = b.relatedTarget;
                if (!b)
                    return !0;
                try {
                    while (b && b !== a)
                        b = b.parentNode
                } catch (a) {
                    return !1
                }
                return b !== a
            },
            _getEvent: function() {
                var b = a.event;
                if (!b) {
                    var c = arguments.callee.caller;
                    while (c) {
                        b = c.arguments[0];
                        if (b && a.Event === b.constructor)
                            break;
                        c = c.caller
                    }
                }
                return b
            },
            _filterClick: function(a, b) {
                var c = a.timeStamp || a.originalEvent.timeStamp
                  , d = f.DomEvent._lastClick && c - f.DomEvent._lastClick;
                if (d && d > 100 && d < 1e3 || a.target._simulatedClick && !a._simulated) {
                    f.DomEvent.stop(a);
                    return
                }
                f.DomEvent._lastClick = c;
                return b(a)
            }
        };
        f.DomEvent.on = f.DomEvent.addListener;
        f.DomEvent.off = f.DomEvent.removeListener;
        f.Draggable = f.Class.extend({
            includes: f.Mixin.Events,
            statics: {
                START: f.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                END: {
                    mousedown: "mouseup",
                    touchstart: "touchend",
                    pointerdown: "touchend",
                    MSPointerDown: "touchend"
                },
                MOVE: {
                    mousedown: "mousemove",
                    touchstart: "touchmove",
                    pointerdown: "touchmove",
                    MSPointerDown: "touchmove"
                }
            },
            initialize: function(a, b) {
                this._element = a,
                this._dragStartTarget = b || a
            },
            enable: function() {
                if (this._enabled)
                    return;
                for (var a = f.Draggable.START.length - 1; a >= 0; a--)
                    f.DomEvent.on(this._dragStartTarget, f.Draggable.START[a], this._onDown, this);
                this._enabled = !0
            },
            disable: function() {
                if (!this._enabled)
                    return;
                for (var a = f.Draggable.START.length - 1; a >= 0; a--)
                    f.DomEvent.off(this._dragStartTarget, f.Draggable.START[a], this._onDown, this);
                this._enabled = !1;
                this._moved = !1
            },
            _onDown: function(a) {
                this._moved = !1;
                if (a.shiftKey || a.which !== 1 && a.button !== 1 && !a.touches)
                    return;
                f.DomEvent.stopPropagation(a);
                if (f.Draggable._disabled)
                    return;
                f.DomUtil.disableImageDrag();
                f.DomUtil.disableTextSelection();
                if (this._moving)
                    return;
                var c = a.touches ? a.touches[0] : a;
                this._startPoint = new f.Point(c.clientX,c.clientY);
                this._startPos = this._newPos = f.DomUtil.getPosition(this._element);
                f.DomEvent.on(b, f.Draggable.MOVE[a.type], this._onMove, this).on(b, f.Draggable.END[a.type], this._onUp, this)
            },
            _onMove: function(a) {
                if (a.touches && a.touches.length > 1) {
                    this._moved = !0;
                    return
                }
                var c = a.touches && a.touches.length === 1 ? a.touches[0] : a;
                c = new f.Point(c.clientX,c.clientY);
                c = c.subtract(this._startPoint);
                if (!c.x && !c.y)
                    return;
                f.DomEvent.preventDefault(a);
                this._moved || (this.fire("dragstart"),
                this._moved = !0,
                this._startPos = f.DomUtil.getPosition(this._element).subtract(c),
                f.DomUtil.addClass(b.body, "leaflet-dragging"),
                f.DomUtil.addClass(a.target || a.srcElement, "leaflet-drag-target"));
                this._newPos = this._startPos.add(c);
                this._moving = !0;
                f.Util.cancelAnimFrame(this._animRequest);
                this._animRequest = f.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)
            },
            _updatePosition: function() {
                this.fire("predrag"),
                f.DomUtil.setPosition(this._element, this._newPos),
                this.fire("drag")
            },
            _onUp: function(a) {
                f.DomUtil.removeClass(b.body, "leaflet-dragging");
                f.DomUtil.removeClass(a.target || a.srcElement, "leaflet-drag-target");
                for (var c in f.Draggable.MOVE)
                    f.DomEvent.off(b, f.Draggable.MOVE[c], this._onMove).off(b, f.Draggable.END[c], this._onUp);
                f.DomUtil.enableImageDrag();
                f.DomUtil.enableTextSelection();
                this._moved && this._moving && (f.Util.cancelAnimFrame(this._animRequest),
                this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                }));
                this._moving = !1
            }
        });
        f.Handler = f.Class.extend({
            initialize: function(a) {
                this._map = a
            },
            enable: function() {
                if (this._enabled)
                    return;
                this._enabled = !0;
                this.addHooks()
            },
            disable: function() {
                if (!this._enabled)
                    return;
                this._enabled = !1;
                this.removeHooks()
            },
            enabled: function() {
                return !!this._enabled
            }
        });
        f.Map.mergeOptions({
            dragging: !0,
            inertia: !f.Browser.android23,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: Infinity,
            inertiaThreshold: f.Browser.touch ? 32 : 18,
            easeLinearity: .25,
            worldCopyJump: !1
        });
        f.Map.Drag = f.Handler.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var a = this._map;
                    this._draggable = new f.Draggable(a._mapPane,a._container);
                    this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this);
                    a.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this),
                    a.on("viewreset", this._onViewReset, this),
                    a.whenReady(this._onViewReset, this))
                }
                this._draggable.enable()
            },
            removeHooks: function() {
                this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                var a = this._map;
                a._panAnim && a._panAnim.stop();
                a.fire("movestart").fire("dragstart");
                a.options.inertia && (this._positions = [],
                this._times = [])
            },
            _onDrag: function() {
                if (this._map.options.inertia) {
                    var a = this._lastTime = +new Date()
                      , b = this._lastPos = this._draggable._newPos;
                    this._positions.push(b);
                    this._times.push(a);
                    a - this._times[0] > 200 && (this._positions.shift(),
                    this._times.shift())
                }
                this._map.fire("move").fire("drag")
            },
            _onViewReset: function() {
                var a = this._map.getSize()._divideBy(2)
                  , b = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = b.subtract(a).x;
                this._worldWidth = this._map.project([0, 180]).x
            },
            _onPreDrag: function() {
                var a = this._worldWidth
                  , b = Math.round(a / 2)
                  , c = this._initialWorldOffset
                  , d = this._draggable._newPos.x
                  , e = (d - b + c) % a + b - c;
                d = (d + b + c) % a - b - c;
                a = Math.abs(e + c) < Math.abs(d + c) ? e : d;
                this._draggable._newPos.x = a
            },
            _onDragEnd: function(a) {
                var b = this._map
                  , c = b.options
                  , d = +new Date() - this._lastTime
                  , e = !c.inertia || d > c.inertiaThreshold || !this._positions[0];
                b.fire("dragend", a);
                if (e)
                    b.fire("moveend");
                else {
                    a = this._lastPos.subtract(this._positions[0]);
                    e = (this._lastTime + d - this._times[0]) / 1e3;
                    var g = c.easeLinearity;
                    d = a.multiplyBy(g / e);
                    a = d.distanceTo([0, 0]);
                    e = Math.min(c.inertiaMaxSpeed, a);
                    d = d.multiplyBy(e / a);
                    var h = e / (c.inertiaDeceleration * g)
                      , i = d.multiplyBy(-h / 2).round();
                    !i.x || !i.y ? b.fire("moveend") : (i = b._limitOffset(i, b.options.maxBounds),
                    f.Util.requestAnimFrame(function() {
                        b.panBy(i, {
                            duration: h,
                            easeLinearity: g,
                            noMoveStart: !0
                        })
                    }))
                }
            }
        });
        f.Map.addInitHook("addHandler", "dragging", f.Map.Drag);
        f.Map.mergeOptions({
            doubleClickZoom: !0
        });
        f.Map.DoubleClickZoom = f.Handler.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(a) {
                var b = this._map
                  , c = b.getZoom() + (a.originalEvent.shiftKey ? -1 : 1);
                b.options.doubleClickZoom === "center" ? b.setZoom(c) : b.setZoomAround(a.containerPoint, c)
            }
        });
        f.Map.addInitHook("addHandler", "doubleClickZoom", f.Map.DoubleClickZoom);
        f.Map.mergeOptions({
            scrollWheelZoom: !0
        });
        f.Map.ScrollWheelZoom = f.Handler.extend({
            addHooks: function() {
                f.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this),
                f.DomEvent.on(this._map._container, "MozMousePixelScroll", f.DomEvent.preventDefault),
                this._delta = 0
            },
            removeHooks: function() {
                f.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll),
                f.DomEvent.off(this._map._container, "MozMousePixelScroll", f.DomEvent.preventDefault)
            },
            _onWheelScroll: function(a) {
                var b = f.DomEvent.getWheelDelta(a);
                this._delta += b;
                this._lastMousePos = this._map.mouseEventToContainerPoint(a);
                this._startTime || (this._startTime = +new Date());
                b = Math.max(40 - (+new Date() - this._startTime), 0);
                clearTimeout(this._timer);
                this._timer = setTimeout(f.bind(this._performZoom, this), b);
                f.DomEvent.preventDefault(a);
                f.DomEvent.stopPropagation(a)
            },
            _performZoom: function() {
                var a = this._map
                  , b = this._delta
                  , c = a.getZoom();
                b = b > 0 ? Math.ceil(b) : Math.floor(b);
                b = Math.max(Math.min(b, 4), -4);
                b = a._limitZoom(c + b) - c;
                this._delta = 0;
                this._startTime = null;
                if (!b)
                    return;
                a.options.scrollWheelZoom === "center" ? a.setZoom(c + b) : a.setZoomAround(this._lastMousePos, c + b)
            }
        });
        f.Map.addInitHook("addHandler", "scrollWheelZoom", f.Map.ScrollWheelZoom);
        f.extend(f.DomEvent, {
            _touchstart: f.Browser.msPointer ? "MSPointerDown" : f.Browser.pointer ? "pointerdown" : "touchstart",
            _touchend: f.Browser.msPointer ? "MSPointerUp" : f.Browser.pointer ? "pointerup" : "touchend",
            addDoubleTapListener: function(a, c, d) {
                var e, g = !1, h = 250, i, j = "_leaflet_", k = this._touchstart, l = this._touchend, m = [];
                function n(a) {
                    var b;
                    f.Browser.pointer ? (m.push(a.pointerId),
                    b = m.length) : b = a.touches.length;
                    if (b > 1)
                        return;
                    b = Date.now();
                    var c = b - (e || b);
                    i = a.touches ? a.touches[0] : a;
                    g = c > 0 && c <= h;
                    e = b
                }
                function o(a) {
                    if (f.Browser.pointer) {
                        a = m.indexOf(a.pointerId);
                        if (a === -1)
                            return;
                        m.splice(a, 1)
                    }
                    if (g) {
                        if (f.Browser.pointer) {
                            a = {};
                            var b;
                            for (var d in i)
                                b = i[d],
                                typeof b === "function" ? a[d] = b.bind(i) : a[d] = b;
                            i = a
                        }
                        i.type = "dblclick";
                        c(i);
                        e = null
                    }
                }
                a[j + k + d] = n;
                a[j + l + d] = o;
                j = f.Browser.pointer ? b.documentElement : a;
                a.addEventListener(k, n, !1);
                j.addEventListener(l, o, !1);
                f.Browser.pointer && j.addEventListener(f.DomEvent.POINTER_CANCEL, o, !1);
                return this
            },
            removeDoubleTapListener: function(a, c) {
                var d = "_leaflet_";
                a.removeEventListener(this._touchstart, a[d + this._touchstart + c], !1);
                (f.Browser.pointer ? b.documentElement : a).removeEventListener(this._touchend, a[d + this._touchend + c], !1);
                f.Browser.pointer && b.documentElement.removeEventListener(f.DomEvent.POINTER_CANCEL, a[d + this._touchend + c], !1);
                return this
            }
        });
        f.extend(f.DomEvent, {
            POINTER_DOWN: f.Browser.msPointer ? "MSPointerDown" : "pointerdown",
            POINTER_MOVE: f.Browser.msPointer ? "MSPointerMove" : "pointermove",
            POINTER_UP: f.Browser.msPointer ? "MSPointerUp" : "pointerup",
            POINTER_CANCEL: f.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
            _pointers: [],
            _pointerDocumentListener: !1,
            addPointerListener: function(a, b, c, d) {
                switch (b) {
                case "touchstart":
                    return this.addPointerListenerStart(a, b, c, d);
                case "touchend":
                    return this.addPointerListenerEnd(a, b, c, d);
                case "touchmove":
                    return this.addPointerListenerMove(a, b, c, d);
                default:
                    throw "Unknown touch event type"
                }
            },
            addPointerListenerStart: function(a, c, d, e) {
                c = "_leaflet_";
                var g = this._pointers
                  , h = function(a) {
                    f.DomEvent.preventDefault(a);
                    var b = !1;
                    for (var c = 0; c < g.length; c++)
                        if (g[c].pointerId === a.pointerId) {
                            b = !0;
                            break
                        }
                    b || g.push(a);
                    a.touches = g.slice();
                    a.changedTouches = [a];
                    d(a)
                };
                a[c + "touchstart" + e] = h;
                a.addEventListener(this.POINTER_DOWN, h, !1);
                if (!this._pointerDocumentListener) {
                    c = function(a) {
                        for (var b = 0; b < g.length; b++)
                            if (g[b].pointerId === a.pointerId) {
                                g.splice(b, 1);
                                break
                            }
                    }
                    ;
                    b.documentElement.addEventListener(this.POINTER_UP, c, !1);
                    b.documentElement.addEventListener(this.POINTER_CANCEL, c, !1);
                    this._pointerDocumentListener = !0
                }
                return this
            },
            addPointerListenerMove: function(a, b, c, d) {
                var e = "_leaflet_"
                  , f = this._pointers;
                function b(a) {
                    if ((a.pointerType === a.MSPOINTER_TYPE_MOUSE || a.pointerType === "mouse") && a.buttons === 0)
                        return;
                    for (var b = 0; b < f.length; b++)
                        if (f[b].pointerId === a.pointerId) {
                            f[b] = a;
                            break
                        }
                    a.touches = f.slice();
                    a.changedTouches = [a];
                    c(a)
                }
                a[e + "touchmove" + d] = b;
                a.addEventListener(this.POINTER_MOVE, b, !1);
                return this
            },
            addPointerListenerEnd: function(a, b, c, d) {
                b = "_leaflet_";
                var e = this._pointers
                  , f = function(a) {
                    for (var b = 0; b < e.length; b++)
                        if (e[b].pointerId === a.pointerId) {
                            e.splice(b, 1);
                            break
                        }
                    a.touches = e.slice();
                    a.changedTouches = [a];
                    c(a)
                };
                a[b + "touchend" + d] = f;
                a.addEventListener(this.POINTER_UP, f, !1);
                a.addEventListener(this.POINTER_CANCEL, f, !1);
                return this
            },
            removePointerListener: function(a, b, c) {
                var d = "_leaflet_";
                d = a[d + b + c];
                switch (b) {
                case "touchstart":
                    a.removeEventListener(this.POINTER_DOWN, d, !1);
                    break;
                case "touchmove":
                    a.removeEventListener(this.POINTER_MOVE, d, !1);
                    break;
                case "touchend":
                    a.removeEventListener(this.POINTER_UP, d, !1);
                    a.removeEventListener(this.POINTER_CANCEL, d, !1);
                    break
                }
                return this
            }
        });
        f.Map.mergeOptions({
            touchZoom: f.Browser.touch && !f.Browser.android23,
            bounceAtZoomLimits: !0
        });
        f.Map.TouchZoom = f.Handler.extend({
            addHooks: function() {
                f.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                f.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(a) {
                var c = this._map;
                if (!a.touches || a.touches.length !== 2 || c._animatingZoom || this._zooming)
                    return;
                var d = c.mouseEventToLayerPoint(a.touches[0])
                  , e = c.mouseEventToLayerPoint(a.touches[1])
                  , g = c._getCenterLayerPoint();
                this._startCenter = d.add(e)._divideBy(2);
                this._startDist = d.distanceTo(e);
                this._moved = !1;
                this._zooming = !0;
                this._centerOffset = g.subtract(this._startCenter);
                c._panAnim && c._panAnim.stop();
                f.DomEvent.on(b, "touchmove", this._onTouchMove, this).on(b, "touchend", this._onTouchEnd, this);
                f.DomEvent.preventDefault(a)
            },
            _onTouchMove: function(a) {
                var b = this._map;
                if (!a.touches || a.touches.length !== 2 || !this._zooming)
                    return;
                var c = b.mouseEventToLayerPoint(a.touches[0])
                  , d = b.mouseEventToLayerPoint(a.touches[1]);
                this._scale = c.distanceTo(d) / this._startDist;
                this._delta = c._add(d)._divideBy(2)._subtract(this._startCenter);
                if (this._scale === 1)
                    return;
                if (!b.options.bounceAtZoomLimits && (b.getZoom() === b.getMinZoom() && this._scale < 1 || b.getZoom() === b.getMaxZoom() && this._scale > 1))
                    return;
                this._moved || (f.DomUtil.addClass(b._mapPane, "leaflet-touching"),
                b.fire("movestart").fire("zoomstart"),
                this._moved = !0);
                f.Util.cancelAnimFrame(this._animRequest);
                this._animRequest = f.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container);
                f.DomEvent.preventDefault(a)
            },
            _updateOnMove: function() {
                var a = this._map
                  , b = this._getScaleOrigin();
                b = a.layerPointToLatLng(b);
                var c = a.getScaleZoom(this._scale);
                a._animateZoom(b, c, this._startCenter, this._scale, this._delta)
            },
            _onTouchEnd: function() {
                if (!this._moved || !this._zooming) {
                    this._zooming = !1;
                    return
                }
                var a = this._map;
                this._zooming = !1;
                f.DomUtil.removeClass(a._mapPane, "leaflet-touching");
                f.Util.cancelAnimFrame(this._animRequest);
                f.DomEvent.off(b, "touchmove", this._onTouchMove).off(b, "touchend", this._onTouchEnd);
                var c = this._getScaleOrigin()
                  , d = a.layerPointToLatLng(c)
                  , e = a.getZoom()
                  , g = a.getScaleZoom(this._scale) - e;
                g = g > 0 ? Math.ceil(g) : Math.floor(g);
                e = a._limitZoom(e + g);
                g = a.getZoomScale(e) / this._scale;
                a._animateZoom(d, e, c, g)
            },
            _getScaleOrigin: function() {
                var a = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                return this._startCenter.add(a)
            }
        });
        f.Map.addInitHook("addHandler", "touchZoom", f.Map.TouchZoom);
        f.Map.mergeOptions({
            tap: !0,
            tapTolerance: 15
        });
        f.Map.Tap = f.Handler.extend({
            addHooks: function() {
                f.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                f.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(a) {
                if (!a.touches)
                    return;
                f.DomEvent.preventDefault(a);
                this._fireClick = !0;
                if (a.touches.length > 1) {
                    this._fireClick = !1;
                    clearTimeout(this._holdTimeout);
                    return
                }
                var c = a.touches[0];
                a = c.target;
                this._startPos = this._newPos = new f.Point(c.clientX,c.clientY);
                a.tagName && a.tagName.toLowerCase() === "a" && f.DomUtil.addClass(a, "leaflet-active");
                this._holdTimeout = setTimeout(f.bind(function() {
                    this._isTapValid() && (this._fireClick = !1,
                    this._onUp(),
                    this._simulateEvent("contextmenu", c))
                }, this), 1e3);
                f.DomEvent.on(b, "touchmove", this._onMove, this).on(b, "touchend", this._onUp, this)
            },
            _onUp: function(a) {
                clearTimeout(this._holdTimeout);
                f.DomEvent.off(b, "touchmove", this._onMove, this).off(b, "touchend", this._onUp, this);
                if (this._fireClick && a && a.changedTouches) {
                    a = a.changedTouches[0];
                    var c = a.target;
                    c && c.tagName && c.tagName.toLowerCase() === "a" && f.DomUtil.removeClass(c, "leaflet-active");
                    this._isTapValid() && this._simulateEvent("click", a)
                }
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function(a) {
                a = a.touches[0];
                this._newPos = new f.Point(a.clientX,a.clientY)
            },
            _simulateEvent: function(c, d) {
                var e = b.createEvent("MouseEvents");
                e._simulated = !0;
                d.target._simulatedClick = !0;
                e.initMouseEvent(c, !0, !0, a, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null);
                d.target.dispatchEvent(e)
            }
        });
        f.Browser.touch && !f.Browser.pointer && f.Map.addInitHook("addHandler", "tap", f.Map.Tap);
        f.Map.mergeOptions({
            boxZoom: !0
        });
        f.Map.BoxZoom = f.Handler.extend({
            initialize: function(a) {
                this._map = a,
                this._container = a._container,
                this._pane = a._panes.overlayPane,
                this._moved = !1
            },
            addHooks: function() {
                f.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                f.DomEvent.off(this._container, "mousedown", this._onMouseDown),
                this._moved = !1
            },
            moved: function() {
                return this._moved
            },
            _onMouseDown: function(a) {
                this._moved = !1;
                if (!a.shiftKey || a.which !== 1 && a.button !== 1)
                    return !1;
                f.DomUtil.disableTextSelection();
                f.DomUtil.disableImageDrag();
                this._startLayerPoint = this._map.mouseEventToLayerPoint(a);
                f.DomEvent.on(b, "mousemove", this._onMouseMove, this).on(b, "mouseup", this._onMouseUp, this).on(b, "keydown", this._onKeyDown, this)
            },
            _onMouseMove: function(a) {
                this._moved || (this._box = f.DomUtil.create("div", "leaflet-zoom-box", this._pane),
                f.DomUtil.setPosition(this._box, this._startLayerPoint),
                this._container.style.cursor = "crosshair",
                this._map.fire("boxzoomstart"));
                var b = this._startLayerPoint
                  , c = this._box;
                a = this._map.mouseEventToLayerPoint(a);
                var d = a.subtract(b);
                a = new f.Point(Math.min(a.x, b.x),Math.min(a.y, b.y));
                f.DomUtil.setPosition(c, a);
                this._moved = !0;
                c.style.width = Math.max(0, Math.abs(d.x) - 4) + "px";
                c.style.height = Math.max(0, Math.abs(d.y) - 4) + "px"
            },
            _finish: function() {
                this._moved && (this._pane.removeChild(this._box),
                this._container.style.cursor = ""),
                f.DomUtil.enableTextSelection(),
                f.DomUtil.enableImageDrag(),
                f.DomEvent.off(b, "mousemove", this._onMouseMove).off(b, "mouseup", this._onMouseUp).off(b, "keydown", this._onKeyDown)
            },
            _onMouseUp: function(a) {
                this._finish();
                var b = this._map;
                a = b.mouseEventToLayerPoint(a);
                if (this._startLayerPoint.equals(a))
                    return;
                a = new f.LatLngBounds(b.layerPointToLatLng(this._startLayerPoint),b.layerPointToLatLng(a));
                b.fitBounds(a);
                b.fire("boxzoomend", {
                    boxZoomBounds: a
                })
            },
            _onKeyDown: function(a) {
                a.keyCode === 27 && this._finish()
            }
        });
        f.Map.addInitHook("addHandler", "boxZoom", f.Map.BoxZoom);
        f.Map.mergeOptions({
            keyboard: !0,
            keyboardPanOffset: 80,
            keyboardZoomOffset: 1
        });
        f.Map.Keyboard = f.Handler.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 173]
            },
            initialize: function(a) {
                this._map = a,
                this._setPanOffset(a.options.keyboardPanOffset),
                this._setZoomOffset(a.options.keyboardZoomOffset)
            },
            addHooks: function() {
                var a = this._map._container;
                a.tabIndex === -1 && (a.tabIndex = "0");
                f.DomEvent.on(a, "focus", this._onFocus, this).on(a, "blur", this._onBlur, this).on(a, "mousedown", this._onMouseDown, this);
                this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
            },
            removeHooks: function() {
                this._removeHooks();
                var a = this._map._container;
                f.DomEvent.off(a, "focus", this._onFocus, this).off(a, "blur", this._onBlur, this).off(a, "mousedown", this._onMouseDown, this);
                this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
            },
            _onMouseDown: function() {
                if (this._focused)
                    return;
                var c = b.body
                  , d = b.documentElement
                  , e = c.scrollTop || d.scrollTop;
                c = c.scrollLeft || d.scrollLeft;
                this._map._container.focus();
                a.scrollTo(c, e)
            },
            _onFocus: function() {
                this._focused = !0,
                this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1,
                this._map.fire("blur")
            },
            _setPanOffset: function(a) {
                var b = this._panKeys = {}, c = this.keyCodes, d, e;
                for (d = 0,
                e = c.left.length; d < e; d++)
                    b[c.left[d]] = [-1 * a, 0];
                for (d = 0,
                e = c.right.length; d < e; d++)
                    b[c.right[d]] = [a, 0];
                for (d = 0,
                e = c.down.length; d < e; d++)
                    b[c.down[d]] = [0, a];
                for (d = 0,
                e = c.up.length; d < e; d++)
                    b[c.up[d]] = [0, -1 * a]
            },
            _setZoomOffset: function(a) {
                var b = this._zoomKeys = {}, c = this.keyCodes, d, e;
                for (d = 0,
                e = c.zoomIn.length; d < e; d++)
                    b[c.zoomIn[d]] = a;
                for (d = 0,
                e = c.zoomOut.length; d < e; d++)
                    b[c.zoomOut[d]] = -a
            },
            _addHooks: function() {
                f.DomEvent.on(b, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                f.DomEvent.off(b, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(a) {
                var b = a.keyCode
                  , c = this._map;
                if (b in this._panKeys) {
                    if (c._panAnim && c._panAnim._inProgress)
                        return;
                    c.panBy(this._panKeys[b]);
                    c.options.maxBounds && c.panInsideBounds(c.options.maxBounds)
                } else if (b in this._zoomKeys)
                    c.setZoom(c.getZoom() + this._zoomKeys[b]);
                else
                    return;
                f.DomEvent.stop(a)
            }
        });
        f.Map.addInitHook("addHandler", "keyboard", f.Map.Keyboard);
        f.Handler.MarkerDrag = f.Handler.extend({
            initialize: function(a) {
                this._marker = a
            },
            addHooks: function() {
                var a = this._marker._icon;
                this._draggable || (this._draggable = new f.Draggable(a,a));
                this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this);
                this._draggable.enable();
                f.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this),
                this._draggable.disable(),
                f.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onDrag: function() {
                var a = this._marker
                  , b = a._shadow
                  , c = f.DomUtil.getPosition(a._icon)
                  , d = a._map.layerPointToLatLng(c);
                b && f.DomUtil.setPosition(b, c);
                a._latlng = d;
                a.fire("move", {
                    latlng: d
                }).fire("drag")
            },
            _onDragEnd: function(a) {
                this._marker.fire("moveend").fire("dragend", a)
            }
        });
        f.Control = f.Class.extend({
            options: {
                position: "topright"
            },
            initialize: function(a) {
                f.setOptions(this, a)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(a) {
                var b = this._map;
                b && b.removeControl(this);
                this.options.position = a;
                b && b.addControl(this);
                return this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(a) {
                this._map = a;
                var b = this._container = this.onAdd(a)
                  , c = this.getPosition();
                a = a._controlCorners[c];
                f.DomUtil.addClass(b, "leaflet-control");
                c.indexOf("bottom") !== -1 ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
                return this
            },
            removeFrom: function(a) {
                var b = this.getPosition();
                b = a._controlCorners[b];
                b.removeChild(this._container);
                this._map = null;
                this.onRemove && this.onRemove(a);
                return this
            },
            _refocusOnMap: function() {
                this._map && this._map.getContainer().focus()
            }
        });
        f.control = function(a) {
            return new f.Control(a)
        }
        ;
        f.Map.include({
            addControl: function(a) {
                a.addTo(this);
                return this
            },
            removeControl: function(a) {
                a.removeFrom(this);
                return this
            },
            _initControlPos: function() {
                var a = this._controlCorners = {}
                  , b = "leaflet-"
                  , c = this._controlContainer = f.DomUtil.create("div", b + "control-container", this._container);
                function d(d, e) {
                    var g = b + d + " " + b + e;
                    a[d + e] = f.DomUtil.create("div", g, c)
                }
                d("top", "left");
                d("top", "right");
                d("bottom", "left");
                d("bottom", "right")
            },
            _clearControlPos: function() {
                this._container.removeChild(this._controlContainer)
            }
        });
        f.Control.Zoom = f.Control.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "-",
                zoomOutTitle: "Zoom out",
                recenterText: "\u2388",
                recenterTitle: "Re-center"
            },
            onAdd: function(a) {
                var b = "leaflet-control-zoom"
                  , c = f.DomUtil.create("div", b + " leaflet-bar");
                this._map = a;
                this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, b + "-in", c, this._zoomIn, this);
                this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, b + "-out", c, this._zoomOut, this);
                a.options.showRecenterControl && (this._initBounds = a.getBounds(),
                this._recenterButton = this._createButton(this.options.recenterText, this.options.recenterTitle, b + "-recenter", c, this._recenter, this));
                this._updateDisabled();
                a.on("zoomend zoomlevelschange", this._updateDisabled, this);
                return c
            },
            onRemove: function(a) {
                a.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            _zoomIn: function(a) {
                this._map.zoomIn(a.shiftKey ? 3 : 1)
            },
            _zoomOut: function(a) {
                this._map.zoomOut(a.shiftKey ? 3 : 1)
            },
            _recenter: function(a) {
                this._map.fitBounds(this._initBounds)
            },
            _createButton: function(a, b, c, d, e, g) {
                c = f.DomUtil.create("a", c, d);
                c.innerHTML = a;
                c.href = "#";
                c.title = b;
                d = f.DomEvent.stopPropagation;
                f.DomEvent.on(c, "click", d).on(c, "mousedown", d).on(c, "dblclick", d).on(c, "click", f.DomEvent.preventDefault).on(c, "click", e, g).on(c, "click", this._refocusOnMap, g);
                return c
            },
            _updateDisabled: function() {
                var a = this._map
                  , b = "leaflet-disabled";
                f.DomUtil.removeClass(this._zoomInButton, b);
                f.DomUtil.removeClass(this._zoomOutButton, b);
                this._recenterButton && f.DomUtil.removeClass(this._recenterButton, b);
                a._zoom === a.getMinZoom() && f.DomUtil.addClass(this._zoomOutButton, b);
                a._zoom === a.getMaxZoom() && f.DomUtil.addClass(this._zoomInButton, b)
            }
        });
        f.Map.mergeOptions({
            zoomControl: !0
        });
        f.Map.addInitHook(function() {
            this.options.zoomControl && (this.zoomControl = new f.Control.Zoom(),
            this.addControl(this.zoomControl))
        });
        f.control.zoom = function(a) {
            return new f.Control.Zoom(a)
        }
        ;
        f.Control.Attribution = f.Control.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(a) {
                f.setOptions(this, a),
                this._attributions = {}
            },
            onAdd: function(a) {
                this._container = f.DomUtil.create("div", "leaflet-control-attribution");
                f.DomEvent.disableClickPropagation(this._container);
                for (var b in a._layers)
                    a._layers[b].getAttribution && this.addAttribution(a._layers[b].getAttribution());
                a.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this);
                this._update();
                return this._container
            },
            onRemove: function(a) {
                a.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
            },
            setPrefix: function(a) {
                this.options.prefix = a;
                this._update();
                return this
            },
            addAttribution: function(a) {
                if (!a)
                    return;
                this._attributions[a] || (this._attributions[a] = 0);
                this._attributions[a]++;
                this._update();
                return this
            },
            removeAttribution: function(a) {
                if (!a)
                    return;
                this._attributions[a] && (this._attributions[a]--,
                this._update());
                return this
            },
            _update: function() {
                if (!this._map)
                    return;
                var a = [];
                for (var b in this._attributions)
                    this._attributions[b] && a.push(b);
                var c = [];
                this.options.prefix && c.push(this.options.prefix);
                a.length && c.push(a.join(", "));
                this._container.innerHTML = c.join(" | ")
            },
            _onLayerAdd: function(a) {
                a.layer.getAttribution && this.addAttribution(a.layer.getAttribution())
            },
            _onLayerRemove: function(a) {
                a.layer.getAttribution && this.removeAttribution(a.layer.getAttribution())
            }
        });
        f.Map.mergeOptions({
            attributionControl: !0
        });
        f.Map.addInitHook(function() {
            this.options.attributionControl && (this.attributionControl = new f.Control.Attribution().addTo(this))
        });
        f.control.attribution = function(a) {
            return new f.Control.Attribution(a)
        }
        ;
        f.Control.Scale = f.Control.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0,
                updateWhenIdle: !1
            },
            onAdd: function(a) {
                this._map = a;
                var b = "leaflet-control-scale"
                  , c = this.options.shiftRight ? b + " leaflet-control-scale-shiftRight" : b;
                c = f.DomUtil.create("div", c);
                var d = this.options;
                this._addScales(d, b, c);
                a.on(d.updateWhenIdle ? "moveend" : "move", this._update, this);
                a.whenReady(this._update, this);
                return c
            },
            onRemove: function(a) {
                a.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(a, b, c) {
                a.metric && (this._mScale = f.DomUtil.create("div", b + "-line", c)),
                a.imperial && (this._iScale = f.DomUtil.create("div", b + "-line", c))
            },
            _update: function() {
                var a = this._map.getBounds()
                  , b = a.getCenter().lat;
                b = 6378137 * Math.PI * Math.cos(b * Math.PI / 180);
                b = b * (a.getNorthEast().lng - a.getSouthWest().lng) / 180;
                a = this._map.getSize();
                var c = this.options
                  , d = 0;
                a.x > 0 && (d = b * (c.maxWidth / a.x));
                this._updateScales(c, d)
            },
            _updateScales: function(a, b) {
                a.metric && b && this._updateMetric(b),
                a.imperial && b && this._updateImperial(b)
            },
            _updateMetric: function(a) {
                var b = this._getRoundNum(a);
                this._mScale.style.width = this._getScaleWidth(b / a) + "px";
                this._mScale.innerHTML = b < 1e3 ? b + " m" : b / 1e3 + " km"
            },
            _updateImperial: function(a) {
                a = a * 3.2808399;
                var b = this._iScale, c, d;
                a > 5280 ? (c = a / 5280,
                d = this._getRoundNum(c),
                b.style.width = this._getScaleWidth(d / c) + "px",
                b.innerHTML = d + " mi") : (c = this._getRoundNum(a),
                b.style.width = this._getScaleWidth(c / a) + "px",
                b.innerHTML = c + " ft")
            },
            _getScaleWidth: function(a) {
                return Math.round(this.options.maxWidth * a) - 10
            },
            _getRoundNum: function(a) {
                var b = Math.pow(10, (Math.floor(a) + "").length - 1);
                a = a / b;
                a = a >= 10 ? 10 : a >= 5 ? 5 : a >= 3 ? 3 : a >= 2 ? 2 : 1;
                return b * a
            }
        });
        f.control.scale = function(a) {
            return new f.Control.Scale(a)
        }
        ;
        f.Control.Layers = f.Control.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0
            },
            initialize: function(a, b, c) {
                f.setOptions(this, c);
                this._layers = {};
                this._lastZIndex = 0;
                this._handlingClick = !1;
                for (var d in a)
                    this._addLayer(a[d], d);
                for (d in b)
                    this._addLayer(b[d], d, !0)
            },
            onAdd: function(a) {
                this._initLayout();
                this._update();
                a.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this);
                return this._container
            },
            onRemove: function(a) {
                a.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
            },
            addBaseLayer: function(a, b) {
                this._addLayer(a, b);
                this._update();
                return this
            },
            addOverlay: function(a, b) {
                this._addLayer(a, b, !0);
                this._update();
                return this
            },
            removeLayer: function(a) {
                a = f.stamp(a);
                delete this._layers[a];
                this._update();
                return this
            },
            _initLayout: function() {
                var a = "leaflet-control-layers"
                  , b = this._container = f.DomUtil.create("div", a);
                b.setAttribute("aria-haspopup", !0);
                !f.Browser.touch ? f.DomEvent.disableClickPropagation(b).disableScrollPropagation(b) : f.DomEvent.on(b, "click", f.DomEvent.stopPropagation);
                var c = this._form = f.DomUtil.create("form", a + "-list");
                if (this.options.collapsed) {
                    f.Browser.android || f.DomEvent.on(b, "mouseover", this._expand, this).on(b, "mouseout", this._collapse, this);
                    var d = this._layersLink = f.DomUtil.create("a", a + "-toggle", b);
                    d.href = "#";
                    d.title = "Layers";
                    f.Browser.touch ? f.DomEvent.on(d, "click", f.DomEvent.stop).on(d, "click", this._expand, this) : f.DomEvent.on(d, "focus", this._expand, this);
                    f.DomEvent.on(c, "click", function() {
                        setTimeout(f.bind(this._onInputClick, this), 0)
                    }, this);
                    this._map.on("click", this._collapse, this)
                } else
                    this._expand();
                this._baseLayersList = f.DomUtil.create("div", a + "-base", c);
                this._separator = f.DomUtil.create("div", a + "-separator", c);
                this._overlaysList = f.DomUtil.create("div", a + "-overlays", c);
                b.appendChild(c)
            },
            _addLayer: function(a, b, c) {
                var d = f.stamp(a);
                this._layers[d] = {
                    layer: a,
                    name: b,
                    overlay: c
                };
                this.options.autoZIndex && a.setZIndex && (this._lastZIndex++,
                a.setZIndex(this._lastZIndex))
            },
            _update: function() {
                if (!this._container)
                    return;
                this._baseLayersList.innerHTML = "";
                this._overlaysList.innerHTML = "";
                var a = !1, b = !1, c, d;
                for (c in this._layers)
                    d = this._layers[c],
                    this._addItem(d),
                    b = b || d.overlay,
                    a = a || !d.overlay;
                this._separator.style.display = b && a ? "" : "none"
            },
            _onLayerChange: function(a) {
                var b = this._layers[f.stamp(a.layer)];
                if (!b)
                    return;
                this._handlingClick || this._update();
                a = b.overlay ? a.type === "layeradd" ? "overlayadd" : "overlayremove" : a.type === "layeradd" ? "baselayerchange" : null;
                a && this._map.fire(a, b)
            },
            _createRadioElement: function(a, c) {
                a = '<input type="radio" class="leaflet-control-layers-selector" name="' + a + '"';
                c && (a += ' checked="checked"');
                a += "/>";
                c = b.createElement("div");
                c.innerHTML = a;
                return c.firstChild
            },
            _addItem: function(a) {
                var c = b.createElement("label"), d, e = this._map.hasLayer(a.layer);
                a.overlay ? (d = b.createElement("input"),
                d.type = "checkbox",
                d.className = "leaflet-control-layers-selector",
                d.defaultChecked = e) : d = this._createRadioElement("leaflet-base-layers", e);
                d.layerId = f.stamp(a.layer);
                f.DomEvent.on(d, "click", this._onInputClick, this);
                e = b.createElement("span");
                e.innerHTML = " " + a.name;
                c.appendChild(d);
                c.appendChild(e);
                d = a.overlay ? this._overlaysList : this._baseLayersList;
                d.appendChild(c);
                return c
            },
            _onInputClick: function() {
                var a, b, c, d = this._form.getElementsByTagName("input"), e = d.length;
                this._handlingClick = !0;
                for (a = 0; a < e; a++)
                    b = d[a],
                    c = this._layers[b.layerId],
                    b.checked && !this._map.hasLayer(c.layer) ? this._map.addLayer(c.layer) : !b.checked && this._map.hasLayer(c.layer) && this._map.removeLayer(c.layer);
                this._handlingClick = !1;
                this._refocusOnMap()
            },
            _expand: function() {
                f.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
            },
            _collapse: function() {
                this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
            }
        });
        f.control.layers = function(a, b, c) {
            return new f.Control.Layers(a,b,c)
        }
        ;
        f.PosAnimation = f.Class.extend({
            includes: f.Mixin.Events,
            run: function(a, b, c, d) {
                this.stop(),
                this._el = a,
                this._inProgress = !0,
                this._newPos = b,
                this.fire("start"),
                a.style[f.DomUtil.TRANSITION] = "all " + (c || .25) + "s cubic-bezier(0,0," + (d || .5) + ",1)",
                f.DomEvent.on(a, f.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
                f.DomUtil.setPosition(a, b),
                f.Util.falseFn(a.offsetWidth),
                this._stepTimer = setInterval(f.bind(this._onStep, this), 50)
            },
            stop: function() {
                if (!this._inProgress)
                    return;
                f.DomUtil.setPosition(this._el, this._getPos());
                this._onTransitionEnd();
                f.Util.falseFn(this._el.offsetWidth)
            },
            _onStep: function() {
                var a = this._getPos();
                if (!a) {
                    this._onTransitionEnd();
                    return
                }
                this._el._leaflet_pos = a;
                this.fire("step")
            },
            _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
            _getPos: function() {
                var b, c, d = this._el;
                d = a.getComputedStyle(d);
                if (f.Browser.any3d) {
                    c = d[f.DomUtil.TRANSFORM].match(this._transformRe);
                    if (!c)
                        return;
                    b = parseFloat(c[1]);
                    c = parseFloat(c[2])
                } else
                    b = parseFloat(d.left),
                    c = parseFloat(d.top);
                return new f.Point(b,c,!0)
            },
            _onTransitionEnd: function() {
                f.DomEvent.off(this._el, f.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
                if (!this._inProgress)
                    return;
                this._inProgress = !1;
                this._el.style[f.DomUtil.TRANSITION] = "";
                this._el._leaflet_pos = this._newPos;
                clearInterval(this._stepTimer);
                this.fire("step").fire("end")
            }
        });
        f.Map.include({
            setView: function(a, b, c) {
                b = b === void 0 ? this._zoom : this._limitZoom(b);
                a = this._limitCenter(f.latLng(a), b, this.options.maxBounds);
                c = c || {};
                this._panAnim && this._panAnim.stop();
                if (this._loaded && !c.reset && c !== !0) {
                    c.animate !== void 0 && (c.zoom = f.extend({
                        animate: c.animate
                    }, c.zoom),
                    c.pan = f.extend({
                        animate: c.animate
                    }, c.pan));
                    c = this._zoom !== b ? this._tryAnimatedZoom && this._tryAnimatedZoom(a, b, c.zoom) : this._tryAnimatedPan(a, c.pan);
                    if (c) {
                        clearTimeout(this._sizeTimer);
                        return this
                    }
                }
                this._resetView(a, b);
                return this
            },
            panBy: function(a, b) {
                a = f.point(a).round();
                b = b || {};
                if (!a.x && !a.y)
                    return this;
                this._panAnim || (this._panAnim = new f.PosAnimation(),
                this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this));
                b.noMoveStart || this.fire("movestart");
                if (b.animate !== !1) {
                    f.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                    var c = this._getMapPanePos().subtract(a);
                    this._panAnim.run(this._mapPane, c, b.duration || .25, b.easeLinearity)
                } else
                    this._rawPanBy(a),
                    this.fire("move").fire("moveend");
                return this
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                f.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"),
                this.fire("moveend")
            },
            _tryAnimatedPan: function(a, b) {
                a = this._getCenterOffset(a)._floor();
                if ((b && b.animate) !== !0 && !this.getSize().contains(a))
                    return !1;
                this.panBy(a, b);
                return !0
            }
        });
        f.PosAnimation = f.DomUtil.TRANSITION ? f.PosAnimation : f.PosAnimation.extend({
            run: function(a, b, c, d) {
                this.stop(),
                this._el = a,
                this._inProgress = !0,
                this._duration = c || .25,
                this._easeOutPower = 1 / Math.max(d || .5, .2),
                this._startPos = f.DomUtil.getPosition(a),
                this._offset = b.subtract(this._startPos),
                this._startTime = +new Date(),
                this.fire("start"),
                this._animate()
            },
            stop: function() {
                if (!this._inProgress)
                    return;
                this._step();
                this._complete()
            },
            _animate: function() {
                this._animId = f.Util.requestAnimFrame(this._animate, this),
                this._step()
            },
            _step: function() {
                var a = +new Date() - this._startTime
                  , b = this._duration * 1e3;
                a < b ? this._runFrame(this._easeOut(a / b)) : (this._runFrame(1),
                this._complete())
            },
            _runFrame: function(a) {
                a = this._startPos.add(this._offset.multiplyBy(a));
                f.DomUtil.setPosition(this._el, a);
                this.fire("step")
            },
            _complete: function() {
                f.Util.cancelAnimFrame(this._animId),
                this._inProgress = !1,
                this.fire("end")
            },
            _easeOut: function(a) {
                return 1 - Math.pow(1 - a, this._easeOutPower)
            }
        });
        f.Map.mergeOptions({
            zoomAnimation: !0,
            zoomAnimationThreshold: 4
        });
        f.DomUtil.TRANSITION && f.Map.addInitHook(function() {
            this._zoomAnimated = this.options.zoomAnimation && f.DomUtil.TRANSITION && f.Browser.any3d && !f.Browser.android23 && !f.Browser.mobileOpera,
            this._zoomAnimated && f.DomEvent.on(this._mapPane, f.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
        });
        f.Map.include(f.DomUtil.TRANSITION ? {
            _catchTransitionEnd: function(a) {
                this._animatingZoom && a.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(a, b, c) {
                if (this._animatingZoom)
                    return !0;
                c = c || {};
                if (!this._zoomAnimated || c.animate === !1 || this._nothingToAnimate() || Math.abs(b - this._zoom) > this.options.zoomAnimationThreshold)
                    return !1;
                var d = this.getZoomScale(b)
                  , e = this._getCenterOffset(a)._divideBy(1 - 1 / d)
                  , f = this._getCenterLayerPoint()._add(e);
                if (c.animate !== !0 && !this.getSize().contains(e))
                    return !1;
                this.fire("movestart").fire("zoomstart");
                this._animateZoom(a, b, f, d, null, !0);
                return !0
            },
            _animateZoom: function(a, b, c, d, e, g) {
                this._animatingZoom = !0,
                f.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"),
                this._animateToCenter = a,
                this._animateToZoom = b,
                f.Draggable && (f.Draggable._disabled = !0),
                this.fire("zoomanim", {
                    center: a,
                    zoom: b,
                    origin: c,
                    scale: d,
                    delta: e,
                    backwards: g
                })
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom = !1,
                f.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"),
                this._resetView(this._animateToCenter, this._animateToZoom, !0, !0),
                f.Draggable && (f.Draggable._disabled = !1)
            }
        } : {});
        f.TileLayer.include({
            _animateZoom: function(a) {
                this._animating || (this._animating = !0,
                this._prepareBgBuffer());
                var b = this._bgBuffer
                  , c = f.DomUtil.TRANSFORM
                  , d = a.delta ? f.DomUtil.getTranslateString(a.delta) : b.style[c]
                  , e = f.DomUtil.getScaleString(a.scale, a.origin);
                b.style[c] = a.backwards ? e + " " + d : d + " " + e
            },
            _endZoomAnim: function() {
                var a = this._tileContainer
                  , b = this._bgBuffer;
                a.style.visibility = "";
                a.parentNode.appendChild(a);
                f.Util.falseFn(b.offsetWidth);
                this._animating = !1
            },
            _clearBgBuffer: function() {
                var a = this._map;
                a && !a._animatingZoom && !a.touchZoom._zooming && (this._bgBuffer.innerHTML = "",
                this._bgBuffer.style[f.DomUtil.TRANSFORM] = "")
            },
            _prepareBgBuffer: function() {
                var a = this._tileContainer
                  , b = this._bgBuffer
                  , c = this._getLoadedTilesPercentage(b)
                  , d = this._getLoadedTilesPercentage(a);
                if (b && c > .5 && d < .5) {
                    a.style.visibility = "hidden";
                    this._stopLoadingImages(a);
                    return
                }
                b.style.visibility = "hidden";
                b.style[f.DomUtil.TRANSFORM] = "";
                this._tileContainer = b;
                b = this._bgBuffer = a;
                this._stopLoadingImages(b);
                clearTimeout(this._clearBgBufferTimer)
            },
            _getLoadedTilesPercentage: function(a) {
                a = a.getElementsByTagName("img");
                var b, c, d = 0;
                for (b = 0,
                c = a.length; b < c; b++)
                    a[b].complete && d++;
                return d / c
            },
            _stopLoadingImages: function(a) {
                a = Array.prototype.slice.call(a.getElementsByTagName("img"));
                var b, c, d;
                for (b = 0,
                c = a.length; b < c; b++)
                    d = a[b],
                    d.complete || (d.onload = f.Util.falseFn,
                    d.onerror = f.Util.falseFn,
                    d.src = f.Util.emptyImageUrl,
                    d.parentNode.removeChild(d))
            }
        });
        f.Map.include({
            _defaultLocateOptions: {
                watch: !1,
                setView: !1,
                maxZoom: Infinity,
                timeout: 1e4,
                maximumAge: 0,
                enableHighAccuracy: !1
            },
            locate: function(a) {
                a = this._locateOptions = f.extend(this._defaultLocateOptions, a);
                if (!navigator.geolocation) {
                    this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    });
                    return this
                }
                var b = f.bind(this._handleGeolocationResponse, this)
                  , c = f.bind(this._handleGeolocationError, this);
                a.watch ? this._locationWatchId = navigator.geolocation.watchPosition(b, c, a) : navigator.geolocation.getCurrentPosition(b, c, a);
                return this
            },
            stopLocate: function() {
                navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId);
                this._locateOptions && (this._locateOptions.setView = !1);
                return this
            },
            _handleGeolocationError: function(a) {
                var b = a.code;
                a = a.message || (b === 1 ? "permission denied" : b === 2 ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld();
                this.fire("locationerror", {
                    code: b,
                    message: "Geolocation error: " + a + "."
                })
            },
            _handleGeolocationResponse: function(a) {
                var b = a.coords.latitude
                  , c = a.coords.longitude
                  , d = new f.LatLng(b,c)
                  , e = 180 * a.coords.accuracy / 40075017
                  , g = e / Math.cos(f.LatLng.DEG_TO_RAD * b);
                b = f.latLngBounds([b - e, c - g], [b + e, c + g]);
                e = this._locateOptions;
                if (e.setView) {
                    c = Math.min(this.getBoundsZoom(b), e.maxZoom);
                    this.setView(d, c)
                }
                g = {
                    latlng: d,
                    bounds: b,
                    timestamp: a.timestamp
                };
                for (var h in a.coords)
                    typeof a.coords[h] === "number" && (g[h] = a.coords[h]);
                this.fire("locationfound", g)
            }
        })
    }
    )(window, document)
}
), null);
