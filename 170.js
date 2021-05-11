if (self.CavalryLogger) {
    CavalryLogger.start_js(["HQiKh"]);
}

__d("FBOverlayBase.react", ["React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return g.Children.only(this.props.children)
        }
        ;
        return b
    }(g.Component);
    e.exports = a
}
), null);
__d("FBOverlayContainer.react", ["cx", "invariant", "FBOverlayBase.react", "FBOverlayElement.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    function a(a, c) {
        return i.jsx("div", babelHelpers["extends"]({}, a, {
            ref: c,
            className: b("joinClasses")(a.className, "_23n-"),
            children: a.children
        }))
    }
    c = i.forwardRef(a);
    c.propTypes = {
        children: function(a, c) {
            a = a[c];
            var d = 0;
            i.Children.forEach(a, function(a) {
                if (a === null || a === void 0)
                    return;
                switch (a.type) {
                case b("FBOverlayBase.react"):
                    d++;
                    break;
                case b("FBOverlayElement.react"):
                    break;
                default:
                    h(0, 435)
                }
            });
            d === 1 || h(0, 436)
        }
    };
    d = c;
    e.exports = d
}
), null);
__d("AbstractCheckboxInput.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = h.createRef(),
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.className
              , d = a.useLabel
              , e = a["data-testid"];
            e = babelHelpers.objectWithoutPropertiesLoose(a, ["className", "useLabel", "data-testid"]);
            return !d ? h.jsx("input", babelHelpers["extends"]({}, e, {
                "data-testid": void 0,
                className: c,
                ref: this.$1,
                type: "checkbox"
            })) : h.jsxs("label", {
                className: b("joinClasses")(c, "_kv1"),
                "data-testid": void 0,
                children: [h.jsx("input", babelHelpers["extends"]({}, e, {
                    className: null,
                    ref: this.$1,
                    type: "checkbox"
                })), h.jsx("span", {
                    className: "_66ul",
                    "data-hover": this.props.tooltip != null ? "tooltip" : null,
                    "data-tooltip-content": this.props.tooltip
                })]
            })
        }
        ;
        d.focusInput = function() {
            this.$1.current && this.$1.current.focus()
        }
        ;
        d.blurInput = function() {
            this.$1.current && this.$1.current.blur()
        }
        ;
        d.setIndeterminate = function() {
            this.$1.current && (this.$1.current.indeterminate = !0)
        }
        ;
        d.isIndeterminate = function() {
            return this.$1.current ? this.$1.current.indeterminate : !1
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = {
        useLabel: !0
    }
}
), null);
