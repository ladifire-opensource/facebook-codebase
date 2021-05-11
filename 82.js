if (self.CavalryLogger) {
    CavalryLogger.start_js(["DARw4"]);
}

__d("coalesce", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a() {
        for (var a = 0; a < arguments.length; ++a)
            if ((a < 0 || arguments.length <= a ? void 0 : arguments[a]) != null)
                return a < 0 || arguments.length <= a ? void 0 : arguments[a];
        return null
    }
}
), null);
__d("OnVisible", ["Arbiter", "DOM", "Event", "Parent", "Run", "SubscriptionsHandler", "Vector", "ViewportBounds", "coalesce", "killswitch", "queryThenMutateDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [], h = 0, i = [], j, k = null, l, m;
    function n() {
        g.forEach(function(a) {
            a.remove()
        }),
        k && (k.release(),
        k = null),
        h = 0,
        g.length = 0
    }
    function o() {
        if (!g.length) {
            n();
            return
        }
        i.length = 0;
        j = b("Vector").getScrollPosition().y;
        l = b("Vector").getViewportDimensions().y;
        m = b("ViewportBounds").getTop();
        var a = g.length;
        for (var c = 0; c < a; ++c) {
            var d = g[c];
            isNaN(d.elementHeight) && i.push(c);
            d.elementHeight = b("Vector").getElementDimensions(d.element).y;
            d.elementPos = b("Vector").getElementPosition(d.element);
            d.hidden = b("Parent").byClass(d.element, "hidden_elem");
            d.scrollArea && (d.scrollAreaHeight = b("Vector").getElementDimensions(d.scrollArea).y,
            d.scrollAreaY = b("Vector").getElementPosition(d.scrollArea).y)
        }
        h = a
    }
    function p() {
        for (var a = Math.min(g.length, h) - 1; a >= 0; --a) {
            var b = g[a];
            if (!b.elementPos || b.removed) {
                g.splice(a, 1);
                continue
            }
            if (b.hidden)
                continue;
            var c = b.buffer
              , d = !1
              , e = j + l + c
              , f = b.elementPos.y;
            if (e > f) {
                var k = j + m - c
                  , n = f + b.elementHeight;
                d = !b.strict || k < f && e > n;
                if (d && b.scrollArea) {
                    k = b.scrollAreaY + b.scrollAreaHeight + c;
                    d = f >= b.scrollAreaY - c && f < k
                }
            }
            (b.inverse ? !d : d) && (b.remove(),
            b.handler(i.indexOf(a) !== -1))
        }
    }
    function q() {
        r();
        if (g.length)
            return;
        k == null && (k = new (b("SubscriptionsHandler"))(),
        k.addSubscriptions(b("Event").listen(window, "scroll", r), b("Event").listen(window, "resize", r), b("Arbiter").subscribe("dom-scroll", r)))
    }
    function r() {
        b("queryThenMutateDOM")(o, p, "OnVisible/positionCheck")
    }
    a = function() {
        function a(a, c, d, e, f, h) {
            this.element = a,
            this.handler = c,
            this.strict = d,
            this.buffer = b("coalesce")(e, 300),
            this.inverse = b("coalesce")(f, !1),
            this.scrollArea = h || null,
            this.scrollArea && (this.scrollAreaListener = this.$1()),
            g.length === 0 && (b("killswitch")("ON_VISIBLE_COMPONENT_CLEANUP") ? b("Run").onLeave(n) : b("Run").onCleanupOrLeave(a, n)),
            q(),
            g.push(this)
        }
        var c = a.prototype;
        c.remove = function() {
            if (this.removed)
                return;
            this.removed = !0;
            this.scrollAreaListener && this.scrollAreaListener.remove()
        }
        ;
        c.reset = function() {
            this.elementHeight = null,
            this.removed = !1,
            this.scrollArea && (this.scrollAreaListener = this.$1()),
            g.indexOf(this) === -1 && g.push(this),
            q()
        }
        ;
        c.setBuffer = function(a) {
            this.buffer = a,
            r()
        }
        ;
        c.checkBuffer = function() {
            r()
        }
        ;
        c.getElement = function() {
            return this.element
        }
        ;
        c.$1 = function() {
            return b("Event").listen(b("DOM").find(this.scrollArea, ".uiScrollableAreaWrap"), "scroll", this.checkBuffer)
        }
        ;
        return a
    }();
    Object.assign(a, {
        checkBuffer: r
    });
    e.exports = a
}
), null);
__d("PopoverAsyncMenu", ["Bootloader", "Event", "KeyStatus", "PopoverMenu", "VirtualCursorStatus", "setImmediate"], (function(a, b, c, d, e, f) {
    var g = {}
      , h = 0;
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e, f, i, j) {
            c = a.call(this, c, d, null, i) || this;
            c._endpoint = f;
            c._endpointData = j || {};
            c._loadingMenu = e;
            c._instanceId = h++;
            g[c._instanceId] = babelHelpers.assertThisInitialized(c);
            c._mouseoverListener = b("Event").listen(d, "mouseover", c.fetchMenu.bind(babelHelpers.assertThisInitialized(c)));
            return c
        }
        var d = c.prototype;
        d._onLayerInit = function() {
            var a = this;
            !this._menu && this._loadingMenu && this.setMenu(this._loadingMenu);
            this._popover.getLayer().subscribe("key", this._handleKeyEvent.bind(this));
            this._triggerInfo = {
                isKeyDown: b("KeyStatus").isKeyDown(),
                isVirtualCursorTriggered: b("VirtualCursorStatus").isVirtualCursorTriggered()
            };
            b("setImmediate")(function() {
                return a.fetchMenu()
            })
        }
        ;
        d._onPopoverHide = function() {
            a.prototype._onPopoverHide.call(this),
            this._triggerInfo = null
        }
        ;
        d._refetchMenu = function() {
            this._menu && (this._menu.destroy(),
            this._fetched = !1,
            this._mouseoverListener = b("Event").listen(this.getTriggerElem(), "mouseover", this.fetchMenu.bind(this)))
        }
        ;
        d.fetchMenu = function() {
            var a = this;
            if (this._fetched)
                return;
            b("Bootloader").loadModules(["AsyncRequest"], function(b) {
                new b().setURI(a._endpoint).setData(Object.assign({
                    pmid: a._instanceId
                }, a._endpointData)).send()
            }, "PopoverAsyncMenu");
            this._fetched = !0;
            this._mouseoverListener && (this._mouseoverListener.remove(),
            this._mouseoverListener = null)
        }
        ;
        d._setFocus = function(a) {
            var b = this._triggerInfo || {}
              , c = b.isKeyDown;
            b = b.isVirtualCursorTriggered;
            this.setInitialFocus(a, c || b);
            this._triggerInfo = null
        }
        ;
        c.setMenu = function(a, b) {
            a = g[a];
            a.setMenu(b);
            a._setFocus(b)
        }
        ;
        c.disableTypeaheadActivationForInstance = function(a) {
            a = g[a];
            a._isTypeaheadActivationDisabled = !0
        }
        ;
        c.getInstance = function(a) {
            return g[a]
        }
        ;
        c.getInstanceByTriggerElem = function(a) {
            var b = null;
            Object.keys(g).forEach(function(c) {
                g[c]._triggerElem == a && (b = g[c])
            });
            return b
        }
        ;
        return c
    }(b("PopoverMenu"));
    e.exports = a
}
), null);
__d("TidyArbiterMixin", ["Arbiter", "ArbiterMixin", "Run"], (function(a, b, c, d, e, f) {
    a = {};
    Object.assign(a, b("ArbiterMixin"), {
        _getArbiterInstance: function() {
            this._arbiter || (this._arbiter = new (b("Arbiter"))(),
            b("Run").onLeave(function() {
                delete this._arbiter
            }
            .bind(this)));
            return this._arbiter
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("TidyArbiter", ["TidyArbiterMixin"], (function(a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("TidyArbiterMixin"));
    c = a;
    e.exports = c
}
), null);
__d("isNumberLike", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
}
), null);
__d("PopoverLoadingMenu", ["cx", "BehaviorsMixin", "DOM", "PopoverMenuInterface", "joinClasses"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this) || this;
            c._config = b || {};
            c._theme = b.theme || {};
            return c
        }
        var d = c.prototype;
        d.getRoot = function() {
            if (!this._root) {
                var a;
                this._root = (a = b("DOM")).create("div", {
                    className: b("joinClasses")("_54nq", this._config.className, this._theme.className)
                }, a.create("div", {
                    className: "_54ng"
                }, a.create("div", {
                    className: "_54nf _54af"
                }, a.create("span", {
                    className: "_54ag"
                }))));
                this._config.behaviors && this.enableBehaviors(this._config.behaviors)
            }
            return this._root
        }
        ;
        return c
    }(b("PopoverMenuInterface"));
    Object.assign(a.prototype, b("BehaviorsMixin"), {
        _root: null
    });
    e.exports = a
}
), null);
__d("ContextualLayerPositionClassOnContext", ["cx", "CSS"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";
        function a(a) {
            this._layer = a
        }
        var c = a.prototype;
        c.enable = function() {
            this._subscription = this._layer.subscribe("reposition", this._updateClassName.bind(this)),
            this._layer.isShown() && this._updateClassName()
        }
        ;
        c.disable = function() {
            this._subscription.unsubscribe(),
            this._subscription = null,
            this._prevClassName && (b("CSS").removeClass(this._layer.getContext(), this._prevClassName),
            this._prevClassName = null)
        }
        ;
        c._updateClassName = function(a, c) {
            a = this._layer.getContext();
            c = h(c);
            if (this._prevClassName) {
                if (this._prevClassName === c)
                    return;
                b("CSS").removeClass(a, this._prevClassName)
            }
            b("CSS").addClass(a, c);
            this._prevClassName = c
        }
        ;
        return a
    }();
    function h(a) {
        var b = a.getAlignment();
        a = a.getPosition();
        if (a === "below")
            if (b === "left")
                return "_nk";
            else if (b === "right")
                return "_nl";
            else
                return "_nm";
        else if (a === "above")
            if (b === "left")
                return "_nn";
            else if (b === "right")
                return "_no";
            else
                return "_np";
        else if (a === "left")
            return "_nq";
        else
            return "_nr"
    }
    Object.assign(a.prototype, {
        _subscription: null,
        _prevClassName: null
    });
    e.exports = a
}
), null);
__d("onViewportChanged", ["EventListener", "emptyFunction", "getViewportDimensions", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = [], h = !1, i = null, j, k;
    function l() {
        var a = b("getViewportDimensions").withoutScrollbars();
        return {
            top: 0,
            bottom: a.height,
            left: 0,
            right: a.width
        }
    }
    function a(a, c) {
        c = {
            transform: c || b("emptyFunction").thatReturnsArgument,
            callback: a,
            needsUpdate: !0
        };
        g.push(c);
        s();
        n();
        return {
            remove: m.bind(null, c),
            scheduleCheck: q.bind(null, c)
        }
    }
    function m(a) {
        a = g.indexOf(a);
        a !== -1 && (g.splice(a, 1),
        g.length === 0 && (o(),
        i = null))
    }
    function n() {
        k || (k = b("EventListener").capture(window, "scroll", r),
        j = b("EventListener").capture(window, "resize", p))
    }
    function o() {
        k !== null && j !== null && (k.remove(),
        j.remove(),
        k = j = null)
    }
    function p() {
        i = null,
        r()
    }
    function q(a) {
        a.needsUpdate = !0,
        s()
    }
    function r() {
        g.map(function(a) {
            return a.needsUpdate = !0
        }),
        s()
    }
    function s() {
        h || (h = !0,
        b("requestAnimationFrame")(function() {
            h = !1,
            u()
        }))
    }
    function t(a) {
        if (a.needsUpdate) {
            a.needsUpdate = !1;
            return !0
        }
        return !1
    }
    function u() {
        i || (i = l());
        var a = g.filter(t)
          , b = a.map(function(a) {
            return a.transform.call(null, i)
        });
        a.forEach(function(a, c) {
            return a.callback.call(null, b[c])
        })
    }
}
), null);
__d("HashtagSpan.react", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("span", babelHelpers["extends"]({}, this.props, {
                "data-offset-key": this.props.offsetKey,
                className: "_5zk7",
                spellCheck: !1,
                children: this.props.children
            }))
        }
        ;
        return b
    }(h.Component);
    e.exports = a
}
), null);
__d("isDevelopersURI", ["isFacebookURI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return b("isFacebookURI")(a) && a.getSubdomain() === "developers"
    }
}
), null);
__d("FluxMapStore", ["invariant", "FluxReduceStore", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return b("immutable").Map()
        }
        ;
        d.at = function(a) {
            this.has(a) || g(0, 465, a);
            return this.get(a)
        }
        ;
        d.has = function(a) {
            return this.getState().has(a)
        }
        ;
        d.get = function(a) {
            return this.getState().get(a)
        }
        ;
        d.getAll = function(a, c) {
            var d = this
              , e = b("immutable").Set(a)
              , f = c || b("immutable").Map();
            return f.withMutations(function(a) {
                for (var b = f, c = Array.isArray(b), g = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var h;
                    if (c) {
                        if (g >= b.length)
                            break;
                        h = b[g++]
                    } else {
                        g = b.next();
                        if (g.done)
                            break;
                        h = g.value
                    }
                    h = h;
                    h = h[0];
                    (!e.has(h) || !d.has(h)) && a["delete"](h)
                }
                for (var h = e, g = Array.isArray(h), c = 0, h = g ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    if (g) {
                        if (c >= h.length)
                            break;
                        b = h[c++]
                    } else {
                        c = h.next();
                        if (c.done)
                            break;
                        b = c.value
                    }
                    b = b;
                    d.has(b) && a.set(b, d.at(b))
                }
            })
        }
        ;
        return c
    }(b("FluxReduceStore"));
    e.exports = a;
    a.__moduleID = e.id
}
), null);
__d("InstanceProxy", [], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getInstance = function() {
            return this.$1
        }
        ;
        b.setInstance = function(a) {
            this.$1 = a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("setByPath", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (d === b.length - 1) {
                a[e] = c;
                return
            }
            !Object.prototype.hasOwnProperty.call(a, e) ? a[e] = {} : a[e] == null ? a[e] = {} : Array.isArray(a[e]) || Object.prototype.toString.call(a[e]) === "[object Object]" || g(0, 1041, a[e]);
            a = a[e]
        }
    }
}
), null);
