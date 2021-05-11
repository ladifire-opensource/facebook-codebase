if (self.CavalryLogger) {
    CavalryLogger.start_js(["fgw6J"]);
}

__d("HelpLink.react", ["fbt", "React", "TooltipLink.react", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("TooltipLink.react"), babelHelpers["extends"]({
                "aria-label": this.props.label
            }, this.props, {
                className: b("joinClasses")(this.props.className, "uiHelpLink mls"),
                children: void 0
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = {
        href: "#",
        label: g._("Tr\u1ee3 gi\u00fap")
    }
}
), null);
__d("XUIError", ["cx", "invariant", "Promise", "ARIA", "Bootloader", "CSS", "DataStore", "DOM", "Event", "Parent", "filterObject", "getActiveElement", "getElementText", "isNode", "memoize", "nl2br", "promiseDone"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "data-xui-error-alignh"
      , j = "XUIError"
      , k = "data-xui-error"
      , l = "_1tp7"
      , m = "data-xui-error-position";
    b("Event").listen(document.documentElement, "mouseover", function(a) {
        if (b("Parent").byClass(b("getActiveElement")(), l))
            return;
        a = b("Parent").byClass(a.getTarget(), l);
        a ? v(a) : w()
    });
    b("Event").listen(document.documentElement, "focusin", function(a) {
        a = b("Parent").byClass(a.getTarget(), l);
        a ? v(a) : w()
    });
    b("Event").listen(document.documentElement, "focusout", function(a) {
        w()
    });
    var n = b("memoize")(function() {
        return new (b("Promise"))(function(a, c) {
            b("Bootloader").loadModules(["React", "ReactDOM", "XUIErrorDialogImpl"], function(b, c, d) {
                a(babelHelpers["extends"]({
                    React: b,
                    ReactDOM: c
                }, d.getNewDialog()))
            }, "XUIError")
        }
        )
    })
      , o = null;
    function p(a) {
        return babelHelpers["extends"]({
            message: a.getAttribute(k),
            position: a.getAttribute(m),
            alignh: a.getAttribute(i)
        }, b("DataStore").get(a, j))
    }
    function q(a, c) {
        b("DataStore").set(a, j, c)
    }
    function r(a, c) {
        b("DataStore").set(a, j, babelHelpers["extends"]({}, b("DataStore").get(a, j), c))
    }
    function s(a) {
        b("DataStore").remove(a, j)
    }
    var t = !1
      , u = !1;
    function v(a) {
        b("promiseDone")(n(), function(c) {
            var d = c.React
              , e = c.ReactDOM
              , f = c.dialog;
            c = c.dialogMessageNode;
            var g = p(a)
              , i = g.message;
            if (i == null)
                return;
            d = d.isValidElement(i);
            t && !d && e.unmountComponentAtNode(c);
            d ? e.render(i, c) : (typeof i === "string" || b("isNode")(i) || h(0, 652),
            typeof i === "string" && (i = b("nl2br")(i)),
            b("DOM").setContent(c, i));
            t = d;
            f.setContext(a).setPosition(g.position || "right").setAlignment(g.alignh || (g.position === "above" || g.position === "below" ? "right" : null)).show();
            b("ARIA").notify(b("getElementText")(c));
            o = a
        }),
        u = !0
    }
    function w() {
        if (!u)
            return;
        b("promiseDone")(n(), function(a) {
            a.React;
            var b = a.ReactDOM
              , c = a.dialog;
            a = a.dialogMessageNode;
            if (!o)
                return;
            t && (b.unmountComponentAtNode(a),
            t = !1);
            c.hide();
            o = null
        })
    }
    function x(a) {
        b("DOM").contains(a, b("getActiveElement")()) && v(a)
    }
    a = {
        set: function(a) {
            var c = a.target
              , d = a.message
              , e = a.position;
            a = a.alignh;
            d !== null || h(0, 653);
            b("CSS").addClass(c, l);
            r(c, b("filterObject")({
                message: d,
                position: e,
                alignh: a
            }, function(a) {
                return a !== void 0
            }));
            x(c)
        },
        clear: function(a) {
            b("CSS").removeClass(a, l),
            a.removeAttribute(k),
            s(a),
            a === o && w()
        },
        updatePosition: function() {
            if (!u)
                return;
            b("promiseDone")(n(), function(a) {
                a = a.dialog;
                o && a.updatePosition()
            })
        },
        __setReactError: function(a, b) {
            var c = b.message
              , d = b.position;
            b = b.alignh;
            c !== null || h(0, 653);
            q(a, {
                message: c,
                position: d,
                alignh: b
            });
            x(a)
        },
        __clearReactError: function(a) {
            s(a),
            a === o && w()
        }
    };
    e.exports = a
}
), null);
__d("GHLTestElement", ["csx", "invariant", "BanzaiODS", "Parent", "URI", "containsNode", "getElementPosition", "gkx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    a = function(a, c) {
        var d = Array.from(a.querySelectorAll("img"));
        if (b("gkx")("1059877")) {
            var e = (i || (i = b("URI"))).getRequestURI();
            e = e != null ? e.getPath() : "";
            var f = "images" + c
              , g = "length_" + String(d.length);
            m(f + "." + g);
            m(f + ".path_" + e + "." + g)
        }
        d.length > 0 || h(0, 13937);
        f = d.filter(j);
        if (f.length === 0) {
            b("gkx")("1059877") && j(a) && m("images_removed_but_element_exists");
            m("skipping_check_for_incompatible_element" + c);
            return !1
        }
        e = f.filter(function(a) {
            a = b("getElementPosition")(a);
            return a.width > 0 || a.height > 0
        });
        g = e.length === 0;
        return g && !k(a)
    }
    ;
    var j = function(a) {
        var c;
        return b("containsNode")(a == null ? void 0 : (c = a.ownerDocument) == null ? void 0 : c.documentElement, a)
    }
      , k = function(a) {
        return !!b("Parent").bySelector(a, l)
    }
      , l = [".hidden_elem", "._5ds2", "._i6m"].join(",")
      , m = function(a) {
        return b("BanzaiODS").bumpEntityKey(2966, "feed_ads", "GHLTestElement.testElementI." + a)
    };
    e.exports = {
        testElementI: a
    }
}
), null);
__d("ghlTestUBT", ["requireCond", "cr:1278084", "cr:1543261"], (function(a, b, c, d, e, f) {
    "use strict";
    b("cr:1543261") && b("cr:1543261")();
    a = b("cr:1278084");
    e.exports = a
}
), null);
__d("NonBlockingIFrame", ["Promise", "DOM", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = {}, h, i;
    function j(a, c) {
        a === void 0 && (a = g);
        c === void 0 && (c = document.body);
        var d = {
            className: "nonBlockingIframe",
            width: 0,
            height: 0,
            frameborder: 0,
            scrolling: "no",
            "aria-hidden": "true"
        };
        a !== g && (d.src = a);
        d = b("DOM").create("iframe", d);
        d.style.left = "-1000px";
        d.style.position = "absolute";
        b("DOM").appendContent(c, d);
        a === g && (d.contentDocument.open(),
        d.contentDocument.close());
        return d
    }
    function k() {
        return new (b("Promise"))(function(a) {
            h || (h = j()),
            h.contentDocument.readyState === "complete" ? a(h) : (i || (i = new (b("Promise"))(function(a) {
                h.contentWindow.onload = b("TimeSlice").guard(function() {
                    a(h)
                }, "NonBlockingIFrame window.onload")
            }
            )),
            a(i))
        }
        )
    }
    a = {
        loadImage: function(a) {
            return k().then(function(c) {
                return new (b("Promise"))(function(d, e) {
                    var f = c.contentWindow.Image
                      , g = new f();
                    g.onload = b("TimeSlice").guard(function() {
                        d(g)
                    }, "NonBlockingIFrame image.onload");
                    g.onerror = b("TimeSlice").guard(function() {
                        e(g)
                    }, "NonBlockingIFrame image.onerror");
                    g.onabort = b("TimeSlice").guard(function() {
                        e(g)
                    }, "NonBlockingIFrame image.onabort");
                    g.src = a
                }
                )
            })
        },
        loadIFrame: function(a) {
            a === void 0 && (a = g);
            return k().then(function(b) {
                b = b.contentDocument.body;
                return j(a, b)
            })
        }
    };
    e.exports = a
}
), null);
__d("GHLDelay", ["AdImpressionLoggingConfig"], (function(a, b, c, d, e, f) {
    var g = null;
    a = {
        getEnabled: function() {
            return g === null ? b("AdImpressionLoggingConfig").enableDelayedHiddenCheck : g
        },
        setEnabled: function(a) {
            g = a
        }
    };
    e.exports = a
}
), null);
