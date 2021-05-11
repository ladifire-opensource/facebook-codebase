if (self.CavalryLogger) {
    CavalryLogger.start_js(["3ciFs"]);
}

__d("SimpleObjectsPool", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";
        function a(a) {
            this.$1 = a,
            this.$2 = []
        }
        var b = a.prototype;
        b.get = function() {
            if (this.$2.length)
                return this.$2.pop();
            else {
                var a = this.$1;
                return new a()
            }
        }
        ;
        b.put = function(a) {
            a instanceof this.$1 || g(0, 4227),
            this.$2.push(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("PersistentAnimationFrame", ["SimpleObjectsPool", "Visibility", "cancelAnimationFrame", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    var g = 16, h, i = {}, j = !0;
    function k() {
        h || (h = new (b("SimpleObjectsPool"))(l));
        return h
    }
    var l = function() {
        "use strict";
        function a() {
            var a = this;
            this.$1 = function() {
                a.callback(),
                a.$2(),
                k().put(a)
            }
        }
        a.request = function(a) {
            return !a ? 0 : k().get().request(a)
        }
        ;
        a.cancel = function(a) {
            if (a === 0)
                return;
            a = i[String(a)];
            a && a.cancel()
        }
        ;
        var c = a.prototype;
        c.request = function(a) {
            j && m();
            this.callback = a;
            this.hidden = b("Visibility").isHidden();
            this.hidden ? this.intID = setTimeout(this.$1, g) : this.intID = b("requestAnimationFrame")(this.$1);
            this.strID = String(this.intID);
            i[this.strID] = this;
            return this.intID
        }
        ;
        c.cancel = function() {
            this.strID && (this.hidden ? clearTimeout(this.intID) : b("cancelAnimationFrame")(this.intID),
            this.$2(),
            k().put(this))
        }
        ;
        c.$2 = function() {
            delete i[this.strID],
            delete this.intID,
            delete this.strID,
            delete this.callback,
            delete this.hidden
        }
        ;
        return a
    }();
    function m() {
        var a;
        j = !1;
        (a = b("Visibility")).addListener(a.HIDDEN, n);
        a.addListener(a.VISIBLE, n)
    }
    function n() {
        Object.keys(i).forEach(function(a) {
            a = i[a];
            var b = a.callback;
            a.cancel();
            b()
        })
    }
    e.exports = l
}
), null);
__d("requestPersistentAnimationFrame", ["PersistentAnimationFrame"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("PersistentAnimationFrame").request;
    e.exports = a
}
), null);
__d("ResizeEventHandler", ["requestPersistentAnimationFrame"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var c = this;
            this.$1 = !1;
            this.$2 = !1;
            this.handleEvent = function() {
                c.$2 === !1 && (c.$2 = !0,
                b("requestPersistentAnimationFrame")(c.$4))
            }
            ;
            this.$4 = function() {
                c.$2 = !1,
                c.$1 === !1 && c.$3()
            }
            ;
            this.$3 = a
        }
        var c = a.prototype;
        c.cancel = function() {
            this.$1 = !0
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ImageBlock.react", ["cx", "invariant", "LeftRight.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    function j(a) {
        a = a.children;
        a && (a.length === 2 || a.length === 3) || h(0, 97);
        a[0] !== null || h(0, 98);
        return a
    }
    function k(a) {
        return "img _8o" + (a === "small" ? " _8r" : "") + (a === "medium" ? " _8s" : "") + (a === "large" ? " _8t" : "")
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = j(this.props)
              , c = a[0]
              , d = a[1];
            a = a[2];
            var e = this.props
              , f = e.imageClassName
              , g = e.contentClassName
              , h = e.spacing;
            e = babelHelpers.objectWithoutPropertiesLoose(e, ["imageClassName", "contentClassName", "spacing"]);
            var l = c.props
              , m = l.className
              , n = l.alt
              , o = l.tabIndex;
            l = l.title;
            m = {
                className: b("joinClasses")(m, k(h), f)
            };
            c.type === "img" ? n === void 0 && (m.alt = "") : (c.type === "a" || c.type === "link") && o === void 0 && l === void 0 && c.props["aria-label"] === void 0 && (m.tabIndex = "-1",
            m["aria-hidden"] = "true");
            c = i.cloneElement(c, m);
            f = !0;
            this.props.flexibleContent != null && (f = this.props.flexibleContent);
            n = b("joinClasses")(g, (f ? "_42ef" : "") + (h === "small" ? " _8u" : ""));
            !a ? o = i.jsx("div", {
                className: n,
                children: d
            }) : o = i.jsxs(b("LeftRight.react"), {
                className: n,
                direction: b("LeftRight.react").DIRECTION.right,
                children: [d, a]
            });
            return i.jsxs(b("LeftRight.react"), babelHelpers["extends"]({}, e, {
                direction: b("LeftRight.react").DIRECTION.left,
                children: [c, o]
            }))
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.defaultProps = {
        spacing: "small"
    }
}
), null);
