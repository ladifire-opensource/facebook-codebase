if (self.CavalryLogger) {
    CavalryLogger.start_js(["4F5NG"]);
}

__d("KeyboardShortcutToken", ["KeyEventController"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c) {
            this.$1 = !0,
            this.key = a,
            this.handler = b,
            this.filter = c.filter,
            this.persistOnTransition = c.persistOnTransition,
            this.shortcutInfo = c.shortcutInfo,
            this.register()
        }
        var c = a.prototype;
        c.register = function() {
            var a = this;
            if (!this.$1)
                return;
            this.token = b("KeyEventController").registerKey(this.key, this.handler, this.filter, !1, function() {
                return a.persistOnTransition
            })
        }
        ;
        c.remove = function() {
            this.token.remove(),
            this.$1 = !1
        }
        ;
        c.unregister = function() {
            this.token.remove()
        }
        ;
        c.isActive = function() {
            return this.$1
        }
        ;
        c.getKey = function() {
            return this.key
        }
        ;
        c.getShortcutInfo = function() {
            return this.shortcutInfo
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("KeyboardShortcuts", ["csx", "cx", "fbt", "Arbiter", "BasicFBNux", "CSS", "Dock", "KeyboardShortcutToken", "KeyEventController", "Layer", "ModalLayer", "NavigationMessage", "PageTransitions", "Run", "emptyFunction", "translateKey"], (function(a, b, c, d, e, f, g, h, i) {
    a = {
        _arbiter: null,
        _hasTriggeredShortcut: !1,
        _flyoutNub: null,
        _nubNux: null,
        _nubNuxID: null,
        _tokenLayers: [],
        showInfo: b("emptyFunction"),
        register: function(a, c, d) {
            var e = this
              , f = d ? d : {};
            d = function(a, b) {
                c.call(e, a, b),
                f.allowDefault || a.prevent(),
                e._hasTriggeredShortcut || e._handleFirstShortcutTriggered()
            }
            ;
            var g = f.baseFilters || [b("KeyEventController").defaultFilter]
              , h = function(a, b) {
                for (var c = g, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var h;
                    if (d) {
                        if (e >= c.length)
                            break;
                        h = c[e++]
                    } else {
                        e = c.next();
                        if (e.done)
                            break;
                        h = e.value
                    }
                    h = h;
                    if (!h(a, b))
                        return !1
                }
                return !f.filter || f.filter(a, b)
            };
            a = new (b("KeyboardShortcutToken"))(a,d,{
                filter: h,
                persistOnTransition: f.persistOnTransition,
                shortcutInfo: f.shortcutInfo
            });
            this._tokenLayers.length || this._tokenLayers.push([]);
            this._tokenLayers[this._tokenLayers.length - 1].push(a);
            this.inform("token_added");
            return a
        },
        init: function() {
            var a = this;
            this._cleanup = this._cleanup.bind(this);
            b("Run").onLeave(this._cleanup);
            b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN, this._cleanup);
            b("Layer").subscribe("show", function(c, d) {
                d.hasBehavior(b("ModalLayer")) && a.pushLayer()
            });
            b("Layer").subscribe("hide", function(c, d) {
                d.hasBehavior(b("ModalLayer")) && a.popLayer()
            });
            this.register("SLASH", function() {
                var c = a._getFlyoutNub();
                c && b("Dock").toggle(c)
            }, {
                filter: function(a, b) {
                    return a.getModifiers().shift
                },
                persistOnTransition: !0,
                shortcutInfo: {
                    displayKeys: [b("translateKey")("?")],
                    description: i._("Hi\u1ec3n th\u1ecb h\u1ed9p tho\u1ea1i tr\u1ee3 gi\u00fap n\u00e0y")
                }
            })
        },
        _cleanup: function() {
            var a = this
              , c = [];
            this._tokenLayers.forEach(function(a) {
                var b = [];
                a.forEach(function(a) {
                    a.isActive() && b.push(a)
                });
                b.length && c.push(b)
            });
            this._tokenLayers = c;
            this.inform("cleanup");
            b("PageTransitions").registerCompletionCallback(function() {
                b("Run").onLeave(a._cleanup),
                b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN, a._cleanup)
            })
        },
        pushLayer: function() {
            var a = this._getTopLayer();
            a && a.forEach(function(a) {
                a.unregister()
            });
            this._tokenLayers.push([])
        },
        popLayer: function() {
            if (this._tokenLayers.length === 0)
                return;
            var a = this._tokenLayers.pop();
            a.forEach(function(a) {
                a.remove()
            });
            a = this._getTopLayer();
            a && a.forEach(function(a) {
                a.register()
            })
        },
        _getTopLayer: function() {
            return !this._tokenLayers.length ? null : this._tokenLayers[this._tokenLayers.length - 1]
        },
        _getBaseLayer: function() {
            return !this._tokenLayers.length ? null : this._tokenLayers[0]
        },
        getShortcutInfos: function() {
            var a = []
              , b = this._getBaseLayer();
            b && b.forEach(function(b) {
                var c = b.getShortcutInfo();
                b.isActive() && c != null && a.push(c)
            });
            return a
        },
        _getArbiterInstance: function() {
            this._arbiter || (this._arbiter = new (b("Arbiter"))());
            return this._arbiter
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        _handleFirstShortcutTriggered: function() {
            this._hasTriggeredShortcut = !0;
            var a = this._getFlyoutNub();
            a && (b("CSS").removeClass(a, "_ur5"),
            this._nubNux && this._nubNuxID && (this._nubNux.show(),
            b("BasicFBNux").onView(this._nubNuxID),
            this._nubNux.subscribe("hide", b("BasicFBNux").onDismiss.bind(this, this._nubNuxID))))
        },
        _getFlyoutNub: function() {
            this._flyoutNub || (this._flyoutNub = document.querySelector("#pagelet_dock ._rz3"));
            return this._flyoutNub
        },
        showShortcutFlyout: function() {
            this._hasTriggeredShortcut || this._handleFirstShortcutTriggered();
            var a = this._getFlyoutNub();
            a && b("Dock").show(a)
        },
        hasFlyoutToShow: function() {
            return this._getFlyoutNub() != null && this.getShortcutInfos().length > 0
        },
        initNUXEvent: function(a, b) {
            this._nubNux = a,
            this._nubNuxID = b
        }
    };
    a.init();
    c = a;
    e.exports = c
}
), null);
