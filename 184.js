if (self.CavalryLogger) {
    CavalryLogger.start_js(["WQ5Wc"]);
}

__d("dangerouslyBypassDispatchError", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
            c[d - 1] = arguments[d];
        setTimeout(function() {
            a.apply(null, c)
        }, 0)
    }
}
), null);
__d("VerseSidebarUtil", ["Bootloader", "CSS", "DOM", "ge"], (function(a, b, c, d, e, f) {
    "use strict";
    f.show = a;
    f.remove = h;
    f.removeAndHideMessenger = c;
    function g() {
        var a = document.documentElement || "";
        b("CSS").addClass(a, "buddylistOff")
    }
    function a() {
        g();
        if (b("ge")("pagelet_verse_sidebar"))
            return;
        b("Bootloader").loadModules(["UIPagelet"], function(a) {
            var c = b("DOM").create("div", {
                id: "pagelet_verse_sidebar"
            });
            b("DOM").appendContent(document.body, c);
            a.loadFromEndpoint("VerseSidebarPagelet", "pagelet_verse_sidebar", {
                path: ""
            })
        }, "VerseSidebarUtil")
    }
    function h() {
        var a = b("ge")("pagelet_verse_sidebar");
        a && b("DOM").remove(a)
    }
    function c() {
        g(),
        h()
    }
}
), null);
__d("PrivacyLiteFlyoutBootloader", ["regeneratorRuntime", "Promise", "Deferred", "JSResource"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = !1
      , h = null
      , i = null
      , j = {
        loadFlyout: function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(j._loadFlyout(!1));
                    case 2:
                    case "end":
                        return a.stop()
                    }
            }, null, this)
        },
        loadFlyoutAsChild: function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(j._loadFlyout(!0));
                    case 2:
                    case "end":
                        return a.stop()
                    }
            }, null, this)
        },
        _loadFlyout: function(a) {
            var c, d, e, f, h, i, j, k, l, m;
            return b("regeneratorRuntime").async(function(n) {
                while (1)
                    switch (n.prev = n.next) {
                    case 0:
                        if (!g) {
                            n.next = 2;
                            break
                        }
                        return n.abrupt("return");
                    case 2:
                        g = !0;
                        n.next = 5;
                        return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(), this._getDeferredFlyoutElements().getPromise(), this._getDeferredFooterElements().getPromise()]));
                    case 5:
                        c = n.sent,
                        d = c[0],
                        e = c[1],
                        f = e.flyout,
                        h = e.flyoutRoot,
                        i = c[2],
                        j = i.footer,
                        k = i.event,
                        l = i.settingsExitPoint,
                        m = i.basicsExitPoint,
                        d.setIsChild(!!a),
                        d.registerFlyoutToggler(f, h),
                        d.registerSettingsAndBasicsLinkLogging(j, k, l, m),
                        d.loadBody();
                    case 19:
                    case "end":
                        return n.stop()
                    }
            }, null, this)
        },
        setChildFlyoutVisible: function(a) {
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(h) {
                while (1)
                    switch (h.prev = h.next) {
                    case 0:
                        if (!(!g && !a)) {
                            h.next = 2;
                            break
                        }
                        return h.abrupt("return");
                    case 2:
                        h.next = 4;
                        return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(), this._getDeferredFlyoutElements().getPromise()]));
                    case 4:
                        c = h.sent;
                        d = c[0];
                        e = c[1];
                        f = e.flyout;
                        e._flyoutRoot;
                        if (!(a === d.isFlyoutVisible())) {
                            h.next = 11;
                            break
                        }
                        return h.abrupt("return");
                    case 11:
                        d.setChildFlyoutVisible(a),
                        d.onToggle(f, a ? "show" : "hide");
                    case 13:
                    case "end":
                        return h.stop()
                    }
            }, null, this)
        },
        _getDeferredFlyoutElements: function() {
            h == null && (h = new (b("Deferred"))());
            return h
        },
        registerFlyoutElements: function(a, b) {
            this._getDeferredFlyoutElements().resolve({
                flyout: a,
                flyoutRoot: b
            })
        },
        _getDeferredFooterElements: function() {
            i == null && (i = new (b("Deferred"))());
            return i
        },
        registerFooterElements: function(a, b, c, d) {
            this._getDeferredFooterElements().resolve({
                footer: a,
                event: b,
                settingsExitPoint: c,
                basicsExitPoint: d
            })
        }
    };
    e.exports = j
}
), null);
__d("HelpLiteFlyout", ["Arbiter", "AsyncRequest", "CSS", "DOM", "Event", "HelpLiteFlyoutBootloader", "PrivacyLiteFlyoutBootloader", "Toggler", "ge", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    f.loadBody = a;
    f.refreshHelp = h;
    f.resetHelp = c;
    f.showHelp = i;
    f.openPrivacy = d;
    f.registerPrivacyBackLink = e;
    f.registerFlyoutToggler = j;
    f.isFlyoutVisible = k;
    f.setFlyoutVisible = l;
    var g = null;
    function a() {
        b("ge")("fbHelpLiteFlyoutLoading") && new (b("AsyncRequest"))("/help/ajax/contextual/").setData({
            page_type: b("HelpLiteFlyoutBootloader").getHelpType()
        }).send()
    }
    function h() {
        b("ge")("fbHelpLiteFlyoutLoading") && new (b("AsyncRequest"))("/help/ajax/contextual/").setData({
            page_type: b("HelpLiteFlyoutBootloader").getHelpType(),
            is_refresh: !0
        }).send()
    }
    function c(a) {
        var c = b("ge")("fbContextualHelpContent");
        c && b("DOM").replace(c, a);
        k() ? h() : b("ifRequired")("WorkGalahadQuickHelpNub.react", function() {
            h()
        })
    }
    function i() {
        b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),
        b("CSS").show(b("ge")("fbHelpLiteFlyout"))
    }
    function d() {
        b("CSS").hide(b("ge")("fbHelpLiteFlyout")),
        b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),
        b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)
    }
    function e(a) {
        b("Event").listen(a, "click", i)
    }
    function j(a, c) {
        g = c;
        a = b("Toggler").createInstance(a);
        a.setSticky(!1);
        b("Toggler").listen("hide", c, function(a) {
            b("Arbiter").inform("layer_hidden", {
                type: "HELP_LITE"
            }),
            b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)
        });
        b("Toggler").listen("show", c, function(a) {
            b("Arbiter").inform("layer_shown", {
                type: "HELP_LITE"
            }),
            i()
        })
    }
    function k() {
        return g && b("Toggler").getActive() === g
    }
    function l(a) {
        a && b("HelpLiteFlyoutBootloader").loadFlyout(),
        a ? b("Toggler").show(g) : b("Toggler").hide(g)
    }
}
), null);
__d("FantaHider", ["ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    f.hide = a;
    f.unhide = c;
    function a() {
        b("ifRequired")("FantaTabsSlimApp", function(a) {
            a.hide()
        }, function() {
            b("ifRequired")("FantaTabsReactApp", function(a) {
                a.hide()
            })
        })
    }
    function c() {
        b("ifRequired")("FantaTabsSlimApp", function(a) {
            a.unhide()
        }, function() {
            b("ifRequired")("FantaTabsReactApp", function(a) {
                a.unhide()
            })
        })
    }
}
), null);
__d("Popup", ["isTruthy"], (function(a, b, c, d, e, f) {
    f.open = a;
    function a(a, c, d, e) {
        var f = [];
        b("isTruthy")(c) && f.push("width=" + c);
        b("isTruthy")(d) && f.push("height=" + d);
        var g = document.body;
        if (g != null && c != null && c !== 0 && d != null && d !== 0) {
            var h = "screenX"in window ? window.screenX : window.screenLeft
              , i = "screenY"in window ? window.screenY : window.screenTop
              , j = "outerWidth"in window ? window.outerWidth : g.clientWidth;
            g = "outerHeight"in window ? window.outerHeight : g.clientHeight - 22;
            h = Math.floor(h + (j - c) / 2);
            j = Math.floor(i + (g - d) / 2.5);
            f.push("left=" + h);
            f.push("top=" + j)
        }
        f.push("scrollbars");
        return window.open(a, e != null && e !== "" ? e : "_blank", f.join(","))
    }
}
), null);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "FlowMigrationUtilsForLegacyFiles", "Layer", "Popup", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    f.init = c;
    f._resizeCheck = h;
    f._getDocumentSize = i;
    f.open = d;
    var g = {
        allowShrink: !0,
        strategy: "vector",
        timeout: 100,
        widthElement: null
    };
    f._opts = g;
    function c(a) {
        Object.assign(g, a),
        window.setInterval(h, g.timeout)
    }
    function h() {
        var a = b("getViewportDimensions")()
          , c = i()
          , d = b("Layer").getTopmostLayer();
        if (d) {
            d = (d = d.getRoot()) == null ? void 0 : d.firstChild;
            d || b("FlowMigrationUtilsForLegacyFiles").invariantViolation("topMostLayer.getRoot().firstChild is null.");
            var e = b("DOMDimensions").getElementDimensions(d);
            e.height += b("DOMDimensions").measureElementBox(d, "height", !0, !0, !0);
            e.width += b("DOMDimensions").measureElementBox(d, "width", !0, !0, !0);
            c.height = Math.max(c.height, e.height);
            c.width = Math.max(c.width, e.width)
        }
        d = c.height - a.height;
        e = c.width - a.width;
        e < 0 && b("FlowMigrationUtilsForLegacyFiles").isFalsy(g.widthElement) && (e = 0);
        e = e > 1 ? e : 0;
        b("FlowMigrationUtilsForLegacyFiles").isFalsy(g.allowShrink) && d < 0 && (d = 0);
        if (d || e)
            try {
                window.console && window.console.firebug,
                window.resizeBy(e, d),
                e && window.moveBy(e / -2, 0)
            } catch (a) {}
    }
    function i() {
        var c = b("DOMDimensions").getDocumentDimensions();
        if (g.strategy === "offsetHeight") {
            var d = document.body;
            if (!d)
                b("FlowMigrationUtilsForLegacyFiles").invariantViolation("document.body is null.");
            else {
                c.height = (d = d.offsetHeight) != null ? d : 0
            }
        }
        if (b("FlowMigrationUtilsForLegacyFiles").isFalsy(g.widthElement) && typeof g.widthElement === "string") {
            d = b("DOMQuery").scry(document.body, g.widthElement)[0];
            d && (c.width = b("DOMDimensions").getElementDimensions(d).width)
        }
        d = a.Dialog;
        d && d.max_bottom && d.max_bottom > c.height && (c.height = d.max_bottom);
        return c
    }
    function d(a, c, d, e) {
        return b("Popup").open(a, d, c, e)
    }
}
), null);
__d("ReactDispatcher_DEPRECATED", ["Dispatcher_DEPRECATED", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.dispatch = function(c) {
            var d = this;
            b("ReactDOM").unstable_batchedUpdates(function() {
                a.prototype.dispatch.call(d, c)
            })
        }
        ;
        return c
    }(b("Dispatcher_DEPRECATED"));
    e.exports = a
}
), null);
